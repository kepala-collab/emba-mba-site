import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, THINKING_EDGE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ai-executive-mba", {
  title: "AI-Ready Executive MBA — Lead the AI Era",
  description:
    "An AI-ready Executive MBA recognised by CMI (UK): build an AI-driven business strategy during the first three monthly sessions of a six-month professional pathway.",
});

const BUSINESS_PILLARS = [
  ["AI Strategy", "Build an AI-ready, innovation-driven business strategy from first principles."],
  ["Data Insights", "Turn raw signals into decisions — read the board before competitors do."],
  ["Automation", "Redesign how work gets done so your team compounds output, not busywork."],
  ["Innovation", "Make innovation the operating currency, not a once-a-year offsite."],
  ["Growth", "Transform a traditional business into a future-ready, scalable organisation."],
];

const CAREER_PILLARS = [
  ["Leadership", "Lead transformation in an AI era, not just manage yesterday's operations."],
  ["Future Skills", "Install the durable, human skills automation can't replace."],
  ["Decision Making", "Decide faster under uncertainty using AI-enabled frameworks."],
  ["Influence", "Move stakeholders and teams toward a shared, future-facing vision."],
  ["Impact", "Convert new thinking into measurable results your board can see."],
];

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">AI-Ready Leadership · Recognised by CMI (UK)</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              AI is reshaping industries. Innovation is the new <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>currency.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              This is the same CMI (UK)-recognised <Link href="/executive-mba" className="acc">Future-Ready Executive MBA</Link>, seen through an
              AI lens. It gives you the mindset, strategies and practical tools to lead with impact, drive transformation and
              future-proof your career — in <b style={{ color: "#fff" }}>{FACTS.durationLong}</b>.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              Lead today. <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Transform tomorrow.</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">Talk to the programme team →</Link>
              <Link href="/how-it-works" className="btn btn-ghost">See how it works</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">What you&rsquo;ll build with AI</span></div></Reveal>
          <Reveal><h2 className="sec-h">Two engines: an AI-ready business, and an AI-ready you.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            You leave able to build an AI-ready, innovation-driven business strategy and transform a traditional
            organisation into a future-ready one — while sharpening the leadership that makes it stick.
          </p></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Business · AI Strategy · Data · Automation · Innovation · Growth</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {BUSINESS_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Career · Leadership · Future Skills · Decisions · Influence · Impact</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {CAREER_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 3 · CONTEXT OVER CONTENT */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Context over content</span></div></Reveal>
          <Reveal><h2 className="sec-h">In an AI era, the edge is asking better questions — not memorising answers.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            AI already holds the content. Our <Link href="/how-it-works" className="acc">F.A.S.T. method</Link> teaches you to prompt it well,
            frame the real problem and ask the questions most leaders never think to — so AI becomes leverage, not a crutch.
            These are the same thinking disciplines the programme installs, now aimed squarely at AI-enabled decisions.
          </p></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {THINKING_EDGE.slice(0, 3).map((e) => (
              <div key={e.i} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>{e.i}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "14px 0 8px" }}>{e.h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{e.p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 4 · SAME-PROGRAMME FACTS STRIP */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Same programme · Same credential</span></div></Reveal>
          <Reveal><h2 className="sec-h">An AI angle on a professional programme recognised by CMI (UK).</h2></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["Recognised by CMI (UK)", "The programme is recognised against CMI Professional Standards and is not an MQA-regulated academic degree."],
              ["HRD Corp", "Eligible registered employers may apply to claim up to 100% of the approved fee, subject to prior approval and sufficient levy balance."],
              ["Format", "Six-month professional pathway: three monthly programme sessions, then supported CMgr assessment preparation for eligible participants."],
              ["Investment", FACTS.priceStd + " standard → " + FACTS.priceNet + " for Malaysian participants after the " + FACTS.scholarshipAmt + " LIFE Innoversity scholarship."],
              ["No exams, no thesis", "You leave with a board-ready, AI-ready transformation plan for your own business."],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            This is a professional programme recognised by CMI (UK) — not an MQA-regulated academic degree. It builds
            AI-ready leadership and strategy; it does not guarantee any specific income or business outcome.
          </p></Reveal>
        </div>
      </section>

      {/* 5 · URGENCY + CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            The AI shift isn&rsquo;t waiting for your next planning cycle.
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            Every quarter you delay, competitors compound their advantage. Seats are limited per cohort — start the
            conversation now and we&rsquo;ll map the AI-ready path for you and your business.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/apply" className="btn btn-primary">Apply now →</Link>
            <Link href="/executive-mba" className="btn btn-ghost">Explore the full programme</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection programme="AI Executive MBA" heading="Future-proof your business. Future-proof yourself." />
    </>
  );
}
