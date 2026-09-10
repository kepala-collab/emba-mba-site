import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import Reveal from "@/components/site/Reveal";
import { FAQS_ZH, ENQUIRY_COMMITMENT_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { CTA_LABELS } from "@/lib/content";

const path = "/zh/faq";

export const metadata = withSeo(path, {
  title: "Executive MBA 常见问题",
  description: "谁决定每一件事，在您决定之前：课程带来的改变、CMI 认可、MQA 界线、费用、HRD Corp 资助与退款条款。",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "zh-Hans-MY",
  mainEntity: FAQS_ZH.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "常见问题", path }]} />
      <JsonLd data={schema} />
      <section className="section faq">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">常见问题</span></div>
            <h1 className="sec-h">谁决定每一件事，先看清楚再决定</h1>
            <p className="sec-sub">课程带来的改变、CMI 认可、费用、由雇主主导的 HRD Corp 资助与退款条款——以及每一项由谁决定、写在哪一份文件里。</p>
          </Reveal>
          <Reveal className="mt-s">
            {FAQS_ZH.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </Reveal>
          <Link href="/zh/apply" className="btn btn-primary mt-m">{CTA_LABELS.zh.guide} →</Link>
          <p className="fine center mt-s">{ENQUIRY_COMMITMENT_ZH}</p>
        </div>
      </section>
    </>
  );
}
