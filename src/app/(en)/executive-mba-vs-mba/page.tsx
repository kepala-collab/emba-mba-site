import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { ABC_PROFILE, CERTIFICATE_POSITIONING, COMPARISON_SCOPE, CTA_LABELS, FACTS, FAQS, REFUND_TERMS } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/executive-mba-vs-mba", {
  title: "Executive MBA or Academic MBA",
  description:
    "Choose by the job: an academic MBA for an academic degree, or the Future Ready Executive MBA to work one live business issue to a faculty-reviewed action plan.",
});

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS.filter((f) =>
  ["Is it MQA-recognised?", "Can I carry it alongside the job?", "What are the refund terms?"].includes(f.q)
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ExecutiveMbaVsMbaPage() {
  return (
    <>
      <JsonLd data={faqLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA or academic MBA · defined comparison</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA or academic MBA: choose by the job.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              These routes are built for different jobs. An academic MBA is the right route when your
              purpose needs an academic degree. The{" "}
              <Link href="/executive-mba" className="acc">Future Ready Executive MBA</Link> is built for
              working one live business issue within your own responsibility to a written action plan
              reviewed by faculty, across {FACTS.durationLong}, while you stay in your role.{" "}
              {ABC_PROFILE.programmePositioning} {CERTIFICATE_POSITIONING.professionalRelevance}
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              Comparing shorter professional programmes as well? Read{" "}
              <Link href="/insights/executive-education-vs-executive-mba" className="acc">executive education vs Executive MBA</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Side by side</span></div></Reveal>
          <Reveal><h2 className="sec-h">Eight terms, defined side by side.</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE} The Future Ready programme is not equivalent to, or a substitute for,
            an MQA-accredited academic degree. See the full <Link href="/fees" className="acc">investment breakdown</Link>.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Built for a different job</span></div></Reveal>
          <Reveal><h2 className="sec-h">Name the job, then choose the route built for it.</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>An academic MBA is built for…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  Earning an academic degree through academic study.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  When your purpose needs an MQA-accredited or academic qualification — a licensing
                  body, a PhD pathway, an academic career, or a stated qualification requirement in your sector —
                  an academic MBA is the right route. Compare each institution&rsquo;s published entry
                  requirements, curriculum, duration, fees and recognition before enrolling.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>This Executive MBA is built for…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  Working one live business issue to a plan your team can act on.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  This route is built for participants with strategic or business-wide responsibility: a
                  live issue within your own responsibility, taken from problem to a written action plan
                  with decisions, actions, owners and measures, in {FACTS.trainingDays} training days
                  across {FACTS.liveSessions} scheduled sessions, with one-to-one coaching and an applied
                  business project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:760px){.choose-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* IS IT WORTH IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Fee and terms, in writing</span></div></Reveal>
          <Reveal><h2 className="sec-h">Name the job first, then read the terms.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Name your job before you compare the fee. An MQA-accredited academic MBA is the right
              route when your next step requires an academic degree. This programme is built for
              {" "}{FACTS.durationLong} of work on one live business issue: {FACTS.trainingDays} training
              days across {FACTS.liveSessions} scheduled sessions, an applied business project and
              faculty review, while you stay in your role. The published standard fee is {FACTS.priceStd}.
              {" "}{FACTS.scholarshipEligibility} The scholarship is never automatic.{" "}
              <Link href="/fees" className="acc">See the fee and the {FACTS.scholarshipProvider} scholarship terms</Link>.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              {CERTIFICATE_POSITIONING.professionalRelevance} Participants stay in their role during the
              six months and apply the frameworks to their own business project. {REFUND_TERMS.description}
            </p>
          </Reveal>
          <Reveal className="center mt-m">
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Common questions</span></div></Reveal>
          <Reveal><h2 className="sec-h">The questions leaders ask before deciding.</h2></Reveal>
          <div className="mt-s">
            {PAGE_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Read every question in full on the <Link href="/faq" className="acc">FAQ</Link>, or
            {" "}<Link href="/apply" className="acc">{CTA_LABELS.guide}</Link> and the programme team will send the information.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Decided it fits? Let's talk about your intake." />
    </>
  );
}
