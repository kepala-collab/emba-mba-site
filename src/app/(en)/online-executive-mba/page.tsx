import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, THINKING_EDGE, MODULES, SITE } from "@/lib/content";
import JsonLd from "@/components/site/JsonLd";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";

export const metadata = withSeo("/online-executive-mba", {
  title: "Online Executive MBA (CMI UK) — Fully Remote",
  description:
    "Join the six-month Future Ready Executive MBA pathway online: live programme sessions, an applied project and supported CMgr preparation for eligible participants.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "A professional Executive MBA recognised against CMI Professional Standards and available as a fully online course instance over six live training days during the three-month programme-certificate phase.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba`,
  inLanguage: "en-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/online-executive-mba#course-instance`,
    name: "Future Ready Executive MBA — fully online delivery",
    url: `${SITE.url}/online-executive-mba`,
    courseMode: "online",
    timeRequired: "P6M",
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "USD",
      category: "International (fully online)",
    },
  },
};

export default function OnlineExecutiveMbaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">International · Fully online track</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              The <span className="acc">fully online</span> Executive MBA recognised by CMI (UK) for global leaders.
            </h1>
          </Reveal>
          <p className="sec-sub">
            The International track runs entirely online. The first three months deliver the live programme and project; the next three provide supported CMgr assessment preparation for eligible participants, with no physical attendance required. Built for globally distributed and remote cohorts, it
            delivers the same framework-driven transformation as our in-person{" "}
            <Link href="/executive-mba" className="acc">Executive MBA</Link>, wherever you lead from.
          </p>
          <p className="mono sec-k mt-s">
            Six-month professional pathway · {FACTS.priceIntl} per person · Recognised against CMI Professional Standards
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
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
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
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
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
            The global online public-programme fee of {FACTS.priceIntl} per person applies irrespective of
            the participant&rsquo;s country and is inclusive of live online facilitation, leadership diagnostics,
            project coaching and lifetime LMS access. The programme certificate states that the programme
            is recognised against CMI Professional Standards. Eligible graduates may separately apply for Chartered Manager subject to CMI requirements. CMI brings {FACTS.cmiMembers} members and
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
    </>
  );
}
