import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CERTIFICATE_POSITIONING, CTA_LABELS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const PATH = "/zh/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "Future Ready Executive MBA 的 CMI 认可｜马来西亚",
  description: "看清六个月 Future Ready Executive MBA 的 CMI（英国）认可、课程证书，以及独立可选的 Chartered Manager 路线。",
});

const FAQS = [
  ["顺利结业能拿到什么？", "顺利结业者将获颁 Future Ready Executive MBA 课程的 CMI Certificate of Recognition。证书的最终格式、措辞与签发均由 CMI 决定。"],
  ["这是学术 MBA 学位吗？", "不是。这是一门面向未来商业领导力、由 CMI 颁授并背书的六个月 Executive MBA 专业发展课程，并非 MQA 认证的学术学位或受监管资格。"],
  ["结业后会自动成为 Chartered Manager 吗？", "不会。Chartered Manager 是一条独立可选的 CMI 路线，其资格、评估、会员与费用皆由 CMI 决定，不包含在本课程或已公布费用之内。"],
] as const;

export default function CmiRecognitionZhPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "课程详情", path: "/zh/executive-mba" }, { name: "CMI 认可", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">CMI（英国）背书及认可</p>
          <h1><TechnicalText>让真实的管理成果，获得专业认可。</TechnicalText></h1>
          <p>Future Ready Executive MBA 帮助资深管理者把一个真实企业课题，化为可落地的行动方案。顺利结业者将获颁 CMI 课程认可证书。</p>
          <div className="chartered-hero-actions"><Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} <span aria-hidden="true">→</span></Link><Link href="/zh/executive-mba" className="btn btn-ghost">了解六个月课程</Link></div>
        </div>
      </header>

      <section className="section chartered-positioning"><div className="wrap">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">认可带来的价值</p><h2 className="sec-h">拿得出的专业发展证据，而不只是一纸出席证明。</h2><p>课程把 CMI 的专业认可，与学员自身企业情境下的应用项目扣在一起。</p></div></Reveal>
        <div className="chartered-outcome-grid">
          <Reveal><article><span className="mono">01</span><h3>获认可的结业证明</h3><p>CMI Recognition 意味着课程已对标 CMI Professional Standard 完成基准评估。顺利结业者获颁课程的 CMI Certificate of Recognition。</p></article></Reveal>
          <Reveal delay={45}><article><span className="mono">02</span><h3>说得清的专业依据</h3><p>课程证书与应用项目，可在专业履历与职业沟通中，作为管理发展的可信佐证。</p></article></Reveal>
          <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>把下一步分得清楚</h3><p>Chartered Manager 是一条独立可选的路线，其资格、评估、会员与费用由 CMI 决定；本课程不承诺、也不包含这一专业身份。</p></article></Reveal>
        </div>
        <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">阅读 CMI 对 Recognition 的官方说明 <span aria-hidden="true">↗</span></a></p>
      </div></section>

      <section className="section"><div className="wrap chartered-preparation-grid">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">企业与职业价值</p><h2 className="sec-h">带着一个真实决定进来，练就更硬的决策功夫离开。</h2><p>课程帮学员把问题诊断得更准、把选项比得更清、把依据讲得更明，并带领团队真正行动起来。课程不保证晋升、薪资、就业或企业成果。</p></div><Link href="/zh/how-it-works" className="btn btn-ghost">了解课程方法 <span aria-hidden="true">→</span></Link></Reveal>
        <ol className="chartered-preparation-list"><li><span>01</span><div><h3>先诊断，再决定</h3><p>动用资源之前，先把症状、假设与限制分辨清楚。</p></div></li><li><span>02</span><div><h3>把依据讲明白</h3><p>比较各个选项，说清为什么某个方向值得押注。</p></div></li><li><span>03</span><div><h3>让判断落地成行动</h3><p>贴着眼下的企业情境，拟出可执行的行动方案。</p></div></li></ol>
      </div></section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">直接回答</p><h2 className="sec-h">做决定前，先弄清楚。</h2></Reveal><Reveal className="mt-s">{FAQS.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</Reveal></div></section>
      <CtaSection lang="zh" programme="Executive MBA" heading="看看 Future Ready Executive MBA 是否契合您眼下要做的决定。" sub="先领取课程指南，或预约与课程团队做一次不设约束的沟通。" />
    </>
  );
}
