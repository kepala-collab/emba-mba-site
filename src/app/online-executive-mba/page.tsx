import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, THINKING_EDGE, MODULES } from "@/lib/content";

export const metadata = {
  title: "Online Executive MBA (CMI UK) — Fully Remote",
  description:
    "A fully online, CMI (UK)-endorsed Executive MBA — 6 online days over 3 months, USD 2,500, no thesis or exams. Lead a real transformation project from anywhere in the world.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Executive MBA (CMI UK) — Future Ready",
  description:
    "A fully online, CMI (UK)-endorsed Executive MBA delivered over 6 online days across roughly 3 months. No exams or thesis — participants lead a real, ROI-driven business transformation project. A professional programme recognised against CMI Professional Standards, not an MQA-regulated academic degree.",
  provider: {
    "@type": "Organization",
    name: "Asian Business Consulting",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    timeRequired: "P3M",
  },
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "USD",
    category: "International (fully online)",
  },
};

export default function OnlineExecutiveMbaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1 · Intro */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">International · Fully online track</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              The <span className="acc">fully online</span> CMI (UK)-endorsed Executive MBA for global leaders.
            </h1>
          </Reveal>
          <p className="sec-sub">
            The International track runs entirely online — {FACTS.durationLong} — with no
            physical attendance required. Built for globally distributed and remote cohorts, it
            delivers the same framework-driven transformation as our in-person{" "}
            <Link href="/executive-mba" className="acc">Executive MBA</Link>, wherever you lead from.
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.durationLong} · {FACTS.priceIntl} per person · Awarded by CMI (UK)
          </p>
        </div>
      </section>

      {/* 2 · Why online works here */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Why online works here</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Live facilitation, real coaching — not a video library.</h2>
          </Reveal>
          <p className="sec-sub">
            This is not self-paced e-learning. Every session is live-facilitated online, paired with
            personal diagnostics, one-to-one project coaching and a permanent LMS toolkit you keep for
            life. There is no thesis and there are no exams — instead you apply each framework directly
            to your own business as you go, and leave with a board-ready transformation plan.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { h: "Live online facilitation", p: "Framework workshops delivered in real time by practitioners — no pre-recorded modules." },
              { h: "Diagnostics + 1:1 coaching", p: "Personal leadership diagnostics and project coaching applied to your real business." },
              { h: "No thesis, no exams", p: "You are assessed on an ROI-driven business project, not memorisation or written papers." },
            ].map((x) => (
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

      {/* 3 · F.A.S.T. thinking edge */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">The F.A.S.T. thinking edge</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Thinking frameworks that travel across any border.</h2>
          </Reveal>
          <p className="sec-sub">
            The programme installs a stack of thinking frameworks you can apply the moment a session
            ends — regardless of industry, market or time zone.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {THINKING_EDGE.slice(0, 4).map((t) => (
              <Reveal key={t.i}>
                <div className="card">
                  <span className="mono sec-k">{t.i}</span>
                  <h3 style={{ marginTop: 8 }}>{t.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 8 }}>{t.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · The 12 modules */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">The curriculum · 12 modules</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Twelve modules, delivered online end to end.</h2>
          </Reveal>
          <p className="sec-sub">
            The full framework curriculum is covered across your online days — from F.A.S.T.
            methodology to stakeholder ecosystem engagement.
          </p>
          <div className="mods mt-m">
            {MODULES.map((m) => (
              <div className="m" key={m.c}>
                <span className="c mono">{m.c}</span>
                <span>{m.p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Fees */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Investment</span>
          </div>
          <Reveal>
            <h2 className="sec-h">{FACTS.priceIntl} per person — inclusive.</h2>
          </Reveal>
          <p className="sec-sub">
            The International online fee of {FACTS.priceIntl} is inclusive of live online facilitation,
            leadership diagnostics, project coaching and lifetime LMS access. The programme is awarded
            by the Chartered Management Institute (CMI), UK, recognised against CMI Professional
            Standards, with a pathway to Chartered Manager. CMI brings {FACTS.cmiMembers} members and
            more than 75 years of standing behind your credential.
          </p>
          <p className="fine mt-s">
            This is a professional programme recognised by CMI (UK) — not an MQA-regulated academic
            degree. See the full <Link href="/fees" className="acc">fees &amp; inclusions</Link>.
          </p>
        </div>
      </section>

      {/* 6 · Global framing */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="l" />
            <span className="mono sec-k">A global cohort</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Learn alongside leaders from around the world.</h2>
          </Reveal>
          <p className="sec-sub">
            Because it is fully online, the International track brings together a global cohort — you
            build your thinking, and your network, alongside senior leaders across markets and
            continents. That room becomes an informal board you keep long after the final session.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">Apply for the online cohort</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Online Executive MBA" heading="Join the next global online cohort." />
    </main>
  );
}
