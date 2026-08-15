import Link from "next/link";
import RdrMark from "@/components/site/RdrMark";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { SITE, FACTS, CLIENTS, OPERATOR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/about", {
  title: "About the Programme & Provider",
  description:
    "Meet Asian Business Consulting, the HRD Corp Approved Training Provider behind the professional Future Ready Executive MBA recognised by CMI (UK).",
});

const MODELS = [
  { k: "F.A.S.T.", d: "Framework Adaptive Systems Thinking — the programme's structured decision method." },
  { k: "B.I.G", d: "Business Innovation & Growth — a model for linking strategic analysis, innovation and commercial requirements." },
  { k: "PPCB Model", d: "People, Process, Customer, Business — the four pillars of a future-ready organisation." },
  { k: "Consult-Think-Transfer", d: "A model for applying the programme methods within the participant's workplace." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">About</span></div>
            <h1 className="sec-h" style={{ fontSize: "clamp(2.1rem,4.4vw,3.2rem)", maxWidth: "20ch" }}>
              The programme provider, methodology and editorial standards.
            </h1>
            <p className="sec-sub">
              The Future Ready Executive MBA is delivered by <strong style={{ color: "var(--ink)" }}>{SITE.provider}</strong> (ABC) —
              &ldquo;{SITE.tagline}&rdquo;. ABC is an <strong style={{ color: "var(--ink)" }}>HRD Corp Approved Training Provider</strong> and
              its company profile identifies it as the approved training centre for this Executive MBA. CMI has
              <strong style={{ color: "var(--ink)" }}> approved and endorsed the programme against its Professional Standard</strong>.
            </p>
          </Reveal>

          <Reveal className="mt-m">
            <div className="stats">
              <div><b>{FACTS.trainingDays}</b><span>Certificate-phase training days</span></div>
              <div><b>{FACTS.cohorts}</b><span>Cohorts in ABC programme records</span></div>
              <div><b>HRD Corp</b><span>Approved provider</span></div>
              <div><b>CMI (UK)</b><span>Recognised programme</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="editorial-standards" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Editorial standards</span></div>
            <h2 className="sec-h">How programme information is reviewed.</h2>
            <p className="sec-sub">
              Educational articles are prepared by the Asian Business Consulting editorial team and reviewed against the current programme source materials. Commercial and regulatory details—fees, dates, scholarships, HRD Corp treatment and credential wording—are checked before publication and reviewed after a material programme change or at least quarterly.
            </p>
            <p className="fine mt-s">
              The website operator publishes the approved material but does not award the credential. Official external
              sources are linked where available. The applicable written proposal and signed enrolment terms control the
              participant&rsquo;s price, schedule, delivery format and completion requirements. HRD Corp controls employer
              grant approval and the approved amount.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The methodology</span></div>
            <h2 className="sec-h">Four named models used in the programme.</h2>
            <p className="sec-sub">ABC uses these models to structure problem definition, strategy, execution and transfer into the workplace.</p>
          </Reveal>
          <div className="insight-grid mt-m">
            {MODELS.map((m) => (
              <Reveal key={m.k}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 style={{ fontSize: "1.3rem" }}>{m.k}</h3>
                  <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: ".92rem" }}>{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s">
            <Link href="/how-it-works" className="btn btn-ghost">Explore the method →</Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Track record</span></div>
            <h2 className="sec-h">Organisations represented in ABC&rsquo;s company profile.</h2>
            <p className="sec-sub">ABC identifies the following organisations in its current company profile. Inclusion does not imply endorsement of this website or the programme.</p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {CLIENTS.map((c) => (
                <span key={c} className="pill" style={{ fontFamily: "var(--font-fraunces)", textTransform: "none", letterSpacing: 0, fontSize: ".92rem" }}>{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Who runs this site</span></div>
            <h2 className="sec-h">Operated by Right Dots Resources.</h2>
            <div style={{ display: "flex", gap: 22, alignItems: "flex-start", marginTop: 8 }}>
              <RdrMark size={64} />
              <p className="lead" style={{ color: "var(--ink-2)", margin: 0 }}>
                This site is operated by <strong style={{ color: "var(--ink)" }}>{OPERATOR.name}</strong> — the authorised
                {" "}{OPERATOR.role} for programme enquiries, local pricing and enrolment coordination, and an independent
                company separate from {SITE.provider}. When you enquire or apply, {OPERATOR.name} works with the ABC
                programme team to explain programme fit, intakes, HRD Corp applications, scholarships and enrolment.
              </p>
            </div>
            <p className="fine" style={{ marginTop: 18 }}>
              {OPERATOR.name} · Registration No. {OPERATOR.reg} · {OPERATOR.address}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the programme, provider and next intake." />
    </>
  );
}
