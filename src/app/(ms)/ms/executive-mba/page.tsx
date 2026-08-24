import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS } from "@/lib/content";
import { CORE_PAGES_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const path = "/ms/executive-mba";
const content = CORE_PAGES_MS.programme;

export const metadata = withSeo(path, {
  title: "Butiran Program Executive MBA (Diiktiraf CMI, UK)",
  description:
    "Fahami struktur program Future Ready Executive MBA, untuk siapa ia direka, hasil pembelajaran, pengiktirafan CMI dan perbezaannya dengan ijazah akademik bertauliah MQA.",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: content.title, path }]} />
      <section className="section zh-core-page geo-section" data-page={path}>
        <div className="wrap">
          <Reveal>
            <div className="zh-core-intro">
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">{content.eyebrow}</span></div>
              <h1>{content.title}</h1>
              <p>{content.intro}</p>
            </div>
          </Reveal>
          <div className="zh-core-section-grid">
            {content.sections.map(([heading, body], index) => (
              <Reveal key={heading} delay={(index % 2) * 60}>
                <section className="card">
                  <h2>{heading}</h2>
                  <p>{body}</p>
                </section>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-m">
            <div className="zh-core-actions">
              <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
              <Link href="/ms/faq" className="btn btn-ghost">Soalan lazim</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
