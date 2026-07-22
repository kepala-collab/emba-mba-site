import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { SITE } from "@/lib/content";

export const metadata = {
  title: "SHIFT! — HR Transformation Workshop (HRD Corp Claimable)",
  description:
    "SHIFT! turns HR from workplace police into a strategic, data-driven business partner. A 2-day, HRD Corp claimable workshop by Asian Business Consulting — consulting frameworks, simulations and the 4-Step Consulting Loop.",
};

const PROBLEMS = [
  {
    h: "A multi-generational workforce",
    p: "Post-COVID chaos, the hybrid paradox and a Gen Z that expects something different — HR is asked to hold it all together with an outdated playbook.",
  },
  {
    h: "Cost-cutting C-suites",
    p: "Boards want measurable business value from every function. HR that cannot speak the language of strategy and data gets treated as overhead.",
  },
  {
    h: "HR seen as admin",
    p: "Stuck as the reactive 'workplace police', HR is boxed into compliance and paperwork instead of advising the business it serves.",
  },
];

const MODULES = [
  { c: "M01", t: "The Deafening Demands", p: "Post-COVID chaos and multi-generational expectations — the hybrid paradox and decoding Gen Z." },
  { c: "M02", t: "The Competency Evolution", p: "Retiring outdated skills and making the shift from Workplace Police to Business Advisor." },
  { c: "M03", t: "The Internal Consulting Framework", p: "The 4-Step Consulting Loop — Discover, Diagnose, Design, Demonstrate — the 'Business Doctor' method." },
  { c: "M04", t: "Designing Future-Ready Interventions", p: "Agile HR, change management and hands-on action planning you take back to work." },
];

const AUDIENCE = [
  { h: "HR professionals", p: "Practitioners ready to move beyond administration into a strategic, advisory role." },
  { h: "HR teams", p: "Departments aligning around a shared consulting framework and a common language with the business." },
  { h: "L&D practitioners", p: "Learning and development leaders designing future-ready, Agile interventions." },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "SHIFT!",
  description:
    "A 2-day HR transformation workshop that shifts HR from a reactive administrative function into a strategic, data-driven internal consulting business partner.",
  provider: {
    "@type": "Organization",
    name: SITE.provider,
    sameAs: SITE.url,
  },
  timeRequired: "P2D",
  offers: {
    "@type": "Offer",
    price: "2000",
    priceCurrency: "MYR",
    category: "HRD Corp claimable",
  },
};

export default function ShiftHrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* INTRO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp claimable HR training · 2 days · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "20ch" }}>
              SHIFT! — from workplace police to strategic business partner.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              <b style={{ color: "var(--ink)" }}>Transforming Human Capital Management for
              Future-Ready Organisations.</b> SHIFT! is a 2-day workshop by {SITE.provider} that
              moves HR out of the reactive, administrative &ldquo;workplace police&rdquo; role and
              into a strategic, data-driven internal consulting business partner — taught through
              consulting frameworks, business simulations and games.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="#apply" className="btn btn-primary">Enquire about SHIFT! →</Link>
              <Link href="/hrd-corp-claimable" className="btn">HRD Corp claimable</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROBLEM SHIFT SOLVES */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The problem SHIFT! solves</span></div></Reveal>
          <Reveal><h2 className="sec-h">HR is being asked to lead — with tools built to comply.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The strategic HR business partner is no longer optional. Three pressures are
              forcing the shift — and SHIFT! is built to answer all three.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {PROBLEMS.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{s.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE 4 MODULES */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The programme · 4 modules</span></div></Reveal>
          <Reveal><h2 className="sec-h">Four modules from chaos to a repeatable consulting method.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              At the core is the 4-Step Consulting Loop — Discover, Diagnose, Design, Demonstrate —
              the &ldquo;Business Doctor&rdquo; method that turns HR into an internal consulting
              function. Agile HR and change management make it stick.
            </p>
          </Reveal>
          <Reveal className="mt-m">
            <div className="mods">
              {MODULES.map((m) => (
                <div key={m.c} className="m">
                  <div className="c">{m.c}</div>
                  <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.02rem", color: "#fff" }}>{m.t}</p>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem" }}>{m.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORMAT & FEE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Format &amp; fee</span></div></Reveal>
          <Reveal><h2 className="sec-h">Two days. Instructor-led. HRD Corp claimable.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              SHIFT! runs over Day 1 and Day 2, each with a morning session (9:00am&ndash;12:30pm)
              and an afternoon session (1:30&ndash;5:00pm). It is instructor-led and built around
              games and business simulations, not slides.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
              {[
                { k: "Duration", v: "2 days · Day 1 & Day 2" },
                { k: "Daily hours", v: "9:00am–12:30pm · 1:30–5:00pm" },
                { k: "Fee", v: "RM2,000 per person" },
                { k: "Funding", v: "HRD Corp claimable · discounts may apply" },
              ].map((it) => (
                <div key={it.k} className="card">
                  <div className="mono sec-k acc" style={{ fontSize: ".78rem", marginBottom: 8 }}>{it.k}</div>
                  <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.08rem" }}>{it.v}</b>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="fine mt-s">
            Fee is RM2,000 per person and HRD Corp claimable subject to HRDC eligibility. Early-bird
            and group discounts may apply — please confirm current rates with the programme advisor
            before you commit.
          </p>
        </div>
      </section>

      {/* TRAINER */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Your trainer</span></div></Reveal>
          <Reveal><h2 className="sec-h">Rahayu Kamarudin</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Rahayu Kamarudin brings 30+ years in organisational transformation, culture change
              and learning &amp; development. She holds an M.A. in Industrial Psychology (UKM) and
              is an HRDC Accredited Trainer — pairing behavioural insight with the hard business
              case for a strategic HR function.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who should attend</span></div></Reveal>
          <Reveal><h2 className="sec-h">Built for the people who carry human capital.</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {AUDIENCE.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{s.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            SHIFT! is a corporate training workshop, not a regulated qualification; it is HRD Corp
            claimable subject to HRDC eligibility. Questions? Speak with Joseph Lim, Program
            Advisor — 016-208 6696.
          </p>
        </div>
      </section>

      <CtaSection programme="SHIFT HR Workshop" heading="Turn your HR team into strategic business partners." />
    </>
  );
}
