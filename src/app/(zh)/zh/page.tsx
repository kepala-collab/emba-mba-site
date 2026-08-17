import Link from "next/link";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import Reveal from "@/components/site/Reveal";
import { FACTS, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh", {
  title: "六个月高管 MBA · 为在职管理者设计",
  description:
    "通过真实企业项目提升管理判断力。六个月专业发展课程包括三个集中课程、12 个管理框架及获 CMI 认可的课程证书。",
  alternates: {
    canonical: "/zh",
    languages: { en: "/", "zh-Hans": "/zh", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    title: "六个月高管 MBA · 为在职管理者设计",
    description: "以真实企业课题训练管理判断、决策与执行能力，并在继续工作的同时完成课程。",
    locale: "zh_MY",
    url: `${SITE.url}/zh`,
  },
  twitter: {
    title: "六个月高管 MBA · 为在职管理者设计",
    description: "以真实企业课题训练管理判断、决策与执行能力，并在继续工作的同时完成课程。",
  },
});

const DECISION_PATHS = [
  ["01", "课程详情", "了解适合对象、六个月安排及完成要求。", "/zh/executive-mba", "了解完整课程"],
  ["02", "课程方法", "了解如何把复杂企业问题整理成可执行的管理决定。", "/zh/how-it-works", "查看 F.A.S.T. 方法"],
  ["03", "课程大纲", "查看 12 个管理框架、企业项目及学习次序。", "/zh/curriculum", "查看课程大纲"],
  ["04", "CMI 专业认可", "分清课程证书、fCMgr 及独立 Chartered Manager 路线。", "/zh/chartered-manager-malaysia", "了解 CMI 路线"],
  ["05", "费用与奖学金", "了解 RM10,000 标准费用、奖学金资格及 HRD Corp 流程。", "/zh/fees", "查看费用及资格"],
  ["06", "2026 开课日期", "比较已公布的英语及华语班日期。", "/zh/intakes", "查看开课日期"],
] as const;

const OUTCOMES = [
  ["01", "找出真正问题", "把表面症状与真正需要处理的管理决定分开。"],
  ["02", "说明决策依据", "检验假设、比较选项，并清楚说明建议背后的逻辑。"],
  ["03", "把决定变成行动", "根据自己的企业环境，制定可执行的行动方案。"],
] as const;

export default function ZhHome() {
  return (
    <div lang="zh-Hans">
      <section className="working-hero hero">
        <div className="wrap working-hero-grid">
          <div className="working-hero-copy">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Future Ready 高管 MBA · 为在职管理者设计</span></div>
            </Reveal>
            <Reveal delay={50}>
              <h1>企业最终由真正准备好面对<em>未来</em>的人带领。</h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="working-hero-lede">
                以一个真实企业课题训练问题分析、管理判断及执行规划。课程为期六个月，并按在职管理者的工作安排设计。
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="working-hero-actions">
                <Link href="/zh/apply" className="btn btn-primary" data-track-event="cta_click" data-track-id="zh_hero_request_guide" data-track-location="hero">
                  索取课程资料 <span aria-hidden="true">→</span>
                </Link>
                <Link href="/zh/executive-mba" className="text-action">了解完整课程 <span aria-hidden="true">↗</span></Link>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="working-hero-proof" aria-label="课程保证">
                <ProgrammeMarks lang="zh" />
                <span>课程获 CMI 批准及认可 · HRD Corp 以雇主申请及审批为准</span>
                <span>符合资格的马来西亚申请者可接受奖学金评估</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <div className="card nested-form-card home-lead-card">
              <p className="mono sec-k acc">课程咨询 · 无需付款</p>
              <h2>先取得资料，再决定是否继续。</h2>
              <p className="fine">课程团队会按你选择的方式回复，并说明课程适合度、日期、费用、奖学金资格及雇主申请 HRD Corp 的流程。</p>
              <LeadForm programme="Executive MBA" source="zh-decision-led-home" lang="zh" placement="hero" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="课程概览">
        <div className="wrap working-fact-grid">
          <div><strong>6 个月</strong><span>专业发展课程</span></div>
          <div><strong>{FACTS.trainingDays} 天</strong><span>分三个集中课程完成</span></div>
          <div><strong>{FACTS.moduleCount}</strong><span>个实用管理框架</span></div>
          <div><strong>1 个项目</strong><span>围绕真实企业课题完成</span></div>
        </div>
      </section>

      <section className="section working-resources-section">
        <div className="wrap">
          <Reveal>
            <div className="working-section-head">
              <div><p className="mono sec-k">一次解决一个问题</p><h2 className="sec-h">直接查看你需要的答案。</h2></div>
              <p>每个页面只处理一个主要决定。你无需读完整个网站，才可以向课程团队提出问题。</p>
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
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">课程存在的原因</span></div>
              <h2 className="sec-h">代价最高的决定，是太迟作出，或从未真正执行。</h2>
              <p className="sec-sub">课程重点是提升管理决策质量，而不是增加更多无法落地的理论。</p>
              <Link href="/zh/how-it-works" className="text-action working-inline-action">了解 F.A.S.T. 方法 <span aria-hidden="true">↗</span></Link>
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
