import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import { SITE, FACTS, CLIENTS } from "@/lib/content";

export const metadata = {
  title: "马来西亚高管 MBA — 英国 CMI 认可，3 个月，HRD Corp 可索赔",
  description:
    "3 个月周末授课，取得英国 CMI 认可的高管 MBA，再进阶特许经理人。RM10,000 → RM6,000（含奖学金），HRD Corp 可索赔。免费报名。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/google", languages: { en: "/lp/google", "zh-Hans": "/zh/lp/google" } },
};

const SOURCE = "lp-google-zh";

const INCLUDED = [
  ["三次课程的现场引导", "由曾为世界 500 强与马股上市公司董事会提供顾问的实战导师主讲。"],
  ["个人领导力诊断", "精准指出你的思维在哪里正让你付出代价。"],
  ["高管教练与项目辅导", "一对一指导，应用于你真实的企业，而非案例研究。"],
  ["杠杆管理系统（LMS）", "一套终身保留的框架、参考与工具库。"],
  ["真实的顶点转型项目", "带走一份可呈董事会的增长方案 —— 没有论文，没有考试。"],
  ["CMI（英国）认证 + 特许经理人", "先取得高管 MBA 认证，再进阶至特许经理人的专业身份。"],
];

const CMP = [
  ["时间", "6 个月（3 个月取得 MBA 认证，再进阶特许经理人）", "1.5–2 年"],
  ["投资", "RM10,000（含奖学金 RM6,000）", "RM60,000–150,000+"],
  ["形式", "每月一个周末 · 边工作边学", "暂停事业或沉重的夜间负担"],
  ["考核", "一个真实的企业项目", "考试与论文"],
  ["证书", "CMI（英国）· 特许经理人路径", "学术学位"],
];

export default function ZhGoogleLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">英国 CMI 认可 · HRD Corp 可索赔</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.1rem,4.6vw,3.3rem)", letterSpacing: "-.01em", lineHeight: 1.16, marginTop: 6 }}>
                  一个获认可的马来西亚高管 MBA —— 只需 <em style={{ color: "var(--crimson)", fontStyle: "normal" }}>3 个月</em> 的周末。
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.1rem", maxWidth: "44ch", margin: "22px 0 26px", lineHeight: 1.9 }}>
                  由英国特许管理协会（CMI）认可。三次课程取得高管 MBA 认证，再进阶至 <b style={{ color: "#fff" }}>特许经理人（CMgr）</b> —— 全程边工作边学。没有论文，没有考试。
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="英国特许管理协会 CMI" width={80} height={28} style={{ height: 28, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp 可索赔" width={38} height={38} style={{ height: 38, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>已培养 {FACTS.gradsApprox} 位领导者 · {FACTS.cohorts} 届</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[["3 个月", "取得 CMI 认证"], [`${FACTS.priceStd} → ${FACTS.priceNet}`, "含奖学金后"], ["100%", "HRD Corp 可索赔"]].map(([b, s]) => (
                    <div key={s} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.3rem", display: "block", color: "#fff" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".58rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lpg-form">
              <Reveal delay={120}>
                <div className="card" style={{ padding: 26, background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)" }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>免费 · 两分钟</p>
                  <h2 style={{ fontSize: "1.28rem", color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>查询资格与下一期开课</h2>
                  <p className="fine" style={{ marginBottom: 18 }}>留下资料，我们的课程团队会回电 —— 适合度、日期、奖学金与 HRD Corp，无需承诺。</p>
                  <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>师资曾受托培养这些机构的领导者</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.6 }}>{c}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">你需要的一切 —— 领导转型，而非仅仅管理运营。</h2></Reveal>
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
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">为什么不读两年制 MBA</span></div></Reveal>
          <Reveal><h2 className="sec-h">同等的公信力，只需一小部分的时间与费用。</h2></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {CMP.map(([k, us, them]) => (
              <div key={k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "#fff", fontSize: ".9rem", lineHeight: 1.7 }}><span className="acc mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>本课程</span>{us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2, opacity: .7 }}>传统 MBA</span>{them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>准备好取得你的高管 MBA 了吗？</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>免费报名，我们的课程团队将确认你的资格、下一期日期、奖学金与 HRD Corp 索赔。无需承诺。</p></Reveal>
          <Reveal delay={80}>
            <div className="card" style={{ padding: 26, maxWidth: 520, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>

      <style>{`@media(max-width:900px){.lpg-grid{grid-template-columns:1fr!important;gap:30px!important}.lpg-form{order:-1}.lpg-cmp{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
