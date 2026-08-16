import Link from "next/link";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeIntroduction from "@/components/site/ProgrammeIntroduction";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/", {
  title: "Executive MBA Malaysia for Working Managers",
  description:
    "Build sharper management judgement through a six-month professional programme for working leaders, with an applied business project and CMI-recognised programme certificate.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-Hans": "/zh", "x-default": "/" },
  },
});

const DECISION_PATHS = [
  {
    n: "01",
    title: "The programme",
    body: "See who it is for, how the six months work and what successful participants complete.",
    href: "/executive-mba",
    action: "Understand the programme",
  },
  {
    n: "02",
    title: "The method",
    body: "See how F.A.S.T. turns an unclear business issue into a structured management decision.",
    href: "/how-it-works",
    action: "Explore the method",
  },
  {
    n: "03",
    title: "The curriculum",
    body: "Review the 12 frameworks, applied project and learning sequence before you commit.",
    href: "/curriculum",
    action: "Review the curriculum",
  },
  {
    n: "04",
    title: "CMI recognition",
    body: "Understand the programme certificate, fCMgr and the separate Chartered Manager route.",
    href: "/chartered-manager-malaysia",
    action: "Understand the recognition",
  },
  {
    n: "05",
    title: "Fees and scholarship",
    body: "See the RM10,000 standard fee, scholarship eligibility and employer-led HRD Corp process.",
    href: "/fees",
    action: "See fees and eligibility",
  },
  {
    n: "06",
    title: "2026 dates",
    body: "Compare the published English and Mandarin cohort schedules against your calendar.",
    href: "/intakes",
    action: "Check available dates",
  },
] as const;

const OUTCOMES = [
  ["01", "Find the real problem", "Separate the visible symptom from the decision that actually matters."],
  ["02", "Make the case", "Test assumptions, compare options and explain the reasoning behind your recommendation."],
  ["03", "Move into action", "Turn the decision into a practical plan built around your own organisational context."],
] as const;

export default function Home() {
  return (
    <>
      <section className="working-hero hero">
        <div className="wrap working-hero-grid">
          <div className="working-hero-copy">
            <Reveal>
              <div className="eyebrow">
                <span className="l" />
                <span className="mono sec-k">The Future Ready Executive MBA · for working leaders</span>
              </div>
            </Reveal>
            <Reveal delay={50}>
              <h1>
                Your business will be run by whoever thinks they are <em>Future Ready.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="working-hero-lede">
                Work on a live business challenge, sharpen how you diagnose problems and build an action plan you can explain and execute. The six-month programme is designed around a working manager&rsquo;s schedule.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="working-hero-actions">
                <Link href="/apply" className="btn btn-primary" data-track-event="cta_click" data-track-id="hero_request_guide" data-track-location="hero">
                  Request the programme guide <span aria-hidden="true">→</span>
                </Link>
                <Link href="/executive-mba" className="text-action">
                  Explore the programme <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="working-hero-proof" aria-label="Programme assurance">
                <ProgrammeMarks />
                <span>CMI approved and endorsed · employer approval applies to HRD Corp funding</span>
                <span>Scholarship assessment available for eligible Malaysian applicants</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <ProgrammeIntroduction />
          </Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="Programme at a glance">
        <div className="wrap working-fact-grid">
          <div><strong>{FACTS.durationLong}</strong><span>professional development programme</span></div>
          <div><strong>{FACTS.trainingDays} days</strong><span>across three facilitated sessions</span></div>
          <div><strong>{FACTS.moduleCount}</strong><span>practical management frameworks</span></div>
          <div><strong>1 project</strong><span>built around a live business challenge</span></div>
        </div>
      </section>

      <section className="section working-resources-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div>
                <p className="mono sec-k">One decision at a time</p>
                <h2 className="sec-h">Go straight to the answer you need.</h2>
              </div>
              <p>Each page answers one decision clearly. You do not need to work through the entire website before speaking with the programme team.</p>
            </div>
          </Reveal>
          <div className="working-resource-grid">
            {DECISION_PATHS.map((path, index) => (
              <Reveal key={path.href} delay={(index % 3) * 45}>
                <article className="working-resource-card">
                  <span className="mono">{path.n}</span>
                  <h3>{path.title}</h3>
                  <p>{path.body}</p>
                  <Link href={path.href} className="text-action">{path.action} <span aria-hidden="true">↗</span></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section working-model-section">
        <div className="wrap working-two-column">
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Why this programme exists</span></div>
              <h2 className="sec-h">The expensive decision is the one made too late—or never turned into action.</h2>
              <p className="sec-sub">The programme is built to improve the quality of management decisions, not to add another folder of theory.</p>
              <Link href="/how-it-works" className="text-action working-inline-action">See how F.A.S.T. works <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
          <div className="working-model-steps">
            {OUTCOMES.map(([n, h, p], index) => (
              <Reveal key={n} delay={index * 55}>
                <article>
                  <span className="mono">{n}</span>
                  <div><h3>{h}</h3><p>{p}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source="decision-led-home"
        heading="See whether the programme fits your next move."
        sub="Request the guide or choose a short call, online meeting, in-person meeting or email reply. The team will answer your specific questions; an enquiry is not an admission or payment commitment."
        steps={[
          "Receive the programme structure and published 2026 dates",
          "Ask about role fit, fees, scholarship eligibility or employer funding",
          "Decide whether to continue after you have the facts",
        ]}
      />
    </>
  );
}
