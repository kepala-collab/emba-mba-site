import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, THINKING_EDGE, MODULES, SITE } from "@/lib/content";
import JsonLd from "@/components/site/JsonLd";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";

export const metadata = withSeo("/online-executive-mba", {
  title: "Online Executive MBA (CMI UK) — Fully Remote",
  description:
    "Join the three-month Future Ready Executive MBA online through live sessions and an applied project.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "A three-month professional Executive MBA recognised against CMI Professional Standards and available online across six live training days.",
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
    timeRequired: "P3M",
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
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">International · Fully online track</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              The <span className="acc">fully online</span> route for participants joining from any country.
            </h1>
          </Reveal>
          <p className="sec-sub">
            The International track follows the same three-month structure as the in-person{" "}
            <Link href="/executive-mba" className="acc">Executive MBA</Link> without requiring travel.
            The three-month programme comprises live sessions, coaching and an applied business project.
            Chartered Manager is a separate optional CMI route with its own eligibility, assessment and fees.
          </p>
          <p className="mono sec-k mt-s">
            Three-month programme · {FACTS.priceIntl} per person · Recognised against CMI Professional Standards
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
            <h2 className="sec-h">Live sessions, individual coaching and an applied project.</h2>
          </Reveal>
          <p className="sec-sub">
            This is a live, facilitator-led programme rather than a self-paced video course. It includes
            personal diagnostics, one-to-one project coaching and continued access to the programme LMS.
            There is no traditional thesis or examination in the three-month programme. Participants
            apply the frameworks to their own organisational context and submit a transformation plan for faculty review.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { h: "Live online facilitation", p: "Practitioners deliver the framework workshops in real time." },
              { h: "Diagnostics + 1:1 coaching", p: "Personal leadership diagnostics and project coaching are applied to the participant's organisational context." },
              { h: "Applied assessment", p: "Participants complete an applied business project instead of a traditional thesis or examination." },
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
            <span className="mono sec-k">The F.A.S.T. method</span>
          </div>
          <Reveal>
            <h2 className="sec-h">A consistent decision method across locations and industries.</h2>
          </Reveal>
          <p className="sec-sub">
            The programme teaches seven thinking disciplines for analysing business context, testing
            assumptions, comparing options and planning action. The four examples below form part of that method.
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
            project coaching and retained LMS access. {CERTIFICATE_POSITIONING.distinction} During months
            four to six, participants who meet CMI&rsquo;s entry criteria receive support to prepare for CMI&rsquo;s
            separate Chartered Manager assessment. CMI awards CMgr MCMI only after successful assessment.
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
            <h2 className="sec-h">Open to participants irrespective of country.</h2>
          </Reveal>
          <p className="sec-sub">
            The online format accepts participants irrespective of country. Cohort composition is confirmed
            from the participants enrolled in that intake; no country mix is promised in advance.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Online Executive MBA" heading="Discuss the fully online route and next intake." />
    </>
  );
}
