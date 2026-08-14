import { NextResponse } from "next/server";
import { getDatabasePool } from "@/lib/db";
import { programmeChatSystemPrompt, type ChatLanguage } from "@/lib/chat-knowledge";
import {
  consumeDurableChatRateLimit,
  normalizeClientIp,
} from "@/lib/lead-abuse";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12 * 1024;
const MAX_MESSAGES = 7;
const MAX_MESSAGE_LENGTH = 600;
const MAX_TOTAL_CHARACTERS = 3_600;
const LOCAL_WINDOW_MS = 10 * 60 * 1000;
const LOCAL_MAX_REQUESTS = 8;
const TURNSTILE_ACTION = "programme-chat";
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

type ChatMessage = { role: "user" | "assistant"; content: string };
type RateBucket = { count: number; resetAt: number };
type TurnstileResult = { success?: boolean; hostname?: string; action?: string };
type GroqResponse = {
  choices?: Array<{ message?: { content?: string } }>;
};

const globalForChatSecurity = globalThis as typeof globalThis & {
  embaChatRateLimits?: Map<string, RateBucket>;
};
const localRateLimits =
  globalForChatSecurity.embaChatRateLimits || new Map<string, RateBucket>();
globalForChatSecurity.embaChatRateLimits = localRateLimits;

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

function requestIp(req: Request): string | null {
  const forwarded =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0];
  return normalizeClientIp(forwarded);
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

function consumeLocalRateLimit(ip: string | null) {
  if (!ip) return { allowed: true, retryAfter: 0 };
  const now = Date.now();
  const current = localRateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    localRateLimits.set(ip, { count: 1, resetAt: now + LOCAL_WINDOW_MS });
    if (localRateLimits.size > 10_000) {
      for (const [key, bucket] of localRateLimits) {
        if (bucket.resetAt <= now) localRateLimits.delete(key);
      }
    }
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= LOCAL_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
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

function hasDisallowedControlCharacter(value: string) {
  for (const character of value) {
    const code = character.charCodeAt(0);
    if ((code < 32 && code !== 9 && code !== 10 && code !== 13) || code === 127) return true;
  }
  return false;
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length < 1 || value.length > MAX_MESSAGES) return null;
  let total = 0;
  const messages: ChatMessage[] = [];

  for (const item of value) {
    if (!item || typeof item !== "object") return null;
    const role = Reflect.get(item, "role");
    const rawContent = Reflect.get(item, "content");
    if ((role !== "user" && role !== "assistant") || typeof rawContent !== "string") return null;
    const content = rawContent.trim();
    if (!content || content.length > MAX_MESSAGE_LENGTH || hasDisallowedControlCharacter(content)) return null;
    total += content.length;
    if (total > MAX_TOTAL_CHARACTERS) return null;
    messages.push({ role, content });
  }

  return messages.at(-1)?.role === "user" ? messages : null;
}

function containsPersonalData(value: string): boolean {
  const hasEmail = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(value);
  const hasIdentityNumber = /\b\d{6}-\d{2}-\d{4}\b/.test(value);
  const phoneCandidates = value.match(/(?:^|\s)(?:\+?\d[\d\s().-]{6,}\d)(?=$|\s|[,.!?])/g) || [];
  const hasPhone = phoneCandidates.some((candidate) => {
    const digitCount = candidate.replace(/\D/g, "").length;
    return digitCount >= 9 && digitCount <= 15;
  });
  return hasEmail || hasIdentityNumber || hasPhone;
}

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, remoteip: ip || undefined }),
      cache: "no-store",
      signal: AbortSignal.timeout(7_000),
    });
    if (!response.ok) return false;
    const result = (await response.json()) as TurnstileResult;
    const localHostname =
      process.env.NODE_ENV !== "production" &&
      (result.hostname === "localhost" || result.hostname === "127.0.0.1");
    return Boolean(
      result.success &&
      result.action === TURNSTILE_ACTION &&
      ((typeof result.hostname === "string" && ALLOWED_HOSTNAMES.has(result.hostname)) || localHostname),
    );
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    if (!originAllowed(req)) return json({ error: "Request origin not allowed" }, 403);
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return json({ error: "Content type must be application/json" }, 415);
    }

    const ip = requestIp(req);
    const localLimit = consumeLocalRateLimit(ip);
    if (!localLimit.allowed) {
      return json(
        { error: "Too many messages" },
        429,
        { "Retry-After": String(localLimit.retryAfter) },
      );
    }

    const body = await readJsonBody(req);
    if (!body || typeof body !== "object") return json({ error: "Invalid request" }, 400);
    const messages = parseMessages(Reflect.get(body, "messages"));
    const langValue = Reflect.get(body, "lang");
    const language: ChatLanguage = langValue === "zh" ? "zh" : "en";
    const turnstileToken = Reflect.get(body, "turnstile_token");
    if (!messages || typeof turnstileToken !== "string" || !turnstileToken.trim()) {
      return json({ error: "Invalid request" }, 400);
    }

    if (messages.some((message) => message.role === "user" && containsPersonalData(message.content))) {
      return json({ error: "personal_data_not_allowed" }, 400);
    }

    if (!(await verifyTurnstile(turnstileToken.trim().slice(0, 2048), ip))) {
      return json({ error: "Security verification failed" }, 400);
    }

    const durableLimit = await consumeDurableChatRateLimit(getDatabasePool(), ip);
    if (!durableLimit.allowed) {
      return json(
        { error: "Too many messages" },
        429,
        { "Retry-After": String(durableLimit.retryAfter) },
      );
    }

    const apiKey = process.env.GROQ_API_KEY?.trim();
    if (!apiKey) return json({ error: "Assistant unavailable" }, 503);

    const providerResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL?.trim() || "openai/gpt-oss-120b",
        messages: [
          { role: "system", content: programmeChatSystemPrompt(language) },
          ...messages,
        ],
        temperature: 0.2,
        max_completion_tokens: 360,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    if (!providerResponse.ok) {
      return json({ error: providerResponse.status === 429 ? "Assistant busy" : "Assistant unavailable" }, 503);
    }
    const result = (await providerResponse.json()) as GroqResponse;
    const answer = result.choices?.[0]?.message?.content?.trim();
    if (!answer) return json({ error: "Assistant unavailable" }, 503);
    const cleanedAnswer = answer
      .replace(/<[^>]*>/g, "")
      .replace(/\[([^\]]+)]\((?:javascript:|data:)[^)]+\)/gi, "$1")
      .trim();
    if (!cleanedAnswer) return json({ error: "Assistant unavailable" }, 503);

    return json({ answer: cleanedAnswer.slice(0, 2_000) });
  } catch (error) {
    if (error instanceof BodyTooLargeError) return json({ error: "Request too large" }, 413);
    if (error instanceof SyntaxError) return json({ error: "Invalid JSON" }, 400);
    return json({ error: "Assistant unavailable" }, 503);
  }
}
