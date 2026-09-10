import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import {
  CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH,
  ENQUIRY_COMMITMENT_ZH,
  HRD_CORP_CLAIM_LABEL_ZH,
  HRD_CORP_CLAIM_ZH,
} from "@/lib/content-zh";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/mba-for-sme-owners", {
  title: "面向中小企业主及创办人的 Executive MBA",
  description: `从脑中决策，到书面决策：企业应用项目在 ${FACTS.durationMonths} 个月内，把一项运作课题带到经导师评阅的书面方案。由 CMI 颁发并认可。`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/zh/mba-for-sme-owners#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    `企业主把定价、接班或客户依赖等运作课题，在 ${FACTS.durationMonths} 个月、${FACTS.liveSessions} 次导师带领的研习课内，从问题推进到附带责任人与衡量指标、经导师评阅的书面方案。由 CMI 颁发并认可。`,
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/zh/mba-for-sme-owners`,
  inLanguage: "zh-Hans-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/zh/mba-for-sme-owners#blended-course-instance`,
    url: `${SITE.url}/zh/mba-for-sme-owners`,
    courseMode: "blended",
    timeRequired: "P6M",
  },
};

const CHALLENGES = [
  { h: "定价与审批", p: "定价判断、审批与客户决策，样样仍要经您亲自拍板。" },
  { h: "决策数量", p: "企业越做越大，要处理的决策比一个人能应付的更多。" },
  { h: "战略缺少专属时间", p: "日常运作占去了市场、能力与投资这些决策原本需要的时间。" },
  { h: "接班尚未成文", p: "职责、决策权与运作经验还没写成文件，交不到别人手上。" },
  { h: "同一个问题，一再处理", p: "团队处理的是表面症状，催生问题的流程与激励机制未曾改动。" },
];

const FIT = [
  { h: `${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次指定研习课完成`, p: "已公布的开课表会注明每一届是周五至周六，还是周六至周日。" },
  { h: "您自己的企业就是企业应用项目", p: "企业应用项目是一份交由导师评阅的书面方案，以您自己的企业为对象——没有传统论文，也没有考试。" },
  { h: "雇主主导的 HRD Corp 资助", p: HRD_CORP_CLAIM_ZH },
  { h: "马来西亚申请者的奖学金资格", p: `奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经 ${FACTS.scholarshipProvider} 评估与书面批准，具体金额与应付费用均个别书面确认。奖学金并非自动授予；分期方案见学费页面。` },
];

export default function MbaForSmeOwnersZhPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro — 说明经验的改变 */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">面向中小企业主及创办人</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              从<span className="acc">脑中决策</span>，到书面决策
            </h1>
          </Reveal>
          <p className="sec-sub">
            企业主把客户认知、定价判断与运作控制权都留在自己脑中。{FACTS.durationMonths} 个月内，
            企业应用项目把一项运作课题——定价、接班或客户依赖——从问题推进到一份附带责任人与
            衡量指标、经导师评阅的书面方案，用以锤炼管理能力；增长与回报，取决于此后的决策与执行。
          </p>
          <p className="sec-sub mt-s">
            {FACTS.trainingDays} 个培训日，分 {FACTS.liveSessions} 次指定研习课完成，
            辅以一对一辅导与围绕您自身责任课题的企业应用项目；课程框架与工作模板由您留存。
          </p>
          <p className="sec-sub mt-s">
            Executive MBA on Future Ready Business Leadership 由 CMI 颁发并认可。成功完成课程的学员
            获颁 CMI 认可证书；这并非马来西亚学术资格鉴定机构（MQA）认证的学术学位，也不是受监管
            的正规资格。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
          </p>
          <p className="mono sec-k mt-s">
            标准费用 {FACTS.priceStd} · {HRD_CORP_CLAIM_LABEL_ZH}。奖学金名额有限，仅择优授予符合资格
            的马来西亚申请者，须经 {FACTS.scholarshipProvider} 评估与书面批准；并非自动授予。
            {ENQUIRY_COMMITMENT_ZH}
          </p>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
              <Link href="/zh/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.zh.company}</Link>
            </div>
          </Reveal>
          <p className="sec-sub mt-s">
            查看完整的{" "}
            <Link href="/zh/executive-mba" className="acc">Executive MBA 课程</Link>，
            或探索{" "}
            <Link href="/zh/curriculum" className="acc">以思维为核心的课程大纲</Link>。
          </p>
        </div>
      </section>

      {/* 2 · 企业依赖您的地方 */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">运作指标</span>
          </div>
          <Reveal>
            <h2 className="sec-h">企业还依赖企业主拍板的地方。</h2>
          </Reveal>
          <p className="sec-sub">
            对照这些运作情况，判断企业应用项目该先处理哪一项——这不是对经营方式的评判。
          </p>
          <div className="mt-m grid-forces">
            {CHALLENGES.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · 会有什么改变，依 5S 顺序 */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">会有什么改变</span>
          </div>
          <Reveal>
            <h2 className="sec-h">一项运作课题，变成一份书面方案。</h2>
          </Reveal>
          <p className="sec-sub">
            企业应用项目处理的是您身边的运作系统：决策权、流程、信息流转、
            领导力与衡量指标，用以锤炼管理能力；增长与回报，
            则取决于此后的决策与执行。
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">您不在场，企业照常运转</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  决策标准与升级规则形成书面文件，您在上课期间，运作也不中断。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">接班有一份书面方案</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  职责、决策权与运作经验，从您的记忆转化为可供导师评阅的文件。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">团队接手的是决策，不只是任务</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  情境领导力与引导框架，把成果、决策权限、支持方式与检视节点
                  交到承担者手上。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">培养其他领导者，不只是分派任务</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  这份方案是为依赖您决策的人而写：承担方案的团队、方案所服务的
                  客户，以及日后接手企业的人。
                </p>
              </div>
            </Reveal>
          </div>
          <p className="fine mt-s">
            这是一门锤炼能力的课程，而非增长或回报的保证。
            了解这套方法在{" "}
            <Link href="/zh/curriculum" className="acc">课程大纲</Link>{" "}
            中如何运作。
          </p>
        </div>
      </section>

      {/* 4 · 为何适合企业主 */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">为何适合企业主</span>
          </div>
          <Reveal>
            <h2 className="sec-h">一种让企业主留任企业、照常进修的安排。</h2>
          </Reveal>
          <p className="sec-sub">
            {FACTS.durationMonths} 个月内，您留在原本的岗位上，企业应用项目就以您自己的企业为对象。
            资助与付款方式另行说明。
          </p>
          <div className="mt-m grid-forces">
            {FIT.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            这门专业课程由 CMI 颁发并认可。成功完成课程的学员获颁 CMI 认可证书；这并非 MQA 认证的
            学术学位。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}{" "}
            <Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>
            ，再挑选开课日期。
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">先想清楚，企业应用项目该处理哪一项运作课题。</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            您要搭建的方案，是为依赖您决策的人而做。与课程团队聊聊您正在权衡的课题，
            一起确认企业应用项目、课程安排与同学背景是否契合。{ENQUIRY_COMMITMENT_ZH}
          </p>
          <p className="mt-s">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="针对您正在权衡的运作课题，索取相关事实。" />
    </>
  );
}
