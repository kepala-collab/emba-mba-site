import { NextResponse } from "next/server";
import { getDatabasePool } from "@/lib/db";
import { decodeEmailParameter, unsubscribeConfigured, verifyUnsubscribeToken } from "@/lib/unsubscribe";

export const runtime = "nodejs";

function redirectTo(request: Request, language: string, status: "done" | "invalid" | "error") {
  const path = language === "zh" ? "/zh/unsubscribed" : language === "ms" ? "/ms/unsubscribed" : "/unsubscribed";
  const url = new URL(path, request.url);
  url.searchParams.set("status", status);
  return NextResponse.redirect(url, { status: 303, headers: { "Cache-Control": "no-store, max-age=0" } });
}

type UnsubscribeResult = {
  language: "en" | "zh" | "ms";
  status: "done" | "invalid" | "error";
};

async function processUnsubscribe(request: Request): Promise<UnsubscribeResult> {
  const { searchParams } = new URL(request.url);
  const rawLanguage = searchParams.get("l");
  const language = rawLanguage === "zh" ? "zh" : rawLanguage === "ms" ? "ms" : "en";

  if (!unsubscribeConfigured()) return { language, status: "error" };

  const email = decodeEmailParameter(searchParams.get("e") || "");
  const token = searchParams.get("t") || "";
  if (!email || !verifyUnsubscribeToken(email, token)) {
    return { language, status: "invalid" };
  }

  try {
    await getDatabasePool().execute({
      sql: `UPDATE leads
            SET marketing_opt_out = 1, marketing_opt_out_at = CURRENT_TIMESTAMP
            WHERE email = ? AND marketing_opt_out = 0`,
      values: [email],
      timeout: 5_000,
    });
    return { language, status: "done" };
  } catch {
    return { language, status: "error" };
  }
}

export async function GET(request: Request) {
  const result = await processUnsubscribe(request);
  return redirectTo(request, result.language, result.status);
}

export async function POST(request: Request) {
  const result = await processUnsubscribe(request);
  const status = result.status === "done" ? 200 : result.status === "invalid" ? 400 : 503;
  return NextResponse.json(
    { status: result.status },
    {
      status,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
