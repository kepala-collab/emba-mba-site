import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/mba-for-entrepreneurs", {
  title: "面向创业者及创办人的 Executive MBA",
  description: `专为创办人打造的 ${FACTS.durationMonths} 个月专业管理课程，结业即获 CMI 认可的课程证书。`,
});

const BUILT = [
  {
    h: "第一性原理解题",
    p: "分清哪些是真正验证过的限制，哪些只是沿袭下来的假设，再据此厘清并检验真正有差异化的主张。",
  },
  {
    h: "商业模式与 JTBD 思维",
    p: "在敲定产品与定价之前，先厘清客户要完成的任务、佐证、替代方案与付费意愿。",
  },
  {
    h: "AI 辅助决策检视",
    p: "判断 AI 能在研究、分析或工作流程的哪些环节发挥作用，又在哪些环节仍离不开人工把关与问责。",
  },
  {
    h: "面向利益相关者的战略",
    p: "在投入资源之前，推演因果如何一路传导至三阶后果，并把假设、取舍、行动与衡量指标逐一记录，供联合创办人、董事会或投资者审阅。",
  },
  {
    h: "跨职能视角",
    p: "与分别来自企业主、总体管理及资深职能岗位的同学，共同推敲决策课题。",
  },
  {
    h: "面对多重优先事项的结构",
    p: "把千头万绪的复杂局面，收敛成一个可以落地执行的决定。",
  },
];

const FORMAT = [
  { h: `明确的 ${FACTS.durationMonths} 个月安排`, p: `${FACTS.durationMonths} 个月修完，一边照常工作，一边取得 CMI 认可的课程证书。` },
  { h: `${FACTS.liveSessions} 个指定周末的导师带领研习课，或线上课程`, p: `课程集中在 ${FACTS.liveSessions} 个指定周末进行；选择线上班则无需到场。` },
  { h: "在课程期间应用", p: "没有传统论文，也没有考试。学员直接把所学框架用在自己经营的创业项目或企业上。" },
  { h: "书面补课安排", p: "万一错过某次课程，ABC 会以书面确认经批准的补课方式：观看指定录像，或参加指定的后续班次。" },
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
              为<span className="acc">创业路上每一个关键决策</span>而生的思维框架。
            </h1>
          </Reveal>
          <p className="sec-sub">
            客户、产品、定价、资金、能力与时机——创办人的每一个决定都环环相扣。
            Future Ready Executive MBA 用 {FACTS.durationLong} 的时间，
            把第一性原理、系统思维与 Jobs-To-Be-Done 框架带进这些决策；
            企业应用项目就以您正在打造的企业或项目为对象。
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.durationMonths} 个月 · {FACTS.liveSessions} 个指定周末 · 由 CMI 颁授并背书
          </p>
          <p className="sec-sub mt-s">
            查看完整的{" "}
            <Link href="/zh/executive-mba" className="acc">Executive MBA 课程</Link>，
            或了解{" "}
            <Link href="/zh/how-it-works" className="acc">这套方法如何运作</Link>。
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
            这些框架把客户佐证、战略取舍、资源分配、利益相关者沟通与执行，串成一个整体。
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
            看看课程如何把决策框架用在{" "}
            <Link href="/zh/ai-executive-mba" className="acc">AI 时代的领导力</Link>上。
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
            <h2 className="sec-h">企业应用项目，直接对准您自己的经营课题。</h2>
          </Reveal>
          <p className="sec-sub">
            没有传统论文，也没有考试。学员锁定一个真实存在的课题，
            套用课程框架，产出一份分清主次、交由导师评审的转型方案；
            方案写明假设、决策、行动、负责人与衡量指标，
            可直接拿去与联合创办人、董事会或投资者讨论。
          </p>
          <p className="fine mt-s">
            课程不承诺融资，也不承诺增长——框架与方案都归您所有，
            成效则取决于您如何落地。了解{" "}
            <Link href="/zh/how-it-works" className="acc">这套方法如何一步步走向最终项目</Link>。
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
            <h2 className="sec-h">修读课程，不必放下手上的企业。</h2>
          </Reveal>
          <p className="sec-sub">
            {FACTS.durationMonths} 个月内，课程涵盖 {FACTS.liveSessions} 个指定周末的导师带领研习课、导师辅导与企业应用项目。
            Chartered Manager 属于独立可选的 CMI 路线，另有各自的资格、评估与费用。
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
            <h2 className="sec-h">对照当下企业面对的决策，看看这门课程是否适合您。</h2>
          </Reveal>
          <p className="sec-sub">
            课程为期 {FACTS.durationLong}，标准费用 {FACTS.priceStd}。
            奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经 {FACTS.scholarshipProvider} 评估与书面批准，并非自动获得。
          </p>
          <p className="mt-s">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="聊聊您的企业眼下最需要理清的那个决策。" />
    </>
  );
}
