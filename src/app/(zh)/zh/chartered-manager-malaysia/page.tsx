import Link from "next/link";
import ArticleAttribution from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import CmiProgressionChart from "@/components/site/CmiProgressionChart";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import TechnicalText from "@/components/site/TechnicalText";
import { CMI_PATHWAY, CTA_LABELS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, editorialTeamSchema, withSeo } from "@/lib/seo";

const PATH = "/zh/chartered-manager-malaysia";

export const metadata = withSeo(PATH, {
  title: "马来西亚 Chartered Manager：CMgr 路线",
  description: "了解英国 CMI Chartered Manager、fCMgr 与 CMgr MCMI 的区别、申请条件、独立评估费用及 CMI Malaysia 专业网络。",
  openGraph: { type: "article" },
});

const ROUTES = [
  {
    name: "Full Assessment",
    audience: "以学历及管理经验申请的资深管理者",
    eligibility: "管理、商业或领导相关学位加三年管理经验；或在没有管理相关资格的情况下具至少五年管理经验。",
    assessment: "提交说明管理历程与成果的书面申请，并与 CMI 独立评审员进行线上专业讨论。",
    price: "£750 + VAT",
  },
  {
    name: "CMI Fast Track",
    audience: "在过去五年内完成 CMI 指定资格的管理者",
    eligibility: "CMI 指定的 Level 5 或 6 Diploma／Extended Diploma，或 Level 7 或 8 Certificate／Diploma／Extended Diploma，加至少三年管理经验。",
    assessment: "CMI 会考虑申请人符合条件的既有 CMI 学习，采用精简书面评估。",
    price: "£162 + VAT",
  },
  {
    name: "Apprenticeship route",
    audience: "完成 CMI 指定管理 apprenticeship 标准的学员",
    eligibility: "CMI 公布的路线与指定 End Point Assessment 及相关管理经验相连。",
    assessment: "完成相关 apprenticeship 要求后，由 CMI 决定适用 Foundation 或完整 Chartered Manager 身份。",
    price: "适用 CMI 该路线的会员及行政条款",
  },
] as const;

const FAQS = [
  ["什么是 Chartered Manager？", "Chartered Manager 是仅由英国特许管理协会（CMI）授予的专业身份。CMI 将其称为管理与领导领域的最高专业荣誉。它并非学术学位，申请人必须符合 CMI 条件并通过相应评估。"],
  ["完成 Future Ready Executive MBA 后会自动取得 CMgr MCMI 吗？", "不会。成功完成课程后可取得 CMI Certificate of Recognition；根据 CMI 公布的 CMI Recognised 方案，学员也可取得 Foundation Chartered Manager 身份。CMgr MCMI 必须另行通过 CMI 评估；资格、评估、会员与费用均由 CMI 控制。"],
  ["本课程是否自动符合 CMI Fast Track？", "不是。本课程属于 CMI Recognised professional development programme，并非 CMI qualification。Fast Track 要求申请人完成 CMI 明确列出的资格并具指定管理经验。每位学员适用的路线须由 CMI 确认。"],
  ["Chartered Manager 评估包括什么？", "CMI 说明评估以其 Professional Standard 为基础。Full Assessment 包括书面申请及线上专业讨论；Fast Track 则根据符合条件的既有 CMI 学习采用精简书面评估。"],
  ["马来西亚是否有 CMI 专业网络？", "有。CMI Malaysia 为会员提供专业发展、思想领导及跨专业组织、教育机构、政府机构、行业协会与其他伙伴的联系。CMI 也说明非会员可参加其活动。"],
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}${PATH}#article`,
    headline: "马来西亚 Chartered Manager：CMgr 路线、条件与课程准备",
    description: metadata.description,
    url: `${SITE.url}${PATH}`,
    inLanguage: "zh-Hans-MY",
    datePublished: "2026-08-15",
    dateModified: "2026-08-15",
    author: { "@id": EDITORIAL_TEAM_ID },
    publisher: { "@id": EDITORIAL_TEAM_ID },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
] as const;

export default function CharteredManagerMalaysiaZhPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "课程详情", path: "/zh/executive-mba" }, { name: "Chartered Manager 路线", path: PATH }]} />
      {schemas.map((schema) => <JsonLd key={schema["@type"]} data={schema} />)}
      <JsonLd data={{ "@context": "https://schema.org", ...editorialTeamSchema() }} />

      <header className="resource-hero chartered-hero geo-section">
        <div className="wrap maxw-820">
          <p className="mono sec-k">CMI 专业认可 · 马来西亚</p>
          <h1><TechnicalText>马来西亚 Chartered Manager：专业身份、申请条件与课程准备。</TechnicalText></h1>
          <p>Chartered Manager（CMgr）仅由英国特许管理协会授予。Future Ready Executive MBA 为符合资格的学员提供三个月独立评估准备，但不会预先承诺评估结果。</p>
          <div className="chartered-hero-actions">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} <span aria-hidden="true">→</span></Link>
            <a href={CMI_PATHWAY.routes} className="btn btn-ghost" target="_blank" rel="noreferrer">查看 CMI 当前路线 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </header>

      <>
        <section className="section chartered-positioning">
          <div className="wrap">
            <Reveal><div className="reading-section-head"><p className="mono sec-k">三个不同结果</p><h2 className="sec-h">先完成获 CMI 认可的课程，再按资格申请专业评估。</h2><p>清楚区分课程认可、Foundation 身份及完整 Chartered 身份，才能准确判断本课程的价值。</p></div></Reveal>
            <div className="chartered-outcome-grid">
              <Reveal><article><span className="mono">01</span><h3><TechnicalText>CMI Recognised programme</TechnicalText></h3><p>CMI Recognition 表示课程已按照 CMI Professional Standard 进行基准评估；它并非 CMI qualification 或学术学位。</p><a href={CMI_PATHWAY.recognition} target="_blank" rel="noreferrer">核实 CMI Recognition <span aria-hidden="true">↗</span></a></article></Reveal>
              <Reveal delay={50}><article><span className="mono">02</span><h3><TechnicalText>证书与 fCMgr</TechnicalText></h3><p>成功完成课程者取得 CMI Certificate of Recognition。CMI 公布的 Recognised 方案也说明，学员完成后取得 Foundation Chartered Manager（fCMgr）身份。</p><p className="fine">身份启用、会员续期及继续使用专业衔称均由 CMI 控制。</p></article></Reveal>
              <Reveal delay={100}><article className="chartered-outcome-featured"><span className="mono">03</span><h3><TechnicalText>Chartered Manager — CMgr MCMI</TechnicalText></h3><p>CMI 确认申请资格并评估通过后，才会授予完整 Chartered 身份。完成本课程并不会自动取得 CMgr MCMI。</p><a href={CMI_PATHWAY.charteredManager} target="_blank" rel="noreferrer">阅读 CMI 官方定义 <span aria-hidden="true">↗</span></a></article></Reveal>
            </div>
          </div>
        </section>

        <CmiProgressionChart lang="zh" />

        <section className="section chartered-routes-section">
          <div className="wrap">
            <Reveal><div className="reading-section-head"><p className="mono sec-k">CMI 公布的三条路线</p><h2 className="sec-h">适用路线取决于资格及管理经验。</h2><p>以下条件与费用已于 {CMI_PATHWAY.reviewedAt} 对照 CMI 网站。若要求或费用更改，以 CMI 当前页面为准。</p></div></Reveal>
            <div className="chartered-route-grid">
              {ROUTES.map((route, index) => (
                <Reveal key={route.name} delay={index * 45}><article className="chartered-route-card"><div className="chartered-route-head"><span className="mono">路线 {index + 1}</span><strong>{route.price}</strong></div><h3><TechnicalText>{route.name}</TechnicalText></h3><p className="chartered-route-best">{route.audience}</p><dl><div><dt>公开申请条件</dt><dd>{route.eligibility}</dd></div><div><dt>CMI 评估内容</dt><dd>{route.assessment}</dd></div></dl></article></Reveal>
              ))}
            </div>
            <Reveal><aside className="chartered-route-note"><strong>本课程不会自动产生 Fast Track 资格。</strong><p>CMI 以指定 CMI qualifications 定义 Fast Track。本课程属于 CMI Recognised professional development programme，并非 CMI qualification。课程团队可协助整理资料，但适用路线由 CMI 决定。</p></aside></Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap chartered-preparation-grid">
            <Reveal><div className="reading-section-head"><p className="mono sec-k">独立专业路线</p><h2 className="sec-h">Chartered Manager 不包含在三个月课程内。</h2><p>符合条件的学员可另行向 CMI 了解适用路线。CMI 独立决定资格、评估、会员及费用。</p></div><Link href="/zh/executive-mba" className="btn btn-ghost">查看三个月课程 <span aria-hidden="true">→</span></Link></Reveal>
            <ol className="chartered-preparation-list">
              <li><span>01</span><div><h3>向 CMI 确认适用路线</h3><p>先对照学历、管理经验及 CMI 当前条件，再由 CMI 确认申请路线。</p></div></li>
              <li><span>02</span><div><h3>选择专业证据</h3><p>找出能说明领导决策、组织成果及持续专业发展的实际案例。</p></div></li>
              <li><span>03</span><div><h3>组织书面申请</h3><p>以情境、行动、证据及成果说明管理能力，而不只依赖职位名称。</p></div></li>
              <li><span>04</span><div><h3>准备专业讨论</h3><p>练习说明证据背后的判断过程；最终结果由 CMI 评审员决定。</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section chartered-network-section">
          <div className="wrap chartered-network-grid">
            <Reveal><article><p className="mono sec-k">马来西亚专业社群</p><h2>CMI Malaysia</h2><p>CMI Malaysia 为会员提供专业发展、思想领导及跨专业组织、教育机构、政府机构、行业协会与其他伙伴的联系。CMI 表明非会员亦可参加其活动。</p><a href={CMI_PATHWAY.malaysia} target="_blank" rel="noreferrer">探索 CMI Malaysia <span aria-hidden="true">↗</span></a></article></Reveal>
            <Reveal delay={60}><article><p className="mono sec-k">国际网络</p><h2>遍布全球的管理社群</h2><p>CMI 表示其会员来自超过 170 个国家，并提供国际认可、资源、活动及专业网络。马来西亚是其公布的国际区域网络之一。</p><a href={CMI_PATHWAY.international} target="_blank" rel="noreferrer">查看 CMI 国际网络 <span aria-hidden="true">↗</span></a></article></Reveal>
          </div>
        </section>

        <section className="section faq chartered-faq">
          <div className="wrap maxw-820">
            <Reveal><p className="mono sec-k">直接回答</p><h2 className="sec-h">报名之前应明确的 Chartered Manager 问题。</h2></Reveal>
            <Reveal className="mt-s">{FAQS.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</Reveal>
          </div>
        </section>

        <section className="section chartered-sources-section">
          <div className="wrap maxw-820 prose">
            <ArticleAttribution lang="zh" />
            <h2>官方资料与范围</h2>
            <p>本页根据 CMI 公开资料，为马来西亚课程考虑者作出解释；本页不会决定申请资格，也不会取代 CMI 当前条款。</p>
            <ul>
              <li><a href={CMI_PATHWAY.charteredManager} target="_blank" rel="noreferrer">CMI：Chartered Manager</a></li>
              <li><a href={CMI_PATHWAY.routes} target="_blank" rel="noreferrer">CMI：Chartered Manager 申请路线</a></li>
              <li><a href={CMI_PATHWAY.recognition} target="_blank" rel="noreferrer">CMI：Recognised programmes</a></li>
              <li><a href={CMI_PATHWAY.malaysia} target="_blank" rel="noreferrer">CMI Malaysia 区域网络</a></li>
              <li><a href={CMI_PATHWAY.international} target="_blank" rel="noreferrer">CMI 国际网络</a></li>
            </ul>
          </div>
        </section>
      </>

      <CtaSection programme="Executive MBA" heading="讨论课程与 Chartered Manager 准备阶段是否适合您。" sub="预约简短沟通，说明您的职位、经验及课程需要。课程团队可以解释 CMI 公布的路线，但不会预先承诺 CMI 评估结果。" />
    </>
  );
}
