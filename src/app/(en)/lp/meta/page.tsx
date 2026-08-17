import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, COMPLIANCE, OPERATOR, HRD_CORP_CLAIM } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/lp/meta", {
  title: "A Practical Management Programme for Working Leaders",
  description:
    "Bring a current business challenge and build a structured management action plan through six facilitated training days, coaching and an applied project.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/meta", languages: { en: "/lp/meta", "zh-Hans": "/zh/lp/meta" } },
});

const SOURCE = "lp-meta";

const PRESSURES = [
  ["Your role has grown", "You now make decisions across people, operations and strategy, but your management approach has developed informally."],
  ["The decisions are less obvious", "Important issues cross functions, assumptions are difficult to test and the right next move is not always visible."],
  ["You cannot pause your career", "You need structured professional development that can be applied while you continue working."],
] as const;

const PROCESS = [
  ["01", "Bring a current challenge", "Start with a decision, growth constraint or organisational issue that matters in your work."],
  ["02", "Apply the management frameworks", "Use a structured process to define the problem, test assumptions and compare practical options."],
  ["03", "Build the action plan", "Turn the analysis into a faculty-reviewed applied project you can explain and use."],
] as const;

export default function MetaLandingPage() {
  return (
    <>
      <section className="cold-funnel-hero" id="apply">
        <div className="wrap cold-funnel-hero-grid">
          <div className="cold-funnel-copy">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">For experienced Malaysian managers</span></div>
            </Reveal>
            <Reveal delay={50}>
              <h1>Make better business decisions without stepping away from work.</h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="cold-funnel-lede">
                Bring one current business challenge. Through six facilitated training days, coaching and an applied project, build an action plan you can explain and put into practice.
              </p>
            </Reveal>
            <Reveal delay={130}>
              <ul className="cold-funnel-proof-list" aria-label="Programme highlights">
                <li>Six-month professional development programme</li>
                <li>Designed around full-time work</li>
                <li>No traditional examination or thesis</li>
              </ul>
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
            ["CMI", "Approved and endorsed against CMI’s Professional Standard"],
            [FACTS.trainingDays, "Facilitated training days across three monthly sessions"],
            ["1", "Applied project built around a live business issue"],
            [FACTS.scholarshipAmount, "Scholarship available to eligible Malaysian applicants"],
          ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>

      <section className="section cold-funnel-pressure">
        <div className="wrap">
          <Reveal><p className="mono sec-k">Why managers begin looking</p></Reveal>
          <Reveal><h2 className="sec-h">Your responsibility can grow faster than your management toolkit.</h2></Reveal>
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
          <Reveal><h2 className="sec-h">A business issue enters. A structured action plan leaves.</h2></Reveal>
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
              <h2 className="sec-h">The programme certificate and Chartered Manager are not the same award.</h2>
              <p className="sec-sub">Keeping the two stages separate makes the decision easier to evaluate.</p>
            </div>
          </Reveal>
          <div className="cold-funnel-recognition-steps">
            <Reveal>
              <article><span className="mono">On completion</span><h3>CMI Certificate of Recognition</h3><p>Successful participants complete a professional programme approved and endorsed against CMI&rsquo;s Professional Standard. It is not an MQA-accredited academic degree or regulated qualification.</p></article>
            </Reveal>
            <Reveal delay={50}>
              <article><span className="mono">Optional next step</span><h3>Separate Chartered Manager assessment</h3><p>Eligible participants receive preparation support during months four to six. CMI confirms the applicable route and controls eligibility, assessment, membership and fees. CMgr is not automatic.</p></article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading="Get the Working Manager’s 2026 Progression Guide."
        sub={`Review the programme structure, published dates, ${FACTS.priceStd} standard fee, scholarship criteria and CMI recognition before deciding whether to speak with the team. ${HRD_CORP_CLAIM.responsibility}`}
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
