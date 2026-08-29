import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { DELIVERY_CONTROL, INTAKES, SITE } from "@/lib/content";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/intakes", {
  title: "2026 Intakes & Class Schedule",
  description:
    "English Cohorts 17–19 and Mandarin Cohorts 2–3 for the Future Ready Executive MBA. Three weekend sessions, 9am–6pm.",
});

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/intakes#course`,
  name: "Future Ready Executive MBA",
  description: "Executive MBA in Malaysia: three scheduled programme sessions. English and Mandarin 2026 schedules are published.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/intakes`,
  inLanguage: "en-MY",
  hasCourseInstance: INTAKES.map((c) => ({
    "@type": "CourseInstance",
    "@id": `${SITE.url}/intakes#${c.language.toLowerCase()}-${c.co.toLowerCase().replace(" ", "-")}`,
    name: `${SITE.name} — ${c.language} ${c.co}`,
    courseMode: "onsite",
    courseWorkload: `Three ${c.days} sessions, 9am–6pm, during the six-month programme`,
    startDate: c.startDate,
  })),
};

export default function IntakesPage() {
  return (
    <div className="wrap">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Intakes", path: "/intakes" }]} />
      <JsonLd data={courseJsonLd} />

      {/* 1 — INTRO */}
      <section className="section geo-section">
        <span className="eyebrow">
          <span className="l" /> 2026 Intakes
        </span>
        <Reveal>
          <h1 className="sec-h">
            Five published schedules for <span className="acc">2026</span>.
          </h1>
        </Reveal>
        <p className="sec-sub">
          English Cohorts 17, 18 and 19, plus Mandarin Cohorts 2 and 3, are published below. The listed weekends cover the six-month Executive MBA programme.
        </p>
        <p className="fine mt-s">
          Cohort capacity and availability are confirmed by the programme team when it responds to an enquiry.
        </p>
      </section>

      {/* 2 — INTAKE TABLE */}
      <section className="section">
        <span className="sec-k mono">The schedule</span>
        <Reveal>
          <h2 className="sec-h">Choose a cohort that fits your calendar.</h2>
        </Reveal>
        <p className="sec-sub">
          Every cohort covers the same three weekend sessions. Choose the run that lets
          you commit to all three.
        </p>

        <div className="mt-m"><IntakeSchedule label="Complete Executive MBA intake schedule" /></div>
        <p className="fine mt-s">
          Cohort 17 runs Saturday–Sunday; the other published cohorts run Friday–Saturday. All listed sessions run 9am–6pm. {DELIVERY_CONTROL.schedule}
        </p>
      </section>

      {/* 3 — HOW THE SCHEDULE WORKS */}
      <section className="section">
        <span className="sec-k mono">How the schedule works</span>
        <Reveal>
          <h2 className="sec-h">Schedule and attendance arrangements.</h2>
        </Reveal>
        <div
          className="mt-m"
          style={{ display: "grid", gap: "var(--space-4, 1rem)" }}
        >
          <div className="card">
            <h3 style={{ margin: 0 }}>Three scheduled weekends across the programme</h3>
            <p style={{ margin: "0.5rem 0 0", color: "var(--muted)" }}>
              Each session runs 9am–6pm. Cohort 17 uses Saturday–Sunday; the remaining published cohorts use Friday–Saturday. Three weekends
              during the six-month programme. Participants continue in their professional roles between sessions.
            </p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0 }}>If you cannot attend a session</h3>
            <p style={{ margin: "0.5rem 0 0", color: "var(--muted)" }}>
              Contact the programme team before the session. ABC records the approved catch-up
              method in writing: video access or attendance in a named later cohort.
            </p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0 }}>Fully online option</h3>
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

      <CtaSection programme="Executive MBA" heading="Confirm the schedule and attendance requirements." />
    </div>
  );
}
