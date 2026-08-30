import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { CTA_LABELS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";

const PUBLISHED = "2026-08-21";

export const metadata = withSeo("/ms/insights/executive-education-vs-executive-mba", {
  title: "Pendidikan Eksekutif lawan Executive MBA | Malaysia",
  description:
    "Bandingkan pendidikan eksekutif dengan Executive MBA berdasarkan status akademik, kredensial, tempoh, penilaian, jadual dan aplikasi di tempat kerja.",
  openGraph: {
    type: "article",
    publishedTime: `${PUBLISHED}T16:00:00+08:00`,
    modifiedTime: `${PUBLISHED}T16:00:00+08:00`,
  },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pendidikan Eksekutif lawan Executive MBA: Apa yang Perlu Dibandingkan Pemimpin Bekerja",
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
  ["Tujuan utama", "Membangunkan keupayaan kepimpinan, pengurusan atau kepakaran tertentu secara tertumpu.", "Berbeza mengikut penyedia. EMBA akademik lazimnya membawa kepada ijazah; program yang diposisikan sebagai pembangunan profesional pula wajib menyatakan kredensialnya sendiri dengan jelas."],
  ["Tempoh", "Boleh disampaikan dalam format yang lebih pendek atau bermodul; setiap penyedia wajib menerbitkan jadualnya.", `Program ini berjalan selama enam bulan, merangkumi enam hari latihan merentasi tiga sesi berjadual.`],
  ["Penilaian", "Boleh menggunakan bengkel, projek, kajian kes atau sijil penyelesaian.", "Program ini menggunakan bimbingan dan projek berteraskan cabaran perniagaan sebenar, tanpa peperiksaan atau tesis konvensional."],
  ["Status akademik", "Mungkin merupakan pembangunan profesional bukan ijazah; sahkan status yang dinyatakan oleh penyedia.", "Future Ready Executive MBA ini bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia."],
  ["Aplikasi di tempat kerja", "Direka untuk membina keupayaan yang boleh terus digunakan dalam peranan semasa.", "Peserta menerapkan rangka kerja pada isu perniagaan sebenar dalam konteks organisasi mereka sendiri."],
] as const;

export default function ExecutiveEducationVsExecutiveMbaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Laman Utama", path: "/ms" },
        { name: "Insights", path: "/ms/insights" },
        { name: "Pendidikan Eksekutif lawan Executive MBA", path: "/ms/insights/executive-education-vs-executive-mba" },
      ]} />
      <JsonLd data={articleSchema} />

      <article>
        <section className="section geo-section">
          <div className="wrap maxw-820">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Panduan keputusan · Malaysia</span></div>
              <h1 className="sec-h">Pendidikan eksekutif lawan Executive MBA: timbang kredensialnya, bukan namanya.</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                Oleh pasukan editorial Asian Business Consulting · <time dateTime={PUBLISHED}>Diterbitkan dan disemak 21 Ogos 2026</time> ·{" "}
                <Link href="/ms/about#editorial-standards">Piawaian editorial</Link>
              </p>
              <p className="sec-sub">
                Pendidikan eksekutif merujuk pembelajaran profesional untuk mereka yang sudah bekerja. Executive MBA pula boleh bermaksud ijazah akademik, atau — apabila dinyatakan dengan jelas — sebuah program pembangunan profesional. Jadi perbandingan yang boleh dipercayai tidak terletak pada label: semak status akademik, kredensial, penilaian, jadual, aplikasi di tempat kerja dan yuran penuhnya.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>Jawapan ringkas</h2>
            <p>
              Pilih MBA atau EMBA akademik apabila langkah seterusnya anda menuntut ijazah akademik yang diiktiraf. Pertimbangkan pendidikan eksekutif apabila yang anda perlukan ialah pembangunan profesional yang tertumpu dan padan dengan waktu kerja. Selepas itu, pastikan dengan tepat apa sebenarnya yang program itu anugerahkan, kerana kredensial dan status akademik memang berbeza antara satu penyedia dengan yang lain.
            </p>
            <p>
              <Link href="/ms/executive-mba">Executive MBA dalam Future Ready Business Leadership</Link> dianugerahkan dan disokong oleh CMI. Ia sebuah program pembangunan profesional selama enam bulan. Peserta yang berjaya akan menerima CMI Certificate of Recognition bagi program ini. Ia bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.
            </p>

            <h2>Bandingkan fakta yang diterbitkan</h2>
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
              <li><strong>Bagaimana pembelajaran dinilai?</strong> Bandingkan peperiksaan, tesis, tugasan, projek aplikasi dan syarat kehadiran.</li>
              <li><strong>Mampukah saya menghabiskannya sambil bekerja?</strong> Semak setiap tarikh sesi, mod penyampaian, keperluan projek dan dasar gantian sesi.</li>
              <li><strong>Berapa komitmen keseluruhannya?</strong> Bandingkan yuran yang diterbitkan, syarat pembiayaan, kos perjalanan, masa yang terpaksa diambil daripada kerja dan sebarang yuran keahlian atau penilaian yang berasingan.</li>
            </ol>

            <h2>Untuk siapa program ini sesuai</h2>
            <p>
              Program ini direka untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan yang mahukan pembangunan kepimpinan berstruktur, terarah pada isu perniagaan semasa. Ia menyatukan bengkel berasaskan kohort, bimbingan, rangka kerja keputusan strategik dan projek gunaan sepanjang enam bulan. Peserta terus kekal dalam peranan masing-masing sambil menyiapkan kerja itu.
            </p>
            <p>
              Chartered Manager ialah laluan pilihan CMI yang berasingan. CMI yang menentukan kelayakan, penilaian, keahlian dan yurannya; ia tidak termasuk dalam program mahupun yuran yang diterbitkan. Semak <Link href="/ms/chartered-manager-malaysia">laluan CMI</Link>, <Link href="/ms/fees">yuran penuh dan terma biasiswa</Link>, serta <Link href="/ms/intakes">tarikh sesi yang diterbitkan</Link> sebelum membuat keputusan.
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

      <CtaSection lang="ms" programme="Executive MBA" heading="Bandingkan fakta yang diterbitkan sebelum anda membuat keputusan." />
    </>
  );
}
