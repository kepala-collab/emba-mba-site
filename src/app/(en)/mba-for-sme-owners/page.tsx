import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, HRD_CORP_CLAIM, SITE } from "@/lib/content";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/mba-for-sme-owners", {
  title: "Executive MBA for SME Owners & Founders",
  description:
    `The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. Built for SME owners across ${FACTS.liveSessions} scheduled sessions.`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/mba-for-sme-owners#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    `The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. It is delivered for SME owners and founders across ${FACTS.liveSessions} scheduled sessions.`,
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/mba-for-sme-owners`,
  inLanguage: "en-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/mba-for-sme-owners#blended-course-instance`,
    url: `${SITE.url}/mba-for-sme-owners`,
    courseMode: "blended",
    timeRequired: "P6M",
  },
};

export default function MbaForSmeOwnersPage() {
  const challenges = [
    { h: "Operational dependence", p: "Pricing, approvals, client decisions and problem resolution still depend on the owner." },
    { h: "Limited decision capacity", p: "Business growth increases the number of decisions faster than one person can process them." },
    { h: "Strategy without protected time", p: "Immediate operational work repeatedly takes priority over market, capability and investment decisions." },
    { h: "Unclear succession", p: "Roles, decision rights and operating knowledge are not documented well enough for leadership transfer." },
    { h: "Reactive management", p: "Teams address urgent symptoms without changing the process or incentive that produces them." },
  ];

  const fit = [
    { h: `${FACTS.liveSessions} scheduled weekends across the programme`, p: `The ${FACTS.liveSessions} scheduled sessions run once a month. The published intake table states the Friday–Saturday or Saturday–Sunday schedule for each cohort.` },
    { h: "Your business is the applied project", p: "There is no traditional thesis or examination. Participants use the frameworks to develop a transformation plan for their own organisation." },
    { h: "Employer-applied HRD Corp funding", p: HRD_CORP_CLAIM.short },
    { h: "Scholarship eligibility for Malaysians", p: `Eligible Malaysian applicants may be considered, on a selective basis, for the ${FACTS.scholarshipProvider} scholarship. Any award and resulting participant fee are confirmed individually in writing; instalment options are listed on the Fees page.` },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro — name the real pain */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For SME owners &amp; founders</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              Build the systems that reduce <span className="acc">owner dependence</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            The Future Ready Executive MBA helps SME owners examine where decisions, client knowledge
            and operating control remain concentrated in one person. The programme applies systems,
            strategy and leadership frameworks to delegation, capability building, succession and growth.
          </p>
          <p className="mono sec-k mt-s">
            Six months · three scheduled programme weekends · awarded and endorsed by CMI
          </p>
          <p className="sec-sub mt-s">
            See the full{" "}
            <Link href="/executive-mba" className="acc">Executive MBA programme</Link>, or explore
            the <Link href="/curriculum" className="acc">thinking-first curriculum</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Sound familiar? */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Operating indicators</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Where owner dependence appears in the business.</h2>
          </Reveal>
          <p className="sec-sub">
            Use these indicators to identify which operating constraint the applied project should address.
          </p>
          <div className="mt-m grid-forces">
            {challenges.map((x) => (
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

      {/* 3 · What changes */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">What changes</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Move recurring decisions into defined operating systems.</h2>
          </Reveal>
          <p className="sec-sub">
            The programme focuses on the operating system around the owner: decision rights, processes,
            information flows, leadership capability and measures. It develops management capability;
            growth and return depend on the decisions and execution that follow.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">See the whole board</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Systems and first-principles thinking trace how a decision affects customers,
                  people, cash, capacity and execution before resources are committed.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Build systems, not dependencies</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Convert owner-held knowledge into documented processes, decision criteria and
                  escalation rules that other leaders can use.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Delegate with a framework</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Use situational leadership and facilitation frameworks to assign outcomes,
                  decision authority, support and review points—not only tasks.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Plan to scale or exit</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  A structured strategy gives you a defensible view of where the business goes next
                  — the groundwork for a defined scale, succession or exit plan.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="fine mt-s">
            This is a capability programme, not a guarantee of growth or returns. See how the method
            works in the <Link href="/curriculum" className="acc">curriculum</Link>.
          </p>
        </div>
      </section>

      {/* 4 · Why it fits owners */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Why it fits owners</span>
          </div>
          <Reveal>
            <h2 className="sec-h">A format that allows owners to remain in the business.</h2>
          </Reveal>
          <p className="sec-sub">
            The six-month programme uses scheduled weekend sessions, and the applied project is based
            on the participant&rsquo;s own organisation. Funding and payment routes are explained separately.
          </p>
          <div className="mt-m grid-forces">
            {fit.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            This professional programme is awarded and endorsed by CMI; it is not an MQA-regulated
            academic degree. <Link href="/apply" className="acc">{CTA_LABELS.guide}</Link>{" "}
            before choosing an intake.
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">Decide which owner dependency the programme should address.</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            Discuss your operating challenge with the programme team and confirm whether the applied
            project, schedule and participant profile fit your objectives.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the systems your business needs beyond the owner." />
    </>
  );
}
