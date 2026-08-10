import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { COMPARISON, FACTS, FAQS } from "@/lib/content";

export const metadata = {
  title: "Executive MBA vs a Traditional MBA — Which Is Worth It?",
  description:
    "Executive MBA vs a traditional MBA: time, cost, format and outcomes compared. A CMI (UK)-endorsed Future Ready Executive MBA — 3 months to certification (a 6-month programme with Chartered Manager) vs 1.5–2 years — decide what actually fits a working leader.",
};

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS.filter((f) =>
  ["Is it MQA-recognised?", "How is the programme structured?", "What if it isn't worth it?"].includes(f.q)
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ExecutiveMbaVsMbaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* INTRO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA vs MBA · the honest version</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA vs a traditional MBA — which is actually worth it?
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              If you&rsquo;re a busy leader weighing the two, you don&rsquo;t need a brochure — you need a
              straight comparison. Below is an honest look at time, cost, format and outcomes, so you
              can decide what fits your career rather than pause it. One caveat we&rsquo;ll repeat: the
              {" "}<Link href="/executive-mba" className="acc">Future Ready Executive MBA</Link> is a
              professional programme recognised by CMI (UK), not an MQA-regulated academic degree — so
              the right choice genuinely depends on what you need the credential to do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Side by side</span></div></Reveal>
          <Reveal><h2 className="sec-h">Six things leaders actually compare.</h2></Reveal>
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
            Traditional-MBA figures are typical ranges and vary widely by school and country. This is a
            professional programme recognised by CMI (UK); it is not equivalent to, or a substitute for,
            an MQA-regulated academic degree. See the full <Link href="/fees" className="acc">investment breakdown</Link>.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Who should choose which</span></div></Reveal>
          <Reveal><h2 className="sec-h">There&rsquo;s no universal winner — only the right fit.</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>Choose a traditional academic MBA if…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  You need a regulated degree — or a full career reset.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  If your goal requires an MQA-accredited or academic qualification — for a licensing
                  body, a PhD pathway, an academic career, or a hard credential ceiling in your sector —
                  a traditional MBA is the correct route. It also suits those switching industries
                  entirely and willing to invest 1.5–2 years and the higher fee to do it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>Choose this Executive MBA if…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "#fff" }}>
                  You&rsquo;re a working leader who needs judgment, speed and a credential — without pausing your career.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  If you already lead and want sharper thinking, AI-enabled decision frameworks and a
                  globally respected CMI (UK) credential applied to your real business — in
                  {" "}{FACTS.durationLong}, one weekend a month — this is built for you. No thesis, no
                  exams, no career break.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:760px){.choose-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* IS IT WORTH IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Is an executive MBA worth it?</span></div></Reveal>
          <Reveal><h2 className="sec-h">A candid answer.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              &ldquo;Worth it&rdquo; depends on what you&rsquo;re optimising for. If you measure value by the
              academic letters after your name, an MQA-regulated degree is the honest answer — and we&rsquo;ll
              tell you so. If you measure it by the return on time and money — better decisions, sharper
              strategy, a credential you earn in {FACTS.durationShort} rather than years, and a network of
              senior peers — then a programme like this can be worth considerably more than its
              {" "}<Link href="/fees" className="acc">{FACTS.priceNet} scholarship price</Link> (from {FACTS.priceStd} standard).
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              We won&rsquo;t promise a raise, a promotion or a business outcome — no honest programme can, and
              anyone who does should worry you. What we will say plainly: you keep earning while you learn,
              you apply every framework to your own business as you go, and if Session 1 doesn&rsquo;t change how
              you think, you can withdraw for a refund. For most working leaders, that risk-to-reward ratio
              is the real test of &ldquo;worth it&rdquo; — not the price tag alone.
            </p>
          </Reveal>
          <Reveal className="center mt-m">
            <Link href="/apply" className="btn btn-primary">See if it fits your goals →</Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Common questions</span></div></Reveal>
          <Reveal><h2 className="sec-h">The questions leaders ask before deciding.</h2></Reveal>
          <div className="mt-s">
            {PAGE_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Read every question in full on the <Link href="/faq" className="acc">FAQ</Link>, or
            {" "}<Link href="/apply" className="acc">apply now</Link> and the programme team will be in touch.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Decided it fits? Let's talk about your intake." />
    </>
  );
}
