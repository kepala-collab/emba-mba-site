import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/mba-for-sme-owners", {
  title: "Executive MBA untuk Pemilik & Pengasas PKS",
  description:
    "Executive MBA dalam Future Ready Business Leadership dianugerahkan dan disokong oleh CMI. Dibina untuk pemilik PKS Malaysia, merentas tiga sesi berjadual dalam enam bulan.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/ms/mba-for-sme-owners#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Executive MBA dalam Future Ready Business Leadership dianugerahkan dan disokong oleh CMI. Ia disampaikan untuk pemilik dan pengasas PKS merentasi tiga sesi berjadual.",
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
    { h: "Semuanya berbalik kepada pemilik", p: "Soal harga, kelulusan, keputusan pelanggan dan selesaikan masalah — semuanya masih kembali kepada pemilik." },
    { h: "Keputusan bertimbun sampai tepu", p: "Semakin perniagaan membesar, semakin banyak keputusan menumpuk — lebih pantas daripada yang mampu ditangani seorang." },
    { h: "Tiada masa untuk fikir strategi", p: "Urusan harian sentiasa mendahului, jadi keputusan penting tentang pasaran, keupayaan dan pelaburan terus tertangguh." },
    { h: "Penggantian yang belum jelas", p: "Peranan, kuasa membuat keputusan dan pengetahuan operasi belum dicatat cukup rapi untuk diserahkan kepada barisan kepimpinan seterusnya." },
    { h: "Sekadar memadam api", p: "Pasukan sibuk memadam api, sedangkan proses atau insentif yang menyalakannya tidak pernah diubah." },
  ];

  const fit = [
    { h: "Tiga hujung minggu berjadual sepanjang enam bulan", p: "Tiga sesi fasa sijil diadakan sekali sebulan. Jadual Sesi Pengambilan yang diterbitkan menetapkan sama ada Jumaat–Sabtu atau Sabtu–Ahad bagi setiap kohort." },
    { h: "Perniagaan anda sendiri ialah projek aplikasi", p: "Tiada tesis mahupun peperiksaan biasa. Anda guna rangka kerja program untuk merangka pelan transformasi bagi organisasi anda sendiri." },
    { h: "Pembiayaan HRD Corp dipohon oleh majikan", p: HRD_CORP_CLAIM_MS },
    { h: "Kelayakan biasiswa untuk warganegara Malaysia", p: `Biasiswa ${FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis — ia tidak automatik. Setiap anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis; pilihan ansuran pula disenaraikan di halaman Yuran.` },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro — name the real pain */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Untuk pemilik &amp; pengasas PKS</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              Bina sistem yang mengurangkan <span className="acc">pergantungan pada pemilik</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            Future Ready Executive MBA membantu pemilik PKS mengenal pasti di mana keputusan,
            pengetahuan pelanggan dan kawalan operasi masih tertumpu pada satu orang sahaja. Program
            ini membawa rangka kerja sistem, strategi dan kepimpinan kepada kerja mengagihkan tugas,
            membina keupayaan pasukan, merancang penggantian dan memacu pertumbuhan.
          </p>
          <p className="mono sec-k mt-s">
            Enam bulan · tiga hujung minggu program berjadual · dianugerahkan dan disokong oleh CMI
          </p>
          <p className="sec-sub mt-s">
            Lihat keseluruhan{" "}
            <Link href="/ms/executive-mba" className="acc">program Executive MBA</Link>, atau terokai
            <Link href="/ms/curriculum" className="acc"> kurikulum berteraskan pemikiran</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Sound familiar? */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Tanda-tanda dalam operasi</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Kenal pasti di mana perniagaan terlalu bergantung pada pemilik.</h2>
          </Reveal>
          <p className="sec-sub">
            Guna tanda-tanda ini untuk mengenal pasti kekangan operasi mana yang berbaloi ditangani oleh projek aplikasi anda.
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

      {/* 3 · What changes */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Apa yang berubah</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Alihkan keputusan berulang kepada sistem operasi yang tersusun.</h2>
          </Reveal>
          <p className="sec-sub">
            Program ini menumpukan pada sistem operasi di sekeliling pemilik: kuasa membuat keputusan,
            proses, aliran maklumat, keupayaan kepimpinan dan ukuran. Ia membina keupayaan pengurusan;
            manakala pertumbuhan dan pulangan bergantung pada keputusan dan pelaksanaan yang menyusul.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Lihat gambaran yang lebih besar</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Pemikiran sistem dan prinsip asas menjejak bagaimana satu keputusan memberi kesan
                  kepada pelanggan, pasukan, aliran tunai, kapasiti dan pelaksanaan — sebelum anda
                  laburkan sebarang sumber.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Bina sistem, bukan pergantungan</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Ubah pengetahuan yang selama ini dipegang pemilik menjadi proses bertulis, kriteria
                  keputusan dan garis panduan eskalasi yang boleh terus dipakai pemimpin lain.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Agihkan tugas dengan rangka kerja</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Guna kepimpinan situasi dan rangka kerja fasilitasi untuk menetapkan hasil yang
                  diharap, kuasa membuat keputusan, sokongan dan titik semakan — bukan sekadar
                  melempar tugasan.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Rancang untuk berkembang atau keluar</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Strategi yang tersusun memberi anda pandangan yang jelas tentang hala tuju perniagaan
                  seterusnya — asas kepada pelan untuk berkembang, menyerahkan tampuk atau keluar dengan
                  jelas.
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

      {/* 4 · Why it fits owners */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Mengapa ia sesuai untuk pemilik</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Terus menerajui perniagaan sambil menamatkan program.</h2>
          </Reveal>
          <p className="sec-sub">
            Program enam bulan ini menggunakan sesi hujung minggu berjadual, dengan projek aplikasi
            yang berteraskan organisasi anda sendiri. Laluan pembiayaan dan bayaran diterangkan secara berasingan.
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
            Program profesional ini dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik
            yang dikawal selia MQA. <Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link>{" "}
            sebelum memilih kohort anda.
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">Kenal pasti pergantungan pada pemilik yang wajar anda tangani.</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            Bincangkan cabaran operasi anda dengan pasukan program, dan pastikan sama ada projek
            aplikasi, jadual dan profil peserta benar-benar sepadan dengan matlamat anda.
          </p>
          <p className="mt-s">
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan sistem yang perlu dibina supaya perniagaan tidak lagi bergantung pada pemilik." />
    </>
  );
}
