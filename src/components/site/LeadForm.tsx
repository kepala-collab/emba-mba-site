"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

export default function LeadForm({
  programme = "Executive MBA",
  source = "emba-hub",
}: { programme?: string; source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [firstName, setFirstName] = useState("");
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const got: Record<string, string> = {};
    keys.forEach((k) => { const v = p.get(k); if (v) got[k] = v; });
    got.page_path = window.location.pathname;
    got.referrer = document.referrer || "";
    setUtm(got);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = Object.fromEntries(new FormData(f).entries());
    if (!(data.consent as string)) { setStatus("err"); return; }
    setStatus("sending");
    setFirstName(String(data.name || "").split(" ")[0]);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utm, programme_interest: programme, source }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    const msg = encodeURIComponent(
      `Hi, I'm ${firstName || "interested"} — I just applied for the Future Ready Executive MBA (CMI UK).`
    );
    return (
      <div className="form" style={{ alignItems: "flex-start", gap: 16 }}>
        <p className="mono sec-k">Application received</p>
        <h3 style={{ fontSize: "1.5rem", color: "#fff" }}>
          Thank you{firstName ? `, ${firstName}` : ""}. Your application is in.
        </h3>
        <p className="fine">
          Our programme team will be in touch shortly to discuss your fit, the next intake, HRD Corp
          and scholarship options. Want to talk sooner? Message us directly.
        </p>
        <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener">
          Continue on WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="fld">
        <label htmlFor="lf-name">Full name</label>
        <input id="lf-name" name="name" placeholder="Your name" autoComplete="name" required />
      </div>
      <div className="two">
        <div className="fld">
          <label htmlFor="lf-phone">Phone / WhatsApp</label>
          <input id="lf-phone" name="phone" type="tel" placeholder="+60" autoComplete="tel" required />
        </div>
        <div className="fld">
          <label htmlFor="lf-email">Email</label>
          <input id="lf-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
        </div>
      </div>
      <div className="two">
        <div className="fld">
          <label htmlFor="lf-company">Company</label>
          <input id="lf-company" name="company" placeholder="Organisation" autoComplete="organization" />
        </div>
        <div className="fld">
          <label htmlFor="lf-type">Participant</label>
          <select id="lf-type" name="participant_type" defaultValue="malaysian">
            <option value="malaysian">Malaysian</option>
            <option value="international">International</option>
          </select>
        </div>
      </div>
      <label className="check">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree to be contacted about this programme and understand my data is handled under
          Malaysia&rsquo;s PDPA 2010.
        </span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ width: "100%" }}>
        {status === "sending" ? "Sending…" : "Apply Now →"}
      </button>
      {status === "err" && (
        <p className="status err">Please complete the required fields and tick consent, then try again.</p>
      )}
      <p className="fine center" style={{ margin: 0 }}>Free · No obligation · PDPA-compliant</p>
    </form>
  );
}
