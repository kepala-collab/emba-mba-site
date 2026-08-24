import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/mba-for-entrepreneurs", {
  title: "面向创业者及创办人的高管 MBA",
  description:
    "为创办人设计的三个月专业管理课程，完成后取得 CMI 认可的课程证书。",
});

const BUILT = [
  {
    h: "第一性原理解题",
    p: "把已验证的限制与沿袭下来的假设区分开来，再用这个结果界定并检验一个有差异化的主张。",
  },
  {
    h: "商业模式与 JTBD 思维",
    p: "在确定产品及定价决定之前，先界定客户任务、证据、替代方案及付费意愿。",
  },
  {
    h: "AI 辅助决策检视",
    p: "评估 AI 能在哪些环节支持研究、分析或工作流程，以及人工审阅与问责在哪些环节仍不可或缺。",
  },
  {
    h: "面向利益相关者的战略",
    p: "在投入资源前追踪因果如何演变为三阶后果，并把假设、选择、行动及衡量指标记录下来，供联合创办人、董事会或投资者检视。",
  },
  {
    h: "跨职能视角",
    p: "与在企业拥有权、总体管理及资深职能领域各有分工的学员，一起处理决策课题。",
  },
  {
    h: "面对多重优先事项的结构",
    p: "把令人不知所措的复杂情况，转化为一个可以付诸行动的决定。",
  },
];

const FORMAT = [
  { h: "明确的三个月安排", p: "三个月课程完成后，学员在继续工作的同时取得 CMI 认可的课程证书。" },
  { h: "每月一个周末，或线上课程", p: "课程采用每月一个既定周末的安排；线上课程则免除现场出席的需要。" },
  { h: "在课程期间应用", p: "没有传统的论文或考试。学员把框架应用于自己所带领的创业项目或企业。" },
  { h: "书面补课安排", p: "如学员错过某次课程，ABC 会以书面方式记录经批准的补课方式：指定视频，或指定后续班次的出席。" },
];

export default function MbaForEntrepreneursZhPage() {
  return (
    <>
      {/* 1 · Intro */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">面向创业者及初创企业创办人</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              为<span className="acc">构建企业过程中的决策</span>而设的思维框架。
            </h1>
          </Reveal>
          <p className="sec-sub">
            创办人要就客户、产品、定价、资金、能力及时机作出彼此关联的决定。
            Future Ready 高管 MBA 在 {FACTS.durationLong} 内，
            把第一性原理、系统思维及 Jobs-To-Be-Done 框架应用到这些决定上。
            企业应用项目以学员正在建立的企业或项目为对象。
          </p>
          <p className="mono sec-k mt-s">
            三个月 · 每月一次课程周末 · 由 CMI 颁授并背书
          </p>
          <p className="sec-sub mt-s">
            查看完整的{" "}
            <Link href="/zh/executive-mba" className="acc">高管 MBA 课程</Link>，
            或了解{" "}
            <Link href="/zh/how-it-works" className="acc">方法如何运作</Link>。
          </p>
        </div>
      </section>

      {/* 2 · Built for founders */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">创办人的决策领域</span>
          </div>
          <Reveal>
            <h2 className="sec-h">从价值主张到可执行的商业模式。</h2>
          </Reveal>
          <p className="sec-sub">
            这些框架把客户证据、战略选择、资源分配、利益相关者沟通及执行连接成一个整体。
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {BUILT.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            了解课程如何把决策框架应用于{" "}
            <Link href="/zh/ai-executive-mba" className="acc">AI 时代的领导力</Link>。
          </p>
        </div>
      </section>

      {/* 3 · Applied to your venture */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">应用于您的创业项目</span>
          </div>
          <Reveal>
            <h2 className="sec-h">企业应用项目针对您自己的企业课题。</h2>
          </Reveal>
          <p className="sec-sub">
            没有传统的论文或考试。学员界定一个真实存在的课题，
            应用课程框架，制作一份供导师评审的、有先后次序的转型方案。
            该方案列明假设、决定、行动、负责人及衡量指标，
            供联合创办人、董事会或投资者讨论使用。
          </p>
          <p className="fine mt-s">
            课程不承诺融资或增长——框架与方案属于您自己；
            结果取决于您如何执行。了解{" "}
            <Link href="/zh/how-it-works" className="acc">方法如何逐步构建至最终项目</Link>。
          </p>
        </div>
      </section>

      {/* 4 · Why the format works */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">这种安排为何适合创办人</span>
          </div>
          <Reveal>
            <h2 className="sec-h">在完成课程的同时，继续经营您的企业。</h2>
          </Reveal>
          <p className="sec-sub">
            课程包括三个月内的三个周末课程、辅导及企业应用项目。
            Chartered Manager 是独立可选的 CMI 路线，具有独立资格、评估及费用。
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {FORMAT.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section">
        <div className="wrap center">
          <Reveal>
            <h2 className="sec-h">对照您企业目前面对的决定，检视课程是否合适。</h2>
          </Reveal>
          <p className="sec-sub">
            课程为期 {FACTS.durationLong}。标准费用为 {FACTS.priceStd}。
            符合资格的马来西亚申请者经评估及书面批准后，可获 {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} 奖学金。
          </p>
          <p className="mt-s">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="谈一谈您的企业目前需要理清的决定。" />
    </>
  );
}
