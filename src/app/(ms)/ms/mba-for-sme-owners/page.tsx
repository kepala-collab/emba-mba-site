import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/mba-for-sme-owners", {
  title: "Executive MBA untuk Pemilik & Pengasas PKS",
  description:
    "Executive MBA dalam Future Ready Business Leadership dianugerahkan dan disokong oleh CMI. Dibina untuk pemilik PKS merentasi tiga sesi berjadual.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Executive MBA dalam Future Ready Business Leadership dianugerahkan dan disokong oleh CMI. Ia disampaikan untuk pemilik dan pengasas PKS merentasi tiga sesi berjadual.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/ms/executive-mba`,
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
    { h: "Pergantungan operasi", p: "Harga, kelulusan, keputusan pelanggan dan penyelesaian masalah masih bergantung pada pemilik." },
    { h: "Kapasiti keputusan terhad", p: "Pertumbuhan perniagaan meningkatkan bilangan keputusan lebih pantas daripada yang boleh diproses seorang individu." },
    { h: "Strategi tanpa masa terlindung", p: "Kerja operasi segera berulang kali mengatasi keutamaan keputusan pasaran, keupayaan dan pelaburan." },
    { h: "Penggantian yang tidak jelas", p: "Peranan, hak membuat keputusan dan pengetahuan operasi tidak didokumentasikan cukup baik untuk pemindahan kepimpinan." },
    { h: "Pengurusan reaktif", p: "Pasukan menangani gejala segera tanpa mengubah proses atau insentif yang menghasilkannya." },
  ];

  const fit = [
    { h: "Tiga hujung minggu berjadual sepanjang enam bulan", p: "Tiga sesi fasa sijil berjalan sekali sebulan. Jadual intake yang diterbitkan menyatakan jadual Jumaat–Sabtu atau Sabtu–Ahad bagi setiap kohort." },
    { h: "Perniagaan anda ialah projek aplikasi", p: "Tiada tesis atau peperiksaan tradisional. Peserta menggunakan rangka kerja untuk membina pelan transformasi bagi organisasi mereka sendiri." },
    { h: "Pembiayaan HRD Corp dipohon majikan", p: HRD_CORP_CLAIM_MS },
    { h: "Kelayakan biasiswa untuk warganegara Malaysia", p: `Pemohon Malaysia yang layak boleh dipertimbangkan untuk biasiswa ${FACTS.scholarshipProvider}. Sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis; pilihan ansuran disenaraikan di halaman Yuran.` },
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
              Bina sistem yang mengurangkan <span className="acc">pergantungan pemilik</span>.
            </h1>
          </Reveal>
          <p className="sec-sub">
            Future Ready Executive MBA membantu pemilik PKS meneliti di mana keputusan, pengetahuan
            pelanggan dan kawalan operasi masih tertumpu pada satu individu. Program mengaplikasikan
            rangka kerja sistem, strategi dan kepimpinan kepada pengagihan tugas, pembinaan keupayaan,
            penggantian dan pertumbuhan.
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
            <span className="mono sec-k">Petunjuk operasi</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Di mana pergantungan pemilik muncul dalam perniagaan.</h2>
          </Reveal>
          <p className="sec-sub">
            Gunakan petunjuk ini untuk mengenal pasti kekangan operasi mana yang perlu ditangani projek aplikasi.
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
            <h2 className="sec-h">Pindahkan keputusan berulang kepada sistem operasi yang tersusun.</h2>
          </Reveal>
          <p className="sec-sub">
            Program tertumpu pada sistem operasi di sekeliling pemilik: hak membuat keputusan, proses,
            aliran maklumat, keupayaan kepimpinan dan ukuran. Ia membina keupayaan pengurusan;
            pertumbuhan dan pulangan bergantung pada keputusan dan pelaksanaan yang mengikutinya.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Lihat keseluruhan papan</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Pemikiran sistem dan prinsip pertama menjejaki bagaimana satu keputusan menjejaskan
                  pelanggan, orang, wang tunai, kapasiti dan pelaksanaan sebelum sumber dilaburkan.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Bina sistem, bukan pergantungan</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Tukar pengetahuan yang dipegang pemilik kepada proses berdokumen, kriteria keputusan
                  dan peraturan eskalasi yang boleh digunakan pemimpin lain.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Agihkan tugas dengan rangka kerja</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Gunakan kepimpinan situasi dan rangka kerja fasilitasi untuk menetapkan hasil,
                  autoriti keputusan, sokongan dan titik semakan—bukan sekadar tugasan.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">Rancang untuk berkembang atau keluar</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  Strategi yang tersusun memberikan anda pandangan yang boleh dipertahankan tentang
                  hala tuju perniagaan seterusnya — asas kepada pelan skala, penggantian atau keluar
                  yang jelas.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="fine mt-s">
            Ini ialah program keupayaan, bukan jaminan pertumbuhan atau pulangan. Lihat bagaimana kaedah
            ini berfungsi dalam <Link href="/ms/curriculum" className="acc">kurikulum</Link>.
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
            <h2 className="sec-h">Format yang membolehkan pemilik terus berada dalam perniagaan.</h2>
          </Reveal>
          <p className="sec-sub">
            Program enam bulan ini menggunakan sesi hujung minggu berjadual, dan projek aplikasi
            berasaskan organisasi peserta sendiri. Laluan pembiayaan dan bayaran dijelaskan secara berasingan.
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
            dikawal selia MQA. <Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link>{" "}
            sebelum memilih satu intake.
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">Tentukan pergantungan pemilik mana yang perlu ditangani program.</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            Bincangkan cabaran operasi anda dengan pasukan program dan sahkan sama ada projek aplikasi,
            jadual dan profil peserta sesuai dengan matlamat anda.
          </p>
          <p className="mt-s">
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan sistem yang diperlukan perniagaan anda di luar pemilik." />
    </>
  );
}
