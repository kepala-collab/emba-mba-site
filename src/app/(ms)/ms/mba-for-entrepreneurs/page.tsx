import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, THINKING_EDGE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/mba-for-entrepreneurs", {
  title: "Executive MBA untuk Usahawan & Pengasas",
  description:
    "Program pembangunan profesional enam bulan untuk usahawan dan pengasas di Malaysia, dengan sijil program yang diiktiraf CMI.",
});

export default function MbaForEntrepreneursPage() {
  const firstPrinciples = THINKING_EDGE.find((t) => t.i.includes("First-Principle"));
  const systems = THINKING_EDGE.find((t) => t.i.includes("Systems"));
  const framework = THINKING_EDGE.find((t) => t.i.includes("Framework"));

  const built = [
    {
      h: "Menyelesaikan masalah dari prinsip asas",
      p: `${firstPrinciples?.p ?? "Bezakan kekangan yang benar-benar wujud daripada andaian yang sekadar diwarisi."} Daripada situ, rangka dan uji proposisi nilai yang tersendiri.`,
    },
    {
      h: "Pemikiran model perniagaan & JTBD",
      p: "Perjelas tugas sebenar pelanggan, buktinya, alternatif yang ada dan sejauh mana mereka sanggup membayar — sebelum anda muktamadkan keputusan produk dan harga.",
    },
    {
      h: "Menimbang keputusan dengan bantuan AI",
      p: "Kenali di mana AI benar-benar membantu kerja penyelidikan, analisis atau aliran kerja anda — dan di mana pertimbangan serta akauntabiliti manusia tetap tidak boleh digantikan.",
    },
    {
      h: "Strategi yang siap dibentangkan kepada pihak berkepentingan",
      p: `${systems?.p ?? "Jejaki sesuatu sebab hingga ke kesan peringkat ketiganya sebelum anda melangkah."} Dokumenkan andaian, pilihan, tindakan dan ukuran anda supaya sedia dibentangkan kepada rakan pengasas, lembaga atau pelabur.`,
    },
    {
      h: "Perspektif rentas fungsi",
      p: "Tangani keputusan bersama peserta lain yang sama-sama memikul tanggungjawab merentasi pemilikan, pengurusan am dan fungsi kanan.",
    },
    {
      h: "Struktur untuk keutamaan yang berlumba",
      p: framework?.p ?? "Ubah kerumitan yang membebankan menjadi keputusan yang benar-benar boleh anda laksanakan.",
    },
  ];

  const format = [
    { h: "Jadual enam bulan yang jelas", p: "Tiga sesi berjadual membawa anda kepada sijil program yang diiktiraf CMI — tanpa perlu berhenti kerja." },
    { h: "Tiga hujung minggu berjadual, atau sepenuhnya dalam talian", p: "Program berlangsung pada tiga hujung minggu berjadual sepanjang enam bulan; laluan dalam talian global pula menghapuskan keperluan hadir secara fizikal." },
    { h: "Diterapkan sepanjang program", p: "Tiada tesis mahupun peperiksaan tradisional. Peserta menerapkan setiap rangka kerja terus kepada usaha atau organisasi yang mereka terajui." },
    { h: "Laluan gantian yang bertulis", p: "Jika anda terlepas satu sesi, ABC menyediakan kaedah gantian yang diluluskan secara bertulis: akses video atau hadir semula dalam kohort susulan yang ditetapkan." },
  ];

  return (
    <>
      {/* 1 · Intro */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Untuk usahawan &amp; pengasas startup</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              Rangka kerja untuk setiap keputusan yang anda buat sambil <span className="acc">membina usaha.</span>
            </h1>
          </Reveal>
          <p className="sec-sub">
            Setiap hari, seorang pengasas berdepan keputusan yang saling berkait — tentang pelanggan,
            produk, harga, modal, keupayaan dan masa. Selama enam bulan, Future Ready Executive MBA
            menerapkan rangka kerja prinsip asas, pemikiran sistem dan Job-To-Be-Done terus kepada
            keputusan sebegitu. Projek aplikasinya pula bertitik tolak daripada usaha atau organisasi
            yang sedang anda bina sendiri.
          </p>
          <p className="mono sec-k mt-s">
            Enam bulan · tiga hujung minggu program berjadual · dianugerahkan dan disokong oleh CMI
          </p>
          <p className="sec-sub mt-s">
            Lihat keseluruhan{" "}
            <Link href="/ms/executive-mba" className="acc">program Executive MBA</Link>, atau fahami{" "}
            <Link href="/ms/how-it-works" className="acc">cara ia berjalan</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Built for how founders move */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Ruang keputusan seorang pengasas</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Daripada sekadar idea, kepada model perniagaan yang benar-benar boleh dilaksanakan.</h2>
          </Reveal>
          <p className="sec-sub">
            Rangka kerja ini menyusun segala-galanya — daripada bukti pelanggan, pilihan strategik dan
            pembahagian sumber, hinggalah cara anda berkomunikasi dengan pihak berkepentingan dan
            melaksanakannya.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {built.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Lihat bagaimana program menerapkan rangka kerja keputusannya dalam{" "}
            <Link href="/ms/ai-executive-mba" className="acc">kepimpinan berbantukan AI</Link>.
          </p>
        </div>
      </section>

      {/* 3 · Apply to your venture */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Diterapkan pada usaha anda sendiri</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Projek aplikasi yang menyelesaikan cabaran perniagaan anda sendiri.</h2>
          </Reveal>
          <p className="sec-sub">
            Tiada tesis mahupun peperiksaan tradisional. Peserta memilih satu cabaran sebenar,
            menerapkan rangka kerja program dan menghasilkan pelan transformasi tersusun untuk dinilai
            fasilitator. Pelan itu memperincikan andaian, keputusan, tindakan, pemilik dan ukuran —
            sedia untuk dibincangkan bersama rakan pengasas, lembaga atau pelabur.
          </p>
          <p className="fine mt-s">
            Tiada pembiayaan atau pertumbuhan yang dijanjikan — rangka kerja dan pelan itu milik anda
            sepenuhnya; hasilnya bergantung pada cara anda melaksanakannya. Lihat bagaimana{" "}
            <Link href="/ms/how-it-works" className="acc">kaedah ini membina langkah demi langkah ke arah projek puncak</Link>.
          </p>
        </div>
      </section>

      {/* 4 · Why the format works for founders */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Mengapa format ini sesuai untuk pengasas</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Teruskan urus perniagaan sambil menamatkan program.</h2>
          </Reveal>
          <p className="sec-sub">
            Program ini dijalankan menerusi tiga sesi hujung minggu berjadual, bimbingan dan projek
            aplikasi. Chartered Manager pula ialah laluan pilihan CMI yang berasingan, dengan syarat
            kelayakan, penilaian dan yuran tersendiri.
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {format.map((x) => (
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

      {/* 5 · CTA nudge */}
      <section className="section">
        <div className="wrap center">
          <Reveal>
            <h2 className="sec-h">Uji program ini dengan keputusan yang sedang anda hadapi dalam usaha anda.</h2>
          </Reveal>
          <p className="sec-sub">
            Program ini berjalan selama enam bulan. Yuran standard ialah {FACTS.priceStd}. Biasiswa {FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis — ia tidak automatik, dan bukan kod diskaun.
          </p>
          <p className="mt-s">
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan keputusan yang perlu disusun rapi dalam usaha anda." />
    </>
  );
}
