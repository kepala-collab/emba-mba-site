import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { SITE } from "@/lib/content";

export const runtime = "nodejs";

function equalSecret(provided: string, expected: string) {
  const left = Buffer.from(provided);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

export async function POST(request: NextRequest) {
  const secret = process.env.INDEXNOW_CRON_SECRET;
  const key = process.env.INDEXNOW_KEY;
  const authorization = request.headers.get("authorization") || "";

  if (!secret || !key || !authorization.startsWith("Bearer ") || !equalSecret(authorization.slice(7), secret)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const body = await request.json().catch(() => ({})) as { urls?: unknown };
  const requested = Array.isArray(body.urls) ? body.urls : [];
  const urls = requested
    .filter((value): value is string => typeof value === "string")
    .map((value) => new URL(value, SITE.url))
    .filter((url) => url.origin === SITE.url)
    .map((url) => url.href)
    .slice(0, 100);

  if (!urls.length) return NextResponse.json({ ok: false, error: "No valid site URLs supplied." }, { status: 400 });

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE.url).host,
      key,
      keyLocation: `${SITE.url}/${key}.txt`,
      urlList: urls,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  return NextResponse.json({ ok: response.ok, submitted: urls.length, status: response.status }, { status: response.ok ? 200 : 502 });
}
