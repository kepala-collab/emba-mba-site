import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/resources", {
  title: "Bahan Keputusan Executive MBA",
  description: "Bandingkan kesesuaian program, kaedah pengajaran, masa, pengiktirafan, yuran, biasiswa dan proses permohonan HRD Corp sebelum memberikan maklumat hubungan anda.",
});

const RESOURCES = [
  ["01", "Semakan padanan program", "Jawab empat soalan untuk membina senarai semak peribadi bagi matlamat, masa, yuran dan pengiktirafan anda. Tiada markah, tiada rekod disimpan, dan pilihan anda tidak dihantar ke mana-mana.", "/ms/diagnostic", "Mulakan semakan"],
  ["02", "Panduan program Executive MBA", "Baca atau cetak struktur program, yuran penuh untuk peserta Malaysia, pengiktirafan CMI dan soalan yang wajar disahkan sebelum memilih program.", "/ms/resources/advancement-brief", "Buka panduan program"],
  ["03", "Cara membandingkan program pengurusan", "Bandingkan program pengurusan profesional dari lima sudut: kandungan pengajaran, aplikasi praktikal, masa, sijil dan yuran.", "/ms/insights/advancement-question", "Baca panduan perbandingan"],
  ["04", "Chartered Manager di Malaysia", "Fahami laluan permohonan CMI semasa, kelayakan, yuran penilaian, fCMgr, CMgr MCMI dan rangkaian profesional di Malaysia.", "/ms/chartered-manager-malaysia", "Fahami laluan profesional"],
] as const;

export default function ResourcesPage() {
  return (
    <>
      <header className="resource-hero">
        <div className="wrap">
          <p className="mono sec-k">Bahan program · Tanpa perlu memberikan maklumat hubungan</p>
          <h1>Fahami dengan jelas sebelum memberikan maklumat anda.</h1>
          <p>Semua bahan ini boleh anda baca tanpa perlu mengisi maklumat hubungan, dan menyatakan dengan jelas hal masa, yuran, pengiktirafan dan pembiayaan.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap resource-list">
          {RESOURCES.map(([number, title, body, href, action], index) => (
            <Reveal key={title} delay={index * 45}>
              <article className="resource-dossier">
                <span className="mono">{number}</span>
                <div><h2>{title}</h2><p>{body}</p></div>
                <Link href={href} className="text-action">{action} <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="employer-guide">
        <div className="wrap guide-grid">
          <Reveal>
            <article className="guide-card">
              <p className="mono sec-k">Berbincang dengan majikan</p>
              <h2>Bina hujah pembelajaran yang kukuh daripada keperluan kerja sebenar.</h2>
              <ol>
                <li>Nyatakan keputusan perniagaan, jurang keupayaan atau agenda transformasi yang perlu ditangani.</li>
                <li>Sahkan bagaimana projek aplikasi perniagaan menjawab situasi tersebut.</li>
                <li>Semak sama ada enam hari latihan dan tiga hujung minggu program dapat dilaksanakan.</li>
                <li>Nyatakan yuran standard {FACTS.priceStd}, dan jelaskan bahawa biasiswa hanya untuk pemohon Malaysia yang layak selepas penilaian serta kelulusan bertulis; sebarang anugerah dan yuran peserta disahkan secara individu.</li>
                <li>Majikan yang memutuskan sama ada untuk memohon pembiayaan HRD Corp. Majikan perlu mengemukakan permohonan sebelum program bermula; HRD Corp menentukan kelayakan dan jumlah yang diluluskan.</li>
              </ol>
            </article>
          </Reveal>
          <Reveal delay={60}>
            <article className="guide-card" id="decision-checklist">
              <p className="mono sec-k">Senarai semak keputusan yang neutral</p>
              <h2>Soalan yang wajar diajukan sebelum membuat pilihan.</h2>
              <ul>
                <li>Kerja mana yang mesti dibantu oleh pembelajaran ini?</li>
                <li>Apakah yang diajar, diaplikasikan dan dinilai dalam program? Siapa yang mengendalikannya?</li>
                <li>Apakah yang dianugerahkan secara rasmi selepas tamat program?</li>
                <li>Gelaran profesional mana yang memerlukan penilaian berasingan?</li>
                <li>Bagaimana kelayakan biasiswa dinilai? Bila keputusan kelulusan disahkan secara bertulis?</li>
                <li>Siapa yang menentukan kelayakan pembiayaan majikan dan jumlah yang diluluskan?</li>
                <li>Bolehkah saya menyemak tarikh, terma dan penyataan penting sebelum membuat bayaran?</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
