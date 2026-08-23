import Image from "next/image";
import Link from "next/link";
import HomeHeroSlider from "@/components/site/HomeHeroSlider";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeIntroduction from "@/components/site/ProgrammeIntroduction";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_SENTENCE, PROGRAMME_PROOF } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/home", {
  title: "Executive MBA Malaysia for Working Managers",
  description:
    `${PROGRAMME_POSITIONING_SENTENCE} Built for Malaysian working managers over three months.`,
  alternates: {
    canonical: "/home",
    languages: { en: "/home", "zh-Hans": "/zh", "x-default": "/home" },
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
    body: "Review the 12 modules, applied project and learning sequence before you commit.",
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
      <section className="home-hero-stage hero" aria-labelledby="home-purpose-title">
        <div className="wrap home-hero-stage-grid">
          <div className="home-hero-main">
            <Reveal>
              <div className="home-hero-lockup">
                <div className="eyebrow"><span className="l" /><span className="mono sec-k">Future Ready Executive MBA</span></div>
                <h2 id="home-purpose-title" className="sec-h home-hero-title">AI can draft the report. <em>It cannot make the decision.</em></h2>
                <p className="home-hero-sub">{PROGRAMME_POSITIONING_SENTENCE} The three-month programme trains working managers to find the real problem, make the case and act on it — using a live challenge from their own business and built around the working week. It begins with a conversation, not a commitment.</p>
              </div>
            </Reveal>
            <HomeHeroSlider />
          </div>
          <div className="home-hero-side">
            <Reveal delay={70}>
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
        </div>
      </section>

      <section className="working-fact-band" aria-label="Programme at a glance">
        <div className="wrap working-fact-grid">
          <div><strong><span>3</span><span className="working-fact-unit">months</span></strong><span>professional development programme</span></div>
          <div><strong><span>{FACTS.trainingDays}</span><span className="working-fact-unit">days</span></strong><span>across three facilitated sessions</span></div>
          <div><strong><span>{FACTS.moduleCount}</span></strong><span>applied management modules</span></div>
          <div><strong><span>1</span><span className="working-fact-unit">project</span></strong><span>built around a live business challenge</span></div>
        </div>
      </section>

      <section className="section home-audience-section">
        <div className="wrap home-audience-grid">
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Built for responsibility</span></div>
              <h2 className="sec-h">For people whose decisions affect more than their own desk.</h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="home-audience-copy">
              <p>Designed for business owners, directors, general managers and senior managers responsible for results, teams, cross-functional decisions or growth plans.</p>
              <ul>
                <li>You are solving a current business issue—not studying theory in isolation.</li>
                <li>You need a rigorous structure that fits around work.</li>
                <li>You want a practical plan you can explain, test and act on.</li>
              </ul>
              <Link href="/executive-mba" className="text-action">See who the programme is for <span aria-hidden="true">↗</span></Link>
              <nav className="home-persona-links" aria-label="Programme routes by role">
                <Link href="/mba-for-working-professionals">Working professionals</Link>
                <Link href="/mba-for-sme-owners">SME owners</Link>
                <Link href="/mba-for-entrepreneurs">Entrepreneurs</Link>
              </nav>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="programme-introduction" className="section home-video-section">
        <div className="wrap home-video-grid">
          <Reveal>
            <div className="home-video-copy">
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">How the three months work</span></div>
              <h2 className="sec-h">One weekend a month. One live business challenge.</h2>
              <p className="sec-sub">Six training days run across three monthly sessions. Between sessions, you apply the frameworks to a current business issue and build a plan that can be reviewed with faculty.</p>
              <ul className="home-video-points">
                <li>Six training days across three monthly sessions</li>
                <li>An applied project based on a live business challenge</li>
                <li>No traditional examinations or thesis</li>
              </ul>
              <Link href="/how-it-works" className="btn btn-primary">See how the programme works <span aria-hidden="true">→</span></Link>
            </div>
          </Reveal>
          <Reveal delay={80}><div className="home-video-frame"><ProgrammeIntroduction image="conversation" placement="home-video-section" /></div></Reveal>
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

      <section className="section home-proof-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div><p className="mono sec-k">Human proof</p><h2 className="sec-h">The work ends in a real room, with real people.</h2></div>
              <p>{PROGRAMME_PROOF.graduates} graduates across {PROGRAMME_PROOF.cohorts} cohorts: {PROGRAMME_PROOF.englishCohorts} English cohorts and the first Mandarin cohort. {PROGRAMME_PROOF.graduationAttendance} attended the inaugural graduation in {PROGRAMME_PROOF.inauguralGraduation}.</p>
            </div>
          </Reveal>
          <div className="home-proof-gallery">
            <Reveal><figure className="home-proof-primary"><Image src="/brand/community/graduation-cohort.jpeg" alt="Future Ready Executive MBA graduates at the inaugural graduation" width={894} height={596} sizes="(max-width: 760px) 100vw, 66vw" /><figcaption><strong>{PROGRAMME_PROOF.graduationAttendance} graduates attended.</strong> Part of a community of {PROGRAMME_PROOF.graduates} graduates across {PROGRAMME_PROOF.englishCohorts} English cohorts and the first Mandarin cohort.</figcaption></figure></Reveal>
            <div className="home-proof-secondary">
              <Reveal delay={50}><figure><Image src="/brand/community/faculty-event.jpeg" alt="Future Ready Executive MBA faculty and CMI representatives" width={2560} height={1440} sizes="(max-width: 760px) 100vw, 32vw" /><figcaption>Practitioner-led faculty and programme representatives.</figcaption></figure></Reveal>
              <Reveal delay={90}><figure><Image src="/brand/community/graduation-graduates.jpeg" alt="Future Ready Executive MBA graduates with their certificates" width={1080} height={810} sizes="(max-width: 760px) 100vw, 32vw" /><figcaption>Completion recognised at the inaugural graduation.</figcaption></figure></Reveal>
            </div>
          </div>
          <div className="home-proof-actions"><Link href="/asian-business-consulting#abc-film" className="text-action" data-track-event="proof_explore" data-track-id="home_graduation_proof" data-track-location="home_proof">Watch the graduation film <span aria-hidden="true">↗</span></Link><Link href="/faculty" className="text-action">Meet the faculty <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section home-decision-snapshot">
        <div className="wrap home-snapshot-grid">
          <Reveal><article><p className="mono sec-k">Fees and funding</p><h2>RM10,000 standard fee.</h2><p>Eligible Malaysian applicants may be considered for a RM5,000 LIFE Innoversity scholarship, subject to availability, assessment and written approval. It is not automatic.</p><Link href="/fees" className="text-action">See the complete fee and funding terms <span aria-hidden="true">↗</span></Link></article></Reveal>
          <Reveal delay={60}><article><p className="mono sec-k">Published 2026 dates</p><h2>Choose a schedule that works around work.</h2><p>Compare the published English and Mandarin sessions. The programme team confirms availability before enrolment.</p><Link href="/intakes" className="text-action">Check available dates <span aria-hidden="true">↗</span></Link></article></Reveal>
        </div>
      </section>

      <section className="section home-closing-cta">
        <div className="wrap home-closing-cta-inner">
          <Reveal><div><p className="mono">The next decision</p><h2>Get the facts. Then decide whether a conversation is worth your time.</h2></div></Reveal>
          <Reveal delay={60}><div className="home-closing-actions"><Link href="#home-programme-guide" className="btn btn-primary" data-track-event="cta_click" data-track-id="home_closing_guide" data-track-location="home_closing">{CTA_LABELS.guide} <span aria-hidden="true">↑</span></Link><Link href="/contact" className="text-action">Contact Future Ready EMBA <span aria-hidden="true">↗</span></Link></div></Reveal>
        </div>
      </section>

      <section className="section working-resources-section home-explore-strip">
        <div className="wrap">
          <Reveal><div className="working-section-head"><div><p className="mono sec-k">Explore</p><h2 className="sec-h">Go straight to the answer you need.</h2></div><p>Each page answers one decision clearly. You do not need to read the entire website before speaking with the programme team.</p></div></Reveal>
          <div className="working-resource-grid">
            {DECISION_PATHS.map((path, index) => <Reveal key={path.href} delay={(index % 3) * 45}><article className="working-resource-card"><span className="mono">{path.n}</span><h3>{path.title}</h3><p>{path.body}</p><Link href={path.href} className="text-action">{path.action} <span aria-hidden="true">↗</span></Link></article></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
