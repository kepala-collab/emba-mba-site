import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { SITE, FACTS, THINKING_EDGE, INCLUSIONS, CLIENTS, COMPLIANCE } from "@/lib/content";

export const metadata = {
  title: "You didn't get stuck because you stopped working. | Future Ready Executive MBA",
  description:
    "A CMI (UK) Executive MBA built for working leaders in Malaysia. 3 months of weekends, then Chartered Manager. RM6,000 after scholarship. HRD Corp claimable. See if you qualify.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/meta", languages: { en: "/lp/meta", "zh-Hans": "/zh/lp/meta" } },
};

const SOURCE = "lp-meta";

export default function MetaLandingPage() {
  return (
    <>
      {/* HERO — pattern interrupt */}
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">For leaders who are done coasting</span></div>
          </Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.3rem,5vw,3.6rem)", letterSpacing: "-.02em", lineHeight: 1.08, margin: "10px auto 0", maxWidth: "18ch" }}>
              You didn&rsquo;t get stuck because you stopped working. You got stuck because the <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>thinking</em> stopped scaling.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.16rem", maxWidth: "50ch", margin: "24px auto 30px" }}>
              A CMI (UK) Executive MBA that reinstalls how elite leaders think — in {FACTS.durationLong}, one weekend a month,
              without pausing your career. No thesis. No exams. A real transformation plan for your own business.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">See if you qualify →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <span className="chip"><Image src="/brand/cmi-logo.png" alt="CMI (UK)" width={78} height={26} style={{ height: 26, width: "auto" }} /></span>
              <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={36} height={36} style={{ height: 36, width: "auto" }} /></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".08em", fontSize: ".78rem" }}>{FACTS.gradsApprox} leaders · {FACTS.cohorts} cohorts</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SHIFT — thinking edge */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What actually changes</span></div></Reveal>
          <Reveal><h2 className="sec-h">Seven ways your judgement levels up.</h2></Reveal>
          <div className="insight-grid mt-m">
            {THINKING_EDGE.map((t, i) => (
              <Reveal key={t.i} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>{t.i}</div>
                  <h3 style={{ fontSize: "1.12rem", marginBottom: 8 }}>{t.h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem" }}>{t.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>Taught by faculty who develop leaders at</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.6 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* WHAT YOU WALK AWAY WITH */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What you walk away with</span></div></Reveal>
          <Reveal><h2 className="sec-h">Not a certificate on a shelf. A different operator.</h2></Reveal>
          <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {INCLUSIONS.slice(0, 7).map((it) => (
              <Reveal key={it.b}>
                <li style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc" style={{ marginTop: 3, fontWeight: 700 }}>→</span>
                  <span><b style={{ color: "#fff" }}>{it.b}.</b> <span style={{ color: "var(--ink-2)" }}>{it.s}</span></span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-s">
            <p className="fine" style={{ marginTop: 26 }}>{FACTS.priceStd} → <b style={{ color: "#fff" }}>{FACTS.priceNet}</b> with the RM4,000 Malaysian scholarship · 100% HRD Corp claimable · installments available.</p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading="See if you qualify for the next cohort."
        sub="Register free and our programme team will tell you honestly whether this is a fit — plus the next intake, your scholarship and HRD Corp claim. No obligation."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE} Programme delivered by {SITE.provider}. This page is operated by Right Dots Resources, an authorised enrolment partner.</p>
        </div>
      </section>
    </>
  );
}
