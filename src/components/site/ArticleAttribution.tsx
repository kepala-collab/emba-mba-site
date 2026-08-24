import Link from "next/link";

export const ARTICLE_PUBLISHED = "2026-07-22";
export const ARTICLE_REVIEWED = "2026-08-15";

const COPY = {
  en: {
    byline: "By the Asian Business Consulting editorial team",
    published: "Published 22 July 2026",
    reviewed: "Reviewed 15 August 2026",
    standards: "Editorial standards",
  },
  zh: {
    byline: "Asian Business Consulting 编辑团队",
    published: "发布于 2026 年 7 月 22 日",
    reviewed: "审核于 2026 年 8 月 15 日",
    standards: "编辑标准（英文）",
  },
  ms: {
    byline: "Oleh pasukan editorial Asian Business Consulting",
    published: "Diterbitkan 22 Julai 2026",
    reviewed: "Disemak 15 Ogos 2026",
    standards: "Piawaian editorial (Bahasa Inggeris)",
  },
} as const;

export default function ArticleAttribution({ lang = "en" }: { lang?: "en" | "zh" | "ms" }) {
  const copy = COPY[lang];
  return (
    <p className="mono fine" style={{ margin: "16px 0" }}>
      {copy.byline} ·{" "}
      <time dateTime={ARTICLE_PUBLISHED}>{copy.published}</time> ·{" "}
      <time dateTime={ARTICLE_REVIEWED}>{copy.reviewed}</time> ·{" "}
      <Link href="/about#editorial-standards">{copy.standards}</Link>
    </p>
  );
}
