import Link from "next/link";
import Image from "next/image";
import NodeCanvas from "@/components/site/NodeCanvas";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { FACTS, CLIENTS, SIGNATURE_QUOTE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/", {
  title: "Future Ready Executive MBA (CMI UK)",
  description:
    "A six-month Executive MBA pathway: three months to the CMI-recognised programme certificate, then supported Chartered Manager assessment preparation.",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "zh-Hans": "/zh", "x-default": "/" },
  },
});

const HUB = [
  { href: "/executive-mba", k: "The Programme", h: "A six-month professional pathway", d: "Three months to the programme certificate, followed by three months of supported Chartered Manager assessment preparation." },
  { href: "/how-it-works", k: "The Method", h: "F.A.S.T. thinking", d: "The seven thinking disciplines that install judgment, not just knowledge." },
  { href: "/curriculum", k: "Curriculum", h: "12 modules, 3 stages", d: "From value creation to capturing value, ending in a real capstone project." },
  { href: "/faculty", k: "Faculty", h: "Practitioners, not lecturers", d: "Seven business practitioners and project coaches across strategy, finance, talent and transformation." },
  { href: "/fees", k: "Malaysian participant fee", h: "RM10,000.00 → RM6,000.00", d: "The RM4,000.00 LIFE Innoversity scholarship, up to 100% HRD Corp claimability for eligible employers, instalments and the Session 1 refund arrangement." },
  { href: "/intakes", k: "2026 Intakes", h: "English + Mandarin schedules", d: "Five published cohorts — three weekend sessions, 9am–6pm." },
  { href: "/corporate-training", k: "For Teams", h: "Corporate Training", d: "HRD Corp claimable training for your whole team — 10 AI-era capability tracks." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ borderBottom: "none", paddingTop: "clamp(52px,7vw,84px)" }}>
        <NodeCanvas />
        <div className="wrap">
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.12fr .88fr", gap: 52, alignItems: "center" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The Future-Ready Executive MBA · Recognised by CMI (UK)</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.5rem,5.8vw,4.3rem)", letterSpacing: "-.02em", lineHeight: 1.04 }}>
                  Your business will be run by whoever thinks <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>best.</em> Make sure it&rsquo;s you.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.16rem", maxWidth: "42ch", margin: "26px 0 32px" }}>
                  Markets shift. AI compresses decision time. Old answers expire. This CMI-recognised professional Executive MBA rebuilds leadership from first principles: see the system, question assumptions, create better options and turn them into measurable business value in{" "}
                  <b style={{ color: "#fff" }}>{FACTS.durationLong}.</b>
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
                  <Link href="/apply" className="btn btn-primary">Talk to the programme team →</Link>
                  <Link href="/executive-mba" className="btn btn-ghost">Explore the programme</Link>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", paddingTop: 26, borderTop: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="Chartered Management Institute UK" width={90} height={30} style={{ height: 30, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={42} height={42} style={{ height: 42, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".1em" }}>Recognised against CMI Professional Standards · HRD Corp claimable for eligible employers<br />{FACTS.gradsApprox} graduates · {FACTS.cohorts} cohorts reported by ABC</span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="card" style={{ background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)", padding: 26 }}>
                <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                  <Image src="/brand/emba-lockup.png" alt="Executive MBA — Future Ready Business Leadership" width={720} height={459} style={{ width: "100%", height: "auto" }} priority />
                </div>
                <div className="home-session-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", marginTop: 20, borderRadius: 10, overflow: "hidden" }}>
                  {[["6 months", "Full professional pathway"], ["3 months", "To programme certificate"], [FACTS.priceNet, "Malaysian participant fee"], ["CMgr MCMI", "After successful CMI assessment"]].map(([b, s]) => (
                    <div key={s} style={{ background: "var(--surface)", padding: 16 }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", display: "block", color: "#fff" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".62rem", letterSpacing: ".08em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important;gap:38px!important}}`}</style>
      </section>

      {/* FIRST-PRINCIPLES CASE */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Why this exists</span></div></Reveal>
          <Reveal><h2 className="sec-h">When the environment changes, more content is not the answer.</h2></Reveal>
          <Reveal><p className="sec-sub">The deck&rsquo;s central argument is simple: leaders rarely lack information. They lack a reliable way to turn uncertainty into the right questions, the right ideas and a business outcome.</p></Reveal>
          <Reveal className="mt-m">
            <div className="grid-forces">
              {[
                ["01", "Strip away inherited assumptions", "Separate what is true from what the industry merely repeats."],
                ["02", "See the whole business system", "Trace customers, people, economics and execution before choosing a move."],
                ["03", "Build and test better options", "Convert insight into a real transformation project for your own organisation."],
                ["04", "Make value visible", "Measure the outcome, learn from it and strengthen the leadership operating system."],
              ].map(([n, h, p]) => (
                <div key={n} className="force">
                  <span>{n}</span><h3>{h}</h3><p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem" }}>{p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE BRAND PROMISE */}
      <section className="section signature-quote-section">
        <div className="wrap maxw-820">
          <Reveal>
            <figure className="signature-quote">
              <span className="mono sec-k">A principle Dr. Xavier always emphasises</span>
              <blockquote>&ldquo;{SIGNATURE_QUOTE.text}&rdquo;</blockquote>
              <figcaption>
                <strong>{SIGNATURE_QUOTE.attribution}</strong>
                <span>{SIGNATURE_QUOTE.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* AT-A-GLANCE COMPARISON */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Agility at a glance</span></div></Reveal>
          <Reveal><h2 className="sec-h">A different kind of MBA experience.</h2></Reveal>
          <Reveal><p className="sec-sub">Compare the learning design—not just the title. Traditional MBA structures vary by institution; this overview shows where the Future Ready format is intentionally different.</p></Reveal>
          <Reveal className="mt-m"><ProgrammeComparison compact /></Reveal>
          <Reveal className="center mt-s"><Link href="/executive-mba-vs-mba" className="btn btn-ghost">See the full, honest comparison →</Link></Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "26px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 18 }}>Organisations listed in ABC&rsquo;s current company profile; inclusion does not imply endorsement</p></div>
        <div style={{ display: "flex", gap: 36, flexWrap: "wrap", justifyContent: "center", padding: "0 26px" }}>
          {CLIENTS.slice(0, 11).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.1rem", color: "var(--ink-2)", opacity: 0.65 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* HUB — routes into the dedicated pages */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Explore</span></div>
            <h2 className="sec-h">Everything you need to decide — one click away.</h2>
          </Reveal>
          <div className="insight-grid mt-m">
            {HUB.map((c, i) => (
              <Reveal key={c.href} delay={(i % 3) * 60}>
                <Link href={c.href} className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: 18 }}>
                  <div>
                    <span className="mono sec-k" style={{ fontSize: ".68rem" }}>{c.k}</span>
                    <h3 style={{ fontSize: "1.35rem", margin: "12px 0 8px" }}>{c.h}</h3>
                    <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{c.d}</p>
                  </div>
                  <span className="acc mono" style={{ fontSize: ".78rem" }}>Read more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="stats">
            <div><b>{FACTS.gradsApprox}</b><span>Leaders trained</span></div>
            <div><b>{FACTS.cohorts}</b><span>Cohorts since 2024</span></div>
            <div><b>{FACTS.cmiMembers}</b><span>CMI members worldwide</span></div>
            <div><b>75+ yrs</b><span>CMI heritage, UK</span></div>
          </div></Reveal>
          <Reveal className="mt-s center">
            <Link href="/executive-mba-vs-mba" className="btn btn-ghost">Executive MBA vs a traditional MBA →</Link>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
