import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { FACTS, INCLUSIONS, COMPARISON, OPERATOR, PROGRAMME_PRICING, SITE } from "@/lib/content";
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
              One decision. Everything you need to lead the next chapter of your business.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              No hidden modules, no upsells, no thesis fees. The price below is the whole
              six-month professional pathway. For Malaysian participants, {FACTS.scholarshipProvider}
              provides a {FACTS.scholarshipAmt} scholarship, bringing the participant fee down to {FACTS.priceNet}.
            </p>
          </Reveal>

          <div
            className="offer-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 34, alignItems: "start" }}
          >
            {/* value stack */}
            <Reveal>
              <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 18 }}>Everything you walk away with</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "var(--surface)" }}>
                {INCLUSIONS.map((it, i) => (
                  <li key={it.b} style={{ padding: "20px 22px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 16 }}>
                    <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.14rem", display: "block" }}>{it.b}</b>
                      <span style={{ color: "var(--ink-2)", fontSize: ".93rem", display: "block", marginTop: 4 }}>{it.s}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="fine mt-s">
                No exam fees. No thesis supervision fees. No compulsory travel. The figure on the
                right is the complete cost of the {SITE.name}.
              </p>
            </Reveal>

            {/* sticky price card */}
            <Reveal delay={80}>
              <div className="card" style={{ position: "sticky", top: 90, border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))", padding: 28 }}>
                <div className="mono" style={{ color: "var(--muted)", marginBottom: 10 }}>Your investment</div>
                <div style={{ color: "var(--muted)", fontSize: ".9rem", textDecoration: "line-through", marginBottom: 6 }}>
                  Compare format, time and published fees directly with each academic MBA provider.
                </div>
                <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(3rem,7vw,4.2rem)", color: "#fff", lineHeight: 1 }}>
                  {FACTS.priceNet}
                </div>
                <p style={{ color: "var(--ink-2)", fontSize: ".95rem", margin: "10px 0 0" }}>
                  for Malaysian participants, after the {FACTS.scholarshipAmt} scholarship provided by {FACTS.scholarshipProvider} — <b style={{ color: "#fff" }}>{FACTS.priceStd}</b> standard.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, padding: ".5rem .9rem", borderRadius: 999, background: "rgba(232,193,124,.12)", border: "1px solid rgba(232,193,124,.4)", color: "var(--amber)", fontFamily: "var(--font-plex-mono)", fontSize: ".66rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  ★ Up to 100% HRD Corp claimable for eligible employers · installments
                </div>
                <Link href="/apply" className="btn btn-primary" style={{ width: "100%", marginTop: 22 }}>
                  Claim your seat →
                </Link>
                <p className="fine" style={{ marginTop: 18 }}>
                  International, fully-online participants: <b style={{ color: "var(--ink-2)" }}>{FACTS.priceIntl}</b>.
                  Installments — RHB credit card over 6–12 months, or an ABC 4-month payment plan.
                  The scholarship is for Malaysian participants, subject to confirmation of participant status,
                  cohort availability and the written scholarship terms. CMI assessment, application and ongoing membership
                  charges are governed by the applicable written enrolment terms and CMI&rsquo;s current fees.
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
            country-specific and localised pricing, and enrolment coordination. Availability, delivery format,
            certificate wording and pricing must be confirmed in the applicable written proposal before enrolment.
          </p>
        </div>
      </section>

      {/* HONEST COMPARISON */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The honest comparison</span></div></Reveal>
          <Reveal><h2 className="sec-h">What that number buys — against the alternative.</h2></Reveal>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="Executive MBA investment comparison">
              <table className="cmp">
                <thead>
                  <tr><th></th><th className="us">This Executive MBA</th><th>A traditional MBA</th></tr>
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
            This is a professional programme recognised by CMI (UK); it is not an MQA-regulated
            academic degree. Chosen for outcomes and speed, not academic equivalence.
          </p>
        </div>
      </section>

      {/* MONEY-BACK GUARANTEE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal>
            <div
              className="guarantee-grid"
              style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 34, alignItems: "center", padding: 34, border: "1px solid var(--line-2)", borderRadius: 18, background: "linear-gradient(180deg,var(--surface),transparent)" }}
            >
              <div style={{ width: 128, height: 128, borderRadius: "50%", flex: "none", display: "grid", placeItems: "center", textAlign: "center", border: "2px solid var(--amber)", color: "var(--amber)", background: "radial-gradient(circle,rgba(232,193,124,.12),transparent 70%)", fontFamily: "var(--font-plex-mono)", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase", lineHeight: 1.5 }}>
                Money<br />Back<br />Guarantee
              </div>
              <div>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>Sit the first two days at our risk</div>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.6rem,3.4vw,2.4rem)", lineHeight: 1.1, maxWidth: "24ch" }}>
                  Attend Session 1. If you don&rsquo;t see the value, we arrange a refund.
                </h2>
                <p className="sec-sub" style={{ marginTop: 14 }}>
                  Attend the two-day Session 1. If you decide the programme is not suitable, notify the
                  programme team promptly, stop participating and return all issued materials. Refund
                  scope and processing follow ABC&rsquo;s current written enrolment terms.
                </p>
              </div>
            </div>
          </Reveal>
          <p className="fine mt-s">
            No income, promotion or business-outcome guarantees are made or implied. Ask for the current
            written refund terms before payment; employer-funded and HRD Corp claims may require additional
            cancellation steps. See the <Link href="/terms" className="acc">Terms &amp; Conditions</Link>.
          </p>
        </div>
        <style>{`@media(max-width:680px){.guarantee-grid{grid-template-columns:1fr!important;text-align:center;justify-items:center}}`}</style>
      </section>

      {/* HRD CORP EXPLAINER */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp claimable MBA cost</span></div></Reveal>
          <Reveal><h2 className="sec-h">Your company may fund up to 100% through its HRD Corp levy.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The {SITE.name} is HRD Corp claimable for eligible Malaysian employers. If your company
              contributes to the Human Resource Development levy, it may apply before training to claim up to 100% of the approved programme fee
              against its available balance. Programme registration, employer eligibility and the approved amount remain subject to HRD Corp.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div className="card" style={{ display: "grid", gap: 14 }}>
              {[
                ["Who qualifies", "Employees of registered Malaysian employers contributing to the HRD Corp levy."],
                ["What it covers", "Up to 100% of the approved programme fee, subject to programme registration, prior grant approval, your company's eligibility and sufficient levy balance."],
                ["How to claim", `The ${SITE.providerShort} programme team guides your HR or finance lead through the HRD Corp submission before your cohort begins.`],
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
          <p className="fine mt-s">
            Eligibility, claimable amounts and approval are determined by HRD Corp, not by {SITE.provider}.
            Direct specific HRDC questions to the programme team — {SITE.director}, {SITE.phone} · {SITE.email} — and
            we&rsquo;ll help you confirm before you commit.
          </p>
          <p className="fine mt-s">
            Official reference: <a href="https://hrdcorp.gov.my/wp-content/uploads/2025/12/Jan-2026-Version_Allowable-Cost-Matrix-2025.pdf" target="_blank" rel="noopener noreferrer">HRD Corp 2026 Allowable Cost Matrix</a>. Always verify the current rules in the HRD Corp portal before submitting a claim.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Ready to claim your seat — or your scholarship?" />
    </>
  );
}
