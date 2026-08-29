import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import Reveal from "@/components/site/Reveal";
import { FAQS_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { CTA_LABELS } from "@/lib/content";

const path = "/zh/faq";

export const metadata = withSeo(path, {
  title: "Executive MBA 常见问题",
  description: "直接说明课程结构、CMI 认可、与 MQA 学位的区别、HRD Corp、出席安排、适合对象及申请流程。",
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
            <h1 className="sec-h">报名之前，先把关键问题厘清</h1>
            <p className="sec-sub">课程资格、费用与开课日期，一律以课程团队在报名时提供的最新书面资料为准。</p>
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
        </div>
      </section>
    </>
  );
}
