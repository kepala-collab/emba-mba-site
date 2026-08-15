import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import { SITE, FACTS, CLIENTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/lp/meta", {
  title: "面向在职领导者的高管 MBA | Future Ready",
  description:
    "专为在职领导者打造的六个月专业路径：首三个月完成获英国 CMI 认可的课程证书阶段，随后三个月准备 CMI 特许经理人评估。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/meta", languages: { en: "/lp/meta", "zh-Hans": "/zh/lp/meta" } },
});

const SOURCE = "lp-meta-zh";

const EDGE = [
  ["理解整体系统", "在决策前分析原因、相互依赖关系及潜在后果。"],
  ["检验基本假设", "区分事实、限制与假设，再依据证据设计选项。"],
  ["结合分析与创新", "在战略逻辑、使用者需要及实际限制之间取得平衡。"],
  ["梳理复杂信息", "把复杂信息整理成可说明、可执行的决策。"],
  ["审视五个角度", "从五个明确的商业视角评估每项决定。"],
  ["连接人才与业务", "综合考虑人才能力、创新及商业要求。"],
];

const WALK = [
  "六个培训日的现场引导，由课程团队确认的导师主讲",
  "个人领导力诊断，识别决策模式及发展重点",
  "一对一高管教练，应用于学员自身的企业情境",
  "完成课程后保留的框架与工具库（LMS）",
  "一个供导师评审的企业转型项目",
  "课程获 CMI（英国）认可，CMgr 须另行申请",
];

export default function ZhMetaLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">面向承担跨职能决策责任的在职领导者</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              建立一套可重复使用的方法，处理<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>复杂商业决策</em>。
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              一个由英国 CMI 认可的六个月专业路径：首三个月以每月一个周末完成课程证书阶段；随后三个月为符合条件者准备 CMI 特许经理人评估。无需暂停事业，并完成一份属于你自己企业的转型方案。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">咨询课程适合度 →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <span className="chip"><Image src="/brand/cmi-logo.png" alt="CMI（英国）" width={78} height={26} style={{ height: 26, width: "auto" }} /></span>
              <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp 可索赔" width={36} height={36} style={{ height: 36, width: "auto" }} /></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} 个培训日 · {FACTS.liveSessions} 次课程 · ABC 报告已完成 {FACTS.cohorts} 届</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">培养的能力</span></div></Reveal>
          <Reveal><h2 className="sec-h">六种相互配合的决策方法。</h2></Reveal>
          <div className="insight-grid mt-m">
            {EDGE.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8 }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>以下机构列于 ABC 的公司简介；列名不代表对本网站或课程作出认可</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.7 }}>{c}</span>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程包含</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程教学、辅导、工具及评估项目。</h2></Reveal>
          <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {WALK.map((w) => (
              <Reveal key={w}>
                <li style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc" style={{ marginTop: 3, fontWeight: 700 }}>→</span>
                  <span style={{ color: "var(--ink-2)", fontSize: "1.02rem" }}>{w}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>{FACTS.priceStd} 标准费用 → 马来西亚学员实付 <b style={{ color: "var(--ink)" }}>{FACTS.priceNet}</b>（LIFE Innoversity 奖学金 {FACTS.scholarshipAmt}）。{HRD_CORP_CLAIM_ZH} 分期付款方案列于费用页面。</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>了解课程适合度与下一期开课。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>预约课程匹配沟通。课程团队会说明已公布的开课日期、马来西亚学员费用及雇主申请 HRD Corp 的流程。咨询不等于录取或付款承诺。</p></Reveal>
          <Reveal delay={80}>
            <div className="card" style={{ padding: 26, maxWidth: 520, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>
    </div>
  );
}
