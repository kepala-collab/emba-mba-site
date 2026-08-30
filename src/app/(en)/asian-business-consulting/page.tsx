import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import YouTubeFilm from "@/components/site/YouTubeFilm";
import { OPERATOR, PROGRAMME_PROOF, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const ABC_URL = "https://www.asianbusinessconsulting.biz";

export const metadata = withSeo("/asian-business-consulting", {
  title: "Asian Business Consulting — the firm behind the programme",
  description:
    "Asian Business Consulting (ABC) designed and delivers the Future Ready Executive MBA. Meet the Malaysian training firm, its leaders and partners.",
});

const MILESTONES = [
  { n: "2020", s: "ABC registered in Malaysia" },
  { n: "Jul 2024", s: "Awarded and endorsed by CMI" },
  { n: String(PROGRAMME_PROOF.cohorts), s: `cohorts delivered: ${PROGRAMME_PROOF.englishCohorts} English and ${PROGRAMME_PROOF.mandarinCohorts} Mandarin cohort` },
  { n: String(PROGRAMME_PROOF.graduates), s: "graduates of the signature programme" },
];

const LEADERS = [
  {
    n: "Dr. Xavier Johnson",
    role: "Chief Business Methodologist, Asian Business Consulting · Founder, LIFE University",
    img: "/brand/faculty/xavier-johnson.webp",
    b: "Architect of the F.A.S.T. methodology and the twelve modules at the core of the programme. A Universiti Malaya alumnus, he works in organisation business architecture, business model innovation and design thinking, and founded LIFE University.",
  },
  {
    n: "Ir. Dr. Jonas Anthony",
    role: "Chief Operating Officer, ABC · Co-Founder, LIFE Innoversity",
    img: "/brand/faculty/jonas-anthony.webp",
    b: "Retired Executive Director of Corporate Management at Panasonic AVC Networks Kuala Lumpur and former Chairman of Panasonic Manufacturing HRD in Malaysia. Over 32 years in Lean, Industry 4.0, quality and supply chain; also a Chartered Engineer (UK), Chartered Quality Professional and Adjunct Professor at Taylor's University School of Engineering.",
  },
  {
    n: "Mr Allan Gan",
    role: "Chief Programme Director, Asian Business Consulting · Co-Founder, LIFE Innoversity",
    img: "/brand/faculty/allan-gan.webp",
    b: "Leads delivery and day-to-day operations of the programme — scheduling, logistics and corporate client relations — and coordinates with CMI (UK) and HRD Corp so the programme stays compliant for corporate training grants.",
  },
  {
    n: "Roy Affandi",
    role: "Programme Coordinator",
    img: "/brand/community/affandi-portrait.webp",
    b: "Runs intake cycles, onboarding and corporate engagement, and helps SMEs and larger organisations work through the HRD Corp grant process. B.Econs (Hons, Analytical) from Universiti Malaya, postgraduate study at the University of Melbourne, Executive MBA (CMI UK) and a member of CMI (UK).",
  },
];

const abcSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asian Business Consulting",
  alternateName: "ABC",
  url: ABC_URL,
  foundingDate: "2020",
  areaServed: "MY",
  description:
    "A Malaysian management consulting, corporate training and executive learning firm. ABC designed and delivers the Executive MBA on Future Ready Business Leadership. The programme is awarded and endorsed by CMI.",
  founder: { "@type": "Person", name: "Dr. Xavier Johnson" },
  member: LEADERS.map((leader) => ({ "@type": "Person", name: leader.n, jobTitle: leader.role })),
  sameAs: [ABC_URL],
};

export default function AsianBusinessConsultingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Asian Business Consulting", path: "/asian-business-consulting" }]} />
      <JsonLd data={abcSchema} />

      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The provider · Asian Business Consulting</span></div>
          </Reveal>
          <Reveal delay={40}>
            <h1 className="sec-h" style={{ maxWidth: "20ch" }}>
              The firm behind the <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Future Ready Executive MBA</em>.
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="sec-sub" style={{ maxWidth: "64ch" }}>
              Asian Business Consulting (ABC) is a Malaysian management consulting, corporate training and executive learning firm, registered in 2020. It designed the six-month Executive MBA on Future Ready Business Leadership over almost three years of development with CMI and delivers it today as a CMI Recognised centre.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <div className="working-hero-actions">
              <a href={ABC_URL} className="btn btn-primary" target="_blank" rel="noopener" data-track-event="outbound_click" data-track-id="abc_website" data-track-location="abc_hero">
                Visit asianbusinessconsulting.biz <span aria-hidden="true">↗</span>
              </a>
              <Link href="/executive-mba" className="text-action">See the programme <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="Asian Business Consulting at a glance">
        <div className="wrap working-fact-grid">
          {MILESTONES.map((m) => (
            <div key={m.n}><strong>{m.n}</strong><span>{m.s}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Leadership</span></div>
            <h2 className="sec-h">The people who design and deliver the programme.</h2>
            <p className="sec-sub" style={{ maxWidth: "62ch" }}>A small, practitioner-led team. ABC confirms the faculty and mentors assigned to each cohort in the briefing issued before Session 1.</p>
          </Reveal>
          <div className="abc-leaders">
            {LEADERS.map((leader, index) => (
              <Reveal key={leader.n} delay={(index % 2) * 60}>
                <article className="abc-leader">
                  {leader.img ? (
                    <Image src={leader.img} alt={leader.n} width={192} height={192} sizes="96px" />
                  ) : (
                    <span className="abc-avatar" aria-hidden="true">{leader.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                  )}
                  <div>
                    <h3>{leader.n}</h3>
                    <p className="role">{leader.role}</p>
                    <p>{leader.b}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="abc-film" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">The inaugural graduation · August 2026</span></div>
            <h2 className="sec-h">{PROGRAMME_PROOF.cohorts} cohorts. {PROGRAMME_PROOF.graduates} graduates. One shared milestone.</h2>
            <p className="sec-sub" style={{ maxWidth: "60ch" }}>The Future Ready Executive MBA held its inaugural graduation ceremony in {PROGRAMME_PROOF.inauguralGraduation}. {PROGRAMME_PROOF.graduationAttendance} graduates attended, representing a wider community of {PROGRAMME_PROOF.graduates} graduates across {PROGRAMME_PROOF.cohorts} cohorts: {PROGRAMME_PROOF.englishCohorts} English cohorts and {PROGRAMME_PROOF.mandarinCohorts} Mandarin cohort.</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="film-prestige" style={{ marginTop: 24 }}>
              <div className="film-ribbon"><span className="dot" aria-hidden="true" /> Inaugural graduation · {PROGRAMME_PROOF.graduationAttendance} attendees · {PROGRAMME_PROOF.inauguralGraduation}</div>
              <JsonLd data={{ "@context": "https://schema.org", "@type": "VideoObject", name: "Future Ready Executive MBA — Inaugural Graduation Film", description: `Highlights from the inaugural Future Ready Executive MBA graduation in ${PROGRAMME_PROOF.inauguralGraduation}, attended by ${PROGRAMME_PROOF.graduationAttendance} graduates.`, "thumbnailUrl": `${SITE.url}/brand/abc-graduation-poster.webp`, "uploadDate": "2026-08-22", "embedUrl": "https://www.youtube-nocookie.com/embed/6uEbqYOZxkg", "contentUrl": "https://youtu.be/6uEbqYOZxkg", "inLanguage": "en-MY" }} />
              <YouTubeFilm videoId="6uEbqYOZxkg" poster="/brand/abc-graduation-poster.webp" lang="en" />
              <div className="film-cap"><strong>{PROGRAMME_PROOF.graduationAttendance} graduates attended,</strong> joined by faculty and guests from Malaysian business and public life.</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Recognition &amp; funding</span></div>
            <h2 className="sec-h">The bodies behind the delivery.</h2>
          </Reveal>
          <div className="grid-forces" style={{ marginTop: 26 }}>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>Chartered Management Institute (UK)</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>CMI is the external quality body. The programme has been awarded and endorsed by CMI since July 2024, and ABC is listed as a Recognised international centre.</p>
              <a href="https://www.managers.org.uk/community/cmi-internationally/centres/" className="text-action" target="_blank" rel="noopener" style={{ marginTop: 10 }}>Verify on CMI&rsquo;s register <span aria-hidden="true">↗</span></a>
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>HRD Corp (Malaysia)</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>ABC is an HRD Corp-registered training provider, so Malaysian employers can fund participants through the levy. HRD Corp decides eligibility and the approved amount.</p>
              <Link href="/hrd-corp-claimable" className="text-action" style={{ marginTop: 10 }}>How employer funding works <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>Right Dots Resources</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>ABC develops and delivers the programme; {OPERATOR.name} is its marketing agency, handling programme enquiries, pricing and enrolment coordination.</p>
              <Link href="/about" className="text-action" style={{ marginTop: 10 }}>About the programme team <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="partnership-seal">
            <Image src="/brand/partnership-seal.webp" alt="Asian Business Consulting and Right Dots Resources in collaboration — strategic partnership" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
            <figcaption className="mono sec-k">Asian Business Consulting × {OPERATOR.name} · in collaboration</figcaption>
          </figure>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Talk to the programme team." sub={`Ask about the Future Ready Executive MBA, or visit ${ABC_URL.replace("https://www.", "")} to learn more about Asian Business Consulting.`} />
    </>
  );
}
