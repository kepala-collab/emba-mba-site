import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, PROGRAMME_POSITIONING_ZH } from "@/lib/content";
import {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH, CHARTERED_MANAGER_BOUNDARY_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const PATH = "/zh/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "CMI 认可：颁发范围与独立路线",
  description: `看清 Future Ready Executive MBA 的 CMI 认可证书具体涵盖什么、其专业相关性边界，以及 Chartered Manager 作为独立可选 CMI 路线的定位。`,
});


const FAQS = [
  ["顺利结业能拿到什么？", `顺利结业的学员将获颁 Executive MBA 课程的 CMI 认可证书（${CERTIFICATE_POSITIONING.credential}）。证书的最终格式、措辞与签发均由 CMI 决定。`],
  ["这是学术 MBA 学位吗？", `不是。${PROGRAMME_POSITIONING_ZH}学员顺利结业将获颁 CMI 认可证书（${CERTIFICATE_POSITIONING.credential}）。这并非学术课程，也不是 MQA 认证的学术学位或受监管资格。`],
  ["结业后会自动成为 Chartered Manager 吗？", `不会自动。${CHARTERED_MANAGER_BOUNDARY_ZH}`],
] as const;

export default function CmiRecognitionZhPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "课程详情", path: "/zh/executive-mba" }, { name: "CMI 认可", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">由 CMI 颁发并认可 · 专业发展</p>
          <h1><TechnicalText>看得见的成果，拿得到的认可</TechnicalText></h1>
          <p>{PROGRAMME_POSITIONING_ZH}学员顺利结业将获颁 CMI 认可证书（{CERTIFICATE_POSITIONING.credential}）。这并非学术课程，也不是 MQA 认证的学术学位或受监管资格。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH} {CHARTERED_MANAGER_BOUNDARY_ZH}</p>
          <div className="chartered-hero-actions"><Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} <span aria-hidden="true">→</span></Link><Link href="/zh/executive-mba" className="btn btn-ghost">了解 {FACTS.durationMonths} 个月课程</Link></div>
          <p className="fine">看清哪些已经颁发、哪些各自独立，以及由谁决定。</p>
        </div>
      </header>

      <section className="section chartered-positioning"><div className="wrap">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">认可带来的价值</p><h2 className="sec-h">对标 CMI 标准，佐证来自企业项目</h2><p>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}</p></div></Reveal>
        <div className="chartered-outcome-grid">
          <Reveal><article><span className="mono">01</span><h3>获认可的结业证明</h3><p>CMI Recognition 意味着课程已对标 CMI Professional Standard 完成基准评估。顺利结业的学员获颁 CMI 认可证书（{CERTIFICATE_POSITIONING.credential}）。</p></article></Reveal>
          <Reveal delay={45}><article><span className="mono">02</span><h3>说得清的专业依据</h3><p>课程证书与您自己企业情境下的企业应用项目，记录了您建立的判断依据，可列入专业履历或向招聘方说明。</p></article></Reveal>
          <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>Chartered Manager——一条独立路线</h3><p>{CHARTERED_MANAGER_BOUNDARY_ZH}</p></article></Reveal>
        </div>
        <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">阅读 CMI 对 Recognition 的官方说明 <span aria-hidden="true">↗</span></a></p>
      </div></section>

      <section className="section"><div className="wrap chartered-preparation-grid">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">这份佐证用在哪里</p><h2 className="sec-h">带来决定，带出董事会依据</h2><p>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}</p></div><Link href="/zh/how-it-works" className="btn btn-ghost">了解课程方法 <span aria-hidden="true">→</span></Link></Reveal>
        <ol className="chartered-preparation-list"><li><span>01</span><div><h3>先诊断，再决定</h3><p>动用资源之前，先把症状、假设与限制分辨清楚。</p></div></li><li><span>02</span><div><h3>把依据讲明白</h3><p>比较各个选项，用书面说清为什么这个方向是对的。</p></div></li><li><span>03</span><div><h3>让判断落地成行动</h3><p>贴着眼下的企业情境，拟出经导师审阅的行动方案。</p></div></li></ol>
      </div></section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">直接回答</p><h2 className="sec-h">先弄清楚谁决定什么，再做决定</h2></Reveal><Reveal className="mt-s">{FAQS.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</Reveal></div></section>
      <CtaSection lang="zh" programme="Executive MBA" heading="哪条路线更适合，聊一聊" sub="先领取课程指南，或预约课程咨询与课程团队详谈。" />
    </>
  );
}
