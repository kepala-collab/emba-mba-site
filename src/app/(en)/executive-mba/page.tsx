import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import JsonLd from "@/components/site/JsonLd";
import { SITE, FACTS, THINKING_EDGE, MODULES, INCLUSIONS, STAGES, COMPLIANCE, HRD_CORP_CLAIM } from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";

export const metadata = withSeo("/executive-mba", {
  title: "Executive MBA in Malaysia — CMI UK",
  description: "A six-month Executive MBA pathway: three months to the CMI-recognised programme certificate, then supported Chartered Manager assessment preparation.",
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description: metadata.description,
  provider: { "@type": "EducationalOrganization", "@id": ORGANIZATION_ID, name: SITE.provider },
  url: `${SITE.url}/executive-mba`,
  inLanguage: "en-MY",
  educationalCredentialAwarded: "Programme certificate recognised against CMI Professional Standards",
  timeRequired: "P6M",
  syllabusSections: MODULES.map((module) => ({
    "@type": "Syllabus",
    name: module.p,
  })),
};

export default function ExecutiveMbaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Executive MBA", path: "/executive-mba" }]} />
      <JsonLd data={courseSchema} />

      {/* 1 · INTRO HERO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The Programme · Recognised by CMI (UK)</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "18ch" }}>
              A six-month professional pathway for leaders who make <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>business-wide decisions.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>
              The Future-Ready Executive MBA is a professional leadership programme run by {SITE.provider} and recognised by CMI (UK) against CMI Professional Standards.
              It teaches seven named thinking disciplines through a six-month professional pathway. The first three months lead to the CMI-recognised Executive MBA programme certificate; the next three support participants who meet CMI&rsquo;s entry criteria in preparing for CMI&rsquo;s separate Chartered Manager assessment. The programme phase has no traditional thesis or exams, and successful participants complete a transformation plan for their own business.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              <b style={{ color: "var(--ink)" }}>{FACTS.priceStd}</b> standard —{" "}
              <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>{FACTS.priceNet}</em> for Malaysian participants after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship. {HRD_CORP_CLAIM.short}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
              <Link href="/apply" className="btn btn-primary">Talk to the programme team →</Link>
              <Link href="/fees" className="btn btn-ghost">See the investment</Link>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", paddingTop: 26, borderTop: "1px solid var(--line)" }}>
              <span className="chip"><Image src="/brand/cmi-logo.png" alt="Chartered Management Institute UK" width={90} height={30} style={{ height: 30, width: "auto" }} /></span>
              <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp Claimable" width={42} height={42} style={{ height: 42, width: "auto" }} /></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".1em" }}>
                CMI Certificate of Recognition · HRD Corp employer grant route<br />{FACTS.trainingDays} training days · {FACTS.liveSessions} sessions · {FACTS.cohorts} cohorts reported by ABC
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHO IT'S FOR */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who it&rsquo;s for</span></div></Reveal>
          <Reveal><h2 className="sec-h">Designed for roles with business-wide accountability.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "52ch" }}>
            Business owners, directors, general managers and senior managers responsible for strategy, transformation, innovation or growth.
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The F.A.S.T. method</span></div></Reveal>
          <Reveal><h2 className="sec-h">Seven disciplines used as one decision process.</h2></Reveal>
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
          <Reveal><h2 className="sec-h">Twelve modules organised around one applied project.</h2></Reveal>
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
          <Reveal><h2 className="sec-h">Programme components included in the published fee.</h2></Reveal>
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Programme certificate · optional progression</span></div></Reveal>
          <Reveal><h2 className="sec-h">Three months to the programme certificate. Three months of CMgr assessment preparation.</h2></Reveal>
          <Reveal><p className="sec-sub">The complete pathway runs for six months. Months one to three deliver the Executive MBA programme and CMI-recognised certificate. During months four to six, participants who meet CMI&rsquo;s entry criteria prepare the evidence, written application and professional discussion required for CMI&rsquo;s separate Chartered Manager assessment. CMI awards CMgr MCMI only after successful assessment.</p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }} className="cert-grid">
            {STAGES.map((s, i) => (
              <div key={s.h} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>Stage {i + 1} · {s.t}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "12px 0 8px" }}>{s.h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>{s.d}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "78ch" }}><strong>Professional presentation:</strong> once CMI confirms an award or grade, the exact post-nominal can be used after your name on a business card, email signature, CV and professional profile. The recognised formats include fCMgr, MCMI, CMgr MCMI and CMgr FCMI. Programme completion alone does not confer Member, Chartered Manager or Fellow grade.</p></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "78ch" }}><strong>Strategic learning level:</strong> the programme is designed for senior, strategic and postgraduate-level executive practice. It is a CMI Recognised professional development programme rather than an MQA-accredited academic or regulated qualification. Chartered assessment and continuing membership charges are separate from the programme fee and governed by CMI&rsquo;s current terms.</p></Reveal>
          <Reveal className="mt-m">
            <div className="cert-img-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, alignItems: "center", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 10, border: "1px solid var(--line-2)", flex: "none" }}>
                <Image src="/brand/cmi-certificate.png" alt="Specimen CMI (UK) certificate — Executive Master's in Business Administration on Future Ready Business Leadership" width={340} height={295} style={{ width: 300, height: "auto", display: "block", borderRadius: 4 }} />
              </div>
              <div>
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>The credential you earn</div>
                <h3 style={{ fontSize: "1.35rem", margin: "10px 0 8px" }}>CMI Certificate of Recognition</h3>
                <p style={{ color: "var(--ink-2)", margin: 0, fontSize: ".95rem" }}>The specimen records recognition against CMI Professional Standards and bears the signature of CMI Chief Executive Ann Francke OBE. CMI controls the format, wording and signatory of the certificate issued to each successful participant.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "70ch" }}>{COMPLIANCE}</p></Reveal>
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
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 8px" }}>Live, in-person delivery</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>
                Weekend facilitation, 9am&ndash;6pm, across the first three months. Cohort 17 runs Saturday&ndash;Sunday; the other currently published cohorts run Friday&ndash;Saturday. Months four to six support eligible participants preparing for CMI&rsquo;s Chartered Manager assessment. {FACTS.priceStd} standard,
                {" "}{FACTS.priceNet} for Malaysian participants after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship. {HRD_CORP_CLAIM.short}
              </p>
            </div>
            <div className="card">
              <div className="mono sec-k" style={{ fontSize: ".72rem" }}>International · Fully online</div>
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 8px" }}>Join live from anywhere</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>
                The same framework curriculum delivered live online for international participants at{" "}
                <b style={{ color: "var(--ink)" }}>{FACTS.priceIntl}</b> — live online delivery with the same curriculum and coaching structure.
              </p>
            </div>
          </div></Reveal>
        </div>
        <style>{`@media(max-width:760px){.fmt-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* 8 · 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 Intakes · English and Mandarin</span></div></Reveal>
          <Reveal><h2 className="sec-h">Five published cohort schedules for 2026.</h2></Reveal>
          <Reveal className="mt-s">
            <IntakeSchedule label="2026 Executive MBA intake schedule" />
          </Reveal>
          <Reveal className="mt-s"><Link href="/intakes" className="btn btn-ghost">See all 2026 intakes →</Link></Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" />
    </>
  );
}
