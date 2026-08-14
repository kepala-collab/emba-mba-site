import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import { SITE, FACTS, CLIENTS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/lp/meta", {
  title: "你不是不够努力，而是思维的方式跟不上了。| Future Ready 高管 MBA",
  description:
    "专为在职领导者打造的六个月专业路径：首三个月完成获英国 CMI 认可的课程证书阶段，随后三个月准备 CMI 特许经理人评估。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/zh/lp/meta", languages: { en: "/lp/meta", "zh-Hans": "/zh/lp/meta" } },
});

const SOURCE = "lp-meta-zh";

const EDGE = [
  ["看清全局", "在行动前，把因果推演到第三层后果。"],
  ["拆解到本质", "把问题拆到最小单位，再重建出颠覆性的答案。"],
  ["融合逻辑与创意", "在同一步棋中同时掌握战略与想象力。"],
  ["为混沌立序", "把压倒性的复杂，转化为可执行的决策。"],
  ["以五个视角思考", "从多数领导者看不到的角度，压力测试每个决定。"],
  ["连接人与业务", "对齐人才、创新与增长，创造真正的影响力。"],
];

const WALK = [
  "三次课程的现场引导，由实战导师主讲",
  "个人领导力诊断，精准指出思维的盲点",
  "一对一高管教练，应用于你真实的企业",
  "一套终身保留的框架与工具库（LMS）",
  "一个可呈董事会的真实转型项目",
  "课程获 CMI（英国）认可，CMgr 须另行申请",
];

export default function ZhMetaLP() {
  return (
    <div lang="zh-Hans">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">献给不愿再原地踏步的领导者</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              你会卡住，不是因为不够努力 —— 而是因为<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>思维</em>不再随你成长。
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              一个由英国 CMI 认可的六个月专业路径：首三个月以每月一个周末完成课程证书阶段；随后三个月为符合条件者准备 CMI 特许经理人评估。无需暂停事业，并完成一份属于你自己企业的转型方案。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">看看你是否符合资格 →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <span className="chip"><Image src="/brand/cmi-logo.png" alt="CMI（英国）" width={78} height={26} style={{ height: 26, width: "auto" }} /></span>
              <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp 可索赔" width={36} height={36} style={{ height: 36, width: "auto" }} /></span>
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.gradsApprox} 位领导者 · {FACTS.cohorts} 届</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">真正改变的</span></div></Reveal>
          <Reveal><h2 className="sec-h">你的判断，将在六个方面升级。</h2></Reveal>
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
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>师资曾受托培养这些机构的领导者</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.7 }}>{c}</span>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">你将带走的</span></div></Reveal>
          <Reveal><h2 className="sec-h">不是一纸束之高阁的证书，而是一个截然不同的操盘者。</h2></Reveal>
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
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>{FACTS.priceStd} 标准费用 → 马来西亚学员实付 <b style={{ color: "#fff" }}>{FACTS.priceNet}</b>（LIFE Innoversity 奖学金 {FACTS.scholarshipAmt}）· 合资格雇主可在开课前申请最高 100% 的获批准课程费用，须视 HRD Corp 批准及 levy 余额而定 · 提供分期付款。</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>看看你是否符合下一届的资格。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>免费报名，我们的课程团队会诚实告诉你是否合适 —— 以及下一期开课、奖学金与 HRD Corp 索赔。无需承诺。</p></Reveal>
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
