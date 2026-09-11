import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CLIENTS, CTA_LABELS, FACTS, PROGRAMME_POSITIONING_ZH, SITE } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH, HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/executive-mba-malaysia", {
  title: "马来西亚 Executive MBA · 为在职领导者而设",
  description:
    `面向马来西亚企业主、董事与资深管理者：${FACTS.durationMonths} 个月内，把自己负责的一项课题，带到经导师审阅的书面方案，标准费用、奖学金资格与由雇主主导的 HRD Corp 资助，均以书面确认。`,
});

const TERMS = [
  {
    h: "由雇主主导的 HRD Corp 资助",
    p: `${HRD_CORP_CLAIM_ZH}报价、时间表、课程内容与导师资料，均由课程团队备妥。`,
  },
  {
    h: "马来西亚奖学金资格",
    p: `标准费用为 ${FACTS.priceStd}。${FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经评估与书面批准；最终金额与应付费用均以书面个别确认，并非自动授予。`,
  },
  {
    h: `与工作并行的 ${FACTS.durationMonths} 个月`,
    p: `您在 ${FACTS.durationMonths} 个月内完成 ${FACTS.trainingDays} 个培训日、${FACTS.liveSessions} 次指定研习课，上午 9 时至下午 6 时，同时留在原有职务上。Chartered Manager 属 CMI 另设的可选路线，另有独立的资格要求、评估与费用。`,
  },
  {
    h: "熟悉东盟情境的导师与案例",
    p: "授课导师深耕马来西亚与区域市场，经验横跨企业管理、咨询、制造、金融、人才发展与组织变革。",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/zh/executive-mba-malaysia#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "面向未来商业领导力的 Executive MBA，把马来西亚学员自己负责的一项课题，在六个月内带到经导师审阅的书面行动方案，学员全程留任原职。课程由 CMI 颁发并认可，在马来西亚现场与线上开课；符合资格的 HRD Corp 注册雇主可为员工申请由雇主主导的资助，须经 HRD Corp 批准。",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/zh/executive-mba-malaysia`,
  inLanguage: "zh-Hans-MY",
  areaServed: { "@type": "Country", name: "MY" },
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/zh/executive-mba-malaysia#malaysia-course-instance`,
    name: "Future Ready Executive MBA — 马来西亚现场课程",
    url: `${SITE.url}/zh/executive-mba-malaysia`,
    courseMode: "onsite",
    offers: {
      "@type": "Offer",
      price: "10000",
      priceCurrency: "MYR",
      category: "Executive education",
      url: `${SITE.url}/zh/executive-mba-malaysia`,
    },
  },
};

export default function ExecutiveMbaMalaysiaPage() {
  return (
    <>
      <JsonLd data={courseJsonLd} />

      {/* INTRO — Malaysia-specific */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA · 马来西亚</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "24ch" }}>
              从自己的课题，到审阅的方案
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              马来西亚的企业主、董事与资深管理者，手上都有一项全公司在等待的决定。{FACTS.durationMonths} 个月内，企业应用项目把这样一项课题
              ——定价、接班安排，或您自己负责的一项运营议题——从问题界定，带到一份写明决定、行动、责任人与衡量指标的书面方案，由导师审阅，全程您都留在原有职务上。
              {PROGRAMME_POSITIONING_ZH}课程为期六个月，属非学术专业发展课程，并非 MQA 认证的学术学位或受监管资格。
              {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              您在职期间完成 {FACTS.trainingDays} 个培训日、{FACTS.liveSessions} 次指定研习课、一对一辅导与企业应用项目。Chartered Manager
              属 CMI 另设的可选路线，由 CMI 决定，不包含在已公布的课程内容与费用之内。
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              标准费用为 {FACTS.priceStd}。{FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经评估与书面批准；
              最终金额与应付费用均以书面个别确认，并非自动授予。<b style={{ color: "var(--ink)" }}>{HRD_CORP_CLAIM_ZH}</b>
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
              <Link href="/zh/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.zh.company}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TERMS CONFIRMED FOR MALAYSIA */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">马来西亚的确认条款</span></div></Reveal>
          <Reveal><h2 className="sec-h">费用、资助途径与时间表，均以书面确认。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              马来西亚奖学金资格、由雇主主导的 HRD Corp 流程，以及英语与华语开课时间表，与标准费用并列，每一项均以书面个别确认。
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {TERMS.map((r, i) => (
              <Reveal key={r.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{r.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{r.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            申请由雇主提出，而非学员；是否批准及批准金额，均由 HRD Corp 决定。详情请参阅{" "}
            <Link href="/zh/hrd-corp-claimable">由雇主主导的 HRD Corp 资助</Link>。课程完整介绍见{" "}
            <Link href="/zh/executive-mba">Executive MBA</Link> 页面，也可了解{" "}
            <Link href="/zh/chartered-manager-malaysia">马来西亚的 Chartered Manager 路线</Link>。若您正在权衡不同的课程类别，可延伸阅读{" "}
            <Link href="/zh/insights/executive-education-vs-executive-mba">高管教育与 Executive MBA 的比较</Link>。
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="stats">
            <div><b>{FACTS.trainingDays}</b><span>六个月内的培训日</span></div>
            <div><b>{FACTS.cohorts}</b><span>ABC 记录在册的届数</span></div>
            <div><b>资格评估</b><span>择优评估马来西亚申请者的奖学金资格</span></div>
            <div><b>开课前</b><span>雇主须提交 HRD Corp 资助申请</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">ABC 公司简介</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程机构服务过的部分组织。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              在 {SITE.provider} 的现行公司简介中，客户与学员来自以下组织：
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 12 }}>
              {CLIENTS.slice(0, 12).map((c) => (
                <li key={c} className="mono" style={{ padding: "10px 16px", border: "1px solid var(--line)", borderRadius: 999, background: "var(--surface)", color: "var(--ink-2)", fontSize: ".84rem" }}>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            上列组织反映 {SITE.providerShort} 旗下各课程的客户与学员构成；列出并不代表这些组织认可课程。
          </p>
        </div>
      </section>

      {/* 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 英语及华语开课时间表</span></div></Reveal>
          <Reveal><h2 className="sec-h">英语与华语开课时间表已全部公开。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              现行马来西亚公开班的上课时间为上午 9 时至下午 6 时。Cohort 17 的上课日为星期六至星期日，其余已公布的英语与华语届别则为星期五至星期六。
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <IntakeSchedule lang="zh" label="2026 马来西亚开课时间表" />
          </Reveal>
          <p className="mt-s">
            <Link href="/zh/intakes" className="btn btn-primary">查看全部 2026 年开课日期</Link>
          </p>
          <p className="fine center mt-s">
            {PROGRAMME_POSITIONING_ZH}并非 MQA 监管的学术学位。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
            符合资格的马来西亚雇主可在开课前申请 HRD Corp 资助，是否批准及批准金额由 HRD Corp 决定。您也可以先
            <Link href="/zh/apply">{CTA_LABELS.zh.conversation}</Link>，再作决定。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="聊聊马来西亚开课时间、费用与资助途径。" sub="通话、线上会议、面谈或电邮，方式由您选。课程团队会解答关于适配度、日期、费用、认可，以及由雇主主导的 HRD Corp 资助等问题；咨询不构成任何报名或付款承诺。" />
    </>
  );
}
