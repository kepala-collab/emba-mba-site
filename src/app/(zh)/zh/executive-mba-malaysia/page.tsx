import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CLIENTS, CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/executive-mba-malaysia", {
  title: "面向在职领导者的马来西亚高管 MBA",
  description:
    "为马来西亚在职领导者设计的三个月高管教育课程：应用式管理学习、CMI 认可，以及由雇主主导的 HRD Corp 资助途径。",
});

const REASONS = [
  {
    h: "雇主主导的 HRD Corp 资助",
    p: `${HRD_CORP_CLAIM_ZH}课程团队提供报价、时间表、课程内容及导师文件。`,
  },
  {
    h: `马来西亚奖学金 — ${FACTS.scholarshipAmount}`,
    p: `标准费用为 ${FACTS.priceStd}。符合资格的马来西亚申请者经评估及书面批准后，可获 ${FACTS.scholarshipProvider} 奖学金；获批者实付 ${FACTS.priceAfterScholarship}。`,
  },
  {
    h: "为在职领导者设计的三个月课程",
    p: "课程在三个月内每月安排一个周末，上午 9 时至下午 6 时。Chartered Manager 是 CMI 的独立可选路线，具有独立资格、评估及费用。",
  },
  {
    h: "熟悉 ASEAN 情境的导师与案例",
    p: "导师经验涵盖马来西亚及区域的企业领导、咨询、制造、金融、人才发展与组织变革工作。",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "面向未来商业领导力的 Executive MBA，由 CMI 颁授并背书。课程在马来西亚及线上交付；符合资格的 HRD Corp 注册雇主可申请资助，须经 HRD Corp 批准。",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/zh/executive-mba`,
  inLanguage: "zh-Hans-MY",
  areaServed: { "@type": "Country", name: "MY" },
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/zh/executive-mba-malaysia#malaysia-course-instance`,
    name: "Future Ready Executive MBA — 马来西亚班次",
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
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">高管 MBA · 马来西亚</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "24ch" }}>
              为马来西亚领导者打造的高管 MBA。
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Future Ready 高管 MBA 是为马来西亚企业主、董事及资深管理者设计的三个月高管教育及专业发展课程，
              由 CMI 颁授并背书，通过集中现场课程交付。<b style={{ color: "var(--ink)" }}>{HRD_CORP_CLAIM_ZH}</b>{" "}
              课程以令吉计价，标准费用为 {FACTS.priceStd}。符合资格的马来西亚申请者经评估及书面批准后，可获{" "}
              <b style={{ color: "var(--ink)" }}>{FACTS.scholarshipAmount} {FACTS.scholarshipProvider} 奖学金</b>。
              学员把课程框架应用于自己的企业、市场及运营情境。
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              您在继续工作的同时，完成三个每月周末课程、辅导及应用项目。Chartered Manager 是 CMI 的独立可选路线，不包含在已公布课程或费用内。课程分三个每月课程进行，学员无须离开工作岗位。
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
              <Link href="/zh/fees" className="btn">学费与奖学金</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY MALAYSIAN LEADERS CHOOSE IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">马来西亚领导者为何选择它</span></div></Reveal>
          <Reveal><h2 className="sec-h">本地定价、雇主资助途径及已公布的时间表。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              课程把 CMI 课程认可证书、马来西亚奖学金资格、由雇主主导的 HRD Corp 流程，以及英语或华语班次时间表结合在一起。
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {REASONS.map((r, i) => (
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
            申请方是雇主，不是学员；批准与批准金额由 HRD Corp 决定。请参阅{" "}
            <Link href="/zh/hrd-corp-claimable">雇主主导的 HRD Corp 资助</Link>。完整课程详情见{" "}
            <Link href="/zh/executive-mba">高管 MBA</Link> 页面，或查看{" "}
            <Link href="/zh/chartered-manager-malaysia">马来西亚的 Chartered Manager 路线</Link>。如果您正在比较课程类别，可阅读{" "}
            <Link href="/zh/insights/executive-education-vs-executive-mba">高管教育与高管 MBA 的比较</Link>。
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="stats">
            <div><b>{FACTS.trainingDays}</b><span>培训日</span></div>
            <div><b>{FACTS.cohorts}</b><span>ABC 课程记录中的班次</span></div>
            <div><b>{FACTS.scholarshipAmount}</b><span>供符合资格的马来西亚申请者申请的奖学金</span></div>
            <div><b>开课前</b><span>雇主提交 HRD Corp grant 申请</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">ABC 公司简介</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程机构列出的服务组织。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider} 现行公司简介中，其客户及学员群体包括以下组织：
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
            所列组织反映 {SITE.providerShort} 各课程的客户及学员群体；列出并不代表这些组织的背书。
          </p>
        </div>
      </section>

      {/* 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 英语及华语班次</span></div></Reveal>
          <Reveal><h2 className="sec-h">英语及华语班次时间表已公布。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              现行马来西亚公开班上课时间为上午 9 时至下午 6 时。Cohort 17 为星期六至星期日；其余已公布的英语及华语班次为星期五至星期六。
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <IntakeSchedule lang="zh" label="2026 马来西亚开课时间表" />
          </Reveal>
          <p className="mt-s">
            <Link href="/zh/intakes" className="btn btn-primary">查看全部 2026 班次</Link>
          </p>
          <p className="fine center mt-s">
            这一专业课程由 CMI 颁授并背书，并非 MQA 监管的学术学位。符合资格的马来西亚雇主可在开课前申请 HRD Corp 资助；批准与批准金额由 HRD Corp 决定。您可先<Link href="/zh/apply">预约课程沟通</Link>再作决定。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="沟通马来西亚班次时间、费用及资助途径。" sub="选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。" />
    </>
  );
}
