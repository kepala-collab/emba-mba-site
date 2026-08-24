import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/insights", {
  title: "洞察 — 领导者的思维框架",
  description:
    "面向商业决策的第一性原理、系统思维及设计思维实用入门，以及课程比较指南。",
});

const ARTICLES = [
  {
    kicker: "决策指南",
    title: "高管教育 vs 高管 MBA",
    slug: "/zh/insights/executive-education-vs-executive-mba",
    blurb:
      "选择课程之前，如何比较资格、时间、评估方式、工作应用及学术地位。",
  },
  {
    kicker: "思维方法",
    title: "商业领导者的第一性原理思维",
    slug: "/zh/insights/first-principles-thinking",
    blurb:
      "如何把经验证的限制与假设区分开，并从根本事实出发建立选项。",
  },
  {
    kicker: "思维方法",
    title: "领导者的系统思维",
    slug: "/zh/insights/systems-thinking-for-leaders",
    blurb:
      "如何在决定之前审视关系、反馈回路及二阶后果。",
  },
  {
    kicker: "思维方法",
    title: "商业中的设计思维",
    slug: "/zh/insights/design-thinking-for-business",
    blurb:
      "如何在投入资源之前结合客户证据、原型测试及商业限制。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "洞察 — 领导者的思维框架",
  description:
    "课程决策指南，以及面向商业决策的第一性原理、系统思维与设计思维实用入门。",
  hasPart: {
    "@type": "ItemList",
    itemListElement: ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://futurereadymba.com${a.slug}`,
      name: a.title,
    })),
  },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "洞察", path: "/zh/insights" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">洞察 · 思维</span>
            </div>
            <h1 className="sec-h">领导者的思维框架</h1>
            <p className="sec-sub" style={{ maxWidth: 640 }}>
              决策指南，以及课程所用推理方法的实用入门。
            </p>
          </Reveal>

          <div className="insight-grid mt-m">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <article
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    height: "100%",
                  }}
                >
                  <span
                    className="mono sec-k acc"
                    style={{ color: "var(--crimson)" }}
                  >
                    {a.kicker}
                  </span>
                  <h2 style={{ margin: 0, lineHeight: 1.2 }}>
                    <Link
                      href={a.slug}
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontSize: 24,
                        color: "var(--ink)",
                        textDecoration: "none",
                      }}
                    >
                      {a.title}
                    </Link>
                  </h2>
                  <p style={{ margin: 0, color: "var(--ink-2)", flexGrow: 1 }}>
                    {a.blurb}
                  </p>
                  <Link
                    href={a.slug}
                    className="mono insight-read-link"
                    style={{
                      color: "var(--crimson)",
                      textDecoration: "none",
                      fontSize: 14,
                    }}
                  >
                    阅读 →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="fine mt-s">
            每篇文章均注明资料来源及最近一次实质性审阅的日期。
          </p>
        </div>
      </section>

      <CtaSection
        lang="zh"
        programme="Executive MBA"
        heading="把这些思维方法用在您自己的商业决策上。"
        sub="选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。"
      />
    </>
  );
}
