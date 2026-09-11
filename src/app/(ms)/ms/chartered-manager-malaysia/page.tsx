import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CERTIFICATE_POSITIONING, CTA_LABELS, PROGRAMME_POSITIONING_MS } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS, CHARTERED_MANAGER_BOUNDARY_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const PATH = "/ms/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "Pengiktirafan CMI: Apa Dianugerahkan, Apa Berasingan",
  description: "Ketahui dengan tepat apa yang dirangkumi CMI Certificate of Recognition bagi Future Ready Executive MBA, sempadan relevannya kepada kerjaya, dan Chartered Manager sebagai laluan CMI yang berasingan dan tidak wajib.",
});

const FAQS = [
  ["Apakah yang saya terima selepas berjaya menamatkan program?", `Peserta yang berjaya menerima ${CERTIFICATE_POSITIONING.credential}. Format akhir, perkataan dan pengeluaran sijil ditentukan oleh CMI.`],
  ["Adakah ini ijazah MBA akademik?", `Bukan. ${PROGRAMME_POSITIONING_MS} Peserta yang berjaya dianugerahkan ${CERTIFICATE_POSITIONING.credential}. Ia bukan akademik, bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.`],
  ["Adakah saya menjadi Chartered Manager secara automatik selepas tamat program?", `Tidak automatik. ${CHARTERED_MANAGER_BOUNDARY_MS}`],
] as const;

export default function CmiRecognitionMsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman utama", path: "/ms" }, { name: "Butiran program", path: "/ms/executive-mba" }, { name: "Pengiktirafan CMI", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">Dianugerahkan dan disokong oleh CMI · pembangunan profesional</p>
          <h1><TechnicalText>Pengiktirafan untuk kerja yang anda boleh tunjukkan.</TechnicalText></h1>
          <p>{PROGRAMME_POSITIONING_MS} Peserta yang berjaya dianugerahkan {CERTIFICATE_POSITIONING.credential}. Ia bukan akademik, bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia. {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} {CHARTERED_MANAGER_BOUNDARY_MS}</p>
          <div className="chartered-hero-actions"><Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} <span aria-hidden="true">→</span></Link><Link href="/ms/executive-mba" className="btn btn-ghost">Lihat program enam bulan</Link></div>
          <p className="fine">Lihat dengan tepat apa yang dianugerahkan, apa yang berasingan dan siapa yang menentukan.</p>
        </div>
      </header>

      <section className="section chartered-positioning"><div className="wrap">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">Nilai pengiktirafan ini</p><h2 className="sec-h">Dinilai berdasarkan CMI Professional Standard, dibuktikan dengan projek amali anda sendiri.</h2><p>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}</p></div></Reveal>
        <div className="chartered-outcome-grid">
          <Reveal><article><span className="mono">01</span><h3>Bukti tamat program yang diiktiraf</h3><p>CMI Recognition bermaksud program telah dinilai berdasarkan CMI Professional Standard. Peserta yang berjaya menerima {CERTIFICATE_POSITIONING.credential}.</p></article></Reveal>
          <Reveal delay={45}><article><span className="mono">02</span><h3>Bukti yang boleh anda jelaskan</h3><p>Sijil program dan projek amali perniagaan atas organisasi anda sendiri merekodkan asas pemikiran yang anda bina, untuk disenaraikan dalam profil profesional atau dijelaskan kepada panel temu duga.</p></article></Reveal>
          <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>Chartered Manager: laluan yang berasingan</h3><p>{CHARTERED_MANAGER_BOUNDARY_MS}</p></article></Reveal>
        </div>
        <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">Baca penerangan rasmi CMI tentang Recognition <span aria-hidden="true">↗</span></a></p>
      </div></section>

      <section className="section"><div className="wrap chartered-preparation-grid">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">Tempat bukti ini digunakan</p><h2 className="sec-h">Bawa satu keputusan sebenar. Bawa balik asas pemikiran untuk lembaga pengarah.</h2><p>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}</p></div><Link href="/ms/how-it-works" className="btn btn-ghost">Fahami kaedah program <span aria-hidden="true">→</span></Link></Reveal>
        <ol className="chartered-preparation-list"><li><span>01</span><div><h3>Diagnosis dahulu, keputusan kemudian</h3><p>Asingkan gejala, andaian dan kekangan sebelum sumber dilaburkan.</p></div></li><li><span>02</span><div><h3>Jelaskan asas keputusan</h3><p>Bandingkan pilihan. Nyatakan secara bertulis sebab satu arah itu yang betul.</p></div></li><li><span>03</span><div><h3>Ubah pertimbangan menjadi tindakan</h3><p>Bina pelan tindakan berdasarkan situasi perniagaan semasa anda, disemak oleh fasilitator.</p></div></li></ol>
      </div></section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">Jawapan terus</p><h2 className="sec-h">Siapa menentukan setiap perkara, sebelum anda membuat pilihan.</h2></Reveal><Reveal className="mt-s">{FAQS.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</Reveal></div></section>
      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan laluan mana yang sesuai dengan tujuan anda." sub="Dapatkan panduan program, atau jadualkan sesi perbincangan program dengan pasukan." />
    </>
  );
}
