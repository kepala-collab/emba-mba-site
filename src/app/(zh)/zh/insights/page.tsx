import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/insights", {
  title: "洞察 — 领导者的思维框架",
  description:
    "写给商业决策的第一性原理、系统思维与设计思维实用入门，外加一份课程对比指南。",
});

const ARTICLES = [
  {
    kicker: "决策指南",
    title: "高管教育 vs Executive MBA",
    slug: "/zh/insights/executive-education-vs-executive-mba",
    blurb:
      "报名之前，怎样把资格、时间、评估方式、工作应用与学术地位一一比清楚。",
  },
  {
    kicker: "思维方法",
    title: "商业领导者的第一性原理思维",
    slug: "/zh/insights/first-principles-thinking",
    blurb:
      "怎样把经过验证的约束和假设区分开，再从根本事实出发搭出可选方案。",
  },
  {
    kicker: "思维方法",
    title: "领导者的系统思维",
    slug: "/zh/insights/systems-thinking-for-leaders",
    blurb:
      "在拍板之前，怎样看清各方关系、反馈回路与二阶后果。",
  },
  {
    kicker: "思维方法",
    title: "商业中的设计思维",
    slug: "/zh/insights/design-thinking-for-business",
    blurb:
      "在投入资源之前，怎样把客户实证、原型验证与商业约束三者合到一处。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "洞察 — 领导者的思维框架",
  description:
    "课程决策指南，外加写给商业决策的第一性原理、系统思维与设计思维实用入门。",
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
              一份决策指南，加上课程所用推理方法的实用入门。
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
            每篇文章都标注了资料来源，以及最近一次实质性审阅的日期。
          </p>
        </div>
      </section>

      <CtaSection
        lang="zh"
        programme="Executive MBA"
        heading="把这些思维方法，用到您自己的商业决策上。"
        sub="通话、线上会议、面谈或电邮，任您选择。课程团队会解答关于适配度、开课日期、费用、认可，以及由雇主主导的 HRD Corp 资助等疑问；咨询不构成任何报名或付款承诺。"
      />
    </>
  );
}
