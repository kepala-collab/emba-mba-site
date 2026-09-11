import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, INCLUSIONS, COMPARISON, COMPARISON_SCOPE, COMPLIANCE, OPERATOR, HRD_CORP_CLAIM, ABC_PROFILE, CERTIFICATE_POSITIONING, CTA_LABELS, PROGRAMME_YEAR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/lp/google", {
  title: `Bring a Business Issue. Leave With an Action Plan — Executive MBA ${PROGRAMME_YEAR}`,
  description:
    `Across ${FACTS.durationLong}, ${FACTS.trainingDays} facilitated training days across ${FACTS.liveSessions} scheduled sessions, coaching and an applied project on a current issue in your own organisation, while you keep working.`,
  // Ad landing page — keep it out of organic index so it doesn't compete with SEO pages.
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/google" },
});

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
                <div className="eyebrow"><span className="l" /><span className="mono sec-k">For managers weighing a live business decision</span></div>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.2rem,4.6vw,3.4rem)", letterSpacing: "-.02em", lineHeight: 1.06, marginTop: 6 }}>
                  Bring a business issue. <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Leave with an action plan.</em>
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.12rem", maxWidth: "46ch", margin: "22px 0 26px" }}>
                  Across {FACTS.durationLong}, {FACTS.trainingDays} facilitated training days across {FACTS.liveSessions} scheduled sessions, coaching and an applied project on a current issue in your own organisation, while you keep working. {ABC_PROFILE.programmePositioning}
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <ProgrammeMarks labelled />
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".08em", fontSize: ".8rem" }}>{FACTS.trainingDays} training days · {FACTS.liveSessions} scheduled sessions · English and Mandarin cohorts</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[[FACTS.durationLong, "One live business issue to a faculty-reviewed action plan"], [FACTS.trainingDays, `Facilitated training days across ${FACTS.liveSessions} scheduled sessions`], ["Selective", "Scholarship assessment for eligible Malaysian applicants"]].map(([b, s]) => (
                    <div key={s} className={b.includes("→") ? "lpg-price-stat" : undefined} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", display: "block", color: "var(--ink)" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".6rem", letterSpacing: ".06em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={210}>
                <p className="fine" style={{ marginTop: 16, maxWidth: "48ch" }}>{CERTIFICATE_POSITIONING.professionalRelevance}</p>
              </Reveal>
            </div>

            {/* FORM CARD */}
            <div className="lpg-form" id="apply">
              <Reveal delay={120}>
                <LeadForm programme="Executive MBA" source={SOURCE} placement="hero" variant="campaign" defaultIntent="details_first" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FACTUAL PROOF — testimonial assets will be added only after permission and verification. */}
      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[["CMI", "Awarded and endorsed by CMI"], [FACTS.trainingDays, `Facilitated training days across ${FACTS.liveSessions} scheduled sessions`], [FACTS.cohorts, "Cohorts completed, reported by ABC"], ["Selective", "Scholarship assessment for eligible Malaysian applicants"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section campaign-method">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How the work becomes useful</span></div></Reveal>
          <Reveal><h2 className="sec-h">A business issue enters. A written action plan leaves.</h2></Reveal>
          <div className="campaign-path mt-m">
            {[["01", "Bring a current decision", "Start with a decision you are responsible for in your own organisation."], ["02", "Apply the frameworks", "Use F.A.S.T. and the programme’s decision disciplines to test assumptions and options."], ["03", "Build the action plan", "Turn the analysis into a written action plan reviewed by faculty."], ["04", "Reuse the method", "The frameworks and working templates stay with you for future decisions."]].map(([number, title, copy]) => (
              <Reveal key={number}><article><span className="mono">{number}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What&rsquo;s included</span></div></Reveal>
          <Reveal><h2 className="sec-h">The components included in the programme fee.</h2></Reveal>
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

      {/* WHY THIS VS A REFERENCE ACADEMIC MBA */}
      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Defined programme comparison</span></div></Reveal>
          <Reveal><h2 className="sec-h">Compare purpose, format, assessment and credential.</h2></Reveal>
          <Reveal><p className="sec-sub">{COMPARISON_SCOPE}</p></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {COMPARISON.map((row) => (
              <div key={row.k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{row.k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "var(--ink)", fontSize: ".92rem" }}><span className="acc mono" style={{ fontSize: ".62rem", display: "block", marginBottom: 2 }}>THIS PROGRAMME</span>{row.us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".92rem" }}><span className="mono" style={{ fontSize: ".62rem", display: "block", marginBottom: 2 }}>REFERENCE ACADEMIC MBA</span>{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading={`${CTA_LABELS.guide}.`}
        sub={`Receive the guide first, then choose whether you want WhatsApp or a short conversation. The team will explain the published intake, ${FACTS.priceStd} standard fee, and the employer-led HRD Corp process. ${FACTS.scholarshipEligibility} The scholarship is never automatic. ${HRD_CORP_CLAIM.responsibility}`}
        formVariant="campaign"
        sectionId="request-plan-again"
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
