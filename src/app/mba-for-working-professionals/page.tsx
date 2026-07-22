import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, INTAKES, SITE, COMPARISON } from "@/lib/content";

export const metadata = {
  title: "Executive MBA for Working Professionals",
  description:
    "An Executive MBA built around your career, not against it — one weekend a month for 3 months (or fully online). CMI (UK)-endorsed, HRD Corp claimable, no thesis. Keep working while you level up.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Executive MBA for Working Professionals — Future Ready",
  description:
    "A part-time, CMI (UK)-endorsed Executive MBA for working professionals — one weekend a month over roughly three months, with a fully online option. No thesis or exams; apply every framework to your own business as you go. A professional programme recognised against CMI Professional Standards, not an MQA-regulated academic degree.",
  provider: {
    "@type": "Organization",
    name: "Asian Business Consulting",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "blended",
    timeRequired: "P3M",
  },
};

export default function MbaForWorkingProfessionalsPage() {
  const fit = [
    { h: "One weekend a month", p: `Sessions run Friday and Saturday, once a month at ${SITE.venue}. Your working week stays intact — no nightly classes, no long career break.` },
    { h: "Or fully online", p: "Prefer to lead from your desk? Take the entire programme online, live-facilitated end to end, with the same coaching and frameworks as the in-person track." },
    { h: "Catch up or re-sit", p: "Travelling or slammed at work? Miss a session and catch up by video, or re-sit it with a later cohort — at no penalty and no extra fee." },
    { h: "Apply it on Monday", p: "There is no thesis and there are no exams. Every framework is applied to your own business the moment you learn it, so the value shows up in your work immediately." },
  ];

  const audience = [
    { h: "Owners & entrepreneurs", p: "Founders scaling past what instinct alone can carry." },
    { h: "Directors & GMs", p: "Leaders accountable for whole business units and their numbers." },
    { h: "Senior managers", p: "Operators stepping up from managing tasks to leading transformation." },
    { h: "Established professionals", p: "Typically 35–55 with 10+ years — leading teams today, not pausing to study." },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1 · Intro */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For working professionals · part-time &amp; online</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              An Executive MBA designed around your career, <span className="acc">not against it</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            Most MBAs ask you to pause a career you have spent a decade building. This one does not.
            The Future Ready Executive MBA runs across just {FACTS.durationLong}, so you keep leading
            your team, running your business and drawing your salary while you level up. It is built
            for people who lead today — and refuse to step off the field to do it.
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.durationLong} · one weekend a month or fully online · CMI (UK)-endorsed
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
            <h2 className="sec-h">Built for a full calendar and a demanding role.</h2>
          </Reveal>
          <p className="sec-sub">
            No career break. No exam season. Just a rhythm that slots into a working life and pays
            back in the work itself.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
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

      {/* 3 · Comparison vs a traditional MBA */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Against a traditional MBA</span>
          </div>
          <Reveal>
            <h2 className="sec-h">The same ambition — without the two-year hole in your career.</h2>
          </Reveal>
          <p className="sec-sub">
            A conventional MBA can mean 1.5–2 years of nights, weekends and, often, a pause in your
            earning and your career. Here is how the format compares.
          </p>
          <Reveal className="mt-s">
            <div className="cmp-wrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">This Executive MBA</th>
                    <th>A traditional MBA</th>
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
            </div>
          </Reveal>
          <p className="fine mt-s">
            This is a professional programme recognised by CMI (UK); it is not an MQA-regulated
            academic degree. Chosen for outcomes and speed, not academic equivalence. See the full{" "}
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
            <h2 className="sec-h">Three cohorts open for 2026.</h2>
          </Reveal>
          <p className="sec-sub">
            Malaysian public cohorts run Friday &amp; Saturday at {SITE.venue}, with a fully online
            option for those who prefer it. Each cohort holds only a handful of seats.
          </p>
          <Reveal className="mt-s">
            <div className="intake-wrap">
              <table className="intake">
                <thead>
                  <tr>
                    <th>Cohort</th>
                    <th>Session 1</th>
                    <th>Session 2</th>
                    <th>Session 3</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {INTAKES.map((c) => (
                    <tr key={c.co}>
                      <td className="co">{c.co}</td>
                      <td><span className="s">{c.s1}</span></td>
                      <td><span className="s">{c.s2}</span></td>
                      <td><span className="s">{c.s3}</span></td>
                      <td className="seats">{c.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <h2 className="sec-h">For leaders who won&apos;t pause their careers to grow.</h2>
          </Reveal>
          <p className="sec-sub">
            The room is built for senior people carrying real responsibility — those who need to lead
            transformation, not just manage operations.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
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
            HRD Corp claimable for eligible Malaysian employers; a scholarship brings the fee from{" "}
            {FACTS.priceStd} to {FACTS.priceNet} for Malaysian participants. Ready when you are —{" "}
            <Link href="/apply" className="acc">start your application</Link>.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Level up without pausing your career." />
    </main>
  );
}
