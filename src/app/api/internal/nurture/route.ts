import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDatabasePool } from "@/lib/db";
import { bearerSecretStatus } from "@/lib/internal-auth";
import { smtpConfiguration, smtpTransporter } from "@/lib/lead-email";
import { NURTURE_STEPS, renderNurtureEmail, type NurtureLanguage, type NurtureStepKey } from "@/lib/nurture-email";
import { NURTURE_MAX_ATTEMPTS, NURTURE_RETRY_DELAY_MINUTES } from "@/lib/nurture-retry";
import { unsubscribeConfigured, unsubscribeUrl } from "@/lib/unsubscribe";

export const runtime = "nodejs";

const MAX_LEAD_AGE_DAYS = 45; // never nurture ancient leads
const DEFAULT_BATCH_LIMIT = 25;

type CandidateRow = RowDataPacket & {
  id: number;
  name: string;
  email: string;
  language: "en" | "zh" | "ms" | null;
};

function json(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow" },
  });
}

async function candidatesForStep(step: NurtureStepKey, afterDays: number, limit: number): Promise<CandidateRow[]> {
  // Only the latest due step is eligible, including across separate cron runs.
  // This also excludes legacy pending rows whose superseding insert was ignored.
  const beforeDays = Math.min(MAX_LEAD_AGE_DAYS, ...NURTURE_STEPS
    .filter((candidate) => candidate.afterDays > afterDays)
    .map((candidate) => candidate.afterDays));
  // A candidate is either a lead never yet logged for this step (fresh send)
  // or a lead whose earlier attempt failed once and is now past the
  // NURTURE_RETRY_DELAY_MINUTES cool-down (retry). A row already at
  // NURTURE_MAX_ATTEMPTS (message_id = 'send_failed') or already sent is
  // never a candidate again.
  const [rows] = await getDatabasePool().execute<CandidateRow[]>({
    sql: `SELECT l.id, l.name, l.email, l.page_language AS language
          FROM leads l
          LEFT JOIN lead_nurture_log g ON g.lead_id = l.id AND g.step = ?
          WHERE l.lifecycle_stage = 'new'
            AND l.marketing_opt_out = 0
            AND l.consent_at IS NOT NULL
            AND l.created_at <= NOW() - INTERVAL ? DAY
            AND l.created_at > NOW() - INTERVAL ? DAY
            AND (
              g.id IS NULL
              OR (
                g.message_id IS NULL
                AND g.attempt_count = 1
                AND g.sent_at <= DATE_SUB(NOW(), INTERVAL ? MINUTE)
              )
            )
          ORDER BY l.created_at ASC
          LIMIT ${Math.max(1, Math.min(200, limit))}`,
    values: [step, afterDays, beforeDays, NURTURE_RETRY_DELAY_MINUTES],
    timeout: 10_000,
  });
  return rows;
}

// Claims a step for a lead: either a first attempt (INSERT) or a retry of a
// row that failed once and is past its cool-down (UPDATE). A non-null claim
// survives receipt-write failures and cannot be automatically resent.
async function claimStep(leadId: number, step: NurtureStepKey, language: NurtureLanguage): Promise<string | null> {
  const claim = `sending:${randomUUID()}`;
  const [insertResult] = await getDatabasePool().execute<import("mysql2/promise").ResultSetHeader>({
    sql: `INSERT IGNORE INTO lead_nurture_log (lead_id, step, language, message_id, attempt_count) VALUES (?, ?, ?, ?, 0)`,
    values: [leadId, step, language, claim],
    timeout: 5_000,
  });
  if (insertResult.affectedRows > 0) return claim;

  const [updateResult] = await getDatabasePool().execute<import("mysql2/promise").ResultSetHeader>({
    sql: `UPDATE lead_nurture_log
          SET sent_at = NOW(), message_id = ?
          WHERE lead_id = ? AND step = ?
            AND message_id IS NULL
            AND attempt_count = 1
            AND sent_at <= DATE_SUB(NOW(), INTERVAL ? MINUTE)`,
    values: [claim, leadId, step, NURTURE_RETRY_DELAY_MINUTES],
    timeout: 5_000,
  });
  return updateResult.affectedRows > 0 ? claim : null;
}

// Records a delivery failure: increments attempt_count and marks the row
// terminal (message_id = 'send_failed') once NURTURE_MAX_ATTEMPTS is reached;
// otherwise clears message_id so the row stays claimable for a later retry.
async function recordFailure(leadId: number, step: NurtureStepKey, claim: string): Promise<void> {
  // MySQL evaluates SET assignments left to right: decide from the old count
  // before incrementing it, so the first failure remains eligible for retry.
  await getDatabasePool().execute({
    sql: `UPDATE lead_nurture_log
          SET message_id = IF(attempt_count + 1 >= ?, 'send_failed', NULL),
              attempt_count = attempt_count + 1
          WHERE lead_id = ? AND step = ? AND message_id = ?`,
    values: [NURTURE_MAX_ATTEMPTS, leadId, step, claim],
    timeout: 5_000,
  });
}

async function handle(request: Request) {
  const authorization = bearerSecretStatus(request, "NURTURE_CRON_SECRET");
  if (authorization === "unconfigured") return json({ error: "NURTURE_CRON_SECRET is not configured." }, 503);
  if (authorization === "invalid") return json({ error: "Unauthorized." }, 401);

  const { searchParams } = new URL(request.url);
  let body: Record<string, unknown> = {};
  if (request.method === "POST") {
    const text = await request.text();
    if (text.trim()) {
      try {
        const parsed: unknown = JSON.parse(text);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Expected object");
        body = parsed as Record<string, unknown>;
      } catch {
        return json({ error: "Request body must be a JSON object." }, 400);
      }
    }
  }
  const queryDryRun = searchParams.get("dryRun");
  if ((queryDryRun !== null && !["0", "1", "true", "false"].includes(queryDryRun))
    || (body.dryRun !== undefined && typeof body.dryRun !== "boolean")) {
    return json({ error: "dryRun must be a boolean or a query value of 0, 1, true or false." }, 400);
  }
  // A dry-run request in either supported format always wins.
  const dryRun = queryDryRun === "1" || queryDryRun === "true" || body.dryRun === true;
  const requestedLimit = Number(searchParams.get("limit") ?? body.limit ?? DEFAULT_BATCH_LIMIT);
  if (!Number.isInteger(requestedLimit) || requestedLimit < 1) return json({ error: "limit must be a positive integer." }, 400);
  const limit = Math.min(200, requestedLimit);

  if (!unsubscribeConfigured()) {
    return json({ error: "UNSUBSCRIBE_TOKEN_SECRET is not configured; nurture emails require a working unsubscribe link." }, 503);
  }
  const smtp = smtpConfiguration();
  if (!smtp && !dryRun) return json({ error: "SMTP is not configured." }, 503);

  const summary: { step: NurtureStepKey; candidates: number; sent: number; skipped: number }[] = [];
  const handledLeads = new Set<number>();
  let receiptErrors = 0;

  // Latest step first: a lead overdue for several steps receives only the latest
  // step; earlier steps are logged as superseded so they never fire late.
  const stepsLatestFirst = [...NURTURE_STEPS].sort((a, b) => b.afterDays - a.afterDays);

  for (const { key: step, afterDays } of stepsLatestFirst) {
    const rows = await candidatesForStep(step, afterDays, limit);
    let sent = 0;
    let skipped = 0;

    for (const row of rows) {
      if (handledLeads.has(row.id)) {
        skipped += 1;
        continue;
      }
      handledLeads.add(row.id);
      const language: NurtureLanguage = row.language === "zh" ? "zh" : row.language === "ms" ? "ms" : "en";

      if (dryRun) {
        sent += 1;
        continue;
      }

      // Reserve the step before SMTP; only this claim may record its outcome.
      const claimed = await claimStep(row.id, step, language);
      if (!claimed) {
        skipped += 1;
        continue;
      }

      const message = renderNurtureEmail({
        step,
        language,
        recipientName: row.name,
        unsubscribeUrl: unsubscribeUrl(row.email, language),
      });

      let acceptedMessageId: string | null = null;
      try {
        const transporter = smtpTransporter(smtp!);
        const result = await transporter.sendMail({
          from: { name: smtp!.fromName, address: smtp!.user },
          to: row.email,
          replyTo: smtp!.replyTo,
          subject: message.subject,
          html: message.html,
          text: message.text,
          headers: {
            "List-Unsubscribe": `<${unsubscribeUrl(row.email, language)}>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        });
        acceptedMessageId = String(result.messageId || "sent");
        sent += 1;
      } catch {
        // First failure: increment attempt_count and clear message_id so the
        // row is retried once, 60 minutes later. Second failure: terminal —
        // message_id = 'send_failed'; operators can inspect and clear rows.
        await recordFailure(row.id, step, claimed);
        skipped += 1;
      }

      if (acceptedMessageId !== null) {
        try {
          const [receipt] = await getDatabasePool().execute<import("mysql2/promise").ResultSetHeader>({
            sql: `UPDATE lead_nurture_log SET message_id = ? WHERE lead_id = ? AND step = ? AND message_id = ?`,
            values: [acceptedMessageId, row.id, step, claimed],
            timeout: 5_000,
          });
          if (receipt.affectedRows !== 1) throw new Error("Delivery claim changed");
        } catch {
          // SMTP already accepted this message. Keep the non-null reservation
          // for reconciliation instead of scheduling a duplicate delivery.
          receiptErrors += 1;
          console.error("Nurture delivery receipt needs reconciliation", { leadId: row.id, step, messageId: acceptedMessageId, claim: claimed });
        }
      }

      // Mark earlier steps as superseded for this lead.
      for (const earlier of NURTURE_STEPS.filter((candidate) => candidate.afterDays < afterDays)) {
        await getDatabasePool().execute({
          sql: `INSERT IGNORE INTO lead_nurture_log (lead_id, step, language, message_id) VALUES (?, ?, ?, 'superseded')`,
          values: [row.id, earlier.key, language],
          timeout: 5_000,
        }).catch(() => undefined);
        await getDatabasePool().execute({
          sql: `UPDATE lead_nurture_log SET message_id = 'superseded'
                WHERE lead_id = ? AND step = ? AND message_id IS NULL AND attempt_count = 1`,
          values: [row.id, earlier.key],
          timeout: 5_000,
        }).catch(() => undefined);
      }
    }

    summary.push({ step, candidates: rows.length, sent, skipped });
  }

  return json({ dryRun, summary, receiptErrors }, receiptErrors ? 503 : 200);
}

export async function POST(request: Request) {
  return handle(request);
}

export async function GET(request: Request) {
  return handle(request);
}
