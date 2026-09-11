import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { CERTIFICATE_POSITIONING, COMPARISON_SCOPE, FACTS, PROGRAMME_FIT_CHECK, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";

const PUBLISHED = "2026-08-21";

export const metadata = withSeo("/insights/executive-education-vs-executive-mba", {
  title: "Executive Education vs Executive MBA",
  description:
    "Executive education and this Executive MBA are built for different jobs. Compare the academic status, credential, assessment, schedule and complete fee before you decide.",
  openGraph: {
    type: "article",
    publishedTime: `${PUBLISHED}T16:00:00+08:00`,
    modifiedTime: `${PUBLISHED}T16:00:00+08:00`,
  },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Executive Education vs Executive MBA: What Job Is Each Built For?",
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
  ["Built for", "One focused capability, developed on a schedule the provider sets.", `One live business issue from your own responsibility, taken from problem definition to a written action plan reviewed by faculty, across ${FACTS.durationLong}.`],
  ["Duration", "Delivered in a schedule set by the provider; formats and duration vary.", `This programme runs for ${FACTS.durationLong}, with ${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions.`],
  ["Assessment", "May use workshops, projects, cases or a certificate of completion.", "This programme uses coaching and an applied business project, with no traditional examination or thesis."],
  ["Academic status", "May or may not be a formal academic qualification; the provider states its own status.", "This Future Ready Executive MBA is not an MQA-accredited academic degree or a regulated qualification."],
  ["Workplace application", "Designed to develop a capability that can be used in a current role.", "Participants apply the frameworks to a live business issue inside their own organisation."],
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
              <h1 className="sec-h">Executive education or Executive MBA: choose by the job.</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                By the Asian Business Consulting editorial team · <time dateTime={PUBLISHED}>Published and reviewed 21 August 2026</time> ·{" "}
                <Link href="/about#editorial-standards">Editorial standards</Link>
              </p>
              <p className="sec-sub">
                Both names sit under the same broad label of executive learning, but they are built for different jobs. Executive education develops one focused capability, on a schedule the provider sets. Executive MBA can describe an academic degree or, when clearly stated, a professional programme with its own named credential. Before comparing anything else, check which job the programme is built for, then verify the academic status, credential, assessment, schedule and complete fee.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>The short answer</h2>
            <p>
              An academic degree is the right route when your next step is regulated or requires MQA accreditation: choose an academic MBA or EMBA for that job. Executive education, including a professionally positioned Executive MBA, is the right route when you need focused development that stays inside your working week. Once you know which job you are hiring the programme for, verify exactly what the named programme awards, because credentials and academic status differ between providers.
            </p>
            <p>
              The <Link href="/executive-mba">Executive MBA on Future Ready Business Leadership</Link> is awarded and endorsed by CMI. It is a six-month professional development programme; successful participants receive the CMI Certificate of Recognition for the programme. {CERTIFICATE_POSITIONING.professionalRelevance} It is not an MQA-accredited academic degree or a regulated qualification.
            </p>

            <h2>Compare the published facts</h2>
            <p className="mono fine">{COMPARISON_SCOPE}</p>
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
              This programme is designed for owners, directors, general managers and senior managers who carry a current business issue and want structured leadership development built around it. It combines cohort-based workshops, coaching, strategic decision frameworks and an applied business project across {FACTS.durationLong}. Participants remain in their roles throughout.
            </p>
            <p>
              Chartered Manager is a separate optional CMI route, decided by CMI; it is not included in this programme or its published fee. A programme conversation can confirm the current fee, session dates and CMI recognition in writing.
            </p>

            <h2>Research sources</h2>
            <ul>
              <li><a href="https://www.edx.org/resources/what-is-the-difference-between-a-professional-certificate-and-an-executive-education" target="_blank" rel="noopener noreferrer">edX: Professional certificate vs executive education</a></li>
              <li><a href="https://business.rice.edu/executive-education" target="_blank" rel="noopener noreferrer">Rice Business Executive Education</a></li>
            </ul>
            <p><Link href="/diagnostic" className="btn btn-primary">Open the {PROGRAMME_FIT_CHECK.en}</Link></p>
          </div>
        </section>
      </article>

      <CtaSection programme="Executive MBA" heading="Discuss which job your next step needs to do." />
    </>
  );
}
