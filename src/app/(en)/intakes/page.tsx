import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { INTAKES, SITE } from "@/lib/content";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/intakes", {
  title: "2026 Intakes & Class Schedule",
  description:
    "English Cohorts 17–19 and Mandarin Cohorts 2–3 for the Future Ready Executive MBA. Three weekend sessions, 9am–6pm.",
});

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA",
  description: "Executive MBA in Malaysia: first-three-month programme sessions followed by three months of supported Chartered Manager assessment preparation. English and Mandarin 2026 schedules are published.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba`,
  inLanguage: "en-MY",
  hasCourseInstance: INTAKES.map((c) => ({
    "@type": "CourseInstance",
    "@id": `${SITE.url}/intakes#${c.language.toLowerCase()}-${c.co.toLowerCase().replace(" ", "-")}`,
    name: `${SITE.name} — ${c.language} ${c.co}`,
    courseMode: "onsite",
    courseWorkload: `Three ${c.days} sessions, 9am–6pm, during the three-month programme-certificate phase`,
    startDate: c.startDate,
  })),
};

export default function IntakesPage() {
  return (
    <div className="wrap">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Intakes", path: "/intakes" }]} />
      <JsonLd data={courseJsonLd} />

      {/* 1 — INTRO */}
      <section className="section">
        <span className="eyebrow">
          <span className="l" /> 2026 Intakes
        </span>
        <Reveal>
          <h1 className="sec-h">
            Five published schedules for <span className="acc">2026</span>.
          </h1>
        </Reveal>
        <p className="sec-sub">
          English Cohorts 17, 18 and 19, plus Mandarin Cohorts 2 and 3, are now published. The listed weekends cover the first-three-month programme-certificate phase. Months four to six provide supported Chartered Manager assessment preparation for eligible participants, so you keep leading your business throughout the journey.
        </p>
        <p className="fine mt-s">
          Seats are limited per cohort and released in application order. When a cohort
          fills, it closes — the next start date moves further out.
        </p>
      </section>

      {/* 2 — INTAKE TABLE */}
      <section className="section">
        <span className="sec-k mono">The schedule</span>
        <Reveal>
          <h2 className="sec-h">Pick the cohort that fits your calendar.</h2>
        </Reveal>
        <p className="sec-sub">
          Every cohort covers the same three weekend sessions. Choose the run that lets
          you commit to all three.
        </p>

        <ScrollableTableRegion kind="intake" label="Complete Executive MBA intake schedule" className="mt-m">
          <table className="intake">
            <thead>
              <tr>
                <th>Cohort</th>
                <th>Language</th>
                <th>Session 1</th>
                <th>Session 2</th>
                <th>Session 3</th>
                <th>Days / time</th>
              </tr>
            </thead>
            <tbody>
              {INTAKES.map((c) => (
                <tr key={`${c.language}-${c.co}`}>
                  <td className="co">{c.co}</td>
                  <td>{c.language}</td>
                  <td className="s mono">{c.s1}</td>
                  <td className="s mono">{c.s2}</td>
                  <td className="s mono">{c.s3}</td>
                  <td className="seats">{c.days}<br />{c.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTableRegion>
        <p className="fine mt-s">
          Cohort 17 runs Saturday–Sunday; the other published cohorts run Friday–Saturday. All listed sessions run 9am–6pm. Dates are confirmed but may shift
          slightly due to operational or public-holiday adjustments.
        </p>
      </section>

      {/* 3 — HOW THE SCHEDULE WORKS */}
      <section className="section">
        <span className="sec-k mono">How the schedule works</span>
        <Reveal>
          <h2 className="sec-h">Built for people who cannot pause their careers.</h2>
        </Reveal>
        <div
          className="mt-m"
          style={{ display: "grid", gap: "var(--space-4, 1rem)" }}
        >
          <div className="card">
            <h3 style={{ margin: 0 }}>One weekend a month</h3>
            <p style={{ margin: "0.5rem 0 0", color: "var(--muted)" }}>
              Each session runs 9am–6pm. Cohort 17 uses Saturday–Sunday; the remaining published cohorts use Friday–Saturday. Three weekends
              during the three-month programme-certificate phase — no nightly grind, no career break.
            </p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0 }}>Miss a session? You still finish.</h3>
            <p style={{ margin: "0.5rem 0 0", color: "var(--muted)" }}>
              If work pulls you away, catch up by video before the next weekend — or re-sit
              that session with a later cohort at no extra cost. No penalty, no falling
              behind.
            </p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0 }}>Overseas? Join fully online.</h3>
            <p style={{ margin: "0.5rem 0 0", color: "var(--muted)" }}>
              The International option delivers the same programme entirely online, so
              leaders outside Malaysia can join without travelling.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — URGENCY + CTA */}
      <section className="section center">
        <Reveal><h2 className="sec-h">Discuss the calendar before you decide.</h2></Reveal>
        <p className="sec-sub">
          Tell the programme team which dates and language suit you. You can arrange a short call,
          an online information meeting or an in-person meeting at an agreed location without applying or paying.
        </p>
        <div className="mt-m">
          <Link href="/apply" className="btn btn-primary">
            Arrange a programme conversation
          </Link>
        </div>
        <p className="fine mt-s">
          Questions on dates first? WhatsApp {SITE.phone} or call the programme office.
        </p>
      </section>

      <CtaSection
        programme="Executive MBA"
        heading="Choose the schedule first. Decide after the conversation."
      />
    </div>
  );
}
