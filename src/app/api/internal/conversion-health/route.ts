import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDatabasePool } from "@/lib/db";
import { bearerSecretStatus } from "@/lib/internal-auth";

export const runtime = "nodejs";

type CountRow = RowDataPacket & { count: number };
type AgeRow = RowDataPacket & { age_seconds: number | null };
type AverageRow = RowDataPacket & { average_seconds: number | null };

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

async function count(sql: string): Promise<number> {
  const [rows] = await getDatabasePool().execute<CountRow[]>({ sql, timeout: 5_000 });
  return Number(rows[0]?.count || 0);
}

export async function GET(request: Request) {
  const authorization = bearerSecretStatus(request, "CONVERSION_CRON_SECRET");
  if (authorization === "unconfigured") {
    return json({ error: "Conversion health is not configured", code: "processor_unconfigured" }, 503);
  }
  if (authorization !== "valid") {
    return json({ error: "Unauthorized", code: "unauthorized" }, 401, { "WWW-Authenticate": "Bearer" });
  }

  try {
    const pool = getDatabasePool();
    const [
      leadsLast24Hours,
      leadsLast30Days,
      qualifiedLast30Days,
      conversationsLast30Days,
      enrolmentsLast30Days,
      integrationPending,
      integrationDeadLetter,
      emailPending,
      emailFailed,
      oldestRows,
      responseRows,
    ] = await Promise.all([
      count("SELECT COUNT(*) AS count FROM leads WHERE created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 24 HOUR)"),
      count("SELECT COUNT(*) AS count FROM leads WHERE created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 30 DAY)"),
      count(`SELECT COUNT(DISTINCT e.lead_id) AS count FROM lead_audit_events e
        INNER JOIN leads l ON l.id = e.lead_id
        WHERE e.to_stage = 'qualified' AND l.created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 30 DAY)`),
      count(`SELECT COUNT(DISTINCT e.lead_id) AS count FROM lead_audit_events e
        INNER JOIN leads l ON l.id = e.lead_id
        WHERE e.to_stage = 'meeting_scheduled' AND l.created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 30 DAY)`),
      count(`SELECT COUNT(DISTINCT e.lead_id) AS count FROM lead_audit_events e
        INNER JOIN leads l ON l.id = e.lead_id
        WHERE e.to_stage = 'enrolled' AND l.created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 30 DAY)`),
      count("SELECT COUNT(*) AS count FROM lead_integration_outbox WHERE status IN ('pending', 'processing')"),
      count("SELECT COUNT(*) AS count FROM lead_integration_outbox WHERE status = 'dead_letter'"),
      count("SELECT COUNT(*) AS count FROM lead_email_outbox WHERE status IN ('pending', 'processing')"),
      count("SELECT COUNT(*) AS count FROM lead_email_outbox WHERE status = 'failed'"),
      pool.execute<AgeRow[]>({
        sql: `SELECT TIMESTAMPDIFF(SECOND, MIN(created_at), UTC_TIMESTAMP(6)) AS age_seconds
          FROM lead_integration_outbox WHERE status IN ('pending', 'processing')`,
        timeout: 5_000,
      }),
      pool.execute<AverageRow[]>({
        sql: `SELECT AVG(TIMESTAMPDIFF(SECOND, l.created_at, first_contact.first_contact_at)) AS average_seconds
          FROM leads l
          INNER JOIN (
            SELECT lead_id, MIN(created_at) AS first_contact_at
            FROM lead_audit_events WHERE to_stage = 'contacted' GROUP BY lead_id
          ) first_contact ON first_contact.lead_id = l.id
          WHERE l.created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 30 DAY)`,
        timeout: 5_000,
      }),
    ]);
    const oldestPendingSeconds = Number(oldestRows[0][0]?.age_seconds || 0);
    const degraded = integrationDeadLetter > 0 || emailFailed > 0 || oldestPendingSeconds > 1_800;
    return json({
      status: degraded ? "degraded" : "ok",
      checked_at: new Date().toISOString(),
      leads_last_24_hours: leadsLast24Hours,
      funnel_last_30_days: {
        leads: leadsLast30Days,
        qualified_leads: qualifiedLast30Days,
        conversations_booked: conversationsLast30Days,
        enrolments: enrolmentsLast30Days,
        qualified_lead_rate: leadsLast30Days > 0 ? qualifiedLast30Days / leadsLast30Days : 0,
        conversation_booked_rate: leadsLast30Days > 0 ? conversationsLast30Days / leadsLast30Days : 0,
        enrolment_rate: leadsLast30Days > 0 ? enrolmentsLast30Days / leadsLast30Days : 0,
        average_first_response_seconds: responseRows[0][0]?.average_seconds === null
          ? null
          : Number(responseRows[0][0]?.average_seconds || 0),
      },
      integration: {
        pending: integrationPending,
        dead_letter: integrationDeadLetter,
        oldest_pending_seconds: oldestPendingSeconds,
      },
      email: { pending: emailPending, failed: emailFailed },
    }, degraded ? 503 : 200);
  } catch (error) {
    console.error("Conversion health check failed", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
    return json({ error: "Conversion health check failed", code: "health_check_failed" }, 500);
  }
}
