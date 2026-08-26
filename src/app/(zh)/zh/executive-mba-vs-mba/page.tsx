import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { FAQS_ZH, REFUND_TERMS_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/executive-mba-vs-mba", {
  title: "高管 MBA 与学术 MBA 的区别",
  description:
    "从修读形式、评估方式、资格性质及时间投入，比较 Future Ready 专业高管 MBA 与学术 MBA。",
});

const COMPARISON_SCOPE_ZH =
  "本表所指的参照学术 MBA，是以学术模块、作业或考试及论文为核心、为期 18–24 个月的课程。它不代表所有 MBA 课程。";

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS_ZH.filter(([q]) =>
  ["这是 MQA 认证的学位吗？", "课程如何安排？"].includes(q)
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ExecutiveMbaVsMbaPage() {
  return (
    <>
      <JsonLd data={faqLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">高管 MBA vs 学术 MBA · 明确界定的比较</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              高管 MBA 还是学术 MBA——按您需要的结果选择。
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              从资格性质、评估方式、修读形式、时间及已公布费用来比较两条路线。{" "}
              <Link href="/zh/executive-mba" className="acc">Future Ready 高管 MBA</Link>{" "}
              是由 CMI 颁授并背书的专业课程，并非 MQA 认证的学术学位或受监管资格。
              当您的目标需要学术学位时，选择学术 MBA；当您的目标是在继续工作的同时完成应用式管理发展时，选择本课程。
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              同时也在比较较短的专业课程？请阅读{" "}
              <Link href="/zh/insights/executive-education-vs-executive-mba" className="acc">高管教育与高管 MBA 的比较</Link>。
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">并排比较</span></div></Reveal>
          <Reveal><h2 className="sec-h">八个维度，同页比较。</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison lang="zh" />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE_ZH} Future Ready 课程不等同于、也不能替代 MQA 认证的学术学位。完整费用见{" "}
            <Link href="/zh/fees" className="acc">学费详情</Link>。
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">哪类人选哪条路线</span></div></Reveal>
          <Reveal><h2 className="sec-h">按所需的资格与学习形式作出选择。</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>如果……请选择学术 MBA</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  您的下一步需要学术或受监管的学位。
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  如果您的目标需要 MQA 认证或学术资格——例如执照机构要求、博士升学路径、学术职业，或行业明文规定的资格要求——学术
                  MBA 才是正确路线。报读前请比较各院校公布的入学要求、课程大纲、修读年期、学费及认可情况。
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>如果……请选择这个高管 MBA</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  您需要的是含企业应用项目、可兼顾工作的专业课程。
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  这条路线为承担战略或全局业务责任的学员而设：结构化的决策框架、一个应用项目，以及 CMI
                  课程认可证书。六个月课程每月只使用一个已排定的周末。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:760px){.choose-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* IS IT WORTH IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">高管 MBA 值得吗？</span></div></Reveal>
          <Reveal><h2 className="sec-h">按您需要的结果作出选择。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              比较价格之前，先界定您需要的结果。当下一步需要学术学位时，选择 MQA 认证的学术 MBA；
              当您需要的是六个月课程、企业应用项目、对照 CMI Professional Standard 的专业认可，
              以及修读期间继续工作，选择本课程。已公布的 2026 马来西亚标准费用为 {FACTS.priceStd}。
              符合资格的马来西亚申请者经评估及书面批准后，可获{" "}
              <Link href="/zh/fees" className="acc">{FACTS.scholarshipProvider} 奖学金资格</Link>，须经评估及书面批准。
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              课程不保证加薪、晋升、就业或商业结果。学员在修读期间继续工作，并把框架应用于自己的企业项目。{REFUND_TERMS_ZH}
            </p>
          </Reveal>
          <Reveal className="center mt-m">
            <Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">常见问题</span></div></Reveal>
          <Reveal><h2 className="sec-h">领导者在决定前会先问的问题。</h2></Reveal>
          <div className="mt-s">
            {PAGE_FAQS.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60}>
                <details className="faq">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            完整问答见<Link href="/zh/faq" className="acc">常见问题</Link>页面，或
            {" "}<Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>，课程团队会把资料发送给您。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="确定适合了？与我们沟通您的班次。" sub="选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。" />
    </>
  );
}
