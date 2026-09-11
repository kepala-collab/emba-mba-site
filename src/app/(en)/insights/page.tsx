import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/insights", {
  title: "Insights — Reasoning Methods for Your Own Decisions",
  description:
    "Practical guides to comparing programmes, and to first-principles, systems and design thinking, applied to a decision you already carry.",
});

const ARTICLES = [
  {
    kicker: "Decision guide",
    title: "How to Compare Leadership Programmes",
    slug: "/insights/advancement-question",
    blurb:
      "How to weigh capability, application, evidence, time and recognition before you commit to any programme.",
  },
  {
    kicker: "Decision guide",
    title: "Executive Education vs Executive MBA",
    slug: "/insights/executive-education-vs-executive-mba",
    blurb:
      "How to weigh credential, duration, assessment, workplace application and academic status before you choose a programme.",
  },
  {
    kicker: "Thinking",
    title: "First-Principles Thinking for Business Leaders",
    slug: "/insights/first-principles-thinking",
    blurb:
      "How to separate verified constraints from assumptions and build options from the facts underneath a decision.",
  },
  {
    kicker: "Thinking",
    title: "Systems Thinking for Leaders",
    slug: "/insights/systems-thinking-for-leaders",
    blurb:
      "How to examine relationships, feedback loops and second-order consequences before you decide.",
  },
  {
    kicker: "Thinking",
    title: "Design Thinking for Business",
    slug: "/insights/design-thinking-for-business",
    blurb:
      "How to weigh customer evidence, prototypes and commercial constraints before you commit resources.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Insights — Reasoning Methods for Your Own Decisions",
  description:
    "Programme comparison guides and practical introductions to first-principles, systems and design thinking, applied to a decision you already carry.",
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
              <span className="mono sec-k">Insights · Reasoning methods</span>
            </div>
            <h1 className="sec-h">The methods you practise on your own decisions</h1>
            <p className="sec-sub" style={{ maxWidth: 640 }}>
              Each guide below takes a reasoning method — comparing programmes, examining a system, testing an
              assumption, serving a customer — and applies it to a decision you already carry. None of this is
              innate; it is practised.
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
        heading="Apply these methods to the decision you are carrying now."
      />
    </>
  );
}
