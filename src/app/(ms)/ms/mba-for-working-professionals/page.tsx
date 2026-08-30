import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { COMPARISON_MS, HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/mba-for-working-professionals", {
  title: "Executive MBA Separuh Masa untuk Profesional Bekerja",
  description:
    "Executive MBA enam bulan untuk profesional bekerja di Malaysia — belajar pada tiga hujung minggu berjadual atau menerusi sesi dalam talian langsung, tanpa berhenti kerja.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/ms/mba-for-working-professionals#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Executive MBA enam bulan untuk profesional bekerja, dianugerahkan dan disokong oleh CMI, dengan pilihan penyampaian dalam talian.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/ms/mba-for-working-professionals`,
  inLanguage: "ms-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/ms/mba-for-working-professionals#blended-course-instance`,
    url: `${SITE.url}/ms/mba-for-working-professionals`,
    courseMode: "blended",
    timeRequired: "P6M",
  },
};

export default function MbaForWorkingProfessionalsPage() {
  const fit = [
    { h: "Tiga hujung minggu berjadual sepanjang enam bulan", p: "Program merangkumi tiga sesi berjadual, setiap satu berlangsung sepanjang satu hujung minggu." },
    { h: "Atau sepenuhnya dalam talian", p: "Program ini turut ditawarkan menerusi sesi dalam talian secara langsung, dengan bimbingan dan rangka kerja yang sama seperti laluan bersemuka." },
    { h: "Laluan gantian yang bertulis", p: "Jika anda terlepas satu sesi, ABC sediakan kaedah gantian yang diluluskan secara bertulis: akses video atau hadir semula dalam kohort susulan yang ditetapkan." },
    { h: "Terus pakai pada kerja anda sekarang", p: "Tiada tesis mahupun peperiksaan biasa. Anda pakai rangka kerja terus kepada cabaran perniagaan yang sedang anda pikul sekarang." },
  ];

  const audience = [
    { h: "Pemilik & usahawan", p: "Pengasas yang perniagaannya sudah membesar melangkaui apa yang mampu dibawa oleh naluri semata-mata." },
    { h: "Pengarah & pengurus besar", p: "Pemimpin yang memikul strategi, prestasi dan penyampaian sesebuah unit perniagaan." },
    { h: "Pengurus kanan", p: "Pengurus yang sedang beralih daripada mengurus satu fungsi kepada memikul keputusan merentas jabatan." },
    { h: "Profesional berpengalaman", p: "Profesional yang memikul strategi, transformasi, inovasi atau pertumbuhan." },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro */}
      <section className="section geo-section">
        <div className="wrap persona-hero-grid">
          <div>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Untuk profesional bekerja · separuh masa &amp; dalam talian</span>
            </div>
            <Reveal>
              <h1 className="sec-h">
                Sertai Executive MBA separuh masa tanpa berhenti kerja, sambil kekal <span className="acc">dalam peranan sedia ada</span>.
              </h1>
            </Reveal>
            <p className="sec-sub">
              Future Ready Executive MBA direka untuk anda yang mahu belajar tanpa perlu berhenti
              kerja sepenuh masa. Program ini berjalan selama enam bulan, menerusi tiga hujung minggu
              berjadual sepanjang tempoh itu. Chartered Manager pula ialah laluan pilihan CMI yang
              berasingan, dengan syarat kelayakan, penilaian dan yuran tersendiri; ia tidak termasuk
              dalam program atau yuran yang diterbitkan.
            </p>
            <p className="mono sec-k mt-s">
              Enam bulan · tiga hujung minggu program berjadual · dianugerahkan dan disokong oleh CMI
            </p>
            <p className="sec-sub mt-s">
              Terokai keseluruhan{" "}
              <Link href="/ms/executive-mba" className="acc">program Executive MBA</Link>, atau terus ke{" "}
              <Link href="/ms/intakes" className="acc">Sesi Pengambilan 2026</Link>.
            </p>
          </div>
          <Reveal delay={80}>
            <figure className="editorial-visual editorial-visual-portrait persona-hero-visual">
              <Image
                src="/images/future-ready-emba/future-ready-emba-working-leader-portrait-malaysia-4x5.webp"
                alt="Seorang pemimpin bekerja Malaysia menyemak dokumen perniagaan di tepi langit kota Kuala Lumpur"
                width={1664}
                height={2080}
                sizes="(max-width: 900px) 100vw, 38vw"
                priority
              />
              <figcaption>Dibina untuk pengurus yang terus memikul tanggungjawab kerja sambil belajar.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 2 · How it fits your week */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Bagaimana ia serasi dengan minggu anda</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Rancang minggu anda dengan jadual yang diterbitkan awal.</h2>
          </Reveal>
          <p className="sec-sub">
            Semak ketiga-tiga tarikh sesi sebelum anda mendaftar. Projek aplikasi menghubungkan program
            terus dengan cabaran perniagaan dalam peranan semasa anda.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {fit.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Comparison vs a reference academic MBA */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Berbanding MBA akademik rujukan</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Bandingkan dua laluan yang berbeza format dan kredensialnya.</h2>
          </Reveal>
          <p className="sec-sub">
            MBA akademik rujukan dalam perbandingan ini berjalan selama 18–24 bulan, dengan penilaian
            akademik serta disertasi atau tesis. Berikut perbandingan kedua-dua format ini secara
            bersebelahan.
          </p>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="Perbandingan format Executive MBA dan MBA akademik rujukan" hint="Leret untuk lihat semua lajur →">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">Executive MBA ini</th>
                    <th>MBA akademik rujukan</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_MS.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td className="us">{r.us}</td>
                      <td className="them">{r.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>
          </Reveal>
          <p className="fine mt-s">
            Jadual ini mentakrifkan MBA akademik rujukannya sebagai program 18–24 bulan yang dibina
            di sekeliling modul akademik, tugasan atau peperiksaan, serta disertasi atau tesis. Ia
            tidak mewakili setiap program MBA.{" "}
            Program profesional ini dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik
            yang dikawal selia MQA. Pilih mengikut kredensial dan cara belajar yang anda perlukan.
            Lihat keseluruhan{" "}
            <Link href="/ms/fees" className="acc">yuran &amp; kemasukan</Link>.
          </p>
        </div>
      </section>

      {/* 4 · 2026 intakes teaser */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Sesi Pengambilan 2026 · tiga hujung minggu berjadual sepanjang program</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Pilih kohort Bahasa Inggeris atau Mandarin untuk 2026.</h2>
          </Reveal>
          <p className="sec-sub">
            Kohort awam Malaysia semasa berlangsung 9 pagi–6 petang; Kohort 17 menggunakan Sabtu–Ahad
            manakala kohort lain yang diterbitkan menggunakan Jumaat–Sabtu. Pilihan dalam talian sepenuhnya turut tersedia.
          </p>
          <Reveal className="mt-s">
            <IntakeSchedule lang="ms" label="Jadual Sesi Pengambilan profesional bekerja 2026" />
          </Reveal>
          <p className="mt-s">
            <Link href="/ms/intakes" className="btn btn-primary">Lihat semua Sesi Pengambilan 2026</Link>
          </p>
        </div>
      </section>

      {/* 5 · Who it's for */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Untuk siapa</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Untuk anda yang memikul strategi merentas perniagaan.</h2>
          </Reveal>
          <p className="sec-sub">
            Program ini direka untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan
            yang memikul strategi, transformasi, inovasi atau pertumbuhan.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {audience.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            {HRD_CORP_CLAIM_MS} Biasiswa {FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis — ia tidak automatik. Setiap anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis.{" "}
            <Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link>.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Uji jadual ini dengan peranan yang anda pegang sekarang." />
    </>
  );
}
