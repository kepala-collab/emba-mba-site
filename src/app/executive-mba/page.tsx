import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { SITE, FACTS, THINKING_EDGE, MODULES, INCLUSIONS, INTAKES, STAGES, COMPLIANCE } from "@/lib/content";

export const metadata = {
  title: "Executive MBA — Future Ready Business Leadership (CMI UK)",
  description: "A CMI (UK)-endorsed Executive MBA — 3 months to your CMI certification, then Chartered Manager (a 6-month programme). HRD Corp claimable, RM10,000 (RM6,000 with the RM4,000 Malaysian scholarship). No thesis, no exams.",
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Future Ready Executive MBA (CMI UK)",
  description: metadata.description,
  provider: { "@type": "Organization", name: SITE.provider },
  url: `${SITE.url}/executive-mba`,
  educationalCredentialAwarded: "CMI (UK) recognition",
  timeRequired: "P3M",
};

export default function ExecutiveMbaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      {/* 1 · INTRO HERO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The Programme · CMI (UK) Endorsed</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "18ch" }}>
              An Executive MBA built for how leaders actually <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>think.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>
              The Future-Ready Executive MBA is a CMI (UK)-endorsed leadership programme run by {SITE.provider}.
              It installs the thinking frameworks that senior operators spend decades earning — delivered in{" "}
              <b style={{ color: "#fff" }}>{FACTS.durationLong}</b>. No thesis. No exams. You leave with a
              board-ready transformation plan for your own business.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              <b style={{ color: "#fff" }}>{FACTS.priceStd}</b> standard —{" "}
              <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>{FACTS.priceNet}</em> with the Malaysian scholarship, and HRD Corp claimable.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
              <Link href="/apply" className="btn btn-primary">Apply Now →</Link>
              <Link href="/fees" className="btn btn-ghost">See the investment</Link>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", paddingTop: 26, borderTop: "1px solid var(--line)" }}>
              <span className="chip"><Image src="/brand/cmi-logo.png" alt="Chartered Management Institute UK" width={90} height={30} style={{ height: 30, width: "auto" }} /></span>
              <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={42} height={42} style={{ height: 42, width: "auto" }} /></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".1em" }}>
                Awarded by CMI, UK · HRD Corp claimable<br />{FACTS.gradsApprox} leaders trained · {FACTS.cohorts} cohorts
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHO IT'S FOR */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who it&rsquo;s for</span></div></Reveal>
          <Reveal><h2 className="sec-h">Built for the people who carry the decisions.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "52ch" }}>
            Typically leaders aged 35&ndash;55 with 10+ years of experience who are responsible for direction, not just delivery.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }} className="who-grid">
            {[
              ["Business owners", "Founders scaling past what got them here."],
              ["Directors & board members", "Setting strategy others will execute."],
              ["General managers", "Accountable for whole P&Ls and teams."],
              ["Senior managers", "Stepping up into transformational roles."],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.12rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
        <style>{`@media(max-width:820px){.who-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:520px){.who-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* 3 · F.A.S.T. THINKING EDGE */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The F.A.S.T. thinking edge</span></div></Reveal>
          <Reveal><h2 className="sec-h">Seven disciplines that compound into judgment.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "52ch" }}>
            Framework Adaptive Systems Thinking — the instinct to see what others miss and decide when others freeze.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="edge-grid">
            {THINKING_EDGE.map((e) => (
              <div key={e.i} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>{e.i}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "14px 0 8px" }}>{e.h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{e.p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
        <style>{`@media(max-width:800px){.edge-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* 4 · THE 12 MODULES */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The curriculum · 12 modules</span></div></Reveal>
          <Reveal><h2 className="sec-h">A full transformation curriculum — nothing padded.</h2></Reveal>
          <Reveal className="mt-m"><div className="mods">
            {MODULES.map((m) => (
              <div key={m.c} className="m">
                <div className="c">{m.c}</div>
                <p>{m.p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><Link href="/curriculum" className="btn btn-ghost">Explore the full curriculum →</Link></Reveal>
        </div>
      </section>

      {/* 5 · WHAT'S INCLUDED */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What&rsquo;s included</span></div></Reveal>
          <Reveal><h2 className="sec-h">Everything you need to change how you lead.</h2></Reveal>
          <Reveal className="mt-m"><div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }} className="incl-grid">
            {INCLUSIONS.map((inc) => (
              <div key={inc.b} className="card" style={{ display: "flex", gap: 14 }}>
                <span className="mono acc" style={{ fontSize: ".9rem", flex: "none" }}>→</span>
                <div>
                  <h3 style={{ fontSize: "1.08rem", margin: "0 0 6px" }}>{inc.b}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{inc.s}</p>
                </div>
              </div>
            ))}
          </div></Reveal>
        </div>
        <style>{`@media(max-width:760px){.incl-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* 6 · CERTIFICATION */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Certification · 6-month programme</span></div></Reveal>
          <Reveal><h2 className="sec-h">Two qualifications, one programme.</h2></Reveal>
          <Reveal><p className="sec-sub">Over six months you earn your CMI (UK) Executive MBA certification, then progress to Chartered Manager (CMgr) — a chartered professional status for management, akin to a Chartered Accountant in finance.</p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="cert-grid">
            {STAGES.map((s, i) => (
              <div key={s.h} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>Stage {i + 1} · {s.t}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "12px 0 8px" }}>{s.h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>{s.d}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-m">
            <div className="cert-img-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, alignItems: "center", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 10, border: "1px solid var(--line-2)", flex: "none" }}>
                <Image src="/brand/cmi-certificate.png" alt="Specimen CMI (UK) certificate — Executive Master's in Business Administration on Future Ready Business Leadership" width={340} height={295} style={{ width: 300, height: "auto", display: "block", borderRadius: 4 }} />
              </div>
              <div>
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>The credential you earn</div>
                <h3 style={{ fontSize: "1.35rem", margin: "10px 0 8px" }}>Recognised by CMI (UK) — signed by their Chief Executive.</h3>
                <p style={{ color: "var(--ink-2)", margin: 0, fontSize: ".95rem" }}>Your Executive Master&rsquo;s in Business Administration on Future Ready Business Leadership is recognised against CMI Professional Standards. Specimen shown.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "70ch" }}>Recognised by the Chartered Management Institute (UK), the professional body for management with {FACTS.cmiMembers} members worldwide. {COMPLIANCE}</p></Reveal>
        </div>
        <style>{`@media(max-width:760px){.cert-grid,.cert-img-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* 7 · FORMAT & DELIVERY */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Format &amp; delivery</span></div></Reveal>
          <Reveal><h2 className="sec-h">One weekend a month. Keep running your business.</h2></Reveal>
          <Reveal className="mt-m"><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="fmt-grid">
            <div className="card">
              <div className="mono sec-k" style={{ fontSize: ".72rem" }}>Malaysia · In-person</div>
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 8px" }}>Live at {SITE.venue}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>
                Friday &amp; Saturday facilitation, 9am&ndash;6pm, across {FACTS.durationLong}. {FACTS.priceStd} standard,
                {" "}{FACTS.priceNet} with the Malaysian scholarship — HRD Corp claimable for eligible employers.
              </p>
            </div>
            <div className="card">
              <div className="mono sec-k" style={{ fontSize: ".72rem" }}>International · Fully online</div>
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 8px" }}>Join live from anywhere</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>
                The same framework curriculum delivered live online for international participants at{" "}
                <b style={{ color: "#fff" }}>{FACTS.priceIntl}</b> — no travel, same cohort experience.
              </p>
            </div>
          </div></Reveal>
        </div>
        <style>{`@media(max-width:760px){.fmt-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* 8 · 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 Intakes · seats limited per cohort</span></div></Reveal>
          <Reveal><h2 className="sec-h">Three cohorts open for 2026.</h2></Reveal>
          <Reveal className="mt-s"><div className="intake-wrap"><table className="intake">
            <thead><tr><th>Cohort</th><th>Session 1</th><th>Session 2</th><th>Session 3</th><th></th></tr></thead>
            <tbody>{INTAKES.map((c) => (
              <tr key={c.co}><td className="co">{c.co}</td><td><span className="s">{c.s1}</span></td><td><span className="s">{c.s2}</span></td><td><span className="s">{c.s3}</span></td><td className="seats">{c.seats}</td></tr>
            ))}</tbody>
          </table></div></Reveal>
          <Reveal className="mt-s"><Link href="/intakes" className="btn btn-ghost">See all 2026 intakes →</Link></Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
