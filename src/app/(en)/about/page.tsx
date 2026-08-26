import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import { ABC_PROFILE, ORGANISATIONAL_STATEMENT, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/about", {
  title: "About Future Ready Executive MBA | Meet Roy Affandi",
  description: "Learn about the Future Ready Executive MBA through Programme Coordinator Roy Affandi and the programme's purpose for Malaysian professionals and business leaders.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "About", path: "/about" }]} />
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
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}.</h1>
              <p className="sec-sub">Programme Coordinator</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>For Roy Affandi, the purpose is simple: to help more Malaysians move forward in their careers, businesses and communities.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>With more than 30 years across banking and finance, corporate communication, sales and marketing, property development and corporate strategy, he understands that progress is rarely a straight line. It comes from learning to see the situation clearly, make the next sound decision and keep moving.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px,4vw,44px)" }}>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">The programme team</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", maxWidth: "22ch" }}>A clear line from programme design to the person answering your questions.</h2>
              <p className="sec-sub" style={{ maxWidth: "62ch" }}><strong>{ABC_PROFILE.name} (ABC)</strong> is a {ABC_PROFILE.hrdStatus}. {ABC_PROFILE.description}</p>
              <p className="fine" style={{ maxWidth: "62ch", marginTop: 18 }}>{ORGANISATIONAL_STATEMENT}</p>
              <Link href="/asian-business-consulting" className="text-action" style={{ marginTop: 16 }}>More about Asian Business Consulting <span aria-hidden="true">↗</span></Link>
              <figure className="partnership-seal">
                <Image src="/brand/partnership-seal.webp" alt="Asian Business Consulting and Right Dots Resources in collaboration — strategic partnership" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
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
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.35rem)", maxWidth: "16ch" }}>More Malaysians, moving forward.</h2>
              <p className="sec-sub">Business moves quickly. Good judgement gives people something steady to stand on.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi has worked in the Governor&rsquo;s Office at Bank Negara Malaysia and held senior corporate strategy and business roles across the private sector. He holds a B.Econs (Hons) (Analytical) from Universiti Malaya, completed postgraduate study at the University of Melbourne, and is a member of CMI (UK).</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>Today, markets, customer expectations and technology are changing faster. AI is changing the information leaders must weigh before making a decision. The answer is not more noise or theory for its own sake. It is practical frameworks that help people ask better questions, think clearly and act with confidence.</p>
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
