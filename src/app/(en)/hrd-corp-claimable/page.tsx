import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, INCLUSIONS, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/hrd-corp-claimable", {
  title: "HRD Corp Claimable Executive MBA",
  description:
    "Learn how eligible Malaysian employers may apply to claim up to 100% of the approved Future Ready Executive MBA fee through HRD Corp, subject to prior approval and levy balance.",
});

const STEPS = [
  {
    h: "We are an Approved Training Provider",
    p: `${SITE.provider} is an HRD Corp (HRDC) Approved Training Provider running SBL-Khas programmes — so the Executive MBA can be routed through your levy.`,
  },
  {
    h: "Your company applies before the intake",
    p: "Your HR or finance lead submits the grant application to HRD Corp before the cohort begins. We give you the programme details, cost breakdown and provider references you need.",
  },
  {
    h: "We prepare every document",
    p: `The ${SITE.providerShort} programme team assembles the trainer profiles, course content, quotation and supporting paperwork HRD Corp requires — so nothing stalls your submission.`,
  },
  {
    h: "The claim is submitted & tracked",
    p: "Once approved and the programme is delivered, the claim is submitted to HRD Corp against your available levy balance. We stay with your team through the process.",
  },
];

const HRD_FAQS = [
  {
    q: "Is the Executive MBA HRD Corp claimable?",
    a: `An eligible HRD Corp-registered Malaysian employer may apply to claim up to 100% of the approved programme fee for an employee. Programme registration, prior grant approval, sufficient levy balance and current HRD Corp rules apply; reimbursement is not automatic.`,
  },
  {
    q: "Do you handle the paperwork?",
    a: `Yes. We handle the full HRDC process — grant application guidance, trainer and course documentation, the quotation and the final claim submission — and we field employer enquiries directly. Your HR team is guided step by step before the cohort begins.`,
  },
  {
    q: "What if we're not HRDC-registered?",
    a: `No problem. The standard fee is ${FACTS.priceStd}. Malaysian participants pay ${FACTS.priceNet} after the ${FACTS.scholarshipAmt} ${FACTS.scholarshipProvider} scholarship, and installment plans are available — so individuals and non-levy employers can still join without an HRD Corp claim.`,
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
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp claimable MBA · SBL-Khas · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Turn your HRD Corp levy into a future-ready leadership credential.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider} is an HRD Corp (HRDC) Approved Training Provider. The Future
              Ready Executive MBA is recognised by the Chartered Management Institute (CMI), UK.
              <b style={{ color: "var(--ink)" }}> Eligible Malaysian employers may apply to claim up to 100% of the approved programme fee
              through HRD Corp</b>. Programme registration, prior approval, amounts and reimbursement depend on HRD Corp rules and
              the employer&rsquo;s available levy balance; the programme team supplies the supporting paperwork.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">Enquire for your company →</Link>
              <Link href="/fees" className="btn">See fees &amp; scholarship</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW THE CLAIM WORKS */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How the claim works</span></div></Reveal>
          <Reveal><h2 className="sec-h">Four steps — most of them ours, not yours.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              You focus on nominating the right leaders. We manage the HRD Corp mechanics so
              your submission moves cleanly through to approval.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
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
          <Reveal><h2 className="sec-h">What that claim actually funds.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The approved claim can fund the six-month professional pathway — three months to the programme certificate followed by three months of supported CMgr assessment preparation — with practitioner-led
              transformation, not a certificate mill. A few of the things your leaders walk away with:
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "var(--surface)" }}>
              {INCLUSIONS.slice(0, 4).map((it, i) => (
                <li key={it.b} style={{ padding: "20px 22px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 16 }}>
                  <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.14rem", display: "block" }}>{it.b}</b>
                    <span style={{ color: "var(--ink-2)", fontSize: ".93rem", display: "block", marginTop: 4 }}>{it.s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            Full programme detail on the <Link href="/executive-mba">Executive MBA</Link> page.
            This is a professional programme recognised by CMI (UK); it is not an MQA-regulated
            academic degree.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY NOTE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who can claim</span></div></Reveal>
          <Reveal><h2 className="sec-h">Company-paid via the levy — or funded another way.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              HRD Corp claims are a <b style={{ color: "var(--ink)" }}>B2B, company-paid</b> route:
              available to registered Malaysian employers contributing to the HRD Corp levy, subject
              to HRDC eligibility and your available balance. Not levy-registered, or joining as an
              individual? Malaysian participants pay {FACTS.priceNet} after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship
              or an installment plan.
            </p>
          </Reveal>
          <p className="fine mt-s">
            Eligibility, claimable amounts and approval are determined by HRD Corp, not by {SITE.provider}.
            Direct specific HRDC questions to the programme team — {SITE.director}, {SITE.phone} · {SITE.email} —
            and we&rsquo;ll help you confirm before you commit. Ready to enrol? Start your{" "}
            <Link href="/apply">application</Link>.
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

      <CtaSection programme="Executive MBA" heading="Claim it through HRD Corp. We handle the paperwork." />
    </>
  );
}
