import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { CTA_LABELS, DELIVERY_CONTROL, MODULES, FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/curriculum", {
  title: `Curriculum — The ${FACTS.moduleCount} Modules`,
  description:
    `${FACTS.moduleCount} applied modules across three stages — facilitated workshops, one-to-one coaching and an applied business project — leading to a written action plan reviewed by faculty.`,
});

const STAGES = [
  {
    lvl: "Stage 1",
    approach: "Workshop-Based Learning",
    outcome: "Creating Value",
    p: "Live, facilitated framework workshops for analysing an organisation as a value-creation system.",
  },
  {
    lvl: "Stage 2",
    approach: "Coaching-Based Learning",
    outcome: "Delivering Value",
    p: "One-to-one executive coaching that applies the frameworks to the participant's role and organisational context.",
  },
  {
    lvl: "Stage 3",
    approach: "Project-Based Learning",
    outcome: "Capturing Value",
    p: "An applied business project on your own organisation, written up with decisions, actions, owners and measures.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Curriculum", path: "/curriculum" }]} />
      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The Curriculum · {FACTS.moduleCount} Modules</span></div>
          </Reveal>
          <Reveal>
            <h1 style={{ fontSize: "clamp(2.3rem,5vw,3.8rem)", letterSpacing: "-.02em", lineHeight: 1.06, maxWidth: "18ch" }}>
              {FACTS.moduleCount} modules. One <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>plan your team can act on</em>.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>
              Across <b style={{ color: "var(--ink)" }}>{FACTS.durationLong}</b>, you take one live business issue through {FACTS.moduleCount}
              {" "}applied modules built on the F.A.S.T. method — defining the problem, testing it with a coach, and writing it into an
              action plan with decisions, actions, owners and measures for faculty review.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
              <Link href="/how-it-works" className="btn btn-ghost">See how the six months work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE 3 VALUE STAGES */}
      <section className="section section--alt">
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
        
      </section>

      {/* THE 12 MODULES */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The framework library · M01–M12</span></div></Reveal>
          <Reveal><h2 className="sec-h">Every module builds toward the plan you take back to work.</h2></Reveal>
          <Reveal><p className="sec-sub">From sensing the business landscape to building trust and influence across the stakeholder ecosystem.</p></Reveal>
          <Reveal className="mt-m">
            <div className="mods">
              {MODULES.map((m) => (
                <div key={m.c} className="m">
                  <div className="c">{m.c}</div>
                  <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.02rem", color: "var(--ink)" }}>{m.title}</p>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem" }}>{m.outcome}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="fine mt-s">{DELIVERY_CONTROL.modules}</p>
        </div>
      </section>

      {/* THE APPLIED BUSINESS PROJECT */}
      <section className="section section--alt">
        <div className="wrap curriculum-capstone-grid">
          <Reveal>
            <figure className="editorial-visual editorial-visual-portrait">
              <Image
                src="/images/future-ready-emba/future-ready-emba-applied-project-business-plan-detail-malaysia-4x5.webp"
                alt="A working manager developing an applied business plan at a desk"
                width={1664}
                height={2080}
                sizes="(max-width: 900px) 100vw, 36vw"
              />
              <figcaption>Your applied project begins with a current business issue.</figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The applied business project</span></div></Reveal>
            <Reveal>
              <h2 className="sec-h">One issue from your own organisation becomes a written plan.</h2>
            </Reveal>
            <Reveal>
              <p className="sec-sub">
                Across the six months, you select a business challenge within your own responsibility, apply the
                relevant frameworks and write a sequenced action plan for faculty review, naming the decisions,
                actions, owners and measures. Owners and measures are what make the plan something your team can
                act on, not only something you completed. The frameworks and working templates stay with you.
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
        </div>
        
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
