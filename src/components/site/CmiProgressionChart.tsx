import { CMI_PATHWAY } from "@/lib/content";
import TechnicalText from "@/components/site/TechnicalText";

type Props = { lang?: "en" | "zh" | "ms" };

const LEVELS_EN = [
  ["2", "Team Leader", "Practising or aspiring team leaders"],
  ["3", "Supervisor & First-Line Manager", "People beginning formal management responsibility"],
  ["4", "Junior Manager", "Practising or aspiring middle managers"],
  ["5", "Middle, Operational & Departmental Manager", "Managers responsible for resources, people and delivery"],
  ["6", "Professional & Senior Manager", "Senior managers translating strategy into performance"],
  ["7–8", "Senior, Director & CEO", "Strategic leaders, directors and C-level managers"],
] as const;

const LEVELS_ZH = [
  ["2", "团队主管", "在任或准备担任团队主管者"],
  ["3", "主管及一线经理", "开始承担正式管理责任者"],
  ["4", "初级经理", "在任或准备成为中层经理者"],
  ["5", "中层、营运及部门经理", "负责资源、人员及交付的管理者"],
  ["6", "专业及资深经理", "把组织战略转化为绩效的资深管理者"],
  ["7–8", "高级经理、董事及 CEO", "负责战略方向的董事及企业高层"],
] as const;

const LEVELS_MS = [
  ["2", "Ketua Pasukan", "Ketua pasukan dalam jawatan atau yang sedang menuju ke arahnya"],
  ["3", "Penyelia & Pengurus Barisan Hadapan", "Individu yang mula memikul tanggungjawab pengurusan formal"],
  ["4", "Pengurus Muda", "Pengurus pertengahan dalam jawatan atau yang sedang menuju ke arahnya"],
  ["5", "Pengurus Pertengahan, Operasi & Jabatan", "Pengurus yang bertanggungjawab ke atas sumber, kakitangan dan penyampaian"],
  ["6", "Pengurus Profesional & Kanan", "Pengurus kanan yang menterjemahkan strategi kepada prestasi"],
  ["7–8", "Pengurus Kanan, Pengarah & CEO", "Pemimpin strategik, pengarah dan pengurus peringkat C"],
] as const;

const PROGRAMME_EN = [
  ["01", "Awarded and endorsed by CMI", "Executive MBA on Future Ready Business Leadership. A six-month, non-academic professional development programme."],
  ["02", "Certificate and fCMgr", "Successful completion leads to the CMI Certificate of Recognition and Foundation Chartered Manager status under CMI's published Recognised offer."],
  ["03", "Optional next step: Chartered Manager", "A separate CMI route with its own eligibility, assessment and fees; it is not included in the published Executive MBA programme or fee."],
  ["04", "Independent CMI decision", "CMgr MCMI is awarded only after CMI confirms eligibility and the applicant passes the applicable assessment."],
] as const;

const PROGRAMME_ZH = [
  ["01", "CMI（英国）认可", "具有 CMI（英国）Endorsed 及 Recognised status 的六个月专业发展课程；并非学术学位。"],
  ["02", "证书与 fCMgr", "成功完成课程者取得 CMI Certificate of Recognition；根据 CMI 公布的 Recognised 方案，同时取得 Foundation Chartered Manager 身份。"],
  ["03", "可选下一步：Chartered Manager", "这是一条独立的 CMI 路线，有其资格、评估及费用；不包括在已公布的 Executive MBA 课程或学费内。"],
  ["04", "CMI 独立决定", "只有在 CMI 确认资格并通过适用评估后，申请人才获授 CMgr MCMI。"],
] as const;

const PROGRAMME_MS = [
  ["01", "Dianugerahkan dan disokong oleh CMI", "Executive MBA dalam Future Ready Business Leadership. Program pembangunan profesional bukan akademik selama enam bulan."],
  ["02", "Sijil dan fCMgr", "Peserta yang berjaya menamatkan program menerima CMI Certificate of Recognition serta status Foundation Chartered Manager di bawah tawaran Recognised yang diterbitkan CMI."],
  ["03", "Langkah seterusnya (pilihan): Chartered Manager", "Laluan CMI yang berasingan dengan kelayakan, penilaian dan yuran tersendiri; tidak termasuk dalam program Executive MBA atau yuran yang diterbitkan."],
  ["04", "Keputusan bebas CMI", "CMgr MCMI dianugerahkan hanya selepas CMI mengesahkan kelayakan dan pemohon lulus penilaian yang berkenaan."],
] as const;

const COPY = {
  en: {
    k: "Professional progression map",
    h: "The CMI qualification ladder and this programme pathway are two different systems.",
    intro: "The left side shows CMI's published job-role guide for Level 2–8 qualifications. The right side shows the recognition, certificate and Chartered Manager preparation actually provided through the Future Ready Executive MBA.",
    panelK: "CMI regulated qualifications",
    panelH: "Level 2–8 role pathway",
    progH: "Programme-to-professional pathway",
    boundaryH: "Professional development; not an academic degree.",
    boundaryP: "The programme is non-academic. It is not an MQA-accredited academic degree or a regulated qualification.",
    caption: "A CMI qualification level describes the difficulty and complexity of a regulated qualification. It does not automatically make every CMI-recognised programme equivalent to an academic degree.",
    link: "View CMI's current qualification guide",
  },
  zh: {
    k: "专业发展路线图",
    h: "CMI 资格等级与本课程路线属于两个不同体系。",
    intro: "左侧显示 CMI 对 Level 2–8 资格适用职位的官方概述；右侧显示 Future Ready Executive MBA 实际提供的认可、证书与 Chartered Manager 准备路线。",
    panelK: "CMI 受监管资格",
    panelH: "Level 2–8 职位路线",
    progH: "课程至专业评估路线",
    boundaryH: "专业发展课程，不是学术学位。",
    boundaryP: "本课程为非学术专业课程，并非 MQA 认证学位或受监管资格。",
    caption: "CMI qualification level 表示受监管资格的难度与复杂程度；不能据此把每项 CMI 认可课程自动视为某个学术学位。",
    link: "查看 CMI 当前资格说明",
  },
  ms: {
    k: "Peta perkembangan profesional",
    h: "Tangga kelayakan CMI dan laluan program ini ialah dua sistem yang berbeza.",
    intro: "Sebelah kiri menunjukkan panduan peranan kerja yang diterbitkan CMI bagi kelayakan Level 2–8. Sebelah kanan menunjukkan pengiktirafan, sijil dan persediaan Chartered Manager yang sebenarnya disediakan melalui Future Ready Executive MBA.",
    panelK: "Kelayakan CMI yang dikawal selia",
    panelH: "Laluan peranan Level 2–8",
    progH: "Laluan program ke penilaian profesional",
    boundaryH: "Pembangunan profesional; bukan ijazah akademik.",
    boundaryP: "Program ini bukan akademik. Ia bukan ijazah akademik bertauliah MQA dan bukan kelayakan yang dikawal selia.",
    caption: "CMI qualification level menggambarkan tahap kesukaran dan kerumitan sesuatu kelayakan yang dikawal selia. Ia tidak secara automatik menjadikan setiap program yang diiktiraf CMI setara dengan ijazah akademik.",
    link: "Lihat panduan kelayakan semasa CMI",
  },
} as const;

export default function CmiProgressionChart({ lang = "en" }: Props) {
  const levels = lang === "zh" ? LEVELS_ZH : lang === "ms" ? LEVELS_MS : LEVELS_EN;
  const programme = lang === "zh" ? PROGRAMME_ZH : lang === "ms" ? PROGRAMME_MS : PROGRAMME_EN;
  const copy = COPY[lang];
  const headingId = lang === "en" ? "cmi-progression-heading" : `cmi-progression-heading-${lang}`;

  return (
    <section className="section cmi-progression-section" aria-labelledby={headingId}>
      <div className="wrap">
        <div className="reading-section-head">
          <p className="mono sec-k">{copy.k}</p>
          <h2 id={headingId} className="sec-h">
            {copy.h}
          </h2>
          <p>
            {copy.intro}
          </p>
        </div>

        <figure className="cmi-progression-chart">
          <div className="cmi-level-panel">
            <div className="cmi-chart-panel-head">
              <span className="mono">{copy.panelK}</span>
              <strong>{copy.panelH}</strong>
            </div>
            <ol className="cmi-level-list">
              {levels.map(([level, role, description]) => (
                <li key={level}>
                  <div className="cmi-level-badge"><span>Level</span><strong>{level}</strong></div>
                  <div><h3><TechnicalText>{role}</TechnicalText></h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="cmi-programme-panel">
            <div className="cmi-chart-panel-head">
              <span className="mono">Future Ready Executive MBA</span>
              <strong>{copy.progH}</strong>
            </div>
            <ol className="cmi-programme-list">
              {programme.map(([number, title, description]) => (
                <li key={number}>
                  <span className="mono">{number}</span>
                  <div><h3><TechnicalText>{title}</TechnicalText></h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
            <div className="cmi-programme-boundary">
              <strong>{copy.boundaryH}</strong>
              <p>{copy.boundaryP}</p>
            </div>
          </div>

          <figcaption>
            {copy.caption}
            {" "}<a href={CMI_PATHWAY.qualifications} target="_blank" rel="noreferrer">{copy.link} <span aria-hidden="true">↗</span></a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
