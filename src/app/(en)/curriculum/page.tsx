import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { CTA_LABELS, DELIVERY_CONTROL, MODULES, FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/curriculum", {
  title: "Curriculum — The 12 Modules",
  description:
    "Twelve applied modules across Creating, Delivering and Capturing Value — facilitated workshops, one-to-one coaching and a live business project. No exam, no thesis.",
});

const STAGES = [
  {
    lvl: "Level 1",
    approach: "Workshop-Based Learning",
    outcome: "Creating Value",
    p: "Live, facilitated framework workshops for analysing an organisation as a value-creation system.",
  },
  {
    lvl: "Level 2",
    approach: "Coaching-Based Learning",
    outcome: "Delivering Value",
    p: "One-to-one executive coaching that applies the frameworks to the participant's role and organisational context.",
  },
  {
    lvl: "Level 3",
    approach: "Project-Based Learning",
    outcome: "Capturing Value",
    p: "A transformation project applied to your own business, with defined actions, owners and measures.",
  },
];

// Truthful, plain-English one-line benefits, indexed to MODULES order (M01–M12).
const BENEFIT: Record<string, string> = {
  M01: "Analyse an organisation as a value-creation system.",
  M02: "Define the customer need, alternatives and evidence of value.",
  M03: "Examine external signals, plausible change and strategic implications.",
  M04: "Identify the business issues that require strategic attention and define why they matter.",
  M05: "Develop strategy across the four dimensions defined by the 4D method.",
  M06: "Turn strategy into a sequenced, accountable action plan.",
  M07: "Select a leadership response according to the situation and team needs.",
  M08: "Plan team interventions with a defined purpose, process and review point.",
  M09: "Map relationships between functions, decisions and business results.",
  M10: "Plan the people, process and review stages of organisational change.",
  M11: "Plan influence according to the stakeholder, decision and evidence required.",
  M12: "Engage the full ecosystem of stakeholders around a shared outcome.",
};

export default function CurriculumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Curriculum", path: "/curriculum" }]} />
      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The Curriculum · 12 Modules</span></div>
          </Reveal>
          <Reveal>
            <h1 style={{ fontSize: "clamp(2.3rem,5vw,3.8rem)", letterSpacing: "-.02em", lineHeight: 1.06, maxWidth: "18ch" }}>
              Twelve modules for <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>business-wide decision-making</em>.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>
              Twelve applied modules across three stages of value, delivered in{" "}
              <b style={{ color: "var(--ink)" }}>{FACTS.durationLong}</b> — no exam, no thesis. You apply them to a real
              problem in your own business and leave with a transformation plan reviewed by faculty.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
              <Link href="/how-it-works" className="btn btn-ghost">See the method</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE 3 VALUE STAGES */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Three stages of value</span></div></Reveal>
          <Reveal><h2 className="sec-h">Creating, delivering and capturing value — in that order.</h2></Reveal>
          <Reveal><p className="sec-sub">Each stage uses a different mode of learning: facilitated workshops, one-to-one coaching and an applied business project.</p></Reveal>
          <Reveal className="mt-m">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="stage-grid">
              {STAGES.map((s, i) => (
                <div key={s.lvl} className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div className="mono sec-k" style={{ fontSize: ".72rem" }}>{s.lvl} · 0{i + 1}</div>
                  <div className="mono acc" style={{ fontSize: ".78rem", letterSpacing: ".06em" }}>{s.approach}</div>
                  <h3 style={{ fontSize: "1.5rem", margin: "2px 0 0" }}>{s.outcome}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.5 }}>{s.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media(max-width:820px){.stage-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* THE 12 MODULES */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The framework library · M01–M12</span></div></Reveal>
          <Reveal><h2 className="sec-h">Twelve modules organised around value and execution.</h2></Reveal>
          <Reveal><p className="sec-sub">The modules progress from defining value to planning delivery, leadership and stakeholder engagement.</p></Reveal>
          <Reveal className="mt-m">
            <div className="mods">
              {MODULES.map((m) => (
                <div key={m.c} className="m">
                  <div className="c">{m.c}</div>
                  <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.02rem", color: "var(--ink)" }}>{m.p}</p>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem" }}>{BENEFIT[m.c]}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="fine mt-s">{DELIVERY_CONTROL.modules}</p>
        </div>
      </section>

      {/* THE CAPSTONE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The capstone</span></div></Reveal>
          <Reveal>
            <h2 className="sec-h">An applied project based on the participant&rsquo;s own organisation.</h2>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              There is no traditional examination or thesis in the three-month programme. Participants select
              a business challenge within their responsibility, apply relevant frameworks and prepare a sequenced
              transformation plan for faculty review. The plan identifies decisions, actions, owners and measures.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }} className="cap-grid">
              {[
                ["Your organisation", "The project addresses a business challenge within the participant's responsibility."],
                ["Applied assessment", "Participants select the programme frameworks relevant to the defined problem."],
                ["Faculty review", "Faculty review the problem definition, reasoning and proposed action."],
                ["A sequenced plan", "The final plan states the decisions, actions, owners and measures."],
              ].map(([b, s]) => (
                <div key={b} style={{ background: "var(--surface)", padding: 22 }}>
                  <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.15rem", color: "var(--ink)", display: "block", marginBottom: 8 }}>{b}</b>
                  <span style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media(max-width:640px){.cap-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
