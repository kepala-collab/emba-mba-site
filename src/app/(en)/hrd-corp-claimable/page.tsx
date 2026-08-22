import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { COMPANY_ENROLMENT, CTA_LABELS, FACTS, HRD_CORP_CLAIM, INCLUSIONS, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/hrd-corp-claimable", {
  title: "HRD Corp Claimable Executive MBA",
  description:
    "How registered Malaysian employers apply before training, which documents are supplied, and how HRD Corp decides eligibility and funding.",
});

const STEPS = [
  {
    h: "Confirm the registered programme",
    p: `${SITE.provider} supplies the employer with the programme registration details, quotation, schedule, course content and trainer documents.`,
  },
  {
    h: "The employer applies before training",
    p: "The employer's authorised HRD Corp user submits the grant application in e-TRiS before the cohort begins. The participant does not submit the application.",
  },
  {
    h: "HRD Corp issues its decision",
    p: "HRD Corp determines eligibility and the approved amount under its Allowable Cost Matrix. The amount cannot exceed the employer's available levy balance.",
  },
  {
    h: "Both parties submit claim documents",
    p: "After the approved training is completed, the training provider and employer submit their respective claim documents within HRD Corp's stated deadline.",
  },
];

const HRD_FAQS = [
  {
    q: "Can my company enrol a founder or senior team member?",
    a: `${COMPANY_ENROLMENT.eligibility} ${COMPANY_ENROLMENT.hrdRoute}`,
  },
  {
    q: "Can my employer apply for HRD Corp funding?",
    a: `${HRD_CORP_CLAIM.short} ${HRD_CORP_CLAIM.responsibility}`,
  },
  {
    q: "Do you handle the paperwork?",
    a: `The programme team supplies the quotation, schedule, course content and trainer documents. The employer submits the grant application and its employer-side claim documents. ${SITE.provider} submits the training-provider claim documents.`,
  },
  {
    q: "What if we're not HRDC-registered?",
    a: `The standard fee is ${FACTS.priceStd}. Eligible Malaysian applicants may receive the ${FACTS.scholarshipAmount} ${FACTS.scholarshipProvider} scholarship after assessment and written approval. Approved recipients pay ${FACTS.priceAfterScholarship}. Individual payment options are listed on the Fees page.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HRD_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HrdCorpClaimablePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Employer-led HRD Corp application · SBL-Khas · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Understand the HRD Corp grant process before training begins.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider} is an HRD Corp (HRDC) Approved Training Provider. The Future
              Ready Business Leadership is awarded and endorsed by the Chartered Management Institute (CMI).
              <b style={{ color: "var(--ink)" }}> {HRD_CORP_CLAIM.short}</b> The programme team supplies
              the supporting programme documents.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply?intent=employer_sponsored" className="btn btn-primary">{CTA_LABELS.company} →</Link>
              <Link href="/fees" className="btn">See fees &amp; scholarship</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW THE CLAIM WORKS */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How the claim works</span></div></Reveal>
          <Reveal><h2 className="sec-h">Four defined responsibilities from application to claim.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The employer, HRD Corp and the training provider each control a specific part of the process.
              Approval is complete only when HRD Corp issues it.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{s.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What&rsquo;s covered</span></div></Reveal>
          <Reveal><h2 className="sec-h">Programme components covered by the approved grant amount.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              HRD Corp states the approved amount in its grant decision. The Executive MBA is a
              three-month programme leading to the programme certificate. The programme includes:
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "var(--surface)" }}>
              {INCLUSIONS.slice(0, 4).map((it, i) => (
                <li key={it.b} style={{ padding: "20px 22px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 16 }}>
                  <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.14rem", display: "block" }}>{it.b}</b>
                    <span style={{ color: "var(--ink-2)", fontSize: ".93rem", display: "block", marginTop: 4 }}>{it.s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            Full programme detail on the <Link href="/executive-mba">Executive MBA</Link> page.
            This professional programme is awarded and endorsed by CMI; it is not an MQA-regulated
            academic degree.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY NOTE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who can claim</span></div></Reveal>
          <Reveal><h2 className="sec-h">Employer-funded and individual payment routes.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              HRD Corp claims are a <b style={{ color: "var(--ink)" }}>B2B, company-paid</b> route:
              the HRD Corp-registered Malaysian employer submits the application before training.
              HRD Corp decides eligibility and the approved amount, which cannot exceed the employer&rsquo;s
              available levy balance. Not levy-registered, or joining as an
              individual? Eligible Malaysian applicants may receive the {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} scholarship after assessment and written approval
              or an installment plan.
            </p>
          </Reveal>
          <p className="fine mt-s">
            {HRD_CORP_CLAIM.responsibility} The programme team supplies the programme documents:
            {" "}{SITE.director}, {SITE.phone} · {SITE.email}. To discuss eligibility and documentation, submit a{" "}
            <Link href="/apply">programme enquiry</Link>.
          </p>
        </div>
      </section>

      {/* HRDC FAQ */}
      <section className="section faq">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp · quick answers</span></div></Reveal>
          <Reveal><h2 className="sec-h">The HRDC questions employers ask first.</h2></Reveal>
          <Reveal className="mt-s">
            {HRD_FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
          <p className="fine center mt-s">
            More on cost and funding on the <Link href="/fees">investment</Link> page.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Prepare your HRD Corp application before training." defaultIntent="employer_sponsored" intentOptions={["employer_sponsored", "employer_evaluating"]} />
    </>
  );
}
