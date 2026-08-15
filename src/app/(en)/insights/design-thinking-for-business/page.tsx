import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ArticleAttribution, { ARTICLE_PUBLISHED, ARTICLE_REVIEWED } from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/insights/design-thinking-for-business", {
  title: "Design Thinking for Business",
  description:
    "A practical guide to design thinking for leaders: understand customers, define the right problem, prototype quickly and balance desirability, feasibility and viability.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-22T12:04:03+08:00",
    modifiedTime: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Design Thinking for Business: A Practical Guide for Leaders",
  mainEntityOfPage: "https://futurereadymba.com/insights/design-thinking-for-business",
  image: "https://futurereadymba.com/opengraph-image",
  datePublished: `${ARTICLE_PUBLISHED}T12:04:03+08:00`,
  dateModified: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  inLanguage: "en-MY",
  description:
    "A practical guide to understanding customers, defining the right problem, prototyping quickly and balancing desirability, feasibility and viability.",
  author: {
    "@type": "Organization",
    "@id": EDITORIAL_TEAM_ID,
    name: "Asian Business Consulting Editorial Team",
  },
  publisher: {
    "@type": "Organization",
    "@id": PROVIDER_ID,
    name: "Asian Business Consulting",
  },
  articleSection: "Insights",
  about: "Design thinking for business leaders and strategy",
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: "Design Thinking", path: "/insights/design-thinking-for-business" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Insights · Thinking</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces)", maxWidth: "18ch" }}>
              Design thinking for business
            </h1>
            <ArticleAttribution />
            <p className="lead" style={{ maxWidth: "64ch" }}>
              A well-built product still fails when it solves the wrong customer
              problem. Design thinking addresses that risk through a human-centred,
              iterative way of solving problems
              that starts from real needs rather than internal assumptions, and
              that treats every idea as a hypothesis to be tested, not a decision
              to be defended.
            </p>
          </Reveal>

          <div className="prose" style={{ maxWidth: "68ch", marginTop: 40 }}>
            <h2>What design thinking actually is</h2>
            <p>
              Design thinking borrows the working habits of designers and turns
              them into a general method for solving hard, ambiguous problems.
              Its central move is deceptively simple: begin with the person you
              are trying to serve, observe their reality closely, and let what
              you learn shape the solution — instead of starting from a solution
              you already like and hunting for a market to justify it.
            </p>
            <p>
              It is deliberately iterative rather than linear. Teams test assumptions
              with low-cost prototypes before committing to a full launch, then revise
              the solution using observed evidence. That posture — curiosity before conviction — is
              what separates it from conventional planning.
            </p>

            <blockquote>
              The point is not to fall in love with your idea. It is to fall in
              love with the problem, and stay in love long enough to understand
              it.
            </blockquote>

            <h2>The five stages, in a business context</h2>
            <p>
              The classic model has five modes. They are stages you move between
              freely, not steps you complete once and tick off.
            </p>
            <ul>
              <li>
                <strong>Empathise.</strong> Get close to the people you serve —
                interviews, observation, spending time in their workflow. The
                goal is to understand what they experience and struggle with, in
                their words, before you decide what to fix.
              </li>
              <li>
                <strong>Define.</strong> Distil what you heard into a sharp,
                human problem statement. A precise definition — &ldquo;busy
                clinicians lose twenty minutes per shift reconciling
                records&rdquo; — does more work than a vague brief to
                &ldquo;improve efficiency.&rdquo;
              </li>
              <li>
                <strong>Ideate.</strong> Generate alternative answers before
                narrowing. Range matters here; judgement comes after alternatives exist.
                The aim is to escape the first, obvious idea.
              </li>
              <li>
                <strong>Prototype.</strong> Make the idea tangible as cheaply as
                possible — a sketch, a clickable mock-up, a single manual
                run-through of the service. Prototypes are questions made
                physical, not miniature finished products.
              </li>
              <li>
                <strong>Test.</strong> Put the prototype in front of real users
                and watch what they do, not only what they say. Every test feeds
                back into empathy and definition, and the loop runs again.
              </li>
            </ul>

            <h2>Why it matters for leaders and strategy</h2>
            <p>
              For an executive, the appeal is commercial, not aesthetic. Design
              thinking systematically reduces a critical commercial risk:
              building something customers do not choose. By forcing evidence early,
              it moves the moment of failure from an expensive launch to a cheap
              prototype.
            </p>
            <p>
              It also fuses creativity with commercial logic through a simple,
              rigorous lens. A durable innovation has to sit at the intersection
              of three tests:
            </p>
            <ul>
              <li>
                <strong>Desirable</strong> — do people genuinely want it? (the
                human question)
              </li>
              <li>
                <strong>Feasible</strong> — can we actually build and deliver it?
                (the technical question)
              </li>
              <li>
                <strong>Viable</strong> — does it make sustainable business sense?
                (the commercial question)
              </li>
            </ul>
            <p>
              Design thinking is strongest on desirability, precisely where
              traditional strategy is weakest — and the leader&rsquo;s job is to
              hold all three in tension rather than optimising one at the expense
              of the others.
            </p>

            <h3>Reframing around the real &ldquo;job to be done&rdquo;</h3>
            <p>
              Consider a mid-market bank losing younger customers to fintech
              apps. The instinctive response is a feature race: add budgeting
              charts, redesign the dashboard, ship faster. Sitting with actual
              customer interviews can reveal a different job. They are not buying
              charts; they are hiring a service to answer one anxious question —
              &ldquo;can I afford this right now, without a nasty surprise
              later?&rdquo;
            </p>
            <p>
              Reframed that way, the problem is not the interface. It is
              confidence and clarity at the moment of a decision. That single
              shift redirects the whole roadmap — toward real-time affordability
              signals and plain-language alerts — and away from a pile of
              features that would have tested well in a meeting and poorly in a
              use. The customer group and source data have not changed; the team has
              produced a more precise definition of the customer&rsquo;s job.
            </p>

            <h2>Common traps</h2>
            <ul>
              <li>
                <strong>Skipping customer research.</strong> Moving directly to
                ideation can turn internal assumptions into product requirements.
              </li>
              <li>
                <strong>Prototyping too late.</strong> A high-fidelity first prototype
                increases the cost of changing direction before the main assumptions have been tested.
              </li>
              <li>
                <strong>Treating it as a workshop gimmick.</strong> Sticky notes
                and an off-site do not make a discipline. Design thinking only
                pays off when the insights change what gets funded, shipped and
                killed.
              </li>
            </ul>

            <h2>From method to mastery</h2>
            <p>
              Design-integrative thinking is one of the seven disciplines in the{" "}
              <Link href="/how-it-works">Future Ready Executive MBA&rsquo;s</Link>{" "}
              F.A.S.T. method, where it sits alongside the Jobs-To-Be-Done and
              Desirable-Feasible-Viable frameworks introduced above — taught not
              as theory but as tools you apply to your own strategic problems. If
              you want to lead innovation that survives contact with real
              customers, the{" "}
              <Link href="/executive-mba">Executive MBA</Link> builds the habit
              until it becomes instinct.
            </p>
            <h2>Source and further reading</h2>
            <p>
              For the established desirability, feasibility and viability framing—and IDEO&rsquo;s current explanation of the iterative practice—see{" "}
              <a href="https://designthinking.ideo.com/introduction" target="_blank" rel="noopener noreferrer">IDEO&rsquo;s introduction to design thinking</a>.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        heading="Test what customers value before committing resources."
      />
    </>
  );
}
