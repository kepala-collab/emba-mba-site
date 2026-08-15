import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, THINKING_EDGE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/mba-for-entrepreneurs", {
  title: "Executive MBA for Entrepreneurs & Founders",
  description:
    "A six-month Executive MBA pathway for founders: strategic leadership, a CMI-recognised programme certificate and supported CMgr preparation.",
});

export default function MbaForEntrepreneursPage() {
  const firstPrinciples = THINKING_EDGE.find((t) => t.i.includes("First-Principle"));
  const systems = THINKING_EDGE.find((t) => t.i.includes("Systems"));
  const framework = THINKING_EDGE.find((t) => t.i.includes("Framework"));

  const built = [
    {
      h: "First-principles problem solving",
      p: `${firstPrinciples?.p ?? "Separate verified constraints from inherited assumptions."} Use the result to define and test a differentiated proposition.`,
    },
    {
      h: "Business-model & JTBD thinking",
      p: "Define the customer job, evidence, alternatives and willingness to pay before committing product and pricing decisions.",
    },
    {
      h: "AI-enabled decision review",
      p: "Evaluate where AI supports research, analysis or workflow—and where human review and accountability remain necessary.",
    },
    {
      h: "Strategy for stakeholder review",
      p: `${systems?.p ?? "Trace cause to third-order consequence before you commit."} Document the assumptions, choices, actions and measures for review by co-founders, boards or investors.`,
    },
    {
      h: "Cross-functional perspectives",
      p: "Work through decisions with participants who hold responsibility across ownership, general management and senior functions.",
    },
    {
      h: "Structure for competing priorities",
      p: framework?.p ?? "Turn overwhelming complexity into a decision you can act on.",
    },
  ];

  const format = [
    { h: "Months, not years", p: "The full pathway runs for six months: three months to the CMI-recognised programme certificate, then three months of supported Chartered Manager assessment preparation for eligible participants." },
    { h: "One weekend a month, or online", p: "The certificate phase uses one scheduled weekend a month; the global online route removes the need for physical attendance." },
    { h: "Applied during the programme", p: "There is no traditional thesis or examination. Participants apply the frameworks to the venture or organisation they lead." },
    { h: "Written catch-up route", p: "If you miss a session, ABC records the approved catch-up method in writing: video access or attendance in a named later cohort." },
  ];

  return (
    <>
      {/* 1 · Intro */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For entrepreneurs &amp; startup founders</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              Frameworks for decisions made while <span className="acc">building the venture.</span>
            </h1>
          </Reveal>
          <p className="sec-sub">
            Founders make linked decisions about customers, product, pricing, capital, capability and timing.
            The Future Ready Executive MBA applies first-principles, systems and Job-To-Be-Done frameworks
            to those decisions across {FACTS.durationLong}. The applied project uses the venture or organisation
            the participant is building.
          </p>
          <p className="mono sec-k mt-s">
            Six months · three monthly programme weekends + supported CMgr assessment preparation · recognised by CMI (UK)
          </p>
          <p className="sec-sub mt-s">
            See the full{" "}
            <Link href="/executive-mba" className="acc">Executive MBA programme</Link>, or how the{" "}
            <Link href="/how-it-works" className="acc">method works</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Built for how founders move */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Founder decision areas</span>
          </div>
          <Reveal>
            <h2 className="sec-h">From proposition to an executable business model.</h2>
          </Reveal>
          <p className="sec-sub">
            These frameworks structure customer evidence, strategic choices, resource allocation,
            stakeholder communication and implementation.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {built.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            See how the programme applies its decision frameworks to{" "}
            <Link href="/ai-executive-mba" className="acc">AI-enabled leadership</Link>.
          </p>
        </div>
      </section>

      {/* 3 · Apply to your venture */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Applied to your venture</span>
          </div>
          <Reveal>
            <h2 className="sec-h">The applied project addresses your own business challenge.</h2>
          </Reveal>
          <p className="sec-sub">
            There is no traditional thesis or examination. Participants define a live challenge,
            apply the programme frameworks and produce a sequenced transformation plan for faculty review.
            The plan identifies assumptions, decisions, actions, owners and measures for discussion with
            co-founders, boards or investors.
          </p>
          <p className="fine mt-s">
            No funding or growth is promised — the frameworks and the plan are yours; the outcomes
            depend on how you execute. See how the{" "}
            <Link href="/how-it-works" className="acc">method builds toward the capstone</Link>.
          </p>
        </div>
      </section>

      {/* 4 · Why the format works for founders */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Why the format works for founders</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Continue operating while completing the programme.</h2>
          </Reveal>
          <p className="sec-sub">
            The certificate phase uses three monthly weekend sessions, followed by three months of
            supported Chartered Manager assessment preparation for participants who meet CMI&rsquo;s criteria.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {format.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section">
        <div className="wrap center">
          <Reveal>
            <h2 className="sec-h">Review the programme against your venture&rsquo;s current decisions.</h2>
          </Reveal>
          <p className="sec-sub">
            The programme runs for {FACTS.durationLong}. The standard fee is {FACTS.priceStd}, or {FACTS.priceNet}{" "}
            for Malaysian participants after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">Discuss your programme fit</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the decisions your venture needs to structure." />
    </>
  );
}
