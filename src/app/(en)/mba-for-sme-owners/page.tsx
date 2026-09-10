import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, HRD_CORP_CLAIM, SITE } from "@/lib/content";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/mba-for-sme-owners", {
  title: "Executive MBA for SME Owners & Founders",
  description:
    `From decisions in your head to decisions in writing: the applied business project takes one operating issue to a faculty-reviewed plan across ${FACTS.durationLong}. Professional programme recognised against CMI Professional Standards, not an MQA-accredited academic degree.`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/mba-for-sme-owners#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    `Owners take one operating issue, pricing, succession or a client dependency, from problem to a written plan with owners and measures, reviewed by faculty, across ${FACTS.durationLong} and ${FACTS.liveSessions} scheduled sessions. Professional programme recognised against CMI Professional Standards, not an MQA-accredited academic degree.`,
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
    { h: "Pricing and approvals", p: "Pricing calls, approvals and client decisions still route through you." },
    { h: "Decision volume", p: "Growth adds decisions faster than one person can work through them." },
    { h: "Protected time for strategy", p: "Operational work takes the time that market, capability and investment decisions need." },
    { h: "Succession not yet written down", p: "Roles, decision rights and operating knowledge are not yet documented for someone else to carry." },
    { h: "The same problem, addressed again", p: "The team responds to the symptom without changing the process or incentive that produces it." },
  ];

  const fit = [
    { h: `${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions`, p: "The published intake table states the Friday–Saturday or Saturday–Sunday schedule for each cohort." },
    { h: "Your own business is the applied project", p: "The applied business project is a written plan for faculty review, built on your own organisation — no traditional thesis or examination." },
    { h: "Employer-applied HRD Corp funding", p: HRD_CORP_CLAIM.short },
    { h: "Scholarship eligibility for Malaysians", p: `${FACTS.scholarshipEligibility} The scholarship is never automatic; instalment options are listed on the Fees page.` },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro — name the change of experience */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For SME owners &amp; founders</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              From decisions in your head to <span className="acc">decisions in writing</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            Owners carry client knowledge, pricing calls and operating control in their own heads.
            Across {FACTS.durationLong} the applied business project takes one operating issue — pricing,
            succession or a client dependency — from problem to a written plan with owners and measures,
            reviewed by faculty. It develops management capability; growth and return depend on the
            decisions and execution that follow.
          </p>
          <p className="sec-sub mt-s">
            {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, one-to-one
            coaching and an applied business project on an issue within your own responsibility. The
            frameworks and working templates stay with you.
          </p>
          <p className="sec-sub mt-s">
            {CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance}
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.priceStd} standard fee · {HRD_CORP_CLAIM.label}. {FACTS.scholarshipEligibility} The
            scholarship is never automatic. An enquiry does not commit you to enrol or pay.
          </p>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide}</Link>
              <Link href="/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.company}</Link>
            </div>
          </Reveal>
          <p className="sec-sub mt-s">
            See the full{" "}
            <Link href="/executive-mba" className="acc">Executive MBA programme</Link>, or explore
            the <Link href="/curriculum" className="acc">thinking-first curriculum</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Where the business depends on you */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Operating indicators</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Where the business depends on you.</h2>
          </Reveal>
          <p className="sec-sub">
            These are the operating conditions the applied project can work on — not a verdict on how
            you run the business.
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

      {/* 3 · What changes, in 5S order */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">What changes</span>
          </div>
          <Reveal>
            <h2 className="sec-h">One operating issue becomes a written plan.</h2>
          </Reveal>
          <p className="sec-sub">
            The applied business project works on the operating system around you: decision rights,
            processes, information flows, leadership capability and measures. It develops management
            capability; growth and return depend on the decisions and execution that follow.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">The business runs without you in the room</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Decision criteria and escalation rules are written down, so operations continue while
                  you are in a session.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Succession has a written plan</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Roles, decision rights and operating knowledge move from your memory into a document
                  faculty can review.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">The team acts on decisions, not only tasks</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Situational leadership and facilitation frameworks assign outcomes, decision authority,
                  support and review points to the people who carry them.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Other leaders are built, not only delegated to</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  The plan is for the people who depend on your decisions: the team that carries it, the
                  customers it is meant for, and whoever leads the business after you.
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
            <h2 className="sec-h">A format that keeps you in the business.</h2>
          </Reveal>
          <p className="sec-sub">
            Across {FACTS.durationLong} you stay in your role, and the applied project is worked on your
            own organisation. Funding and payment routes are explained separately.
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
            {CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance}{" "}
            <Link href="/apply" className="acc">{CTA_LABELS.guide}</Link>{" "}
            before choosing an intake.
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">Decide which operating issue the applied project should take on.</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            The plan you build is for the people who depend on your decisions. Discuss the issue you
            are weighing with the programme team and confirm whether the applied project, schedule and
            participant profile fit. An enquiry does not commit you to enrol or pay.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Get the facts for the operating issue in front of you." />
    </>
  );
}
