import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/lp/google", {
  title: "马来西亚高管 MBA — 英国 CMI 认可，六个月课程",
  description:
    "六个月专业管理课程：首三个月完成获英国 CMI 认可的课程证书阶段，随后三个月为符合条件者准备 CMI 特许经理人评估。HRD Corp 注册雇主须在开课前提交申请。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/google", languages: { en: "/lp/google", "zh-Hans": "/zh/lp/google" } },
});

const SOURCE = "lp-google-zh";

const INCLUDED = [
  ["三次课程的现场引导", "由 ABC 在班次说明中列明的企业实践者、顾问及高管教练主讲。"],
  ["个人领导力诊断", "以结构化评估识别你的决策模式及发展重点。"],
  ["高管教练与项目辅导", "一对一指导，应用于你真实的企业，而非案例研究。"],
  ["杠杆管理系统（LMS）", "完成课程后保留框架、参考及工作模板。"],
  ["企业应用项目", "提交一份供导师评审的企业行动方案；没有传统论文或考试。"],
  ["CMI（英国）认可 + CMgr 申请准备", "课程获 CMI 认可；符合条件的毕业学员可另行申请特许经理人，身份并非自动授予。"],
];

const CMP = [
  ["时间", "六个月：三个月课程证书阶段 + 三个月 CMgr 评估准备", "18–24 个月"],
  ["投资", "标准费用 RM10,000.00；符合资格的马来西亚申请者经评估及书面批准后可获 RM5,000.00 奖学金", "授予院校公布的学费及附加费用"],
  ["形式", "证书阶段每月一个周末；学员继续工作", "按授予院校公布的学术课程时间表修读"],
  ["考核", "学员自身企业的应用项目；没有传统考试或论文", "作业或考试，加上论文"],
  ["证书", "CMI 专业课程认可证书；并非 MQA 认证的学术学位", "由授予院校颁发的学术 MBA 学位"],
];

export default function ZhGoogleLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">为正在比较专业发展课程的马来西亚管理者而设</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.1rem,4.6vw,3.3rem)", letterSpacing: "-.01em", lineHeight: 1.16, marginTop: 6 }}>
                  把一项真实商业挑战，转化为一份<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>管理行动方案</em>，同时继续工作。
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.1rem", maxWidth: "44ch", margin: "22px 0 26px", lineHeight: 1.9 }}>
                  首三个月完成三次课程、企业项目及获 CMI 认可的 Executive MBA 课程证书阶段；随后三个月为符合条件者准备 <b style={{ color: "var(--ink)" }}>特许经理人（CMgr MCMI）</b> 评估。CMgr 仅在通过 CMI 评估后授予。
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
                  {[["6 个月", "课程证书 + CMgr 评估准备"], [FACTS.scholarshipAmount, "符合资格的马来西亚申请者奖学金"], ["开课前", "雇主提交 HRD Corp 申请"]].map(([b, s]) => (
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
                <div className="card" style={{ padding: 26, background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)" }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>免费 2026 课程资料 · 无需付款</p>
                  <h2 style={{ fontSize: "1.28rem", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>获取课程、时间表及奖学金资料</h2>
                  <p className="fine" style={{ marginBottom: 18 }}>先收取简明资料，再选择电邮、WhatsApp 或简短课程匹配通话。咨询不等于报名。</p>
                  <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" placement="hero" variant="campaign" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[["CMI", "依据 CMI 专业标准批准及认可"], [FACTS.trainingDays, "三个阶段的现场培训日"], ["1", "围绕真实商业议题完成的应用项目"], [FACTS.scholarshipAmount, "符合资格的马来西亚申请者奖学金"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程费用所包含的学习与支持项目。</h2></Reveal>
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">明确范围的课程比较</span></div></Reveal>
          <Reveal><h2 className="sec-h">比较课程目的、形式、评估及证书性质。</h2></Reveal>
          <Reveal><p className="sec-sub">下表把参考学术 MBA 定义为 18–24 个月、包含学术模块、作业或考试及论文的课程；并不代表所有学术 MBA。</p></Reveal>
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
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>获取 2026 课程及奖学金资料。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>先收取资料，再选择是否通过 WhatsApp 或简短通话进一步了解。课程团队会说明已公布日期、马来西亚学员费用及雇主申请 HRD Corp 的流程。{HRD_CORP_CLAIM_ZH}</p></Reveal>
          <Reveal delay={80}>
            <div className="card" style={{ padding: 26, maxWidth: 520, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" placement="footer-cta" variant="campaign" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>

      <style>{`@media(max-width:900px){.lpg-grid{grid-template-columns:1fr!important;gap:30px!important}.lpg-cmp{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
