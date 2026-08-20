import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import {
  CERTIFICATE_POSITIONING,
  COMPANY_ENROLMENT,
  COMPLIANCE,
  FACTS,
  HRD_CORP_CLAIM,
  INCLUSIONS,
  MODULES,
  PROGRAMME_AUDIENCE,
  SITE,
  STAGES,
  THINKING_EDGE,
} from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";

export const metadata = withSeo("/executive-mba", {
  title: "Three-Month Executive MBA Programme Malaysia",
  description:
    "Complete a CMI (UK)-recognised Executive MBA in three months while you keep working: six training days, twelve applied modules and a live business project. HRD Corp claimable.",
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description: metadata.description,
  provider: { "@type": "EducationalOrganization", "@id": ORGANIZATION_ID, name: SITE.provider },
  url: `${SITE.url}/executive-mba`,
  inLanguage: "en-MY",
  educationalCredentialAwarded: "Programme certificate recognised against CMI Professional Standards",
  timeRequired: "P3M",
  syllabusSections: MODULES.map((module) => ({ "@type": "Syllabus", name: module.p })),
};

const AUDIENCE = [
  ["Business owners", "Building a stronger management system around a growing company."],
  ["Directors", "Making decisions that affect several functions, teams or markets."],
  ["General managers", "Responsible for business performance, people and execution."],
  ["Senior managers", "Preparing for broader strategic or transformation responsibility."],
] as const;

export default function ExecutiveMbaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Executive MBA", path: "/executive-mba" }]} />
      <JsonLd data={courseSchema} />

      <section className="section programme-overview-hero geo-section">
        <div className="wrap programme-overview-grid">
          <div>
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Future Ready Executive MBA</span></div>
            </Reveal>
            <Reveal delay={50}>
              <h1>Lead with certainty in chaos. Build decisions that move the business forward.</h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="programme-overview-lede">
                A focused three-month programme for working leaders: six training days, coaching and an applied business project built around a live business issue.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="programme-overview-actions">
                <Link href="/apply" className="btn btn-primary">Ask about programme fit <span aria-hidden="true">→</span></Link>
                <Link href="#structure" className="btn btn-ghost">See how the programme works</Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="programme-overview-note">
                This is a CMI-approved and endorsed professional development programme. It is not an MQA-accredited academic degree or a regulated qualification.
              </p>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="programme-summary-card" aria-label="Programme summary">
              <div className="programme-summary-brand">
                <Image src="/brand/cmi-logo-official.svg" alt="Chartered Management Institute compact logo" width={96} height={66} />
                <span>Programme approved and endorsed against CMI&rsquo;s Professional Standard</span>
              </div>
              <dl>
                <div><dt>Designed for</dt><dd>Owners, directors, general managers and senior managers</dd></div>
                <div><dt>Schedule</dt><dd>Six training days across three monthly sessions</dd></div>
                <div><dt>Assessment</dt><dd>Applied business project; no traditional examination or thesis</dd></div>
                <div><dt>Scholarship</dt><dd>{FACTS.scholarshipAmount} for eligible Malaysian applicants</dd></div>
              </dl>
              <Link href="/fees" className="text-action">See the complete fee <span aria-hidden="true">↗</span></Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="structure" className="section programme-structure-section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">How the three months work</p>
              <h2 className="sec-h">Six intensive days. One real business challenge. A practical way forward.</h2>
              <p>Complete the programme in three monthly sessions while continuing to work. There are no traditional examinations or thesis.</p>
            </div>
          </Reveal>
          <div className="programme-stage-grid">
            <Reveal>
              <article className="programme-stage-card">
                <span className="programme-stage-number">01</span>
                <p className="mono sec-k">Three months</p>
                <h3>Executive MBA programme and certificate</h3>
                <p>Attend six training days, receive coaching and complete an applied project. Successful participants receive the CMI Certificate of Recognition for the programme.</p>
                <Link href="/curriculum" className="text-action">Review the curriculum <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="programme-stage-card programme-stage-card-dark">
                <span className="programme-stage-number">02</span>
                <p className="mono">Optional next step</p>
                <h3>Chartered Manager route</h3>
                <p>Chartered Manager is a separate CMI route. CMI decides eligibility, assessment, membership and fees. It is not included in the published Executive MBA programme or fee.</p>
                <Link href="/chartered-manager-malaysia" className="text-action">Understand the CMI routes <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Who it is for</p>
              <h2 className="sec-h">For people already responsible for business results.</h2>
              <p>{PROGRAMME_AUDIENCE}</p>
            </div>
          </Reveal>
          <div className="programme-audience-grid">
            {AUDIENCE.map(([title, description], index) => (
              <Reveal key={title} delay={index * 40}>
                <article><span className="mono">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap programme-learning-grid">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Built for the people carrying the decision</p>
              <h2 className="sec-h">For executives, senior managers, directors, business owners and founders.</h2>
              <p>{COMPANY_ENROLMENT.eligibility}</p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="card" style={{ padding: "clamp(24px,4vw,40px)" }}>
              <p className="mono sec-k">Company enrolment &amp; HRD Corp</p>
              <p className="sec-sub">{COMPANY_ENROLMENT.hrdRoute}</p>
              <Link href="/hrd-corp-claimable" className="text-action">Understand the employer-led route <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section programme-learning-section">
        <div className="wrap programme-learning-grid">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">What you learn to do</p>
              <h2 className="sec-h">Use seven disciplines as one practical decision process.</h2>
              <p>Each discipline gives you a different way to examine a business issue. Together they help you move from a vague problem to a reasoned action plan.</p>
              <Link href="/how-it-works" className="btn btn-ghost">See how the F.A.S.T. method works</Link>
            </div>
          </Reveal>
          <div className="programme-discipline-list">
            {THINKING_EDGE.map((item, index) => (
              <Reveal key={item.i} delay={(index % 3) * 35}>
                <article><span className="mono">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.h}</h3><p>{item.p}</p></div></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Curriculum</p>
              <h2 className="sec-h">Twelve modules applied to one business project.</h2>
              <p>The modules cover problem definition, strategic planning, leadership, systems, transformation and stakeholder alignment.</p>
            </div>
          </Reveal>
          <Reveal className="mt-m"><div className="mods programme-module-grid">
            {MODULES.map((module) => <div key={module.c} className="m"><div className="c">{module.c}</div><p>{module.p}</p></div>)}
          </div></Reveal>
          <Reveal className="mt-s"><Link href="/curriculum" className="btn btn-ghost">See module details and learning outcomes <span aria-hidden="true">→</span></Link></Reveal>
        </div>
      </section>

      <section className="section programme-inclusions-section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Included in the fee</p>
              <h2 className="sec-h">Training, coaching, tools and project support.</h2>
            </div>
          </Reveal>
          <div className="programme-inclusion-grid">
            {INCLUSIONS.map((item, index) => (
              <Reveal key={item.b} delay={(index % 2) * 35}>
                <article><span aria-hidden="true">✓</span><div><h3>{item.b}</h3><p>{item.s}</p></div></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="credential" className="section">
        <div className="wrap credential-explainer-grid">
          <Reveal>
            <figure className="credential-specimen">
              <Image src="/brand/cmi-certificate.png" alt="Specimen CMI Certificate of Recognition for the Executive MBA programme" width={680} height={590} sizes="(max-width: 820px) 100vw, 46vw" />
              <figcaption>Provider-supplied specimen. CMI controls the final certificate format, wording and signatory.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60}>
            <div className="credential-copy">
              <p className="mono sec-k">What the recognition means</p>
              <h2 className="sec-h">A recognised programme certificate, followed by an optional route to Chartered Manager.</h2>
              <p>{CERTIFICATE_POSITIONING.distinction}</p>
              <ol>
                <li><strong>{STAGES[0].h}:</strong> {STAGES[0].d}</li>
                <li><strong>{STAGES[1].h}:</strong> {STAGES[1].d}</li>
                <li><strong>{STAGES[2].h}:</strong> {STAGES[2].d}</li>
              </ol>
              <p className="fine">Fellow and Chartered Fellow are later CMI membership routes based on experience and CMI assessment. Programme completion alone does not confer those grades.</p>
              <Link href="/chartered-manager-malaysia" className="btn btn-ghost">Chartered Manager routes in Malaysia <span aria-hidden="true">→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section programme-schedule-section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Published 2026 dates</p>
              <h2 className="sec-h">Choose an English or Mandarin cohort.</h2>
              <p>The programme certificate phase uses one scheduled weekend session a month. Review every published date before choosing a cohort.</p>
            </div>
          </Reveal>
          <Reveal className="mt-s"><IntakeSchedule label="2026 Executive MBA intake schedule" /></Reveal>
          <Reveal className="mt-s"><Link href="/intakes" className="btn btn-ghost">See all intake details <span aria-hidden="true">→</span></Link></Reveal>
          <p className="fine programme-compliance-note">{HRD_CORP_CLAIM.responsibility} {COMPLIANCE}</p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Ask about programme fit, dates or fees." />
    </>
  );
}
