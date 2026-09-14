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
    values: [step, afterDays, MAX_LEAD_AGE_DAYS, NURTURE_RETRY_DELAY_MINUTES],
    timeout: 10_000,
  });
  return rows;
}

// Claims a step for a lead: either a first attempt (INSERT) or a retry of a
// row that failed once and is past its cool-down (UPDATE). Returns true if
// this call claimed the row, false if another process already has it.
async function claimStep(leadId: number, step: NurtureStepKey, language: NurtureLanguage): Promise<boolean> {
  const [insertResult] = await getDatabasePool().execute<import("mysql2/promise").ResultSetHeader>({
    sql: `INSERT IGNORE INTO lead_nurture_log (lead_id, step, language, message_id, attempt_count) VALUES (?, ?, ?, NULL, 0)`,
    values: [leadId, step, language],
    timeout: 5_000,
  });
  if (insertResult.affectedRows > 0) return true;

  const [updateResult] = await getDatabasePool().execute<import("mysql2/promise").ResultSetHeader>({
    sql: `UPDATE lead_nurture_log
          SET sent_at = NOW(), message_id = NULL
          WHERE lead_id = ? AND step = ?
            AND message_id IS NULL
            AND attempt_count = 1
            AND sent_at <= DATE_SUB(NOW(), INTERVAL ? MINUTE)`,
    values: [leadId, step, NURTURE_RETRY_DELAY_MINUTES],
    timeout: 5_000,
  });
  return updateResult.affectedRows > 0;
}

// Records a delivery failure: increments attempt_count and marks the row
// terminal (message_id = 'send_failed') once NURTURE_MAX_ATTEMPTS is reached;
// otherwise clears message_id so the row stays claimable for a later retry.
async function recordFailure(leadId: number, step: NurtureStepKey): Promise<void> {
  // MySQL evaluates SET assignments left to right: decide from the old count
  // before incrementing it, so the first failure remains eligible for retry.
  await getDatabasePool().execute({
    sql: `UPDATE lead_nurture_log
          SET message_id = IF(attempt_count + 1 >= ?, 'send_failed', NULL),
              attempt_count = attempt_count + 1
          WHERE lead_id = ? AND step = ?`,
    values: [NURTURE_MAX_ATTEMPTS, leadId, step],
    timeout: 5_000,
  }).catch(() => undefined);
}

async function handle(request: Request) {
  const authorization = bearerSecretStatus(request, "NURTURE_CRON_SECRET");
  if (authorization === "unconfigured") return json({ error: "NURTURE_CRON_SECRET is not configured." }, 503);
  if (authorization === "invalid") return json({ error: "Unauthorized." }, 401);

  const { searchParams } = new URL(request.url);
  const dryRun = searchParams.get("dryRun") === "1";
  const limit = Number(searchParams.get("limit") || DEFAULT_BATCH_LIMIT) || DEFAULT_BATCH_LIMIT;

  if (!unsubscribeConfigured()) {
    return json({ error: "UNSUBSCRIBE_TOKEN_SECRET is not configured; nurture emails require a working unsubscribe link." }, 503);
  }
  const smtp = smtpConfiguration();
  if (!smtp && !dryRun) return json({ error: "SMTP is not configured." }, 503);

  const summary: { step: NurtureStepKey; candidates: number; sent: number; skipped: number }[] = [];
  const handledLeads = new Set<number>();

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

      // Claim the step first (first attempt or, for a row that failed once
      // and is past its 60-minute cool-down, a retry) — the unique key and
      // the guarded UPDATE make double-sends impossible even if two cron
      // runs overlap.
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
        await getDatabasePool().execute({
          sql: `UPDATE lead_nurture_log SET message_id = ? WHERE lead_id = ? AND step = ?`,
          values: [String(result.messageId || "sent"), row.id, step],
          timeout: 5_000,
        });
        sent += 1;
      } catch {
        // First failure: increment attempt_count and clear message_id so the
        // row is retried once, 60 minutes later. Second failure: terminal —
        // message_id = 'send_failed'; operators can inspect and clear rows.
        await recordFailure(row.id, step);
        skipped += 1;
      }

      // Mark earlier steps as superseded for this lead.
      for (const earlier of NURTURE_STEPS.filter((candidate) => candidate.afterDays < afterDays)) {
        await getDatabasePool().execute({
          sql: `INSERT IGNORE INTO lead_nurture_log (lead_id, step, language, message_id) VALUES (?, ?, ?, 'superseded')`,
          values: [row.id, earlier.key, language],
          timeout: 5_000,
        }).catch(() => undefined);
      }
    }

    summary.push({ step, candidates: rows.length, sent, skipped });
  }

  return json({ dryRun, summary });
}

export async function POST(request: Request) {
  return handle(request);
}

export async function GET(request: Request) {
  return handle(request);
}
