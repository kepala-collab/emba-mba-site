import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { CTA_LABELS, FACTS } from "@/lib/content";
import { FAQS_ZH, REFUND_TERMS_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/executive-mba-vs-mba", {
  title: "Executive MBA 与学术 MBA，差别在哪？",
  description:
    "从修读形式、评估方式、资格性质到时间投入，逐项比较 Future Ready 专业Executive MBA 与学术 MBA。",
});

const COMPARISON_SCOPE_ZH =
  "本表用作参照的学术 MBA，指以学术模块、作业或考试及论文为主、为期 18–24 个月的课程，并不代表所有 MBA 课程。";

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
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA vs 学术 MBA · 明确界定的比较</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA 还是学术 MBA，看您要的是什么结果。
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              从资格性质、评估方式、修读形式、所需时间到已公布费用，把两条路线逐项摆在一起看。{" "}
              <Link href="/zh/executive-mba" className="acc">Future Ready Executive MBA</Link>{" "}
              是由 CMI 颁授并背书的专业课程，并非 MQA 认证的学术学位或受监管资格。
              目标需要一纸学术学位，就选学术 MBA；想在不离开岗位的前提下把管理能力真正落地，就选这门课程。
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              也在考虑更短的专业课程？可延伸阅读{" "}
              <Link href="/zh/insights/executive-education-vs-executive-mba" className="acc">高管教育与Executive MBA 的比较</Link>。
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">并排比较</span></div></Reveal>
          <Reveal><h2 className="sec-h">八个维度，一页看清。</h2></Reveal>
          <Reveal className="mt-s">
            <ProgrammeComparison lang="zh" />
          </Reveal>
          <p className="fine mt-s">
            {COMPARISON_SCOPE_ZH} Future Ready 课程既不等同于、也无法替代 MQA 认证的学术学位。完整费用见{" "}
            <Link href="/zh/fees" className="acc">学费详情</Link>。
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHICH */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">哪类人选哪条路线</span></div></Reveal>
          <Reveal><h2 className="sec-h">从您需要的资格与学习方式倒推选择。</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>这些情况，请选学术 MBA</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  下一步需要一纸学术或受监管的学位。
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  若您的目标离不开 MQA 认证或学术资格——比如执照机构的硬性要求、攻读博士的升学路径、走学术这条路，或行业明文规定的资格门槛——学术
                  MBA 才是对的选择。报读前，不妨把各院校公布的入学要求、课程大纲、修读年期、学费与认可情况一一比对。
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>这些情况，请选这门Executive MBA</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  您要的是带企业应用项目、又能兼顾工作的专业课程。
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  这条路线为肩负战略或全局业务责任的学员而设：一套结构化的决策框架、一个应用项目，外加一张 CMI
                  课程认可证书。六个月里，每月只占用一个排定好的周末。
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA 值得吗？</span></div></Reveal>
          <Reveal><h2 className="sec-h">先想清楚要什么结果，再谈值不值。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              别急着比价格，先弄清楚自己要的是什么。下一步需要学术学位，就选 MQA 认证的学术 MBA；
              若您要的是六个月的课程、一个企业应用项目、对照 CMI Professional Standard 的专业认可，
              而且希望修读期间照常工作，那就选这门课程。2026 年马来西亚已公布的标准费用为 {FACTS.priceStd}。
              奖学金名额有限，符合资格的马来西亚申请者须经择优评估与书面批准，方可获{" "}
              <Link href="/zh/fees" className="acc">{FACTS.scholarshipProvider} 奖学金资格</Link>。
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              课程不保证加薪、晋升、就业或任何商业成果。学员边工作边学习，把框架用在自己的企业项目上。{REFUND_TERMS_ZH}
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
          <Reveal><h2 className="sec-h">下决定前，领导者最常问的几个问题。</h2></Reveal>
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
            完整问答见<Link href="/zh/faq" className="acc">常见问题</Link>页面；也可
            {" "}<Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>，课程团队会把资料发送给您。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="觉得合适了？聊聊适合您的班次。" sub="通话、线上会议、面谈或电邮，方式由您选。课程团队会解答关于适配度、日期、费用、认可，以及由雇主主导的 HRD Corp 资助等问题；咨询不构成任何报名或付款承诺。" />
    </>
  );
}
