import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/insights", {
  title: "Insights — Thinking Frameworks for Leaders",
  description:
    "Ideas on how the best leaders think: first-principles reasoning, systems thinking and design thinking — the mental models behind the Future Ready Executive MBA.",
});

const ARTICLES = [
  {
    kicker: "Thinking",
    title: "First-Principles Thinking for Business Leaders",
    slug: "/insights/first-principles-thinking",
    blurb:
      "How to strip a problem to bedrock and rebuild a disruptive answer — the reasoning method behind breakthrough strategy.",
  },
  {
    kicker: "Thinking",
    title: "Systems Thinking for Leaders",
    slug: "/insights/systems-thinking-for-leaders",
    blurb:
      "See the whole board: how to anticipate second- and third-order consequences before you commit.",
  },
  {
    kicker: "Thinking",
    title: "Design Thinking for Business",
    slug: "/insights/design-thinking-for-business",
    blurb:
      "Fuse creativity, logic and strategy to build what customers actually want.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Insights — Thinking Frameworks for Leaders",
  description:
    "Notes on the reasoning frameworks that separate operators from leaders — first-principles, systems and design thinking.",
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
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Insights · Thinking</span>
            </div>
            <h1 className="sec-h">Thinking frameworks for leaders</h1>
            <p className="sec-sub" style={{ maxWidth: 640 }}>
              Better decisions come from better thinking. Notes on the frameworks
              that separate operators from leaders.
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
                    Read →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="fine mt-s">
            More frameworks are published each intake as the faculty add to the
            series.
          </p>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        heading="Don't just read about better thinking. Install it."
      />
    </>
  );
}
