import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, THINKING_EDGE } from "@/lib/content";

export const metadata = {
  title: "Executive MBA for Entrepreneurs & Founders",
  description:
    "A founder-speed Executive MBA: install strategic + first-principles thinking and AI fluency to build, scale and lead your venture — 6 days over 3 months, CMI (UK)-endorsed. No 2-year detour.",
};

export default function MbaForEntrepreneursPage() {
  const firstPrinciples = THINKING_EDGE.find((t) => t.i.includes("First-Principle"));
  const systems = THINKING_EDGE.find((t) => t.i.includes("Systems"));
  const framework = THINKING_EDGE.find((t) => t.i.includes("Framework"));

  const built = [
    {
      h: "First-principles problem solving",
      p: `${firstPrinciples?.p ?? "Strip a problem to its atoms and rebuild a disruptive answer."} It is how founders find the wedge competitors can't see.`,
    },
    {
      h: "Business-model & JTBD thinking",
      p: "Design around the job your customer is truly hiring you to do — so you build product and pricing the market actually pulls, not what you hope it wants.",
    },
    {
      h: "AI fluency, built in",
      p: "Use AI as leverage across strategy, research and execution — the multiplier a lean founding team runs on.",
    },
    {
      h: "Board- & investor-grade strategy",
      p: `${systems?.p ?? "Trace cause to third-order consequence before you commit."} Speak the language of the board and the term sheet with a strategy that holds up under scrutiny.`,
    },
    {
      h: "A network of operators",
      p: "A room of founders, directors and GMs who become your informal board — the peers you call when the next hard decision lands.",
    },
    {
      h: "Structure for the chaos",
      p: framework?.p ?? "Turn overwhelming complexity into a decision you can act on.",
    },
  ];

  const format = [
    { h: "Six days, not two years", p: `The whole programme runs across ${FACTS.durationLong}. You keep shipping while you learn — no runway burned on a career pause.` },
    { h: "One weekend a month, or online", p: "Sessions land one weekend a month, with a fully online track. Fit it around the launch, the raise and the customer calls that can't move." },
    { h: "Applied the moment you learn it", p: "No thesis, no exams. Every framework goes straight into the venture you're building — the value shows up in this quarter's work." },
    { h: "Catch up without penalty", p: "Travelling for a pitch or heads-down on a release? Catch a session by video or re-sit it with a later cohort at no extra cost." },
  ];

  return (
    <main>
      {/* 1 · Intro */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For entrepreneurs &amp; startup founders</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              Founders don&apos;t have two years. <span className="acc">You need the frameworks now.</span>
            </h1>
          </Reveal>
          <p className="sec-sub">
            You&apos;re building a venture in real time — deciding what to ship, where to focus and how to
            spend runway that won&apos;t wait. A traditional MBA asks you to step off the field for eighteen
            months to learn theory. That&apos;s not a trade a founder can make. The Future Ready Executive
            MBA installs the thinking a founder actually runs on — first-principles problem solving,
            systems thinking and Job-To-Be-Done value creation — in {FACTS.durationLong}, applied to the
            business you&apos;re building right now.
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.durationLong} · one weekend a month or fully online · CMI (UK)-endorsed
          </p>
          <p className="sec-sub mt-s">
            See the full{" "}
            <Link href="/executive-mba" className="acc">Executive MBA programme</Link>, or how the{" "}
            <Link href="/how-it-works" className="acc">method works</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Built for how founders move */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Built for how founders move</span>
          </div>
          <Reveal>
            <h2 className="sec-h">The thinking that turns an idea into a venture that scales.</h2>
          </Reveal>
          <p className="sec-sub">
            Not a survey of management theory — a compact set of frameworks you deploy the moment the
            next decision lands. Speed comes from application, not seat-time.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {built.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            AI runs through the whole programme, not a bolt-on module — see the{" "}
            <Link href="/ai-executive-mba" className="acc">AI-powered Executive MBA</Link>.
          </p>
        </div>
      </section>

      {/* 3 · Apply to your venture */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Applied to your venture</span>
          </div>
          <Reveal>
            <h2 className="sec-h">The capstone is a real growth plan for your business.</h2>
          </Reveal>
          <p className="sec-sub">
            There is no case study and no thesis. Your capstone is a live plan for the venture you&apos;re
            actually building — where growth comes from, what the model has to become, and the moves
            that get you there. You leave with a board-ready strategy you can put in front of a
            co-founder, a board or an investor. Every framework is stress-tested against your real
            numbers and your real market, so the work you do in the room is the work your business
            needs — not an academic exercise you file and forget.
          </p>
          <p className="fine mt-s">
            No funding or growth is promised — the frameworks and the plan are yours; the outcomes
            depend on how you execute. See how the{" "}
            <Link href="/how-it-works" className="acc">method builds toward the capstone</Link>.
          </p>
        </div>
      </section>

      {/* 4 · Why the format works for founders */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Why the format works for founders</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Keep building while you level up.</h2>
          </Reveal>
          <p className="sec-sub">
            The format is designed for people who can&apos;t disappear for two years. It slots into a
            founder&apos;s week and pays back in the venture itself.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {format.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section">
        <div className="wrap center">
          <Reveal>
            <h2 className="sec-h">Ready to build like the founder your venture needs?</h2>
          </Reveal>
          <p className="sec-sub">
            Bring the venture you&apos;re building. In {FACTS.durationLong} you&apos;ll leave with the frameworks,
            the AI fluency and a growth plan you can act on — for {FACTS.priceStd}, or {FACTS.priceNet}{" "}
            with the scholarship for Malaysian participants.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">Start your application</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Think like the founder your venture needs." />
    </main>
  );
}
