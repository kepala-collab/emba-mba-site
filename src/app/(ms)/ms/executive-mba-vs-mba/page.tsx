import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { FAQS_MS, REFUND_TERMS_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/executive-mba-vs-mba", {
  title: "Executive MBA vs MBA Akademik",
  description:
    "Bandingkan Executive MBA profesional Future Ready dengan MBA akademik dari segi format, penilaian, kelayakan dan komitmen masa sebelum memilih laluan.",
});

const COMPARISON_SCOPE_MS =
  "Jadual ini mentakrifkan MBA akademik rujukannya sebagai program 18–24 bulan yang dibina di sekitar modul akademik, tugasan atau peperiksaan, serta disertasi atau tesis. Ia tidak mewakili setiap program MBA.";

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS_MS.filter(([q]) =>
  ["Adakah ini ijazah bertauliah MQA?", "Bagaimana program ini disusun?", "Untuk siapa program ini?"].includes(q)
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ExecutiveMbaVsMbaPage() {
  return (
    <>
      <JsonLd data={faqLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA vs MBA akademik · perbandingan yang ditakrifkan</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA vs MBA akademik — pilih ikut hasil yang anda mahu capai.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Bandingkan kedua-dua laluan dari segi kelayakan, penilaian, format, masa dan yuran yang diterbitkan.{" "}
              <Link href="/ms/executive-mba" className="acc">Future Ready Executive MBA</Link> ialah program
              profesional yang dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik bertauliah MQA
              atau kelayakan yang dikawal selia. Pilih MBA akademik apabila matlamat anda menuntut
              ijazah akademik. Pilih program ini apabila yang anda mahu ialah pembangunan pengurusan yang boleh terus dipakai
              sambil anda terus bekerja.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              Sedang menimbang program profesional yang lebih pendek? Baca pula{" "}
              <Link href="/ms/insights/executive-education-vs-executive-mba" className="acc">pendidikan eksekutif vs Executive MBA</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Perbandingan sebelah-menyebelah</span></div></Reveal>
          <Reveal><h2 className="sec-h">Banding lapan ciri sekali imbas.</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison lang="ms" />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE_MS} Program Future Ready tidak setara dengan, dan bukan pengganti kepada,
            ijazah akademik bertauliah MQA. Lihat <Link href="/ms/fees" className="acc">pecahan pelaburan sepenuhnya</Link>.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Siapa patut pilih yang mana</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pilih ikut kelayakan dan cara belajar yang anda perlukan.</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>Pilih MBA akademik jika…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  Langkah seterusnya anda menuntut ijazah akademik atau kelayakan yang dikawal selia.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  Jika matlamat anda menuntut kelayakan akademik atau bertauliah MQA — untuk badan pelesenan,
                  laluan PhD, kerjaya akademik, atau syarat kelayakan yang ditetapkan dalam sektor anda —
                  MBA akademik ialah laluan yang betul. Bandingkan syarat kemasukan, kurikulum, tempoh, yuran
                  dan pengiktirafan yang diterbitkan setiap institusi sebelum anda mendaftar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>Pilih Executive MBA ini jika…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  Anda mahukan program profesional yang boleh terus dipakai pada kerja sebenar, dengan format separuh masa.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  Laluan ini untuk anda yang memikul tanggungjawab strategik atau menyeluruh dalam
                  perniagaan, dan mahukan cara membuat keputusan yang lebih tersusun, projek berteraskan cabaran perniagaan sebenar
                  dan CMI Certificate of Recognition. Sepanjang enam bulan, program ini berjalan menerusi tiga hujung minggu berjadual,
                  sesi bimbingan dan projek yang anda terapkan pada kerja sendiri.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:760px){.choose-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* IS IT WORTH IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Adakah executive MBA berbaloi?</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pilih ikut hasil yang anda mahu capai.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Tetapkan dahulu hasil yang anda mahu capai sebelum membandingkan harga. Pilih MBA akademik bertauliah MQA
              apabila langkah seterusnya anda menuntut ijazah akademik. Pilih program ini apabila yang anda perlukan ialah
              program enam bulan, projek berteraskan cabaran perniagaan sebenar, pengiktirafan CMI terhadap Professional Standard-nya
              dan kerjaya yang terus berjalan sepanjang pengajian. Yuran standard Malaysia 2026 yang diterbitkan
              ialah {FACTS.priceStd}. Pemohon Malaysia yang layak berpeluang menerima{" "}
              <Link href="/ms/fees" className="acc">penilaian biasiswa {FACTS.scholarshipProvider}</Link> — biasiswa yang terhad, diberikan secara terpilih dan hanya selepas penilaian serta kelulusan bertulis.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              Program ini tidak menjamin kenaikan gaji, kenaikan pangkat, pekerjaan atau hasil perniagaan.
              Peserta terus bekerja sepanjang program dan menerapkan rangka kerja pada projek perniagaan
              mereka sendiri. {REFUND_TERMS_MS}
            </p>
          </Reveal>
          <Reveal className="center mt-m">
            <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Soalan lazim</span></div></Reveal>
          <Reveal><h2 className="sec-h">Fahami soalan lazim sebelum anda membuat keputusan.</h2></Reveal>
          <div className="mt-s">
            {PAGE_FAQS.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60}>
                <details className="faq">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Baca jawapan penuh setiap soalan di halaman <Link href="/ms/faq" className="acc">Soalan Lazim</Link>, atau
            {" "}<Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link> dan pasukan program akan menghantar maklumatnya kepada anda.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Sudah pasti ia sesuai? Mari bincangkan kohort anda." sub="Pilih panggilan telefon, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan anda tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang diterajui majikan. Perbualan ini tanpa sebarang ikatan untuk mendaftar atau membayar." />
    </>
  );
}
