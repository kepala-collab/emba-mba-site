import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/ai-executive-mba", {
  title: "Executive MBA untuk Kepimpinan Era AI",
  description:
    "Gunakan rangka kerja Future Ready Executive MBA untuk penerapan AI, keputusan berasaskan data, reka bentuk semula proses dan pelaksanaan yang bertanggungjawab.",
});

const BUSINESS_PILLARS = [
  ["Keutamaan AI", "Kaitkan setiap kes penggunaan AI dengan objektif strategik organisasi dan kekangan operasinya."],
  ["Tafsiran data", "Asingkan isyarat yang boleh dipercayai daripada data yang tidak lengkap, tidak relevan atau mengelirukan."],
  ["Reka bentuk semula proses", "Petakan di mana automasi mengubah tugas, kawalan, serahan kerja dan hak membuat keputusan."],
  ["Tadbir urus inovasi", "Tetapkan cara idea dipilih, diuji, diukur dan dihentikan."],
  ["Pengukuran nilai", "Tetapkan pemilik, garis asas dan ukuran kejayaan bagi setiap inisiatif."],
];

const CAREER_PILLARS = [
  ["Kepimpinan", "Tetapkan tujuan, sempadan dan akauntabiliti bagi kerja yang dibantu AI."],
  ["Pertimbangan kritis", "Persoalkan output model, andaian, kualiti bukti dan kesan yang tidak diingini."],
  ["Reka bentuk keputusan", "Jelaskan keputusan mana yang kekal dipimpin manusia dan di mana alat hanya memberi sokongan."],
  ["Penjajaran pihak berkepentingan", "Terangkan perubahan yang dicadangkan, kawalannya serta kesannya terhadap pasukan dan pelanggan."],
  ["Pelaksanaan", "Terjemahkan kes penggunaan yang dipilih kepada pelan tindakan dengan pemilik dan ukuran yang jelas."],
];

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Kepimpinan era AI · Program diiktiraf CMI</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              Terajui penerapan AI sebagai <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>keputusan perniagaan.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              Halaman ini menerangkan bagaimana <Link href="/ms/executive-mba" className="acc">Future Ready Executive MBA</Link> yang diiktiraf CMI{" "}
              menggunakan rangka kerja keputusannya terhadap strategi AI, data, automasi, tadbir urus dan pelaksanaan.
              Ia program <b style={{ color: "var(--ink)" }}>6 bulan</b> yang sama, bukan pensijilan perisian atau teknikal yang berasingan.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              Daripada pemilihan kes penggunaan kepada <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>pelaksanaan yang terkawal.</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
              <Link href="/ms/how-it-works" className="btn btn-ghost">Lihat cara ia berfungsi</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Skop lensa AI</span></div></Reveal>
          <Reveal><h2 className="sec-h">Reka bentuk perniagaan dan tanggungjawab kepimpinan.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            Penerapan yang berkesan menuntut kedua-duanya: justifikasi perniagaan yang kukuh dan akauntabiliti manusia
            yang jelas. Program ini meneliti organisasi, proses membuat keputusan dan peranan pemimpin dalam pelaksanaan.
          </p></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Perniagaan · keutamaan · data · proses · tadbir urus · ukuran</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {BUSINESS_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>Kepimpinan · pertimbangan · hak keputusan · penjajaran · pelaksanaan</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {CAREER_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 3 · CONTEXT OVER CONTENT */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Soalan dahulu, alat kemudian</span></div></Reveal>
          <Reveal><h2 className="sec-h">Mulakan dengan masalah perniagaan, bukan model.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            <Link href="/ms/how-it-works" className="acc">Kaedah F.A.S.T.</Link> bermula dengan mentakrifkan hasil yang dikehendaki,
            bukti yang relevan, kekangan dan risiko. Selepas itu barulah pemimpin memutuskan sama ada AI sesuai digunakan dan
            bagaimana outputnya akan disemak.
          </p></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["01 · Sistem", "Telusuri sistem yang lebih luas", "Teliti punca, kebergantungan dan kesan yang dijangka sebelum membuat keputusan."],
              ["02 · Prinsip Pertama", "Uji asasnya", "Asingkan kekangan yang telah disahkan daripada andaian, kemudian bina pilihan daripada bukti."],
              ["03 · Reka Bentuk Integratif", "Gabungkan analisis dan reka cipta", "Bangunkan pilihan yang mengimbangi logik strategik, keperluan pengguna dan kekangan praktikal."],
            ].map(([i, h, p]) => (
              <div key={i} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>{i}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "14px 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 4 · SAME-PROGRAMME FACTS STRIP */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Fakta program</span></div></Reveal>
          <Reveal><h2 className="sec-h">Fokus AI tidak mengubah status rasmi program.</h2></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["Dianugerahkan dan disokong oleh CMI", "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Ia bukan ijazah akademik yang dikawal selia MQA."],
              ["HRD Corp", HRD_CORP_CLAIM_MS],
              ["Format", "Program enam bulan: tiga sesi berjadual berserta bimbingan dan projek aplikasi perniagaan."],
              ["Pelaburan", "Yuran standard " + FACTS.priceStd + ". Pemohon Malaysia yang layak boleh dipertimbangkan untuk biasiswa LIFE Innoversity; sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis."],
              ["Projek aplikasi", "Peserta menyiapkan pelan transformasi untuk perniagaan mereka sendiri; tiada peperiksaan atau tesis tradisional."],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            Program profesional ini dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik bertauliah MQA
            atau kelayakan yang dikawal selia. Ia tidak menjamin pendapatan, kenaikan pangkat atau hasil perniagaan.
          </p></Reveal>
        </div>
      </section>

      {/* 5 · URGENCY + CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            Semak program sebelum memilih kohort.
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            Semak kohort yang diterbitkan dan pilih kohort yang tarikhnya sesuai dengan tanggungjawab anda.
            Pasukan program akan menerangkan kurikulum, format dan keperluan permohonan.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
            <Link href="/ms/executive-mba" className="btn btn-ghost">Terokai program penuh</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection lang="ms" programme="AI Executive MBA" heading="Bincangkan bagaimana program ini menyokong keutamaan AI anda." sub="Pilih panggilan, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." />
    </>
  );
}
