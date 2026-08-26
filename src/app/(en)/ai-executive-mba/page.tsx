import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, HRD_CORP_CLAIM, THINKING_EDGE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ai-executive-mba", {
  title: "Executive MBA for AI-Enabled Leadership",
  description:
    "Apply the Future Ready Executive MBA frameworks to AI adoption, data-informed decisions, process redesign and responsible implementation.",
});

const BUSINESS_PILLARS = [
  ["AI priorities", "Connect AI use cases to the organisation's strategic objectives and operating constraints."],
  ["Data interpretation", "Separate reliable signals from incomplete, irrelevant or misleading data."],
  ["Process redesign", "Map where automation changes tasks, controls, hand-offs and decision rights."],
  ["Innovation governance", "Define how ideas are selected, tested, measured and stopped."],
  ["Value measurement", "Assign an owner, baseline and success measure to each initiative."],
];

const CAREER_PILLARS = [
  ["Leadership", "Set the purpose, boundaries and accountability for AI-enabled work."],
  ["Critical judgment", "Question model outputs, assumptions, evidence quality and unintended effects."],
  ["Decision design", "Clarify which decisions remain human-led and where tools provide support."],
  ["Stakeholder alignment", "Explain the proposed change, its controls and its effect on teams and customers."],
  ["Implementation", "Translate a selected use case into an action plan with owners and measures."],
];

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">AI-enabled leadership · CMI-recognised programme</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              Lead AI adoption as a <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>business decision.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              This page explains how the CMI-recognised <Link href="/executive-mba" className="acc">Future Ready Executive MBA</Link>{" "}
              applies its decision frameworks to AI strategy, data, automation, governance and implementation.
              It is the same <b style={{ color: "var(--ink)" }}>{FACTS.durationLong}</b> programme, not a separate software or technical certification.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              From use-case selection to <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>governed execution.</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
              <Link href="/how-it-works" className="btn btn-ghost">See how it works</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What the AI lens covers</span></div></Reveal>
          <Reveal><h2 className="sec-h">Business design and leadership responsibility.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            Effective adoption requires both: a sound business case and clear human accountability. The programme
            examines the organisation, the decision process and the leader&rsquo;s role in implementation.
          </p></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Business · priorities · data · process · governance · measures</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {BUSINESS_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Leadership · judgment · decision rights · alignment · implementation</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {CAREER_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 3 · CONTEXT OVER CONTENT */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Questions before tools</span></div></Reveal>
          <Reveal><h2 className="sec-h">Start with the business problem, not the model.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            The <Link href="/how-it-works" className="acc">F.A.S.T. method</Link> begins by defining the desired outcome,
            relevant evidence, constraints and risks. Only then does the leader decide whether AI is appropriate and
            how its output will be reviewed.
          </p></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {THINKING_EDGE.slice(0, 3).map((e) => (
              <div key={e.i} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>{e.i}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "14px 0 8px" }}>{e.h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{e.p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 4 · SAME-PROGRAMME FACTS STRIP */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Programme facts</span></div></Reveal>
          <Reveal><h2 className="sec-h">The AI focus does not change the programme&rsquo;s formal status.</h2></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["Awarded and endorsed by CMI", "The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. It is not an MQA-regulated academic degree."],
              ["HRD Corp", HRD_CORP_CLAIM.short],
              ["Format", "Six-month programme: three scheduled programme sessions with coaching and an applied business project."],
              ["Investment", FACTS.priceStd + " standard. Eligible Malaysian applicants may be considered for a LIFE Innoversity scholarship; any award and resulting participant fee are confirmed individually in writing."],
              ["Applied project", "Participants complete a transformation plan for their own business; there is no traditional examination or thesis."],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            This professional programme is awarded and endorsed by CMI, not an MQA-accredited academic degree or a
            regulated qualification. It does not guarantee income, promotion or a business result.
          </p></Reveal>
        </div>
      </section>

      {/* 5 · URGENCY + CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            Review the programme before choosing an intake.
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            Review the published intakes and choose a cohort whose dates fit your responsibilities.
            The programme team will explain the curriculum, format and application requirements.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
            <Link href="/executive-mba" className="btn btn-ghost">Explore the full programme</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection programme="AI Executive MBA" heading="Discuss how the programme applies to your AI priorities." />
    </>
  );
}
