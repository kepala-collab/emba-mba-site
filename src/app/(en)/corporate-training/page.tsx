import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CORP_TRAINING, CTA_LABELS, HRD_CORP_CLAIM, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/corporate-training", {
  title: "HRD Corp Claimable Corporate Training",
  description:
    "Corporate training across AI leadership, digital transformation, analytics, change, ESG and human skills, delivered by an HRD Corp Approved Training Provider.",
});

export default function CorporateTrainingPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Future Ready Corporate Training Series (2026–2030)",
    itemListElement: CORP_TRAINING.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.c,
      description: cat.p.join("; "),
      url: `${SITE.url}/corporate-training#track-${i + 1}`,
    })),
  };
  return (
    <>
      <JsonLd data={ld} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Corporate Training · 2026–2030 · HRD Corp Claimable</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ fontSize: "clamp(2.1rem,4.4vw,3.2rem)", maxWidth: "20ch" }}>
              Develop the capabilities your organisation has defined as priorities.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Beyond the Executive MBA, {SITE.provider} runs a full corporate training series for teams and
              organisations — <b style={{ color: "var(--ink)" }}>10 tracks, 61 listed programmes</b>, delivered in-house and
              supported by an <b style={{ color: "var(--ink)" }}> employer-led HRD Corp application route</b>.
              The programme team supplies the employer with the quotation, schedule, course content and trainer documents.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply?intent=company" className="btn btn-primary">{CTA_LABELS.company} →</Link>
              <Link href="/executive-mba" className="btn btn-ghost">See the Executive MBA</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE 10 TRACKS */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The training tracks</span></div></Reveal>
          <Reveal><h2 className="sec-h">Ten capability tracks in the 2026–2030 programme series.</h2></Reveal>
          <div className="mt-m ct-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {CORP_TRAINING.map((cat, i) => (
              <Reveal key={cat.c} delay={(i % 2) * 60}>
                <div className="card" id={`track-${i + 1}`} style={{ height: "100%" }}>
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
            The 61 names above are the published series menu. The formal proposal for an engagement states
            its selected syllabus, duration, participant count, delivery format, complete fee and payment terms.
            HRD Corp determines grant eligibility and the approved amount.
          </p>
        </div>
        <style>{`@media(max-width:820px){.ct-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">How it works</span></div></Reveal>
          <Reveal><h2 className="sec-h">Define the requirement, delivery model and funding process.</h2></Reveal>
          <Reveal className="mt-s">
            <div className="card" style={{ display: "grid", gap: 14 }}>
              {[
                ["Choose your tracks", "Select the capabilities your organisation needs from the ten tracks above, or combine programmes in one written proposal."],
                ["Delivered in-house", `${SITE.provider}, an HRD Corp Approved Training Provider, delivers on-site or online, customised to your business context.`],
                ["Employer-led HRD Corp route", HRD_CORP_CLAIM.short],
              ].map(([h, p]) => (
                <div key={h} style={{ display: "flex", gap: 16 }}>
                  <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>→</span>
                  <span>
                    <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.08rem", display: "block" }}>{h}</b>
                    <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{p}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MANAGERS DEVELOPMENT PROGRAMME */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">In-house Managers Development Programme</span></div></Reveal>
          <Reveal><h2 className="sec-h">A company-specific MDP defined in one written proposal.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              ABC designs the in-house Managers Development Programme against the organisation&rsquo;s written
              requirements. The formal proposal states the modules, delivery format, completion requirements,
              complete fee and whether the engagement includes the CMI-recognised EMBA programme certificate.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div className="card" style={{ display: "grid", gap: 12 }}>
              <p style={{ margin: 0, color: "var(--ink-2)" }}>The formal proposal states the participant count, delivery model, programme design, support requirements, complete fee, payment schedule and acceptance terms.</p>
              <Link href="/apply?intent=employer_evaluating" className="btn btn-primary" style={{ justifySelf: "start" }}>{CTA_LABELS.company} →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        programme="Corporate Training"
        defaultIntent="employer_evaluating"
        intentOptions={["employer_evaluating", "employer_sponsored"]}
        heading="Request a corporate training proposal."
        sub="Send the organisation's required capabilities, participant count and delivery preference. The team will respond with the relevant syllabus, employer-led HRD Corp process and a written proposal. An enquiry does not accept the proposal."
      />
    </>
  );
}
