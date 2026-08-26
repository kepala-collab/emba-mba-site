import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { COMPARISON_SCOPE, CTA_LABELS, FACTS, FAQS, REFUND_TERMS } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/executive-mba-vs-mba", {
  title: "Executive MBA vs Academic MBA",
  description:
    "Compare the Future Ready professional Executive MBA with an academic MBA across format, assessment, credential and time commitment.",
});

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS.filter((f) =>
  ["Is it MQA-recognised?", "How is the programme structured?", "What are the refund terms?"].includes(f.q)
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ExecutiveMbaVsMbaPage() {
  return (
    <>
      <JsonLd data={faqLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA vs academic MBA · defined comparison</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA vs an academic MBA — choose by the outcome you require.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Compare the routes by credential, assessment, format, time and published price. The{" "}
              <Link href="/executive-mba" className="acc">Future Ready Executive MBA</Link> is a
              professional programme awarded and endorsed by CMI; it is not an MQA-accredited academic
              degree or a regulated qualification. Choose an academic MBA when your objective requires
              an academic degree. Choose this programme when your objective is applied management
              development while continuing to work.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              Comparing shorter professional programmes as well? Read{" "}
              <Link href="/insights/executive-education-vs-executive-mba" className="acc">executive education vs Executive MBA</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Side by side</span></div></Reveal>
          <Reveal><h2 className="sec-h">Eight attributes compared on the same page.</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE} The Future Ready programme is not equivalent to, or a substitute for,
            an MQA-accredited academic degree. See the full <Link href="/fees" className="acc">investment breakdown</Link>.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who should choose which</span></div></Reveal>
          <Reveal><h2 className="sec-h">Choose according to the credential and learning format required.</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>Choose an academic MBA if…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  Your next step requires an academic or regulated degree.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  If your goal requires an MQA-accredited or academic qualification — for a licensing
                  body, a PhD pathway, an academic career, or a stated qualification requirement in your sector —
                  an academic MBA is the correct route. Compare each institution&rsquo;s published entry
                  requirements, curriculum, duration, fees and recognition before enrolling.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>Choose this Executive MBA if…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  You require a professional programme with applied business work and a part-time format.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  This route is designed for participants with strategic or business-wide responsibility who want
                  structured decision frameworks, an applied project and a CMI Certificate of Recognition. The
                  six-month programme uses three scheduled weekends across the programme.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:760px){.choose-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* IS IT WORTH IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Is an executive MBA worth it?</span></div></Reveal>
          <Reveal><h2 className="sec-h">Choose according to the result you require.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Define the result you need before comparing price. Choose an MQA-accredited academic MBA
              when your next step requires an academic degree. Choose this programme when you need a
              six-month programme, an applied business project, CMI recognition against its
              Professional Standard and continued employment during study. The published 2026 Malaysian
              standard fee is {FACTS.priceStd}. Eligible Malaysian applicants may receive the{" "}
              <Link href="/fees" className="acc">{FACTS.scholarshipAmount} {FACTS.scholarshipProvider} scholarship</Link> after assessment and written approval.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              The programme does not guarantee a raise, promotion, employment or business result.
              Participants continue working during the programme and apply the frameworks to their own
              business project. {REFUND_TERMS.description}
            </p>
          </Reveal>
          <Reveal className="center mt-m">
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Common questions</span></div></Reveal>
          <Reveal><h2 className="sec-h">The questions leaders ask before deciding.</h2></Reveal>
          <div className="mt-s">
            {PAGE_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Read every question in full on the <Link href="/faq" className="acc">FAQ</Link>, or
            {" "}<Link href="/apply" className="acc">{CTA_LABELS.guide}</Link> and the programme team will send the information.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Decided it fits? Let's talk about your intake." />
    </>
  );
}
