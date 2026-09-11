import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { FACTS, PROGRAMME_FIT_CHECK, PROGRAMME_YEAR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/resources", {
  title: "Programme Guides and Fit Check",
  description: "Review programme fit, structure, the exact fee, the scholarship terms, CMI recognition and the employer-led HRD Corp process before you enquire.",
});

const DOSSIERS = [
  ["01", PROGRAMME_FIT_CHECK.en, "Answer four private questions to identify which capability, schedule, fee and recognition details matter to your next step. No score or data submission is required for the result.", "/diagnostic", "Start the check"],
  ["02", `The ${PROGRAMME_YEAR} programme guide`, "Read or print the programme structure, the applied business project, the exact Malaysian fee and what the CMI certificate does not cover.", "/resources/advancement-brief", "Open the guide"],
  ["03", "How to Compare Leadership Programmes", "A short guide to comparing capability, application, schedule, recognition and fees.", "/insights/advancement-question", "Read the guide"],
  ["04", "Chartered Manager Malaysia", "Understand CMI's current routes, eligibility, assessment costs, fCMgr, CMgr MCMI and the Malaysia professional network.", "/chartered-manager-malaysia", "See the separate CMI route"],
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
                <li>Review the {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions.</li>
                <li>State the {FACTS.priceStd} standard fee. {FACTS.scholarshipEligibility} The scholarship is never automatic.</li>
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
                <li>How is scholarship eligibility assessed, and when is an award confirmed in writing?</li>
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
