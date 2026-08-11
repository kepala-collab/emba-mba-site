import { NextResponse } from "next/server";
import { ensureLeadsTable, getDatabasePool } from "@/lib/db";

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);

// Only accept posts that originate from our own site (blocks drive-by bot POSTs).
const ALLOWED_HOSTNAMES = (() => {
  try {
    const hostname = new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://futurereadymba.com",
    ).hostname;
    return new Set([hostname, `www.${hostname.replace(/^www\./, "")}`]);
  } catch {
    return new Set(["futurereadymba.com", "www.futurereadymba.com"]);
  }
})();

function originAllowed(req: Request): boolean {
  const o = req.headers.get("origin") || req.headers.get("referer");
  if (!o) return false;
  try {
    const hostname = new URL(o).hostname;
    const isLocalDevelopment =
      process.env.NODE_ENV !== "production" &&
      (hostname === "localhost" || hostname === "127.0.0.1");
    return ALLOWED_HOSTNAMES.has(hostname) || isLocalDevelopment;
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

    await ensureLeadsTable();
    await getDatabasePool().execute(
      `INSERT INTO leads (
        name, email, phone, company, participant_type, programme_interest,
        page_path, referrer, utm_source, utm_medium, utm_campaign, utm_term,
        utm_content, source
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        row.name,
        row.email,
        row.phone,
        row.company,
        row.participant_type,
        row.programme_interest,
        row.page_path,
        row.referrer,
        row.utm_source,
        row.utm_medium,
        row.utm_campaign,
        row.utm_term,
        row.utm_content,
        row.source,
      ],
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead route error:", error);
    return NextResponse.json({ error: "Unable to submit enquiry" }, { status: 500 });
  }
}
