import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { ABC_PROFILE, CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, HRD_CORP_CLAIM, INCLUSIONS, THINKING_EDGE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ai-executive-mba", {
  title: "Start With the Business Problem, Not the Model",
  description:
    "Bring an AI-adoption decision and work it, across the six months of the Future Ready Executive MBA, into a written plan reviewed by faculty.",
});

const BUSINESS_PILLARS = [
  ["AI priorities", "Connect a proposed AI use case to the organisation's strategic objectives and operating constraints."],
  ["Data interpretation", "Separate reliable signals from incomplete, irrelevant or misleading data."],
  ["Process redesign", "Map where automation changes tasks, controls, hand-offs and decision rights."],
  ["Innovation governance", "Define how ideas are selected, tested, measured and stopped."],
  ["Value measurement", "Assign an owner, a baseline and a success measure to the initiative."],
];

const CAREER_PILLARS = [
  ["Leadership", "Set the purpose, boundaries and accountability for AI-enabled work."],
  ["Critical judgement", "Question model outputs, assumptions, evidence quality and unintended effects."],
  ["Decision design", "Decide which decisions stay human-led and where a tool only supports them."],
  ["Stakeholder alignment", "Explain the proposed change, its controls and its effect on teams and customers."],
  ["Implementation", "Write the selected use case into an action plan with owners and measures."],
];

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">For managers deciding where AI belongs · Malaysia</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              Start with the business problem, <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>not the model.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              Being asked to decide on AI is now part of the role. The business question comes before the tool.
              Bring a live AI-adoption decision into the same <b style={{ color: "var(--ink)" }}>{FACTS.durationLong}</b>{" "}
              <Link href="/executive-mba" className="acc">Future Ready Executive MBA</Link>. Work it into a written action plan
              reviewed by faculty. {ABC_PROFILE.programmePositioning}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              From one AI use case to <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>a plan your team can govern.</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
              <Link href="/how-it-works" className="btn btn-ghost">See how the six months work</Link>
              <Link href="/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.company}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What the AI lens covers</span></div></Reveal>
          <Reveal><h2 className="sec-h">Weigh the business case and the leadership responsibility together.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            A proposed AI use case needs both: a sound business case and clear human accountability. You examine
            your organisation, the decision process behind the use case, and your own role in implementation.
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

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Leadership · judgement · decision rights · alignment · implementation</div></Reveal>
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
          <Reveal><h2 className="sec-h">Define the decision before you choose a model.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            The <Link href="/how-it-works" className="acc">F.A.S.T. method</Link> starts with the desired outcome,
            the relevant evidence, the constraints and the risks. Only then do you decide whether AI is appropriate,
            and how its output will be reviewed.
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
              ["Credential", `${CERTIFICATE_POSITIONING.distinction} ${CERTIFICATE_POSITIONING.professionalRelevance}`],
              ["HRD Corp", HRD_CORP_CLAIM.short],
              ["Format", `${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions, one-to-one coaching and an applied business project, across ${FACTS.durationLong}.`],
              ["Investment", `${FACTS.priceStd} standard fee. ${FACTS.scholarshipEligibility}`],
              ["Applied project", INCLUSIONS[4].s],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            The method is designed to develop decision capability for AI-related work; business outcomes depend on
            the participant&rsquo;s own evidence, choices and execution.
          </p></Reveal>
        </div>
      </section>

      {/* 5 · CLOSING CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            Review the facts before you choose an intake.
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            Review the published intakes and choose the dates that fit your responsibilities.
            The programme team will answer questions on structure, fees, recognition and employer-led HRD Corp funding.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
            <Link href="/executive-mba" className="btn btn-ghost">Explore the full programme</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection programme="AI Executive MBA" heading="Discuss the AI decision you are weighing." />
    </>
  );
}
