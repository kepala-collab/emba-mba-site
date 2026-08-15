import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import CtaSection from "@/components/site/CtaSection";
import { SITE, FACTS, INCLUSIONS, COMPARISON, CLIENTS, COMPLIANCE, OPERATOR, HRD_CORP_CLAIM } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/lp/google", {
  title: "Executive MBA in Malaysia — CMI (UK), 6-Month Pathway",
  description:
    "A six-month professional pathway: three months to the CMI-recognised Executive MBA programme certificate, then three months of supported Chartered Manager assessment preparation.",
  // Ad landing page — keep it out of organic index so it doesn't compete with SEO pages.
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/google", languages: { en: "/lp/google", "zh-Hans": "/zh/lp/google" } },
});

const SOURCE = "lp-google";

export default function GoogleLandingPage() {
  return (
    <>
      {/* HERO + FORM */}
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <div className="eyebrow"><span className="l" /><span className="mono sec-k">Recognised by CMI (UK) · HRD Corp Claimable</span></div>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.2rem,4.6vw,3.4rem)", letterSpacing: "-.02em", lineHeight: 1.06, marginTop: 6 }}>
                  A professional Executive MBA pathway in Malaysia — over <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>6 months</em>.
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.12rem", maxWidth: "46ch", margin: "22px 0 26px" }}>
                  The programme is recognised by the Chartered Management Institute (UK). The first three months comprise six
                  training days across three sessions, coaching and an applied business project leading to the programme certificate.
                  Eligible participants then receive three months of support for CMI&rsquo;s separate <b style={{ color: "var(--ink)" }}>Chartered Manager (CMgr)</b> assessment.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="Chartered Management Institute UK" width={80} height={28} style={{ height: 28, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={38} height={38} style={{ height: 38, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".08em", fontSize: ".8rem" }}>{FACTS.trainingDays} training days · {FACTS.liveSessions} sessions · {FACTS.cohorts} cohorts reported by ABC</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[["6 months", "Certificate + supported CMgr pathway"], [`${FACTS.priceStd} → ${FACTS.priceNet}`, "Malaysian participant fee"], ["Before training", "Employer submits the HRD Corp application"]].map(([b, s]) => (
                    <div key={s} className={b.includes("→") ? "lpg-price-stat" : undefined} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", display: "block", color: "var(--ink)" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".6rem", letterSpacing: ".06em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* FORM CARD */}
            <div className="lpg-form">
              <Reveal delay={120}>
                <div className="card" style={{ padding: 26, background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)" }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>Programme enquiry · No payment required</p>
                  <h2 style={{ fontSize: "1.3rem", color: "var(--ink)", marginBottom: 8, lineHeight: 1.25 }}>Discuss eligibility and the next intake</h2>
                  <p className="fine" style={{ marginBottom: 18 }}>Choose how the programme team should contact you. The team will explain fit, published dates, the Malaysian scholarship and the employer-led HRD Corp process.</p>
                  <LeadForm programme="Executive MBA" source={SOURCE} placement="hero" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>Organisations listed in ABC&rsquo;s company profile; inclusion does not imply endorsement</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.7 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What&rsquo;s included</span></div></Reveal>
          <Reveal><h2 className="sec-h">The components included in the programme fee.</h2></Reveal>
          <div className="insight-grid mt-m">
            {INCLUSIONS.slice(0, 6).map((it, i) => (
              <Reveal key={it.b} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".72rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.12rem", marginBottom: 8 }}>{it.b}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem" }}>{it.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS VS A REFERENCE ACADEMIC MBA */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Defined programme comparison</span></div></Reveal>
          <Reveal><h2 className="sec-h">Compare purpose, format, assessment and credential.</h2></Reveal>
          <Reveal><p className="sec-sub">The academic reference below is defined as an 18–24 month MBA using academic modules, assignments or examinations, and a dissertation or thesis. It does not describe every academic MBA.</p></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {COMPARISON.map((row) => (
              <div key={row.k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{row.k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "var(--ink)", fontSize: ".92rem" }}><span className="acc mono" style={{ fontSize: ".62rem", display: "block", marginBottom: 2 }}>THIS PROGRAMME</span>{row.us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".92rem" }}><span className="mono" style={{ fontSize: ".62rem", display: "block", marginBottom: 2 }}>REFERENCE ACADEMIC MBA</span>{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        programme="Executive MBA"
        source={SOURCE}
        heading="Discuss programme fit before you apply."
        sub={`Request a programme-fit conversation. The team will explain the published intake, Malaysian participant fee and employer-led HRD Corp process. ${HRD_CORP_CLAIM.responsibility}`}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE} Programme delivered by {SITE.provider}. This page is operated by {OPERATOR.name}, the authorised {OPERATOR.role}.</p>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .lpg-grid{grid-template-columns:1fr!important;gap:30px!important}
          .lpg-form{order:-1}
          .lpg-cmp{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}
