import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, COMPLIANCE, OPERATOR, HRD_CORP_CLAIM, ABC_PROFILE, CERTIFICATE_POSITIONING, CTA_LABELS, PROGRAMME_YEAR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/lp/meta", {
  title: `From Informal Decisions to a Method You Can Show — Executive MBA ${PROGRAMME_YEAR}`,
  description:
    `Across ${FACTS.durationLong}, ${FACTS.trainingDays} facilitated training days across ${FACTS.liveSessions} scheduled sessions, coaching and an applied project on a current issue in your own organisation, while you keep working. Chartered Manager is a separate optional CMI route with its own eligibility, assessment and fees.`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/meta" },
});

const SOURCE = "lp-meta";

const PRESSURES = [
  ["Your role has grown", "The decisions you carry become the material of the applied project."],
  ["The decisions are less obvious", "You define the decision, test the evidence and expose the trade-offs with a method."],
  ["You cannot pause your career", `${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions; the work happens inside your organisation between them.`],
] as const;

const PROCESS = [
  ["01", "Bring a current decision", "Start with a decision you are responsible for in your own organisation."],
  ["02", "Apply the frameworks", "Use a structured process to define the problem, test assumptions and compare practical options."],
  ["03", "Build the action plan", "Turn the analysis into a written action plan reviewed by faculty."],
] as const;

export default function MetaLandingPage() {
  return (
    <>
      <section className="cold-funnel-hero" id="apply">
        <div className="wrap cold-funnel-hero-grid">
          <div className="cold-funnel-copy">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">For managers deciding across people, operations and strategy</span></div>
            </Reveal>
            <Reveal delay={50}>
              <h1>From informal decisions to a method you can show.</h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="cold-funnel-lede">
                Across {FACTS.durationLong}, {FACTS.trainingDays} facilitated training days across {FACTS.liveSessions} scheduled sessions, coaching and an applied project on a current issue in your own organisation, while you keep working. {ABC_PROFILE.programmePositioning}
              </p>
            </Reveal>
            <Reveal delay={130}>
              <ul className="cold-funnel-proof-list" aria-label="Programme facts">
                <li>{FACTS.durationLong}, {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions</li>
                <li>One-to-one coaching and an applied business project inside your own organisation</li>
                <li>You continue in your role throughout</li>
                <li>Assessment is a written action plan reviewed by faculty</li>
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <p className="fine" style={{ maxWidth: "48ch" }}>{CERTIFICATE_POSITIONING.professionalRelevance}</p>
            </Reveal>
            <Reveal delay={170}>
              <div className="cold-funnel-marks">
                <ProgrammeMarks labelled />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="cold-funnel-form-card">
              <LeadForm programme="Executive MBA" source={SOURCE} placement="hero" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[
            ["CMI", "Awarded and endorsed by CMI"],
            [FACTS.trainingDays, `Facilitated training days across ${FACTS.liveSessions} scheduled sessions`],
            [FACTS.cohorts, "Cohorts completed, reported by ABC"],
            ["Selective", "Scholarship assessment for eligible Malaysian applicants"],
          ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>

      <section className="section cold-funnel-pressure">
        <div className="wrap">
          <Reveal><p className="mono sec-k">Why managers begin looking</p></Reveal>
          <Reveal><h2 className="sec-h">A leader can still be learning how to decide.</h2></Reveal>
          <div className="cold-funnel-pressure-grid">
            {PRESSURES.map(([title, body], index) => (
              <Reveal key={title} delay={index * 45}>
                <article><span className="mono">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cold-funnel-process">
        <div className="wrap">
          <Reveal><p className="mono sec-k">What you will do</p></Reveal>
          <Reveal><h2 className="sec-h">A business issue enters. A written action plan leaves.</h2></Reveal>
          <div className="campaign-path mt-m">
            {PROCESS.map(([number, title, body]) => (
              <Reveal key={number}><article><span className="mono">{number}</span><h3>{title}</h3><p>{body}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cold-funnel-recognition">
        <div className="wrap cold-funnel-recognition-grid">
          <Reveal>
            <div>
              <p className="mono sec-k">Recognition, explained plainly</p>
              <h2 className="sec-h">What successful participants hold at the end, and what they do not.</h2>
              <p className="sec-sub">Clear recognition information before you decide.</p>
            </div>
          </Reveal>
          <div className="cold-funnel-recognition-steps">
            <Reveal>
              <article><span className="mono">On completion</span><h3>CMI Certificate of Recognition</h3><p>{CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance} Chartered Manager is a separate optional CMI route, decided by CMI, and is not included in the programme or its published fee.</p></article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading={`${CTA_LABELS.guide}.`}
        sub={`Review the programme structure, published dates, ${FACTS.priceStd} standard fee and CMI recognition before deciding whether to arrange a conversation. ${FACTS.scholarshipEligibility} The scholarship is never automatic. ${HRD_CORP_CLAIM.responsibility}`}
        formVariant="campaign"
        sectionId="request-guide-again"
        steps={["Receive the guide", "Review the facts privately", "Choose whether you want a conversation"]}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE} Programme delivered by {SITE.provider}. This page is operated by {OPERATOR.name}, the authorised {OPERATOR.role}.</p>
        </div>
      </section>
    </>
  );
}
