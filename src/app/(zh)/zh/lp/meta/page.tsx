import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, PROGRAMME_POSITIONING_ZH, CTA_LABELS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH, INCLUSIONS_CMI_CERTIFICATE_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const PROGRAMME_POSITIONING_ZH_FULL =
  `${PROGRAMME_POSITIONING_ZH} 这是一门为期六个月、非学术性质的专业发展课程，并非 MQA 认证的学术学位或受监管的资格。`;

export const metadata = withSeo("/zh/lp/meta", {
  title: `从随性决策，到可展示的方法 — Executive MBA ${FACTS.durationMonths} 个月课程`,
  description:
    `${FACTS.durationMonths} 个月内，通过 ${FACTS.trainingDays} 个培训日、${FACTS.liveSessions} 次导师带领的研习课、教练与应用项目，把您所在机构的一项现有课题变成书面行动方案，照常在职工作。`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/meta" },
});

const SOURCE = "lp-meta-zh";

const PRESSURES = [
  ["职责范围扩大了", "您所肩负的决策，成为企业应用项目的素材。"],
  ["决策的对错不再一目了然", "您要先厘清决策，再用一套方法检验证据、摊开取舍。"],
  ["事业不能按下暂停键", `${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次研习课完成；应用工作在研习课之间，于您所在机构进行。`],
] as const;

const PROCESS = [
  ["01", "带来一项现有课题", "从您在所在机构里必须负责的一项决策开始。"],
  ["02", "运用管理框架", "以结构化流程厘清问题、检验假设、比较可行方案。"],
  ["03", "完成行动方案", "把分析整理成一份由导师评审的书面行动方案。"],
] as const;

export default function ZhMetaLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">专为在人事、营运与战略上都要决策的管理者而设</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              从随性决策，到可展示的方法
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              照常在职工作的同时，{FACTS.durationMonths} 个月内通过 {FACTS.trainingDays} 个培训日、{FACTS.liveSessions} 次研习课、教练与应用项目，把您所在机构的一项现有课题变成书面行动方案。{PROGRAMME_POSITIONING_ZH_FULL}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">{CTA_LABELS.zh.guide} →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <ProgrammeMarks lang="zh" centered labelled />
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} 个培训日 · {FACTS.liveSessions} 次研习课 · ABC 已开办 {FACTS.cohorts} 届</span>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="fine" style={{ margin: "16px auto 0", maxWidth: "48ch" }}>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">管理者为何开始寻找方法</span></div></Reveal>
          <Reveal><h2 className="sec-h">在职期间，仍可精进决策</h2></Reveal>
          <div className="insight-grid mt-m">
            {PRESSURES.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>0{i + 1}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8 }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[["CMI", "由 CMI（英国）颁发并认可"], [FACTS.trainingDays, `分 ${FACTS.liveSessions} 次研习课进行的培训日`], [FACTS.cohorts, "届已完成，由 ABC 公布"], ["择优评估", "马来西亚合资格申请者的奖学金评估"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">您将完成的工作</span></div></Reveal>
          <Reveal><h2 className="sec-h">一项课题进来，一份方案出去</h2></Reveal>
          <div role="list" style={{ padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {PROCESS.map(([number, title, body]) => (
              <Reveal key={number}>
                <div role="listitem" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc mono" style={{ marginTop: 3, fontWeight: 700 }}>{number}</span>
                  <span style={{ color: "var(--ink-2)", fontSize: "1.02rem" }}><b style={{ color: "var(--ink)" }}>{title}。</b>{body}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>{INCLUSIONS_CMI_CERTIFICATE_ZH} 标准费用为 {FACTS.priceStd}。符合资格的马来西亚申请者可申请 LIFE Innoversity 奖学金；奖学金名额有限，须经择优评估及书面批准，并非自动授予。{HRD_CORP_CLAIM_ZH} 分期付款方案详见费用页面。</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>{CTA_LABELS.zh.guide}</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>先拿到简明资料，再选择电邮、WhatsApp 或{CTA_LABELS.zh.conversation}。课程团队会为您说明已公布的开课日期、标准费用，以及雇主申请 HRD Corp 的流程。</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>
    </div>
  );
}
