import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { MODULES, FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/curriculum", {
  title: "Curriculum — The 12 Modules",
  description:
    "Explore 12 framework modules across Creating, Delivering and Capturing Value, delivered in three sessions with coaching and an applied business project.",
});

const STAGES = [
  {
    lvl: "Level 1",
    approach: "Workshop-Based Learning",
    outcome: "Creating Value",
    p: "Live, facilitated framework workshops where you learn to see any business as a value-creation system — and redesign it.",
  },
  {
    lvl: "Level 2",
    approach: "Coaching-Based Learning",
    outcome: "Delivering Value",
    p: "One-to-one executive coaching that turns frameworks into leadership behaviour, so value moves from the whiteboard into the organisation.",
  },
  {
    lvl: "Level 3",
    approach: "Project-Based Learning",
    outcome: "Capturing Value",
    p: "A real transformation project applied to your own business — where the thinking finally shows up as measurable results.",
  },
];

// Truthful, plain-English one-line benefits, indexed to MODULES order (M01–M12).
const BENEFIT: Record<string, string> = {
  M01: "Frame any business as a value-creation system you can redesign.",
  M02: "Start from the job your customer is truly hiring you to do.",
  M03: "Read the landscape early and act before the shift becomes obvious.",
  M04: "Name the few issues that actually decide the future of the business.",
  M05: "Craft a distinctive strategy across the four dimensions that matter.",
  M06: "Turn strategy into a sequenced, accountable action plan.",
  M07: "Lead differently for each situation instead of one fixed style.",
  M08: "Run interventions that unlock how your teams actually perform.",
  M09: "Connect every part of the business into one coherent system.",
  M10: "Guide people through change without losing momentum or trust.",
  M11: "Build influence deliberately, not by luck or position.",
  M12: "Engage the full ecosystem of stakeholders around a shared outcome.",
};

export default function CurriculumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Curriculum", path: "/curriculum" }]} />
      {/* INTRO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The Curriculum · 12 Modules</span></div>
          </Reveal>
          <Reveal>
            <h1 style={{ fontSize: "clamp(2.3rem,5vw,3.8rem)", letterSpacing: "-.02em", lineHeight: 1.06, maxWidth: "18ch" }}>
              A complete <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>operating system</em> for future-ready leadership.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>
              Twelve framework modules, structured across three stages of value and delivered in{" "}
              <b style={{ color: "#fff" }}>{FACTS.durationLong}</b>. No exams. No thesis. You build judgment you apply to
              your own business from day one — and leave with a plan, not a transcript.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">Discuss the programme →</Link>
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
          <Reveal><p className="sec-sub">Each stage uses a different mode of learning, because different outcomes demand different work. Together they carry an idea from the whiteboard to the bottom line.</p></Reveal>
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
          <Reveal><h2 className="sec-h">Twelve modules. One compounding way of thinking.</h2></Reveal>
          <Reveal><p className="sec-sub">Each module is a reusable framework — not a lecture to forget, but a tool you keep. Read left to right, they build from seeing value to leading the people who deliver it.</p></Reveal>
          <Reveal className="mt-m">
            <div className="mods">
              {MODULES.map((m) => (
                <div key={m.c} className="m">
                  <div className="c">{m.c}</div>
                  <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.02rem", color: "#fff" }}>{m.p}</p>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem" }}>{BENEFIT[m.c]}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="fine mt-s">Module sequencing may be adapted per cohort; every participant covers all twelve frameworks across the three sessions.</p>
        </div>
      </section>

      {/* THE CAPSTONE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The capstone</span></div></Reveal>
          <Reveal>
            <h2 className="sec-h">Your final assessment is a real transformation — for your own business.</h2>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              There is no exam and no thesis. Instead, you apply the frameworks to a genuine challenge inside your own
              organisation and build a board-ready transformation project. You present it to a review panel of faculty
              and practitioners — the same people who advise listed boards — and leave with a plan you can execute the
              following Monday.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }} className="cap-grid">
              {[
                ["Your business", "The project is anchored to a live challenge you actually own."],
                ["Applied, not theoretical", "Every framework from M01–M12 is put to work on one real problem."],
                ["Reviewed by a panel", "You defend your thinking to faculty and senior practitioners."],
                ["A plan, not a transcript", "You walk away with a sequenced, board-ready growth plan."],
              ].map(([b, s]) => (
                <div key={b} style={{ background: "var(--surface)", padding: 22 }}>
                  <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.15rem", color: "#fff", display: "block", marginBottom: 8 }}>{b}</b>
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
