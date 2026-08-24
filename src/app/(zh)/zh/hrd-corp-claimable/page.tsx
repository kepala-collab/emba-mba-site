import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/hrd-corp-claimable", {
  title: "高管 MBA 的 HRD Corp 资助途径",
  description:
    "了解注册马来西亚雇主如何在开课前通过 e-TRiS 提交申请、需要哪些文件，以及 HRD Corp 如何决定资格与批准金额。",
});

const STEPS = [
  {
    h: "确认注册课程",
    p: `${SITE.provider} 向雇主提供课程注册资料、报价、时间表、课程内容及导师文件。`,
  },
  {
    h: "雇主在开课前提交申请",
    p: "雇主授权的 HRD Corp 用户在班次开始前通过 e-TRiS 提交 grant 申请。申请不由学员提交。",
  },
  {
    h: "HRD Corp 作出决定",
    p: "HRD Corp 依据 Allowable Cost Matrix 决定资格及批准金额；金额不会超过雇主可用 levy 余额。",
  },
  {
    h: "双方提交索款文件",
    p: "获批培训完成后，培训机构与雇主须在 HRD Corp 规定的期限内分别提交各自的索款文件。",
  },
];

const INCLUSIONS_ZH = [
  { b: "三个课程共六个培训日", s: "三个月课程期间，每月安排一次由实践导师带领的框架工作坊。" },
  { b: "引导式管理自我评估", s: "检视当前决策习惯，并选定课程期间要改进的具体方向。" },
  { b: "高管辅导及项目评审", s: "针对学员自身企业情境提供一对一指导。" },
  { b: "Leverage Management System（LMS）", s: "学员保留课程框架、参考资料及工作模板。" },
];

const HRD_FAQS = [
  {
    q: "公司可以为创办人或高管团队成员报名吗？",
    a: "课程面向 executive 级别及以上人员开放，包括资深管理者、董事、企业主及创办人。若走雇主主导的 HRD Corp 资助途径，公司须已注册 HRD Corp、有可用 levy，并在开课前提交申请。公司确认学员在其薪资名单上时，创办人或企业主也可纳入。资格及批准金额由 HRD Corp 决定。",
  },
  {
    q: "我的雇主可以申请 HRD Corp 资助吗？",
    a: HRD_CORP_CLAIM_ZH,
  },
  {
    q: "文件工作由谁负责？",
    a: `课程团队提供报价、时间表、课程内容及导师文件。雇主提交 grant 申请及雇主方索款文件；${SITE.provider} 提交培训机构方的索款文件。`,
  },
  {
    q: "公司没有注册 HRD Corp 怎么办？",
    a: `标准费用为 ${FACTS.priceStd}。符合资格的马来西亚申请者经评估及书面批准后，可获 ${FACTS.scholarshipAmount} ${FACTS.scholarshipProvider} 奖学金；获批者实付 ${FACTS.priceAfterScholarship}。个人付款选项列于学费页面。`,
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
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">雇主主导的 HRD Corp 申请 · SBL-Khas · 马来西亚</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              开课之前，先弄清 HRD Corp grant 流程。
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider} 是 HRD Corp（HRDC）核准培训机构。Future Ready Business Leadership 由英国特许管理协会（CMI）颁授并背书。
              <b style={{ color: "var(--ink)" }}> {HRD_CORP_CLAIM_ZH}</b> 课程团队负责提供配套课程文件。
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
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">申请流程如何运作</span></div></Reveal>
          <Reveal><h2 className="sec-h">从申请到索款的四个明确责任。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              雇主、HRD Corp 与培训机构各自负责流程中的一个具体环节。只有在 HRD Corp 发出批准后，批准才算完成。
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
          <Reveal><h2 className="sec-h">批准资助金额所对应的课程组成部分。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              批准金额以 HRD Corp 的 grant 决定为准。高管 MBA 是通向课程证书的三个月课程，课程包括：
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
            完整课程详情见<Link href="/zh/executive-mba">高管 MBA</Link> 页面。这一专业课程由 CMI 颁授并背书，并非 MQA 监管的学术学位。
          </p>
        </div>
      </section>

      {/* ELIGIBILITY NOTE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">谁可以申请</span></div></Reveal>
          <Reveal><h2 className="sec-h">雇主资助与个人付款两条路径。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              HRD Corp 索款属于<b style={{ color: "var(--ink)" }}>由公司付款的 B2B</b> 路径：
              HRD Corp 注册马来西亚雇主在开课前提交申请，资格及批准金额由 HRD Corp 决定，
              金额不会超过雇主可用 levy 余额。公司未注册 levy，或以个人身份报读？
              符合资格的马来西亚申请者经评估及书面批准后，可获 {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} 奖学金，或选择分期付款安排。
            </p>
          </Reveal>
          <p className="fine mt-s">
            申请方是雇主，不是学员；批准与批准金额由 HRD Corp 决定，不由课程机构决定。课程文件由课程团队提供：
            {" "}{SITE.director}，{SITE.phone} · {SITE.email}。如需沟通资格及文件事宜，请提交{" "}
            <Link href="/zh/apply">课程咨询</Link>。
          </p>
        </div>
      </section>

      {/* HRDC FAQ */}
      <section className="section faq">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp · 快速解答</span></div></Reveal>
          <Reveal><h2 className="sec-h">雇主最先提出的 HRDC 问题。</h2></Reveal>
          <Reveal className="mt-s">
            {HRD_FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
          <p className="fine center mt-s">
            更多费用与资助说明见<Link href="/zh/fees">学费</Link>页面。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="在开课前准备好贵公司的 HRD Corp 申请。" sub="选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。" defaultIntent="employer_sponsored" intentOptions={["employer_sponsored", "employer_evaluating"]} />
    </>
  );
}
