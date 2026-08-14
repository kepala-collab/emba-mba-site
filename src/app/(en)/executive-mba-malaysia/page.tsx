import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { FACTS, INTAKES, SITE, CLIENTS } from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/executive-mba-malaysia", {
  title: "Executive MBA in Malaysia (CMI UK, HRD Corp)",
  description:
    "A six-month Executive MBA pathway in Malaysia with a CMI-recognised programme certificate, CMgr preparation, scholarship and HRD Corp eligibility.",
});

const REASONS = [
  {
    h: "HRD Corp claimable",
    p: `${SITE.provider} is an HRD Corp (HRDC) Approved Training Provider running under SBL-Khas — an eligible employer may apply to claim up to 100% of the approved programme fee from its levy, subject to prior approval and sufficient balance. We prepare the paperwork.`,
  },
  {
    h: `Malaysian participant fee — ${FACTS.priceNet}`,
    p: `The standard fee is ${FACTS.priceStd}. ${FACTS.scholarshipProvider} provides Malaysian participants with a ${FACTS.scholarshipAmt} scholarship, bringing the participant fee to ${FACTS.priceNet}.`,
  },
  {
    h: "A six-month working-leader pathway",
    p: "The first three months use one scheduled weekend a month, 9am–6pm, to complete the programme-certificate phase. Months four to six provide supported Chartered Manager assessment preparation for eligible participants.",
  },
  {
    h: "ASEAN-relevant faculty & cases",
    p: "Practitioners who have led Malaysian conglomerates, advised Bank Negara Malaysia and built regional businesses — teaching from live ASEAN market conditions, not imported Western textbooks.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Future Ready Executive MBA recognised by CMI (UK), delivered in Malaysia and online. HRD Corp claimable for eligible Malaysian employers.",
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
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA · Kuala Lumpur · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "24ch" }}>
              An Executive MBA built for Malaysian leaders — in Kuala Lumpur.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              The Future Ready Executive MBA — recognised by the Chartered Management
              Institute (CMI), UK — is delivered for Malaysian owners, directors and senior
              managers through focused live sessions. It is{" "}
              eligible employers may apply to claim <b style={{ color: "var(--ink)" }}>up to 100% through HRD Corp</b>, subject to prior approval and levy balance. The programme is priced in ringgit at {FACTS.priceStd}{" "}
              (<b style={{ color: "var(--ink)" }}>{FACTS.priceNet}</b> for Malaysian participants after the {FACTS.scholarshipAmt} {FACTS.scholarshipProvider} scholarship), and built around the ASEAN market conditions your business
              actually competes in — from Bursa-listed boardrooms to family conglomerates
              navigating regional disruption.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              You keep working while completing the first three months of weekend sessions, followed by three months of supported Chartered Manager assessment preparation if you meet CMI&rsquo;s criteria. Prefer to join from elsewhere?
              The same programme runs{" "}
              <Link href="/online-executive-mba">fully online</Link>.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/apply" className="btn btn-primary">Apply for a KL cohort →</Link>
              <Link href="/fees" className="btn">Fees &amp; scholarship</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY MALAYSIAN LEADERS CHOOSE IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Why Malaysian leaders choose it</span></div></Reveal>
          <Reveal><h2 className="sec-h">Local funding, practical delivery, regional edge.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              A globally respected credential, delivered on Malaysian terms — the funding
              routes, format and faculty are all designed for how leaders here actually work.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {REASONS.map((r, i) => (
              <Reveal key={r.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{r.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{r.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            HRD Corp claims are subject to HRDC eligibility and your available levy balance —
            see <Link href="/hrd-corp-claimable">HRD Corp claimable</Link>. Full programme
            detail on the <Link href="/executive-mba">Executive MBA</Link> page.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="stats">
            <div><b>{FACTS.gradsApprox}</b><span>Malaysian leaders trained</span></div>
            <div><b>{FACTS.cohorts}</b><span>Cohorts run</span></div>
            <div><b>{FACTS.priceNet}</b><span>Malaysian participant fee</span></div>
            <div><b>Up to 100%</b><span>HRD Corp · eligibility applies</span></div>
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
            <ScrollableTableRegion kind="intake" label="2026 Kuala Lumpur intake schedule">
              <table className="intake">
                <thead>
                  <tr>
                    <th>Cohort</th>
                    <th>Language</th>
                    <th>Session 1</th>
                    <th>Session 2</th>
                    <th>Session 3</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {INTAKES.map((c) => (
                    <tr key={`${c.language}-${c.co}`}>
                      <td className="co">{c.co}</td>
                      <td>{c.language}</td>
                      <td><span className="s">{c.s1}</span></td>
                      <td><span className="s">{c.s2}</span></td>
                      <td><span className="s">{c.s3}</span></td>
                      <td className="seats">{c.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>
          </Reveal>
          <p className="mt-s">
            <Link href="/intakes" className="btn btn-primary">See all 2026 intakes</Link>
          </p>
          <p className="fine center mt-s">
            This is a professional programme recognised by CMI (UK); it is not an
            MQA-regulated academic degree. HRD Corp claimable for eligible Malaysian
            employers. You can <Link href="/apply">arrange a programme conversation</Link> before deciding.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Join Malaysia's next executive cohort." />
    </>
  );
}
