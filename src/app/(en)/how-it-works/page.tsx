import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, THINKING_EDGE, FLOW, FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/how-it-works", {
  title: "Applied Leadership Development & F.A.S.T. Method",
  description:
    "How applied leadership development, coaching and the F.A.S.T. method build strategic decision-making through a live workplace business project.",
});

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

export default function HowItWorks() {
  return (
    <>
      {/* INTRO — the philosophy */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap editorial-intro-grid">
          <div>
            <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">A decision under pressure</span></div></Reveal>
            <Reveal>
              <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
                Revenue is slowing. Costs are rising. Which problem do you solve first?
              </h1>
            </Reveal>
            <Reveal>
              <p className="sec-sub">
                The visible symptom may sit in sales, pricing, operations or customer retention. The useful first move is to define the decision, test the evidence and expose the trade-offs before committing people and money.
              </p>
            </Reveal>
            <Reveal className="mt-s">
              <p style={{ color: "var(--ink-2)", maxWidth: "60ch" }}>
                The programme gives that work a repeatable structure. You use it on a live issue inside your own business, then make the reasoning visible enough for others to review and act on.
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
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The thinking flow</span></div></Reveal>
          <Reveal><h2 className="sec-h">From a well-framed question to measurable value.</h2></Reveal>
          <Reveal><p className="sec-sub">The F.A.S.T. sequence connects problem framing, questions, options, solutions and value. Each stage produces the input required by the next.</p></Reveal>
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
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How it&rsquo;s delivered</span></div></Reveal>
          <Reveal><h2 className="sec-h">Learned by doing, in {FACTS.durationLong}.</h2></Reveal>
          <Reveal><p className="sec-sub">The programme uses cohort-based workshops, coaching and an applied business project to connect professional learning with immediate workplace application. It does not use a traditional thesis or examination.</p></Reveal>
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
            <div className="fine center" style={{ marginTop: 24 }}>
              A professional programme awarded and endorsed by CMI — built for applied leadership development. Explore{" "}
              <Link href="/curriculum" className="acc" style={{ textDecoration: "underline" }}>the twelve modules</Link> or{" "}
              <Link href="/apply" className="acc" style={{ textDecoration: "underline" }}>{CTA_LABELS.guide}</Link>.
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Explore how the F.A.S.T. method applies to your role." />
    </>
  );
}
