import { CMI_PATHWAY } from "@/lib/content";

type Props = { lang?: "en" | "zh" };

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

const PROGRAMME_EN = [
  ["01", "CMI Recognised programme", "Benchmarked against CMI's Professional Standard. This is not a CMI qualification or academic degree."],
  ["02", "Certificate and fCMgr", "Successful completion leads to the CMI Certificate of Recognition and Foundation Chartered Manager status under CMI's published Recognised offer."],
  ["03", "Months 4–6: CMgr preparation", "Eligible participants organise evidence and prepare for the separate CMI assessment."],
  ["04", "Independent CMI decision", "CMgr MCMI is awarded only after CMI confirms eligibility and the applicant passes the applicable assessment."],
] as const;

const PROGRAMME_ZH = [
  ["01", "CMI Recognised programme", "课程已按照 CMI Professional Standard 进行基准评估；并非 CMI qualification 或学术学位。"],
  ["02", "证书与 fCMgr", "成功完成课程者取得 CMI Certificate of Recognition；根据 CMI 公布的 Recognised 方案，同时取得 Foundation Chartered Manager 身份。"],
  ["03", "第四至第六个月：CMgr 准备", "符合条件的学员整理专业证据，并准备另行进行的 CMI 评估。"],
  ["04", "CMI 独立决定", "只有在 CMI 确认资格并通过适用评估后，申请人才获授 CMgr MCMI。"],
] as const;

export default function CmiProgressionChart({ lang = "en" }: Props) {
  const zh = lang === "zh";
  const levels = zh ? LEVELS_ZH : LEVELS_EN;
  const programme = zh ? PROGRAMME_ZH : PROGRAMME_EN;
  const headingId = zh ? "cmi-progression-heading-zh" : "cmi-progression-heading";

  return (
    <section className="section cmi-progression-section" aria-labelledby={headingId}>
      <div className="wrap">
        <div className="reading-section-head">
          <p className="mono sec-k">{zh ? "专业发展路线图" : "Professional progression map"}</p>
          <h2 id={headingId} className="sec-h">
            {zh ? "CMI 资格等级与本课程路线属于两个不同体系。" : "The CMI qualification ladder and this programme pathway are two different systems."}
          </h2>
          <p>
            {zh
              ? "左侧显示 CMI 对 Level 2–8 资格适用职位的官方概述；右侧显示 Future Ready Executive MBA 实际提供的认可、证书与 Chartered Manager 准备路线。"
              : "The left side shows CMI's published job-role guide for Level 2–8 qualifications. The right side shows the recognition, certificate and Chartered Manager preparation actually provided through the Future Ready Executive MBA."}
          </p>
        </div>

        <figure className="cmi-progression-chart">
          <div className="cmi-level-panel">
            <div className="cmi-chart-panel-head">
              <span className="mono">{zh ? "CMI 受监管资格" : "CMI regulated qualifications"}</span>
              <strong>{zh ? "Level 2–8 职位路线" : "Level 2–8 role pathway"}</strong>
            </div>
            <ol className="cmi-level-list">
              {levels.map(([level, role, description]) => (
                <li key={level}>
                  <div className="cmi-level-badge"><span>Level</span><strong>{level}</strong></div>
                  <div><h3>{role}</h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="cmi-programme-panel">
            <div className="cmi-chart-panel-head">
              <span className="mono">Future Ready Executive MBA</span>
              <strong>{zh ? "课程至专业评估路线" : "Programme-to-professional pathway"}</strong>
            </div>
            <ol className="cmi-programme-list">
              {programme.map(([number, title, description]) => (
                <li key={number}>
                  <span className="mono">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
            <div className="cmi-programme-boundary">
              <strong>{zh ? "本课程没有 Level 7 声明。" : "No Level 7 claim is made for this programme."}</strong>
              <p>{zh ? "除非当前课程专属 CMI 文件明确确认，否则不得把 CMI Recognised programme 描述为正式 CMI Level 7 qualification。" : "A CMI Recognised programme must not be described as a formal CMI Level 7 qualification unless current programme-specific CMI documentation expressly confirms it."}</p>
            </div>
          </div>

          <figcaption>
            {zh
              ? "CMI qualification level 表示受监管资格的难度与复杂程度；不能据此把每项 CMI 认可课程自动视为某个学术学位。"
              : "A CMI qualification level describes the difficulty and complexity of a regulated qualification. It does not automatically make every CMI-recognised programme equivalent to an academic degree."}
            {" "}<a href={CMI_PATHWAY.qualifications} target="_blank" rel="noreferrer">{zh ? "查看 CMI 当前资格说明" : "View CMI's current qualification guide"} <span aria-hidden="true">↗</span></a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
