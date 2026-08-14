import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { getDatabasePool } from "@/lib/db";
import { processLeadEmailOutbox } from "@/lib/lead-email";

export const runtime = "nodejs";

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

function cronSecretStatus(request: Request): "valid" | "invalid" | "unconfigured" {
  const secret = process.env.EMAIL_CRON_SECRET?.trim() || "";
  if (Buffer.byteLength(secret, "utf8") < 32) return "unconfigured";

  const provided = request.headers.get("authorization") || "";
  const expected = `Bearer ${secret}`;
  const providedBuffer = Buffer.from(provided, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");
  if (providedBuffer.length !== expectedBuffer.length) return "invalid";
  return timingSafeEqual(providedBuffer, expectedBuffer) ? "valid" : "invalid";
}

function safeErrorDetails(error: unknown) {
  const details: {
    type: string;
    code?: string;
    errno?: number;
    sqlState?: string;
  } = {
    type: error instanceof Error ? error.name : "UnknownError",
  };
  if (!error || typeof error !== "object") return details;

  const candidate = error as {
    code?: unknown;
    errno?: unknown;
    sqlState?: unknown;
  };
  if (typeof candidate.code === "string" && /^[A-Z0-9_-]{1,48}$/.test(candidate.code)) {
    details.code = candidate.code;
  }
  if (typeof candidate.errno === "number" && Number.isSafeInteger(candidate.errno)) {
    details.errno = candidate.errno;
  }
  if (typeof candidate.sqlState === "string" && /^[A-Z0-9]{1,8}$/.test(candidate.sqlState)) {
    details.sqlState = candidate.sqlState;
  }
  return details;
}

export async function POST(request: Request) {
  const authorization = cronSecretStatus(request);
  if (authorization === "unconfigured") {
    return json({ error: "Email processor is not configured" }, 503);
  }
  if (authorization !== "valid") {
    return json(
      { error: "Unauthorized" },
      401,
      { "WWW-Authenticate": "Bearer" },
    );
  }

  try {
    const result = await processLeadEmailOutbox(getDatabasePool(), { limit: 10 });
    if (!result.configured) {
      return json({ error: "Email delivery is not configured" }, 503);
    }
    return json(result);
  } catch (error) {
    console.error("Lead email outbox processing failed", safeErrorDetails(error));
    return json({ error: "Email processing failed" }, 500);
  }
}
