import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/mba-for-entrepreneurs", {
  title: "面向创业者及创办人的 Executive MBA",
  description: `专为创办人打造的 ${FACTS.durationMonths} 个月专业管理课程，结业即获颁 CMI 认可证书。`,
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
  { h: `明确的 ${FACTS.durationMonths} 个月安排`, p: `${FACTS.durationMonths} 个月修完，一边照常工作，一边获颁 CMI 认可证书。` },
  { h: `${FACTS.liveSessions} 次导师带领的指定研习课，或线上课程`, p: `课程集中在 ${FACTS.liveSessions} 次指定研习课进行；选择线上班则无需到场。` },
  { h: "在课程期间应用", p: "没有传统论文，也没有考试。学员直接把所学框架用在自己经营的创业项目或企业上。" },
  { h: "书面补课安排", p: "万一错过某次课程，ABC 会以书面确认经批准的补课方式：观看指定录像，或参加指定的后续届别。" },
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
              从<span className="acc">凭直觉，到写成方案</span>
            </h1>
          </Reveal>
          <p className="sec-sub">
            创办人日常凭直觉，对客户、产品、定价、资金、能力与时机作出彼此牵动的决定，
            靠反复申辩撑住，而不是摊开推理过程。{FACTS.durationMonths} 个月内，企业应用项目
            会把其中一项决定，从您自己的创业项目出发，经第一性原理、系统思维与
            Jobs-To-Be-Done 框架推进，写成一份决策、行动、负责人与衡量指标齐备的书面方案，
            交由导师评审——足以带去与联合创办人、董事会或投资者讨论。课程结束后，
            框架仍留在您手上。
          </p>
          <p className="mono sec-k mt-s">
            {FACTS.durationMonths} 个月 · {FACTS.liveSessions} 次指定研习课 · 由 CMI 颁发并认可
          </p>
          <p className="fine mt-s">{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}</p>
          <p className="sec-sub mt-s">
            查看完整的{" "}
            <Link href="/zh/executive-mba" className="acc">Executive MBA 课程</Link>，
            或了解{" "}
            <Link href="/zh/how-it-works" className="acc">这套方法如何运作</Link>。
          </p>
        </div>
      </section>

      {/* 2 · Built for founders */}
      <section className="section section--alt">
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
            <Link href="/zh/how-it-works" className="acc">这套方法如何一步步走向企业应用项目</Link>。
          </p>
        </div>
      </section>

      {/* 4 · Why the format works */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">这种安排为何适合创办人</span>
          </div>
          <Reveal>
            <h2 className="sec-h">修读课程，不必放下手上的企业。</h2>
          </Reveal>
          <p className="sec-sub">
            {FACTS.durationMonths} 个月内，课程涵盖 {FACTS.liveSessions} 次导师带领的指定研习课、导师辅导与企业应用项目，结业即获颁 CMI 认可证书。
            Chartered Manager 属于独立可选的 CMI 路线，另有各自的资格、评估与费用。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
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
            <h2 className="sec-h">聊聊您正在权衡的那个决策。</h2>
          </Reveal>
          <p className="sec-sub">
            课程为期 {FACTS.durationMonths} 个月，标准费用 {FACTS.priceStd}。
            {FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经个别评估与书面批准，任何奖学金金额及应付费用均会个别以书面确认；奖学金并非自动授予。
          </p>
          <p className="mt-s">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="获取您正在权衡的那个决策所需的事实。" />
    </>
  );
}
