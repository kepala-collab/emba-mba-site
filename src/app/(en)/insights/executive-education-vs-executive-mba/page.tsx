import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";

const PUBLISHED = "2026-08-21";

export const metadata = withSeo("/insights/executive-education-vs-executive-mba", {
  title: "Executive Education vs Executive MBA",
  description:
    "Compare executive education and Executive MBA programmes by academic status, credential, duration, assessment, schedule and workplace application.",
  openGraph: {
    type: "article",
    publishedTime: `${PUBLISHED}T16:00:00+08:00`,
    modifiedTime: `${PUBLISHED}T16:00:00+08:00`,
  },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Executive Education vs Executive MBA: What Working Leaders Should Compare",
  mainEntityOfPage: `${SITE.url}/insights/executive-education-vs-executive-mba`,
  image: `${SITE.url}/opengraph-image`,
  datePublished: `${PUBLISHED}T16:00:00+08:00`,
  dateModified: `${PUBLISHED}T16:00:00+08:00`,
  inLanguage: "en-MY",
  description: metadata.description,
  author: { "@type": "Organization", "@id": EDITORIAL_TEAM_ID, name: "Asian Business Consulting Editorial Team" },
  publisher: { "@type": "Organization", "@id": PROVIDER_ID, name: SITE.provider },
  articleSection: "Programme decision guides",
  about: ["Executive education", "Executive MBA", "Professional development", "Working professionals"],
};

const COMPARISON = [
  ["Primary purpose", "Focused development of leadership, management or specialist capabilities.", "Varies by provider. Academic EMBAs normally lead to a degree; professionally positioned programmes must state their own credential clearly."],
  ["Duration", "May be delivered in shorter or modular formats; each provider must publish its schedule.", `This programme runs for ${FACTS.durationLong}, with ${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions.`],
  ["Assessment", "May use workshops, projects, cases or a certificate of completion.", "This programme uses coaching and an applied business project, with no traditional examination or thesis."],
  ["Academic status", "May be non-degree professional development; verify the status stated by the provider.", "This Future Ready Executive MBA is not an MQA-accredited academic degree or a regulated qualification."],
  ["Workplace application", "Designed to develop capabilities that can be used in a current role.", "Participants apply the frameworks to a live business issue in their own organisational context."],
] as const;

export default function ExecutiveEducationVsExecutiveMbaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/home" },
        { name: "Insights", path: "/insights" },
        { name: "Executive Education vs Executive MBA", path: "/insights/executive-education-vs-executive-mba" },
      ]} />
      <JsonLd data={articleSchema} />

      <article>
        <section className="section geo-section">
          <div className="wrap maxw-820">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Decision guide · Malaysia</span></div>
              <h1 className="sec-h">Executive education vs Executive MBA: compare the credential before the name.</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                By the Asian Business Consulting editorial team · <time dateTime={PUBLISHED}>Published and reviewed 21 August 2026</time> ·{" "}
                <Link href="/about#editorial-standards">Editorial standards</Link>
              </p>
              <p className="sec-sub">
                Executive education describes professional learning for people already at work. Executive MBA can describe an academic degree or, when clearly stated, a professional programme. The reliable comparison is therefore not the label alone: check the academic status, credential, assessment, schedule, workplace application and complete fee.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>The short answer</h2>
            <p>
              Choose an academic MBA or EMBA when your next step requires a recognised academic degree. Consider executive education when you need focused professional development that fits around work. Then verify exactly what the named programme awards, because credentials and academic status differ between providers.
            </p>
            <p>
              The <Link href="/executive-mba">Executive MBA on Future Ready Business Leadership</Link> is awarded and endorsed by CMI. It is a six-month professional development programme. Successful participants receive the CMI Certificate of Recognition for the programme. It is not an MQA-accredited academic degree or a regulated qualification.
            </p>

            <h2>Compare the published facts</h2>
            <ScrollableTableRegion kind="comparison" label="Executive education and Executive MBA comparison">
              <table className="cmp">
                <thead><tr><th>Decision</th><th>Executive education</th><th>This Future Ready Executive MBA</th></tr></thead>
                <tbody>
                  {COMPARISON.map(([decision, executiveEducation, programme]) => (
                    <tr key={decision}><th scope="row">{decision}</th><td>{executiveEducation}</td><td className="us">{programme}</td></tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>

            <h2>Five questions to ask every provider</h2>
            <ol>
              <li><strong>What exactly do I receive?</strong> Ask for the complete credential name and specimen where available.</li>
              <li><strong>Is it an academic degree?</strong> If an academic qualification matters, verify the awarding institution and applicable accreditation.</li>
              <li><strong>How is learning assessed?</strong> Compare examinations, thesis, assignments, applied projects and attendance requirements.</li>
              <li><strong>Can I complete it while working?</strong> Check every session date, delivery mode, project requirement and catch-up policy.</li>
              <li><strong>What is the complete commitment?</strong> Compare the published fee, funding conditions, travel, time away from work and any separate membership or assessment fees.</li>
            </ol>

            <h2>Where this programme fits</h2>
            <p>
              This programme is designed for owners, directors, general managers and senior managers who want structured leadership development around a current business issue. It combines cohort-based workshops, coaching, strategic decision frameworks and an applied project across six months. Participants remain in their roles while completing the work.
            </p>
            <p>
              Chartered Manager is a separate optional CMI route. CMI determines eligibility, assessment, membership and fees; it is not included in the published programme or fee. Review the <Link href="/chartered-manager-malaysia">CMI routes</Link>, the <Link href="/fees">complete fee and scholarship terms</Link>, and the <Link href="/intakes">published session dates</Link> before deciding.
            </p>

            <h2>Research sources</h2>
            <ul>
              <li><a href="https://www.edx.org/resources/what-is-the-difference-between-a-professional-certificate-and-an-executive-education" target="_blank" rel="noopener noreferrer">edX: Professional certificate vs executive education</a></li>
              <li><a href="https://business.rice.edu/executive-education" target="_blank" rel="noopener noreferrer">Rice Business Executive Education</a></li>
            </ul>
            <p><Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide}</Link></p>
          </div>
        </section>
      </article>

      <CtaSection programme="Executive MBA" heading="Compare the published facts before you decide." />
    </>
  );
}
