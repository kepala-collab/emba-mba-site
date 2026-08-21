import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { SITE } from "@/lib/content";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/programmes/shift-hr", {
  title: "SHIFT! HR Transformation Workshop",
  description:
    "A two-day HR transformation workshop covering strategic partnership, consulting frameworks, simulations and a four-step implementation loop.",
});

const PROBLEMS = [
  {
    h: "A multi-generational workforce",
    p: "Hybrid work and differing workforce expectations require HR teams to review policies, communication and management practice.",
  },
  {
    h: "Cost-cutting C-suites",
    p: "Leadership teams expect HR proposals to define the business need, evidence, cost and intended organisational result.",
  },
  {
    h: "Administrative workload",
    p: "High operational and compliance workloads can limit the time available for workforce planning and internal consulting.",
  },
];

const MODULES = [
  { c: "M01", t: "The Deafening Demands", p: "Hybrid work, multi-generational expectations and changing employee needs." },
  { c: "M02", t: "The Competency Evolution", p: "The capabilities required to move from administrative delivery into business advisory work." },
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
  "@id": `${SITE.url}/programmes/shift-hr#course`,
  name: "SHIFT!",
  description:
    "A 2-day HR transformation workshop that shifts HR from a reactive administrative function into a strategic, data-driven internal consulting business partner.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/programmes/shift-hr`,
  inLanguage: "en-MY",
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
      <JsonLd data={courseJsonLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Employer-led HRD Corp application · 2 days · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "20ch" }}>
              SHIFT! — a two-day workshop for strategic HR practice.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              <b style={{ color: "var(--ink)" }}>Transforming Human Capital Management for
              Future-Ready Organisations.</b> SHIFT! is a 2-day workshop by {SITE.provider} that
              develops strategic, data-informed internal consulting practice through consulting
              frameworks, business simulations and facilitated exercises.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="#apply" className="btn btn-primary">Enquire about SHIFT! →</Link>
              <Link href="/hrd-corp-claimable" className="btn">Review the HRD Corp process</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROBLEM SHIFT SOLVES */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The problem SHIFT! solves</span></div></Reveal>
          <Reveal><h2 className="sec-h">Three organisational pressures the workshop addresses.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The workshop examines workforce complexity, business-value expectations and the balance
              between administrative delivery and strategic advisory work.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {PROBLEMS.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
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
          <Reveal><h2 className="sec-h">Four modules leading to a repeatable consulting method.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              At the core is the 4-Step Consulting Loop — Discover, Diagnose, Design, Demonstrate —
              the &ldquo;Business Doctor&rdquo; method that turns HR into an internal consulting
              function. The final module applies Agile HR and change-management principles to action planning.
            </p>
          </Reveal>
          <Reveal className="mt-m">
            <div className="mods">
              {MODULES.map((m) => (
                <div key={m.c} className="m">
                  <div className="c">{m.c}</div>
                  <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.02rem", color: "var(--ink)" }}>{m.t}</p>
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
          <Reveal><h2 className="sec-h">Two days. Instructor-led. Employer funding subject to HRD Corp approval.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              SHIFT! runs over Day 1 and Day 2, each with a morning session (9:00am&ndash;12:30pm)
              and an afternoon session (1:30&ndash;5:00pm). It is instructor-led and built around
              facilitated exercises and business simulations.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
              {[
                { k: "Duration", v: "2 days · Day 1 & Day 2" },
                { k: "Daily hours", v: "9:00am–12:30pm · 1:30–5:00pm" },
                { k: "Fee", v: "RM2,000 per person" },
                { k: "Funding", v: "Employer applies to HRD Corp before training" },
              ].map((it) => (
                <div key={it.k} className="card">
                  <div className="mono sec-k acc" style={{ fontSize: ".78rem", marginBottom: 8 }}>{it.k}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.08rem" }}>{it.v}</b>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="fine mt-s">
            The published fee is RM2,000 per person. An HRD Corp-registered employer submits its grant
            application before training; HRD Corp determines eligibility and the approved amount.
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
              Rahayu Kamarudin works in organisational transformation, culture change
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
          <Reveal><h2 className="sec-h">For HR and learning professionals.</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {AUDIENCE.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{s.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            SHIFT! is a corporate training workshop, not a regulated qualification. HRD Corp decides
            grant eligibility and the approved amount. Questions? Speak with Joseph Lim, Programme
            Advisor — 016-208 6696.
          </p>
        </div>
      </section>

      <CtaSection programme="SHIFT HR Workshop" heading="Discuss the workshop requirements for your HR team." defaultIntent="employer_evaluating" intentOptions={["employer_evaluating", "employer_sponsored"]} />
    </>
  );
}
