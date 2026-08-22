import Link from "next/link";
import PrintBriefButton from "@/components/site/PrintBriefButton";
import { CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, SIGNATURE_QUOTE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH, PROGRAMME_AUDIENCE_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/resources/advancement-brief", {
  title: "Executive MBA 课程指南",
  description: "可打印的课程指南，说明适合对象、三个月结构、应用方法、马来西亚学员费用、CMI 认可及下一步。",
});

export default function AdvancementBriefPage() {
  return (
    <div className="brief-shell">
      <div className="brief-toolbar">
        <Link className="text-action" href="/zh/resources">← 返回决策资料</Link>
        <PrintBriefButton label="打印或储存为 PDF" />
      </div>
      <article className="brief-document">
        <header>
          <p className="mono sec-k">高管 MBA 课程指南</p>
          <h1>Executive MBA 课程指南</h1>
          <p>为正在判断下一阶段专业学习必须带来什么能力的在职管理者，提供一份简明、具体的课程说明。</p>
        </header>
        <section className="brief-chapter"><span className="mono">01 / 适合度</span><div><h2>从工作需要开始，不从头衔开始。</h2><p>{PROGRAMME_AUDIENCE_ZH}</p><p>参加者应带入一个真实商业情境：战略问题、转型重点、能力差距，或会产生实质影响的决策。</p></div></section>
        <section className="brief-chapter"><span className="mono">02 / 方法</span><div><h2>把有结构的探究应用到真实情境。</h2><p>三个月包含六个培训日、三个每月课程、实践者框架、诊断、辅导及企业应用项目。学习重点包括系统、证据、假设、选项及执行。</p><div className="brief-facts"><div><strong>6 天</strong><span>课程培训</span></div><div><strong>3 次</strong><span>每月安排课程</span></div><div><strong>12 个</strong><span>应用框架模块</span></div></div></div></section>
        <section className="brief-chapter"><span className="mono">03 / 三个月安排</span><div><h2>三个月，完整课程。</h2><p>学员在三个月内完成三个每月课程、辅导及企业应用项目。达到课程要求后，获颁 CMI Certificate of Recognition。</p><p>Chartered Manager 是独立可选 CMI 路线，具有独立资格、评估、会员及费用，不包含在本课程或已公布费用内。</p></div></section>
        <section className="brief-chapter"><span className="mono">04 / 认可</span><div><h2>{CERTIFICATE_POSITIONING.headline}</h2><p>面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书。完成要求的学员获颁 CMI Certificate of Recognition。此证书记录专业课程完成，并非受监管资格或学术学位。</p></div></section>
        <section className="brief-chapter"><span className="mono">05 / 费用</span><div><h2>标准费用与奖学金资格。</h2><div className="brief-facts"><div><strong>{FACTS.priceStd}</strong><span>标准课程费用</span></div><div><strong>− {FACTS.scholarshipAmount}</strong><span>符合资格的马来西亚申请者奖学金</span></div><div><strong>{FACTS.priceAfterScholarship}</strong><span>仅在奖学金获书面批准后实付</span></div></div><p>奖学金视名额、评估及书面批准而定，并非自动获得。{HRD_CORP_CLAIM_ZH}</p></div></section>
        <section className="brief-chapter"><span className="mono">06 / 决策</span><div><h2>报名之前确认这些问题。</h2><ul><li>我会把哪一个真实商业问题带入企业应用项目？</li><li>我能否出席已公布课程并完成项目要求？</li><li>我是否清楚课程证书的性质与边界？</li><li>如继续申请 Chartered Manager，我是否了解 CMI 的独立评估与费用？</li><li>如由雇主资助，谁负责在开课前提交 HRD Corp 申请？</li></ul></div></section>
        <section className="brief-chapter"><span className="mono">07 / 原则</span><div><h2>“{SIGNATURE_QUOTE.text}”</h2><p><strong>{SIGNATURE_QUOTE.attribution}</strong> · {SIGNATURE_QUOTE.role}</p><Link className="btn btn-primary" href="/zh/apply">{CTA_LABELS.zh.guide}</Link></div></section>
      </article>
    </div>
  );
}
