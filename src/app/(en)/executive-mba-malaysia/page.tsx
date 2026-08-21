import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CLIENTS, CTA_LABELS, FACTS, HRD_CORP_CLAIM, SITE } from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/executive-mba-malaysia", {
  title: "Executive MBA Malaysia for Working Leaders",
  description:
    "Three-month executive education in Malaysia for working leaders, with applied management learning, CMI recognition and an employer-led HRD Corp funding route.",
});

const REASONS = [
  {
    h: "Employer-led HRD Corp funding",
    p: `${HRD_CORP_CLAIM.short} The programme team supplies the quotation, schedule, course content and trainer documents.`,
  },
  {
    h: `Malaysian scholarship — ${FACTS.scholarshipAmount}`,
    p: `The standard fee is ${FACTS.priceStd}. Eligible Malaysian applicants may receive the ${FACTS.scholarshipProvider} scholarship after assessment and written approval. Approved recipients pay ${FACTS.priceAfterScholarship}.`,
  },
  {
    h: "A three-month programme for working leaders",
    p: "The programme uses one scheduled weekend a month, 9am–6pm, across three months. Chartered Manager is a separate optional CMI route with its own eligibility, assessment and fees.",
  },
  {
    h: "ASEAN-relevant faculty & cases",
    p: "Faculty experience includes Malaysian and regional work across corporate leadership, consulting, manufacturing, finance, talent and organisational change.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Future Ready Executive MBA recognised by CMI (UK), delivered in Malaysia and online. Employer funding may be available to eligible HRD Corp-registered employers, subject to approval.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba`,
  inLanguage: "en-MY",
  areaServed: { "@type": "Country", name: "MY" },
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/executive-mba-malaysia#malaysia-course-instance`,
    name: "Future Ready Executive MBA — Malaysia delivery",
    url: `${SITE.url}/executive-mba-malaysia`,
    courseMode: "onsite",
    offers: {
      "@type": "Offer",
      price: "10000",
      priceCurrency: "MYR",
      category: "Executive education",
      url: `${SITE.url}/executive-mba-malaysia`,
    },
  },
};

export default function ExecutiveMbaMalaysiaPage() {
  return (
    <>
      <JsonLd data={courseJsonLd} />

      {/* INTRO — Malaysia-specific */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "24ch" }}>
              An Executive MBA built for Malaysian leaders.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              The Future Ready Executive MBA is a three-month executive education and professional
              development programme for Malaysian owners, directors and senior managers. It has
              CMI (UK) Endorsed and Recognised status and is delivered through focused live sessions. <b style={{ color: "var(--ink)" }}>{HRD_CORP_CLAIM.short}</b>{" "}
              The programme is priced in ringgit at {FACTS.priceStd}. Eligible Malaysian applicants may receive a{" "}
              <b style={{ color: "var(--ink)" }}>{FACTS.scholarshipAmount} {FACTS.scholarshipProvider} scholarship</b> after assessment and written approval.
              Participants apply the programme frameworks to their own organisation, market and operating context.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              You keep working while completing three monthly weekend sessions, coaching and an applied project. Chartered Manager is a separate optional CMI route and is not included in the published programme or fee. Prefer to join from elsewhere?
              The same programme runs{" "}
              <Link href="/online-executive-mba">fully online</Link>.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
              <Link href="/fees" className="btn">Fees &amp; scholarship</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY MALAYSIAN LEADERS CHOOSE IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Why Malaysian leaders choose it</span></div></Reveal>
          <Reveal><h2 className="sec-h">Malaysian pricing, employer funding and published schedules.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              The programme combines a CMI Certificate of Recognition with Malaysian scholarship eligibility,
              an employer-led HRD Corp process and English or Mandarin cohort schedules.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {REASONS.map((r, i) => (
              <Reveal key={r.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{r.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{r.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            {HRD_CORP_CLAIM.responsibility} See{" "}
            <Link href="/hrd-corp-claimable">employer-led HRD Corp funding</Link>. Full programme
            detail on the <Link href="/executive-mba">Executive MBA</Link> page, or review the{" "}
            <Link href="/chartered-manager-malaysia">Chartered Manager route in Malaysia</Link>. If you are comparing programme categories, read{" "}
            <Link href="/insights/executive-education-vs-executive-mba">executive education vs Executive MBA</Link>.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="stats">
            <div><b>{FACTS.trainingDays}</b><span>Certificate-phase training days</span></div>
            <div><b>{FACTS.cohorts}</b><span>Cohorts in ABC programme records</span></div>
            <div><b>{FACTS.scholarshipAmount}</b><span>scholarship for eligible Malaysian applicants</span></div>
            <div><b>Before training</b><span>Employer submits HRD Corp grant application</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">ABC company profile</span></div></Reveal>
          <Reveal><h2 className="sec-h">Organisations listed by the programme provider.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider}&rsquo;s current company profile identifies the following
              organisations among its wider client and participant base:
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 12 }}>
              {CLIENTS.slice(0, 12).map((c) => (
                <li key={c} className="mono" style={{ padding: "10px 16px", border: "1px solid var(--line)", borderRadius: 999, background: "var(--surface)", color: "var(--ink-2)", fontSize: ".84rem" }}>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            Organisations named reflect the client and participant base across {SITE.providerShort}&rsquo;s
            programmes; inclusion does not imply endorsement.
          </p>
        </div>
      </section>

      {/* 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 English and Mandarin intakes</span></div></Reveal>
          <Reveal><h2 className="sec-h">English and Mandarin schedules are published.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Current Malaysian public cohorts run 9am&ndash;6pm. Cohort 17 is Saturday&ndash;Sunday;
              the other published English and Mandarin cohorts are Friday&ndash;Saturday.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <IntakeSchedule label="2026 Malaysia intake schedule" />
          </Reveal>
          <p className="mt-s">
            <Link href="/intakes" className="btn btn-primary">See all 2026 intakes</Link>
          </p>
          <p className="fine center mt-s">
            This is a professional programme recognised by CMI (UK); it is not an
            MQA-regulated academic degree. Eligible Malaysian employers may apply for HRD Corp
            funding before training; HRD Corp decides approval and the approved amount. You can <Link href="/apply">arrange a programme conversation</Link> before deciding.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the Malaysian schedule, fee and funding route." />
    </>
  );
}
