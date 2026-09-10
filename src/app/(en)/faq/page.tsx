import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { CTA_LABELS, ENQUIRY_COMMITMENT, FAQS } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/faq", {
  title: "Frequently Asked Questions",
  description:
    "Who decides each thing, before you decide: what changes for you, CMI recognition, the MQA boundary, the fee, employer-led HRD Corp funding and written refund terms.",
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
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "FAQ", path: "/faq" }]} />
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
            <h1 className="sec-h">Who decides each thing, before you decide.</h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              What changes for you, CMI recognition, the fee, employer-led HRD Corp funding and
              written refund terms &mdash; with who decides each one, and in which document.
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
            Need to discuss your situation? {CTA_LABELS.conversation} with the team.
            {" "}{ENQUIRY_COMMITMENT}
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
