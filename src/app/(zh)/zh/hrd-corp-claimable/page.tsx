import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { PROGRAMME_POSITIONING_ZH, CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/hrd-corp-claimable", {
  title: "由雇主主导的 HRD Corp 资助：雇主申请，HRD Corp 裁定",
  description:
    "HRD Corp 资助始于雇主自身的决定：培养一位对团队负责的管理者。雇主在开课前递交申请，资格与批准金额由 HRD Corp 裁定。",
});

const STEPS = [
  {
    h: "先备齐课程注册资料",
    p: `${SITE.provider} 会把课程注册资料、报价、日程、课程大纲与导师资料一并交给雇主。`,
  },
  {
    h: "由雇主在开课前递交申请",
    p: "由雇主授权的 HRD Corp 用户在开课前经 e-TRiS 递交 grant 申请，这一步不由学员经手。",
  },
  {
    h: "HRD Corp 裁定",
    p: "HRD Corp 依据 Allowable Cost Matrix 裁定资格与批准金额；批准金额以雇主的 levy 可用余额为上限。",
  },
  {
    h: "双方各自报销",
    p: "获批课程结束后，培训机构与雇主须在 HRD Corp 限定的期限内，各自递交自己那一份报销文件。",
  },
];

const INCLUSIONS_ZH = [
  { b: `${FACTS.liveSessions} 次研习课、${FACTS.trainingDays} 个培训日`, s: `${FACTS.durationMonths} 个月内分 ${FACTS.liveSessions} 次进行，由实战导师带领。` },
  { b: "导师带领的管理自评", s: "梳理眼下的决策习惯，圈定课程期间要打磨的几个方向。" },
  { b: "高管辅导与项目评审", s: "贴着学员自己企业的处境，给出一对一的指点。" },
  { b: "Leverage Management System（LMS）", s: "课程框架、参考资料与工作模板，学员结业后仍可留用。" },
];

const HRD_FAQS = [
  {
    q: "公司能否获得 HRD Corp 资助，由谁裁定？",
    a: `${HRD_CORP_CLAIM_ZH} 申请由雇主递交，而非学员；批准与批准金额由 HRD Corp 裁定，而非课程机构。`,
  },
  {
    q: "公司能替创办人或高管团队报名吗？",
    a: "课程面向 executive 级别及以上开放，涵盖资深管理者、董事、企业主与创办人。若走由雇主主导的 HRD Corp 资助途径，公司须已注册 HRD Corp、有可用 levy，并在开课前递交申请。只要公司确认学员在其薪资册上，创办人或企业主本人同样可纳入。资格与批准金额由 HRD Corp 裁定。",
  },
  {
    q: "文件工作谁来做？",
    a: `报价、日程、课程大纲与导师资料由课程团队备妥。grant 申请与雇主那一份报销文件由雇主递交；培训机构那一份报销文件由 ${SITE.provider} 递交。`,
  },
  {
    q: "公司没注册 HRD Corp 怎么办？",
    a: `标准费用为 ${FACTS.priceStd}。符合资格的马来西亚申请者可接受 ${FACTS.scholarshipProvider} 奖学金择优评估；名额有限，评估后个别以书面确认奖学金金额及应付费用。奖学金并非自动授予。个人付款方式列在学费页面。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HRD_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HrdCorpClaimablePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">由雇主主导的 HRD Corp 申请 · SBL-Khas · 马来西亚</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              雇主申请，HRD Corp 裁定
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider} 是人力资源发展机构（HRD Corp）核准的培训机构。本课程可申请由雇主主导的 HRD Corp 资助（Employer-Led HRD Corp Funding）。{PROGRAMME_POSITIONING_ZH}
              {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              本课程的 HRD Corp 资助，始于公司内部的一个决定：培养一位对团队负责的管理者。
              <b style={{ color: "var(--ink)" }}> {HRD_CORP_CLAIM_ZH}</b> 配套的课程文件由课程团队备妥。
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply?intent=employer_sponsored" className="btn btn-primary">{CTA_LABELS.zh.company} →</Link>
              <Link href="/zh/fees" className="btn">查看学费与奖学金</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW THE CLAIM WORKS */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">申请流程如何运作</span></div></Reveal>
          <Reveal><h2 className="sec-h">从申请到报销，四段责任各归各。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              雇主、HRD Corp 与培训机构，各管流程中的一个环节。批准只以 HRD Corp 正式发出的批文为准。
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{s.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">涵盖内容</span></div></Reveal>
          <Reveal><h2 className="sec-h">批准金额，涵盖哪些内容。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              批准金额以 HRD Corp 的 grant 裁定为准。{FACTS.durationMonths} 个月内，雇主培养的这位管理者会完成：
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "var(--surface)" }}>
              {INCLUSIONS_ZH.map((it, i) => (
                <li key={it.b} style={{ padding: "20px 22px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 16 }}>
                  <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.14rem", display: "block" }}>{it.b}</b>
                    <span style={{ color: "var(--ink-2)", fontSize: ".93rem", display: "block", marginTop: 4 }}>{it.s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            完整课程详情见<Link href="/zh/executive-mba">Executive MBA</Link> 页面。{PROGRAMME_POSITIONING_ZH}
            这是一门专业发展课程，并非 MQA 监管的学术学位。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
          </p>
        </div>
      </section>

      {/* ELIGIBILITY NOTE */}
      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">谁可以申请</span></div></Reveal>
          <Reveal><h2 className="sec-h">谁申请，谁裁定。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              HRD Corp 报销走的是<b style={{ color: "var(--ink)" }}>由公司付款的 B2B</b> 路径：
              已注册 HRD Corp 的马来西亚雇主在开课前递交申请，资格与批准金额由 HRD Corp 裁定；
              批准金额以雇主的 levy 可用余额为上限。公司未注册 levy，或您以个人身份咨询？
              符合资格的马来西亚申请者可接受 {FACTS.scholarshipProvider} 奖学金择优评估；名额有限，评估后个别以书面确认奖学金金额及应付费用。奖学金并非自动授予；也可选择分期付款。
            </p>
          </Reveal>
          <p className="fine mt-s">
            申请由雇主递交，而非学员；批准与批准金额由 HRD Corp 裁定，而非课程机构。课程文件由课程团队备妥：
            {" "}{SITE.director}，{SITE.phone} · {SITE.email}。要商谈资格与文件事宜，请提交{" "}
            <Link href="/zh/apply">课程咨询</Link>。
          </p>
        </div>
      </section>

      {/* HRDC FAQ */}
      <section className="section faq">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp · 快速解答</span></div></Reveal>
          <Reveal><h2 className="sec-h">雇主最先问到的 HRDC 问题。</h2></Reveal>
          <Reveal className="mt-s">
            {HRD_FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
          <p className="fine center mt-s">
            更多费用与资助说明，见<Link href="/zh/fees">学费</Link>页面。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="开课之前，先把贵公司的 HRD Corp 申请备妥。" sub="可选通话、线上会议、面谈或电邮。课程团队会解答关于适配度、日期、费用、认可，以及由雇主主导的 HRD Corp 资助等问题；咨询不代表报名或付款承诺。" defaultIntent="employer_sponsored" intentOptions={["employer_sponsored", "employer_evaluating"]} />
    </>
  );
}
