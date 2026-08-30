import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CERTIFICATE_POSITIONING, CTA_LABELS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const PATH = "/ms/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "Pengiktirafan CMI bagi Future Ready Executive MBA",
  description: "Fahami pengiktirafan CMI (UK) bagi Future Ready Executive MBA enam bulan, sijil program, serta laluan Chartered Manager yang berasingan dan bersifat pilihan.",
});

const FAQS = [
  ["Apakah yang saya terima selepas berjaya menamatkan program?", "Peserta yang berjaya menamatkan program menerima CMI Certificate of Recognition bagi Future Ready Executive MBA. Format akhir, perkataan dan pengeluaran sijil ditentukan oleh CMI."],
  ["Adakah ini ijazah MBA akademik?", "Bukan. Ini ialah program pembangunan profesional Executive MBA enam bulan dalam kepimpinan perniagaan masa hadapan, dianugerahkan dan disokong oleh CMI — bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia."],
  ["Adakah saya menjadi Chartered Manager secara automatik selepas tamat program?", "Tidak. Chartered Manager ialah laluan CMI yang berasingan dan bersifat pilihan. Kelayakan, penilaian, keahlian dan yuran ditentukan oleh CMI, dan tidak termasuk dalam program ini atau yuran yang diterbitkan."],
] as const;

export default function CmiRecognitionMsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman utama", path: "/ms" }, { name: "Butiran program", path: "/ms/executive-mba" }, { name: "Pengiktirafan CMI", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">Dianugerahkan dan disokong oleh CMI (UK)</p>
          <h1><TechnicalText>Jadikan hasil pengurusan sebenar sebagai pengiktirafan profesional.</TechnicalText></h1>
          <p>Future Ready Executive MBA membantu pengurus berpengalaman mengubah satu isu perniagaan sebenar menjadi pelan tindakan yang boleh dilaksanakan. Peserta yang berjaya menamatkan program menerima sijil pengiktirafan program daripada CMI.</p>
          <div className="chartered-hero-actions"><Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} <span aria-hidden="true">→</span></Link><Link href="/ms/executive-mba" className="btn btn-ghost">Lihat program enam bulan</Link></div>
        </div>
      </header>

      <section className="section chartered-positioning"><div className="wrap">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">Nilai pengiktirafan ini</p><h2 className="sec-h">Bukti pembangunan profesional, bukan sekadar sijil kehadiran.</h2><p>Program ini menghubungkan pengiktirafan profesional CMI dengan projek gunaan yang berdasarkan situasi perniagaan peserta sendiri.</p></div></Reveal>
        <div className="chartered-outcome-grid">
          <Reveal><article><span className="mono">01</span><h3>Bukti tamat program yang diiktiraf</h3><p>CMI Recognition bermaksud program telah dinilai berdasarkan CMI Professional Standard. Peserta yang berjaya menamatkan program menerima CMI Certificate of Recognition bagi program ini.</p></article></Reveal>
          <Reveal delay={45}><article><span className="mono">02</span><h3>Bukti profesional yang boleh dijelaskan</h3><p>Sijil program dan projek gunaan menjadi bukti yang kukuh untuk menerangkan pembangunan pengurusan anda dalam profil profesional dan komunikasi kerjaya.</p></article></Reveal>
          <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>Langkah seterusnya yang jelas sempadannya</h3><p>Chartered Manager ialah laluan berasingan yang bersifat pilihan. CMI menentukan kelayakan, penilaian, keahlian dan yuran; program ini tidak menjanjikan atau merangkumi status profesional tersebut.</p></article></Reveal>
        </div>
        <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">Baca penerangan rasmi CMI tentang Recognition <span aria-hidden="true">↗</span></a></p>
      </div></section>

      <section className="section"><div className="wrap chartered-preparation-grid">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">Nilai kepada perniagaan dan kerjaya</p><h2 className="sec-h">Bawa satu keputusan sebenar, dan bina cara memutuskan yang lebih mantap.</h2><p>Program ini membantu peserta mendiagnosis masalah dengan lebih tepat, membandingkan pilihan, menjelaskan asas keputusan dan memimpin pasukan untuk bertindak. Program tidak menjamin kenaikan pangkat, gaji, pekerjaan atau hasil perniagaan.</p></div><Link href="/ms/how-it-works" className="btn btn-ghost">Fahami kaedah program <span aria-hidden="true">→</span></Link></Reveal>
        <ol className="chartered-preparation-list"><li><span>01</span><div><h3>Diagnosis dahulu, keputusan kemudian</h3><p>Asingkan gejala, andaian dan kekangan sebelum sumber dilaburkan.</p></div></li><li><span>02</span><div><h3>Jelaskan asas keputusan</h3><p>Bandingkan pilihan dan jelaskan kenapa satu arah lebih wajar dipilih.</p></div></li><li><span>03</span><div><h3>Ubah pertimbangan menjadi tindakan</h3><p>Bina pelan tindakan praktikal berdasarkan situasi perniagaan semasa anda.</p></div></li></ol>
      </div></section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">Jawapan terus</p><h2 className="sec-h">Fahami dengan jelas sebelum membuat pilihan.</h2></Reveal><Reveal className="mt-s">{FAQS.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</Reveal></div></section>
      <CtaSection lang="ms" programme="Executive MBA" heading="Semak sama ada Future Ready Executive MBA sesuai dengan keputusan yang anda hadapi sekarang." sub="Dapatkan panduan program terlebih dahulu, atau aturkan perbualan tanpa sebarang komitmen dengan pasukan program." />
    </>
  );
}
