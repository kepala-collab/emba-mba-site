import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { COMPARISON, COMPARISON_SCOPE, FACTS, HRD_CORP_CLAIM, SITE } from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/mba-for-working-professionals", {
  title: "Executive MBA for Working Professionals",
  description:
    "An Executive MBA for working professionals: one weekend a month during the certificate phase or fully online, with no traditional thesis.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "A part-time Executive MBA recognised against CMI Professional Standards, delivered one weekend a month during the three-month programme-certificate phase or fully online.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba`,
  inLanguage: "en-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/mba-for-working-professionals#blended-course-instance`,
    url: `${SITE.url}/mba-for-working-professionals`,
    courseMode: "blended",
    timeRequired: "P6M",
  },
};

export default function MbaForWorkingProfessionalsPage() {
  const fit = [
    { h: "One scheduled weekend a month", p: "The programme-certificate phase comprises three scheduled sessions, each running over one weekend." },
    { h: "Or fully online", p: "The programme is also available through live online sessions, with the same coaching and frameworks as the in-person track." },
    { h: "Written catch-up route", p: "If you miss a session, ABC records the approved catch-up method in writing: video access or attendance in a named later cohort." },
    { h: "Apply it to current work", p: "There is no traditional thesis or examination. Participants apply the frameworks to a business challenge they currently own." },
  ];

  const audience = [
    { h: "Owners & entrepreneurs", p: "Founders scaling past what instinct alone can carry." },
    { h: "Directors & GMs", p: "Leaders accountable for business-unit strategy, performance and delivery." },
    { h: "Senior managers", p: "Managers moving from functional delivery into cross-functional decision responsibility." },
    { h: "Established professionals", p: "Professionals accountable for strategy, transformation, innovation or growth." },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For working professionals · part-time &amp; online</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              An Executive MBA schedule designed for participants who remain <span className="acc">in their professional roles</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            The Future Ready Executive MBA is designed for participants who remain in their roles while studying.
            The programme runs across {FACTS.durationLong}. The certificate phase uses one scheduled
            weekend a month, followed by supported Chartered Manager assessment preparation for
            participants who meet CMI&rsquo;s entry criteria.
          </p>
          <p className="mono sec-k mt-s">
            Three months · three monthly programme weekends · recognised by CMI (UK)
          </p>
          <p className="sec-sub mt-s">
            Explore the full{" "}
            <Link href="/executive-mba" className="acc">Executive MBA programme</Link>, or jump
            straight to the <Link href="/intakes" className="acc">2026 intakes</Link>.
          </p>
        </div>
      </section>

      {/* 2 · How it fits your week */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">How it fits your week</span>
          </div>
          <Reveal>
            <h2 className="sec-h">A published schedule for participants who remain at work.</h2>
          </Reveal>
          <p className="sec-sub">
            Review the three session dates before enrolling. The applied project connects the programme
            to a business challenge within the participant&rsquo;s current role.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {fit.map((x) => (
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

      {/* 3 · Comparison vs a reference academic MBA */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Against a reference academic MBA</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Compare two routes with different formats and credentials.</h2>
          </Reveal>
          <p className="sec-sub">
            The reference academic MBA in this comparison runs for 18–24 months and uses academic
            assessment plus a dissertation or thesis. Here is how the two defined formats compare.
          </p>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="Executive MBA and reference academic MBA format comparison">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">This Executive MBA</th>
                    <th>Reference academic MBA</th>
                  </tr>
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
            {COMPARISON_SCOPE}{" "}
            This is a professional programme recognised by CMI (UK); it is not an MQA-regulated
            academic degree. Choose according to the credential and learning format you require. See the full{" "}
            <Link href="/fees" className="acc">fees &amp; inclusions</Link>.
          </p>
        </div>
      </section>

      {/* 4 · 2026 intakes teaser */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">2026 intakes · one weekend a month</span>
          </div>
          <Reveal>
            <h2 className="sec-h">English and Mandarin schedules for 2026.</h2>
          </Reveal>
          <p className="sec-sub">
            Current Malaysian public cohorts run 9am&ndash;6pm; Cohort 17 uses Saturday&ndash;Sunday and the other published cohorts use Friday&ndash;Saturday. A fully online option is also available.
          </p>
          <Reveal className="mt-s">
            <IntakeSchedule label="2026 working-professional intake schedule" />
          </Reveal>
          <p className="mt-s">
            <Link href="/intakes" className="btn btn-primary">See all 2026 intakes</Link>
          </p>
        </div>
      </section>

      {/* 5 · Who it's for */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Who it&apos;s for</span>
          </div>
          <Reveal>
            <h2 className="sec-h">For professionals with strategic or business-wide responsibility.</h2>
          </Reveal>
          <p className="sec-sub">
            The programme is designed for owners, directors, general managers and senior managers
            responsible for strategy, transformation, innovation or growth.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {audience.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            {HRD_CORP_CLAIM.short} Eligible Malaysian applicants may receive the {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} scholarship after assessment and written approval. Approved recipients pay {FACTS.priceAfterScholarship}.{" "}
            <Link href="/apply" className="acc">Arrange a programme conversation</Link>.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Review the schedule against your current role." />
    </>
  );
}
