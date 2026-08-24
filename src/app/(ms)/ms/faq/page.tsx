import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import Reveal from "@/components/site/Reveal";
import { FAQS_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { CTA_LABELS } from "@/lib/content";

const path = "/ms/faq";

export const metadata = withSeo(path, {
  title: "Soalan Lazim Executive MBA",
  description:
    "Jawapan terus tentang struktur program, pengiktirafan CMI, perbezaan dengan ijazah MQA, HRD Corp, urusan kehadiran, untuk siapa program ini dan proses permohonan.",
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
            <h1 className="sec-h">Jawapan yang anda perlu tahu sebelum mendaftar</h1>
            <p className="sec-sub">Kelayakan, yuran dan tarikh program adalah berdasarkan maklumat bertulis terkini yang diberikan oleh pasukan program semasa pendaftaran.</p>
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
        </div>
      </section>
    </>
  );
}
