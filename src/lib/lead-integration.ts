import { createHash, createHmac } from "node:crypto";
import type { Pool, RowDataPacket } from "mysql2/promise";

const DATABASE_TIMEOUT_MS = 5_000;
const DELIVERY_TIMEOUT_MS = 8_000;
const MAX_DELIVERY_ATTEMPTS = 6;
const MAX_BATCH_SIZE = 25;
const STALE_LOCK_MINUTES = 10;
const RETRY_DELAYS_MINUTES = [5, 15, 60, 240, 720] as const;

type IntegrationConfiguration = {
  url: URL;
  secret: string;
};

type IntegrationRow = RowDataPacket & {
  id: number;
  event_uuid: string;
  event_type: string;
  schema_version: string;
  attempt_count: number;
  created_at: Date | string;
  lead_uuid: string;
  site_id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  participant_type: string;
  contact_preference: string | null;
  lead_intent: string | null;
  cohort_key: string | null;
  preferred_contact_window: string | null;
  lifecycle_stage: string;
  programme_interest: string | null;
  page_path: string | null;
  page_language: string | null;
  landing_page: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  click_id_type: string | null;
  click_id: string | null;
  attribution_session_id: string | null;
  source: string;
  consent_version: string | null;
  consent_at: Date | string | null;
  form_version: string | null;
  experiment_json: string | null;
  lead_created_at: Date | string;
};

type ClaimedIntegrationRow = Omit<IntegrationRow, "attempt_count"> & {
  attempt_count: number;
};

export type IntegrationOutboxResult = {
  configured: boolean;
  processed: number;
  delivered: number;
  retried: number;
  deadLettered: number;
};

function integrationConfiguration(): IntegrationConfiguration | null {
  const rawUrl = process.env.CONVERSION_WEBHOOK_URL?.trim() || "";
  const secret = process.env.CONVERSION_WEBHOOK_SECRET?.trim() || "";
  if (!rawUrl || Buffer.byteLength(secret, "utf8") < 32) return null;

  try {
    const url = new URL(rawUrl);
    const localDevelopment = process.env.NODE_ENV !== "production" &&
      url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname);
    if (url.protocol !== "https:" && !localDevelopment) return null;
    if (url.username || url.password || url.hash) return null;
    return { url, secret };
  } catch {
    return null;
  }
}

function iso(value: Date | string | null): string | null {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function parseExperiments(value: string | null): Record<string, unknown> {
  if (!value) return {};
  try {
    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed as Record<string, unknown>
      : {};
  } catch {
    return {};
  }
}

function eventPayload(row: ClaimedIntegrationRow) {
  return {
    schema_version: row.schema_version,
    event_id: row.event_uuid,
    event_type: row.event_type,
    occurred_at: iso(row.created_at),
    lead: {
      reference: row.lead_uuid,
      site_id: row.site_id,
      submitted_at: iso(row.lead_created_at),
      lifecycle_stage: row.lifecycle_stage,
      intent: row.lead_intent,
      cohort_key: row.cohort_key,
      participant_type: row.participant_type,
      contact_preference: row.contact_preference,
      preferred_contact_window: row.preferred_contact_window,
      programme_interest: row.programme_interest,
      language: row.page_language,
      contact: {
        name: row.name,
        email: row.email,
        phone: row.phone,
        company: row.company,
      },
      acquisition: {
        source: row.source,
        page_path: row.page_path,
        landing_page: row.landing_page,
        utm_source: row.utm_source,
        utm_medium: row.utm_medium,
        utm_campaign: row.utm_campaign,
        utm_term: row.utm_term,
        utm_content: row.utm_content,
        click_id_type: row.click_id_type,
        click_id: row.click_id,
        attribution_session_id: row.attribution_session_id,
      },
      consent: {
        version: row.consent_version,
        recorded_at: iso(row.consent_at),
      },
      form_version: row.form_version,
      experiments: parseExperiments(row.experiment_json),
    },
  };
}

async function claimNextIntegrationRow(
  pool: Pool,
  leadId?: number,
): Promise<ClaimedIntegrationRow | null> {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    await connection.execute({
      sql: `UPDATE lead_integration_outbox
        SET status = 'dead_letter', locked_at = NULL, last_error_code = 'delivery_timeout'
        WHERE status = 'processing'
          AND locked_at < DATE_SUB(UTC_TIMESTAMP(6), INTERVAL ${STALE_LOCK_MINUTES} MINUTE)
          AND attempt_count >= ?`,
      values: [MAX_DELIVERY_ATTEMPTS],
      timeout: DATABASE_TIMEOUT_MS,
    });
    await connection.execute({
      sql: `UPDATE lead_integration_outbox
        SET status = 'pending', locked_at = NULL, next_attempt_at = UTC_TIMESTAMP(6),
          last_error_code = 'delivery_timeout'
        WHERE status = 'processing'
          AND locked_at < DATE_SUB(UTC_TIMESTAMP(6), INTERVAL ${STALE_LOCK_MINUTES} MINUTE)
          AND attempt_count < ?`,
      values: [MAX_DELIVERY_ATTEMPTS],
      timeout: DATABASE_TIMEOUT_MS,
    });

    const leadPredicate = leadId ? "AND o.lead_id = ?" : "";
    const values = leadId ? [leadId, MAX_DELIVERY_ATTEMPTS] : [MAX_DELIVERY_ATTEMPTS];
    const [rows] = await connection.execute<IntegrationRow[]>({
      sql: `SELECT
        o.id, o.event_uuid, o.event_type, o.schema_version, o.attempt_count, o.created_at,
        l.lead_uuid, l.site_id, l.name, l.email, l.phone, l.company,
        l.participant_type, l.contact_preference, l.lead_intent, l.cohort_key,
        l.preferred_contact_window, l.lifecycle_stage, l.programme_interest,
        l.page_path, l.page_language, l.landing_page,
        l.utm_source, l.utm_medium, l.utm_campaign, l.utm_term, l.utm_content,
        l.click_id_type, l.click_id, l.attribution_session_id, l.source,
        l.consent_version, l.consent_at, l.form_version, l.experiment_json,
        l.created_at AS lead_created_at
      FROM lead_integration_outbox o
      INNER JOIN leads l ON l.id = o.lead_id
      WHERE o.status = 'pending'
        AND o.next_attempt_at <= UTC_TIMESTAMP(6)
        ${leadPredicate}
        AND o.attempt_count < ?
      ORDER BY o.next_attempt_at ASC, o.id ASC
      LIMIT 1
      FOR UPDATE`,
      values,
      timeout: DATABASE_TIMEOUT_MS,
    });
    const row = rows[0];
    if (!row) {
      await connection.commit();
      return null;
    }

    const attemptCount = Number(row.attempt_count) + 1;
    await connection.execute({
      sql: `UPDATE lead_integration_outbox
        SET status = 'processing', attempt_count = ?, locked_at = UTC_TIMESTAMP(6),
          response_status = NULL, last_error_code = NULL
        WHERE id = ?`,
      values: [attemptCount, row.id],
      timeout: DATABASE_TIMEOUT_MS,
    });
    await connection.commit();
    return { ...row, attempt_count: attemptCount };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function deliverRow(config: IntegrationConfiguration, row: ClaimedIntegrationRow) {
  const body = JSON.stringify(eventPayload(row));
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac("sha256", config.secret)
    .update(`${timestamp}.${body}`, "utf8")
    .digest("hex");
  const digest = createHash("sha256").update(body, "utf8").digest("base64");
  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "FutureReadyConversionOS/1.0",
      "X-Future-Ready-Event-Id": row.event_uuid,
      "X-Future-Ready-Timestamp": timestamp,
      "X-Future-Ready-Signature": `v1=${signature}`,
      "Content-Digest": `sha-256=:${digest}:`,
    },
    body,
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw Object.assign(new Error("Webhook delivery rejected"), { responseStatus: response.status });
  }
  return response.status;
}

function failureCode(error: unknown): { code: string; status: number | null } {
  if (!error || typeof error !== "object") return { code: "delivery_error", status: null };
  const candidate = error as { name?: unknown; code?: unknown; responseStatus?: unknown };
  const status = Number(candidate.responseStatus);
  if (Number.isInteger(status) && status >= 400 && status <= 599) {
    return { code: `http_${status}`, status };
  }
  if (candidate.name === "TimeoutError") return { code: "timeout", status: null };
  if (typeof candidate.code === "string" && /^[A-Z0-9_-]{1,48}$/i.test(candidate.code)) {
    return { code: candidate.code.toLowerCase(), status: null };
  }
  return { code: "delivery_error", status: null };
}

async function markDelivered(pool: Pool, row: ClaimedIntegrationRow, responseStatus: number) {
  await pool.execute({
    sql: `UPDATE lead_integration_outbox
      SET status = 'delivered', delivered_at = UTC_TIMESTAMP(6), locked_at = NULL,
        response_status = ?, last_error_code = NULL
      WHERE id = ? AND status = 'processing'`,
    values: [responseStatus, row.id],
    timeout: DATABASE_TIMEOUT_MS,
  });
}

async function markFailure(
  pool: Pool,
  row: ClaimedIntegrationRow,
  failure: { code: string; status: number | null },
): Promise<"retried" | "deadLettered"> {
  if (row.attempt_count >= MAX_DELIVERY_ATTEMPTS) {
    await pool.execute({
      sql: `UPDATE lead_integration_outbox
        SET status = 'dead_letter', locked_at = NULL, response_status = ?, last_error_code = ?
        WHERE id = ? AND status = 'processing'`,
      values: [failure.status, failure.code, row.id],
      timeout: DATABASE_TIMEOUT_MS,
    });
    return "deadLettered";
  }

  const delayMinutes = RETRY_DELAYS_MINUTES[row.attempt_count - 1] ?? 720;
  const nextAttempt = new Date(Date.now() + delayMinutes * 60_000);
  await pool.execute({
    sql: `UPDATE lead_integration_outbox
      SET status = 'pending', next_attempt_at = ?, locked_at = NULL,
        response_status = ?, last_error_code = ?
      WHERE id = ? AND status = 'processing'`,
    values: [nextAttempt, failure.status, failure.code, row.id],
    timeout: DATABASE_TIMEOUT_MS,
  });
  return "retried";
}

export async function processLeadIntegrationOutbox(
  pool: Pool,
  options: { limit?: number; leadId?: number } = {},
): Promise<IntegrationOutboxResult> {
  const config = integrationConfiguration();
  const result: IntegrationOutboxResult = {
    configured: Boolean(config),
    processed: 0,
    delivered: 0,
    retried: 0,
    deadLettered: 0,
  };
  if (!config) return result;

  const requestedLimit = Number(options.limit || 10);
  const limit = Math.min(MAX_BATCH_SIZE, Math.max(1, Math.floor(requestedLimit)));
  for (let index = 0; index < limit; index += 1) {
    const row = await claimNextIntegrationRow(pool, options.leadId);
    if (!row) break;
    result.processed += 1;
    try {
      const status = await deliverRow(config, row);
      await markDelivered(pool, row, status);
      result.delivered += 1;
    } catch (error) {
      const outcome = await markFailure(pool, row, failureCode(error));
      result[outcome] += 1;
      console.error("Lead integration delivery deferred", {
        type: error instanceof Error ? error.name : "UnknownError",
        code: failureCode(error).code,
        attempt: row.attempt_count,
      });
    }
  }
  return result;
}
