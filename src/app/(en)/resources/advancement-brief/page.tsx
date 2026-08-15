import Link from "next/link";
import PrintBriefButton from "@/components/site/PrintBriefButton";
import { CERTIFICATE_POSITIONING, FACTS, HRD_CORP_CLAIM, PROGRAMME_AUDIENCE, SIGNATURE_QUOTE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/resources/advancement-brief", {
  title: "Executive MBA Programme Guide",
  description: "A printable guide covering programme fit, six-month structure, curriculum, Malaysian fee, CMI recognition and next steps.",
});

export default function AdvancementBriefPage() {
  return (
    <div className="brief-shell">
      <div className="brief-toolbar">
        <Link className="text-action" href="/resources">← Back to programme guides</Link>
        <PrintBriefButton />
      </div>

      <article className="brief-document">
        <header>
          <p className="mono sec-k">Printable programme guide</p>
          <h1>Future Ready Executive MBA</h1>
          <p>A concise summary of who the programme is for, how the six months work, what it costs and what the CMI recognition means.</p>
        </header>

        <section className="brief-chapter">
          <span className="mono">01 / Fit</span>
          <div>
            <h2>Who the programme is for.</h2>
            <p>{PROGRAMME_AUDIENCE}</p>
            <p>The programme is relevant when the participant can bring a real business context into the learning: a strategic question, transformation priority, capability gap or decision with material consequences.</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">02 / Method</span>
          <div>
            <h2>How learning is applied.</h2>
            <p>The first three months use six training days across three monthly sessions, practical frameworks, diagnostics, coaching and an applied business project. Participants learn to define problems, test assumptions, compare options and plan implementation.</p>
            <div className="brief-facts">
              <div><strong>6 days</strong><span>certificate-phase training</span></div>
              <div><strong>3 sessions</strong><span>scheduled monthly</span></div>
              <div><strong>12 modules</strong><span>applied frameworks</span></div>
            </div>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">03 / Six-month structure</span>
          <div>
            <h2>Six months with two separate outcomes.</h2>
            <p>Months one to three comprise the Executive MBA programme certificate phase. Months four to six provide supported preparation for eligible participants pursuing CMI&rsquo;s separate Chartered Manager assessment.</p>
            <p>CMI controls Chartered Manager entry criteria, assessment, membership, fees, award and continued post-nominal use. CMgr MCMI is not automatic.</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">04 / Recognition</span>
          <div>
            <h2>{CERTIFICATE_POSITIONING.headline}</h2>
            <p>{CERTIFICATE_POSITIONING.distinction}</p>
            <p>{CERTIFICATE_POSITIONING.professionalRelevance}</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">05 / Investment</span>
          <div>
            <h2>The complete Malaysian participant fee.</h2>
            <div className="brief-facts">
              <div><strong>{FACTS.priceStd}</strong><span>standard programme fee</span></div>
              <div><strong>− {FACTS.scholarshipAmt}</strong><span>LIFE Innoversity scholarship</span></div>
              <div><strong>{FACTS.priceNet}</strong><span>Malaysian participant fee</span></div>
            </div>
            <p>{HRD_CORP_CLAIM.short} {HRD_CORP_CLAIM.responsibility}</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">06 / Before enrolling</span>
          <div>
            <h2>Confirm these points before enrolling.</h2>
            <ul>
              <li>Which live business question will I bring into the applied project?</li>
              <li>Can I attend the published sessions and complete the project requirements?</li>
              <li>Do I understand what the programme certificate is—and is not?</li>
              <li>If pursuing Chartered Manager, do I understand the separate CMI assessment and fees?</li>
              <li>If my employer may fund the programme, who will own the pre-training HRD Corp application?</li>
            </ul>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">07 / Principle</span>
          <div>
            <h2>&ldquo;{SIGNATURE_QUOTE.text}&rdquo;</h2>
            <p><strong>{SIGNATURE_QUOTE.attribution}</strong> · {SIGNATURE_QUOTE.role}</p>
            <Link className="btn btn-primary" href="/apply">Ask the programme team</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
