import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/resources", {
  title: "Executive MBA Decision Resources",
  description: "Private, practical resources for comparing programme fit, method, time, recognition, fees, scholarship and the employer-led HRD Corp process.",
});

const DOSSIERS = [
  ["01", "Executive Readiness Diagnostic", "Identify the evidence required for your next professional-development decision. No score, storage or submission.", "/diagnostic", "Start privately"],
  ["02", "Executive Advancement Brief", "Read or print the programme structure, exact Malaysian fee, recognition boundary and questions to resolve.", "/resources/advancement-brief", "Open the brief"],
  ["03", "The Advancement Question", "A short essay on choosing professional development by the work it must help you do—not by prestige language alone.", "/insights/advancement-question", "Read the essay"],
] as const;

export default function ResourcesPage() {
  return (
    <>
      <header className="resource-hero">
        <div className="wrap">
          <p className="mono sec-k">Working Scholar / study materials</p>
          <h1>Useful before you give us anything.</h1>
          <p>Understand the programme privately. These materials do not require contact details and make the time, fee, recognition and funding boundaries explicit.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap resource-list">
          {DOSSIERS.map(([n, title, body, href, action], index) => (
            <Reveal key={title} delay={index * 45}>
              <article className="resource-dossier">
                <span className="mono">{n}</span>
                <div><h2>{title}</h2><p>{body}</p></div>
                <Link href={href} className="text-action">{action} <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="employer-guide">
        <div className="wrap guide-grid">
          <Reveal>
            <article className="guide-card">
              <p className="mono sec-k">Employer conversation guide</p>
              <h2>Build the case around work that matters.</h2>
              <p>Use the employer conversation to connect development to an actual organisational need.</p>
              <ol>
                <li>Define the business decision, capability gap or transformation question.</li>
                <li>Identify how the applied project can address that context.</li>
                <li>Review the six training days and three-session certificate-phase schedule.</li>
                <li>State the standard fee of {FACTS.priceStd}, the {FACTS.scholarshipAmt} scholarship and the Malaysian participant fee of {FACTS.priceNet}.</li>
                <li>Ask the employer to determine whether it will pursue HRD Corp funding. The employer submits before training; HRD Corp decides eligibility and the approved amount.</li>
              </ol>
            </article>
          </Reveal>
          <Reveal delay={60}>
            <article className="guide-card" id="decision-checklist">
              <p className="mono sec-k">Neutral decision checklist</p>
              <h2>Questions to ask before choosing.</h2>
              <ul>
                <li>What work must this learning help me do more effectively?</li>
                <li>What is taught, applied and assessed—and by whom?</li>
                <li>What exactly is awarded on programme completion?</li>
                <li>Which later professional designation requires a separate assessment?</li>
                <li>What is the complete fee after any published scholarship?</li>
                <li>Who decides employer-funding eligibility and the approved amount?</li>
                <li>Can I see the dates, terms and material claims before paying?</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
