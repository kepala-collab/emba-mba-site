import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/lp/meta", {
  title: "面向在职领导者的高管 MBA | Future Ready",
  description:
    "面向在职管理者的六个月专业管理课程：首三个月完成获英国 CMI 认可的课程证书阶段，随后三个月为符合条件者准备 CMI 特许经理人评估。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/meta", languages: { en: "/lp/meta", "zh-Hans": "/zh/lp/meta" } },
});

const SOURCE = "lp-meta-zh";

const EDGE = [
  ["理解整体系统", "在决策前分析原因、相互依赖关系及潜在后果。"],
  ["检验基本假设", "区分事实、限制与假设，再依据证据设计选项。"],
  ["结合分析与创新", "在战略逻辑、使用者需要及实际限制之间取得平衡。"],
  ["梳理复杂信息", "把复杂信息整理成可说明、可执行的决策。"],
  ["审视五个角度", "从五个明确的商业视角评估每项决定。"],
  ["连接人才与业务", "综合考虑人才能力、创新及商业要求。"],
];

const WALK = [
  "六个培训日的现场引导，由课程团队确认的导师主讲",
  "个人领导力诊断，识别决策模式及发展重点",
  "一对一高管教练，应用于学员自身的企业情境",
  "完成课程后保留的框架与工具库（LMS）",
  "一个供导师评审的企业转型项目",
  "课程获 CMI（英国）认可，CMgr 须另行申请",
];

export default function ZhMetaLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">面向承担跨职能决策责任的在职领导者</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              下一阶段的领导责任，需要的不只是<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>工作经验</em>。
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              建立一套可重复使用的方法，界定复杂商业问题、检验选择，并完成一份由导师评审的企业行动方案。六个月课程为在职管理者而设。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">获取 2026 课程资料 →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <ProgrammeMarks lang="zh" centered labelled />
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} 个培训日 · {FACTS.liveSessions} 次课程 · ABC 报告已完成 {FACTS.cohorts} 届</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">培养的能力</span></div></Reveal>
          <Reveal><h2 className="sec-h">六种相互配合的决策方法。</h2></Reveal>
          <div className="insight-grid mt-m">
            {EDGE.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8 }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[["CMI", "依据 CMI 专业标准批准及认可"], [FACTS.trainingDays, "三个阶段的现场培训日"], ["1", "围绕真实商业议题完成的应用项目"], [FACTS.scholarshipAmount, "符合资格的马来西亚申请者奖学金"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程教学、辅导、工具及评估项目。</h2></Reveal>
          <div role="list" style={{ padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {WALK.map((w) => (
              <Reveal key={w}>
                <div role="listitem" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc" style={{ marginTop: 3, fontWeight: 700 }}>→</span>
                  <span style={{ color: "var(--ink-2)", fontSize: "1.02rem" }}>{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>标准费用为 {FACTS.priceStd}。符合资格的马来西亚申请者经评估及书面批准后，可获 {FACTS.scholarshipAmount} LIFE Innoversity 奖学金；获批者实付 <b style={{ color: "var(--ink)" }}>{FACTS.priceAfterScholarship}</b>。奖学金并非自动获得。{HRD_CORP_CLAIM_ZH} 分期付款方案列于费用页面。</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>获取 2026 课程及奖学金资料。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>先收取简明资料，再选择电邮、WhatsApp 或简短课程匹配通话。课程团队会说明已公布的开课日期、马来西亚学员费用及雇主申请 HRD Corp 的流程。</p></Reveal>
          <Reveal delay={80}>
            <div className="card" style={{ padding: 26, maxWidth: 520, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" variant="campaign" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>
    </div>
  );
}
