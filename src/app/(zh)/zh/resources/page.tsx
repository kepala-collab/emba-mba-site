import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { FACTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/resources", {
  title: "高管 MBA 决策资料",
  description: "在提供联系资料之前，先比较课程适合度、教学方法、时间、认可、费用、奖学金与 HRD Corp 申请流程。",
});

const RESOURCES = [
  ["01", "课程匹配检查", "回答四道问题，建立一份用于核对目标、时间、费用与认可的私人清单。不评分、不储存，也不会传送选择。", "/zh/diagnostic", "开始检查"],
  ["02", "Executive MBA 课程指南", "阅读或打印课程结构、马来西亚学员完整费用、CMI 认可及选择课程前应确认的问题。", "/zh/resources/advancement-brief", "打开课程指南"],
  ["03", "如何比较管理课程", "从教学内容、实际应用、时间、证书及费用五个方面比较专业管理课程。", "/zh/insights/advancement-question", "阅读比较指南"],
  ["04", "马来西亚 Chartered Manager", "了解 CMI 当前申请路线、资格、评估费用、fCMgr、CMgr MCMI 及马来西亚专业网络。", "/zh/chartered-manager-malaysia", "了解专业路线"],
] as const;

export default function ResourcesPage() {
  return (
    <>
      <header className="resource-hero">
        <div className="wrap">
          <p className="mono sec-k">课程资料 · 无需提交联系方式</p>
          <h1>在提供资料之前，先了解清楚。</h1>
          <p>这些资料无需填写联系信息，并明确说明时间、费用、认可及资助边界。</p>
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
              <h2>从真实工作需要建立学习理由。</h2>
              <ol>
                <li>说明需要处理的商业决策、能力差距或转型议题。</li>
                <li>确认企业应用项目如何回应这个情境。</li>
                <li>检查六个培训日及三个课程周末是否可行。</li>
                <li>列明标准费用 {FACTS.priceStd}，并说明奖学金只供通过资格评估及获书面批准的马来西亚申请者；任何奖学金金额及应付费用均会个别确认。</li>
                <li>由雇主决定是否申请 HRD Corp 资助。雇主须在开课前提交；HRD Corp 决定资格与批准金额。</li>
              </ol>
            </article>
          </Reveal>
          <Reveal delay={60}>
            <article className="guide-card" id="decision-checklist">
              <p className="mono sec-k">中立决策清单</p>
              <h2>选择之前应提出的问题。</h2>
              <ul>
                <li>这项学习必须帮助我改善哪一项工作？</li>
                <li>课程教授、应用及评估什么内容？由谁负责？</li>
                <li>完成课程后，正式获颁什么？</li>
                <li>哪一项专业称号需要另行通过评估？</li>
                <li>奖学金资格如何评估？获批结果何时以书面确认？</li>
                <li>由谁决定雇主资助资格与批准金额？</li>
                <li>付款前能否查看日期、条款及重要声明？</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
