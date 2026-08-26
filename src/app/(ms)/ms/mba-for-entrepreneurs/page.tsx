import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, THINKING_EDGE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/mba-for-entrepreneurs", {
  title: "Executive MBA untuk Usahawan & Pengasas",
  description:
    "Program pengurusan profesional enam bulan untuk pengasas, dengan sijil program diiktiraf CMI.",
});

export default function MbaForEntrepreneursPage() {
  const firstPrinciples = THINKING_EDGE.find((t) => t.i.includes("First-Principle"));
  const systems = THINKING_EDGE.find((t) => t.i.includes("Systems"));
  const framework = THINKING_EDGE.find((t) => t.i.includes("Framework"));

  const built = [
    {
      h: "Penyelesaian masalah prinsip pertama",
      p: `${firstPrinciples?.p ?? "Asingkan kekangan yang disahkan daripada andaian yang diwarisi."} Gunakan hasilnya untuk mentakrifkan dan menguji proposisi yang berbeza.`,
    },
    {
      h: "Pemikiran model perniagaan & JTBD",
      p: "Takrifkan kerja pelanggan, bukti, alternatif dan kesanggupan membayar sebelum melaksanakan keputusan produk dan harga.",
    },
    {
      h: "Semakan keputusan berbantukan AI",
      p: "Nilai di mana AI menyokong penyelidikan, analisis atau aliran kerja—dan di mana semakan dan akauntabiliti manusia masih diperlukan.",
    },
    {
      h: "Strategi untuk semakan pihak berkepentingan",
      p: `${systems?.p ?? "Jejaki sebab kepada akibat peringkat ketiga sebelum anda melaksanakan."} Dokumenkan andaian, pilihan, tindakan dan ukuran untuk disemak oleh rakan pengasas, lembaga atau pelabur.`,
    },
    {
      h: "Perspektif merentasi fungsi",
      p: "Bekerja melalui keputusan bersama peserta yang memegang tanggungjawab merentasi pemilikan, pengurusan am dan fungsi kanan.",
    },
    {
      h: "Struktur untuk keutamaan yang bersaing",
      p: framework?.p ?? "Ubah kerumitan yang membebankan menjadi keputusan yang boleh anda laksanakan.",
    },
  ];

  const format = [
    { h: "Jadual enam bulan yang jelas", p: "Tiga sesi berjadual membawa kepada sijil program yang diiktiraf CMI sambil anda terus bekerja." },
    { h: "Tiga hujung minggu berjadual sepanjang program, atau dalam talian", p: "Program menggunakan tiga hujung minggu berjadual sepanjang enam bulan; laluan dalam talian global menghapuskan keperluan kehadiran fizikal." },
    { h: "Diaplikasikan sepanjang program", p: "Tiada tesis atau peperiksaan tradisional. Peserta mengaplikasikan rangka kerja kepada usaha atau organisasi yang mereka terajui." },
    { h: "Laluan gantian bertulis", p: "Jika anda terlepas satu sesi, ABC merekodkan kaedah gantian yang diluluskan secara bertulis: akses video atau kehadiran dalam kohort susulan yang dinamakan." },
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
              Rangka kerja untuk keputusan yang dibuat semasa <span className="acc">membina usaha.</span>
            </h1>
          </Reveal>
          <p className="sec-sub">
            Pengasas membuat keputusan berkait tentang pelanggan, produk, harga, modal, keupayaan dan masa.
            Future Ready Executive MBA mengaplikasikan rangka kerja prinsip pertama, sistem dan Job-To-Be-Done
            kepada keputusan itu sepanjang enam bulan. Projek aplikasi menggunakan usaha atau organisasi
            yang sedang dibina peserta.
          </p>
          <p className="mono sec-k mt-s">
            Enam bulan · tiga hujung minggu program berjadual · dianugerahkan dan disokong oleh CMI
          </p>
          <p className="sec-sub mt-s">
            Lihat keseluruhan{" "}
            <Link href="/ms/executive-mba" className="acc">program Executive MBA</Link>, atau bagaimana{" "}
            <Link href="/ms/how-it-works" className="acc">kaedah itu berfungsi</Link>.
          </p>
        </div>
      </section>

      {/* 2 · Built for how founders move */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Bidang keputusan pengasas</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Daripada proposisi, kepada model perniagaan yang boleh dilaksanakan.</h2>
          </Reveal>
          <p className="sec-sub">
            Rangka kerja ini menyusun bukti pelanggan, pilihan strategik, peruntukan sumber,
            komunikasi pihak berkepentingan dan pelaksanaan.
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
            Lihat bagaimana program mengaplikasikan rangka kerja keputusannya kepada{" "}
            <Link href="/ms/ai-executive-mba" className="acc">kepimpinan berbantukan AI</Link>.
          </p>
        </div>
      </section>

      {/* 3 · Apply to your venture */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">Diaplikasikan kepada usaha anda</span>
          </div>
          <Reveal>
            <h2 className="sec-h">Projek aplikasi menangani cabaran perniagaan anda sendiri.</h2>
          </Reveal>
          <p className="sec-sub">
            Tiada tesis atau peperiksaan tradisional. Peserta mentakrifkan cabaran sebenar,
            mengaplikasikan rangka kerja program dan menghasilkan pelan transformasi tersusun untuk
            disemak fasilitator. Pelan itu mengenal pasti andaian, keputusan, tindakan, pemilik dan
            ukuran untuk dibincangkan bersama rakan pengasas, lembaga atau pelabur.
          </p>
          <p className="fine mt-s">
            Tiada pembiayaan atau pertumbuhan dijanjikan — rangka kerja dan pelan itu milik anda;
            hasilnya bergantung pada bagaimana anda melaksanakannya. Lihat bagaimana{" "}
            <Link href="/ms/how-it-works" className="acc">kaedah itu membina ke arah projek puncak</Link>.
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
            <h2 className="sec-h">Teruskan beroperasi sambil menyelesaikan program.</h2>
          </Reveal>
          <p className="sec-sub">
            Program menggunakan tiga sesi hujung minggu berjadual, bimbingan dan projek aplikasi.
            Chartered Manager ialah laluan pilihan CMI yang berasingan dengan kelayakan, penilaian
            dan yuran tersendiri.
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
            <h2 className="sec-h">Semak program terhadap keputusan semasa usaha anda.</h2>
          </Reveal>
          <p className="sec-sub">
            Program ini berjalan selama enam bulan. Yuran standard ialah {FACTS.priceStd}. Pemohon Malaysia yang layak boleh dipertimbangkan untuk biasiswa {FACTS.scholarshipProvider}, tertakluk pada penilaian dan kelulusan bertulis.
          </p>
          <p className="mt-s">
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan keputusan yang perlu disusun oleh usaha anda." />
    </>
  );
}
