import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDatabasePool } from "@/lib/db";
import { bearerSecretStatus } from "@/lib/internal-auth";
import { appendLeadAuditEvent, enqueueLeadIntegrationEvent, isUuid } from "@/lib/lead-conversion";
import { canTransitionLead, isLeadStage, lifecycleEventType, type LeadStage } from "@/lib/lead-lifecycle";
import { processLeadIntegrationOutbox } from "@/lib/lead-integration";

export const runtime = "nodejs";

type LeadStateRow = RowDataPacket & {
  id: number;
  lifecycle_stage: LeadStage;
  lifecycle_version: number;
};

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

function safeText(value: unknown, maximumLength: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  // oxlint-disable-next-line no-control-regex -- Control bytes are rejected deliberately.
  return clean && clean.length <= maximumLength && !/[\u0000-\u001F\u007F]/.test(clean)
    ? clean
    : null;
}

export async function POST(request: Request) {
  const authorization = bearerSecretStatus(request, "LEAD_LIFECYCLE_SECRET");
  if (authorization === "unconfigured") {
    return json({ error: "Lifecycle updates are not configured", code: "processor_unconfigured" }, 503);
  }
  if (authorization !== "valid") {
    return json(
      { error: "Unauthorized", code: "unauthorized" },
      401,
      { "WWW-Authenticate": "Bearer" },
    );
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ error: "Unsupported media type", code: "unsupported_media_type" }, 415);
  }
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > 4_096) {
    return json({ error: "Request too large", code: "request_too_large" }, 413);
  }

  let body: Record<string, unknown>;
  try {
    const value: unknown = await request.json();
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("invalid_body");
    body = value as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid JSON", code: "invalid_json" }, 400);
  }

  const leadReference = body.lead_reference;
  const toStage = body.to_stage;
  const expectedVersion = Number(body.expected_version);
  const actorReference = safeText(body.actor_reference, 120);
  const reasonCode = safeText(body.reason_code, 64);
  if (
    !isUuid(leadReference) ||
    !isLeadStage(toStage) ||
    !Number.isSafeInteger(expectedVersion) ||
    expectedVersion < 1 ||
    !actorReference ||
    (reasonCode !== null && !/^[a-z0-9][a-z0-9_-]{0,63}$/.test(reasonCode))
  ) {
    return json({ error: "Invalid lifecycle update", code: "invalid_submission" }, 400);
  }

  const pool = getDatabasePool();
  const connection = await pool.getConnection();
  let leadId = 0;
  let nextVersion = expectedVersion + 1;
  try {
    await connection.beginTransaction();
    const [rows] = await connection.execute<LeadStateRow[]>({
      sql: `SELECT id, lifecycle_stage, lifecycle_version
        FROM leads WHERE lead_uuid = ? LIMIT 1 FOR UPDATE`,
      values: [leadReference],
      timeout: 5_000,
    });
    const current = rows[0];
    if (!current) {
      await connection.rollback();
      return json({ error: "Lead not found", code: "not_found" }, 404);
    }
    leadId = Number(current.id);
    const currentVersion = Number(current.lifecycle_version);
    nextVersion = currentVersion + 1;
    if (currentVersion !== expectedVersion) {
      await connection.rollback();
      return json({
        error: "Lifecycle version conflict",
        code: "version_conflict",
        current_stage: current.lifecycle_stage,
        current_version: currentVersion,
      }, 409);
    }
    if (!canTransitionLead(current.lifecycle_stage, toStage)) {
      await connection.rollback();
      return json({
        error: "Lifecycle transition is not allowed",
        code: "invalid_transition",
        current_stage: current.lifecycle_stage,
      }, 409);
    }

    await connection.execute({
      sql: `UPDATE leads
        SET lifecycle_stage = ?, lifecycle_version = lifecycle_version + 1,
          stage_updated_at = UTC_TIMESTAMP(6)
        WHERE id = ? AND lifecycle_version = ?`,
      values: [toStage, leadId, expectedVersion],
      timeout: 5_000,
    });
    const eventUuid = await appendLeadAuditEvent(connection, {
      leadId,
      eventType: "lead.lifecycle_changed",
      actorType: "operator",
      actorReference,
      fromStage: current.lifecycle_stage,
      toStage,
      metadata: reasonCode ? { reason_code: reasonCode } : null,
    });
    await enqueueLeadIntegrationEvent(connection, {
      leadId,
      eventType: lifecycleEventType(toStage),
      eventUuid,
    });
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    console.error("Lead lifecycle update failed", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
    return json({ error: "Lifecycle update failed", code: "update_failed" }, 500);
  } finally {
    connection.release();
  }

  try {
    await processLeadIntegrationOutbox(pool, { limit: 1, leadId });
  } catch (error) {
    console.error("Lead lifecycle integration dispatch deferred", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
  }

  return json({
    ok: true,
    lead_reference: leadReference,
    lifecycle_stage: toStage,
    lifecycle_version: nextVersion,
  });
}
