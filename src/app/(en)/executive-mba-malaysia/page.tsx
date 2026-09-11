import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { ABC_PROFILE, CERTIFICATE_POSITIONING, CLIENTS, CTA_LABELS, FACTS, HRD_CORP_CLAIM, SITE } from "@/lib/content";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/executive-mba-malaysia", {
  title: "Executive MBA Malaysia for Working Leaders",
  description:
    "For Malaysian owners, directors and senior managers: take one live business issue to a faculty-reviewed plan across six months, with the standard fee, scholarship eligibility and employer-led HRD Corp funding confirmed in writing.",
});

const TERMS = [
  {
    h: "Employer-led HRD Corp funding",
    p: `${HRD_CORP_CLAIM.short} The programme team supplies the quotation, schedule, course content and trainer documents.`,
  },
  {
    h: "Malaysian scholarship eligibility",
    p: `The standard fee is ${FACTS.priceStd}. ${FACTS.scholarshipEligibility}`,
  },
  {
    h: "Six months alongside your role",
    p: `You complete ${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions, 9am–6pm, across ${FACTS.durationLong}, while you continue in your role. Chartered Manager is a separate optional CMI route with its own eligibility, assessment and fees.`,
  },
  {
    h: "ASEAN-relevant faculty & cases",
    p: "Faculty experience includes Malaysian and regional work across corporate leadership, consulting, manufacturing, finance, talent and organisational change.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/executive-mba-malaysia#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "The Executive MBA on Future Ready Business Leadership takes one live business issue in a Malaysian participant's own responsibility to a written action plan reviewed by faculty across six months, while the participant continues working. It is awarded and endorsed by CMI, delivered in Malaysia and online; employer-led HRD Corp funding may be available to eligible registered employers, subject to approval.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba-malaysia`,
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
              From your own live issue to a faculty-reviewed plan.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Malaysian owners, directors and senior managers carry decisions the rest of the business is waiting on.
              Across {FACTS.durationLong}, the applied business project takes one of those decisions — a pricing call, a
              succession question, an operating issue in your own responsibility — from problem to a written plan with
              decisions, actions, owners and measures, reviewed by faculty, while you continue in your role.{" "}
              {ABC_PROFILE.programmePositioning} {CERTIFICATE_POSITIONING.professionalRelevance}
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              You complete {FACTS.trainingDays} training days across {FACTS.liveSessions} scheduled sessions, one-to-one
              coaching and the applied project, while you keep working. Chartered Manager is a separate optional CMI
              route, decided by CMI, and is not included in the programme or its published fee.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              {FACTS.priceStd} standard fee. {FACTS.scholarshipEligibility}{" "}
              <b style={{ color: "var(--ink)" }}>{HRD_CORP_CLAIM.short}</b>
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} →</Link>
              <Link href="/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.company}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TERMS CONFIRMED FOR MALAYSIA */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Terms confirmed for Malaysia</span></div></Reveal>
          <Reveal><h2 className="sec-h">The fee, the funding route and the schedule, confirmed in writing.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Malaysian scholarship eligibility, an employer-led HRD Corp process and English or Mandarin cohort
              schedules sit alongside the standard fee, each confirmed individually in writing.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {TERMS.map((r, i) => (
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
            <div><b>{FACTS.trainingDays}</b><span>Training days across the six months</span></div>
            <div><b>{FACTS.cohorts}</b><span>Cohorts in ABC programme records</span></div>
            <div><b>Eligibility</b><span>scholarship assessment for Malaysian applicants</span></div>
            <div><b>Before training</b><span>Employer submits HRD Corp grant application</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section section--alt">
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
            {CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance} Eligible Malaysian
            employers may apply for HRD Corp funding before training; HRD Corp decides approval and the approved
            amount. You can also <Link href="/apply">arrange a programme conversation</Link> before deciding.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the Malaysian schedule, fee and funding route." />
    </>
  );
}
