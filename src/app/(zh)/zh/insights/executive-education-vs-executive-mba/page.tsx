import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";

const PUBLISHED = "2026-08-21";

export const metadata = withSeo("/zh/insights/executive-education-vs-executive-mba", {
  title: "高管教育 vs Executive MBA｜马来西亚",
  description:
    "从学术地位、资格性质、修读时间、评估方式、课程安排到工作应用，逐项对比高管教育课程与 Executive MBA 课程。",
  openGraph: {
    type: "article",
    publishedTime: `${PUBLISHED}T16:00:00+08:00`,
    modifiedTime: `${PUBLISHED}T16:00:00+08:00`,
  },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "高管教育 vs Executive MBA：在职领导者应比较的事项",
  mainEntityOfPage: `${SITE.url}/zh/insights/executive-education-vs-executive-mba`,
  image: `${SITE.url}/opengraph-image`,
  datePublished: `${PUBLISHED}T16:00:00+08:00`,
  dateModified: `${PUBLISHED}T16:00:00+08:00`,
  inLanguage: "zh-Hans-MY",
  description: metadata.description,
  author: { "@type": "Organization", "@id": EDITORIAL_TEAM_ID, name: "Asian Business Consulting Editorial Team" },
  publisher: { "@type": "Organization", "@id": PROVIDER_ID, name: SITE.provider },
  articleSection: "Programme decision guides",
  about: ["高管教育", "Executive MBA", "专业发展", "在职专业人士"],
};

const COMPARISON = [
  ["核心目的", "有的放矢地提升领导力、管理力或某项专业能力。", "看提供方而定。学术型 EMBA 授予学位；定位为专业课程的项目，则必须把自身资格性质讲清楚。"],
  ["修读时间", "有的做成短期或模块化形式；具体时间表由各提供方自行公布。", `本课程为期 ${FACTS.durationLong}，六个月内分三个课程修完，共六个培训日。`],
  ["评估方式", "因提供方而异：工作坊、项目、案例分析或结业证书。", "本课程以导师辅导加企业应用项目为评估，不设传统考试或论文。"],
  ["学术地位", "有的属于非学位的专业发展课程；提供方声明的具体地位须自行核实。", "这门 Future Ready Executive MBA 并非 MQA 认证的学术学位，也非受监管资格。"],
  ["工作应用", "着眼于当下就能用在本职工作上的能力。", "学员把课程框架直接套用到自家企业的真实课题上。"],
] as const;

export default function ExecutiveEducationVsExecutiveMbaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "首页", path: "/zh" },
        { name: "洞察", path: "/zh/insights" },
        { name: "高管教育 vs Executive MBA", path: "/zh/insights/executive-education-vs-executive-mba" },
      ]} />
      <JsonLd data={articleSchema} />

      <article>
        <section className="section geo-section">
          <div className="wrap maxw-820">
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">决策指南 · 马来西亚</span></div>
              <h1 className="sec-h">高管教育 vs Executive MBA：别只比名称，先比资格性质。</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                Asian Business Consulting 编辑团队 · <time dateTime={PUBLISHED}>发布并审阅于 2026 年 8 月 21 日</time> ·{" "}
                <Link href="/zh/about#editorial-standards">编辑标准（英文）</Link>
              </p>
              <p className="sec-sub">
                高管教育泛指面向在职人士的专业学习；Executive MBA 则有两种面孔——
                一种是学术学位，一种是把资格性质讲明白的专业课程。
                所以，真正靠谱的对比从来不看名头，而是逐项核实：
                学术地位、资格性质、评估方式、课程安排、工作应用，以及完整费用。
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>一句话结论</h2>
            <p>
              如果您下一步要的是一纸受认可的学术学位，就选学术型 MBA 或 EMBA；
              如果您要的是能配合工作节奏、专注于专业发展的课程，那就考虑高管教育课程。
              选定之后，务必核实它到底授予什么——不同提供方的资格与学术地位，差别很大。
            </p>
            <p>
              <Link href="/zh/executive-mba">面向未来商业领导力的 Executive MBA</Link>{" "}
              由 CMI 颁授并背书，是一门为期六个月的专业发展课程。
              顺利结业的学员，将获得本课程的 CMI Certificate of Recognition。
              它并非 MQA 认证的学术学位，也非受监管资格。
            </p>

            <h2>公开事实逐项对比</h2>
            <ScrollableTableRegion kind="comparison" label="高管教育与 Executive MBA 对比" hint="向右滑动查看所有列 →">
              <table className="cmp">
                <thead><tr><th>比较项目</th><th>高管教育</th><th>本 Future Ready Executive MBA</th></tr></thead>
                <tbody>
                  {COMPARISON.map(([decision, executiveEducation, programme]) => (
                    <tr key={decision}><th scope="row">{decision}</th><td>{executiveEducation}</td><td className="us">{programme}</td></tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>

            <h2>该向每家提供方问清的五个问题</h2>
            <ol>
              <li><strong>我到底能拿到什么？</strong> 请对方说清完整的资格名称，并出示证书样本供您核对。</li>
              <li><strong>这算学术学位吗？</strong> 如果学术资格对您很重要，请核实颁授院校，以及它适用的认证情况。</li>
              <li><strong>学习成果怎么评？</strong> 把考试、论文、作业、应用项目和出勤要求逐项比一比。</li>
              <li><strong>能边工作边读完吗？</strong> 逐一确认每个上课日期、授课形式、项目要求，以及缺课后的补课安排。</li>
              <li><strong>总投入是多少？</strong> 把公开费用、资助条件、交通、离岗时间，连同任何单独收取的会员费或评估费，一并算进去比较。</li>
            </ol>

            <h2>本课程的定位</h2>
            <p>
              本课程面向企业主、董事、总经理与高级经理——他们想围绕手头的企业课题，
              把领导力发展做得更成体系。六个月里，课程把小组工作坊、导师辅导、战略决策框架
              与企业应用项目串在一起；整个学习期间，学员照常留在原有岗位上。
            </p>
            <p>
              Chartered Manager 是一条独立、可选的 CMI 路线，其资格、评估、会员与费用均由 CMI 决定，
              不含在本课程或已公布费用之内。报名前，建议您先看看{" "}
              <Link href="/zh/chartered-manager-malaysia">CMI 路径说明</Link>、
              <Link href="/zh/fees">完整费用及奖学金条款</Link>，以及{" "}
              <Link href="/zh/intakes">已公布的开课日期</Link>。
            </p>

            <h2>参考资料来源</h2>
            <ul>
              <li><a href="https://www.edx.org/resources/what-is-the-difference-between-a-professional-certificate-and-an-executive-education" target="_blank" rel="noopener noreferrer">edX：专业证书与高管教育的区别（英文）</a></li>
              <li><a href="https://business.rice.edu/executive-education" target="_blank" rel="noopener noreferrer">Rice Business 高管教育（英文）</a></li>
            </ul>
            <p><Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link></p>
          </div>
        </section>
      </article>

      <CtaSection lang="zh" programme="Executive MBA" heading="先把公开事实比清楚，再做决定。" />
    </>
  );
}
