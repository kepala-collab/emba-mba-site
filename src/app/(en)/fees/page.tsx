import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import {
  CERTIFICATE_POSITIONING,
  FACTS,
  HRD_CORP_CLAIM,
  INCLUSIONS,
  REFUND_TERMS,
} from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/fees", {
  title: "Executive MBA Fees, Scholarship & HRD Corp",
  description: `${FACTS.priceStd} standard fee. ${FACTS.scholarshipEligibility} The scholarship is never automatic.`,
});

export default function FeesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Fees", path: "/fees" }]} />

      <section className="section fees-hero geo-section">
        <div className="wrap fees-hero-grid">
          <div>
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Fees for Malaysian participants</span></div>
            </Reveal>
            <Reveal delay={40}><h1>{FACTS.priceStd} standard fee. Every other condition confirmed in writing.</h1></Reveal>
            <Reveal delay={80}>
              <p className="fees-hero-lede">
                The fee funds {FACTS.durationLong} of work on one live business issue: {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, one-to-one coaching and project review, the applied business project and the frameworks and working templates you keep. {FACTS.scholarshipEligibility} The scholarship is never automatic.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div className="fees-hero-actions">
                <Link href="/apply" className="btn btn-primary">Discuss programme fit and the fee in writing <span aria-hidden="true">→</span></Link>
                <Link href="#included" className="btn btn-ghost">See what the fee includes</Link>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="programme-overview-note">There is no fee to request information or ask for an eligibility review. An enquiry does not commit you to enrol or pay. CMI&rsquo;s separate Chartered Manager assessment, application and continuing membership fees are not included unless the written fee schedule expressly states otherwise.</p>
            </Reveal>
          </div>

          <Reveal delay={70}>
            <aside className="fee-equation-card" aria-label="Scholarship assessment information for Malaysian applicants">
              <p className="mono sec-k">Scholarship assessment</p>
              <dl>
                <div><dt>Standard programme fee</dt><dd>{FACTS.priceStd}</dd></div>
                <div><dt>Eligibility review</dt><dd>Individual</dd></div>
                <div className="fee-equation-total"><dt>Award and participant fee</dt><dd>Confirmed in writing</dd></div>
              </dl>
              <p>{FACTS.scholarshipEligibility} The scholarship is never automatic.</p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="included" className="section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Included in the programme fee</p>
              <h2 className="sec-h">What the fee funds.</h2>
              <p>The same programme components apply whether you pay the standard fee or receive an approved scholarship.</p>
            </div>
          </Reveal>
          <div className="fee-inclusion-grid">
            {INCLUSIONS.map((item, index) => (
              <Reveal key={item.b} delay={(index % 2) * 35}>
                <article><span className="mono">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.b}</h3><p>{item.s}</p></div></article>
              </Reveal>
            ))}
          </div>
          <p className="fine fee-section-note">{CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance} Travel and accommodation, where required, are not included.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap fee-funding-grid">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Employer-led HRD Corp funding</p>
              <h2 className="sec-h">The employer applies. HRD Corp decides.</h2>
              <p>{HRD_CORP_CLAIM.responsibility} {HRD_CORP_CLAIM.short}</p>
              <Link href="/hrd-corp-claimable" className="btn btn-ghost">See the employer application process</Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ol className="fee-funding-steps">
              <li><span>1</span><div><strong>Employer confirms eligibility</strong><p>The participant&rsquo;s HRD Corp-registered employer checks its levy balance and current funding rules.</p></div></li>
              <li><span>2</span><div><strong>Programme team supplies documents</strong><p>The team provides the quotation, schedule, course content and trainer documents.</p></div></li>
              <li><span>3</span><div><strong>Employer submits in e-TRiS</strong><p>HRD Corp decides whether the application is approved and the approved amount.</p></div></li>
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section fee-terms-section">
        <div className="wrap fee-terms-grid">
          <Reveal>
            <article>
              <p className="mono sec-k">Payment options</p>
              <h2>Review the payment schedule before enrolment.</h2>
              <p>Available arrangements include RHB credit-card instalments over 6–12 months and an ABC four-month payment plan. Eligibility and final terms are confirmed in writing before payment.</p>
            </article>
          </Reveal>
          <Reveal delay={50}>
            <article>
              <p className="mono sec-k">Refund terms</p>
              <h2>{REFUND_TERMS.title}</h2>
              <p>{REFUND_TERMS.description}</p>
              <Link href="/terms" className="text-action">Read the Terms &amp; Conditions <span aria-hidden="true">↗</span></Link>
            </article>
          </Reveal>
        </div>
        <div className="wrap fee-comparison-link">
          <p>Comparing this professional programme with an academic MBA?</p>
          <Link href="/executive-mba-vs-mba" className="btn btn-ghost">See the defined comparison</Link>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Confirm the fee in writing before you decide." sub={`Ask about the ${FACTS.priceStd} standard fee, scholarship eligibility, payment options or employer-led HRD Corp funding. ${FACTS.scholarshipEligibility} The scholarship is never automatic. An enquiry does not commit you to enrol or pay.`} />
    </>
  );
}
