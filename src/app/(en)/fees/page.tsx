import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import {
  FACTS,
  HRD_CORP_CLAIM,
  INCLUSIONS,
  OPERATOR,
  PROGRAMME_PRICING,
  REFUND_TERMS,
} from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/fees", {
  title: "Executive MBA Fees, Scholarship & HRD Corp",
  description:
    "The Malaysian participant fee is RM5,000 after a RM5,000 LIFE Innoversity scholarship. See inclusions, HRD Corp funding and payment information.",
});

export default function FeesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Fees", path: "/fees" }]} />

      <section className="section fees-hero">
        <div className="wrap fees-hero-grid">
          <div>
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Fees for Malaysian participants</span></div>
            </Reveal>
            <Reveal delay={40}><h1>Pay {FACTS.priceNet} after the published scholarship.</h1></Reveal>
            <Reveal delay={80}>
              <p className="fees-hero-lede">
                The standard programme fee is {FACTS.priceStd}. {FACTS.scholarshipProvider} provides Malaysian participants with a {FACTS.scholarshipAmt} scholarship, reducing the amount payable to {FACTS.priceNet}.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div className="fees-hero-actions">
                <Link href="/apply" className="btn btn-primary">Ask about fees or enrolment <span aria-hidden="true">→</span></Link>
                <Link href="#included" className="btn btn-ghost">See what the fee includes</Link>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="programme-overview-note">CMI&rsquo;s separate Chartered Manager assessment, application and continuing membership fees are not included unless the written fee schedule expressly states otherwise.</p>
            </Reveal>
          </div>

          <Reveal delay={70}>
            <aside className="fee-equation-card" aria-label="Malaysian participant fee calculation">
              <p className="mono sec-k">Published fee calculation</p>
              <dl>
                <div><dt>Standard programme fee</dt><dd>{FACTS.priceStd}</dd></div>
                <div><dt>{FACTS.scholarshipProvider} scholarship</dt><dd>− {FACTS.scholarshipAmt}</dd></div>
                <div className="fee-equation-total"><dt>Malaysian participant pays</dt><dd>{FACTS.priceNet}</dd></div>
              </dl>
              <p>There is no application fee to request information or speak with the programme team.</p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="included" className="section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Included in {FACTS.priceNet}</p>
              <h2 className="sec-h">What the Malaysian participant fee includes.</h2>
              <p>The published Malaysian participant fee includes the programme components below.</p>
            </div>
          </Reveal>
          <div className="fee-inclusion-grid">
            {INCLUSIONS.map((item, index) => (
              <Reveal key={item.b} delay={(index % 2) * 35}>
                <article><span className="mono">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.b}</h3><p>{item.s}</p></div></article>
              </Reveal>
            ))}
          </div>
          <p className="fine fee-section-note">The programme certificate phase has no traditional examination or thesis. Travel and accommodation, where required, are not included.</p>
        </div>
      </section>

      <section className="section fee-options-section">
        <div className="wrap">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Other programme arrangements</p>
              <h2 className="sec-h">Online, localised and company delivery.</h2>
              <p>The option and written proposal determine the applicable price.</p>
            </div>
          </Reveal>
          <div className="fee-option-grid">
            {PROGRAMME_PRICING.individuals.map((option, index) => (
              <Reveal key={option.key} delay={index * 40}>
                <article>
                  <span className="mono sec-k">Option {String(index + 1).padStart(2, "0")}</span>
                  <h3>{option.title}</h3>
                  <p>{option.audience}</p>
                  <strong>{option.price}</strong>
                  <Link href={option.actionHref} className="text-action">{option.actionLabel} <span aria-hidden="true">↗</span></Link>
                </article>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <article>
                <span className="mono sec-k">For companies</span>
                <h3>{PROGRAMME_PRICING.companies.title}</h3>
                <p>{PROGRAMME_PRICING.companies.description}</p>
                <strong>{PROGRAMME_PRICING.companies.price}</strong>
                <Link href="/contact" className="text-action">Request a company proposal <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
          </div>
          <p className="fine fee-section-note"><strong>{OPERATOR.name}</strong> is the authorised {OPERATOR.role} for programme enquiries, pricing and enrolment coordination. Every participant receives the applicable written fee schedule before payment.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap fee-funding-grid">
          <Reveal>
            <div className="reading-section-head">
              <p className="mono sec-k">Employer-led HRD Corp funding</p>
              <h2 className="sec-h">Your employer applies before training begins.</h2>
              <p>{HRD_CORP_CLAIM.short}</p>
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

      <CtaSection programme="Executive MBA" heading="Confirm the exact fee and payment terms." sub={`Ask about the ${FACTS.priceNet} Malaysian participant fee, payment options, international delivery or the employer-led HRD Corp process. An enquiry does not commit you to enrol or pay.`} />
    </>
  );
}
