import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/lp/google", {
  title: "马来西亚 Executive MBA — 英国 CMI 认可，六个月完成",
  description:
    "六个月修完 Future Ready Executive MBA 专业发展课程：6 个培训日、三次导师带领的研习课，以及真实企业应用项目。雇主资助须符合 HRD Corp 条件并获批准。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/google" },
});

const SOURCE = "lp-google-zh";

const INCLUDED = [
  ["三次研习课，导师全程带领", "由 ABC 在班次说明中列明的企业实战者、顾问与高管教练亲自主讲。"],
  ["个人领导力诊断", "通过结构化评估，厘清您的决策模式与重点发展方向。"],
  ["高管教练与项目辅导", "一对一带教，直接落地到您真实的企业，而非纸上案例。"],
  ["杠杆管理系统（LMS）", "结课之后依然保留全套框架、参考资料与实用模板。"],
  ["企业应用项目", "提交一份由导师评审的企业行动方案，不设传统论文或考试。"],
  ["由 CMI（英国）颁授并背书", "Chartered Manager 属独立可选的 CMI 路线，另有独立的资格、评估与费用。"],
];

const CMP = [
  ["时间", "六个月完成：6 个培训日，分三次研习课修读", "18–24 个月"],
  ["投资", "标准费用 RM10,000.00；名额有限，仅择优授予符合资格的马来西亚申请者，须经评估与书面批准。奖学金金额与最终应付费用均以书面个别确认", "以授予院校公布的学费及相关费用为准"],
  ["形式", "证书阶段共三次指定的周末研习课，学员照常在职工作", "按授予院校公布的学术课程时间表修读"],
  ["考核", "以学员自身企业为对象的应用项目，不设传统考试或论文", "作业或考试，另加论文"],
  ["证书", "CMI 专业发展课程认可证书，并非 MQA 认证的学术学位", "由授予院校颁发的学术 MBA 学位"],
];

export default function ZhGoogleLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">专为正在比较专业发展课程的马来西亚管理者而设</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.1rem,4.6vw,3.3rem)", letterSpacing: "-.01em", lineHeight: 1.16, marginTop: 6 }}>
                  六个月，锤炼面向未来的商业领导力——<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>由 CMI 颁授并背书的 Executive MBA。</em>
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.1rem", maxWidth: "44ch", margin: "22px 0 26px", lineHeight: 1.9 }}>
                  照常在职工作的同时，六个月内修完三次研习课、企业应用项目与这门 CMI 认可的专业发展课程。<b style={{ color: "var(--ink)" }}>Chartered Manager</b> 属独立可选的 CMI 路线，另有独立的资格、评估与费用。
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <ProgrammeMarks lang="zh" labelled />
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} 个培训日 · {FACTS.liveSessions} 次课程 · ABC 报告已完成 {FACTS.cohorts} 届</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[["6 个月", "完整专业发展课程"], [FACTS.trainingDays + " 天", "分三次研习课修读"], ["资格评估", "马来西亚申请者择优评估奖学金"]].map(([b, s]) => (
                    <div key={s} className={b.includes("→") ? "lpg-price-stat" : undefined} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.3rem", display: "block", color: "var(--ink)" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".58rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
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
          {[["CMI", "由 CMI（英国）颁授并背书"], [FACTS.trainingDays, "分三个阶段的现场培训日"], ["1", "以真实企业课题为核心的应用项目"], ["资格评估", "马来西亚申请者择优评估奖学金"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程费用之内，涵盖的学习与支持。</h2></Reveal>
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

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">范围清晰的课程比较</span></div></Reveal>
          <Reveal><h2 className="sec-h">从课程目的、形式、考核到证书性质，逐项比较。</h2></Reveal>
          <Reveal><p className="sec-sub">下表所称的参考学术 MBA，是指为期 18–24 个月、包含学术模块、作业或考试以及论文的课程，并不代表所有学术 MBA。</p></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {CMP.map(([k, us, them]) => (
              <div key={k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "var(--ink)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="acc mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>本课程</span>{us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>参考学术 MBA</span>{them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="request-plan-again" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>索取 2026 年开课班次与奖学金资料。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>先拿到资料，再决定要不要通过 WhatsApp 或一通简短电话深入了解。课程团队会为您说明已公布的开课日期、马来西亚学员费用，以及雇主申请 HRD Corp 的流程。{HRD_CORP_CLAIM_ZH}</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" placement="footer-cta" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>

      <style>{`@media(max-width:900px){.lpg-grid{grid-template-columns:1fr!important;gap:30px!important}.lpg-cmp{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
