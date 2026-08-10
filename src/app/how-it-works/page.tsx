import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { THINKING_EDGE, FLOW, FACTS } from "@/lib/content";

export const metadata = {
  title: "The Method — Framework Adaptive Systems Thinking (F.A.S.T.)",
  description:
    "How the Future Ready Executive MBA installs judgment, not just knowledge: seven thinking disciplines — systems, first-principle, design-integrative, framework, five-fold, 4D strategic and holistic thinking.",
};

// Truthful, generic amplifications of each discipline — no fabricated claims.
const EDGE_MORE: Record<string, string> = {
  "01 · Systems": "You stop treating symptoms and start reading the structure that keeps producing them.",
  "02 · First-Principle": "Borrowed answers get replaced with reasoning you can defend from the ground up.",
  "03 · Design-Integrative": "Analysis and imagination stop fighting each other and start compounding.",
  "04 · Framework": "A repeatable structure means the hard call gets easier the next time, not harder.",
  "05 · Five-Fold": "Blind spots shrink because every decision is pressure-tested from angles you would have skipped.",
  "06 · 4D Strategic": "Direction, drivers, definition and delivery line up instead of pulling in different directions.",
  "07 · Holistic": "People, capital and growth are read as one system, so the plan survives contact with reality.",
};

const OUTCOMES = [
  { i: "01", h: "Sharper decisions, made faster", p: "You reach the defensible call sooner because you can see the structure of the problem, not just its noise." },
  { i: "02", h: "Opportunities you spot first", p: "Reading systems and second-order effects means you notice the opening while competitors are still reacting." },
  { i: "03", h: "Composure under uncertainty", p: "When the data is incomplete, a framework gives you a way to move — deliberately, not anxiously." },
  { i: "04", h: "Judgment your team can trust", p: "Your reasoning becomes visible and repeatable, so the people around you can align and act on it." },
];

const DELIVERY = [
  { h: "Live framework workshops", p: "Each discipline is taught as a working tool, then applied on real cases in the room — not lectured at you." },
  { h: "Facilitated coaching", p: "You are challenged on your own thinking by facilitators, so the frameworks become instinct, not notes." },
  { h: "A real project, your own business", p: "You build a live transformation plan for your organisation as you go — the coursework is the work." },
];

export default function HowItWorks() {
  return (
    <>
      {/* INTRO — the philosophy */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The Method · F.A.S.T.</span></div></Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              We teach context, not content. Information is free — <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>judgment isn&rsquo;t.</em>
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Any fact you need is a search away. What no search returns is the instinct to ask the right question,
              read a situation whole, and decide well when the data is incomplete. That instinct is what this programme
              installs. Its engine is <b style={{ color: "#fff" }}>Framework Adaptive Systems Thinking (F.A.S.T.)</b> —
              seven thinking disciplines that compound into judgment you carry into every room after.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p style={{ color: "var(--ink-2)", maxWidth: "60ch" }}>
              Most executive education loads you with more to know. F.A.S.T. changes <em style={{ fontStyle: "italic" }}>how you know</em> —
              so the frameworks keep working long after the content of any single case has gone stale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE 7 DISCIPLINES */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The seven disciplines</span></div></Reveal>
          <Reveal><h2 className="sec-h">Seven ways of thinking. One compounding edge.</h2></Reveal>
          <Reveal><p className="sec-sub">Each discipline is a distinct lens. Learned together, they become a single way of reading complexity that most leaders never develop.</p></Reveal>
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
          <Reveal><h2 className="sec-h">Better thinking is a chain — and it ends in value.</h2></Reveal>
          <Reveal><p className="sec-sub">The disciplines are not academic. They run in sequence: right thinking asks the right questions, which surface the right ideas, which become the right solutions — and exceptional value at the end of the line.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, padding: 26, border: "1px solid var(--line)", borderRadius: 16, background: "linear-gradient(180deg,var(--surface),transparent)" }}>
              {FLOW.map((s, i) => (
                <span key={s} style={{ display: "contents" }}>
                  {i > 0 && <span className="mono acc" style={{ fontSize: "1.2rem", color: "var(--crimson)" }}>→</span>}
                  {i === FLOW.length - 1 ? (
                    <span style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.15rem", color: "#fff", background: "var(--crimson)", padding: "8px 20px", borderRadius: 999 }}>{s}</span>
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
          <Reveal><h2 className="sec-h">Thinking better isn&rsquo;t abstract. It shows up in the work.</h2></Reveal>
          <Reveal><p className="sec-sub">These are capabilities the method is built to develop — not guaranteed outcomes. What you do with them is yours.</p></Reveal>
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
          <Reveal><p className="sec-sub">No lecture halls, no thesis, no exams. The method is delivered as workshops, coaching and a real project — because judgment is built by using it, not by memorising it.</p></Reveal>
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
              A professional programme endorsed by CMI (UK) — chosen for outcomes and speed. Explore{" "}
              <Link href="/curriculum" className="acc" style={{ textDecoration: "underline" }}>the twelve modules</Link> or{" "}
              <Link href="/apply" className="acc" style={{ textDecoration: "underline" }}>apply now</Link>.
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Think better in three months. Prove it on your own business." />
    </>
  );
}
