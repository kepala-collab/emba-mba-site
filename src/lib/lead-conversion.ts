import { createHash, randomUUID } from "node:crypto";
import type { PoolConnection } from "mysql2/promise";
import type { LeadStage } from "@/lib/lead-lifecycle";
import { isContactWindow, isLeadIntent, type ContactWindow, type LeadIntent } from "@/lib/conversion-contract";

export { isContactWindow, isLeadIntent, type ContactWindow, type LeadIntent };

export const CONVERSION_SITE_ID = "future_ready_emba";
export const LEAD_FORM_VERSION = "2026.08.v2";
export const LEAD_CONSENT_VERSION = "pdpa-2026.08";

export function isUuid(value: unknown): value is string {
  return typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function safeExperimentsJson(value: unknown): string | null | undefined {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string" || value.length > 2048) return undefined;
  try {
    const parsed: unknown = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return undefined;
    const normalized = JSON.stringify(parsed);
    return normalized.length <= 2048 ? normalized : undefined;
  } catch {
    return undefined;
  }
}

export function actorReferenceHash(actorReference: string | null): Buffer | null {
  if (!actorReference) return null;
  return createHash("sha256").update(actorReference.trim().toLowerCase(), "utf8").digest();
}

export async function appendLeadAuditEvent(
  connection: PoolConnection,
  input: {
    leadId: number;
    eventType: string;
    actorType: "public" | "system" | "integration" | "operator";
    fromStage?: LeadStage | null;
    toStage?: LeadStage | null;
    actorReference?: string | null;
    metadata?: Record<string, string | number | boolean | null> | null;
    eventUuid?: string;
  },
): Promise<string> {
  const eventUuid = input.eventUuid || randomUUID();
  await connection.execute({
    sql: `INSERT INTO lead_audit_events (
      event_uuid, lead_id, event_type, from_stage, to_stage,
      actor_type, actor_ref_hash, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    values: [
      eventUuid,
      input.leadId,
      input.eventType,
      input.fromStage || null,
      input.toStage || null,
      input.actorType,
      actorReferenceHash(input.actorReference || null),
      input.metadata ? JSON.stringify(input.metadata) : null,
    ],
    timeout: 5_000,
  });
  return eventUuid;
}

export async function enqueueLeadIntegrationEvent(
  connection: PoolConnection,
  input: { leadId: number; eventType: string; eventUuid?: string },
): Promise<string> {
  const eventUuid = input.eventUuid || randomUUID();
  await connection.execute({
    sql: `INSERT INTO lead_integration_outbox (
      event_uuid, lead_id, event_type, schema_version
    ) VALUES (?, ?, ?, '1.0')`,
    values: [eventUuid, input.leadId, input.eventType],
    timeout: 5_000,
  });
  return eventUuid;
}
