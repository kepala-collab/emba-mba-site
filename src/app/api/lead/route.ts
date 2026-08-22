import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { getDatabasePool } from "@/lib/db";
import {
  consumeDurableLeadRateLimit,
  leadDedupeHash,
  leadEmailRecipientHash,
  normalizeClientIp,
} from "@/lib/lead-abuse";
import { processLeadEmailOutbox } from "@/lib/lead-email";
import {
  appendLeadAuditEvent,
  CONVERSION_SITE_ID,
  enqueueLeadIntegrationEvent,
  isContactWindow,
  isLeadIntent,
  isUuid,
  LEAD_CONSENT_VERSION,
  LEAD_FORM_VERSION,
  safeExperimentsJson,
  type ContactWindow,
  type LeadIntent,
} from "@/lib/lead-conversion";
import { processLeadIntegrationOutbox } from "@/lib/lead-integration";
import { verifyTurnstile } from "@/lib/turnstile-server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const TURNSTILE_ACTION = "lead-submit";

const publicSiteUrl = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurereadymba.com");
  } catch {
    return new URL("https://futurereadymba.com");
  }
})();

const baseHostname = publicSiteUrl.hostname.replace(/^www\./, "");
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
  lead_uuid: string;
  submission_id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  participant_type: "malaysian" | "international";
  contact_preference: "programme_call" | "in_person_meeting" | "online_meeting" | "details_first" | "whatsapp" | null;
  lead_intent: LeadIntent | null;
  cohort_key: string | null;
  preferred_contact_window: ContactWindow | null;
  programme_interest: string | null;
  page_path: string | null;
  page_language: "en" | "zh" | null;
  landing_page: string | null;
  referrer: string | null;
  first_referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  click_id_type: string | null;
  click_id: string | null;
  attribution_session_id: string | null;
  attribution_json: string | null;
  experiment_json: string | null;
  source: string;
};

type LeadReferenceRow = RowDataPacket & { lead_uuid: string };

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
  return normalizeClientIp(forwarded) || "unknown";
}

function consumeRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  if (ip === "unknown") return { allowed: true, retryAfter: 0 };

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
const CLICK_ID_TYPES = new Set([
  "gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid",
  "li_fat_id", "rdt_cid", "epik", "sccid",
]);
const CLICK_ID_VALUE = /^[A-Za-z0-9._~-]+$/;
const ATTRIBUTION_SESSION_ID = /^[A-Za-z0-9-]{16,64}$/;

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
  const submissionId = body.submission_id === undefined
    ? randomUUID()
    : (isUuid(body.submission_id) ? body.submission_id : null);
  const name = text(body.name, 120, true);
  const email = text(body.email, 254);
  const phone = text(body.phone, 32);
  const company = text(body.company, 160);
  const programme = text(body.programme_interest, 160);
  const pagePath = text(body.page_path, 2048);
  const pageLanguage = text(body.page_language, 8);
  const landingPage = text(body.landing_page, 2048);
  const referrer = text(body.referrer, 2048);
  const firstReferrer = text(body.first_referrer, 2048);
  const source = text(body.source, 100) || "emba-hub";
  const utmSource = text(body.utm_source, 255);
  const utmMedium = text(body.utm_medium, 255);
  const utmCampaign = text(body.utm_campaign, 255);
  const utmTerm = text(body.utm_term, 255);
  const utmContent = text(body.utm_content, 255);
  const clickIdType = text(body.click_id_type, 32);
  const clickId = text(body.click_id, 255);
  const attributionSessionId = text(body.attribution_session_id, 64);
  const attributionJson = text(body.attribution_json, 4096);
  const experimentJson = safeExperimentsJson(body.experiment_json);
  const participantType = body.participant_type;
  const contactPreference = text(body.contact_preference, 32);
  const leadIntent = body.lead_intent === undefined || body.lead_intent === null || body.lead_intent === ""
    ? null
    : body.lead_intent;
  const cohortKey = text(body.cohort_key, 64);
  const preferredContactWindow = body.preferred_contact_window === undefined ||
    body.preferred_contact_window === null || body.preferred_contact_window === ""
    ? null
    : body.preferred_contact_window;

  if (body.email !== undefined && email === undefined) return null;
  if (body.phone !== undefined && phone === undefined) return null;
  if (!submissionId || !name || (!email && !phone) || body.consent !== "yes") return null;
  if (
    company === undefined ||
    programme === undefined ||
    pagePath === undefined ||
    pageLanguage === undefined ||
    landingPage === undefined ||
    referrer === undefined ||
    firstReferrer === undefined ||
    utmSource === undefined ||
    utmMedium === undefined ||
    utmCampaign === undefined ||
    utmTerm === undefined ||
    utmContent === undefined ||
    clickIdType === undefined ||
    clickId === undefined ||
    attributionSessionId === undefined ||
    attributionJson === undefined ||
    experimentJson === undefined ||
    cohortKey === undefined ||
    contactPreference === undefined
  ) return null;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (phone && (!/^\+?[0-9().\-\s]{7,32}$/.test(phone) || phone.replace(/\D/g, "").length < 7)) return null;
  if (participantType !== "malaysian" && participantType !== "international") return null;
  if (
    contactPreference !== null &&
    !["programme_call", "in_person_meeting", "online_meeting", "details_first", "whatsapp"].includes(contactPreference)
  ) return null;
  if (leadIntent !== null && !isLeadIntent(leadIntent)) return null;
  if (preferredContactWindow !== null && !isContactWindow(preferredContactWindow)) return null;
  if (cohortKey && !/^[a-z0-9][a-z0-9_-]{0,63}$/.test(cohortKey)) return null;
  if (pageLanguage !== null && pageLanguage !== "en" && pageLanguage !== "zh") return null;
  if (pagePath && !pagePath.startsWith("/")) return null;
  if (landingPage && !landingPage.startsWith("/")) return null;
  for (const urlValue of [referrer, firstReferrer]) {
    if (!urlValue) continue;
    try {
      const protocol = new URL(urlValue).protocol;
      if (protocol !== "http:" && protocol !== "https:") return null;
    } catch {
      return null;
    }
  }
  if ((clickIdType && !CLICK_ID_TYPES.has(clickIdType)) || (clickId && !CLICK_ID_VALUE.test(clickId))) return null;
  if ((clickIdType && !clickId) || (!clickIdType && clickId)) return null;
  if (attributionSessionId && !ATTRIBUTION_SESSION_ID.test(attributionSessionId)) return null;
  if (attributionJson) {
    try {
      const parsed: unknown = JSON.parse(attributionJson);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    } catch {
      return null;
    }
  }

  return {
    lead_uuid: randomUUID(),
    submission_id: submissionId,
    name,
    email: email || "",
    phone: phone || "",
    company,
    participant_type: participantType,
    contact_preference: contactPreference as LeadRow["contact_preference"],
    lead_intent: leadIntent as LeadIntent | null,
    cohort_key: cohortKey,
    preferred_contact_window: preferredContactWindow as ContactWindow | null,
    programme_interest: programme,
    page_path: pagePath,
    page_language: pageLanguage,
    landing_page: landingPage,
    referrer,
    first_referrer: firstReferrer,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
    click_id_type: clickIdType,
    click_id: clickId,
    attribution_session_id: attributionSessionId,
    attribution_json: attributionJson,
    experiment_json: experimentJson,
    source,
  };
}

export async function POST(req: Request) {
  const ip = requestIp(req);
  const rateLimit = consumeRateLimit(ip);
  if (!rateLimit.allowed) {
    return json(
      { error: "Too many requests. Please try again later.", code: "rate_limited" },
      429,
      { "Retry-After": String(rateLimit.retryAfter) },
    );
  }
  if (!originAllowed(req)) return json({ error: "Forbidden", code: "origin_rejected" }, 403);
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ error: "Unsupported media type", code: "unsupported_media_type" }, 415);
  }

  try {
    const body = await readJsonBody(req);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ error: "Invalid submission", code: "invalid_submission" }, 400);
    }
    const input = body as Record<string, unknown>;

    // A real user never fills the honeypot. Silently accept so bots learn nothing.
    if (text(input.website, 255)) return json({ ok: true });

    const row = parseLead(input);
    const turnstileToken = text(input.turnstile_token, 2048, true);
    if (!row || !turnstileToken) return json({ error: "Invalid submission", code: "invalid_submission" }, 400);

    const turnstile = await verifyTurnstile({
      token: turnstileToken,
      remoteIp: ip,
      expectedAction: TURNSTILE_ACTION,
    });
    if (turnstile.status === "unavailable") {
      console.warn("Lead Turnstile verification unavailable", { reason: turnstile.reason });
      return json({ error: "Security verification unavailable", code: "security_unavailable" }, 503);
    }
    if (turnstile.status !== "valid") {
      console.warn("Lead Turnstile verification rejected", {
        reason: turnstile.reason,
        errorCodes: turnstile.errorCodes || [],
      });
      return json({ error: "Security verification failed", code: "security_failed" }, 400);
    }

    const pool = getDatabasePool();
    const durableRateLimit = await consumeDurableLeadRateLimit(pool, {
      ip: ip === "unknown" ? null : ip,
      email: row.email,
      phone: row.phone,
    });
    if (!durableRateLimit.allowed) {
      return json(
        { error: "Too many requests. Please try again later.", code: "rate_limited" },
        429,
        { "Retry-After": String(durableRateLimit.retryAfter) },
      );
    }

    const connection = await pool.getConnection();
    let leadId: number;
    let leadReference = "";
    let isNewLead = false;
    try {
      await connection.beginTransaction();
      const [insertResult] = await connection.execute<ResultSetHeader>({
        sql: `INSERT INTO leads (
          lead_uuid, submission_id, site_id,
          name, email, phone, company, participant_type, contact_preference,
          lead_intent, cohort_key, preferred_contact_window, programme_interest,
          page_path, page_language, landing_page, referrer, first_referrer, utm_source, utm_medium,
          utm_campaign, utm_term, utm_content, click_id_type, click_id,
          attribution_session_id, attribution_json, consent_version, consent_at,
          form_version, experiment_json, source, dedupe_hash, dedupe_date
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
          UTC_TIMESTAMP(6), ?, ?, ?, ?, UTC_DATE()
        )
        ON DUPLICATE KEY UPDATE
          id = LAST_INSERT_ID(id),
          marketing_opt_out = 0,
          marketing_opt_out_at = NULL,
          consent_version = VALUES(consent_version),
          consent_at = VALUES(consent_at),
          form_version = VALUES(form_version)`,
        values: [
          row.lead_uuid,
          row.submission_id,
          CONVERSION_SITE_ID,
          row.name,
          row.email,
          row.phone,
          row.company,
          row.participant_type,
          row.contact_preference,
          row.lead_intent,
          row.cohort_key,
          row.preferred_contact_window,
          row.programme_interest,
          row.page_path,
          row.page_language,
          row.landing_page,
          row.referrer,
          row.first_referrer,
          row.utm_source,
          row.utm_medium,
          row.utm_campaign,
          row.utm_term,
          row.utm_content,
          row.click_id_type,
          row.click_id,
          row.attribution_session_id,
          row.attribution_json,
          LEAD_CONSENT_VERSION,
          LEAD_FORM_VERSION,
          row.experiment_json,
          row.source,
          leadDedupeHash(row.email, row.phone),
        ],
        timeout: 5_000,
      });
      leadId = Number(insertResult.insertId);
      if (!Number.isSafeInteger(leadId) || leadId < 1) {
        throw new Error("Lead insert did not return a valid identifier");
      }
      isNewLead = insertResult.affectedRows === 1;
      const [referenceRows] = await connection.execute<LeadReferenceRow[]>({
        sql: "SELECT lead_uuid FROM leads WHERE id = ? LIMIT 1 FOR UPDATE",
        values: [leadId],
        timeout: 5_000,
      });
      const storedReference = referenceRows[0]?.lead_uuid;
      if (!isUuid(storedReference)) {
        throw new Error("Lead insert did not return a valid public reference");
      }
      leadReference = storedReference;

      if (isNewLead) {
        await appendLeadAuditEvent(connection, {
          leadId,
          eventUuid: row.submission_id,
          eventType: "lead.created",
          actorType: "public",
          toStage: "new",
          metadata: {
            form_version: LEAD_FORM_VERSION,
            language: row.page_language || "en",
            intent: row.lead_intent,
            cohort_key: row.cohort_key,
          },
        });
        await enqueueLeadIntegrationEvent(connection, {
          leadId,
          eventUuid: row.submission_id,
          eventType: "lead.created",
        });
      }

      if (row.email) {
        await connection.execute({
          sql: `INSERT IGNORE INTO lead_email_outbox (
            lead_id, template_key, language, recipient_hash, queued_date
          ) VALUES (?, 'application_received', ?, ?, UTC_DATE())`,
          values: [
            leadId,
            row.page_language === "zh" ? "zh" : "en",
            leadEmailRecipientHash(row.email),
          ],
          timeout: 5_000,
        });
      }
      await connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }

    if (row.email) {
      try {
        await processLeadEmailOutbox(pool, { limit: 1, leadId });
      } catch (error) {
        // The application is already safely stored; the cron processor will retry email.
        console.error("Lead acknowledgement dispatch deferred", {
          type: error instanceof Error ? error.name : "UnknownError",
        });
      }
    }

    if (isNewLead) {
      try {
        await processLeadIntegrationOutbox(pool, { limit: 1, leadId });
      } catch (error) {
        // The lead and integration event are durable; the cron processor will retry.
        console.error("Lead integration dispatch deferred", {
          type: error instanceof Error ? error.name : "UnknownError",
        });
      }
    }

    return json({ ok: true, lead_reference: leadReference });
  } catch (error) {
    if (error instanceof BodyTooLargeError) {
      return json({ error: "Request too large", code: "request_too_large" }, 413);
    }
    if (error instanceof SyntaxError) {
      return json({ error: "Invalid JSON", code: "invalid_json" }, 400);
    }
    console.error("Lead submission failed", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
    return json({ error: "Unable to submit enquiry", code: "submission_failed" }, 500);
  }
}
