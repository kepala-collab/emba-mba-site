import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDatabasePool } from "@/lib/db";
import { bearerSecretStatus } from "@/lib/internal-auth";
import { smtpConfiguration, smtpTransporter } from "@/lib/lead-email";
import { NURTURE_STEPS, renderNurtureEmail, type NurtureLanguage, type NurtureStepKey } from "@/lib/nurture-email";
import { unsubscribeConfigured, unsubscribeUrl } from "@/lib/unsubscribe";

export const runtime = "nodejs";

const MAX_LEAD_AGE_DAYS = 45; // never nurture ancient leads
const DEFAULT_BATCH_LIMIT = 25;

type CandidateRow = RowDataPacket & {
  id: number;
  name: string;
  email: string;
  language: "en" | "zh" | null;
};

function json(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow" },
  });
}

async function candidatesForStep(step: NurtureStepKey, afterDays: number, limit: number): Promise<CandidateRow[]> {
  const [rows] = await getDatabasePool().execute<CandidateRow[]>({
    sql: `SELECT l.id, l.name, l.email, l.page_language AS language
          FROM leads l
          WHERE l.lifecycle_stage = 'new'
            AND l.marketing_opt_out = 0
            AND l.consent_at IS NOT NULL
            AND l.created_at <= NOW() - INTERVAL ? DAY
            AND l.created_at > NOW() - INTERVAL ? DAY
            AND NOT EXISTS (
              SELECT 1 FROM lead_nurture_log g WHERE g.lead_id = l.id AND g.step = ?
            )
          ORDER BY l.created_at ASC
          LIMIT ${Math.max(1, Math.min(200, limit))}`,
    values: [afterDays, MAX_LEAD_AGE_DAYS, step],
    timeout: 10_000,
  });
  return rows;
}

async function logStep(leadId: number, step: NurtureStepKey, language: NurtureLanguage, messageId: string | null): Promise<boolean> {
  const [result] = await getDatabasePool().execute<import("mysql2/promise").ResultSetHeader>({
    sql: `INSERT IGNORE INTO lead_nurture_log (lead_id, step, language, message_id) VALUES (?, ?, ?, ?)`,
    values: [leadId, step, language, messageId],
    timeout: 5_000,
  });
  return result.affectedRows > 0;
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
      const language: NurtureLanguage = row.language === "zh" ? "zh" : "en";

      if (dryRun) {
        sent += 1;
        continue;
      }

      // Claim the step first — the unique key makes double-sends impossible even
      // if two cron runs overlap.
      const claimed = await logStep(row.id, step, language, null);
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
        // Leave the claim in place with a failure marker rather than retrying
        // forever into a broken mailbox; operators can inspect and clear rows.
        await getDatabasePool().execute({
          sql: `UPDATE lead_nurture_log SET message_id = 'send_failed' WHERE lead_id = ? AND step = ? AND message_id IS NULL`,
          values: [row.id, step],
          timeout: 5_000,
        }).catch(() => undefined);
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
