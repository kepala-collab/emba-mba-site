import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import { ABC_PROFILE, CERTIFICATE_POSITIONING, ORGANISATIONAL_STATEMENT, SITE } from "@/lib/content";
import { editorialTeamSchema, OPERATOR_ID, withSeo } from "@/lib/seo";

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/about#roy-affandi`,
      name: SITE.director,
      jobTitle: "Programme Coordinator",
      image: `${SITE.url}/brand/community/affandi-portrait.webp`,
      worksFor: { "@id": OPERATOR_ID },
      description:
        "Programme Coordinator for the Future Ready Executive MBA, with more than 30 years across banking and finance, corporate communication, sales and marketing, property development and corporate strategy.",
    },
    editorialTeamSchema(),
  ],
};

export const metadata = withSeo("/about", {
  title: "About Us | Meet Roy Affandi",
  description: "Meet Roy Affandi, Programme Coordinator for the Future Ready Executive MBA, and the programme team that answers your questions about fit, fees and CMI recognition.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "About", path: "/about" }]} />
      <JsonLd data={ABOUT_SCHEMA} />
      <section className="section">
        <div className="wrap about-affandi-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg-2)" }}>
              <Image src="/brand/community/affandi-portrait.webp" alt="Roy Affandi" width={1122} height={1403} sizes="(max-width: 760px) 100vw, 42vw" style={{ width: "100%", height: "auto", display: "block" }} priority />
            </figure>
          </Reveal>
          <Reveal delay={70}>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">About Future Ready</span></div>
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}. The person who answers your questions.</h1>
              <p className="sec-sub">Programme Coordinator</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi&rsquo;s role is to serve the decision you are weighing before anything else: honest answers on fit, dates, fees, recognition and funding, including when the programme is not the right route for you. Real leadership is servant leadership: it is measured by the people it serves.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>With more than 30 years across banking and finance, corporate communication, sales and marketing, property development and corporate strategy, he has seen how a decision changes once it is tested and written down, rather than carried alone.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="editorial-standards" className="section editorial-standards-anchor">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px,4vw,44px)" }}>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">The programme team</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", maxWidth: "22ch" }}>From programme design to the person answering your questions.</h2>
              <p className="sec-sub" style={{ maxWidth: "62ch" }}><strong>{ABC_PROFILE.name} (ABC)</strong> is a {ABC_PROFILE.hrdStatus}. {ABC_PROFILE.description}</p>
              <p className="fine" style={{ maxWidth: "62ch", marginTop: 18 }}>{ORGANISATIONAL_STATEMENT} {CERTIFICATE_POSITIONING.professionalRelevance}</p>
              <Link href="/asian-business-consulting" className="text-action" style={{ marginTop: 16 }}>More about Asian Business Consulting <span aria-hidden="true">↗</span></Link>
              <figure className="partnership-seal">
                <Image src="/brand/partnership-seal.webp" alt="Asian Business Consulting and Right Dots Resources in collaboration" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
                <figcaption className="mono sec-k">Asian Business Consulting × Right Dots Resources · in collaboration</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap about-story-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">A Malaysian perspective</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.35rem)", maxWidth: "16ch" }}>More Malaysians, deciding on tested evidence.</h2>
              <p className="sec-sub">Business moves quickly. Good judgement gives people something steady to stand on.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi has worked in the Governor&rsquo;s Office at Bank Negara Malaysia and held senior corporate strategy and business roles across the private sector. He holds a B.Econs (Hons) (Analytical) from Universiti Malaya, completed postgraduate study at the University of Melbourne, and is a member of CMI (UK).</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>Markets, customer expectations and technology are changing faster, and AI is adding to what a leader must weigh before deciding. The method is not more noise or theory for its own sake. It is a set of frameworks that help a leader test the evidence, expose the trade-offs and write the decision down where others can follow it.</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg)" }}>
              <Image src="/brand/community/about-affandi.webp" alt="A personal moment from Roy Affandi's life" width={1440} height={2560} sizes="(max-width: 760px) 100vw, 46vw" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption className="fine" style={{ padding: "12px 16px 14px" }}>The work is professional. The purpose is personal: helping people build a stronger future.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <CtaSection programme="Executive MBA" heading="Discuss the Future Ready Executive MBA." />
      <style>{`@media(max-width:760px){.about-affandi-grid,.about-story-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
