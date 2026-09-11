import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import Reveal from "@/components/site/Reveal";
import { FAQS_MS, ENQUIRY_COMMITMENT_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { CTA_LABELS } from "@/lib/content";

const path = "/ms/faq";

export const metadata = withSeo(path, {
  title: "Soalan Lazim Executive MBA",
  description:
    "Siapa menentukan setiap perkara, sebelum anda membuat keputusan: apa yang berubah untuk anda, pengiktirafan CMI, sempadan MQA, yuran, pembiayaan HRD Corp dan terma bayaran balik.",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ms-MY",
  mainEntity: FAQS_MS.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Soalan lazim", path }]} />
      <JsonLd data={schema} />
      <section className="section faq">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Soalan lazim</span></div>
            <h1 className="sec-h">Siapa menentukan setiap perkara, sebelum anda membuat keputusan.</h1>
            <p className="sec-sub">Apa yang berubah untuk anda, pengiktirafan CMI, yuran, pembiayaan HRD Corp yang diterajui majikan dan terma bayaran balik — dengan siapa yang menentukan setiap satu, dan dalam dokumen yang mana.</p>
          </Reveal>
          <Reveal className="mt-s">
            {FAQS_MS.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </Reveal>
          <Link href="/ms/apply" className="btn btn-primary mt-m">{CTA_LABELS.ms.guide} →</Link>
          <p className="fine center mt-s">{ENQUIRY_COMMITMENT_MS}</p>
        </div>
      </section>
    </>
  );
}
