import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, THINKING_EDGE, FLOW, FACTS, CERTIFICATE_POSITIONING, FAQS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/how-it-works", {
  title: "What Changes Across the Six Months",
  description:
    `See what changes across ${FACTS.durationLong}: what you do in each scheduled session and between them, the written action plan reviewed by faculty, and what stays with you afterwards.`,
});

const CATCH_UP_RULE = FAQS.find((f) => f.q === "What if I miss a session?")!.a;

// Truthful, generic amplifications of each discipline — no fabricated claims.
const EDGE_MORE: Record<string, string> = {
  "01 · Systems": "Trace how incentives, information flows and delays combine to produce the result.",
  "02 · First-Principle": "Separate verified constraints from inherited assumptions before building an answer.",
  "03 · Design-Integrative": "Use analysis and creative exploration together when one mode cannot resolve the problem.",
  "04 · Framework": "Apply a repeatable structure to define the question, evidence, options and decision criteria.",
  "05 · Five-Fold": "Review the decision through five defined perspectives before committing resources.",
  "06 · 4D Strategic": "Connect direction, drivers, definition and delivery in one strategy process.",
  "07 · Holistic": "Evaluate people, capital, customers and growth as parts of the same operating system.",
};

const OUTCOMES = [
  { i: "01", h: "Structured decisions", p: "Define the problem, evidence, assumptions, options and decision criteria before committing." },
  { i: "02", h: "System-level analysis", p: "Trace second-order effects across customers, people, economics and execution." },
  { i: "03", h: "Action under uncertainty", p: "Use a framework to identify what is known, what requires testing and which decision cannot wait." },
  { i: "04", h: "Visible reasoning", p: "Document how a decision was reached so teams can review, align and execute." },
];

const DELIVERY = [
  { h: "Live framework workshops", p: "Faculty introduce each discipline, demonstrate its use and guide participants through applied cases." },
  { h: "Facilitated coaching", p: "Coaching reviews how you frame the problem, use evidence and translate the framework into action." },
  { h: "Applied business project", p: "You use the frameworks to develop a transformation plan for your own organisation." },
];

// The narrative spine: what happens across the three scheduled sessions and
// between them, ending in the written action plan and what stays with the
// participant. No day counts beyond FACTS — the split within a session is
// not a published fact.
const SPINE = [
  { k: "First session", d: "You define the decision as a problem and test it against the frameworks and a coach." },
  { k: "Between sessions, inside your own organisation", d: "You apply what you tested to the issue you brought, and bring back what happened." },
  { k: "Second session", d: "You weigh the options against the evidence, with faculty and coaches reviewing your reasoning." },
  { k: "Between sessions, inside your own organisation", d: "You carry the decision back into your role and test it there before the plan is finished." },
  { k: "Third session", d: "You complete the plan: decisions, actions, owners and measures, ready for faculty review." },
];

export default function HowItWorks() {
  return (
    <>
      {/* INTRO — the philosophy */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap editorial-intro-grid">
          <div>
            <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">A decision under pressure</span></div></Reveal>
            <Reveal>
              <h1 className="sec-h" style={{ maxWidth: "28ch" }}>
                Revenue slows, costs rise. Which do you solve first?
              </h1>
            </Reveal>
            <Reveal>
              <p className="sec-sub">
                Instinct and experience carried you here. Right now the reasoning lives in your own head, defended in meetings rather than shown, while the people who must act on it wait — and the role does not pause so you can step out and learn how to lead it.
              </p>
            </Reveal>
            <Reveal className="mt-s">
              <p style={{ color: "var(--ink-2)", maxWidth: "60ch" }}>
                Across {FACTS.durationLong} you take that one decision, from your own responsibility, and work it into a written action plan your team can act on: {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, one-to-one coaching and an applied business project, inside your own organisation, while you stay in your role. The frameworks and working templates stay with you.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <figure className="editorial-visual editorial-visual-landscape">
              <Image
                src="/images/future-ready-emba/future-ready-emba-live-business-challenge-malaysia-16x9.webp"
                alt="Malaysian business leaders reviewing evidence around a live management decision"
                width={2560}
                height={1440}
                sizes="(max-width: 900px) 100vw, 44vw"
                priority
              />
              <figcaption>Start with the live decision—not an abstract case study.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* WHAT CHANGES ACROSS THE SIX MONTHS — narrative spine */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What changes across {FACTS.durationLong}</span></div></Reveal>
          <Reveal><h2 className="sec-h">From carrying the decision alone to leading it.</h2></Reveal>
          <Reveal><p className="sec-sub">Both states are things you do, not things that happen to you. {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions; the applied work happens in your organisation between them.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "grid", gap: 14 }}>
              {SPINE.map((step, i) => (
                <div key={`${step.k}-${i}`} className="card" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 18, alignItems: "start" }}>
                  <div className="mono sec-k acc" style={{ fontSize: ".78rem" }}>{step.k}</div>
                  <p style={{ margin: 0, color: "var(--ink-2)" }}>{step.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-s">
            <p style={{ color: "var(--ink-2)", maxWidth: "60ch" }}>
              You submit the written action plan, with decisions, actions, owners and measures, for faculty review. The frameworks and working templates stay with you after the {FACTS.durationLong} end.
            </p>
          </Reveal>
        </div>
        <style>{`@media(max-width:700px){.wrap .card[style*="grid-template-columns"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* THE 7 DISCIPLINES */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The method · F.A.S.T.</span></div></Reveal>
          <Reveal><h2 className="sec-h">Seven disciplines, used as one decision process.</h2></Reveal>
          <Reveal><p className="sec-sub">Each discipline is a distinct lens. Used together, the seven lenses provide a defined process for reading complexity and testing a decision.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="edge-grid">
              {THINKING_EDGE.map((e) => (
                <div key={e.i} className="card">
                  <div className="mono sec-k acc" style={{ fontSize: ".72rem" }}>{e.i}</div>
                  <h3 style={{ fontSize: "1.24rem", margin: "14px 0 8px" }}>{e.h}</h3>
                  <p style={{ margin: "0 0 12px", color: "var(--ink-2)", fontSize: ".95rem" }}>{e.p}</p>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".88rem", borderTop: "1px solid var(--line)", paddingTop: 12 }}>{EDGE_MORE[e.i]}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media(max-width:800px){.edge-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* THE FLOW — visual chain */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The thinking flow</span></div></Reveal>
          <Reveal><h2 className="sec-h">From a well-framed question to measurable value.</h2></Reveal>
          <Reveal><p className="sec-sub">The F.A.S.T. sequence connects problem framing, questions, options, solutions and value. Each stage produces the input required by the next. Right Questions is where you choose the question that serves the people the decision affects — real leadership is servant leadership: it is measured by the people it serves.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, padding: 26, border: "1px solid var(--line)", borderRadius: 16, background: "linear-gradient(180deg,var(--surface),transparent)" }}>
              {FLOW.map((s, i) => (
                <span key={s} style={{ display: "contents" }}>
                  {i > 0 && <span className="mono acc" style={{ fontSize: "1.2rem", color: "var(--crimson)" }}>→</span>}
                  {i === FLOW.length - 1 ? (
                    <span style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.15rem", color: "#fff", background: "var(--crimson-action)", padding: "8px 20px", borderRadius: 999 }}>{s}</span>
                  ) : (
                    <span style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.12rem" }}>{s}</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR YOU */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What this means for you</span></div></Reveal>
          <Reveal><h2 className="sec-h">Leadership capabilities you can apply at work.</h2></Reveal>
          <Reveal><p className="sec-sub">The method develops decision capabilities; business outcomes depend on the participant&rsquo;s evidence, choices and execution.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }} className="edge-grid">
              {OUTCOMES.map((o) => (
                <div key={o.i} className="card">
                  <div className="mono acc" style={{ fontSize: ".72rem" }}>{o.i}</div>
                  <h3 style={{ fontSize: "1.3rem", margin: "12px 0 8px" }}>{o.h}</h3>
                  <p style={{ margin: 0, color: "var(--ink-2)", fontSize: ".95rem" }}>{o.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT'S DELIVERED */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How it&rsquo;s delivered</span></div></Reveal>
          <Reveal><h2 className="sec-h">Learned by doing, across {FACTS.durationLong}.</h2></Reveal>
          <Reveal><p className="sec-sub">The programme uses cohort-based workshops, coaching and an applied business project to connect professional learning with immediate workplace application. Assessment is the written action plan reviewed by faculty; there is no traditional thesis or examination.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="edge-grid">
              {DELIVERY.map((d, i) => (
                <div key={d.h} className="card">
                  <div className="mono acc" style={{ fontSize: ".72rem" }}>{`0${i + 1}`}</div>
                  <h3 style={{ fontSize: "1.22rem", margin: "12px 0 8px" }}>{d.h}</h3>
                  <p style={{ margin: 0, color: "var(--ink-2)", fontSize: ".95rem" }}>{d.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-s">
            <p style={{ color: "var(--ink-2)", maxWidth: "70ch", margin: "24px auto 0" }} className="center">
              {CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance}
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p style={{ color: "var(--ink-2)", maxWidth: "70ch", margin: "12px auto 0" }} className="center">
              {CATCH_UP_RULE}
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div className="fine center" style={{ marginTop: 24 }}>
              Explore{" "}
              <Link href="/curriculum" className="acc" style={{ textDecoration: "underline" }}>the twelve modules</Link> or{" "}
              <Link href="/apply" className="acc" style={{ textDecoration: "underline" }}>{CTA_LABELS.guide}</Link>.
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the decision you are carrying right now." />
    </>
  );
}
