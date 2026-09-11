import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import {
  CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS,
  ENQUIRY_COMMITMENT_MS,
  HRD_CORP_CLAIM_LABEL_MS,
  HRD_CORP_CLAIM_MS,
} from "@/lib/content-ms";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/mba-for-sme-owners", {
  title: "Executive MBA untuk Pemilik & Pengasas PKS",
  description:
    `Daripada keputusan yang tersimpan di kepala kepada keputusan yang tertulis: projek amali perniagaan membawa satu isu operasi kepada pelan yang disemak fakulti sepanjang ${FACTS.durationMonths} bulan. Dianugerahkan dan disokong oleh CMI; bukan ijazah akademik terakreditasi MQA.`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/ms/mba-for-sme-owners#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    `Pemilik membawa satu isu operasi — harga, penggantian atau pergantungan pelanggan — daripada masalah kepada pelan bertulis berserta pemilik dan ukuran, disemak oleh fakulti, sepanjang ${FACTS.durationMonths} bulan merentas ${FACTS.liveSessions} sesi berpandu. Dianugerahkan dan disokong oleh CMI; bukan ijazah akademik terakreditasi MQA.`,
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/ms/mba-for-sme-owners`,
  inLanguage: "ms-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/ms/mba-for-sme-owners#blended-course-instance`,
    url: `${SITE.url}/ms/mba-for-sme-owners`,
    courseMode: "blended",
    timeRequired: "P6M",
  },
};

export default function MbaForSmeOwnersPage() {
  const challenges = [
    { h: "Harga dan kelulusan", p: "Soal harga, kelulusan dan keputusan pelanggan masih melalui anda." },
    { h: "Bilangan keputusan", p: "Perniagaan berkembang, keputusan bertambah lebih pantas daripada yang mampu ditangani seorang." },
    { h: "Masa terlindung untuk strategi", p: "Urusan operasi mengambil masa yang sepatutnya untuk keputusan pasaran, keupayaan dan pelaburan." },
    { h: "Penggantian belum tertulis", p: "Peranan, kuasa membuat keputusan dan pengetahuan operasi belum dicatat untuk diserahkan kepada orang lain." },
    { h: "Masalah yang sama, ditangani semula", p: "Pasukan menangani gejala tanpa mengubah proses atau insentif yang menghasilkannya." },
  ];

  const fit = [
    { h: `${FACTS.trainingDays} hari latihan merentas ${FACTS.liveSessions} sesi berjadual`, p: "Jadual pengambilan yang diterbitkan menetapkan sama ada Jumaat–Sabtu atau Sabtu–Ahad bagi setiap kohort." },
    { h: "Perniagaan anda sendiri ialah projek amali", p: "Projek amali perniagaan ialah pelan bertulis untuk disemak fakulti, dibina atas organisasi anda sendiri — tiada tesis mahupun peperiksaan biasa." },
    { h: "Pembiayaan HRD Corp dipohon oleh majikan", p: HRD_CORP_CLAIM_MS },
    { h: "Kelayakan biasiswa untuk warganegara Malaysia", p: `Biasiswa ${FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian individu dan kelulusan bertulis; sebarang anugerah dan yuran peserta disahkan secara individu, secara bertulis. Biasiswa tidak automatik; pilihan ansuran disenaraikan di halaman Yuran.` },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro — name the change of experience */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Untuk pemilik &amp; pengasas PKS</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              Daripada keputusan di kepala kepada <span className="acc">keputusan bertulis</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            Pemilik menyimpan pengetahuan pelanggan, soal harga dan kawalan operasi di kepala sendiri.
            Sepanjang {FACTS.durationMonths} bulan, projek amali perniagaan membawa satu isu operasi —
            harga, penggantian atau pergantungan pelanggan — daripada masalah kepada pelan bertulis
            berserta pemilik dan ukuran, disemak oleh fakulti. Ia membina keupayaan pengurusan; pertumbuhan
            dan pulangan bergantung pada keputusan dan pelaksanaan yang menyusul.
          </p>
          <p className="sec-sub mt-s">
            {FACTS.trainingDays} hari latihan merentas {FACTS.liveSessions} sesi berjadual, bimbingan
            satu-ke-satu dan projek amali perniagaan atas isu dalam tanggungjawab anda sendiri. Rangka
            kerja dan templat kerja terus menjadi milik anda.
          </p>
          <p className="sec-sub mt-s">
            Executive MBA on Future Ready Business Leadership dianugerahkan dan disokong oleh CMI.
            Peserta yang berjaya menerima CMI Certificate of Recognition; ia bukan ijazah akademik
            terakreditasi MQA atau kelayakan yang dikawal selia. {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}
          </p>
          <p className="mono sec-k mt-s">
            Yuran standard {FACTS.priceStd} · {HRD_CORP_CLAIM_LABEL_MS}. Biasiswa {FACTS.scholarshipProvider}{" "}
            adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas
            penilaian dan kelulusan bertulis. Biasiswa tidak automatik. {ENQUIRY_COMMITMENT_MS}
          </p>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link>
              <Link href="/ms/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.ms.company}</Link>
            </div>
          </Reveal>
          <p className="sec-sub mt-s">
            Lihat keseluruhan{" "}
            <Link href="/ms/executive-mba" className="acc">program Executive MBA</Link>, atau terokai
            <Link href="/ms/curriculum" className="acc"> kurikulum berteraskan pemikiran</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Di mana perniagaan bergantung kepada anda */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Tanda-tanda dalam operasi</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Di mana perniagaan masih bergantung kepada anda.</h2>
          </Reveal>
          <p className="sec-sub">
            Ini ialah keadaan operasi yang boleh ditangani oleh projek amali anda — bukan penilaian
            tentang cara anda menguruskan perniagaan.
          </p>
          <div className="mt-m grid-forces">
            {challenges.map((x) => (
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

      {/* 3 · Apa yang berubah, dalam susunan 5S */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Apa yang berubah</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Satu isu operasi menjadi pelan bertulis.</h2>
          </Reveal>
          <p className="sec-sub">
            Projek amali perniagaan menangani sistem operasi di sekeliling anda: kuasa membuat
            keputusan, proses, aliran maklumat, keupayaan kepimpinan dan ukuran. Ia membina keupayaan
            pengurusan; pertumbuhan dan pulangan bergantung pada keputusan dan pelaksanaan yang menyusul.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Perniagaan terus berjalan tanpa anda di dalam bilik</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Kriteria keputusan dan garis panduan eskalasi dicatat secara bertulis, jadi operasi
                  terus berjalan semasa anda berada dalam sesi.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Penggantian mempunyai pelan bertulis</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Peranan, kuasa membuat keputusan dan pengetahuan operasi berpindah daripada ingatan
                  anda kepada dokumen yang boleh disemak fakulti.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Pasukan bertindak atas keputusan, bukan sekadar tugasan</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Kepimpinan situasi dan rangka kerja fasilitasi menetapkan hasil, kuasa membuat
                  keputusan, sokongan dan titik semakan kepada orang yang memikulnya.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Pemimpin lain turut dibina, bukan sekadar diagihkan tugas</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Pelan ini untuk orang yang bergantung pada keputusan anda: pasukan yang memikulnya,
                  pelanggan yang dituju, dan sesiapa yang meneruskan perniagaan selepas anda.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="fine mt-s">
            Ini program membina keupayaan, bukan jaminan pertumbuhan atau pulangan. Lihat bagaimana
            kaedah ini berjalan dalam <Link href="/ms/curriculum" className="acc">kurikulum</Link>.
          </p>
        </div>
      </section>

      {/* 4 · Mengapa ia sesuai untuk pemilik */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Mengapa ia sesuai untuk pemilik</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Susunan yang membolehkan anda terus dalam perniagaan.</h2>
          </Reveal>
          <p className="sec-sub">
            Sepanjang {FACTS.durationMonths} bulan anda terus dalam peranan anda, dan projek amali
            dikerjakan atas organisasi anda sendiri. Laluan pembiayaan dan bayaran diterangkan secara
            berasingan.
          </p>
          <div className="mt-m grid-forces">
            {fit.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Program profesional ini dianugerahkan dan disokong oleh CMI. Peserta yang berjaya menerima
            CMI Certificate of Recognition; ia bukan ijazah akademik terakreditasi MQA atau kelayakan
            yang dikawal selia. {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}{" "}
            <Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link>{" "}
            sebelum memilih kohort anda.
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">Tentukan isu operasi yang wajar ditangani projek amali.</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            Pelan yang anda bina adalah untuk orang yang bergantung pada keputusan anda. Bincangkan
            isu yang anda timbang dengan pasukan program, dan pastikan sama ada projek amali, jadual
            dan profil peserta benar-benar sepadan. {ENQUIRY_COMMITMENT_MS}
          </p>
          <p className="mt-s">
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Dapatkan fakta untuk isu operasi yang sedang anda hadapi." />
    </>
  );
}
