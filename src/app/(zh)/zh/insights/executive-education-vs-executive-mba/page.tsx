import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH } from "@/lib/content-zh";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";

const PUBLISHED = "2026-08-21";

const COMPARISON_SCOPE_ZH =
  "本表用作参照的学术 MBA，指以学术模块、作业或考试及论文为主、为期 18–24 个月的课程，并不代表所有 MBA 课程。";

export const metadata = withSeo("/zh/insights/executive-education-vs-executive-mba", {
  title: "高管教育 vs Executive MBA｜马来西亚",
  description:
    "高管教育与本 Executive MBA 课程，各自为不同的任务而设。请先比较学术地位、资格性质、评估方式、课程安排与完整费用，再作决定。",
  openGraph: {
    type: "article",
    publishedTime: `${PUBLISHED}T16:00:00+08:00`,
    modifiedTime: `${PUBLISHED}T16:00:00+08:00`,
  },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "高管教育 vs Executive MBA：各自解决什么任务？",
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
  ["为何而设", "培养一项专业能力，按提供方设定的时间表进行。", `把您自己责任范围内的一项真实业务课题，从界定问题带到经导师审阅的书面行动方案，为期 ${FACTS.durationMonths} 个月。`],
  ["修读时间", "时间表由提供方自行设定；形式与长短因课程而异。", `本课程为期 ${FACTS.durationMonths} 个月，分 ${FACTS.liveSessions} 次导师带领的研习课修完，共 ${FACTS.trainingDays} 个培训日。`],
  ["评估方式", "因提供方而异：工作坊、项目、案例分析或结业证书。", "本课程以导师辅导加企业应用项目为评估，不设传统考试或论文。"],
  ["学术地位", "或属学术学位，或不属；具体地位由提供方自行声明。", "这门 Future Ready Executive MBA 并非 MQA 认证的学术学位，也非受监管资格。"],
  ["工作应用", "着眼于当下就能用在本职工作上的一项能力。", "学员把课程框架直接套用到自家企业内的真实课题上。"],
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
              <h1 className="sec-h">高管教育还是 Executive MBA，按任务选</h1>
              <p className="mono fine" style={{ margin: "16px 0" }}>
                Asian Business Consulting 编辑团队 · <time dateTime={PUBLISHED}>发布并审阅于 2026 年 8 月 21 日</time> ·{" "}
                <Link href="/zh/about#editorial-standards">编辑标准（英文）</Link>
              </p>
              <p className="sec-sub">
                这两个名称常被摆在一起说，但各自要完成的任务并不相同。
                高管教育培养一项专业能力，按提供方设定的时间表进行；
                Executive MBA 则有两种说法：一种是学术学位，另一种——在讲清楚的前提下——是一门有自己资格性质的专业课程。
                比较其他之前，先核实这门课程为何而设，再逐项核实学术地位、资格性质、评估方式、课程安排与完整费用。
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap maxw-820 prose">
            <h2>一句话结论</h2>
            <p>
              如果您下一步的任务受监管，或需要 MQA 认证的学术学位，学术型 MBA 或 EMBA 就是为此而设的路线；
              如果您需要的是配合工作节奏、专注于某项能力的发展，高管教育（包括定位清楚的专业型 Executive MBA）才是为此而设的路线。
              先弄清课程要解决哪个任务，再核实它具体授予什么——不同提供方的资格与学术地位，差别很大。
            </p>
            <p>
              <Link href="/zh/executive-mba">面向未来商业领导力的 Executive MBA</Link>{" "}
              由 CMI 颁发并认可，是一门为期 {FACTS.durationMonths} 个月的专业发展课程；
              顺利完成课程的学员，将获颁本课程的 CMI 认可证书（CMI Certificate of Recognition）。
              {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
              此课程并非 MQA 认证的学术学位，也非受监管资格。
            </p>

            <h2>公开事实逐项对比</h2>
            <p className="mono fine">{COMPARISON_SCOPE_ZH}</p>
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
              <li><strong>学习成果怎么评？</strong> 把考试、论文、作业、企业应用项目和出勤要求逐项比一比。</li>
              <li><strong>能边工作边读完吗？</strong> 逐一确认每个上课日期、授课形式、项目要求，以及缺课后的补课安排。</li>
              <li><strong>总投入是多少？</strong> 把公开费用、资助条件、交通、请假时间，连同任何单独收取的会员费或评估费，一并算进去比较。</li>
            </ol>

            <h2>本课程的定位</h2>
            <p>
              本课程面向企业主、董事、总经理与高级经理——他们身上正压着一项企业课题，
              想把领导力发展做得更成体系。{FACTS.durationMonths} 个月里，课程把小组工作坊、导师辅导、战略决策框架
              与企业应用项目串在一起；整个学习期间，学员照常留在原有岗位上。
            </p>
            <p>
              Chartered Manager 是一条独立、可选的 CMI 路线，由 CMI 决定其资格、评估、会员与费用，
              不含在本课程或已公布费用之内。预约一次课程咨询，即可以书面确认现行费用、开课日期与 CMI 认可事项。
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

      <CtaSection lang="zh" programme="Executive MBA" heading="聊聊下一步要解决的任务" />
    </>
  );
}
