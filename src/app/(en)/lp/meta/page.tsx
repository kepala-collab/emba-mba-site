import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { SITE, FACTS, THINKING_EDGE, INCLUSIONS, CLIENTS, COMPLIANCE, OPERATOR, HRD_CORP_CLAIM } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/lp/meta", {
  title: "Executive MBA for Working Leaders | Future Ready",
  description:
    "A six-month professional management programme for working leaders: three monthly programme sessions followed by Chartered Manager assessment preparation for eligible participants.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/meta", languages: { en: "/lp/meta", "zh-Hans": "/zh/lp/meta" } },
});

const SOURCE = "lp-meta";

export default function MetaLandingPage() {
  return (
    <>
      {/* HERO — pattern interrupt */}
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">For working leaders with business-wide responsibility</span></div>
          </Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.3rem,5vw,3.6rem)", letterSpacing: "-.02em", lineHeight: 1.08, margin: "10px auto 0", maxWidth: "18ch" }}>
              Develop a repeatable way to frame complex <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>business decisions</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.16rem", maxWidth: "50ch", margin: "24px auto 30px" }}>
              A six-month programme: three months of monthly sessions leading to the CMI-recognised Executive MBA certificate, followed by three months of Chartered Manager assessment preparation for eligible participants—while you continue working.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">Discuss programme fit →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <span className="chip"><Image src="/brand/cmi-logo.png" alt="CMI (UK)" width={78} height={26} style={{ height: 26, width: "auto" }} /></span>
              <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={36} height={36} style={{ height: 36, width: "auto" }} /></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".08em", fontSize: ".78rem" }}>{FACTS.trainingDays} training days · {FACTS.liveSessions} sessions · English and Mandarin cohorts</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SHIFT — thinking edge */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Capabilities developed</span></div></Reveal>
          <Reveal><h2 className="sec-h">Seven disciplines used as one decision process.</h2></Reveal>
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
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>Organisations listed in ABC&rsquo;s company profile; inclusion does not imply endorsement</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.7 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* WHAT YOU WALK AWAY WITH */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Programme inclusions</span></div></Reveal>
          <Reveal><h2 className="sec-h">Programme delivery, coaching, tools and assessment.</h2></Reveal>
          <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {INCLUSIONS.slice(0, 7).map((it) => (
              <Reveal key={it.b}>
                <li style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc" style={{ marginTop: 3, fontWeight: 700 }}>→</span>
                  <span><b style={{ color: "var(--ink)" }}>{it.b}.</b> <span style={{ color: "var(--ink-2)" }}>{it.s}</span></span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-s">
            <p className="fine" style={{ marginTop: 26 }}>{FACTS.priceStd} standard → <b style={{ color: "var(--ink)" }}>{FACTS.priceNet}</b> for Malaysian participants after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship. {HRD_CORP_CLAIM.short} Instalment options are listed on the Fees page.</p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading="Discuss programme fit and the next cohort."
        sub="Request a programme-fit conversation. The team will explain the published intake, Malaysian participant fee and employer-led HRD Corp process. An enquiry is not an admission or payment commitment."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE} Programme delivered by {SITE.provider}. This page is operated by {OPERATOR.name}, the authorised {OPERATOR.role}.</p>
        </div>
      </section>
    </>
  );
}
