import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { FAQS } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/faq", {
  title: "Frequently Asked Questions",
  description:
    "Exact answers on the Future Ready Executive MBA: duration, CMI recognition, MQA status, HRD Corp process, fees, scheduling and written refund terms.",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <JsonLd data={faqJsonLd} />

      <section className="section faq geo-section" style={{ paddingTop: "clamp(96px, 14vh, 160px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Programme facts · CMI (UK)</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h">Questions to answer before you decide.</h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Programme facts on duration, recognition, funding, fees, attendance and
              written refund terms &mdash; with the responsible decision-maker named for each condition.
            </p>
          </Reveal>

          <Reveal className="mt-s">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>

          <p className="fine center mt-s">
            Need to discuss your situation? Request a 15-minute call with the programme team.
            A conversation request is not an admission or payment commitment.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
