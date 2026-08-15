import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/site/CtaSection";
import DecisionBrief from "@/components/site/DecisionBrief";
import ProgrammeIntroduction from "@/components/site/ProgrammeIntroduction";
import Reveal from "@/components/site/Reveal";
import { CERTIFICATE_POSITIONING, FACTS, SIGNATURE_QUOTE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/", {
  title: "Future Ready Executive MBA — Working Scholar",
  description:
    "Six-month professional development for experienced working adults, with applied frameworks, a CMI-recognised programme certificate and Chartered Manager assessment preparation.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-Hans": "/zh", "x-default": "/" },
  },
});

const RESOURCES = [
  {
    n: "01",
    title: "Executive Readiness Diagnostic",
    body: "A private five-minute reflection on the capability your next role is asking for. No score and no data sent.",
    href: "/diagnostic",
    action: "Start privately",
  },
  {
    n: "02",
    title: "Executive Advancement Brief",
    body: "A concise decision dossier covering fit, learning structure, exact fees, recognition boundaries and next steps.",
    href: "/resources/advancement-brief",
    action: "Open the brief",
  },
  {
    n: "03",
    title: "Employer Conversation Guide",
    body: "Frame the business need, learning application, schedule, scholarship and employer-led HRD Corp process.",
    href: "/resources#employer-guide",
    action: "Review the guide",
  },
  {
    n: "04",
    title: "Questions to Ask Before Choosing",
    body: "A neutral checklist for comparing time, method, assessment, recognition, fees, claims and support.",
    href: "/resources#decision-checklist",
    action: "Use the checklist",
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
                <span className="mono sec-k">Future Ready Executive MBA / Working Scholar</span>
              </div>
            </Reveal>
            <Reveal delay={50}>
              <h1>
                Your experience brought you here.
                <em>Structured inquiry helps you see what comes next.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="working-hero-lede">
                For working adults ready to examine the questions behind the next role, build stronger judgement and turn a professional context into a clearer direction.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="working-hero-actions">
                <Link href="#decision-brief" className="btn btn-primary" data-track-event="cta_click" data-track-id="hero_decision_brief" data-track-location="hero">
                  Open the Decision Brief <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/executive-mba" className="text-action">
                  See the programme <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="working-hero-proof" aria-label="Programme facts">
                <span>{FACTS.durationLong} professional development pathway</span>
                <span>{CERTIFICATE_POSITIONING.headline}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <ProgrammeIntroduction />
          </Reveal>
        </div>
      </section>

      <section id="decision-brief" className="section working-decision-section">
        <div className="wrap">
          <Reveal><DecisionBrief /></Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="Programme at a glance">
        <div className="wrap working-fact-grid">
          <div><strong>06</strong><span>months of structured professional development</span></div>
          <div><strong>07</strong><span>F.A.S.T. disciplines for usable judgement</span></div>
          <div><strong>12</strong><span>framework modules across three value movements</span></div>
          <div><strong>{FACTS.priceNet.replace(".00", "")}</strong><span>participant fee after the scholarship for Malaysians</span></div>
        </div>
      </section>

      <section className="section working-model-section">
        <div className="wrap working-two-column">
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">The Working Scholar model</span></div>
              <h2 className="sec-h">Not another abstract credential.</h2>
              <p className="sec-sub">
                The programme begins with professional experience. It provides a repeatable way to see systems, test assumptions, form options and make the work in front of you more workable.
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
              <Link href="/how-it-works" className="text-action working-inline-action">Explore the learning method <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
          <div className="working-model-steps">
            {[
              ["01", "Examine the question", "Begin with the decision or capability that now carries more consequence."],
              ["02", "Connect the evidence", "Use frameworks and applied inquiry to see the relationships that matter."],
              ["03", "Put judgement to work", "Carry the structure into an applied business project and the next decision."],
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
                <p className="mono sec-k">The six-month decision brief</p>
                <h2 className="sec-h">Build the system. Then extend the practice.</h2>
              </div>
              <p>The stages are connected, but the programme certificate and Chartered Manager assessment are not collapsed into one promise.</p>
            </div>
          </Reveal>
          <div className="working-pathway-grid">
            <Reveal>
              <article className="working-pathway-card">
                <p className="mono">Months 01–03</p>
                <span className="working-pathway-number">01</span>
                <h3>Programme certificate phase</h3>
                <p>Six training days across three sessions, coaching, diagnostics, the Leverage Management System and an applied business project.</p>
                <Link href="/curriculum" className="text-action">Explore the curriculum <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
            <Reveal delay={70}>
              <article className="working-pathway-card working-pathway-card-blue">
                <p className="mono">Months 04–06</p>
                <span className="working-pathway-number">02</span>
                <h3>Supported assessment preparation</h3>
                <p>Support for eligible participants pursuing Chartered Manager assessment, which is controlled by CMI and is not automatic.</p>
                <Link href="/executive-mba#credential" className="text-action">Read the recognition boundary <span aria-hidden="true">↗</span></Link>
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
              <p className="mono sec-k">Recognition with the boundary visible</p>
              <h2>Clarity is part of the value.</h2>
              <p>{CERTIFICATE_POSITIONING.distinction}</p>
              <Link href="/executive-mba#credential" className="text-action">Understand the certificate <span aria-hidden="true">↗</span></Link>
            </article>
          </Reveal>
          <Reveal delay={70}>
            <article className="working-investment-card">
              <p className="mono sec-k">A complete financial decision</p>
              <h2>See the investment without the fog.</h2>
              <dl>
                <div><dt>Standard programme fee</dt><dd>{FACTS.priceStd}</dd></div>
                <div><dt>LIFE Innoversity scholarship</dt><dd>− {FACTS.scholarshipAmt}</dd></div>
                <div className="working-investment-total"><dt>Malaysian participant fee</dt><dd>{FACTS.priceNet}</dd></div>
              </dl>
              <p className="fine">HRD Corp determines employer funding eligibility and the approved amount. The employer—not the participant—submits the grant application.</p>
              <Link href="/fees" className="btn btn-primary">Review fees and funding <span aria-hidden="true">↗</span></Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section working-resources-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div>
                <p className="mono sec-k">Study materials</p>
                <h2 className="sec-h">Useful before you give us anything.</h2>
              </div>
              <p>Explore privately, understand the programme and prepare the right questions before choosing whether to speak with the team.</p>
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
          <Reveal><div className="working-resources-footer"><Link href="/resources" className="btn btn-ghost">Open all study materials <span aria-hidden="true">↗</span></Link></div></Reveal>
        </div>
      </section>

      <section className="section working-quote-section">
        <div className="wrap maxw-820">
          <Reveal>
            <figure className="working-quote">
              <p className="mono sec-k">A principle Dr. Xavier always emphasises</p>
              <blockquote>&ldquo;{SIGNATURE_QUOTE.text}&rdquo;</blockquote>
              <figcaption><strong>{SIGNATURE_QUOTE.attribution}</strong><span>{SIGNATURE_QUOTE.role}</span></figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source="working-scholar-home"
        heading="A useful conversation starts with the actual question."
        sub="Discuss programme fit, curriculum, dates, fees, the scholarship, recognition or the employer-led HRD Corp process. You can ask for details first; an enquiry is not an admission or payment commitment."
      />
    </>
  );
}
