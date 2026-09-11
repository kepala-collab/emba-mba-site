import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ArticleAttribution, { ARTICLE_PUBLISHED, ARTICLE_REVIEWED } from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { PROGRAMME_FIT_CHECK } from "@/lib/content";

export const metadata = withSeo("/insights/design-thinking-for-business", {
  title: "Begin With the Person You Are Trying to Serve",
  description:
    "Design thinking for leaders: find the right problem before you build, test ideas with the people they are for, and weigh desirability, feasibility and viability together.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-22T12:04:03+08:00",
    modifiedTime: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Begin With the Person You Are Trying to Serve",
  mainEntityOfPage: "https://futurereadymba.com/insights/design-thinking-for-business",
  image: "https://futurereadymba.com/opengraph-image",
  datePublished: `${ARTICLE_PUBLISHED}T12:04:03+08:00`,
  dateModified: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  inLanguage: "en-MY",
  description:
    "Design thinking for leaders: find the right problem before you build, test ideas with the people they are for, and weigh desirability, feasibility and viability together.",
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
  about: "Design thinking as a way to find the right problem before you build",
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Insights", path: "/insights" }, { name: "Design Thinking", path: "/insights/design-thinking-for-business" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Insights · Thinking</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces)", maxWidth: "18ch" }}>
              Begin with the person you are trying to serve.
            </h1>
            <ArticleAttribution />
            <p className="lead" style={{ maxWidth: "64ch" }}>
              A product can be built well and still fail, because it answers
              the wrong question for the wrong person. Design thinking is the
              discipline of finding the right problem first: start with the
              person you are trying to serve, test what you learn before you
              commit, and treat every idea as something to be proven, not
              defended. None of this is innate; it is practised, on a real
              decision, not a hypothetical one.
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
              you already like and hunting for evidence to justify it.
            </p>
            <p>
              It is deliberately iterative rather than linear. Teams test
              assumptions with low-cost prototypes before committing to a full
              launch, then revise the solution using what they observed.
              Curiosity before conviction is what separates it from
              conventional planning.
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

            <h3>The real job to be done</h3>
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

            <h2>Where the shortcut cuts</h2>
            <p>
              The shortcut cuts in three places:
            </p>
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
                stopped.
              </li>
            </ul>

            <h2>Where this sits in the method</h2>
            <p>
              Design-integrative thinking is one of the seven disciplines in
              the Future Ready Executive MBA&rsquo;s F.A.S.T. method, where it
              sits alongside the Jobs-To-Be-Done and
              Desirable-Feasible-Viable frameworks introduced above — taught
              not as theory but as something practised on your own decisions
              across the six months.
            </p>
            <h2>Source and further reading</h2>
            <p>
              For the established desirability, feasibility and viability framing—and IDEO&rsquo;s current explanation of the iterative practice—see{" "}
              <a href="https://designthinking.ideo.com/introduction" target="_blank" rel="noopener noreferrer">IDEO&rsquo;s introduction to design thinking</a>.
            </p>
            <p>
              Apply it to the decision you are carrying now.{" "}
              <Link className="text-action" href="/diagnostic">
                Open the {PROGRAMME_FIT_CHECK.en} <span aria-hidden="true">↗</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        heading="Test what the people you serve actually value, before you build."
      />
    </>
  );
}
