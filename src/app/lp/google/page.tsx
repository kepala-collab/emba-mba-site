import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import CtaSection from "@/components/site/CtaSection";
import { SITE, FACTS, INCLUSIONS, COMPARISON, CLIENTS, COMPLIANCE } from "@/lib/content";

export const metadata = {
  title: "Executive MBA in Malaysia — CMI (UK), 3 Months, HRD Corp Claimable",
  description:
    "Earn a CMI (UK)-recognised Executive MBA in 3 months of weekends, then progress to Chartered Manager. RM10,000 → RM6,000 with scholarship. HRD Corp claimable. Apply free.",
  // Ad landing page — keep it out of organic index so it doesn't compete with SEO pages.
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/google", languages: { en: "/lp/google", "zh-Hans": "/zh/lp/google" } },
};

const SOURCE = "lp-google";

export default function GoogleLandingPage() {
  return (
    <>
      {/* HERO + FORM */}
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <div className="eyebrow"><span className="l" /><span className="mono sec-k">CMI (UK) Endorsed · HRD Corp Claimable</span></div>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.2rem,4.6vw,3.4rem)", letterSpacing: "-.02em", lineHeight: 1.06, marginTop: 6 }}>
                  An accredited Executive MBA in Malaysia — in <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>3 months</em> of weekends.
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.12rem", maxWidth: "46ch", margin: "22px 0 26px" }}>
                  Recognised by the Chartered Management Institute (UK). Earn your Executive MBA certification in three sessions,
                  then progress to <b style={{ color: "#fff" }}>Chartered Manager (CMgr)</b> — all while you keep working.
                  No thesis, no exams.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="Chartered Management Institute UK" width={80} height={28} style={{ height: 28, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={38} height={38} style={{ height: 38, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".08em", fontSize: ".8rem" }}>{FACTS.gradsApprox} leaders trained · {FACTS.cohorts} cohorts</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[["3 months", "To CMI certification"], [`${FACTS.priceStd} → ${FACTS.priceNet}`, "After scholarship"], ["100%", "HRD Corp claimable"]].map(([b, s]) => (
                    <div key={s} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", display: "block", color: "#fff" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".6rem", letterSpacing: ".06em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* FORM CARD */}
            <div className="lpg-form">
              <Reveal delay={120}>
                <div className="card" style={{ padding: 26, background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)" }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>Free · Two minutes</p>
                  <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: 8, lineHeight: 1.25 }}>Check your eligibility &amp; next intake</h2>
                  <p className="fine" style={{ marginBottom: 18 }}>Tell us where you are and our programme team calls you back — fit, dates, scholarship and HRD Corp, no obligation.</p>
                  <LeadForm programme="Executive MBA" source={SOURCE} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>Faculty trusted to develop leaders at</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.6 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What&rsquo;s included</span></div></Reveal>
          <Reveal><h2 className="sec-h">Everything you need to lead transformation — not just manage.</h2></Reveal>
          <div className="insight-grid mt-m">
            {INCLUSIONS.slice(0, 6).map((it, i) => (
              <Reveal key={it.b} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".72rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.12rem", marginBottom: 8 }}>{it.b}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem" }}>{it.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS VS A TRADITIONAL MBA */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Why this, not a 2-year MBA</span></div></Reveal>
          <Reveal><h2 className="sec-h">Same credibility. A fraction of the time and cost.</h2></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {COMPARISON.map((row) => (
              <div key={row.k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{row.k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "#fff", fontSize: ".92rem" }}><span className="acc mono" style={{ fontSize: ".62rem", display: "block", marginBottom: 2 }}>THIS PROGRAMME</span>{row.us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".92rem" }}><span className="mono" style={{ fontSize: ".62rem", display: "block", marginBottom: 2, opacity: .7 }}>TRADITIONAL MBA</span>{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading="Ready to earn your Executive MBA?"
        sub="Register free and our programme team will confirm your eligibility, the next intake dates, your scholarship and HRD Corp claim. No obligation."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE} Programme delivered by {SITE.provider}. This page is operated by Right Dots Resources, an authorised enrolment partner.</p>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .lpg-grid{grid-template-columns:1fr!important;gap:30px!important}
          .lpg-form{order:-1}
          .lpg-cmp{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}
