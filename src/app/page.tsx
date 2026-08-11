import Link from "next/link";
import Image from "next/image";
import NodeCanvas from "@/components/site/NodeCanvas";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, CLIENTS } from "@/lib/content";

export const metadata = {
  alternates: {
    canonical: "/",
    languages: { "en": "/", "zh-Hans": "/zh", "x-default": "/" },
  },
};

const HUB = [
  { href: "/executive-mba", k: "The Programme", h: "A CMI (UK) MBA, in 3 months", d: "What the Future Ready Executive MBA is, who it's for, and why it works." },
  { href: "/how-it-works", k: "The Method", h: "F.A.S.T. thinking", d: "The seven thinking disciplines that install judgment, not just knowledge." },
  { href: "/curriculum", k: "Curriculum", h: "12 modules, 3 stages", d: "From value creation to capturing value, ending in a real capstone project." },
  { href: "/faculty", k: "Faculty", h: "Practitioners, not lecturers", d: "Seven professors who advise Fortune-500 boards and Bank Negara Malaysia." },
  { href: "/fees", k: "Investment", h: "RM10,000 → RM6,000", d: "The RM4,000 scholarship, 100% HRD Corp claims, installments and the money-back guarantee." },
  { href: "/intakes", k: "2026 Intakes", h: "Three cohorts open", d: "Cohorts 16–18 — one weekend a month in KL, or fully online." },
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
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The Future-Ready Executive MBA · CMI (UK) Endorsed</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.5rem,5.8vw,4.3rem)", letterSpacing: "-.02em", lineHeight: 1.04 }}>
                  Your business will be run by whoever thinks <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>best.</em> Make sure it&rsquo;s you.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.16rem", maxWidth: "42ch", margin: "26px 0 32px" }}>
                  A CMI (UK)-endorsed Executive MBA that installs the thinking frameworks of elite leaders in{" "}
                  <b style={{ color: "#fff" }}>{FACTS.durationLong}.</b> No thesis. No exams. Just a sharper mind — and a real transformation plan for your own business.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
                  <Link href="/apply" className="btn btn-primary">Apply Now →</Link>
                  <Link href="/executive-mba" className="btn btn-ghost">Explore the programme</Link>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", paddingTop: 26, borderTop: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="Chartered Management Institute UK" width={90} height={30} style={{ height: 30, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={42} height={42} style={{ height: 42, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".1em" }}>Awarded by CMI, UK · HRD Corp claimable<br />{FACTS.gradsApprox} leaders trained · {FACTS.cohorts} cohorts</span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="card" style={{ background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)", padding: 26 }}>
                <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                  <Image src="/brand/emba-lockup.png" alt="Executive MBA — Future Ready Business Leadership" width={720} height={459} style={{ width: "100%", height: "auto" }} priority />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", marginTop: 20, borderRadius: 10, overflow: "hidden" }}>
                  {[["3 months", "3 sessions to cert"], ["12", "Framework modules"], [FACTS.priceNet, "After scholarship"], ["CMgr", "6-month pathway"]].map(([b, s]) => (
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
        <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important;gap:38px!important}.hero-grid>*:last-child{order:-1}}`}</style>
      </section>

      {/* MARQUEE */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "26px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 18 }}>The people trusted to develop Malaysia&rsquo;s biggest names</p></div>
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
