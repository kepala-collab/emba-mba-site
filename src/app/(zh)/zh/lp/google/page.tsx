import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, PROGRAMME_POSITIONING_ZH, CTA_LABELS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH, COMPARISON_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const PROGRAMME_POSITIONING_ZH_FULL =
  `${PROGRAMME_POSITIONING_ZH} 这是一门为期六个月、非学术性质的专业发展课程，并非 MQA 认证的学术学位或受监管的资格。`;

export const metadata = withSeo("/zh/lp/google", {
  title: `带着课题来，带着方案走 — Executive MBA ${FACTS.durationMonths} 个月课程`,
  description:
    `${FACTS.durationMonths} 个月内，通过 ${FACTS.trainingDays} 个培训日、${FACTS.liveSessions} 次导师带领的研习课、教练与应用项目，把您所在机构的一项现有课题变成书面行动方案，照常在职工作。`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/google" },
});

const SOURCE = "lp-google-zh";

const INCLUDED = [
  [`${FACTS.liveSessions} 次研习课，导师全程带领`, "由 ABC 在届别说明中列明的企业实战者、顾问与高管教练亲自主讲。"],
  ["个人领导力诊断", "通过结构化评估，厘清您的决策模式与重点发展方向。"],
  ["一对一教练与项目辅导", "带教直接落地到您所在机构的真实课题，而非纸上案例。"],
  ["保留的框架与工具库", "结课之后依然保留全套框架、参考资料与实用模板，供日后使用。"],
  ["企业应用项目", "提交一份由导师评审的书面行动方案，不设传统论文或考试。"],
  ["成功完成课程可获颁 CMI 认可证书", "Chartered Manager 属独立可选的 CMI 路线，另有独立的资格、评估与费用。"],
];

export default function ZhGoogleLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">专为正在权衡一项真实业务决策的管理者而设</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.1rem,4.6vw,3.3rem)", letterSpacing: "-.01em", lineHeight: 1.16, marginTop: 6 }}>
                  带着课题来，<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>带着方案走</em>
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.1rem", maxWidth: "44ch", margin: "22px 0 26px", lineHeight: 1.9 }}>
                  照常在职工作的同时，{FACTS.durationMonths} 个月内通过 {FACTS.trainingDays} 个培训日、{FACTS.liveSessions} 次研习课、教练与应用项目，把您所在机构的一项现有课题变成书面行动方案。{PROGRAMME_POSITIONING_ZH_FULL}
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <ProgrammeMarks lang="zh" labelled />
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} 个培训日 · {FACTS.liveSessions} 次研习课 · ABC 已开办 {FACTS.cohorts} 届</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[[FACTS.durationMonths + " 个月", "一项真实课题到导师评审的书面行动方案"], [`${FACTS.trainingDays} 天`, `分 ${FACTS.liveSessions} 次研习课修读`], ["择优评估", "马来西亚合资格申请者的奖学金评估"]].map(([b, s]) => (
                    <div key={s} className={b.includes("→") ? "lpg-price-stat" : undefined} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.3rem", display: "block", color: "var(--ink)" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".58rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={210}>
                <p className="fine" style={{ marginTop: 16, maxWidth: "48ch" }}>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}</p>
              </Reveal>
            </div>

            <div className="lpg-form" id="apply">
              <Reveal delay={120}>
                <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" placement="hero" variant="campaign" defaultIntent="details_first" />
              </Reveal>
            </div>
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

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程费用，涵盖这些支持</h2></Reveal>
          <div className="insight-grid mt-m">
            {INCLUDED.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".72rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8 }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">范围清晰的课程比较</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程目的不同，逐项比较</h2></Reveal>
          <Reveal><p className="sec-sub">下表所称的参考学术 MBA，是指为期 18–24 个月、包含学术模块、作业或考试以及论文的课程，并不代表所有学术 MBA。</p></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {COMPARISON_ZH.map((row) => (
              <div key={row.k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{row.k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "var(--ink)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="acc mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>本课程</span>{row.us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>参考学术 MBA</span>{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="request-plan-again" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>{CTA_LABELS.zh.guide}</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>先拿到指南，再决定要不要通过 WhatsApp 或{CTA_LABELS.zh.conversation}深入了解。课程团队会为您说明已公布的开课日期、标准费用 {FACTS.priceStd}，以及雇主申请 HRD Corp 的流程。奖学金名额有限，须经评估及书面批准，并非自动授予。{HRD_CORP_CLAIM_ZH}</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" placement="footer-cta" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>

      
    </div>
  );
}
