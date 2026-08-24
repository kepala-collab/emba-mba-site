import Link from "next/link";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import Reveal from "@/components/site/Reveal";
import { FACTS, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms", {
  title: "Executive MBA Tiga Bulan untuk Pengurus Bekerja",
  description:
    "Lengkapkan program pembangunan profesional Future Ready Executive MBA dalam tempoh tiga bulan sambil terus bekerja. Chartered Manager ialah laluan pilihan CMI yang berasingan.",
  openGraph: {
    type: "website",
    title: "Executive MBA Tiga Bulan untuk Pengurus Bekerja",
    description:
      "Asah pertimbangan pengurusan, kemahiran membuat keputusan dan pelaksanaan melalui isu perniagaan sebenar — sambil terus bekerja sepenuh masa.",
    locale: "ms_MY",
    url: `${SITE.url}/ms`,
  },
  twitter: {
    title: "Executive MBA Tiga Bulan untuk Pengurus Bekerja",
    description:
      "Asah pertimbangan pengurusan, kemahiran membuat keputusan dan pelaksanaan melalui isu perniagaan sebenar — sambil terus bekerja sepenuh masa.",
  },
});

const DECISION_PATHS = [
  ["01", "Butiran program", "Ketahui untuk siapa program ini, susunan tiga bulan dan keperluan tamat kursus.", "/ms/executive-mba", "Fahami program penuh"],
  ["02", "Kaedah program", "Lihat bagaimana isu perniagaan yang rumit disusun menjadi keputusan pengurusan yang boleh dilaksanakan.", "/ms/how-it-works", "Lihat kaedah F.A.S.T."],
  ["03", "Kurikulum", "Semak 12 rangka kerja pengurusan, projek aplikasi dan urutan pembelajaran.", "/ms/curriculum", "Semak kurikulum"],
  ["04", "Pengiktirafan CMI", "Bezakan sijil program, status fCMgr dan laluan Chartered Manager yang berasingan.", "/ms/chartered-manager-malaysia", "Fahami laluan CMI"],
  ["05", "Yuran dan biasiswa", "Ketahui yuran standard RM10,000, kelayakan biasiswa dan proses HRD Corp yang diterajui majikan.", "/ms/fees", "Lihat yuran dan kelayakan"],
  ["06", "Tarikh kohort 2026", "Bandingkan tarikh kohort Bahasa Inggeris dan Mandarin yang telah diterbitkan.", "/ms/intakes", "Lihat tarikh kohort"],
] as const;

const OUTCOMES = [
  ["01", "Kenal pasti masalah sebenar", "Asingkan gejala di permukaan daripada keputusan pengurusan yang sebenarnya perlu dibuat."],
  ["02", "Jelaskan asas keputusan", "Uji andaian, bandingkan pilihan dan nyatakan dengan jelas logik di sebalik cadangan anda."],
  ["03", "Terjemahkan keputusan kepada tindakan", "Bina pelan tindakan yang boleh dilaksanakan mengikut situasi perniagaan anda sendiri."],
] as const;

export default function MsHome() {
  return (
    <div lang="ms">
      <section className="working-hero hero">
        <div className="wrap working-hero-grid">
          <div className="working-hero-copy">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Future Ready Executive MBA · Untuk pengurus yang sedang bekerja</span></div>
            </Reveal>
            <Reveal delay={50}>
              <h1>Executive MBA dalam kepimpinan perniagaan masa hadapan, <em>dianugerahkan dan disokong oleh CMI — selesai dalam tiga bulan.</em></h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="working-hero-lede">
                Enam hari latihan, bimbingan dan projek aplikasi perniagaan, diselesaikan dalam tempoh tiga bulan sambil anda terus bekerja sepenuh masa. Chartered Manager ialah laluan pilihan CMI yang berasingan, dengan kelayakan, penilaian dan yuran tersendiri.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="working-hero-actions">
                <Link href="/ms/apply" className="btn btn-primary" data-track-event="cta_click" data-track-id="ms_hero_request_guide" data-track-location="hero">
                  Dapatkan maklumat program <span aria-hidden="true">→</span>
                </Link>
                <Link href="/ms/executive-mba" className="text-action">Fahami program penuh <span aria-hidden="true">↗</span></Link>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="working-hero-proof" aria-label="Jaminan program">
                <ProgrammeMarks lang="ms" />
                <span>Diiktiraf dan disokong oleh CMI (UK) · HRD Corp tertakluk pada permohonan majikan dan kelulusan HRD Corp</span>
                <span>Pemohon Malaysia yang layak boleh dinilai untuk biasiswa</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <div className="card nested-form-card home-lead-card">
              <p className="mono sec-k acc">Pertanyaan program · Tanpa bayaran</p>
              <h2>Dapatkan maklumat dahulu, kemudian buat keputusan.</h2>
              <p className="fine">Pasukan program akan membalas mengikut cara yang anda pilih, dan menjelaskan kesesuaian program, tarikh, yuran, kelayakan biasiswa serta proses permohonan HRD Corp oleh majikan.</p>
              <LeadForm programme="Executive MBA" source="ms-decision-led-home" lang="ms" placement="hero" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="Ringkasan program">
        <div className="wrap working-fact-grid">
          <div><strong>3 bulan</strong><span>program pembangunan profesional</span></div>
          <div><strong>{FACTS.trainingDays} hari</strong><span>latihan dalam tiga sesi intensif</span></div>
          <div><strong>{FACTS.moduleCount}</strong><span>rangka kerja pengurusan praktikal</span></div>
          <div><strong>1 projek</strong><span>berasaskan isu perniagaan sebenar</span></div>
        </div>
      </section>

      <section className="section working-resources-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div><p className="mono sec-k">Satu keputusan pada satu masa</p><h2 className="sec-h">Terus kepada jawapan yang anda perlukan.</h2></div>
              <p>Setiap halaman menjawab satu keputusan utama. Anda tidak perlu membaca keseluruhan laman sebelum bertanya kepada pasukan program.</p>
            </div>
          </Reveal>
          <div className="working-resource-grid">
            {DECISION_PATHS.map(([n, title, body, href, action], index) => (
              <Reveal key={href} delay={(index % 3) * 45}>
                <article className="working-resource-card">
                  <span className="mono">{n}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <Link href={href} className="text-action">{action} <span aria-hidden="true">↗</span></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section working-model-section">
        <div className="wrap working-two-column">
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Mengapa program ini wujud</span></div>
              <h2 className="sec-h">Keputusan yang paling mahal ialah keputusan yang dibuat terlalu lewat — atau tidak pernah dilaksanakan.</h2>
              <p className="sec-sub">Fokus program ialah meningkatkan kualiti keputusan pengurusan, bukan menambah teori yang tidak diterjemahkan kepada tindakan.</p>
              <Link href="/ms/how-it-works" className="text-action working-inline-action">Fahami kaedah F.A.S.T. <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
          <div className="working-model-steps">
            {OUTCOMES.map(([n, h, p], index) => (
              <Reveal key={n} delay={index * 55}><article><span className="mono">{n}</span><div><h3>{h}</h3><p>{p}</p></div></article></Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
