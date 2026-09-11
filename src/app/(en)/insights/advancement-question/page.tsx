import Link from "next/link";
import ArticleAttribution from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import { PROGRAMME_FIT_CHECK } from "@/lib/content";

export const metadata = withSeo("/insights/advancement-question", {
  title: "How to Compare Leadership Programmes",
  description: "A framework for comparing leadership programmes: the decision it serves, how the learning works, what the recognition does and does not cover, and the complete cost.",
  openGraph: { type: "article" },
});

export default function AdvancementQuestionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Guides", path: "/resources" }, { name: "How to Compare Leadership Programmes", path: "/insights/advancement-question" }]} />
      <header className="resource-hero">
        <div className="wrap maxw-820">
          <p className="mono sec-k">Programme comparison guide</p>
          <h1>How to compare leadership programmes.</h1>
          <p>Start with the decision you need to make better, then compare the learning, the schedule, the recognition and the complete cost.</p>
        </div>
      </header>
      <article className="section">
        <div className="wrap prose">
          <ArticleAttribution />
          <p>Experienced managers do not return to structured learning because they lack information. The decisions they carry now ask more of them than before—and none of this is innate; it is practised.</p>
          <p>The useful first question is therefore not “Which title looks strongest?” It is: <strong>Which consequential work must I become better able to examine, explain and lead?</strong></p>
          <h2>Start with the decision you carry</h2>
          <p>Name the decision, transition or responsibility that now asks more of you. A credible programme should show how its method, teaching and applied work connect to that decision, without promising a particular promotion, salary or business outcome.</p>
          <h2>Examine how the learning works</h2>
          <p>Look beyond module names. Ask what participants repeatedly do: analyse a system, separate evidence from assumption, generate options, test trade-offs, plan implementation and explain the reasoning to the people who act on it.</p>
          <h2>Make the boundary part of the value</h2>
          <p>Recognition language should state plainly what is approved, what is awarded, which designations require a separate assessment, and who decides eligibility, membership and fees. A boundary is not fine print; it is information you need to decide well.</p>
          <h2>Check whether the schedule holds</h2>
          <p>Compare the actual dates, attendance requirements, applied project and complete cost with the work and family responsibilities you already carry. Skipping this comparison is the shortcut that only moves the problem later.</p>
          <blockquote>Choose the learning by the decision it helps you make—not by the ambiguity of the promise.</blockquote>
          <p>Apply it to the decision you are carrying now. <Link className="text-action" href="/diagnostic">Open the {PROGRAMME_FIT_CHECK.en} <span aria-hidden="true">↗</span></Link></p>
        </div>
      </article>
    </>
  );
}
