import Link from "next/link";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeIntroduction from "@/components/site/ProgrammeIntroduction";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/", {
  title: "Executive MBA Malaysia for Working Managers",
  description:
    "A three-month CMI-recognised Executive MBA for working leaders: practical decision frameworks, an applied business project and no traditional exams or thesis.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-Hans": "/zh", "x-default": "/" },
  },
});

const DECISION_PATHS = [
  {
    n: "01",
    title: "The programme",
    body: "See who it is for, how the three months work and what successful participants complete.",
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
                Lead with certainty when the business gets complicated.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="working-hero-lede">
                A three-month Executive MBA for working leaders who need to make better decisions, create momentum and deliver results in the real world.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="working-hero-actions">
                <Link href="#home-programme-guide" className="btn btn-primary" data-track-event="cta_click" data-track-id="hero_request_guide" data-track-location="hero">
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
                <span>CMI approved and endorsed against its Professional Standard</span>
                <span>Scholarship assessment available for eligible Malaysian applicants</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <div id="home-programme-guide" className="working-hero-form">
              <LeadForm
                programme="Executive MBA"
                source="decision-led-home-hero"
                placement="hero"
                defaultIntent="details_first"
                variant="campaign"
              />
            </div>
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
              <p className="sec-sub">Learn to cut through complexity, ask better questions and turn a live business issue into a practical action plan—not another folder of theory.</p>
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

      <section id="programme-introduction" className="section home-video-section">
        <div className="wrap home-video-grid">
          <Reveal>
            <div className="home-video-copy">
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Programme introduction</span></div>
              <h2 className="sec-h">See how the three-month programme works before you decide.</h2>
              <p className="sec-sub">Use the programme introduction to understand the three-month format, the applied project and what you will take back into your work. A complete transcript is available, and no contact details are required.</p>
              <ul className="home-video-points">
                <li>Six training days across three monthly sessions</li>
                <li>An applied project based on a live business challenge</li>
                <li>No traditional examinations or thesis</li>
              </ul>
              <Link href="#home-programme-guide" className="btn btn-primary" data-track-event="cta_click" data-track-id="video_request_guide" data-track-location="programme_introduction">
                Request the programme guide <span aria-hidden="true">↑</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="home-video-frame">
              <ProgrammeIntroduction image="conversation" placement="home-video-section" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
