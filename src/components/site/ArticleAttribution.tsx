import Link from "next/link";

export const ARTICLE_PUBLISHED = "2026-07-22";
export const ARTICLE_REVIEWED = "2026-08-13";

export default function ArticleAttribution() {
  return (
    <p className="mono fine" style={{ margin: "16px 0" }}>
      By the Asian Business Consulting editorial team ·{" "}
      <time dateTime={ARTICLE_PUBLISHED}>Published 22 July 2026</time> ·{" "}
      <time dateTime={ARTICLE_REVIEWED}>Reviewed 13 August 2026</time> ·{" "}
      <Link href="/about#editorial-standards">Editorial standards</Link>
    </p>
  );
}
