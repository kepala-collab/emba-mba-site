import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import {
  COMPARISON,
  COMPARISON_SCOPE,
  FACTS,
  HRD_CORP_CLAIM,
  INCLUSIONS,
  OPERATOR,
  PROGRAMME_PRICING,
  REFUND_TERMS,
  SITE,
} from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/fees", {
  title: "Investment, Scholarship & HRD Corp",
  description:
    "Executive MBA fees for individuals and companies: Malaysian scholarship pricing, a USD 2,500 global online programme, Right Dots Resources proposals and custom in-house MDPs.",
});

export default function FeesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Fees", path: "/fees" }]} />
      {/* OFFER STACK + PRICE */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The investment · executive MBA fees, Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "24ch" }}>
              Understand the full programme fee before you decide.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              The published programme fee covers the six-month pathway and the items listed below.
              For Malaysian participants, {FACTS.scholarshipProvider} provides a {FACTS.scholarshipAmt}{" "}
              scholarship, reducing the fee from {FACTS.priceStd} to {FACTS.priceNet}. Separate CMI
              assessment and membership fees are stated before enrolment.
            </p>
          </Reveal>

          <div
            className="offer-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 34, alignItems: "start" }}
          >
            {/* value stack */}
            <Reveal>
              <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 18 }}>Included in the programme fee</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "var(--surface)" }}>
                {INCLUSIONS.map((it, i) => (
                  <li key={it.b} style={{ padding: "20px 22px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 16 }}>
                    <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.14rem", display: "block" }}>{it.b}</b>
                      <span style={{ color: "var(--ink-2)", fontSize: ".93rem", display: "block", marginTop: 4 }}>{it.s}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="fine mt-s">
                The programme has no traditional examination, thesis-supervision or compulsory-travel fee.
                CMI&rsquo;s separate assessment, application and membership fees are not part of this programme fee unless the written fee schedule states otherwise.
              </p>
            </Reveal>

            {/* sticky price card */}
            <Reveal delay={80}>
              <div className="card" style={{ position: "sticky", top: 90, border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))", padding: 28 }}>
                <div className="mono" style={{ color: "var(--muted)", marginBottom: 10 }}>Your investment</div>
                <div style={{ color: "var(--muted)", fontSize: ".9rem", textDecoration: "line-through", marginBottom: 6 }}>
                  {FACTS.priceStd} standard programme fee
                </div>
                <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(3rem,7vw,4.2rem)", color: "var(--ink)", lineHeight: 1 }}>
                  {FACTS.priceNet}
                </div>
                <p style={{ color: "var(--ink-2)", fontSize: ".95rem", margin: "10px 0 0" }}>
                  for Malaysian participants, after the {FACTS.scholarshipAmt} scholarship provided by {FACTS.scholarshipProvider} — <b style={{ color: "var(--ink)" }}>{FACTS.priceStd}</b> standard.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, padding: ".5rem .9rem", borderRadius: 999, background: "rgba(232,193,124,.12)", border: "1px solid rgba(232,193,124,.4)", color: "var(--amber)", fontFamily: "var(--font-plex-mono)", fontSize: ".66rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  ★ Employer-applied HRD Corp funding · instalment options
                </div>
                <Link href="/apply" className="btn btn-primary" style={{ width: "100%", marginTop: 22 }}>
                  Discuss fees and enrolment →
                </Link>
                <p className="fine" style={{ marginTop: 18 }}>
                  International, fully-online participants: <b style={{ color: "var(--ink-2)" }}>{FACTS.priceIntl}</b>.
                  Instalments: RHB credit card over 6–12 months, or an ABC four-month payment plan.
                  Malaysian participants receive the stated scholarship. CMI publishes and controls its separate
                  Chartered Manager assessment, application and membership fees.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:860px){.offer-grid{grid-template-columns:1fr!important}.offer-grid .card{position:static!important}}`}</style>
      </section>

      {/* INDIVIDUAL AND COMPANY PROGRAMMES */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Fees for individuals and companies</span></div></Reveal>
          <Reveal><h2 className="sec-h">Choose the delivery model that fits you—or your organisation.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Join a professional Executive MBA programme recognised by CMI (UK), designed for working
              professionals who want to strengthen business acumen, leadership capability and their global network.
            </p>
          </Reveal>

          <Reveal className="mt-m">
            <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 16 }}>EMBA programme pricing for individuals</div>
          </Reveal>
          <div className="programme-pricing-grid">
            {PROGRAMME_PRICING.individuals.map((option, index) => (
              <Reveal key={option.key} delay={index * 60}>
                <article className="card programme-pricing-card">
                  <span className="mono acc" style={{ fontSize: ".68rem" }}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{option.title}</h3>
                  <p>{option.audience}</p>
                  <strong>{option.price}</strong>
                  <Link href={option.actionHref} className="insight-read-link acc">{option.actionLabel} →</Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-m">
            <div className="card programme-company-fee">
              <div>
                <span className="mono sec-k" style={{ fontSize: ".68rem" }}>Fees for companies</span>
                <h3>{PROGRAMME_PRICING.companies.title}</h3>
                <p>{PROGRAMME_PRICING.companies.description}</p>
                <p className="fine">{PROGRAMME_PRICING.companies.price}</p>
              </div>
              <Link href="/contact" className="btn btn-primary">Request a company proposal →</Link>
            </div>
          </Reveal>
          <p className="fine mt-s">
            <strong>{OPERATOR.name}</strong> is the authorised {OPERATOR.role} for programme enquiries,
            country-specific and localised pricing, and enrolment coordination. The applicable written proposal
            states the delivery format, certificate wording, complete price and acceptance deadline before enrolment.
          </p>
        </div>
      </section>

      {/* HONEST COMPARISON */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Defined comparison</span></div></Reveal>
          <Reveal><h2 className="sec-h">Compare scope, format, assessment and price.</h2></Reveal>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="Executive MBA investment comparison">
              <table className="cmp">
                <thead>
                  <tr><th></th><th className="us">This Executive MBA</th><th>Reference academic MBA</th></tr>
                </thead>
                <tbody>
                  {COMPARISON.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td className="us">{r.us}</td>
                      <td className="them">{r.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE} This programme is professional development approved and endorsed by CMI;
            it is not an MQA-accredited academic degree or a regulated qualification.
          </p>
        </div>
      </section>

      {/* WRITTEN REFUND TERMS */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal>
            <div
              className="guarantee-grid"
              style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 34, alignItems: "center", padding: 34, border: "1px solid var(--line-2)", borderRadius: 18, background: "linear-gradient(180deg,var(--surface),transparent)" }}
            >
              <div style={{ width: 128, height: 128, borderRadius: "50%", flex: "none", display: "grid", placeItems: "center", textAlign: "center", border: "2px solid var(--amber)", color: "var(--amber)", background: "radial-gradient(circle,rgba(232,193,124,.12),transparent 70%)", fontFamily: "var(--font-plex-mono)", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase", lineHeight: 1.5 }}>
                Written<br />Refund<br />Terms
              </div>
              <div>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>Review the terms before payment</div>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.6rem,3.4vw,2.4rem)", lineHeight: 1.1, maxWidth: "24ch" }}>
                  {REFUND_TERMS.title}
                </h2>
                <p className="sec-sub" style={{ marginTop: 14 }}>
                  {REFUND_TERMS.description}
                </p>
              </div>
            </div>
          </Reveal>
          <p className="fine mt-s">
            No income, promotion or business outcome is guaranteed. Employer-funded enrolments and HRD Corp
            grants follow the cancellation procedure in the signed enrolment terms. See the{" "}
            <Link href="/terms" className="acc">Terms &amp; Conditions</Link>.
          </p>
        </div>
        <style>{`@media(max-width:680px){.guarantee-grid{grid-template-columns:1fr!important;text-align:center;justify-items:center}}`}</style>
      </section>

      {/* HRD CORP EXPLAINER */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp claimable MBA cost</span></div></Reveal>
          <Reveal><h2 className="sec-h">Your employer applies for HRD Corp funding before training.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              {HRD_CORP_CLAIM.short}
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div className="card" style={{ display: "grid", gap: 14 }}>
              {[
                ["Who applies", "The participant's HRD Corp-registered Malaysian employer applies; the participant does not submit the grant application."],
                ["What HRD Corp decides", "HRD Corp decides employer eligibility and the approved amount under its Allowable Cost Matrix. The approved amount cannot exceed the employer's available levy balance."],
                ["How to apply", HRD_CORP_CLAIM.process],
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
          <p className="fine mt-s">
            {HRD_CORP_CLAIM.responsibility} The programme team supplies the programme documents to the
            employer: {SITE.director}, {SITE.phone} · {SITE.email}.
          </p>
          <p className="fine mt-s">
            Official reference: <a href="https://hrdcorp.gov.my/wp-content/uploads/2025/12/Jan-2026-Version_Allowable-Cost-Matrix-2025.pdf" target="_blank" rel="noopener noreferrer">HRD Corp 2026 Allowable Cost Matrix</a>. Always verify the current rules in the HRD Corp portal before submitting a claim.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Review the fee, funding process and enrolment terms." />
    </>
  );
}
