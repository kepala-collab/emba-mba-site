import Link from "next/link";
import PrintBriefButton from "@/components/site/PrintBriefButton";
import { CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, HRD_CORP_CLAIM, PROGRAMME_AUDIENCE, PROGRAMME_YEAR, SIGNATURE_QUOTE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/resources/advancement-brief", {
  title: `The Working Manager’s ${PROGRAMME_YEAR} Progression Guide`,
  description: "A printable guide to programme fit, the applied business project, six-month structure, Malaysian fee, CMI recognition and next steps.",
});

const PRESSURES = [
  "Your responsibilities now cross people, operations and strategy.",
  "Important decisions depend too heavily on experience or instinct alone.",
  "You need professional development that can be applied without leaving work.",
] as const;

export default function AdvancementBriefPage() {
  return (
    <div className="brief-shell">
      <div className="brief-toolbar">
        <Link className="text-action" href="/resources">← Back to programme guides</Link>
        <PrintBriefButton />
      </div>

      <article className="brief-document">
        <header>
          <p className="mono sec-k">The Working Manager&rsquo;s {PROGRAMME_YEAR} Progression Guide</p>
          <h1>Is your role growing faster than your management toolkit?</h1>
          <p>Use this guide to decide whether a practical, work-based management programme fits the responsibilities you carry now.</p>
        </header>

        <section className="brief-chapter">
          <span className="mono">Foreword</span>
          <div>
            <h2>The decisions grew. Your toolkit should grow with them.</h2>
            <p>This guide is for people carrying wider responsibility at work and asking what development would be useful now. The programme is designed to help participants examine a live business issue, ask better questions and build a practical action plan while continuing in their professional roles.</p>
            <p>The purpose is not to prescribe one answer. It is to give experienced people a clearer structure for reaching and explaining their own.</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">01 / The moment</span>
          <div>
            <h2>Experience matters. Structure makes it easier to use.</h2>
            <p>Managers begin looking when decisions become broader, more expensive or harder to explain. The question is not whether you have experience. It is whether you have a repeatable way to turn that experience into a clear decision and action plan.</p>
            <ul>{PRESSURES.map((pressure) => <li key={pressure}>{pressure}</li>)}</ul>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">02 / Fit</span>
          <div>
            <h2>Start with the work you are responsible for.</h2>
            <p>{PROGRAMME_AUDIENCE}</p>
            <p>The strongest fit is a participant who can bring a real strategic question, growth constraint, transformation priority or cross-functional decision into the programme.</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">03 / What changes</span>
          <div>
            <h2>A current business issue becomes a structured action plan.</h2>
            <p>Participants learn to define the real problem, separate evidence from assumptions, compare practical options and plan implementation. The applied project records that reasoning in a form that can be reviewed and used.</p>
            <div className="brief-facts">
              <div><strong>Bring</strong><span>a current business challenge</span></div>
              <div><strong>Apply</strong><span>the management frameworks</span></div>
              <div><strong>Build</strong><span>a faculty-reviewed action plan</span></div>
            </div>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">04 / Six months</span>
          <div>
            <h2>A focused six-month programme.</h2>
            <p><strong>Six months:</strong> six facilitated training days across three scheduled sessions, coaching and an applied business project leading to the CMI-recognised programme certificate.</p>
            <div className="brief-facts">
              <div><strong>{FACTS.trainingDays} days</strong><span>facilitated training</span></div>
              <div><strong>{FACTS.liveSessions} sessions</strong><span>scheduled monthly</span></div>
              <div><strong>{FACTS.moduleCount} modules</strong><span>practical frameworks</span></div>
            </div>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">05 / Recognition</span>
          <div>
            <h2>{CERTIFICATE_POSITIONING.headline}</h2>
            <p>{CERTIFICATE_POSITIONING.distinction}</p>
            <p>{CERTIFICATE_POSITIONING.professionalRelevance}</p>
            <p>Chartered Manager is a separate professional assessment. CMI confirms the applicable route and controls eligibility, assessment, membership, fees and continued post-nominal use. CMgr MCMI is not automatic.</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">06 / Investment</span>
          <div>
            <h2>See the standard fee before checking support.</h2>
            <div className="brief-facts">
              <div><strong>{FACTS.priceStd}</strong><span>standard programme fee</span></div>
              <div><strong>{FACTS.scholarshipAmount}</strong><span>scholarship available to eligible Malaysian applicants</span></div>
              <div><strong>{FACTS.priceAfterScholarship}</strong><span>payable only after written scholarship approval</span></div>
            </div>
            <p>{FACTS.scholarshipEligibility} The scholarship is not automatic. {HRD_CORP_CLAIM.short} {HRD_CORP_CLAIM.responsibility}</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">07 / Your decision</span>
          <div>
            <h2>Ask five questions before enrolling.</h2>
            <ul>
              <li>Which current business challenge would I bring into the applied project?</li>
              <li>Can I attend the published sessions and complete the project requirements?</li>
              <li>Does the work-based format match how I need to develop?</li>
              <li>Do I understand the difference between the programme certificate and Chartered Manager?</li>
              <li>If my employer may fund the programme, who will submit the HRD Corp application before training?</li>
            </ul>
            <p>&ldquo;{SIGNATURE_QUOTE.text}&rdquo;</p>
            <p><strong>{SIGNATURE_QUOTE.attribution}</strong> · {SIGNATURE_QUOTE.role}</p>
            <Link className="btn btn-primary" href="/apply">{CTA_LABELS.guide}</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
