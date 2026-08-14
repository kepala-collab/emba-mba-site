import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { FAQS } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/faq", {
  title: "Frequently Asked Questions",
  description:
    "Straight answers on the Future Ready Executive MBA (CMI UK): duration, MQA recognition, HRD Corp claims, fees, scheduling and the money-back guarantee.",
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

      <section className="section faq" style={{ paddingTop: "clamp(96px, 14vh, 160px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Straight answers · CMI (UK)</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h">The questions serious people ask.</h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              No brochure spin. The honest detail on duration, recognition, funding and
              our money-back guarantee for the Future Ready Executive MBA &mdash; so you
              can decide with your eyes open.
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
            Still weighing it up? Book a 15-minute call with the programme team &mdash;
            no obligation, no scripted pitch.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
