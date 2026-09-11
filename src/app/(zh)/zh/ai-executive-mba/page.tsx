import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_ZH } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH, ENQUIRY_COMMITMENT_ZH, HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/ai-executive-mba", {
  title: "先看业务问题，再选工具",
  description:
    "把一项 AI 应用决策带进 Future Ready Executive MBA，六个月内写成一份经导师团队审阅的行动方案。",
});

const BUSINESS_PILLARS = [
  ["AI 优先次序", "把 AI 应用场景与企业的战略目标和运营约束对接起来。"],
  ["数据研判", "分清哪些是可靠信号，哪些是残缺、无关或带误导性的数据。"],
  ["流程重构", "厘清自动化在哪些环节改写了任务、控制点、交接与决策权。"],
  ["创新治理", "明确一个构想如何被筛选、试点、衡量，以及何时叫停。"],
  ["价值衡量", "为每项行动定下负责人、基线与成功指标。"],
];

const CAREER_PILLARS = [
  ["领导担当", "为 AI 相关工作定下目的、边界与问责机制。"],
  ["批判性判断", "追问模型输出、前提假设、证据质量与意料之外的影响。"],
  ["决策设计", "厘清哪些决定仍由人拍板，工具又在哪些环节提供支撑。"],
  ["利益相关者协同", "向团队与客户讲清楚拟议的改动、控制机制与影响。"],
  ["落地执行", "把选定的应用场景转化为有人负责、有指标可衡量的行动方案。"],
];

const THINKING_ZH = [
  ["01 · 系统思维", "从全局审视系统", "在拍板之前，先摸清成因、依赖关系与连锁后果。"],
  ["02 · 第一性原理", "回到根基验证", "把经过验证的约束与主观假设分开，再从证据出发搭建选项。"],
  ["03 · 设计整合思维", "分析与创造并用", "形成兼顾战略逻辑、用户需要与现实约束的选项。"],
] as const;

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">写给要为 AI 拿主意的管理者 · 马来西亚</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              先看业务问题，<em style={{ color: "var(--crimson)", fontStyle: "italic" }}>再选工具</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              被要求为 AI 拿主意，现在已是职责的一部分。业务问题先问，工具后选。
              把一项真实的 AI 应用决策，带进同一门<b style={{ color: "var(--ink)" }}>{FACTS.durationMonths} 个月</b>的{" "}
              <Link href="/zh/executive-mba" className="acc">Future Ready Executive MBA</Link>，
              写成一份经导师团队审阅的行动方案。{PROGRAMME_POSITIONING_ZH}课程为期 {FACTS.durationMonths} 个月，属于非学术专业发展课程，并非 MQA 认证的学术学位或受监管资格。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              从一个 AI 应用场景，到<em style={{ color: "var(--crimson)", fontStyle: "italic" }}>团队可以把关的方案</em>。
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
              <Link href="/zh/how-it-works" className="btn btn-ghost">看看这六个月怎么运作</Link>
              <Link href="/zh/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.zh.company}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">AI 视角涵盖什么</span></div></Reveal>
          <Reveal><h2 className="sec-h">商业理据与领导担当，缺一不可</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            一项拟议的 AI 应用场景，需要两样东西缺一不可：站得住脚的商业理据，以及清晰的人为问责。课程带您审视自己的企业、决策的过程，以及您在执行中的角色。
          </p></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>商业 · 优先次序 · 数据 · 流程 · 治理 · 衡量</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {BUSINESS_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>

          <Reveal className="mt-m"><div className="mono sec-k" style={{ fontSize: ".72rem" }}>领导 · 判断 · 决策权 · 协同 · 执行</div></Reveal>
          <Reveal className="mt-s"><div className="grid-forces">
            {CAREER_PILLARS.map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.14rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 3 · CONTEXT OVER CONTENT */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">先问问题，再选工具</span></div></Reveal>
          <Reveal><h2 className="sec-h">先定决策，再选模型</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            <Link href="/zh/how-it-works" className="acc">F.A.S.T. 方法</Link>先把预期结果、相关证据、约束与风险界定清楚，
            您再据此判断 AI 是否合适、其输出又该如何把关。
          </p></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {THINKING_ZH.map(([i, h, p]) => (
              <div key={i} className="card">
                <div className="mono sec-k" style={{ fontSize: ".72rem" }}>{i}</div>
                <h3 style={{ fontSize: "1.18rem", margin: "14px 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* 4 · SAME-PROGRAMME FACTS STRIP */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程事实</span></div></Reveal>
          <Reveal><h2 className="sec-h">加入 AI 主题，课程的正式属性不变</h2></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["由 CMI 颁发并认可", `${PROGRAMME_POSITIONING_ZH}并非 MQA 认证的学术学位或受监管资格。${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}`],
              ["HRD Corp", HRD_CORP_CLAIM_ZH],
              ["修读形式", `${FACTS.durationMonths} 个月的课程：${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次指定研习课进行，另有一对一辅导与企业应用项目。`],
              ["课程费用", `标准费用 ${FACTS.priceStd}。${FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经评估与书面批准；并非自动授予，最终金额与应付费用均以书面个别确认。`],
              ["企业应用项目", "学员为自己的企业交出一份书面行动方案，经导师团队审阅；没有传统的考试或论文。"],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            该方法旨在培养与 AI 相关工作的决策能力；商业成果取决于学员自身的证据、选择与执行。
          </p></Reveal>
        </div>
      </section>

      {/* 5 · URGENCY + CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            挑开课日期之前，先把课程本身看清楚
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            浏览已公布的开课日期，挑一个与您职责安排相配的。课程团队会为您解答课程结构、费用、认可与由雇主主导的 HRD Corp 资助等问题。
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
            <Link href="/zh/executive-mba" className="btn btn-ghost">查看完整课程</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection lang="zh" programme="AI Executive MBA" heading="聊聊正在权衡的 AI 决策" sub={`通话、线上会议、面谈或电邮，方式由您选。课程团队会解答关于适配度、日期、费用、认可，以及由雇主主导的 HRD Corp 资助等问题。${ENQUIRY_COMMITMENT_ZH}`} />
    </>
  );
}
