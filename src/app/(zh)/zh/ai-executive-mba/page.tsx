import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/ai-executive-mba", {
  title: "面向 AI 时代领导力的高管 MBA",
  description:
    "了解 Future Ready 高管 MBA 如何把决策框架应用于 AI 采用、数据判断、流程重设计及负责任的落地执行。",
});

const BUSINESS_PILLARS = [
  ["AI 优先次序", "把 AI 应用场景与企业的战略目标及运营限制连接起来。"],
  ["数据判断", "区分可靠信号与不完整、不相关或具误导性的数据。"],
  ["流程重设计", "梳理自动化在哪些环节改变任务、控制点、交接及决策权。"],
  ["创新治理", "明确构想如何被筛选、测试、衡量及叫停。"],
  ["价值衡量", "为每项行动指定负责人、基线及成功指标。"],
];

const CAREER_PILLARS = [
  ["领导责任", "为 AI 相关工作设定目的、边界与问责机制。"],
  ["批判性判断", "质询模型输出、假设、证据质量及意外影响。"],
  ["决策设计", "厘清哪些决定仍由人主导，工具在哪些环节提供支持。"],
  ["利益相关者协同", "向团队及客户说明拟议的改变、控制机制及影响。"],
  ["落地执行", "把选定的应用场景转化为有负责人及衡量指标的行动方案。"],
];

const THINKING_ZH = [
  ["01 · 系统思维", "审视整个系统", "在决定之前分析成因、依赖关系及连锁后果。"],
  ["02 · 第一性原理", "检验根基", "把经验证的限制与假设区分开，再从证据出发建立选项。"],
  ["03 · 设计整合思维", "结合分析与创造", "形成兼顾战略逻辑、用户需要及现实限制的选项。"],
] as const;

export default function AiExecutiveMbaPage() {
  return (
    <>
      {/* 1 · HERO INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">AI 时代领导力 · CMI 认可课程</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.4rem,5.4vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05, maxWidth: "20ch" }}>
              把 AI 采用当作一项<em style={{ color: "var(--crimson)", fontStyle: "italic" }}>商业决策</em>来领导。
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sec-sub" style={{ maxWidth: "58ch" }}>
              本页说明获 CMI 认可的 <Link href="/zh/executive-mba" className="acc">Future Ready 高管 MBA</Link>{" "}
              如何把决策框架应用于 AI 战略、数据、自动化、治理与执行。
              它是同一个<b style={{ color: "var(--ink)" }}>三个月</b>课程，不是另设的软件或技术认证。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.3rem,3vw,1.9rem)", lineHeight: 1.3, margin: "26px 0 30px", maxWidth: "24ch" }}>
              从场景筛选到<em style={{ color: "var(--crimson)", fontStyle: "italic" }}>受治理的执行</em>。
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
              <Link href="/zh/how-it-works" className="btn btn-ghost">了解课程如何运作</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHAT YOU'LL BUILD WITH AI */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">AI 视角涵盖什么</span></div></Reveal>
          <Reveal><h2 className="sec-h">商业设计与领导责任并重。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "56ch" }}>
            有效采用 AI 需要两者兼备：站得住脚的商业理据，以及清晰的人为问责。课程审视企业本身、决策过程及领导者在执行中的角色。
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
          <Reveal><h2 className="sec-h">从商业问题出发，而不是从模型出发。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "58ch" }}>
            <Link href="/zh/how-it-works" className="acc">F.A.S.T. 方法</Link>先界定预期结果、相关证据、限制及风险，
            然后领导者才判断 AI 是否合适，以及其输出如何被审核。
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
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程事实</span></div></Reveal>
          <Reveal><h2 className="sec-h">AI 主题不改变课程的正式属性。</h2></Reveal>
          <Reveal className="mt-m"><div className="grid-forces">
            {[
              ["由 CMI 颁授并背书", "面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书，并非 MQA 监管的学术学位。"],
              ["HRD Corp", HRD_CORP_CLAIM_ZH],
              ["修读形式", "三个月课程：三个每月课程，加上辅导及企业应用项目。"],
              ["课程费用", "标准费用 " + FACTS.priceStd + "。符合资格的马来西亚申请者经评估及书面批准后，可获 " + FACTS.scholarshipAmount + " LIFE Innoversity 奖学金。"],
              ["应用项目", "学员为自己的企业完成一份转型方案；没有传统考试或论文。"],
            ].map(([h, p]) => (
              <div key={h} className="card">
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px" }}>{h}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem" }}>{p}</p>
              </div>
            ))}
          </div></Reveal>
          <Reveal className="mt-s"><p className="fine" style={{ maxWidth: "72ch" }}>
            这一专业课程由 CMI 颁授并背书，并非 MQA 认证的学术学位或受监管资格。课程不保证收入、晋升或任何商业结果。
          </p></Reveal>
        </div>
      </section>

      {/* 5 · URGENCY + CTA */}
      <section className="section">
        <div className="wrap center">
          <Reveal><h2 className="sec-h" style={{ maxWidth: "22ch", marginInline: "auto" }}>
            选择班次前，先审视课程本身。
          </h2></Reveal>
          <Reveal><p className="sec-sub" style={{ maxWidth: "54ch", marginInline: "auto" }}>
            查看已公布的开课班次，选择日期适合您职责安排的班次。课程团队会说明课程大纲、修读形式及申请要求。
          </p></Reveal>
          <Reveal className="mt-m"><div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
            <Link href="/zh/executive-mba" className="btn btn-ghost">查看完整课程</Link>
          </div></Reveal>
        </div>
      </section>

      <CtaSection lang="zh" programme="AI Executive MBA" heading="沟通课程如何应用于您的 AI 优先事项。" sub="选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。" />
    </>
  );
}
