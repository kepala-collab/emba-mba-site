import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/insights", {
  title: "Wawasan — Rangka Kerja Pemikiran untuk Pemimpin",
  description:
    "Pengenalan praktikal kepada pemikiran prinsip pertama, pemikiran sistem dan pemikiran reka bentuk untuk menajamkan keputusan perniagaan.",
});

const ARTICLES = [
  {
    kicker: "Panduan keputusan",
    title: "Pendidikan Eksekutif vs Executive MBA",
    slug: "/ms/insights/executive-education-vs-executive-mba",
    blurb:
      "Cara menimbang kredensial, tempoh, penilaian, penggunaan di pejabat dan status akademik sebelum anda pilih program yang betul.",
  },
  {
    kicker: "Pemikiran",
    title: "Pemikiran Prinsip Pertama untuk Pemimpin Perniagaan",
    slug: "/ms/insights/first-principles-thinking",
    blurb:
      "Cara membezakan halangan yang betul-betul wujud daripada sekadar andaian, lalu membina pilihan bermula daripada fakta asas.",
  },
  {
    kicker: "Pemikiran",
    title: "Pemikiran Sistem untuk Pemimpin",
    slug: "/ms/insights/systems-thinking-for-leaders",
    blurb:
      "Cara membaca hubungan, gelung maklum balas dan kesan susulan yang tersembunyi sebelum anda buat keputusan.",
  },
  {
    kicker: "Pemikiran",
    title: "Pemikiran Reka Bentuk untuk Perniagaan",
    slug: "/ms/insights/design-thinking-for-business",
    blurb:
      "Cara menyatukan bukti daripada pelanggan, prototaip dan realiti komersial sebelum anda melabur sumber.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Wawasan — Rangka Kerja Pemikiran untuk Pemimpin",
  description:
    "Panduan keputusan program dan pengenalan praktikal kepada pemikiran prinsip pertama, sistem dan reka bentuk untuk menajamkan keputusan perniagaan.",
  inLanguage: "ms-MY",
  hasPart: {
    "@type": "ItemList",
    itemListElement: ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://futurereadymba.com${a.slug}`,
      name: a.title,
    })),
  },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Wawasan", path: "/ms/insights" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Wawasan · Pemikiran</span>
            </div>
            <h1 className="sec-h">Tajamkan cara anda berfikir</h1>
            <p className="sec-sub" style={{ maxWidth: 640 }}>
              Panduan keputusan dan pengenalan ringkas kepada cara berfikir yang kami guna sepanjang program.
            </p>
          </Reveal>

          <div className="insight-grid mt-m">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <article
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    height: "100%",
                  }}
                >
                  <span
                    className="mono sec-k acc"
                    style={{ color: "var(--crimson)" }}
                  >
                    {a.kicker}
                  </span>
                  <h2 style={{ margin: 0, lineHeight: 1.2 }}>
                    <Link
                      href={a.slug}
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontSize: 24,
                        color: "var(--ink)",
                        textDecoration: "none",
                      }}
                    >
                      {a.title}
                    </Link>
                  </h2>
                  <p style={{ margin: 0, color: "var(--ink-2)", flexGrow: 1 }}>
                    {a.blurb}
                  </p>
                  <Link
                    href={a.slug}
                    className="mono insight-read-link"
                    style={{
                      color: "var(--crimson)",
                      textDecoration: "none",
                      fontSize: 14,
                    }}
                  >
                    Baca →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="fine mt-s">
            Setiap artikel menyatakan sumbernya dan tarikh ia terakhir disemak.
          </p>
        </div>
      </section>

      <CtaSection
        lang="ms"
        programme="Executive MBA"
        heading="Terapkan cara berfikir ini pada keputusan perniagaan anda sendiri."
        sub="Pilih panggilan telefon, pertemuan dalam talian, jumpa bersemuka atau e-mel. Pasukan program akan menjawab soalan anda tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon oleh majikan. Anda tak terikat untuk mendaftar atau membayar."
      />
    </>
  );
}
