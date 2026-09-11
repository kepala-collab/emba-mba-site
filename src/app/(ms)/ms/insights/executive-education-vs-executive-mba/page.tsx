import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS } from "@/lib/content-ms";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";

const PUBLISHED = "2026-08-21";

const COMPARISON_SCOPE_MS =
  "Jadual ini mentakrifkan MBA akademik rujukannya sebagai program 18–24 bulan yang dibina di sekitar modul akademik, tugasan atau peperiksaan, serta disertasi atau tesis. Ia tidak mewakili setiap program MBA.";

export const metadata = withSeo("/ms/insights/executive-education-vs-executive-mba", {
  title: "Pendidikan Eksekutif lawan Executive MBA | Malaysia",
  description:
    "Pendidikan eksekutif dan Executive MBA direka untuk tugas berbeza. Bandingkan status akademik, kredensial, penilaian, jadual dan yuran sebelum membuat keputusan.",
  openGraph: {
    type: "article",
    publishedTime: `${PUBLISHED}T16:00:00+08:00`,
    modifiedTime: `${PUBLISHED}T16:00:00+08:00`,
  },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pendidikan Eksekutif lawan Executive MBA: Tugas Mana Diselesaikan oleh Setiap Satu?",
  mainEntityOfPage: `${SITE.url}/ms/insights/executive-education-vs-executive-mba`,
  image: `${SITE.url}/opengraph-image`,
  datePublished: `${PUBLISHED}T16:00:00+08:00`,
  dateModified: `${PUBLISHED}T16:00:00+08:00`,
  inLanguage: "ms-MY",
  description: metadata.description,
  author: { "@type": "Organization", "@id": EDITORIAL_TEAM_ID, name: "Asian Business Consulting Editorial Team" },
  publisher: { "@type": "Organization", "@id": PROVIDER_ID, name: SITE.provider },
  articleSection: "Panduan keputusan program",
  about: ["Pendidikan eksekutif", "Executive MBA", "Pembangunan profesional", "Profesional yang bekerja"],
};

const COMPARISON = [
  ["Direka untuk", "Satu kemahiran khusus, dibina mengikut jadual yang ditetapkan penyedia.", `Satu isu perniagaan sebenar dalam tanggungjawab anda sendiri, dibawa daripada takrifan masalah kepada pelan tindakan bertulis yang disemak fakulti, sepanjang ${FACTS.durationMonths} bulan.`],
  ["Tempoh", "Bergantung pada jadual yang ditetapkan penyedia; format dan tempoh berbeza-beza.", `Program ini berjalan selama ${FACTS.durationMonths} bulan, merangkumi ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual.`],
  ["Penilaian", "Boleh menggunakan bengkel, projek, kajian kes atau sijil penyelesaian.", "Program ini menggunakan bimbingan dan projek amali perniagaan, tanpa peperiksaan atau tesis konvensional."],
  ["Status akademik", "Mungkin ijazah akademik atau mungkin tidak; penyedia menyatakan status itu sendiri.", "Future Ready Executive MBA ini bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia."],
  ["Aplikasi di tempat kerja", "Direka untuk membina satu keupayaan yang boleh terus digunakan dalam peranan semasa.", "Peserta menerapkan rangka kerja pada isu perniagaan sebenar di dalam organisasi mereka sendiri."],
] as const;

export default function ExecutiveEducationVsExecutiveMbaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Laman Utama", path: "/ms" },
        { name: "Wawasan", path: "/ms/insights" },
        { name: "Pendidikan Eksekutif lawan Executive MBA", path: "/ms/insights/executive-education-vs-executive-mba" },
      ]} />
      <JsonLd data={articleSchema} />

      <article>
        <section className="section geo-section">
          <div className="wrap maxw-820">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Panduan keputusan · Malaysia</span></div>
              <h1 className="sec-h">Pendidikan eksekutif atau Executive MBA: pilih ikut tugasnya.</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                Oleh pasukan editorial Asian Business Consulting · <time dateTime={PUBLISHED}>Diterbitkan dan disemak 21 Ogos 2026</time> ·{" "}
                <Link href="/ms/about#editorial-standards">Piawaian editorial</Link>
              </p>
              <p className="sec-sub">
                Kedua-dua nama ini sering disebut dalam nafas yang sama, tetapi tugasnya berbeza. Pendidikan eksekutif membina satu kemahiran khusus, mengikut jadual yang ditetapkan penyedia. Executive MBA pula boleh bermaksud ijazah akademik, atau — apabila dinyatakan dengan jelas — program profesional dengan kredensialnya sendiri. Sebelum membandingkan perkara lain, sahkan dahulu status akademik, kredensial, penilaian, jadual dan yuran penuhnya.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>Jawapan ringkas</h2>
            <p>
              Ijazah akademik ialah laluan yang betul apabila langkah seterusnya anda dikawal selia atau memerlukan akreditasi MQA: pilih MBA atau EMBA akademik untuk tugas itu. Pendidikan eksekutif, termasuk Executive MBA yang diposisikan secara profesional, ialah laluan yang betul apabila anda memerlukan pembangunan tertumpu yang muat dalam minggu bekerja anda. Setelah anda tahu tugas mana yang anda mahu program itu selesaikan, sahkan dengan tepat apa yang program berkenaan anugerahkan — kredensial dan status akademik berbeza antara penyedia.
            </p>
            <p>
              <Link href="/ms/executive-mba">Executive MBA dalam Future Ready Business Leadership</Link> dianugerahkan dan disokong oleh CMI. Ia sebuah program pembangunan profesional selama {FACTS.durationMonths} bulan; peserta yang berjaya menerima CMI Certificate of Recognition (sijil pengiktirafan CMI) bagi program ini. {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Ia bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.
            </p>

            <h2>Bandingkan fakta yang diterbitkan</h2>
            <p className="mono fine">{COMPARISON_SCOPE_MS}</p>
            <ScrollableTableRegion kind="comparison" label="Perbandingan pendidikan eksekutif dan Executive MBA" hint="Leret untuk lihat semua lajur →">
              <table className="cmp">
                <thead><tr><th>Keputusan</th><th>Pendidikan eksekutif</th><th>Future Ready Executive MBA ini</th></tr></thead>
                <tbody>
                  {COMPARISON.map(([decision, executiveEducation, programme]) => (
                    <tr key={decision}><th scope="row">{decision}</th><td>{executiveEducation}</td><td className="us">{programme}</td></tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>

            <h2>Lima soalan untuk anda ajukan kepada setiap penyedia</h2>
            <ol>
              <li><strong>Apa sebenarnya yang saya terima?</strong> Minta nama penuh kredensial itu dan contoh sijilnya jika ada.</li>
              <li><strong>Adakah ini ijazah akademik?</strong> Jika kelayakan akademik penting bagi anda, sahkan institusi penganugerah serta pengiktirafan yang terpakai.</li>
              <li><strong>Bagaimana pembelajaran dinilai?</strong> Bandingkan peperiksaan, tesis, tugasan, projek amali dan syarat kehadiran.</li>
              <li><strong>Mampukah saya menghabiskannya sambil bekerja?</strong> Semak setiap tarikh sesi, mod penyampaian, keperluan projek dan dasar gantian sesi.</li>
              <li><strong>Berapa komitmen keseluruhannya?</strong> Bandingkan yuran yang diterbitkan, syarat pembiayaan, kos perjalanan, masa yang terpaksa diambil daripada kerja dan sebarang yuran keahlian atau penilaian yang berasingan.</li>
            </ol>

            <h2>Untuk siapa program ini sesuai</h2>
            <p>
              Program ini direka untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan yang memikul satu isu perniagaan semasa dan mahukan pembangunan kepimpinan berstruktur di sekelilingnya. Ia menyatukan bengkel berasaskan kohort, bimbingan, rangka kerja keputusan strategik dan projek amali perniagaan sepanjang {FACTS.durationMonths} bulan. Peserta terus kekal dalam peranan masing-masing sepanjang tempoh itu.
            </p>
            <p>
              Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, ditentukan oleh CMI; ia tidak termasuk dalam program ini mahupun yuran yang diterbitkan. Satu sesi perbincangan program dapat mengesahkan yuran semasa, tarikh sesi dan pengiktirafan CMI secara bertulis.
            </p>

            <h2>Sumber kajian</h2>
            <ul>
              <li><a href="https://www.edx.org/resources/what-is-the-difference-between-a-professional-certificate-and-an-executive-education" target="_blank" rel="noopener noreferrer">edX: Sijil profesional lawan pendidikan eksekutif</a></li>
              <li><a href="https://business.rice.edu/executive-education" target="_blank" rel="noopener noreferrer">Rice Business Executive Education</a></li>
            </ul>
            <p><Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide}</Link></p>
          </div>
        </section>
      </article>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan tugas yang perlu diselesaikan oleh langkah seterusnya anda." />
    </>
  );
}
