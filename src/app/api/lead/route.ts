import { NextResponse } from "next/server";

const URL_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);

// Only accept posts that originate from our own site (blocks drive-by bot POSTs).
const ALLOWED_HOST = (() => {
  try { return new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurereadymba.com").host; }
  catch { return "futurereadymba.com"; }
})();

function originAllowed(req: Request): boolean {
  const o = req.headers.get("origin") || req.headers.get("referer");
  if (!o) return false;
  try {
    const h = new URL(o).host;
    return h === ALLOWED_HOST || h.endsWith(".vercel.app") || h.startsWith("localhost") || h.startsWith("127.0.0.1");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    if (!originAllowed(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const b = await req.json();

    // Honeypot — a real user never fills this. Silently accept so bots don't learn.
    if (str(b.website)) {
      return NextResponse.json({ ok: true });
    }

    if (!str(b.name) || !str(b.phone)) {
      return NextResponse.json({ error: "Missing name or phone" }, { status: 400 });
    }
    if (b.consent !== "yes") {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }

    const row = {
      name: str(b.name),
      email: str(b.email),
      phone: str(b.phone),
      company: str(b.company),
      participant_type: str(b.participant_type),
      programme_interest: str(b.programme_interest),
      page_path: str(b.page_path),
      referrer: str(b.referrer),
      utm_source: str(b.utm_source),
      utm_medium: str(b.utm_medium),
      utm_campaign: str(b.utm_campaign),
      utm_term: str(b.utm_term),
      utm_content: str(b.utm_content),
      source: str(b.source) || "emba-hub",
    };

    const res = await fetch(`${URL_BASE}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: KEY,
        Authorization: `Bearer ${KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("Supabase insert failed:", res.status, t);
      return NextResponse.json({ error: "Insert failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead route error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
