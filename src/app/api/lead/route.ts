import { NextResponse } from "next/server";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);

export async function POST(req: Request) {
  try {
    const b = await req.json();

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

    const res = await fetch(`${URL}/rest/v1/leads`, {
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
