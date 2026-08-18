import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/resources", {
  title: "Executive MBA Programme Guides",
  description: "Practical guides for reviewing programme fit, structure, recognition, fees, scholarship and the employer-led HRD Corp process.",
});

const DOSSIERS = [
  ["01", "Working Manager Progression Check", "Answer four private questions to identify which capability, schedule, fee and recognition details matter to your next step. No score or data submission is required for the result.", "/diagnostic", "Start the check"],
  ["02", "Working Manager’s 2026 Progression Guide", "Read or print the programme fit, applied outcome, three-month structure, exact Malaysian fee and CMI recognition.", "/resources/advancement-brief", "Open the guide"],
  ["03", "How to Compare Leadership Programmes", "A short guide to comparing capability, application, schedule, recognition and fees.", "/insights/advancement-question", "Read the guide"],
  ["04", "Chartered Manager Malaysia", "Understand CMI's current routes, eligibility, assessment costs, fCMgr, CMgr MCMI and the Malaysia professional network.", "/chartered-manager-malaysia", "Understand the pathway"],
] as const;

export default function ResourcesPage() {
  return (
    <>
      <header className="resource-hero">
        <div className="wrap">
          <p className="mono sec-k">Programme guides · no contact details required</p>
          <h1>Check the details before you enquire.</h1>
          <p>Review programme fit, structure, fees, CMI recognition and employer funding at your own pace.</p>
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
              <h2>Explain the business reason for attending.</h2>
              <p>Connect the programme to a specific organisational need and an applied project.</p>
              <ol>
                <li>Define the business decision, capability gap or transformation question.</li>
                <li>Identify how the applied project can address that context.</li>
                <li>Review the six training days and three-session certificate-phase schedule.</li>
                <li>State the {FACTS.priceStd} standard fee and explain that the {FACTS.scholarshipAmount} scholarship is limited to eligible Malaysian applicants after assessment and written approval.</li>
                <li>Ask the employer to determine whether it will pursue HRD Corp funding. The employer submits before training; HRD Corp decides eligibility and the approved amount.</li>
              </ol>
            </article>
          </Reveal>
          <Reveal delay={60}>
            <article className="guide-card" id="decision-checklist">
              <p className="mono sec-k">Programme comparison checklist</p>
              <h2>Confirm these points before choosing.</h2>
              <ul>
                <li>What work must this learning help me do more effectively?</li>
                <li>What is taught, applied and assessed—and by whom?</li>
                <li>What exactly is awarded on programme completion?</li>
                <li>Which later professional designation requires a separate assessment?</li>
                <li>What scholarship criteria, availability and written approval apply to me?</li>
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
