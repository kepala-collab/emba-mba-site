import Image from "next/image";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/about", {
  title: "About Rostam Affandi Ahmad | Rocket eMBA",
  description: "Meet Rostam Affandi Ahmad, Chairman and Principal of Rocket eMBA, and learn why he wants more Malaysians to move forward through practical management development.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <section className="section">
        <div className="wrap about-affandi-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg-2)" }}>
              <Image src="/brand/community/affandi-portrait.png" alt="Rostam Affandi Ahmad" width={1122} height={1403} sizes="(max-width: 760px) 100vw, 42vw" style={{ width: "100%", height: "auto", display: "block" }} priority />
            </figure>
          </Reveal>
          <Reveal delay={70}>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">About Rocket eMBA</span></div>
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}.</h1>
              <p className="sec-sub">{SITE.principalTitle}</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>With more than 30 years of professional experience across banking and finance, corporate communication, sales and marketing, property development and corporate strategy, Affandi has seen how quickly the business landscape can change.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>He has worked in the Governor&rsquo;s Office at Bank Negara Malaysia and held senior corporate strategy and business roles across the private sector. He holds a B.Econs (Hons) (Analytical) from Universiti Malaya, completed postgraduate study at the University of Melbourne, and is a member of CMI (UK).</p>
              <h2 style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.55rem,2.5vw,2.1rem)", lineHeight: 1.12, margin: "32px 0 12px" }}>More Malaysians, moving forward.</h2>
              <p className="fine" style={{ maxWidth: "58ch" }}>For Affandi, the purpose is simple: to help more Malaysians progress in their careers and businesses. Markets, customer expectations and technology are moving faster; AI is changing the information leaders must weigh before making a decision. The answer is not more noise or theory for its own sake. It is practical leadership and decision-making frameworks that help people think clearly, make sound judgements and act with confidence.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>That is the role of the Future Ready Executive MBA. It is designed for working professionals who want to strengthen how they lead and decide in the real conditions of business today. If that reflects where you are now, Affandi and the team would be glad to have a conversation.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaSection programme="Executive MBA" heading="Discuss the Future Ready Executive MBA." />
      <style>{`@media(max-width:760px){.about-affandi-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
