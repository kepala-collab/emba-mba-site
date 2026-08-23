import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CERTIFICATE_POSITIONING, CTA_LABELS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const PATH = "/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "CMI Recognition for the Future Ready Executive MBA",
  description: "Understand what CMI (UK) recognition means for the three-month Future Ready Executive MBA, its certificate and any separate optional Chartered Manager route.",
});

const FAQS = [
  { q: "What do successful participants receive?", a: "Successful participants receive the CMI Certificate of Recognition for the Future Ready Executive MBA programme. CMI controls the final certificate format, wording and issue." },
  { q: "Is this an academic MBA degree?", a: "No. The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. It is a three-month professional development programme, not an MQA-accredited academic degree or a regulated qualification." },
  { q: "Does the programme automatically award Chartered Manager status?", a: "No. Chartered Manager is a separate optional CMI route. CMI alone confirms eligibility, assessment requirements, membership and fees. It is not included in the published programme or fee." },
] as const;

export default function CmiRecognitionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Executive MBA", path: "/executive-mba" }, { name: "CMI recognition", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">Awarded and endorsed by CMI</p>
          <h1><TechnicalText>Professional recognition for work you can use.</TechnicalText></h1>
          <p>The Future Ready Executive MBA helps experienced managers turn a live business issue into a defensible action plan. Successful completion is recognised with a <TechnicalText>CMI Certificate of Recognition</TechnicalText>.</p>
          <div className="chartered-hero-actions"><Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} <span aria-hidden="true">→</span></Link><Link href="/executive-mba" className="btn btn-ghost">See the three-month programme</Link></div>
        </div>
      </header>

      <section className="section chartered-positioning">
        <div className="wrap">
          <Reveal><div className="reading-section-head"><p className="mono sec-k">What the recognition adds</p><h2 className="sec-h">Evidence of development—not another attendance certificate.</h2><p>The programme connects professional recognition with an applied project built around the participant&rsquo;s own organisational context.</p></div></Reveal>
          <div className="chartered-outcome-grid">
            <Reveal><article><span className="mono">01</span><h3>Recognised completion</h3><p>CMI Recognition means the programme has been benchmarked against CMI&rsquo;s Professional Standard. Successful participants receive the programme&rsquo;s CMI Certificate of Recognition.</p></article></Reveal>
            <Reveal delay={45}><article><span className="mono">02</span><h3>Useful professional evidence</h3><p>The certificate and applied project give you credible evidence of structured management development to describe on a professional profile or in a career conversation.</p></article></Reveal>
            <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>Clarity about the next step</h3><p>Any Chartered Manager application is separate and optional. CMI determines eligibility, assessment, membership and fees; the programme does not promise or include that award.</p></article></Reveal>
          </div>
          <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">Read CMI&rsquo;s official explanation of Recognition <span aria-hidden="true">↗</span></a></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap chartered-preparation-grid">
          <Reveal><div className="reading-section-head"><p className="mono sec-k">Business and career value</p><h2 className="sec-h">Bring one real decision. Leave with a stronger way to make the next one.</h2><p>The programme is designed to enrich how you lead, diagnose problems, make a case and move a team into action. It does not guarantee promotion, salary growth, employment or business results.</p></div><Link href="/how-it-works" className="btn btn-ghost">See how the method works <span aria-hidden="true">→</span></Link></Reveal>
          <ol className="chartered-preparation-list">
            <li><span>01</span><div><h3>Diagnose before deciding</h3><p>Separate symptoms, assumptions and constraints before committing resources.</p></div></li>
            <li><span>02</span><div><h3>Explain the reasoning</h3><p>Compare options and communicate why one direction deserves support.</p></div></li>
            <li><span>03</span><div><h3>Convert judgment into action</h3><p>Build an action plan grounded in your current business context.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">Direct answers</p><h2 className="sec-h">Know what you are choosing.</h2></Reveal><Reveal className="mt-s">{FAQS.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}</summary><p>{item.a}</p></details>)}</Reveal></div></section>
      <CtaSection programme="Executive MBA" heading="See whether the Future Ready Executive MBA fits the decision in front of you." sub="Get the programme guide, or ask the programme team for a no-obligation conversation." />
    </>
  );
}
