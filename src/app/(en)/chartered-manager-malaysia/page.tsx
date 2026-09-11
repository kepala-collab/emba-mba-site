import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CERTIFICATE_POSITIONING, CTA_LABELS, STAGES } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const PATH = "/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "CMI Recognition: What Is Awarded, What Is Separate",
  description: "See exactly what the Future Ready Executive MBA's CMI Certificate of Recognition covers, its professional-relevance boundary, and Chartered Manager as a separate optional CMI route.",
});

const FAQS = [
  { q: "What do successful participants receive?", a: `Successful participants receive the ${CERTIFICATE_POSITIONING.credential}. CMI controls the final certificate format, wording and issue.` },
  { q: "Is this an academic MBA degree?", a: `No. ${CERTIFICATE_POSITIONING.distinction}` },
  { q: "Does the programme automatically award Chartered Manager status?", a: `No. ${STAGES[2].d}` },
] as const;

export default function CmiRecognitionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Executive MBA", path: "/executive-mba" }, { name: "CMI recognition", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">{CERTIFICATE_POSITIONING.headline}</p>
          <h1><TechnicalText>Recognition for work you can show.</TechnicalText></h1>
          <p>{CERTIFICATE_POSITIONING.distinction} {CERTIFICATE_POSITIONING.professionalRelevance} {STAGES[2].d}</p>
          <div className="chartered-hero-actions"><Link href="/apply" className="btn btn-primary">{CTA_LABELS.guide} <span aria-hidden="true">→</span></Link><Link href="/executive-mba" className="btn btn-ghost">See the six-month programme</Link></div>
          <p className="fine">See exactly what is awarded, what is separate and who decides.</p>
        </div>
      </header>

      <section className="section chartered-positioning">
        <div className="wrap">
          <Reveal><div className="reading-section-head"><p className="mono sec-k">What the recognition adds</p><h2 className="sec-h">Benchmarked against CMI&rsquo;s Professional Standard, evidenced by your own applied project.</h2><p>{CERTIFICATE_POSITIONING.professionalRelevance}</p></div></Reveal>
          <div className="chartered-outcome-grid">
            <Reveal><article><span className="mono">01</span><h3>Recognised completion</h3><p>CMI Recognition means the programme has been benchmarked against CMI&rsquo;s Professional Standard. Successful participants receive the {CERTIFICATE_POSITIONING.credential}.</p></article></Reveal>
            <Reveal delay={45}><article><span className="mono">02</span><h3>Evidence you can explain</h3><p>The certificate and the applied business project on your own organisation give you a documented account of the reasoning you built, to describe on a professional profile or to a hiring panel.</p></article></Reveal>
            <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>Chartered Manager: a separate route</h3><p>{STAGES[2].d}</p></article></Reveal>
          </div>
          <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">Read CMI&rsquo;s official explanation of Recognition <span aria-hidden="true">↗</span></a></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap chartered-preparation-grid">
          <Reveal><div className="reading-section-head"><p className="mono sec-k">Where the evidence gets used</p><h2 className="sec-h">Bring one real decision. Leave with reasoning you can put in front of a board.</h2><p>{CERTIFICATE_POSITIONING.professionalRelevance}</p></div><Link href="/how-it-works" className="btn btn-ghost">See how the method works <span aria-hidden="true">→</span></Link></Reveal>
          <ol className="chartered-preparation-list">
            <li><span>01</span><div><h3>Diagnose before deciding</h3><p>Separate symptoms, assumptions and constraints before committing resources.</p></div></li>
            <li><span>02</span><div><h3>Explain the reasoning</h3><p>Compare options and set out, in writing, why one direction is the right one to take.</p></div></li>
            <li><span>03</span><div><h3>Convert judgement into action</h3><p>Build an action plan grounded in your current business context, reviewed by faculty.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">Direct answers</p><h2 className="sec-h">Who decides each thing, before you decide.</h2></Reveal><Reveal className="mt-s">{FAQS.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}</summary><p>{item.a}</p></details>)}</Reveal></div></section>
      <CtaSection programme="Executive MBA" heading="Discuss which route fits your purpose." sub="Get the programme guide, or arrange a programme conversation with the team." />
    </>
  );
}
