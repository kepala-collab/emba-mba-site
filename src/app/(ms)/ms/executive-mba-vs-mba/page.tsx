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
    "Bandingkan Executive MBA profesional Future Ready dengan MBA akademik dari segi format, penilaian, kelayakan dan komitmen masa.",
});

const COMPARISON_SCOPE_MS =
  "Jadual ini mentakrifkan MBA akademik rujukannya sebagai program 18–24 bulan yang dibina di sekeliling modul akademik, tugasan atau peperiksaan, serta disertasi atau tesis. Ia tidak menggambarkan setiap program MBA.";

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS_MS.filter(([q]) =>
  ["Adakah ini ijazah bertauliah MQA?", "Bagaimana kursus ini disusun?", "Untuk siapa kursus ini?"].includes(q)
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
              Executive MBA vs MBA akademik — pilih berdasarkan hasil yang anda perlukan.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Bandingkan kedua-dua laluan dari segi kelayakan, penilaian, format, masa dan harga yang diterbitkan.{" "}
              <Link href="/ms/executive-mba" className="acc">Future Ready Executive MBA</Link> ialah program
              profesional yang dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik bertauliah MQA
              atau kelayakan yang dikawal selia. Pilih MBA akademik apabila objektif anda memerlukan
              ijazah akademik. Pilih program ini apabila objektif anda ialah pembangunan pengurusan aplikasi
              sambil terus bekerja.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              Turut membandingkan program profesional yang lebih pendek? Baca{" "}
              <Link href="/ms/insights/executive-education-vs-executive-mba" className="acc">pendidikan eksekutif vs Executive MBA</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Sebelah-menyebelah</span></div></Reveal>
          <Reveal><h2 className="sec-h">Lapan ciri dibandingkan pada halaman yang sama.</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison lang="ms" />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE_MS} Program Future Ready tidak setara dengan, dan bukan pengganti kepada,
            ijazah akademik bertauliah MQA. Lihat <Link href="/ms/fees" className="acc">pecahan pelaburan penuh</Link>.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Siapa patut pilih yang mana</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pilih mengikut kelayakan dan format pembelajaran yang diperlukan.</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>Pilih MBA akademik jika…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  Langkah seterusnya anda memerlukan ijazah akademik atau kelayakan yang dikawal selia.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  Jika matlamat anda memerlukan kelayakan akademik atau bertauliah MQA — untuk badan pelesenan,
                  laluan PhD, kerjaya akademik, atau syarat kelayakan yang dinyatakan dalam sektor anda —
                  MBA akademik ialah laluan yang betul. Bandingkan syarat kemasukan, kurikulum, tempoh, yuran
                  dan pengiktirafan yang diterbitkan setiap institusi sebelum mendaftar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>Pilih Executive MBA ini jika…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  Anda memerlukan program profesional dengan kerja perniagaan aplikasi dan format separuh masa.
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  Laluan ini direka untuk peserta yang memikul tanggungjawab strategik atau menyeluruh dalam
                  perniagaan, yang mahukan rangka kerja keputusan berstruktur, projek aplikasi dan CMI
                  Certificate of Recognition. Program tiga bulan ini menggunakan satu hujung minggu berjadual
                  setiap bulan.
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
          <Reveal><h2 className="sec-h">Pilih mengikut hasil yang anda perlukan.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Takrifkan hasil yang anda perlukan sebelum membandingkan harga. Pilih MBA akademik bertauliah MQA
              apabila langkah seterusnya anda memerlukan ijazah akademik. Pilih program ini apabila anda memerlukan
              program tiga bulan, projek aplikasi perniagaan, pengiktirafan CMI terhadap Professional Standard-nya
              dan pekerjaan yang berterusan sepanjang pengajian. Yuran standard Malaysia 2026 yang diterbitkan
              ialah {FACTS.priceStd}. Pemohon Malaysia yang layak boleh menerima{" "}
              <Link href="/ms/fees" className="acc">biasiswa {FACTS.scholarshipProvider} {FACTS.scholarshipAmount}</Link> selepas penilaian dan kelulusan bertulis.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              Program ini tidak menjamin kenaikan gaji, kenaikan pangkat, pekerjaan atau hasil perniagaan.
              Peserta terus bekerja sepanjang program dan menggunakan rangka kerja terhadap projek perniagaan
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
          <Reveal><h2 className="sec-h">Soalan yang ditanya pemimpin sebelum membuat keputusan.</h2></Reveal>
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
            Baca setiap soalan sepenuhnya di halaman <Link href="/ms/faq" className="acc">Soalan Lazim</Link>, atau
            {" "}<Link href="/ms/apply" className="acc">{CTA_LABELS.ms.guide}</Link> dan pasukan program akan menghantar maklumatnya.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Sudah pasti ia sesuai? Mari bincangkan kohort anda." sub="Pilih panggilan, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." />
    </>
  );
}
