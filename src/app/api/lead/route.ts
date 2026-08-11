import { NextResponse } from "next/server";
import { getDatabasePool } from "@/lib/db";

const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const TURNSTILE_ACTION = "lead-submit";
const TURNSTILE_VERIFY_URL =
  process.env.TURNSTILE_VERIFY_URL ||
  "https://turnstile-siteverify-future-ready-mba.bisol-future-ready-mba.workers.dev/siteverify";

const publicSiteUrl = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurereadymba.com");
  } catch {
    return new URL("https://futurereadymba.com");
  }
})();

const baseHostname = publicSiteUrl.hostname.replace(/^www\./, "");
const ALLOWED_HOSTNAMES = new Set([baseHostname, `www.${baseHostname}`]);
const ALLOWED_ORIGINS = new Set([
  `${publicSiteUrl.protocol}//${baseHostname}`,
  `${publicSiteUrl.protocol}//www.${baseHostname}`,
]);

type RateBucket = { count: number; resetAt: number };
const globalForLeadSecurity = globalThis as typeof globalThis & {
  embaLeadRateLimits?: Map<string, RateBucket>;
};
const rateLimits =
  globalForLeadSecurity.embaLeadRateLimits || new Map<string, RateBucket>();
globalForLeadSecurity.embaLeadRateLimits = rateLimits;

type LeadRow = {
  name: string;
  email: string;
  phone: string;
  company: string | null;
  participant_type: "malaysian" | "international";
  programme_interest: string | null;
  page_path: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  source: string;
};

type TurnstileResult = {
  success?: boolean;
  hostname?: string;
  action?: string;
  _worker?: { worker_version?: string };
};

class BodyTooLargeError extends Error {}

function json(body: object, status = 200, extraHeaders?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
      ...extraHeaders,
    },
  });
}

function requestIp(req: Request): string {
  const forwarded =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0];
  return (forwarded?.trim() || "unknown").slice(0, 64);
}

function consumeRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    if (rateLimits.size > 10_000) {
      for (const [key, bucket] of rateLimits) {
        if (bucket.resetAt <= now) rateLimits.delete(key);
      }
    }
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function originAllowed(req: Request): boolean {
  if (req.headers.get("sec-fetch-site") === "cross-site") return false;
  const value = req.headers.get("origin") || req.headers.get("referer");
  if (!value) return false;

  try {
    const url = new URL(value);
    if (ALLOWED_ORIGINS.has(url.origin)) return true;
    return (
      process.env.NODE_ENV !== "production" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    );
  } catch {
    return false;
  }
}

async function readJsonBody(req: Request): Promise<unknown> {
  const declaredLength = Number(req.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    throw new BodyTooLargeError();
  }

  if (!req.body) return null;
  const reader = req.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let raw = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new BodyTooLargeError();
    }
    raw += decoder.decode(value, { stream: true });
  }
  raw += decoder.decode();
  return JSON.parse(raw);
}

// oxlint-disable-next-line no-control-regex -- Control bytes are rejected deliberately.
const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F]/;

function text(
  value: unknown,
  maxLength: number,
  required = false,
): string | null | undefined {
  if (value === undefined || value === null || value === "") {
    return required ? undefined : null;
  }
  if (typeof value !== "string") return undefined;
  const normalized = value.trim();
  if (!normalized) return required ? undefined : null;
  if (normalized.length > maxLength || CONTROL_CHARACTERS.test(normalized)) {
    return undefined;
  }
  return normalized;
}

function parseLead(value: unknown): LeadRow | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const body = value as Record<string, unknown>;
  const name = text(body.name, 120, true);
  const email = text(body.email, 254, true);
  const phone = text(body.phone, 32, true);
  const company = text(body.company, 160);
  const programme = text(body.programme_interest, 160);
  const pagePath = text(body.page_path, 2048);
  const referrer = text(body.referrer, 2048);
  const source = text(body.source, 100) || "emba-hub";
  const utmSource = text(body.utm_source, 255);
  const utmMedium = text(body.utm_medium, 255);
  const utmCampaign = text(body.utm_campaign, 255);
  const utmTerm = text(body.utm_term, 255);
  const utmContent = text(body.utm_content, 255);
  const participantType = body.participant_type;

  if (!name || !email || !phone || body.consent !== "yes") return null;
  if (
    company === undefined ||
    programme === undefined ||
    pagePath === undefined ||
    referrer === undefined ||
    utmSource === undefined ||
    utmMedium === undefined ||
    utmCampaign === undefined ||
    utmTerm === undefined ||
    utmContent === undefined
  ) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!/^\+?[0-9().\-\s]{7,32}$/.test(phone) || phone.replace(/\D/g, "").length < 7) return null;
  if (participantType !== "malaysian" && participantType !== "international") return null;
  if (pagePath && !pagePath.startsWith("/")) return null;
  if (referrer) {
    try {
      const protocol = new URL(referrer).protocol;
      if (protocol !== "http:" && protocol !== "https:") return null;
    } catch {
      return null;
    }
  }

  return {
    name,
    email,
    phone,
    company,
    participant_type: participantType,
    programme_interest: programme,
    page_path: pagePath,
    referrer,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
    source,
  };
}

async function verifyTurnstile(
  token: string,
  ip: string,
): Promise<"valid" | "invalid" | "unavailable"> {
  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        remoteip: ip === "unknown" ? undefined : ip,
        idempotency_key: crypto.randomUUID(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(7_000),
    });
    if (!response.ok) return "unavailable";
    const result = (await response.json()) as TurnstileResult;
    const localHostname =
      process.env.NODE_ENV !== "production" &&
      (result.hostname === "localhost" || result.hostname === "127.0.0.1");
    const validHostname =
      (typeof result.hostname === "string" && ALLOWED_HOSTNAMES.has(result.hostname)) ||
      localHostname;

    return result.success === true &&
      result.action === TURNSTILE_ACTION &&
      validHostname &&
      typeof result._worker?.worker_version === "string"
      ? "valid"
      : "invalid";
  } catch {
    return "unavailable";
  }
}

export async function POST(req: Request) {
  const rateLimit = consumeRateLimit(requestIp(req));
  if (!rateLimit.allowed) {
    return json(
      { error: "Too many requests. Please try again later." },
      429,
      { "Retry-After": String(rateLimit.retryAfter) },
    );
  }
  if (!originAllowed(req)) return json({ error: "Forbidden" }, 403);
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ error: "Unsupported media type" }, 415);
  }

  try {
    const body = await readJsonBody(req);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ error: "Invalid submission" }, 400);
    }
    const input = body as Record<string, unknown>;

    // A real user never fills the honeypot. Silently accept so bots learn nothing.
    if (text(input.website, 255)) return json({ ok: true });

    const row = parseLead(input);
    const turnstileToken = text(input.turnstile_token, 2048, true);
    if (!row || !turnstileToken) return json({ error: "Invalid submission" }, 400);

    const turnstile = await verifyTurnstile(turnstileToken, requestIp(req));
    if (turnstile === "unavailable") {
      return json({ error: "Security verification unavailable" }, 503);
    }
    if (turnstile !== "valid") {
      return json({ error: "Security verification failed" }, 400);
    }

    await getDatabasePool().execute({
      sql: `INSERT INTO leads (
        name, email, phone, company, participant_type, programme_interest,
        page_path, referrer, utm_source, utm_medium, utm_campaign, utm_term,
        utm_content, source
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      values: [
        row.name,
        row.email,
        row.phone,
        row.company,
        row.participant_type,
        row.programme_interest,
        row.page_path,
        row.referrer,
        row.utm_source,
        row.utm_medium,
        row.utm_campaign,
        row.utm_term,
        row.utm_content,
        row.source,
      ],
      timeout: 5_000,
    });

    return json({ ok: true });
  } catch (error) {
    if (error instanceof BodyTooLargeError) {
      return json({ error: "Request too large" }, 413);
    }
    if (error instanceof SyntaxError) {
      return json({ error: "Invalid JSON" }, 400);
    }
    console.error("Lead submission failed", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
    return json({ error: "Unable to submit enquiry" }, 500);
  }
}
