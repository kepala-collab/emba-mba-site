import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CORP_TRAINING, SITE } from "@/lib/content";

export const metadata = {
  title: "Corporate Training — HRD Corp Claimable, AI-Era Leadership & Skills",
  description:
    "HRD Corp claimable corporate training for the AI era — 10 tracks across AI leadership, digital transformation, data analytics, change, ESG and human skills. Delivered in-house by an HRD Corp Approved Training Provider.",
};

export default function CorporateTrainingPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Future Ready Corporate Training Series (2026–2030)",
    itemListElement: CORP_TRAINING.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Course", name: cat.c, provider: { "@type": "Organization", name: SITE.provider } },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* INTRO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Corporate Training · 2026–2030 · HRD Corp Claimable</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ fontSize: "clamp(2.1rem,4.4vw,3.2rem)", maxWidth: "20ch" }}>
              Build a workforce ready to lead, transform and thrive in the AI era.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Beyond the Executive MBA, {SITE.provider} runs a full corporate training series for teams and
              organisations — <b style={{ color: "var(--ink)" }}>10 tracks, ~60 programmes</b>, delivered in-house and
              <b style={{ color: "var(--ink)" }}> HRD Corp claimable</b> for eligible Malaysian employers. Every track
              is built around the same F.A.S.T. thinking that powers the EMBA.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">Enquire for your team →</Link>
              <Link href="/executive-mba" className="btn btn-ghost">See the Executive MBA</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE 10 TRACKS */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The training tracks</span></div></Reveal>
          <Reveal><h2 className="sec-h">Ten capability tracks for the next five years.</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="ct-grid">
            {CORP_TRAINING.map((cat, i) => (
              <Reveal key={cat.c} delay={(i % 2) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".74rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.22rem", marginBottom: 12 }}>{cat.c}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.p.map((prog) => (
                      <span key={prog} className="pill" style={{ fontSize: ".7rem", textTransform: "none", letterSpacing: 0 }}>{prog}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Programmes shown are the current series menu; specific syllabi, durations and fees are scoped per
            engagement. Claimable amounts and approval are determined by HRD Corp.
          </p>
        </div>
        <style>{`@media(max-width:820px){.ct-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How it works</span></div></Reveal>
          <Reveal><h2 className="sec-h">Customised for your team. Claimed through your levy.</h2></Reveal>
          <Reveal className="mt-s">
            <div className="card" style={{ display: "grid", gap: 14 }}>
              {[
                ["Choose your tracks", "Pick the capabilities your organisation needs from the ten tracks above — or blend programmes into a tailored pathway."],
                ["Delivered in-house", `${SITE.provider}, an HRD Corp Approved Training Provider, delivers on-site or online, customised to your business context.`],
                ["HRD Corp claimable", "For eligible Malaysian employers, the programme fee can be claimed against your HRD Corp levy — the team guides your HR lead through the submission."],
              ].map(([h, p]) => (
                <div key={h} style={{ display: "flex", gap: 16 }}>
                  <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>→</span>
                  <span>
                    <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.08rem", display: "block" }}>{h}</b>
                    <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{p}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        programme="Corporate Training"
        heading="Upskill your team for the AI era."
        sub="Tell us your goals and our team will send the relevant syllabi, HRD Corp guidance, and a proposal tailored to your organisation. No obligation."
      />
    </>
  );
}
