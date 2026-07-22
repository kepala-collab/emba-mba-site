import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { FACTS, INTAKES, SITE, CLIENTS } from "@/lib/content";

export const metadata = {
  title: "Executive MBA in Malaysia (CMI UK, HRD Corp)",
  description:
    "The Future Ready Executive MBA in Kuala Lumpur — CMI (UK)-endorsed, HRD Corp claimable, RM10,000 (RM5,000 with the Malaysian scholarship). 6 days over 3 months at Glenmarie, or fully online.",
};

const REASONS = [
  {
    h: "HRD Corp claimable",
    p: `${SITE.provider} is an HRD Corp (HRDC) Approved Training Provider running under SBL-Khas — eligible Malaysian employers can route the fee through the levy they already pay. We prepare the paperwork.`,
  },
  {
    h: `Malaysian scholarship — ${FACTS.priceNet}`,
    p: `The standard fee is ${FACTS.priceStd}. Malaysian participants can access the EMBA scholarship, bringing the net investment to ${FACTS.priceNet} — with installment plans for individuals.`,
  },
  {
    h: `Weekend format at ${SITE.venue}`,
    p: `${FACTS.durationLong} — one Friday–Saturday weekend a month in Glenmarie, Shah Alam. Keep running your business through Kuala Lumpur's working week; no career pause, no relocation.`,
  },
  {
    h: "ASEAN-relevant faculty & cases",
    p: "Practitioners who have led Malaysian conglomerates, advised Bank Negara Malaysia and built regional businesses — teaching from live ASEAN market conditions, not imported Western textbooks.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Future Ready Executive MBA (CMI UK) — Malaysia",
  description:
    "CMI (UK)-endorsed Future Ready Executive MBA delivered in Kuala Lumpur / Glenmarie and online. HRD Corp claimable for eligible Malaysian employers.",
  provider: {
    "@type": "Organization",
    name: SITE.provider,
    sameAs: SITE.url,
  },
  areaServed: { "@type": "Country", name: "MY" },
  offers: {
    "@type": "Offer",
    price: "10000",
    priceCurrency: "MYR",
    category: "Executive education",
    url: `${SITE.url}/executive-mba-malaysia`,
  },
};

export default function ExecutiveMbaMalaysiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

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
              The Future Ready Executive MBA — endorsed by the Chartered Management
              Institute (CMI), UK — is delivered for Malaysian owners, directors and senior
              managers at <b style={{ color: "var(--ink)" }}>{SITE.venue}</b>. It is{" "}
              <b style={{ color: "var(--ink)" }}>HRD Corp claimable</b> for eligible
              employers, priced in ringgit at {FACTS.priceStd}{" "}
              (<b style={{ color: "var(--ink)" }}>{FACTS.priceNet}</b> with the Malaysian
              scholarship), and built around the ASEAN market conditions your business
              actually competes in — from Bursa-listed boardrooms to family conglomerates
              navigating regional disruption.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              You keep working through the KL week and learn one weekend a month over roughly
              three months. Prefer to join from Penang, Johor or anywhere across the region?
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
          <Reveal><h2 className="sec-h">Local funding, local venue, regional edge.</h2></Reveal>
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
            <div><b>{FACTS.priceNet}</b><span>Net with the scholarship</span></div>
            <div><b>HRD Corp</b><span>Claimable · SBL-Khas</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Trusted by Malaysian organisations</span></div></Reveal>
          <Reveal><h2 className="sec-h">Leaders from the names that run Malaysia.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Participants and client organisations across {SITE.provider}&rsquo;s programmes
              include some of the country&rsquo;s most established institutions and
              corporations:
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 intakes · Glenmarie, Kuala Lumpur</span></div></Reveal>
          <Reveal><h2 className="sec-h">Three KL cohorts open. Seats are limited.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Malaysian public cohorts run Friday &amp; Saturday, 9am–6pm at {SITE.venue}.
              Each cohort holds only a handful of seats.
            </p>
          </Reveal>
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
          <p className="fine center mt-s">
            This is a professional programme recognised by CMI (UK); it is not an
            MQA-regulated academic degree. HRD Corp claimable for eligible Malaysian
            employers. Ready now? Start your <Link href="/apply">application</Link>.
          </p>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Join Malaysia's next executive cohort." />
    </>
  );
}
