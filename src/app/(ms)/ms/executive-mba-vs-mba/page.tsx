import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_MS } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS, FAQS_MS, REFUND_TERMS_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/executive-mba-vs-mba", {
  title: "Executive MBA atau MBA Akademik",
  description:
    "Pilih ikut tugas: MBA akademik untuk ijazah akademik, atau Executive MBA Future Ready untuk membawa satu isu perniagaan sebenar kepada pelan tindakan yang disemak fasilitator.",
});

const COMPARISON_SCOPE_MS =
  "Jadual ini mentakrifkan MBA akademik rujukannya sebagai program 18–24 bulan yang dibina di sekitar modul akademik, tugasan atau peperiksaan, serta disertasi atau tesis. Ia tidak mewakili setiap program MBA.";

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS_MS.filter(([q]) =>
  ["Adakah ini ijazah terakreditasi MQA?", "Apakah yang berubah untuk saya sepanjang program?", "Untuk siapa program ini?"].includes(q)
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
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA atau MBA akademik · perbandingan yang ditakrifkan</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA atau MBA akademik: pilih ikut tugas.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Kedua-dua laluan ini dibina untuk tugas yang berbeza. MBA akademik ialah laluan yang betul
              apabila tujuan anda menuntut ijazah akademik.{" "}
              <Link href="/ms/executive-mba" className="acc">Future Ready Executive MBA</Link> pula dibina
              untuk membawa satu isu perniagaan sebenar dalam tanggungjawab anda sendiri kepada pelan
              tindakan bertulis yang disemak fasilitator, sepanjang {FACTS.durationMonths} bulan, sambil anda kekal
              dalam jawatan anda. {PROGRAMME_POSITIONING_MS} {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}
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
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Perbandingan sebelah-menyebelah</span></div></Reveal>
          <Reveal><h2 className="sec-h">Lapan perkara, ditakrifkan sebelah-menyebelah.</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison lang="ms" />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE_MS} Program Future Ready tidak setara dengan, dan bukan pengganti kepada,
            ijazah akademik terakreditasi MQA. Lihat <Link href="/ms/fees" className="acc">halaman yuran penuh</Link>.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Dibina untuk tugas yang berbeza</span></div></Reveal>
          <Reveal><h2 className="sec-h">Namakan tugas anda, kemudian pilih laluan yang dibina untuknya.</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>MBA akademik dibina untuk…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  Memperoleh ijazah akademik melalui pengajian akademik.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  Apabila tujuan anda menuntut kelayakan akademik atau terakreditasi MQA — untuk badan
                  pelesenan, laluan PhD, kerjaya akademik, atau syarat kelayakan yang ditetapkan dalam
                  sektor anda — MBA akademik ialah laluan yang betul. Bandingkan syarat kemasukan,
                  kurikulum, tempoh, yuran dan pengiktirafan yang diterbitkan setiap institusi sebelum
                  anda mendaftar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>Executive MBA ini dibina untuk…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  Membawa satu isu perniagaan sebenar kepada pelan yang boleh dilaksanakan pasukan anda.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  Laluan ini dibina untuk peserta yang memikul tanggungjawab strategik atau menyeluruh
                  dalam perniagaan: satu isu dalam tanggungjawab anda sendiri, dibawa daripada takrifan
                  masalah kepada pelan tindakan bertulis dengan keputusan, tindakan, pemilik dan ukuran,
                  dalam {FACTS.trainingDays} hari latihan merentasi {FACTS.liveSessions} sesi berjadual,
                  dengan bimbingan individu dan satu projek amali perniagaan.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        
      </section>

      {/* IS IT WORTH IT */}
      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Yuran dan terma, secara bertulis</span></div></Reveal>
          <Reveal><h2 className="sec-h">Namakan tugas dahulu, kemudian baca terma.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Namakan tugas anda sebelum membandingkan yuran. MBA akademik terakreditasi MQA ialah laluan
              yang betul apabila langkah seterusnya anda menuntut ijazah akademik. Program ini pula dibina
              untuk {FACTS.durationMonths} bulan kerja ke atas satu isu perniagaan sebenar: {FACTS.trainingDays} hari
              latihan merentasi {FACTS.liveSessions} sesi berjadual, satu projek amali perniagaan dan semakan
              fasilitator, sambil anda kekal dalam jawatan anda. Yuran standard yang diterbitkan ialah{" "}
              {FACTS.priceStd}. Biasiswa {FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara
              terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis. Biasiswa
              tidak automatik.{" "}
              <Link href="/ms/fees" className="acc">Lihat yuran dan terma biasiswa {FACTS.scholarshipProvider}</Link>.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Peserta kekal dalam jawatan mereka sepanjang
              enam bulan dan menerapkan rangka kerja pada projek perniagaan mereka sendiri. {REFUND_TERMS_MS}
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

      <CtaSection lang="ms" programme="Executive MBA" heading="Sudah pasti ia sesuai? Mari bincangkan kohort anda." sub="Pilih panggilan telefon, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan anda tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang diterajui majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." />
    </>
  );
}
