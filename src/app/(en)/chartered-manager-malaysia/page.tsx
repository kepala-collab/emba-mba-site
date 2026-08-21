import Link from "next/link";
import ArticleAttribution from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import CmiProgressionChart from "@/components/site/CmiProgressionChart";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CMI_PATHWAY, CTA_LABELS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, editorialTeamSchema, withSeo } from "@/lib/seo";

const PATH = "/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "Chartered Manager Malaysia: CMgr Routes",
  description:
    "Understand Chartered Manager status, CMI's current eligibility routes, fCMgr and CMgr MCMI, assessment costs, and the CMI Malaysia network.",
  openGraph: { type: "article" },
});

const ROUTES = [
  {
    name: "Full Assessment",
    bestFor: "Experienced managers applying through qualifications and management experience",
    eligibility:
      "A management, business or leadership-focused degree plus three years in a management role; or at least five years of management experience without a management-specific qualification.",
    assessment:
      "A written application describing your management journey and achievements, followed by an online professional discussion with an independent CMI assessor.",
    price: "£750 + VAT",
  },
  {
    name: "CMI Fast Track",
    bestFor: "Managers who completed one of CMI's specified qualifications within the last five years",
    eligibility:
      "A listed CMI Diploma or Extended Diploma at Level 5 or 6, or a listed CMI Certificate, Diploma or Extended Diploma at Level 7 or 8, plus at least three years in a management role.",
    assessment:
      "A streamlined written assessment that takes the applicant's eligible prior CMI learning into account.",
    price: "£162 + VAT",
  },
  {
    name: "Apprenticeship route",
    bestFor: "Learners completing one of CMI's listed management apprenticeship standards",
    eligibility:
      "The published route is linked to specified apprenticeship End Point Assessments and relevant management experience.",
    assessment:
      "CMI determines whether Foundation or full Chartered Manager status applies after the relevant apprenticeship requirements are completed.",
    price: "CMI's route-specific membership and administration terms apply",
  },
] as const;

const FAQS = [
  {
    q: "What is Chartered Manager status?",
    a: "Chartered Manager is the professional status awarded only by the Chartered Management Institute. CMI describes it as its highest accolade in management and leadership. It is separate from an academic degree and is awarded through CMI's eligibility and assessment process.",
  },
  {
    q: "Does completing the Future Ready Executive MBA automatically award CMgr MCMI?",
    a: "No. Successful programme completion leads to the CMI Certificate of Recognition and, under CMI's published CMI Recognised offer, Foundation Chartered Manager status. CMgr MCMI requires a separate successful CMI assessment. CMI controls eligibility, assessment, membership and fees.",
  },
  {
    q: "Does this programme qualify for CMI Fast Track?",
    a: "The programme is CMI Recognised, not a CMI qualification. CMI Fast Track requires one of CMI's specifically listed qualifications plus the required management experience. CMI must confirm each participant's applicable route; the website does not promise Fast Track eligibility.",
  },
  {
    q: "What does the Chartered Manager assessment involve?",
    a: "CMI states that becoming Chartered is an assessment against its Professional Standard. The Full Assessment route includes a written application and an online professional discussion. The Fast Track route uses a streamlined written assessment based on eligible prior CMI learning.",
  },
  {
    q: "Is there a CMI network in Malaysia?",
    a: "Yes. CMI Malaysia supports members through professional development, thought leadership and connections with professional associations, education institutions, government institutions, trade associations and other partners. CMI also states that non-members may attend its events and activities.",
  },
] as const;

const DIRECT_ANSWERS = [
  ["Is this an academic degree?", "No. It is a three-month professional development programme with CMI (UK) Endorsed and Recognised status, not an MQA-accredited academic degree or regulated qualification."],
  ["What do successful participants receive?", "Successful participants receive the CMI Certificate of Recognition for the Future Ready Executive MBA programme. CMI controls the final certificate wording and issue."],
  ["What does CMI recognition mean?", "CMI Recognition means the programme has been benchmarked against CMI's Professional Standard. It is not the same as a CMI qualification."],
  ["Is Chartered Manager included or guaranteed?", "No. Chartered Manager is a separate optional CMI route with its own eligibility, assessment, membership and fees."],
  ["Who should consider this rather than an academic MBA?", "Working managers, owners and directors seeking applied professional development around a live business challenge should compare this format with the academic depth and award of a university MBA."],
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE.url}${PATH}#article`,
  headline: "Chartered Manager in Malaysia: CMgr routes, eligibility and programme pathway",
  description: metadata.description,
  url: `${SITE.url}${PATH}`,
  inLanguage: "en-MY",
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
  author: { "@id": EDITORIAL_TEAM_ID },
  publisher: { "@id": EDITORIAL_TEAM_ID },
  about: [
    { "@type": "Thing", name: "Chartered Manager" },
    { "@type": "Thing", name: "Chartered Management Institute" },
    { "@type": "Place", name: "Malaysia" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function CharteredManagerMalaysiaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Executive MBA", path: "/executive-mba" }, { name: "Chartered Manager Malaysia", path: PATH }]} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={{ "@context": "https://schema.org", ...editorialTeamSchema() }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">CMI professional recognition · Malaysia</p>
          <h1><TechnicalText>Chartered Manager in Malaysia: what it is, who qualifies and how this programme helps.</TechnicalText></h1>
          <p>
            Chartered Manager (CMgr) is awarded only by the Chartered Management Institute. It is a separate optional route and is not included in the three-month Executive MBA programme or published fee.
          </p>
          <div className="chartered-hero-actions">
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} <span aria-hidden="true">→</span></Link>
            <a href={CMI_PATHWAY.routes} className="btn btn-ghost" target="_blank" rel="noreferrer">Check CMI&rsquo;s current routes <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </header>

      <section className="section chartered-direct-section">
        <div className="wrap">
          <div className="reading-section-head">
            <p className="mono sec-k">Five answers first</p>
            <h2 className="sec-h">Know exactly what the programme is—and what it is not.</h2>
          </div>
          <div className="chartered-direct-grid">
            {DIRECT_ANSWERS.map(([question, answer], index) => (
              <article key={question}>
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                <h3><TechnicalText>{question}</TechnicalText></h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <>
        <section className="section chartered-positioning">
          <div className="wrap">
            <Reveal>
              <div className="reading-section-head">
                <p className="mono sec-k">Three distinct outcomes</p>
                <h2 className="sec-h">Programme recognition is the starting point. Chartered status is a further professional assessment.</h2>
                <p>The distinction makes the pathway easier to evaluate and prevents a certificate, membership status and Chartered award from being treated as the same thing.</p>
              </div>
            </Reveal>
            <div className="chartered-outcome-grid">
              <Reveal>
                <article>
                  <span className="mono">01</span>
                  <h3><TechnicalText>CMI Recognised programme</TechnicalText></h3>
                  <p>CMI Recognition means the programme has been benchmarked against CMI&rsquo;s Professional Standard. It is not the same as a CMI qualification or academic degree.</p>
                  <a href={CMI_PATHWAY.recognition} target="_blank" rel="noreferrer">Verify CMI Recognition <span aria-hidden="true">↗</span></a>
                </article>
              </Reveal>
              <Reveal delay={50}>
                <article>
                  <span className="mono">02</span>
                  <h3><TechnicalText>Certificate and fCMgr</TechnicalText></h3>
                  <p>Successful participants receive the CMI Certificate of Recognition. CMI&rsquo;s published Recognised offer also states that learners receive Foundation Chartered Manager (fCMgr) status on completion.</p>
                  <p className="fine">CMI controls activation, membership renewal and continued post-nominal use.</p>
                </article>
              </Reveal>
              <Reveal delay={100}>
                <article className="chartered-outcome-featured">
                  <span className="mono">03</span>
                  <h3><TechnicalText>Chartered Manager — CMgr MCMI</TechnicalText></h3>
                  <p>Full Chartered status is awarded only after CMI confirms eligibility and the applicant successfully completes the applicable assessment. It is not automatic after this programme.</p>
                  <a href={CMI_PATHWAY.charteredManager} target="_blank" rel="noreferrer">Read CMI&rsquo;s definition <span aria-hidden="true">↗</span></a>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <CmiProgressionChart />

        <section className="section chartered-routes-section">
          <div className="wrap">
            <Reveal>
              <div className="reading-section-head">
                <p className="mono sec-k">CMI&rsquo;s published routes</p>
                <h2 className="sec-h">The route depends on your qualifications and management experience.</h2>
                <p>These criteria and prices were checked against CMI on {CMI_PATHWAY.reviewedAt}. CMI&rsquo;s current page controls if its requirements or fees change.</p>
              </div>
            </Reveal>
            <div className="chartered-route-grid">
              {ROUTES.map((route, index) => (
                <Reveal key={route.name} delay={index * 45}>
                  <article className="chartered-route-card">
                    <div className="chartered-route-head"><span className="mono">Route {index + 1}</span><strong>{route.price}</strong></div>
                    <h3><TechnicalText>{route.name}</TechnicalText></h3>
                    <p className="chartered-route-best">{route.bestFor}</p>
                    <dl>
                      <div><dt>Published eligibility</dt><dd>{route.eligibility}</dd></div>
                      <div><dt>What CMI assesses</dt><dd>{route.assessment}</dd></div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <aside className="chartered-route-note">
                <strong>This programme does not automatically create Fast Track eligibility.</strong>
                <p>CMI describes Fast Track by reference to specified CMI qualifications. The Future Ready Executive MBA is a CMI Recognised professional development programme, not a CMI qualification. The programme team can help you organise your background for review, but CMI decides the route.</p>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap chartered-preparation-grid">
            <Reveal>
              <div className="reading-section-head">
                <p className="mono sec-k">Separate CMI route</p>
                <h2 className="sec-h">Turn management experience into assessment-ready evidence.</h2>
                <p>CMI&rsquo;s assessment routes require applicants to present real management practice clearly. The steps below explain that separate process; they are not part of the Executive MBA programme or fee.</p>
              </div>
              <Link href="/executive-mba#structure" className="btn btn-ghost">See the three-month Executive MBA <span aria-hidden="true">→</span></Link>
            </Reveal>
            <ol className="chartered-preparation-list">
              <li><span>01</span><div><h3>Request route confirmation</h3><p>Review qualifications and management experience against CMI&rsquo;s current criteria, then ask CMI to confirm the applicable route.</p></div></li>
              <li><span>02</span><div><h3>Select evidence</h3><p>Identify examples that show leadership decisions, organisational results and continued professional development.</p></div></li>
              <li><span>03</span><div><h3>Structure the written case</h3><p>Explain the context, action, evidence and result without relying on job title alone.</p></div></li>
              <li><span>04</span><div><h3>Prepare for professional discussion</h3><p>Practise explaining the reasoning behind the evidence. CMI&rsquo;s assessor makes the final decision.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section chartered-evidence-section">
          <div className="wrap">
            <Reveal>
              <div className="reading-section-head">
                <p className="mono sec-k">What CMI reports</p>
                <h2 className="sec-h">Professional recognition with published evidence behind it.</h2>
                <p>CMI reports the following findings from its 2024 Chartered Manager research. They describe surveyed outcomes; they are not a promise of salary, promotion or employment for an individual participant.</p>
              </div>
            </Reveal>
            <div className="chartered-stat-grid">
              <Reveal><article><strong>96%</strong><p>of managers said Chartered Manager status shows high-quality management and leadership skills.</p></article></Reveal>
              <Reveal delay={45}><article><strong>£13k</strong><p>average salary increase reported by managers after achieving Chartered Manager status.</p></article></Reveal>
              <Reveal delay={90}><article><strong>2 in 3</strong><p>employers said they were more likely to interview a Chartered Manager candidate.</p></article></Reveal>
            </div>
            <p className="fine center"><a href={CMI_PATHWAY.charteredManager} target="_blank" rel="noreferrer">View the current CMI Chartered Manager evidence <span aria-hidden="true">↗</span></a></p>
          </div>
        </section>

        <section className="section">
          <div className="wrap chartered-network-grid">
            <Reveal>
              <article>
                <p className="mono sec-k">Local professional community</p>
                <h2>CMI Malaysia</h2>
                <p>CMI Malaysia supports members with professional development, thought leadership and connections across professional associations, education, government, trade bodies and other partners. CMI states that non-members are welcome at its events and activities.</p>
                <a href={CMI_PATHWAY.malaysia} target="_blank" rel="noreferrer">Explore CMI Malaysia <span aria-hidden="true">↗</span></a>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article>
                <p className="mono sec-k">International reach</p>
                <h2>A global management community</h2>
                <p>CMI states that it has members in more than 170 countries and provides international accreditation, resources, events and networking opportunities. Malaysia is one of its listed international regional networks.</p>
                <a href={CMI_PATHWAY.international} target="_blank" rel="noreferrer">See CMI internationally <span aria-hidden="true">↗</span></a>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section faq chartered-faq">
          <div className="wrap maxw-820">
            <Reveal>
              <p className="mono sec-k">Direct answers</p>
              <h2 className="sec-h">Chartered Manager questions to resolve before enrolling.</h2>
            </Reveal>
            <Reveal className="mt-s">
              {FAQS.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section chartered-sources-section">
          <div className="wrap maxw-820 prose">
            <ArticleAttribution />
            <h2>Official sources and scope</h2>
            <p>This page interprets CMI&rsquo;s public information for Malaysian programme candidates. It does not determine CMI eligibility or replace CMI&rsquo;s current terms.</p>
            <ul>
              <li><a href={CMI_PATHWAY.charteredManager} target="_blank" rel="noreferrer">CMI: Chartered Manager</a></li>
              <li><a href={CMI_PATHWAY.routes} target="_blank" rel="noreferrer">CMI: routes to Chartered Manager status</a></li>
              <li><a href={CMI_PATHWAY.recognition} target="_blank" rel="noreferrer">CMI: Recognised programmes</a></li>
              <li><a href={CMI_PATHWAY.malaysia} target="_blank" rel="noreferrer">CMI Malaysia regional network</a></li>
              <li><a href={CMI_PATHWAY.international} target="_blank" rel="noreferrer">CMI internationally</a></li>
            </ul>
          </div>
        </section>
      </>

      <CtaSection
        programme="Executive MBA"
        heading="Understand the programme and the separate Chartered Manager route."
        sub="Get the 2026 programme guide first. If you choose a conversation, the team can explain the published CMI routes but cannot determine eligibility or pre-approve a CMI assessment outcome."
      />
    </>
  );
}
