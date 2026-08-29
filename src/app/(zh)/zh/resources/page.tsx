import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/resources", {
  title: "Executive MBA 决策资料",
  description: "留下联系资料之前，先比较课程适配、教学方法、时间投入、认可、费用、奖学金与 HRD Corp 申领流程。",
});

const RESOURCES = [
  ["01", "课程匹配检查", "回答四道问题，生成一份用于核对目标、时间、费用与认可的私人清单。不评分、不储存，也不会上传您的选择。", "/zh/diagnostic", "开始检查"],
  ["02", "Executive MBA 课程指南", "阅读或打印课程结构、马来西亚学员的完整费用、CMI 认可，以及选择课程前应先厘清的问题。", "/zh/resources/advancement-brief", "打开课程指南"],
  ["03", "如何比较管理课程", "从教学内容、实际应用、时间、证书与费用五个方面，比较各类专业管理课程。", "/zh/insights/advancement-question", "阅读比较指南"],
  ["04", "马来西亚 Chartered Manager", "了解 CMI 目前的申请路线、资格、评估费用、fCMgr、CMgr MCMI 与马来西亚专业网络。", "/zh/chartered-manager-malaysia", "了解专业路线"],
] as const;

export default function ResourcesPage() {
  return (
    <>
      <header className="resource-hero">
        <div className="wrap">
          <p className="mono sec-k">课程资料 · 无需提交联系方式</p>
          <h1>留下资料之前，先把情况了解清楚。</h1>
          <p>这些资料无需填写任何联系方式，并把时间、费用、认可与资助的边界一一说清楚。</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap resource-list">
          {RESOURCES.map(([number, title, body, href, action], index) => (
            <Reveal key={title} delay={index * 45}>
              <article className="resource-dossier">
                <span className="mono">{number}</span>
                <div><h2>{title}</h2><p>{body}</p></div>
                <Link href={href} className="text-action">{action} <span aria-hidden="true">↗</span></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="employer-guide">
        <div className="wrap guide-grid">
          <Reveal>
            <article className="guide-card">
              <p className="mono sec-k">与雇主沟通</p>
              <h2>从真实的工作需要，建立学习的理由。</h2>
              <ol>
                <li>说明您要处理的商业决策、能力短板或转型议题。</li>
                <li>确认企业应用项目如何回应这一情境。</li>
                <li>确认六个培训日与三个课程周末是否安排得开。</li>
                <li>列明标准费用 {FACTS.priceStd}，并说明奖学金仅择优授予通过资格评估并获书面批准的马来西亚申请者；具体奖学金金额与应付费用均以书面个别确认。</li>
                <li>由雇主决定是否申请 HRD Corp 资助；雇主须在开课前提交，资格与批准金额由 HRD Corp 决定。</li>
              </ol>
            </article>
          </Reveal>
          <Reveal delay={60}>
            <article className="guide-card" id="decision-checklist">
              <p className="mono sec-k">中立决策清单</p>
              <h2>做选择之前，应该提出的问题。</h2>
              <ul>
                <li>这次学习，必须帮我改善哪一项具体工作？</li>
                <li>课程教什么、如何应用、怎样评估？由谁负责？</li>
                <li>完成课程后，正式获颁的是什么？</li>
                <li>哪些专业称号需要另行通过评估才能取得？</li>
                <li>奖学金资格如何评估？获批结果何时以书面确认？</li>
                <li>雇主资助的资格与批准金额，由谁决定？</li>
                <li>付款之前，能否先查看日期、条款与重要声明？</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
