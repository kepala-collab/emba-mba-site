import Link from "next/link";

export const ARTICLE_PUBLISHED = "2026-07-22";
export const ARTICLE_REVIEWED = "2026-08-15";

export default function ArticleAttribution({ lang = "en" }: { lang?: "en" | "zh" }) {
  const zh = lang === "zh";
  return (
    <p className="mono fine" style={{ margin: "16px 0" }}>
      {zh ? "Asian Business Consulting 编辑团队" : "By the Asian Business Consulting editorial team"} ·{" "}
      <time dateTime={ARTICLE_PUBLISHED}>{zh ? "发布于 2026 年 7 月 22 日" : "Published 22 July 2026"}</time> ·{" "}
      <time dateTime={ARTICLE_REVIEWED}>{zh ? "审核于 2026 年 8 月 15 日" : "Reviewed 15 August 2026"}</time> ·{" "}
      <Link href="/about#editorial-standards">{zh ? "编辑标准（英文）" : "Editorial standards"}</Link>
    </p>
  );
}
