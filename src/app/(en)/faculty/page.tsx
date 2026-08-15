import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import JsonLd from "@/components/site/JsonLd";
import { DELIVERY_CONTROL, FACULTY, SITE } from "@/lib/content";
import { PROVIDER_ID, withSeo } from "@/lib/seo";

export const metadata = withSeo("/faculty", {
  title: "Faculty & Coaches",
  description:
    "Meet the Future Ready Executive MBA practitioners and coaches across strategy, operations, finance, talent and transformation.",
});

export default function FacultyPage() {
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
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Faculty", path: "/faculty" }]} />
      <JsonLd data={ld} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Faculty &amp; Project Coaches</span></div>
            <h1 className="sec-h" style={{ fontSize: "clamp(2.1rem,4.4vw,3.2rem)" }}>
              Practitioners and coaches with cross-functional business experience.
            </h1>
            <p className="sec-sub">
              The faculty and one-to-one coaches bring experience across corporate leadership, consulting,
              manufacturing, finance, talent and transformation. They teach through applied business work.
            </p>
          </Reveal>

          <Reveal className="mt-m">
            <dl className="faculty-authority-grid">
              <div><dt>Published panel</dt><dd>{FACULTY.length} named practitioners and coaches with individual biographies</dd></div>
              <div><dt>Cohort assignment</dt><dd>ABC confirms the assigned faculty in the briefing issued before Session 1</dd></div>
              <div><dt>Applied role</dt><dd>Teaching, project feedback and coaching connected to participant business contexts</dd></div>
            </dl>
          </Reveal>

          <div className="mt-m faculty-grid mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {FACULTY.map((f, i) => (
              <Reveal key={f.n} delay={(i % 2) * 70}>
                <article className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start", height: "100%" }}>
                  <div style={{ flex: "none", width: 92, height: 92, borderRadius: 14, overflow: "hidden", background: "#fff", border: "1px solid var(--line-2)" }}>
                    <Image src={f.img} alt={f.n} width={110} height={110} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.25rem" }}>{f.n}</h2>
                    <p className="mono sec-k" style={{ margin: "6px 0 2px", fontSize: ".68rem" }}>{f.r}</p>
                    <p className="mono" style={{ margin: "0 0 10px", fontSize: ".66rem", color: "var(--muted)", letterSpacing: ".06em" }}>{f.focus}</p>
                    <p style={{ margin: 0, color: "var(--ink-2)", fontSize: ".92rem" }}>{f.b}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-m">
            <p className="fine" style={{ maxWidth: "64ch" }}>
              The programme includes one-to-one executive coaching and may include guest mentors.
              Faculty are drawn from {SITE.provider}&rsquo;s panel of consultants. {DELIVERY_CONTROL.faculty}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection programme="Executive MBA" heading="Discuss the faculty, coaching and programme format." />
      <style>{`@media(max-width:760px){.faculty-grid .card{flex-direction:column!important}}`}</style>
    </>
  );
}
