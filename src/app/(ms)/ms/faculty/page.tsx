import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS, FACULTY, SITE } from "@/lib/content";
import { CORE_PAGES_MS } from "@/lib/content-ms";
import { PROVIDER_ID, withSeo } from "@/lib/seo";

const path = "/ms/faculty";
const content = CORE_PAGES_MS.faculty;

export const metadata = withSeo(path, {
  title: "Fasilitator dan Jurulatih Perniagaan",
  description:
    "Kenali fasilitator dan jurulatih yang menyemak sebab di sebalik pelan anda, merentasi strategi, operasi, kewangan, bakat dan pengurusan perubahan.",
});

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: FACULTY.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        "@id": `${SITE.url}/faculty#${f.n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
        name: f.n,
        jobTitle: f.r,
        description: f.b,
        image: `${SITE.url}${f.img}`,
        affiliation: { "@id": PROVIDER_ID },
        knowsAbout: f.focus.split(" · "),
      },
    })),
  };
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: content.title, path }]} />
      <JsonLd data={ld} />
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
