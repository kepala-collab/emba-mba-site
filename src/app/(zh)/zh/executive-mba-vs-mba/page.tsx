import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_ZH } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH, FAQS_ZH, REFUND_TERMS_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/executive-mba-vs-mba", {
  title: "Executive MBA 还是学术 MBA",
  description:
    "按任务选择：学术 MBA 用于攻读学术学位；Future Ready Executive MBA 用于把一项真实业务课题带到经导师审阅的行动方案。",
});

const COMPARISON_SCOPE_ZH =
  "本表用作参照的学术 MBA，指以学术模块、作业或考试及论文为主、为期 18–24 个月的课程，并不代表所有 MBA 课程。";

// FAQs surfaced on this page (subset used for both the visible list and JSON-LD)
const PAGE_FAQS = FAQS_ZH.filter(([q]) =>
  ["这是 MQA 认证的学位吗？", "全职工作期间可以兼顾课程吗？", "退款条款是什么？"].includes(q)
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
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA 还是学术 MBA · 明确界定的比较</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Executive MBA 还是学术 MBA，按任务选
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              这两条路线为不同任务而设。目标需要一纸学术学位，学术 MBA 就是对的路线；{" "}
              <Link href="/zh/executive-mba" className="acc">Future Ready Executive MBA</Link>{" "}
              则专为把您自身负责的一项真实业务课题、在 {FACTS.durationMonths} 个月内带到经导师审阅的书面行动方案而设，全程不必离开原有职务。
              {PROGRAMME_POSITIONING_ZH}{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <p className="fine">
              也在考虑更短的专业课程？可延伸阅读{" "}
              <Link href="/zh/insights/executive-education-vs-executive-mba" className="acc">高管教育与 Executive MBA 的比较</Link>。
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">并排比较</span></div></Reveal>
          <Reveal><h2 className="sec-h">八项条款，并排界定。</h2></Reveal>
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">为不同任务而设</span></div></Reveal>
          <Reveal><h2 className="sec-h">先说清任务，再选为它而设的路线。</h2></Reveal>
          <div
            className="choose-grid mt-m"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}
          >
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="mono sec-k" style={{ fontSize: ".72rem", marginBottom: 12 }}>学术 MBA 专为…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12 }}>
                  通过学术研习，攻读一纸学术学位。
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  若您的目标离不开 MQA 认证或学术资格——比如执照机构的硬性要求、攻读博士的升学路径、走学术这条路，或行业明文规定的资格门槛——学术
                  MBA 便是对的路线。报读前，不妨把各院校公布的入学要求、课程大纲、修读年期、学费与认可情况一一比对。
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: "100%", border: "1px solid var(--line-2)", background: "linear-gradient(180deg,var(--surface-2),var(--surface))" }}>
                <div className="mono sec-k acc" style={{ fontSize: ".72rem", marginBottom: 12 }}>这门 Executive MBA 专为…</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", lineHeight: 1.15, marginBottom: 12, color: "var(--ink)" }}>
                  把一项真实业务课题带到团队可执行的方案。
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: ".97rem" }}>
                  这条路线为肩负战略或全局业务责任的学员而设：您自身负责的一项课题，从界定问题推进为有决策、行动、责任人与衡量指标的书面行动方案，
                  在 {FACTS.trainingDays} 个培训日、{FACTS.liveSessions} 次指定研习课内完成，并配有一对一辅导和一个企业应用项目。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        
      </section>

      {/* IS IT WORTH IT */}
      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">费用与条款，书面为凭</span></div></Reveal>
          <Reveal><h2 className="sec-h">先说清任务，再看条款。</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              比价格之前，先说清您要完成的任务。下一步需要学术学位，MQA 认证的学术 MBA 便是对的路线；
              这门课程则专为 {FACTS.durationMonths} 个月内的一项真实业务课题而设：{FACTS.trainingDays} 个培训日、
              {FACTS.liveSessions} 次指定研习课、一个企业应用项目及导师审阅，全程不必离开原有职务。
              已公布的标准费用为 {FACTS.priceStd}。奖学金名额有限，符合资格的马来西亚申请者须经个别评估与书面批准，
              方可获{" "}
              <Link href="/zh/fees" className="acc">{FACTS.scholarshipProvider} 奖学金资格</Link>；奖学金并非自动授予。
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub mt-s">
              {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}学员在六个月内照常工作，把框架用在自己的企业应用项目上。{REFUND_TERMS_ZH}
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

      <CtaSection lang="zh" programme="Executive MBA" heading="觉得合适了？聊聊适合您的一届。" sub="通话、线上会议、面谈或电邮，方式由您选。课程团队会解答关于适配度、日期、费用、认可，以及由雇主主导的 HRD Corp 资助等问题；咨询不构成任何报名或付款承诺。" />
    </>
  );
}
