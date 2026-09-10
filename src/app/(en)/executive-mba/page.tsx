import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import {
  ABC_PROFILE,
  CERTIFICATE_POSITIONING,
  COMPANY_ENROLMENT,
  COMPLIANCE,
  CTA_LABELS,
  FACTS,
  HRD_CORP_CLAIM,
  INCLUSIONS,
  MODULES,
  PROGRAMME_AUDIENCE,
  PROGRAMME_POSITIONING_SENTENCE,
  SITE,
  STAGES,
  THINKING_EDGE,
} from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";

export const metadata = withSeo("/executive-mba", {
  title: "Executive MBA Programme Malaysia | Structure, Fee and CMI Recognition",
  description:
    `${PROGRAMME_POSITIONING_SENTENCE} ${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions, coaching and an applied business project across ${FACTS.durationLong}.`,
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
  timeRequired: "P6M",
  syllabusSections: MODULES.map((module) => ({
    "@type": "Syllabus",
    name: module.title,
    description: module.outcome,
  })),
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
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Executive MBA", path: "/executive-mba" }]} />
      <JsonLd data={courseSchema} />

      <section className="section programme-overview-hero geo-section">
        <div className="wrap programme-overview-grid">
          <div>
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Future Ready Executive MBA</span></div>
            </Reveal>
            <Reveal delay={50}>
              <h1>Bring one live business issue. Leave with a plan your team can act on.</h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="programme-overview-lede">
                Across {FACTS.durationLong}, in {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, with one-to-one coaching and an applied business project, you take a current issue from your own responsibility from problem definition to a written action plan reviewed by faculty, while you continue in your role. {ABC_PROFILE.programmePositioning}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="programme-overview-actions">
                <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} <span aria-hidden="true">→</span></Link>
                <Link href="#structure" className="btn btn-ghost">See how the six months work</Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="programme-overview-note">
                {CERTIFICATE_POSITIONING.professionalRelevance}
              </p>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="programme-summary-card" aria-label="Programme summary">
              <div className="programme-summary-brand">
                <Image src="/brand/cmi-logo-official.svg" alt="Chartered Management Institute compact logo" width={96} height={66} />
                <span>{CERTIFICATE_POSITIONING.headline}</span>
              </div>
              <dl>
                <div><dt>Designed for</dt><dd>Owners, directors, general managers and senior managers</dd></div>
                <div><dt>Schedule</dt><dd>{FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions</dd></div>
                <div><dt>Assessment</dt><dd>A written action plan on your own business, reviewed by faculty</dd></div>
                <div><dt>Scholarship</dt><dd>{FACTS.scholarshipProvider} assesses eligible Malaysian applicants individually</dd></div>
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
              <p className="mono sec-k">How the six months work</p>
              <h2 className="sec-h">Work your issue beside managers carrying similar decisions.</h2>
              <p>{FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, while you continue in your role. The applied business project becomes a written action plan reviewed by faculty.</p>
            </div>
          </Reveal>
          <Reveal delay={40}>
            <figure className="editorial-visual programme-editorial-banner">
              <Image
                src="/images/future-ready-emba/future-ready-emba-facilitated-executive-learning-malaysia-16x9.webp"
                alt="A facilitated executive learning discussion with Malaysian managers"
                width={2560}
                height={1440}
                sizes="(max-width: 900px) 100vw, 1120px"
              />
              <figcaption>Facilitated learning connects each framework to the decisions participants already carry.</figcaption>
            </figure>
          </Reveal>
          <div className="programme-stage-grid">
            <Reveal>
              <article className="programme-stage-card">
                <span className="programme-stage-number" aria-hidden="true">01</span>
                <p className="mono sec-k">Across the six months</p>
                <h3>A written action plan for your own business</h3>
                <p>Complete {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, one-to-one coaching and an applied business project on a current issue within your own responsibility. Successful completion is recognised with the {CERTIFICATE_POSITIONING.credential}. {CERTIFICATE_POSITIONING.professionalRelevance}</p>
                <Link href="/curriculum" className="text-action">Review the curriculum <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="programme-stage-card programme-stage-card-dark">
                <span className="programme-stage-number" aria-hidden="true">02</span>
                <p className="mono">Separate CMI route</p>
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
              <h2 className="sec-h">For people whose decisions affect more than their own desk.</h2>
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
              <h2 className="sec-h">Seven disciplines, applied to the decision you already carry.</h2>
              <p>Practise each discipline on your own business issue, not a case study, moving it from a vague problem to a written action plan the people who act on it can follow.</p>
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
              <h2 className="sec-h">{FACTS.moduleCount} modules. One plan your team can act on.</h2>
              <p>Each module builds toward the same output: reasoning the people who depend on your decision can follow, from future foresight and customer-centred innovation to transformation and stakeholder trust.</p>
            </div>
          </Reveal>
          <Reveal className="mt-m"><div className="mods programme-module-grid">
            {MODULES.map((module) => (
              <div key={module.c} className="m">
                <div className="c">{module.c}</div>
                <p><strong>{module.title}</strong></p>
                <p className="module-outcome">{module.outcome}</p>
              </div>
            ))}
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

      <section id="recognition" className="section">
        <div className="wrap credential-explainer-grid">
          <Reveal>
            <figure className="credential-specimen">
              <Image src="/brand/cmi-certificate.webp" alt="Specimen CMI Certificate of Recognition for the Executive MBA programme" width={680} height={590} sizes="(max-width: 820px) 100vw, 46vw" />
              <figcaption>Provider-supplied specimen. CMI controls the final certificate format, wording and signatory.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60}>
            <div className="credential-copy">
              <p className="mono sec-k">What the recognition means</p>
              <h2 className="sec-h">A recognised programme certificate, followed by an optional route to Chartered Manager.</h2>
              <p>{CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance}</p>
              <ol>
                <li><strong>{STAGES[0].h}:</strong> {STAGES[0].d}</li>
                <li><strong>{STAGES[1].h}:</strong> {STAGES[1].d}</li>
                <li><strong>{STAGES[2].h}:</strong> {STAGES[2].d}</li>
              </ol>
              <p className="fine">Any Chartered Manager application is a separate optional CMI route. CMI alone controls eligibility, assessment, membership and fees.</p>
              <Link href="/chartered-manager-malaysia" className="btn btn-ghost">Understand the CMI recognition <span aria-hidden="true">→</span></Link>
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
              <p>{FACTS.trainingDays} training days run across {FACTS.liveSessions} scheduled weekend sessions. Review every published date before choosing a cohort.</p>
            </div>
          </Reveal>
          <Reveal className="mt-s"><IntakeSchedule label="2026 Executive MBA intake schedule" /></Reveal>
          <Reveal className="mt-s"><Link href="/intakes" className="btn btn-ghost">See all intake details <span aria-hidden="true">→</span></Link></Reveal>
          <p className="fine programme-compliance-note">{HRD_CORP_CLAIM.responsibility} {COMPLIANCE}</p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Get the programme facts before you decide." />
    </>
  );
}
