import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import type { Pool, RowDataPacket } from "mysql2/promise";

const DATABASE_TIMEOUT_MS = 5_000;
const DEVELOPMENT_HASH_SECRET =
  "development-only-lead-abuse-secret-not-for-production";

type RateLimitRule = {
  scope: string;
  value: string;
  windowSeconds: number;
  maximum: number;
};

type RateLimitRow = RowDataPacket & {
  scope: string;
  request_count: number;
  retry_after: number;
};

export type DurableRateLimitResult = {
  allowed: boolean;
  retryAfter: number;
};

function hashSecret(): string {
  const value = process.env.LEAD_HASH_SECRET?.trim();
  if (value && Buffer.byteLength(value, "utf8") >= 32) return value;

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Missing or insufficient LEAD_HASH_SECRET; production requires at least 32 bytes",
    );
  }

  return DEVELOPMENT_HASH_SECRET;
}

function privateFingerprint(scope: string, value: string): Buffer {
  return createHmac("sha256", hashSecret())
    .update(scope, "utf8")
    .update("\0", "utf8")
    .update(value, "utf8")
    .digest();
}

function canonicalIpv6(value: string): string | null {
  let address = value.toLowerCase();
  const lastColon = address.lastIndexOf(":");
  const ipv4Tail = address.slice(lastColon + 1);

  if (isIP(ipv4Tail) === 4) {
    const octets = ipv4Tail.split(".").map(Number);
    const high = ((octets[0] << 8) | octets[1]).toString(16);
    const low = ((octets[2] << 8) | octets[3]).toString(16);
    address = `${address.slice(0, lastColon + 1)}${high}:${low}`;
  }

  const halves = address.split("::");
  if (halves.length > 2) return null;

  const left = halves[0] ? halves[0].split(":") : [];
  const right = halves[1] ? halves[1].split(":") : [];
  if (![...left, ...right].every((part) => /^[0-9a-f]{1,4}$/.test(part))) {
    return null;
  }

  const missing = 8 - left.length - right.length;
  const groups =
    halves.length === 2
      ? [...left, ...Array(Math.max(0, missing)).fill("0"), ...right]
      : left;

  if (groups.length !== 8 || (halves.length === 2 && missing < 1)) return null;

  const normalizedGroups = groups.map((part) => part.padStart(4, "0"));
  const isIpv4Mapped =
    normalizedGroups.slice(0, 5).every((part) => part === "0000") &&
    normalizedGroups[5] === "ffff";
  if (isIpv4Mapped) {
    const high = Number.parseInt(normalizedGroups[6], 16);
    const low = Number.parseInt(normalizedGroups[7], 16);
    return [high >> 8, high & 255, low >> 8, low & 255].join(".");
  }

  return normalizedGroups.join(":");
}

export function normalizeClientIp(value: string | null | undefined): string | null {
  if (!value) return null;
  let candidate = value.trim();

  const bracketed = candidate.match(/^\[([^\]]+)](?::\d+)?$/);
  if (bracketed) candidate = bracketed[1];

  const ipv4WithPort = candidate.match(/^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/);
  if (ipv4WithPort) candidate = ipv4WithPort[1];

  candidate = candidate.split("%")[0];
  const version = isIP(candidate);
  if (version === 4) return candidate;
  if (version === 6) return canonicalIpv6(candidate);
  return null;
}

function subnetFor(ip: string): string | null {
  const version = isIP(ip);
  if (version === 4) {
    const octets = ip.split(".");
    return `${octets[0]}.${octets[1]}.${octets[2]}.0/24`;
  }
  if (version === 6) return `${ip.split(":").slice(0, 4).join(":")}::/64`;
  return null;
}

function rulesFor(ip: string | null, email: string, phone: string): RateLimitRule[] {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPhone = phone.replace(/\D/g, "");
  const subnet = ip ? subnetFor(ip) : null;

  return [
    { scope: "email-day", value: normalizedEmail, windowSeconds: 86_400, maximum: 5 },
    { scope: "email-hour", value: normalizedEmail, windowSeconds: 3_600, maximum: 3 },
    ...(ip
      ? [{ scope: "ip-ten-min", value: ip, windowSeconds: 600, maximum: 5 }]
      : []),
    { scope: "phone-day", value: normalizedPhone, windowSeconds: 86_400, maximum: 5 },
    { scope: "phone-hour", value: normalizedPhone, windowSeconds: 3_600, maximum: 3 },
    ...(subnet
      ? [{ scope: "subnet-hour", value: subnet, windowSeconds: 3_600, maximum: 30 }]
      : []),
  ];
}

export function leadDedupeHash(email: string, phone: string): Buffer {
  return privateFingerprint(
    "lead-dedupe",
    `${email.trim().toLowerCase()}\0${phone.replace(/\D/g, "")}`,
  );
}

export async function consumeDurableLeadRateLimit(
  pool: Pool,
  input: { ip: string | null; email: string; phone: string },
): Promise<DurableRateLimitResult> {
  const rules = rulesFor(input.ip, input.email, input.phone).map((rule) => ({
    ...rule,
    fingerprint: privateFingerprint(rule.scope, rule.value),
  }));
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const valuesSql = rules
      .map(
        () =>
          "(?, ?, UTC_TIMESTAMP(6), 1, DATE_ADD(UTC_TIMESTAMP(6), INTERVAL ? SECOND), UTC_TIMESTAMP(6))",
      )
      .join(", ");
    const insertValues = rules.flatMap((rule) => [
      rule.scope,
      rule.fingerprint,
      rule.windowSeconds,
    ]);

    await connection.execute({
      sql: `INSERT INTO lead_rate_limits (
        scope, fingerprint, window_started_at, request_count,
        window_expires_at, last_seen_at
      ) VALUES ${valuesSql}
      ON DUPLICATE KEY UPDATE
        request_count = IF(window_expires_at <= UTC_TIMESTAMP(6), 1, request_count + 1),
        window_started_at = IF(
          window_expires_at <= UTC_TIMESTAMP(6), UTC_TIMESTAMP(6), window_started_at
        ),
        window_expires_at = IF(
          window_expires_at <= UTC_TIMESTAMP(6), VALUES(window_expires_at), window_expires_at
        ),
        last_seen_at = UTC_TIMESTAMP(6)`,
      values: insertValues,
      timeout: DATABASE_TIMEOUT_MS,
    });

    const predicates = rules.map(() => "(scope = ? AND fingerprint = ?)").join(" OR ");
    const selectValues = rules.flatMap((rule) => [rule.scope, rule.fingerprint]);
    const [rows] = await connection.execute<RateLimitRow[]>({
      sql: `SELECT
        scope,
        request_count,
        GREATEST(1, TIMESTAMPDIFF(SECOND, UTC_TIMESTAMP(6), window_expires_at)) AS retry_after
      FROM lead_rate_limits
      WHERE ${predicates}
      FOR UPDATE`,
      values: selectValues,
      timeout: DATABASE_TIMEOUT_MS,
    });

    const maximumByScope = new Map(rules.map((rule) => [rule.scope, rule.maximum]));
    const blockedRows = rows.filter(
      (row) => Number(row.request_count) > (maximumByScope.get(row.scope) ?? 0),
    );
    const retryAfter = blockedRows.reduce(
      (maximum, row) => Math.max(maximum, Number(row.retry_after) || 1),
      0,
    );

    await connection.commit();
    return { allowed: blockedRows.length === 0, retryAfter };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
