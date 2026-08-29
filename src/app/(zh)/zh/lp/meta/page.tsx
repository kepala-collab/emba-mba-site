import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/lp/meta", {
  title: "为在职领导者而设的 Executive MBA | Future Ready",
  description:
    "为在职管理者打造的六个月 Future Ready Executive MBA：6 个培训日、三次导师带领的研习课，以及真实企业应用项目。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/meta" },
});

const SOURCE = "lp-meta-zh";

const EDGE = [
  ["看清整体系统", "决策之前，先厘清成因、彼此牵动的环节与潜在后果。"],
  ["验证基本假设", "分清事实、限制与假设，再以证据为据设计方案。"],
  ["兼顾分析与创新", "在战略逻辑、用户需求与现实限制之间取得平衡。"],
  ["梳理复杂信息", "把繁杂信息梳理成说得清、行得通的决策。"],
  ["五个视角审视", "从五个明确的商业视角，权衡每一个决定。"],
  ["贯通人才与业务", "把人才能力、创新与商业需求通盘考量。"],
];

const WALK = [
  "6 个培训日全程现场带领，由课程团队确认的导师亲自主讲",
  "个人领导力诊断，厘清决策模式与重点发展方向",
  "一对一高管教练，直接落地到学员自身的企业情境",
  "结课之后依然保留的框架与工具库（LMS）",
  "一份由导师评审的企业转型项目",
  "课程由 CMI（英国）认可；CMgr 须另行申请",
];

export default function ZhMetaLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">为肩负跨部门决策责任的在职领导者而设</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              六个月，锤炼面向未来的商业领导力——<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>由 CMI 颁授并背书的 Executive MBA。</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              照常在职工作的同时，六个月内完成 6 个培训日、教练辅导与企业应用项目。Chartered Manager 属独立可选的 CMI 路线，另有独立的资格、评估与费用。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">索取 2026 课程资料 →</a>
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
          <Reveal><h2 className="sec-h">六种彼此配合的决策方法。</h2></Reveal>
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
          {[["CMI", "由 CMI（英国）颁授并背书"], [FACTS.trainingDays, "分三个阶段的现场培训日"], ["1", "以真实企业课题为核心的应用项目"], ["资格评估", "马来西亚申请者择优评估奖学金"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">教学、辅导、工具与考核，一次看清。</h2></Reveal>
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
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>标准费用为 {FACTS.priceStd}。奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经 LIFE Innoversity 评估与书面批准；并非自动获得，也不是折扣码。奖学金金额与最终应付费用均以书面个别确认。{HRD_CORP_CLAIM_ZH} 分期付款方案详见费用页面。</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>索取 2026 年开课班次与奖学金资料。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>先拿到简明资料，再选择电邮、WhatsApp 或一通简短的适配沟通。课程团队会为您说明已公布的开课日期、马来西亚学员费用，以及雇主申请 HRD Corp 的流程。</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>
    </div>
  );
}
