import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, THINKING_EDGE, INCLUSIONS, COMPLIANCE, OPERATOR, HRD_CORP_CLAIM } from "@/lib/content";
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
              The next leadership role will demand more than <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>experience alone</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.16rem", maxWidth: "50ch", margin: "24px auto 30px" }}>
              Build a repeatable way to frame complex business decisions, test options and produce a faculty-reviewed action plan. The six-month format is designed around working managers.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">Get the 2026 programme plan →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <ProgrammeMarks centered labelled />
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".08em", fontSize: ".78rem" }}>{FACTS.trainingDays} training days · {FACTS.liveSessions} sessions · English and Mandarin cohorts</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section campaign-shift" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The practical shift</span></div></Reveal>
          <Reveal><h2 className="sec-h">Move from experience-led judgement to a decision process you can explain and repeat.</h2></Reveal>
          <div className="campaign-outcome-grid mt-m">
            <article><span className="mono">BEFORE</span><h3>Complex issues cross functions.</h3><p>Decisions rely on personal experience, assumptions stay untested and the reasoning is difficult to communicate.</p></article>
            <article><span className="mono acc">AFTER</span><h3>The problem, options and action are visible.</h3><p>You use a structured method to define the issue, compare options and build a faculty-reviewed action plan around a live business need.</p></article>
          </div>
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

      {/* Factual proof only; participant stories will be added after permission and verification. */}
      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[["CMI", "Approved and endorsed against CMI’s Professional Standard"], [FACTS.trainingDays, "Facilitated training days across three sessions"], ["1", "Applied project built around a live business issue"], [FACTS.priceNet, "Malaysian participant fee after the published scholarship"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      {/* WHAT YOU WALK AWAY WITH */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Programme inclusions</span></div></Reveal>
          <Reveal><h2 className="sec-h">Programme delivery, coaching, tools and assessment.</h2></Reveal>
          <div role="list" style={{ padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {INCLUSIONS.slice(0, 7).map((it) => (
              <Reveal key={it.b}>
                <div role="listitem" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc" style={{ marginTop: 3, fontWeight: 700 }}>→</span>
                  <span><b style={{ color: "var(--ink)" }}>{it.b}.</b> <span style={{ color: "var(--ink-2)" }}>{it.s}</span></span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s">
            <p className="fine" style={{ marginTop: 26 }}>{FACTS.priceStd} standard → <b style={{ color: "var(--ink)" }}>{FACTS.priceNet}</b> for Malaysian participants after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship. {HRD_CORP_CLAIM.short} Instalment options are listed on the Fees page.</p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading="Get the 2026 programme and scholarship plan."
        sub="Receive the guide first, then choose whether you want details by email, WhatsApp or a short fit call. The team will explain the published intake, Malaysian participant fee and employer-led HRD Corp process."
        formVariant="campaign"
        steps={["Receive the concise programme guide", "Review dates, fee and programme structure", "Choose your next step after you have the facts"]}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE} Programme delivered by {SITE.provider}. This page is operated by {OPERATOR.name}, the authorised {OPERATOR.role}.</p>
        </div>
      </section>
    </>
  );
}
