import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_MS } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS, ENQUIRY_COMMITMENT_MS, HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/ai-executive-mba", {
  title: "Mulakan Dengan Masalah Perniagaan, Bukan Model AI",
  description:
    "Bawa satu keputusan penggunaan AI dan ubahnya, sepanjang enam bulan Future Ready Executive MBA, menjadi pelan bertulis yang disemak fasilitator.",
});

const BUSINESS_PILLARS = [
  ["Keutamaan AI", "Hubungkan setiap kegunaan AI dengan matlamat strategik dan batasan operasi organisasi anda."],
  ["Tafsiran data", "Bezakan isyarat yang boleh dipercayai daripada data yang tidak lengkap, tidak relevan atau mengelirukan."],
  ["Reka bentuk semula proses", "Kenal pasti bahagian yang automasi mengubah tugas, kawalan, serahan kerja dan kuasa membuat keputusan padanya."],
  ["Tadbir urus inovasi", "Tetapkan cara idea dipilih, diuji, diukur dan diberhentikan."],
  ["Pengukuran nilai", "Tentukan pemilik, garis asas dan ukuran kejayaan bagi setiap inisiatif."],
];

const CAREER_PILLARS = [
  ["Kepimpinan", "Tetapkan tujuan, sempadan dan akauntabiliti bagi kerja yang dibantu AI."],
  ["Pertimbangan kritis", "Persoalkan output model, andaiannya, kualiti bukti dan kesan yang tidak dijangka."],
  ["Reka bentuk keputusan", "Perjelas keputusan mana yang kekal di tangan manusia dan bila alat sekadar menyokong."],
  ["Penjajaran pihak berkepentingan", "Terangkan perubahan yang dicadangkan, kawalannya serta kesannya terhadap pasukan dan pelanggan."],
  ["Pelaksanaan", "Ubah kegunaan yang dipilih menjadi pelan tindakan, dengan pemilik dan ukuran yang jelas."],
];

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Untuk pengurus yang menentukan tempat AI · Malaysia</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              Mulakan dengan masalah perniagaan, <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>bukan model AI.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              Membuat keputusan tentang AI kini sebahagian daripada tugas anda. Soalan perniagaan didahulukan sebelum alat itu dipilih.
              Bawa satu keputusan sebenar berkaitan AI ke dalam <Link href="/ms/executive-mba" className="acc">Future Ready Executive MBA</Link>{" "}
              <b style={{ color: "var(--ink)" }}>{FACTS.durationMonths} bulan</b> yang sama. Ubah ia menjadi pelan tindakan bertulis yang disemak fasilitator.{" "}
              {PROGRAMME_POSITIONING_MS} Ia program pembangunan profesional bukan akademik selama {FACTS.durationMonths} bulan; bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              Daripada satu kegunaan AI kepada <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>pelan yang boleh diterajui pasukan anda.</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
              <Link href="/ms/how-it-works" className="btn btn-ghost">Lihat bagaimana enam bulan ini berfungsi</Link>
              <Link href="/ms/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.ms.company}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Skop lensa AI</span></div></Reveal>
          <Reveal><h2 className="sec-h">Timbang alasan perniagaan dan tanggungjawab kepimpinan bersama-sama.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            Satu kegunaan AI yang dicadangkan perlukan dua-duanya sekali: alasan perniagaan yang kukuh dan tanggungjawab manusia
            yang jelas. Anda meneliti organisasi anda sendiri, cara keputusan itu dibuat, dan peranan anda dalam pelaksanaan.
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
          <Reveal><h2 className="sec-h">Tentukan keputusan sebelum anda memilih model.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            <Link href="/ms/how-it-works" className="acc">Kaedah F.A.S.T.</Link> bermula dengan menetapkan hasil yang anda mahu,
            bukti yang relevan, batasan dan risiko. Barulah anda memutuskan sama ada AI sesuai digunakan dan
            bagaimana outputnya disemak.
          </p></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["01 · Sistem", "Telusuri sistem yang lebih luas", "Teliti punca, kebergantungan dan kesan yang dijangka sebelum membuat keputusan."],
              ["02 · Prinsip Pertama", "Uji asasnya", "Bezakan batasan yang telah disahkan daripada andaian, kemudian bina pilihan daripada bukti."],
              ["03 · Reka Bentuk Integratif", "Gabungkan analisis dan reka cipta", "Bangunkan pilihan yang mengimbangi logik strategik, keperluan pengguna dan batasan praktikal."],
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
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Fakta program</span></div></Reveal>
          <Reveal><h2 className="sec-h">Fokus AI tidak mengubah status rasmi program.</h2></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["Dianugerahkan dan disokong oleh CMI", `Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Ia bukan ijazah akademik yang dikawal selia MQA. ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}`],
              ["HRD Corp", HRD_CORP_CLAIM_MS],
              ["Format", `Program ${FACTS.durationMonths} bulan: ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, bimbingan satu-ke-satu dan satu projek amali perniagaan.`],
              ["Pelaburan", `Yuran standard ${FACTS.priceStd}. Biasiswa ${FACTS.scholarshipProvider} terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian individu dan kelulusan bertulis. Sebarang anugerah dan yuran peserta berkenaan disahkan secara individu, secara bertulis. Biasiswa tidak automatik.`],
              ["Projek amali", "Peserta menghasilkan pelan tindakan bertulis untuk perniagaan mereka sendiri, disemak fasilitator; tiada peperiksaan atau tesis tradisional."],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            Kaedah ini direka untuk membina kapasiti membuat keputusan bagi kerja berkaitan AI; hasil perniagaan
            bergantung kepada bukti, pilihan dan pelaksanaan peserta sendiri.
          </p></Reveal>
        </div>
      </section>

      {/* 5 · URGENCY + CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            Semak fakta sebelum anda memilih kohort.
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            Semak kohort yang telah diterbitkan dan pilih tarikh yang paling sesuai dengan tanggungjawab anda.
            Pasukan program akan menjawab soalan tentang struktur, yuran, pengiktirafan dan pembiayaan HRD Corp yang diterajui majikan.
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
            <Link href="/ms/executive-mba" className="btn btn-ghost">Terokai program penuh</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection lang="ms" programme="AI Executive MBA" heading="Bincangkan keputusan AI yang sedang anda timbang." sub={`Pilih panggilan telefon, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan anda tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang diterajui majikan. ${ENQUIRY_COMMITMENT_MS}`} />
    </>
  );
}
