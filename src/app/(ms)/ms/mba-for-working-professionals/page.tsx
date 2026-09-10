import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_MS, SITE } from "@/lib/content";
import {
  CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS,
  COMPARISON_MS,
  HRD_CORP_CLAIM_MS,
  PROGRAMME_AUDIENCE_MS,
} from "@/lib/content-ms";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/mba-for-working-professionals", {
  title: "Executive MBA Separuh Masa untuk Profesional yang Bekerja",
  description:
    `Executive MBA ${FACTS.durationMonths} bulan untuk profesional yang bekerja di Malaysia — belajar pada ${FACTS.liveSessions} hujung minggu berjadual atau menerusi sesi dalam talian langsung, tanpa berhenti kerja.`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/ms/mba-for-working-professionals#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    `${PROGRAMME_POSITIONING_MS} Disampaikan sepanjang ${FACTS.durationMonths} bulan menerusi ${FACTS.liveSessions} sesi berjadual, dengan pilihan penyampaian dalam talian.`,
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
    { h: `${FACTS.liveSessions} hujung minggu berjadual sepanjang ${FACTS.durationMonths} bulan`, p: `Program merangkumi ${FACTS.liveSessions} sesi berpandu, setiap satu berlangsung sepanjang satu hujung minggu.` },
    { h: "Atau sepenuhnya dalam talian", p: "Program ini turut ditawarkan menerusi sesi dalam talian secara langsung, dengan bimbingan dan rangka kerja yang sama seperti laluan bersemuka." },
    { h: "Laluan gantian yang bertulis", p: "Jika anda terlepas satu sesi, ABC sediakan kaedah gantian yang diluluskan secara bertulis: akses video atau hadir semula dalam kohort susulan yang ditetapkan." },
    { h: "Keputusan itu kekal milik anda", p: "Tiada tesis mahupun peperiksaan biasa. Anda bawa rangka kerja terus kepada satu keputusan yang sudah di tangan anda, antara sesi, dalam organisasi anda sendiri." },
  ];

  const audience = [
    { h: "Pemilik & usahawan", p: "Pemilik yang keputusannya sudah memberi kesan kepada lebih daripada meja sendiri." },
    { h: "Pengarah & pengurus besar", p: "Pemimpin yang memikul strategi, prestasi dan penyampaian sesebuah unit perniagaan." },
    { h: "Pengurus kanan", p: "Pengurus yang sedang beralih daripada satu fungsi kepada keputusan merentas jabatan." },
    { h: "Profesional berpengalaman", p: "Profesional yang bertanggungjawab atas strategi, transformasi, inovasi atau pertumbuhan." },
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
              <span className="mono sec-k">Untuk profesional yang bekerja · separuh masa &amp; dalam talian</span>
            </div>
            <Reveal>
              <h1 className="sec-h">
                Kekalkan jawatan. <span className="acc">Ubah cara anda membuat keputusan.</span>
              </h1>
            </Reveal>
            <p className="sec-sub">
              Anda kekalkan jawatan dan tanggungjawab sedia ada. Sepanjang {FACTS.durationMonths} bulan, anda bawa satu
              keputusan yang sudah di tangan anda dan usahakannya — menerusi {FACTS.trainingDays} hari latihan dalam {FACTS.liveSessions} sesi
              berjadual, bimbingan satu-lawan-satu dan projek amali perniagaan — menjadi pelan tindakan bertulis
              yang disemak oleh fakulti. Rangka kerja dan templat kerja itu kekal milik anda. Kaedah ini
              membina keupayaan membuat keputusan; hasil perniagaan bergantung pada bukti, pilihan dan
              pelaksanaan peserta sendiri.
            </p>
            <p className="mono sec-k mt-s">
              {FACTS.durationMonths} bulan · {FACTS.liveSessions} sesi berjadual · dianugerahkan dan disokong oleh CMI
            </p>
            <p className="sec-sub mt-s">
              {PROGRAMME_POSITIONING_MS} Ia program pembangunan profesional bukan akademik selama {FACTS.durationMonths} bulan,
              bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.{" "}
              {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Chartered Manager pula ialah laluan Chartered
              Manager yang berasingan dan tidak wajib, ditentukan oleh CMI, dengan syarat kelayakan, penilaian
              dan yuran tersendiri; ia tidak termasuk dalam program atau yuran yang diterbitkan.
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
            <h2 className="sec-h">Jadual yang diterbitkan awal, sambil anda kekal bekerja.</h2>
          </Reveal>
          <p className="sec-sub">
            Semak ketiga-tiga tarikh sesi sebelum anda bertanya. Projek amali perniagaan mengambil
            keputusan yang sudah di tangan anda dan mengusahakannya antara sesi, dalam organisasi anda sendiri.
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
            {PROGRAMME_POSITIONING_MS} Ia program pembangunan profesional bukan akademik, bukan ijazah
            akademik terakreditasi MQA atau kelayakan yang dikawal selia. {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}{" "}
            Pilih mengikut kredensial dan cara belajar yang anda perlukan. Lihat keseluruhan{" "}
            <Link href="/ms/fees" className="acc">yuran &amp; kemasukan</Link>.
          </p>
        </div>
      </section>

      {/* 4 · 2026 intakes teaser */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Sesi Pengambilan 2026 · {FACTS.liveSessions} hujung minggu berjadual sepanjang program</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Pilih bila enam bulan anda bermula.</h2>
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
            <h2 className="sec-h">Untuk profesional yang bekerja dengan tanggungjawab strategik.</h2>
          </Reveal>
          <p className="sec-sub">
            {PROGRAMME_AUDIENCE_MS}
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
            {HRD_CORP_CLAIM_MS} Biasiswa {FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih
            kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis. Setiap anugerah dan
            yuran peserta disahkan secara individu secara bertulis. Biasiswa ini tidak automatik.{" "}
            <Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link>.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Uji jadual ini dengan keputusan yang sedang anda pikul sekarang." />
    </>
  );
}
