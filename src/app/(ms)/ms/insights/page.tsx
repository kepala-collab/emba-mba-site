import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/insights", {
  title: "Wawasan — Kaedah Menaakul untuk Keputusan Anda",
  description:
    "Panduan praktikal untuk membandingkan program, serta pemikiran prinsip pertama, pemikiran sistem dan pemikiran reka bentuk, diterapkan pada keputusan yang sudah di tangan anda.",
});

const ARTICLES = [
  {
    kicker: "Panduan keputusan",
    title: "Cara Membandingkan Program Kepimpinan",
    slug: "/ms/insights/advancement-question",
    blurb:
      "Cara menimbang keupayaan, aplikasi, bukti, masa dan kejelasan pengiktirafan sebelum anda komited kepada mana-mana program.",
  },
  {
    kicker: "Panduan keputusan",
    title: "Pendidikan Eksekutif vs Executive MBA",
    slug: "/ms/insights/executive-education-vs-executive-mba",
    blurb:
      "Cara menimbang kredensial, tempoh, penilaian, penggunaan di tempat kerja dan status akademik sebelum anda pilih program.",
  },
  {
    kicker: "Pemikiran",
    title: "Pemikiran Prinsip Pertama untuk Pemimpin Perniagaan",
    slug: "/ms/insights/first-principles-thinking",
    blurb:
      "Cara membezakan halangan yang betul-betul wujud daripada sekadar andaian, lalu membina pilihan daripada fakta di sebalik sesuatu keputusan.",
  },
  {
    kicker: "Pemikiran",
    title: "Pemikiran Sistem untuk Pemimpin",
    slug: "/ms/insights/systems-thinking-for-leaders",
    blurb:
      "Cara meneliti hubungan, gelung maklum balas dan kesan susulan sebelum anda membuat keputusan.",
  },
  {
    kicker: "Pemikiran",
    title: "Pemikiran Reka Bentuk untuk Perniagaan",
    slug: "/ms/insights/design-thinking-for-business",
    blurb:
      "Cara menimbang bukti daripada pelanggan, prototaip dan realiti komersial sebelum anda melabur sumber.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Wawasan — Kaedah Menaakul untuk Keputusan Anda",
  description:
    "Panduan perbandingan program serta pengenalan praktikal kepada pemikiran prinsip pertama, sistem dan reka bentuk, diterapkan pada keputusan yang sudah di tangan anda.",
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
              <span className="mono sec-k">Wawasan · Kaedah menaakul</span>
            </div>
            <h1 className="sec-h">Kaedah yang anda amalkan pada keputusan anda sendiri</h1>
            <p className="sec-sub" style={{ maxWidth: 640 }}>
              Setiap panduan di bawah mengambil satu kaedah menaakul — membandingkan program, meneliti sistem,
              menguji andaian, melayani pelanggan — lalu menerapkannya pada keputusan yang sudah di tangan anda.
              Ini bukan bakat semula jadi; ia dibina melalui latihan.
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
        heading="Terapkan kaedah ini pada keputusan yang sudah di tangan anda."
        sub="Pilih panggilan telefon, pertemuan dalam talian, jumpa bersemuka atau e-mel. Pasukan program akan menjawab soalan anda tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon oleh majikan. Anda tidak terikat untuk mendaftar atau membayar."
      />
    </>
  );
}
