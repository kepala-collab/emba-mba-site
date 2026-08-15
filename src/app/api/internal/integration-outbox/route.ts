import { NextResponse } from "next/server";
import { getDatabasePool } from "@/lib/db";
import { bearerSecretStatus } from "@/lib/internal-auth";
import { processLeadIntegrationOutbox } from "@/lib/lead-integration";

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
export async function POST(request: Request) {
  const authorization = bearerSecretStatus(request, "CONVERSION_CRON_SECRET");
  if (authorization === "unconfigured") {
    return json({ error: "Integration processor is not configured", code: "processor_unconfigured" }, 503);
  }
  if (authorization !== "valid") {
    return json(
      { error: "Unauthorized", code: "unauthorized" },
      401,
      { "WWW-Authenticate": "Bearer" },
    );
  }

  try {
    const result = await processLeadIntegrationOutbox(getDatabasePool(), { limit: 10 });
    if (!result.configured) {
      return json({ error: "CRM webhook is not configured", code: "webhook_unconfigured" }, 503);
    }
    return json(result);
  } catch (error) {
    console.error("Lead integration outbox processing failed", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
    return json({ error: "Integration processing failed", code: "processing_failed" }, 500);
  }
}
