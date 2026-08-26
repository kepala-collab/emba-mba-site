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
    "Bandingkan pendidikan eksekutif dan Executive MBA berdasarkan status akademik, kredensial, tempoh, penilaian, jadual dan aplikasi di tempat kerja.",
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
  ["Tujuan utama", "Pembangunan tertumpu keupayaan kepimpinan, pengurusan atau kepakaran khusus.", "Berbeza mengikut penyedia. EMBA akademik lazimnya membawa kepada ijazah; program yang diposisikan secara profesional mesti menyatakan kredensialnya sendiri dengan jelas."],
  ["Tempoh", "Boleh disampaikan dalam format lebih pendek atau modular; setiap penyedia mesti menerbitkan jadualnya.", `Program ini berjalan selama enam bulan, dengan enam hari latihan merentasi tiga sesi berjadual.`],
  ["Penilaian", "Boleh menggunakan bengkel, projek, kes atau sijil penyelesaian.", "Program ini menggunakan bimbingan dan projek perniagaan aplikasi, tanpa peperiksaan atau tesis tradisional."],
  ["Status akademik", "Boleh jadi pembangunan profesional bukan ijazah; sahkan status yang dinyatakan oleh penyedia.", "Future Ready Executive MBA ini bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia."],
  ["Aplikasi di tempat kerja", "Direka untuk membina keupayaan yang boleh digunakan dalam peranan semasa.", "Peserta mengaplikasikan rangka kerja terhadap isu perniagaan sebenar dalam konteks organisasi mereka sendiri."],
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
              <h1 className="sec-h">Pendidikan eksekutif lawan Executive MBA: bandingkan kredensial sebelum nama.</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                Oleh pasukan editorial Asian Business Consulting · <time dateTime={PUBLISHED}>Diterbitkan dan disemak 21 Ogos 2026</time> ·{" "}
                <Link href="/ms/about#editorial-standards">Piawaian editorial</Link>
              </p>
              <p className="sec-sub">
                Pendidikan eksekutif menggambarkan pembelajaran profesional untuk orang yang sudah bekerja. Executive MBA boleh menggambarkan ijazah akademik atau, apabila dinyatakan dengan jelas, program profesional. Justeru perbandingan yang boleh dipercayai bukan label semata-mata: semak status akademik, kredensial, penilaian, jadual, aplikasi di tempat kerja dan yuran penuh.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>Jawapan ringkas</h2>
            <p>
              Pilih MBA atau EMBA akademik apabila langkah seterusnya anda memerlukan ijazah akademik yang diiktiraf. Pertimbangkan pendidikan eksekutif apabila anda memerlukan pembangunan profesional tertumpu yang sesuai dengan waktu kerja. Kemudian sahkan dengan tepat apa yang dianugerahkan oleh program yang dinamakan itu, kerana kredensial dan status akademik berbeza antara penyedia.
            </p>
            <p>
              <Link href="/ms/executive-mba">Executive MBA dalam Future Ready Business Leadership</Link> dianugerahkan dan disokong oleh CMI. Ia adalah program pembangunan profesional enam bulan. Peserta yang berjaya menerima CMI Certificate of Recognition bagi program ini. Ia bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia.
            </p>

            <h2>Bandingkan fakta yang diterbitkan</h2>
            <ScrollableTableRegion kind="comparison" label="Perbandingan pendidikan eksekutif dan Executive MBA">
              <table className="cmp">
                <thead><tr><th>Keputusan</th><th>Pendidikan eksekutif</th><th>Future Ready Executive MBA ini</th></tr></thead>
                <tbody>
                  {COMPARISON.map(([decision, executiveEducation, programme]) => (
                    <tr key={decision}><th scope="row">{decision}</th><td>{executiveEducation}</td><td className="us">{programme}</td></tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>

            <h2>Lima soalan untuk ditanya kepada setiap penyedia</h2>
            <ol>
              <li><strong>Apa sebenarnya yang saya terima?</strong> Minta nama kredensial penuh dan spesimen jika ada.</li>
              <li><strong>Adakah ia ijazah akademik?</strong> Jika kelayakan akademik penting bagi anda, sahkan institusi penganugerah dan pengiktirafan yang terpakai.</li>
              <li><strong>Bagaimana pembelajaran dinilai?</strong> Bandingkan peperiksaan, tesis, tugasan, projek aplikasi dan keperluan kehadiran.</li>
              <li><strong>Bolehkah saya menyelesaikannya sambil bekerja?</strong> Semak setiap tarikh sesi, mod penyampaian, keperluan projek dan dasar gantian.</li>
              <li><strong>Apakah komitmen penuhnya?</strong> Bandingkan yuran yang diterbitkan, syarat pembiayaan, perjalanan, masa lapang daripada kerja dan sebarang yuran keahlian atau penilaian berasingan.</li>
            </ol>

            <h2>Di mana program ini sesuai</h2>
            <p>
              Program ini direka untuk pemilik, pengarah, pengurus besar dan pengurus kanan yang mahukan pembangunan kepimpinan berstruktur terhadap isu perniagaan semasa. Ia menggabungkan bengkel berasaskan kohort, bimbingan, rangka kerja keputusan strategik dan projek aplikasi merentasi enam bulan. Peserta terus berada dalam peranan mereka sambil menyelesaikan kerja tersebut.
            </p>
            <p>
              Chartered Manager ialah laluan pilihan CMI yang berasingan. CMI menentukan kelayakan, penilaian, keahlian dan yuran; ia tidak termasuk dalam program atau yuran yang diterbitkan. Semak <Link href="/ms/chartered-manager-malaysia">laluan CMI</Link>, <Link href="/ms/fees">yuran penuh dan terma biasiswa</Link>, dan <Link href="/ms/intakes">tarikh sesi yang diterbitkan</Link> sebelum membuat keputusan.
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
