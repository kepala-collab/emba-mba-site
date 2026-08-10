import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS } from "@/lib/content";

export const metadata = {
  title: "Executive MBA for SME Owners & Founders",
  description:
    "Stop being the bottleneck in your own business. A CMI (UK)-endorsed Executive MBA for SME owners — think like a CEO, build a business that scales without you, over 3 months (3 sessions). HRD Corp claimable.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Executive MBA for SME Owners & Founders — Future Ready",
  description:
    "A CMI (UK)-endorsed Executive MBA for SME owners and founders who are stuck as the operator of their own business. Over three months across three sessions, install the thinking frameworks that turn an owner into a CEO who builds systems, delegates and scales. A professional programme recognised against CMI Professional Standards, not an MQA-regulated academic degree.",
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

export default function MbaForSmeOwnersPage() {
  const frustrations = [
    { h: "Operator, not CEO", p: "You own the business, but you spend your days running it — pricing jobs, chasing invoices, fixing what breaks. The title says founder; the calendar says operator." },
    { h: "It can't scale past you", p: "Every important decision, key client and hard problem still routes through you. Growth stalls at the ceiling of your own hours, because the business is you." },
    { h: "No time to think strategically", p: "You know you should be working on the business, not in it — but the day fills before you get there. Strategy keeps losing to the inbox." },
    { h: "Succession & exit are unclear", p: "You'd like to scale, step back or one day sell — but a business that depends this much on you is hard to hand over and hard to value." },
    { h: "Always firefighting", p: "You lead by reacting. Each week is another round of urgent problems, and the important work that would change the trajectory never gets its turn." },
  ];

  const fit = [
    { h: "One weekend a month", p: "Sessions run Friday and Saturday, once a month over roughly three months. Your business keeps running while you build the way you lead it — no career break, no long absence from the helm." },
    { h: "Your own business is the capstone", p: "There is no thesis and no exam. Every framework is applied to your real company as you learn it, so you leave with a board-ready plan for the business you actually run — not a case study." },
    { h: "HRD Corp claimable", p: "For eligible Malaysian employers the programme is HRD Corp claimable, and your own company can fund your seat like any other capability investment." },
    { h: "Scholarship for Malaysians", p: `A scholarship brings the fee from ${FACTS.priceStd} to ${FACTS.priceNet} for Malaysian participants, with installment options — accessible for an owner reinvesting in the business.` },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1 · Intro — name the real pain */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">For SME owners &amp; founders</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              The business depends too much on you — <span className="acc">and you know it</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            You built it. It works. But somewhere along the way you became the single point of
            failure — the person every decision waits for, the reason a week away feels risky. You
            wanted to own a business; instead the business owns your time. The Future Ready Executive
            MBA is for owners who want to stop being the bottleneck and start thinking like the CEO
            of a company that can run — and grow — without them in every room.
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.durationLong} · one weekend a month · CMI (UK)-endorsed
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
            <span className="mono sec-k">Sound familiar?</span>
          </div>
          <Reveal>
            <h2 className="sec-h">The founder&apos;s trap has a shape. This is it.</h2>
          </Reveal>
          <p className="sec-sub">
            If more than one of these lands, you are not failing — you are simply running the
            business with the tools that got you here, which are not the tools that get you out.
          </p>
          <div className="mt-m grid-forces">
            {frustrations.map((x) => (
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
            <h2 className="sec-h">From operator to strategist — by changing how you think.</h2>
          </Reveal>
          <p className="sec-sub">
            The bottleneck is rarely effort; it is the operating system. This programme installs the
            thinking frameworks that let an owner step up out of the day-to-day. It builds capability
            — it does not promise a number. What you do with it is yours.
          </p>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">See the whole board</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Systems and first-principle thinking let you trace a decision to its third-order
                  consequence — so you work on the few moves that shift the business, instead of
                  reacting to every fire the day throws up.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Build systems, not dependencies</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Learn to turn what only lives in your head into repeatable process — so the
                  business can make good decisions without routing every one through you.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Delegate with a framework</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Situational leadership and facilitative frameworks give you a way to hand off
                  real ownership — not just tasks — so your people grow into the load you carry.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Plan to scale or exit</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  A structured strategy gives you a defensible view of where the business goes next
                  — the groundwork for scaling, stepping back, or making it something you could
                  one day hand over.
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
            <h2 className="sec-h">Designed for someone who can&apos;t leave the business behind.</h2>
          </Reveal>
          <p className="sec-sub">
            An owner can&apos;t disappear for two years — and shouldn&apos;t have to. The format,
            the funding and the capstone are all built around a person who is still running the show.
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
            This is a professional programme recognised by CMI (UK); it is not an MQA-regulated
            academic degree. When you&apos;re ready,{" "}
            <Link href="/apply" className="acc">start your application</Link>.
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">Your business shouldn&apos;t stop when you do.</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            The next cohort is a room of owners and directors working through exactly this — the
            move from running the business to leading it. Bring yours.
          </p>
          <p className="mt-s">
            <Link href="/apply" className="btn btn-primary">Apply for the next cohort</Link>
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Build a business that runs without you." />
    </main>
  );
}
