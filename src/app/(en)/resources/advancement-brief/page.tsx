import Link from "next/link";
import PrintBriefButton from "@/components/site/PrintBriefButton";
import { CERTIFICATE_POSITIONING, FACTS, HRD_CORP_CLAIM, PROGRAMME_AUDIENCE, SIGNATURE_QUOTE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/resources/advancement-brief", {
  title: "Executive Advancement Brief",
  description: "A printable decision dossier covering programme fit, six-month structure, applied method, exact Malaysian fee, CMI recognition boundaries and next steps.",
});

export default function AdvancementBriefPage() {
  return (
    <div className="brief-shell">
      <div className="brief-toolbar">
        <Link className="text-action" href="/resources">← Back to study materials</Link>
        <PrintBriefButton />
      </div>

      <article className="brief-document">
        <header>
          <p className="mono sec-k">Working Scholar / decision dossier 01</p>
          <h1>Executive Advancement Brief</h1>
          <p>A concise, factual view of the Future Ready Executive MBA for an experienced working adult deciding what serious learning must make possible next.</p>
        </header>

        <section className="brief-chapter">
          <span className="mono">01 / Fit</span>
          <div>
            <h2>Begin with the work, not the credential.</h2>
            <p>{PROGRAMME_AUDIENCE}</p>
            <p>The programme is relevant when the participant can bring a real business context into the learning: a strategic question, transformation priority, capability gap or decision with material consequences.</p>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">02 / Method</span>
          <div>
            <h2>Structured inquiry applied to a live context.</h2>
            <p>The first three months use six training days across three monthly sessions, practitioner-led frameworks, diagnostics, coaching and an applied business project. The work emphasises systems, evidence, assumptions, options and implementation.</p>
            <div className="brief-facts">
              <div><strong>6 days</strong><span>certificate-phase training</span></div>
              <div><strong>3 sessions</strong><span>scheduled monthly</span></div>
              <div><strong>12 modules</strong><span>applied frameworks</span></div>
            </div>
          </div>
        </section>

        <section className="brief-chapter">
          <span className="mono">03 / Pathway</span>
          <div>
            <h2>Six months, with two boundaries.</h2>
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
          <span className="mono">06 / Decision</span>
          <div>
            <h2>Resolve these questions before enrolling.</h2>
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
            <Link className="btn btn-primary" href="/apply">Arrange a programme conversation</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
