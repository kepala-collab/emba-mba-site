import Link from "next/link";
import ArticleAttribution from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/insights/advancement-question", {
  title: "The Advancement Question: What Must Learning Make Possible?",
  description: "A practical framework for experienced working adults comparing executive professional development by capability, application, evidence, time and recognition clarity.",
  openGraph: { type: "article" },
});

export default function AdvancementQuestionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "The Advancement Question", path: "/insights/advancement-question" }]} />
      <header className="resource-hero">
        <div className="wrap maxw-820">
          <p className="mono sec-k">Working Scholar / decision note</p>
          <h1>The advancement question.</h1>
          <p>What must serious learning make possible in the work you already carry?</p>
        </div>
      </header>
      <article className="section">
        <div className="wrap prose">
          <ArticleAttribution />
          <p>Experienced adults do not return to structured learning solely because they lack information. Their responsibilities can outgrow the way they currently organise information, test assumptions and make decisions.</p>
          <p>The useful first question is therefore not “Which title looks strongest?” It is: <strong>Which consequential work must I become better able to examine, explain and lead?</strong></p>
          <h2>Start with capability</h2>
          <p>Name the decision, transition or responsibility that now demands more from you. A credible programme should show how its method, teaching and applied work connect to that context without promising a particular promotion, salary or business outcome.</p>
          <h2>Examine the learning mechanism</h2>
          <p>Look beyond module names. Ask what participants repeatedly do: analyse a system, distinguish evidence from assumption, generate options, test trade-offs, plan implementation and explain the reasoning to other people.</p>
          <h2>Make the boundary part of the value</h2>
          <p>Recognition language should tell you precisely what is approved, what is awarded, which later designations require a separate assessment and who controls eligibility, membership and fees. A boundary is not fine print; it is decision-quality information.</p>
          <h2>Test whether the commitment is workable</h2>
          <p>Compare the actual dates, attendance requirements, applied project and financial commitment with the work and family responsibilities you already hold. Prestige cannot repair a schedule that is structurally impossible.</p>
          <blockquote>Choose the learning by the quality of work it helps you examine—not by the ambiguity of the promise.</blockquote>
          <p><Link className="text-action" href="/diagnostic">Use the private readiness diagnostic <span aria-hidden="true">↗</span></Link></p>
          <p><Link className="text-action" href="/resources/advancement-brief">Open the Executive Advancement Brief <span aria-hidden="true">↗</span></Link></p>
        </div>
      </article>
    </>
  );
}
