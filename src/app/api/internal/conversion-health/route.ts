import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDatabasePool } from "@/lib/db";
import { bearerSecretStatus } from "@/lib/internal-auth";

export const runtime = "nodejs";

type CountRow = RowDataPacket & { count: number };
type AgeRow = RowDataPacket & { age_seconds: number | null };

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
      integrationPending,
      integrationDeadLetter,
      emailPending,
      emailFailed,
      oldestRows,
    ] = await Promise.all([
      count("SELECT COUNT(*) AS count FROM leads WHERE created_at >= DATE_SUB(UTC_TIMESTAMP(), INTERVAL 24 HOUR)"),
      count("SELECT COUNT(*) AS count FROM lead_integration_outbox WHERE status IN ('pending', 'processing')"),
      count("SELECT COUNT(*) AS count FROM lead_integration_outbox WHERE status = 'dead_letter'"),
      count("SELECT COUNT(*) AS count FROM lead_email_outbox WHERE status IN ('pending', 'processing')"),
      count("SELECT COUNT(*) AS count FROM lead_email_outbox WHERE status = 'failed'"),
      pool.execute<AgeRow[]>({
        sql: `SELECT TIMESTAMPDIFF(SECOND, MIN(created_at), UTC_TIMESTAMP(6)) AS age_seconds
          FROM lead_integration_outbox WHERE status IN ('pending', 'processing')`,
        timeout: 5_000,
      }),
    ]);
    const oldestPendingSeconds = Number(oldestRows[0][0]?.age_seconds || 0);
    const degraded = integrationDeadLetter > 0 || emailFailed > 0 || oldestPendingSeconds > 1_800;
    return json({
      status: degraded ? "degraded" : "ok",
      checked_at: new Date().toISOString(),
      leads_last_24_hours: leadsLast24Hours,
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
