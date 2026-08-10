import Link from "next/link";
import RdrMark from "@/components/site/RdrMark";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { SITE, FACTS, CLIENTS, ASSOCIATES, OPERATOR } from "@/lib/content";

export const metadata = {
  title: "About the Programme & Provider",
  description:
    "Asian Business Consulting is a business innovation and growth company and an HRD Corp Approved Training Provider — the team and methodology behind the CMI (UK)-endorsed Future Ready Executive MBA.",
};

const MODELS = [
  { k: "F.A.S.T.", d: "Framework Adaptive Systems Thinking — the proprietary engine behind the programme." },
  { k: "B.I.G", d: "Business Innovation & Growth — turning thinking into innovation, profit and growth." },
  { k: "PPCB Model", d: "People, Process, Customer, Business — the four pillars of a future-ready organisation." },
  { k: "Consult-Think-Transfer", d: "How methodology is transferred into your people, not just taught." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">About</span></div>
            <h1 className="sec-h" style={{ fontSize: "clamp(2.1rem,4.4vw,3.2rem)", maxWidth: "20ch" }}>
              A business innovation &amp; growth company — not a lecture hall.
            </h1>
            <p className="sec-sub">
              The Future Ready Executive MBA is delivered by <strong style={{ color: "#fff" }}>{SITE.provider}</strong> (ABC) —
              &ldquo;{SITE.tagline}&rdquo;. ABC is an <strong style={{ color: "#fff" }}>HRD Corp Approved Training Provider</strong> and
              the approved training centre to run this <strong style={{ color: "#fff" }}>CMI (UK)-endorsed</strong> Executive MBA.
              For years, ABC has helped Malaysia&rsquo;s leading organisations turn better thinking into measurable growth.
            </p>
          </Reveal>

          <Reveal className="mt-m">
            <div className="stats">
              <div><b>{FACTS.gradsApprox}</b><span>Leaders trained</span></div>
              <div><b>{FACTS.cohorts}</b><span>Cohorts since 2024</span></div>
              <div><b>HRD Corp</b><span>Approved provider</span></div>
              <div><b>CMI (UK)</b><span>Endorsed programme</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The methodology</span></div>
            <h2 className="sec-h">Proprietary frameworks, built for results.</h2>
            <p className="sec-sub">ABC&rsquo;s work runs on proven, proprietary models that turn strategy into execution.</p>
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
            <h2 className="sec-h">Trusted by Malaysia&rsquo;s biggest names.</h2>
            <p className="sec-sub">ABC has advised and trained leaders across the country&rsquo;s most demanding organisations.</p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {CLIENTS.map((c) => (
                <span key={c} className="pill" style={{ fontFamily: "var(--font-fraunces)", textTransform: "none", letterSpacing: 0, fontSize: ".92rem" }}>{c}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-m">
            <p className="mono sec-k" style={{ marginBottom: 14 }}>Recognised &amp; partnered with</p>
            <p style={{ color: "var(--ink-2)", maxWidth: "70ch" }}>{ASSOCIATES.join(" · ")}</p>
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
                This site is operated by <strong style={{ color: "#fff" }}>{OPERATOR.name}</strong> — an authorised
                marketing and enrolment partner for the programme, and an independent company separate from {SITE.provider}.
                When you apply, your details go to the ABC programme team, who personally guide you through fit, intakes,
                HRD Corp claims and scholarship, and handle your enrolment directly.
              </p>
            </div>
            <p className="fine" style={{ marginTop: 18 }}>
              {OPERATOR.name} · Registration No. {OPERATOR.reg} · {OPERATOR.address}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Ready to think — and lead — differently?" />
    </>
  );
}
