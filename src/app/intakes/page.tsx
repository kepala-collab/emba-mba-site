import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { INTAKES, SITE, FACTS } from "@/lib/content";

export const metadata = {
  title: "2026–27 Intakes & Schedule",
  description:
    "Upcoming cohorts for the Future Ready Executive MBA in Kuala Lumpur — Cohorts 17, 18 and 19. One weekend a month at TheFoodTree@OWG, Glenmarie. Seats limited per cohort.",
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Future Ready Executive MBA",
  description: `Executive MBA in Kuala Lumpur, ${FACTS.durationLong}, one weekend a month. Cohort 17 (21–22 Aug, 18–19 Sep, 16–17 Oct), Cohort 18 (30–31 Oct, 20–21 Nov, 4–5 Dec) and Cohort 19 (Feb–Apr 2027) at ${SITE.venue}. Seats limited per cohort.`,
  provider: {
    "@type": "Organization",
    name: SITE.provider,
    sameAs: SITE.url,
  },
  hasCourseInstance: INTAKES.map((c) => ({
    "@type": "CourseInstance",
    name: `${SITE.name} — ${c.co}`,
    courseMode: "blended",
    courseWorkload: FACTS.durationLong,
    location: {
      "@type": "Place",
      name: SITE.venue,
      address: "Glenmarie, Kuala Lumpur, Malaysia",
    },
  })),
};

export default function IntakesPage() {
  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* 1 — INTRO */}
      <section className="section">
        <span className="eyebrow">
          <span className="l" /> 2026–27 Intakes
        </span>
        <Reveal>
          <h1 className="sec-h">
            Three cohorts open in <span className="acc">Kuala Lumpur</span>.
          </h1>
        </Reveal>
        <p className="sec-sub">
          Cohorts 17, 18 and 19 are now taking applications. Each runs one weekend a
          month — {FACTS.durationLong} — so you keep leading your business while you
          transform how you think.
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

        <div className="intake-wrap mt-m">
          <table className="intake">
            <thead>
              <tr>
                <th>Cohort</th>
                <th>Session 1</th>
                <th>Session 2</th>
                <th>Session 3</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {INTAKES.map((c) => (
                <tr key={c.co}>
                  <td className="co">{c.co}</td>
                  <td className="s mono">{c.s1}</td>
                  <td className="s mono">{c.s2}</td>
                  <td className="s mono">{c.s3}</td>
                  <td className="seats">{c.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine mt-s">
          Sessions run Friday–Saturday. Dates are confirmed but may shift
          slightly by venue or public-holiday adjustment.
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
              Each session runs Friday–Saturday, 9am–6pm, at {SITE.venue}. Three weekends
              across roughly three months — no nightly grind, no career break.
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
              leaders outside Malaysia sit the same cohort without travelling to Glenmarie.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — URGENCY + CTA */}
      <section className="section center">
        <Reveal>
          <h2 className="sec-h">Cohort 17 is already filling.</h2>
        </Reveal>
        <p className="sec-sub">
          Seats release in application order and the earliest cohort is the first to close.
          Reserve your place while your preferred start date is still open.
        </p>
        <div className="mt-m">
          <Link href="/apply" className="btn btn-primary">
            Apply for your seat
          </Link>
        </div>
        <p className="fine mt-s">
          Questions on dates first? WhatsApp {SITE.phone} or call the programme office.
        </p>
      </section>

      <CtaSection
        programme="Executive MBA"
        heading="Hold your seat before the cohort fills."
      />
    </div>
  );
}
