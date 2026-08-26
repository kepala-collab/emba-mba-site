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
  title: "Future Ready 高管 MBA 的 CMI 认可",
  description: "了解六个月 Future Ready 高管 MBA 的 CMI（英国）认可、课程证书，以及独立可选的 Chartered Manager 路线。",
});

const FAQS = [
  ["成功完成课程后会获得什么？", "成功完成课程者将获得 Future Ready 高管 MBA 课程的 CMI Certificate of Recognition。最终证书格式、措辞及签发由 CMI 决定。"],
  ["这是学术 MBA 学位吗？", "不是。这是面向未来商业领导力、由 CMI 颁授并背书的六个月 Executive MBA 专业发展课程，并非 MQA 认证的学术学位或受监管资格。"],
  ["完成课程后会自动成为 Chartered Manager 吗？", "不会。Chartered Manager 属于独立可选的 CMI 路线。资格、评估、会员及费用均由 CMI 决定，并不包含在本课程或已公布费用内。"],
] as const;

export default function CmiRecognitionZhPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "课程详情", path: "/zh/executive-mba" }, { name: "CMI 认可", path: PATH }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">CMI（英国）背书及认可</p>
          <h1><TechnicalText>让实际管理成果获得专业认可。</TechnicalText></h1>
          <p>Future Ready 高管 MBA 帮助资深管理者把一个真实企业课题转化为可执行的行动方案。成功完成课程者将获得 CMI 课程认可证书。</p>
          <div className="chartered-hero-actions"><Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} <span aria-hidden="true">→</span></Link><Link href="/zh/executive-mba" className="btn btn-ghost">查看六个月课程</Link></div>
        </div>
      </header>

      <section className="section chartered-positioning"><div className="wrap">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">认可带来的价值</p><h2 className="sec-h">专业发展证据，而不只是一张出席证书。</h2><p>课程把 CMI 专业认可与学员自身企业情境的应用项目连接起来。</p></div></Reveal>
        <div className="chartered-outcome-grid">
          <Reveal><article><span className="mono">01</span><h3>获认可的课程完成证明</h3><p>CMI Recognition 表示课程已按照 CMI Professional Standard 进行基准评估。成功完成者取得课程的 CMI Certificate of Recognition。</p></article></Reveal>
          <Reveal delay={45}><article><span className="mono">02</span><h3>可说明的专业证据</h3><p>课程证书与应用项目，可作为专业履历及职业沟通中说明管理发展的可信依据。</p></article></Reveal>
          <Reveal delay={90}><article className="chartered-outcome-featured"><span className="mono">03</span><h3>清楚区分下一步</h3><p>Chartered Manager 为独立可选路线。CMI 决定资格、评估、会员及费用；本课程不会承诺或包含该专业身份。</p></article></Reveal>
        </div>
        <p className="fine center mt-s"><a href={CERTIFICATE_POSITIONING.cmiRecognitionSource} target="_blank" rel="noreferrer">阅读 CMI 对 Recognition 的官方说明 <span aria-hidden="true">↗</span></a></p>
      </div></section>

      <section className="section"><div className="wrap chartered-preparation-grid">
        <Reveal><div className="reading-section-head"><p className="mono sec-k">企业与职业价值</p><h2 className="sec-h">带来一个真实决定，并建立更强的下一次决策方式。</h2><p>课程帮助学员更准确地诊断问题、比较选项、说明依据，并带领团队行动。课程不保证晋升、薪资、就业或企业成果。</p></div><Link href="/zh/how-it-works" className="btn btn-ghost">了解课程方法 <span aria-hidden="true">→</span></Link></Reveal>
        <ol className="chartered-preparation-list"><li><span>01</span><div><h3>先诊断，再决定</h3><p>在投入资源前，区分症状、假设及限制。</p></div></li><li><span>02</span><div><h3>清楚说明依据</h3><p>比较选项，并解释为什么一个方向值得支持。</p></div></li><li><span>03</span><div><h3>把判断化为行动</h3><p>根据当前企业情境建立实际行动方案。</p></div></li></ol>
      </div></section>

      <section className="section faq chartered-faq"><div className="wrap maxw-820"><Reveal><p className="mono sec-k">直接回答</p><h2 className="sec-h">在选择前了解清楚。</h2></Reveal><Reveal className="mt-s">{FAQS.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</Reveal></div></section>
      <CtaSection lang="zh" programme="Executive MBA" heading="看看 Future Ready 高管 MBA 是否适合您目前面对的决定。" sub="先获取课程指南，或预约与课程团队进行无义务沟通。" />
    </>
  );
}
