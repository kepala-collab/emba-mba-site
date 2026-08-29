import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/mba-for-sme-owners", {
  title: "面向中小企业主及创办人的Executive MBA",
  description:
    "由 CMI 颁授并背书的Executive MBA，六个月分三个课程完成，专为中小企业主打造。",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "由 CMI 颁授并背书的Executive MBA，六个月分三个课程，为中小企业主与创办人开办。",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba`,
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
  { h: "运作依赖企业主", p: "定价、审批、客户决策、救火处理，样样都还得企业主亲自出手。" },
  { h: "决策容量有限", p: "企业越做越大，要拍板的事情多得远超一个人能应付的极限。" },
  { h: "战略缺乏受保护的时间", p: "紧急的日常事务反复插队，把市场、能力与投资这些大方向一再挤到后面。" },
  { h: "接班安排不明确", p: "职责、决策权与运作经验都还留在个人脑中，没有形成可供交接的文件。" },
  { h: "被动式管理", p: "团队忙着扑灭表面问题，却没去改动催生这些问题的流程与激励机制。" },
];

const FIT = [
  { h: "三个指定周末课程", p: "三个课程按月推进；已公布的开课表会注明每个班次是周五至周六，还是周六至周日。" },
  { h: "您的企业就是应用项目", p: "没有传统论文，也没有考试。学员运用课程框架，为自己的公司量身制定转型方案。" },
  { h: "雇主主导的 HRD Corp 资助", p: HRD_CORP_CLAIM_ZH },
  { h: "马来西亚申请者的奖学金资格", p: `奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经 ${FACTS.scholarshipProvider} 评估与书面批准；具体金额与应付费用均个别书面确认，分期方案见学费页面。` },
];

export default function MbaForSmeOwnersZhPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro — name the real pain */}
      <section className="section geo-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">面向中小企业主及创办人</span>
          </div>
          <Reveal>
            <h1 className="sec-h">
              搭建运作系统，摆脱企业对<span className="acc">企业主本人的依赖</span>。
            </h1>
          </Reveal>
          <p className="sec-sub">
            Future Ready Executive MBA 帮中小企业主找出——决策、客户资源与运作控制权
            还牢牢集中在一个人身上的那些环节，再把系统、战略与领导力框架，
            用到授权、育才、接班与增长等课题上。
          </p>
          <p className="mono sec-k mt-s">
            六个月 · 三个指定课程周末 · 由 CMI 颁授并背书
          </p>
          <p className="sec-sub mt-s">
            查看完整的{" "}
            <Link href="/zh/executive-mba" className="acc">Executive MBA 课程</Link>，
            或探索{" "}
            <Link href="/zh/curriculum" className="acc">以思维为核心的课程大纲</Link>。
          </p>
        </div>
      </section>

      {/* 2 · Sound familiar? */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">运作指标</span>
          </div>
          <Reveal>
            <h2 className="sec-h">企业主依赖，通常藏在这些环节里。</h2>
          </Reveal>
          <p className="sec-sub">
            对照这些迹象，判断您的应用项目该先攻克哪一处运作瓶颈。
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

      {/* 3 · What changes */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">会有什么改变</span>
          </div>
          <Reveal>
            <h2 className="sec-h">把反复出现的决策，交给清晰的运作系统来承接。</h2>
          </Reveal>
          <p className="sec-sub">
            课程聚焦于企业主身边的这套运作系统：决策权、流程、信息流转、
            领导力与衡量指标。它锤炼的是管理能力；至于增长与回报，
            则取决于此后的决策与执行。
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">看见整个棋局</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  凭借系统思维与第一性原理，在投入资源之前，
                  就把一个决策对客户、人员、现金、产能与执行的连锁影响看清楚。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">建立系统，而不是依赖</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  把只装在企业主脑子里的经验，沉淀成其他管理者也能照着用的
                  流程文件、决策标准与升级规则。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">以框架为依据授权</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  借助情境领导力与引导框架，交出去的是成果、决策权限、
                  支持方式与检视节点，而不只是一件件任务。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">为扩张或交接做准备</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  经过结构化的战略分析，您会对企业未来走向形成一份
                  站得住脚的判断——这正是制定扩张、接班或退出方案的底气。
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

      {/* 4 · Why it fits owners */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">为何适合企业主</span>
          </div>
          <Reveal>
            <h2 className="sec-h">一种让您人在企业、照样进修的课程安排。</h2>
          </Reveal>
          <p className="sec-sub">
            六个月课程集中在指定周末进行，企业应用项目就以学员自己的公司为对象。
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
            这门专业课程由 CMI 颁授并背书，并非 MQA 认证的学术学位。
            <Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>
            ，再挑选开课班次。
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">先想清楚，这门课程该帮您解开哪一种企业主依赖。</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            与课程团队聊聊您的运作课题，一起确认应用项目、课程安排与同学背景
            是否契合您的目标。
          </p>
          <p className="mt-s">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="聊聊除了您本人，企业还需要哪些系统撑起来。" />
    </>
  );
}
