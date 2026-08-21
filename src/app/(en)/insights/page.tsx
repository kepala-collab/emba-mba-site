import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/insights", {
  title: "Insights — Thinking Frameworks for Leaders",
  description:
    "Practical introductions to first-principles reasoning, systems thinking and design thinking for business decisions.",
});

const ARTICLES = [
  {
    kicker: "Decision guide",
    title: "Executive Education vs Executive MBA",
    slug: "/insights/executive-education-vs-executive-mba",
    blurb:
      "How to compare credential, duration, assessment, workplace application and academic status before choosing a programme.",
  },
  {
    kicker: "Thinking",
    title: "First-Principles Thinking for Business Leaders",
    slug: "/insights/first-principles-thinking",
    blurb:
      "How to separate verified constraints from assumptions and develop options from foundational facts.",
  },
  {
    kicker: "Thinking",
    title: "Systems Thinking for Leaders",
    slug: "/insights/systems-thinking-for-leaders",
    blurb:
      "How to examine relationships, feedback loops and second-order consequences before deciding.",
  },
  {
    kicker: "Thinking",
    title: "Design Thinking for Business",
    slug: "/insights/design-thinking-for-business",
    blurb:
      "How to combine customer evidence, prototypes and commercial constraints before committing resources.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Insights — Thinking Frameworks for Leaders",
  description:
    "Programme decision guides and practical introductions to first-principles, systems and design thinking for business decisions.",
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
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Insights", path: "/insights" }]} />
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
              Decision guides and practical introductions to the reasoning methods used in the programme.
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
            Each article identifies its sources and the date of its latest substantive review.
          </p>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        heading="Apply the thinking methods to your own business decisions."
      />
    </>
  );
}
