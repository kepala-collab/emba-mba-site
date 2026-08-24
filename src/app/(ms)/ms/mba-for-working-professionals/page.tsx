import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { COMPARISON_MS, HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/mba-for-working-professionals", {
  title: "Executive MBA Separuh Masa untuk Profesional Bekerja",
  description:
    "Belajar sambil terus bekerja sepenuh masa: Executive MBA tiga bulan untuk profesional yang bekerja, disampaikan satu hujung minggu sebulan atau melalui sesi dalam talian langsung.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Executive MBA dalam Future Ready Business Leadership dianugerahkan dan disokong oleh CMI. Ia disampaikan merentasi tiga bulan, satu hujung minggu sebulan, dengan pilihan penyampaian dalam talian.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/ms/executive-mba`,
  inLanguage: "ms-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/ms/mba-for-working-professionals#blended-course-instance`,
    url: `${SITE.url}/ms/mba-for-working-professionals`,
    courseMode: "blended",
    timeRequired: "P3M",
  },
};

export default function MbaForWorkingProfessionalsPage() {
  const fit = [
    { h: "Satu hujung minggu berjadual sebulan", p: "Program merangkumi tiga sesi berjadual, setiap satu berjalan sepanjang satu hujung minggu." },
    { h: "Atau sepenuhnya dalam talian", p: "Program ini juga tersedia melalui sesi dalam talian langsung, dengan bimbingan dan rangka kerja yang sama seperti laluan bersemuka." },
    { h: "Laluan gantian bertulis", p: "Jika anda terlepas satu sesi, ABC merekodkan kaedah gantian yang diluluskan secara bertulis: akses video atau kehadiran dalam kohort susulan yang dinamakan." },
    { h: "Aplikasikan kepada kerja semasa", p: "Tiada tesis atau peperiksaan tradisional. Peserta mengaplikasikan rangka kerja kepada cabaran perniagaan yang mereka pegang sekarang." },
  ];

  const audience = [
    { h: "Pemilik & usahawan", p: "Pengasas yang berkembang melangkaui apa yang boleh dibawa oleh naluri sahaja." },
    { h: "Pengarah & pengurus besar", p: "Pemimpin yang bertanggungjawab terhadap strategi, prestasi dan penyampaian unit perniagaan." },
    { h: "Pengurus kanan", p: "Pengurus yang beralih daripada penyampaian fungsi kepada tanggungjawab keputusan merentasi fungsi." },
    { h: "Profesional berpengalaman", p: "Profesional yang bertanggungjawab terhadap strategi, transformasi, inovasi atau pertumbuhan." },
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
                Jadual Executive MBA separuh masa untuk profesional yang kekal <span className="acc">dalam peranan mereka</span>.
              </h1>
            </Reveal>
            <p className="sec-sub">
              Future Ready Executive MBA direka untuk peserta yang mahu belajar sambil terus bekerja
              sepenuh masa. Program berjalan selama tiga bulan, menggunakan satu hujung minggu berjadual
              sebulan. Chartered Manager ialah laluan pilihan CMI yang berasingan dengan kelayakan,
              penilaian dan yuran tersendiri; ia tidak termasuk dalam program atau yuran yang diterbitkan.
            </p>
            <p className="mono sec-k mt-s">
              Tiga bulan · tiga hujung minggu program bulanan · dianugerahkan dan disokong oleh CMI
            </p>
            <p className="sec-sub mt-s">
              Terokai keseluruhan{" "}
              <Link href="/ms/executive-mba" className="acc">program Executive MBA</Link>, atau terus ke{" "}
              <Link href="/ms/intakes" className="acc">intake 2026</Link>.
            </p>
          </div>
          <Reveal delay={80}>
            <figure className="editorial-visual editorial-visual-portrait persona-hero-visual">
              <Image
                src="/images/future-ready-emba/future-ready-emba-working-leader-portrait-malaysia-4x5.webp"
                alt="Seorang pemimpin bekerja Malaysia menyemak dokumen perniagaan di sebelah langit kota Kuala Lumpur"
                width={1664}
                height={2080}
                sizes="(max-width: 900px) 100vw, 38vw"
                priority
              />
              <figcaption>Dibina untuk pengurus yang terus membawa kerja sambil mereka belajar.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 2 · How it fits your week */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Bagaimana ia sesuai dengan minggu anda</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Jadual yang diterbitkan untuk peserta yang kekal bekerja.</h2>
          </Reveal>
          <p className="sec-sub">
            Semak tiga tarikh sesi sebelum mendaftar. Projek aplikasi menghubungkan program kepada
            cabaran perniagaan dalam peranan semasa peserta.
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
            <h2 className="sec-h">Bandingkan dua laluan dengan format dan kredensial yang berbeza.</h2>
          </Reveal>
          <p className="sec-sub">
            MBA akademik rujukan dalam perbandingan ini berjalan selama 18–24 bulan dan menggunakan
            penilaian akademik ditambah disertasi atau tesis. Berikut ialah cara kedua-dua format
            tersusun ini dibandingkan.
          </p>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="Perbandingan format Executive MBA dan MBA akademik rujukan">
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
            di sekeliling modul akademik, tugasan atau peperiksaan, dan disertasi atau tesis. Ia tidak
            menggambarkan setiap program MBA.{" "}
            Program profesional ini dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik
            dikawal selia MQA. Pilih mengikut kredensial dan format pembelajaran yang anda perlukan.
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
            <span className="mono sec-k">Intake 2026 · satu hujung minggu sebulan</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Jadual Bahasa Inggeris dan Mandarin untuk 2026.</h2>
          </Reveal>
          <p className="sec-sub">
            Kohort awam Malaysia semasa berjalan 9 pagi–6 petang; Kohort 17 menggunakan Sabtu–Ahad dan
            kohort lain yang diterbitkan menggunakan Jumaat–Sabtu. Pilihan dalam talian sepenuhnya juga tersedia.
          </p>
          <Reveal className="mt-s">
            <IntakeSchedule lang="ms" label="Jadual intake profesional bekerja 2026" />
          </Reveal>
          <p className="mt-s">
            <Link href="/ms/intakes" className="btn btn-primary">Lihat semua intake 2026</Link>
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
            <h2 className="sec-h">Untuk profesional dengan tanggungjawab strategik atau merentasi perniagaan.</h2>
          </Reveal>
          <p className="sec-sub">
            Program ini direka untuk pemilik, pengarah, pengurus besar dan pengurus kanan yang
            bertanggungjawab terhadap strategi, transformasi, inovasi atau pertumbuhan.
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
            {HRD_CORP_CLAIM_MS} Pemohon Malaysia yang layak boleh menerima biasiswa {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} selepas penilaian dan kelulusan bertulis. Penerima yang diluluskan membayar {FACTS.priceAfterScholarship}.{" "}
            <Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link>.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Semak jadual terhadap peranan semasa anda." />
    </>
  );
}
