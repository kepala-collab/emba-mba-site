import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/mba-for-sme-owners", {
  title: "面向中小企业主及创办人的高管 MBA",
  description:
    "面向未来商业领导力的高管 MBA 由 CMI 颁授并背书。课程在六个月内分三个课程完成，专为中小企业主设计。",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "面向未来商业领导力的高管 MBA 由 CMI 颁授并背书，在六个月内分三个课程为中小企业主及创办人开办。",
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
  { h: "运作依赖企业主", p: "定价、审批、客户决定及问题处理，仍然要靠企业主本人。" },
  { h: "决策容量有限", p: "企业增长带来的决定数量，增加得比一个人所能处理的速度更快。" },
  { h: "战略缺乏受保护的时间", p: "紧急的运作事务一再抢先于市场、能力及投资决定之前。" },
  { h: "接班安排不明确", p: "角色、决策权及运作知识，尚未有足够文件化的记录以供交接。" },
  { h: "被动式管理", p: "团队处理紧急表象问题，却没有改变产生这些问题的流程或激励机制。" },
];

const FIT = [
  { h: "三个指定周末课程", p: "三个课程按月进行；已公布的开课时间表列明每个班次是星期五至星期六，还是星期六至星期日。" },
  { h: "您的企业就是应用项目", p: "没有传统的论文或考试。学员用课程框架，为自己的组织制定转型方案。" },
  { h: "雇主主导的 HRD Corp 资助", p: HRD_CORP_CLAIM_ZH },
  { h: "马来西亚申请者的奖学金资格", p: `符合资格的马来西亚申请者经评估及书面批准后，可获 ${FACTS.scholarshipAmount} ${FACTS.scholarshipProvider} 奖学金；获批学员实付 ${FACTS.priceAfterScholarship}，分期方案列于学费页面。` },
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
              建立能降低<span className="acc">企业主依赖</span>的运作系统。
            </h1>
          </Reveal>
          <p className="sec-sub">
            Future Ready 高管 MBA 帮助中小企业主审视决定、客户知识及运作控制权
            仍然集中在一个人身上的环节。课程把系统、战略及领导力框架，
            应用到授权、能力建设、接班及增长等课题上。
          </p>
          <p className="mono sec-k mt-s">
            六个月 · 三个指定课程周末 · 由 CMI 颁授并背书
          </p>
          <p className="sec-sub mt-s">
            查看完整的{" "}
            <Link href="/zh/executive-mba" className="acc">高管 MBA 课程</Link>，
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
            <h2 className="sec-h">企业主依赖会在企业哪些环节浮现。</h2>
          </Reveal>
          <p className="sec-sub">
            用这些指标，判断您的应用项目应该处理哪一个运作限制。
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
            <h2 className="sec-h">把反复出现的决定，转移到明确的运作系统之中。</h2>
          </Reveal>
          <p className="sec-sub">
            课程聚焦于围绕企业主的运作系统：决策权、流程、信息流动、
            领导能力及衡量指标。它培养的是管理能力；增长与回报取决于
            后续的决定与执行方式。
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">看见整个棋局</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  系统思维与第一性原理思维，能在投入资源之前，
                  追踪一个决定对客户、人员、现金、产能及执行的影响。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">建立系统，而不是依赖</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  把企业主掌握的知识，转化为其他领导者也能使用的
                  文件化流程、决策标准及升级规则。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">以框架为依据授权</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  运用情境领导力及引导框架，分配的是成果、决策权限、
                  支持方式及检视节点——而不仅仅是任务。
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card">
                <h3 className="mono sec-k">为扩张或交接做准备</h3>
                <p className="sec-sub" style={{ marginTop: 10 }}>
                  经过结构化的战略分析，能让您对企业未来的方向有一份
                  站得住脚的判断——这是制定明确扩张、接班或退出方案的基础。
                </p>
              </div>
            </Reveal>
          </div>
          <p className="fine mt-s">
            这是一门培养能力的课程，不是增长或回报的保证。
            了解方法在{" "}
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
            <h2 className="sec-h">一种让企业主能够留在企业中的课程安排。</h2>
          </Reveal>
          <p className="sec-sub">
            六个月课程采用指定周末课程，企业应用项目以学员自己的组织为对象。
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
            ，再选择开课班次。
          </p>
        </div>
      </section>

      {/* 5 · CTA nudge */}
      <section className="section center">
        <div className="wrap">
          <Reveal>
            <h2 className="sec-h">确定课程应该处理哪一种企业主依赖问题。</h2>
          </Reveal>
          <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
            与课程团队讨论您的运作课题，并确认应用项目、课程安排及学员背景
            是否符合您的目标。
          </p>
          <p className="mt-s">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide}</Link>
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="谈一谈您的企业除了企业主本人之外，还需要哪些系统。" />
    </>
  );
}
