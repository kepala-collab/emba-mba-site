import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeIntroduction from "@/components/site/ProgrammeIntroduction";
import Reveal from "@/components/site/Reveal";
import { CERTIFICATE_POSITIONING, FACTS, FACULTY, SIGNATURE_QUOTE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/", {
  title: "Executive MBA Malaysia for Working Managers",
  description:
    "A six-month Executive MBA professional development programme for working managers, with a CMI-recognised certificate and CMgr assessment preparation.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-Hans": "/zh", "x-default": "/" },
  },
});

const RESOURCES = [
  {
    n: "01",
    title: "Programme Guide",
    body: "Review the structure, curriculum, fee, schedule and recognition in one concise document.",
    href: "/resources/advancement-brief",
    action: "Read the guide",
  },
  {
    n: "02",
    title: "Programme Fit Check",
    body: "Answer four questions and create a private checklist for reviewing programme fit. No score and no data sent.",
    href: "/diagnostic",
    action: "Start the check",
  },
  {
    n: "03",
    title: "Chartered Manager Guide",
    body: "Compare fCMgr and CMgr MCMI, CMI's official eligibility routes, assessment process and Malaysia network.",
    href: "/chartered-manager-malaysia",
    action: "Understand the CMI route",
  },
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
                <span className="mono sec-k">Six-month Executive MBA · designed for working managers</span>
              </div>
            </Reveal>
            <Reveal delay={50}>
              <h1>
                Build the management capability for your next leadership role.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="working-hero-lede">
                Complete the programme certificate during months 1–3, then receive three months of support to prepare for CMI&rsquo;s separate Chartered Manager assessment if you meet CMI&rsquo;s criteria. Continue working throughout the programme.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="working-hero-actions">
                <Link href="#programme-at-a-glance" className="btn btn-primary" data-track-event="cta_click" data-track-id="hero_programme_overview" data-track-location="hero">
                  See how the programme works <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/diagnostic" className="text-action">
                  Check programme fit <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="working-hero-proof" aria-label="Programme facts">
                <span>{FACTS.priceNet} for Malaysian participants after scholarship</span>
                <span>Approved and endorsed by CMI against its Professional Standard</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <ProgrammeIntroduction />
          </Reveal>
        </div>
      </section>

      <section id="programme-at-a-glance" className="working-fact-band" aria-label="Programme at a glance">
        <div className="wrap working-fact-grid">
          <div><strong>6 months</strong><span>total professional development programme</span></div>
          <div><strong>6 days</strong><span>of in-person training across months 1–3</span></div>
          <div><strong>12 modules</strong><span>applied to one real business project</span></div>
          <div><strong>{FACTS.priceNet.replace(".00", "")}</strong><span>for Malaysians after the published scholarship</span></div>
        </div>
      </section>

      <section className="section working-model-section">
        <div className="wrap working-two-column">
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">What you will learn</span></div>
              <h2 className="sec-h">Make clearer business decisions and turn them into action.</h2>
              <p className="sec-sub">
                The F.A.S.T. method helps you define the real problem, test assumptions, compare options and build an action plan for your organisation.
              </p>
              <figure className="working-method-visual">
                <Image
                  src="/brand/working-scholar-method.webp"
                  alt="Illustration of structured decision panels used to examine a business problem"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 860px) 100vw, 44vw"
                />
              </figure>
              <Link href="/how-it-works" className="text-action working-inline-action">See the learning method <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
          <div className="working-model-steps">
            {[
              ["01", "Define the real problem", "Identify the decision, evidence and constraints that matter."],
              ["02", "Compare practical options", "Use the programme frameworks to test assumptions and likely consequences."],
              ["03", "Build an action plan", "Apply the work to a business project in your own organisational context."],
            ].map(([n, h, p], index) => (
              <Reveal key={n} delay={index * 60}>
                <article>
                  <span className="mono">{n}</span>
                  <div><h3>{h}</h3><p>{p}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section working-pathway-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div>
                <p className="mono sec-k">Programme structure</p>
                <h2 className="sec-h">Six months. Two clearly separated stages.</h2>
              </div>
              <p>First complete the programme certificate. Chartered Manager is a separate CMI assessment with its own eligibility, assessment and fees.</p>
            </div>
          </Reveal>
          <div className="working-pathway-grid">
            <Reveal>
              <article className="working-pathway-card" data-step="01">
                <p className="mono">Months 01–03</p>
                <h3>Complete the Executive MBA programme</h3>
                <p>Attend six training days across three monthly sessions, receive coaching and complete an applied business project.</p>
                <Link href="/curriculum" className="text-action">See what you will study <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
            <Reveal delay={70}>
              <article className="working-pathway-card working-pathway-card-blue" data-step="02">
                <p className="mono">Months 04–06</p>
                <h3>Prepare for Chartered Manager assessment</h3>
                <p>Eligible participants receive support to organise evidence and prepare for CMI&rsquo;s separate assessment. Chartered Manager status is not automatic.</p>
                <Link href="/chartered-manager-malaysia" className="text-action">Understand the CMI route <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section working-proof-section">
        <div className="wrap working-proof-grid">
          <Reveal>
            <article className="working-recognition-card">
              <div className="working-recognition-mark">
                <Image src="/brand/cmi-logo.png" alt="Chartered Management Institute" width={150} height={50} />
              </div>
              <p className="mono sec-k">Programme recognition</p>
              <h2>A CMI-recognised programme certificate.</h2>
              <p>{CERTIFICATE_POSITIONING.distinction}</p>
              <Link href="/chartered-manager-malaysia" className="text-action">See the certificate and Chartered pathway <span aria-hidden="true">↗</span></Link>
            </article>
          </Reveal>
          <Reveal delay={70}>
            <article className="working-investment-card">
              <p className="mono sec-k">Malaysian participant fee</p>
              <h2>Pay {FACTS.priceNet} after the published scholarship.</h2>
              <dl>
                <div><dt>Standard programme fee</dt><dd>{FACTS.priceStd}</dd></div>
                <div><dt>LIFE Innoversity scholarship</dt><dd>− {FACTS.scholarshipAmt}</dd></div>
                <div className="working-investment-total"><dt>Malaysian participant fee</dt><dd>{FACTS.priceNet}</dd></div>
              </dl>
              <p className="fine">Your employer may apply for HRD Corp funding before training. HRD Corp decides eligibility and the approved amount.</p>
              <Link href="/fees" className="btn btn-primary">See fees and funding <span aria-hidden="true">↗</span></Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section working-resources-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div>
                <p className="mono sec-k">Before you enquire</p>
                <h2 className="sec-h">Check the details at your own pace.</h2>
              </div>
              <p>Review programme fit, fees and employer funding first. Contact the team only when you have a specific question.</p>
            </div>
          </Reveal>
          <div className="working-resource-grid">
            {RESOURCES.map((resource, index) => (
              <Reveal key={resource.title} delay={(index % 4) * 50}>
                <article className="working-resource-card">
                  <span className="mono">{resource.n}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                  <Link href={resource.href} className="text-action">{resource.action} <span aria-hidden="true">↗</span></Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal><div className="working-resources-footer"><Link href="/resources" className="btn btn-ghost">View all programme guides <span aria-hidden="true">↗</span></Link></div></Reveal>
        </div>
      </section>

      <section className="section working-faculty-section">
        <div className="wrap working-faculty-grid">
          <Reveal>
            <div className="working-faculty-intro">
              <p className="mono sec-k">Who leads the learning</p>
              <h2 className="sec-h">Named practitioners, confirmed for each cohort.</h2>
              <p>ABC draws the teaching and coaching team from its published faculty panel and confirms the assigned faculty before Session 1.</p>
              <figure className="working-faculty-quote">
                <blockquote>&ldquo;{SIGNATURE_QUOTE.text}&rdquo;</blockquote>
                <figcaption>{SIGNATURE_QUOTE.attribution} · {SIGNATURE_QUOTE.role}</figcaption>
              </figure>
              <Link href="/faculty" className="btn btn-ghost">Meet all faculty and coaches <span aria-hidden="true">→</span></Link>
            </div>
          </Reveal>
          <div className="working-faculty-list">
            {FACULTY.slice(0, 3).map((faculty, index) => (
              <Reveal key={faculty.n} delay={index * 45}>
                <article>
                  <Image src={faculty.img} alt={faculty.n} width={92} height={92} sizes="72px" />
                  <div>
                    <h3>{faculty.n}</h3>
                    <p>{faculty.r}</p>
                    <span className="mono">{faculty.focus}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source="working-scholar-home"
        heading="Ask questions before you decide."
        sub="Choose a call, online meeting, in-person meeting or email. The programme team will explain fit, dates, fees, recognition and the employer-led HRD Corp process. An enquiry does not commit you to enrol or pay."
      />
    </>
  );
}
