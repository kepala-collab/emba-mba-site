import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, INCLUSIONS, COMPARISON, SITE } from "@/lib/content";

export const metadata = {
  title: "Investment, Scholarship & HRD Corp",
  description:
    "The Future Ready Executive MBA is RM10,000 — or RM5,000 with the Malaysian EMBA Scholarship. HRD Corp claimable, installments available, and money-back guaranteed after Session 1.",
};

export default function FeesPage() {
  return (
    <>
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
              programme — and for Malaysians, the Malaysian EMBA Scholarship halves it.
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
                  A traditional MBA: 1.5–2 yrs · RM60,000–150,000+
                </div>
                <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(3rem,7vw,4.2rem)", color: "#fff", lineHeight: 1 }}>
                  {FACTS.priceNet}
                </div>
                <p style={{ color: "var(--ink-2)", fontSize: ".95rem", margin: "10px 0 0" }}>
                  after the Malaysian EMBA Scholarship — <b style={{ color: "#fff" }}>{FACTS.priceStd}</b> standard.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, padding: ".5rem .9rem", borderRadius: 999, background: "rgba(232,193,124,.12)", border: "1px solid rgba(232,193,124,.4)", color: "var(--amber)", fontFamily: "var(--font-plex-mono)", fontSize: ".66rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  ★ HRD Corp claimable · installments
                </div>
                <Link href="/apply" className="btn btn-primary" style={{ width: "100%", marginTop: 22 }}>
                  Claim your seat →
                </Link>
                <p className="fine" style={{ marginTop: 18 }}>
                  International, fully-online participants: <b style={{ color: "var(--ink-2)" }}>{FACTS.priceIntl}</b>.
                  Installments — RHB credit card over 6–12 months, or an ABC 4-month payment plan.
                  The scholarship is for Malaysian participants.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:860px){.offer-grid{grid-template-columns:1fr!important}.offer-grid .card{position:static!important}}`}</style>
      </section>

      {/* HONEST COMPARISON */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">The honest comparison</span></div></Reveal>
          <Reveal><h2 className="sec-h">What that number buys — against the alternative.</h2></Reveal>
          <Reveal className="mt-s">
            <div className="cmp-wrap">
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
            </div>
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
                  Come to the two-day Session 1. If the frameworks don&rsquo;t change how you think about
                  your business, return the manual and we arrange a refund within a month. The risk of
                  finding out sits with us — not with you.
                </p>
              </div>
            </div>
          </Reveal>
          <p className="fine mt-s">
            No income, promotion or business-outcome guarantees are made or implied — only that you
            can withdraw for a refund after Session 1 as described above.
          </p>
        </div>
        <style>{`@media(max-width:680px){.guarantee-grid{grid-template-columns:1fr!important;text-align:center;justify-items:center}}`}</style>
      </section>

      {/* HRD CORP EXPLAINER */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp claimable MBA cost</span></div></Reveal>
          <Reveal><h2 className="sec-h">Can your company fund it? Very likely — yes.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The {SITE.name} is HRD Corp claimable for eligible Malaysian employers. If your company
              contributes to the Human Resource Development levy, the programme fee can typically be
              claimed against your available balance — turning a personal cost into a funded
              investment in your leadership.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div className="card" style={{ display: "grid", gap: 14 }}>
              {[
                ["Who qualifies", "Employees of registered Malaysian employers contributing to the HRD Corp levy."],
                ["What it covers", "The programme fee, subject to your company's eligibility and available levy balance."],
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
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Ready to claim your seat — or your scholarship?" />
    </>
  );
}
