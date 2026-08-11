import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import { SITE, FACTS, INTAKES, CLIENTS } from "@/lib/content";

export const metadata = {
  title: "高管 MBA（英国 CMI 认可）· 3 个月 · HRD Corp 可索赔 | Future Ready",
  description:
    "由英国特许管理协会（CMI）认可的高管 MBA —— 3 个月周末授课取得认证，再进阶至特许经理人（CMgr）。RM10,000 → RM6,000（含奖学金），HRD Corp 可索赔。免费报名。",
  alternates: {
    canonical: "/zh",
    languages: { "en": "/", "zh-Hans": "/zh", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    title: "高管 MBA（英国 CMI 认可）· 3 个月取得认证",
    description: "3 个月周末授课，取得英国 CMI 认可的高管 MBA，再进阶特许经理人。RM6,000 起，HRD Corp 可索赔。",
    locale: "zh_MY",
    url: `${SITE.url}/zh`,
  },
};

const SOURCE = "zh-hub";

const FORCES_ZH = [
  "市场正在一夜之间重新定价",
  "科技正在瓦解整个行业",
  "AI 正在改写工作的方式",
  "客户期待去年还不存在的东西",
  "竞争对手的适应速度比你更快",
];

const EDGE_ZH = [
  { i: "01 · 系统思维", h: "看清全局", p: "在行动前，把因果推演到第三层后果。" },
  { i: "02 · 第一性原理", h: "拆解到本质", p: "把问题拆到最小单位，再重建出颠覆性的答案。" },
  { i: "03 · 设计整合", h: "融合逻辑与创意", p: "在同一步棋中同时掌握战略与想象力。" },
  { i: "04 · 框架思维", h: "为混沌立序", p: "把压倒性的复杂，转化为可执行的决策。" },
  { i: "05 · 五重视角", h: "以五个视角思考", p: "从多数领导者看不到的角度，压力测试每一个决定。" },
  { i: "06 · 4D 战略", h: "对齐各方力量", p: "描绘、驱动、定义与交付 —— 汇聚成一套连贯战略。" },
  { i: "07 · 整体思维", h: "连接人与业务", p: "对齐人才、创新与增长，创造真正的影响力。" },
];

const FAQ_ZH = [
  { q: "课程如何安排？", a: "全程 6 个月。前 3 个月 —— 每月一个周末，共三次课程 —— 取得英国 CMI 的高管 MBA 认证；后 3 个月进阶至特许经理人（CMgr）。所有内容都应用到您自己的企业，深度来自实践而非课时。没有考试，没有论文。" },
  { q: "是否获 MQA 认证？", a: "否 —— MQA 管辖的是学术学位。本课程是由英国特许管理协会（CMI）认可的专业课程，享有全球认可。它刻意不是一个学术学位。" },
  { q: "我太忙，无法全程出席。", a: "课程每月一个周末。错过一次可通过视频补课，或在往后的班次重修 —— 不设惩罚。" },
  { q: "公司可以索赔吗？", a: "可以 —— 符合条件的马来西亚雇主可通过 HRD Corp 索赔；个人也可选择分期付款。" },
  { q: "适合谁参加？", a: "企业主、董事、总经理与高级管理者 —— 通常为 35–55 岁、拥有 10 年以上经验 —— 需要领导转型，而不仅仅是管理运营的人。" },
];

export default function ZhHome() {
  return (
    <div lang="zh-Hans">
      {/* HERO */}
      <section className="section" style={{ borderBottom: "none", paddingTop: "clamp(44px,6vw,80px)" }}>
        <div className="wrap">
          <div className="zh-hero" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">英国 CMI 认可 · HRD Corp 可索赔</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.2rem,4.8vw,3.5rem)", letterSpacing: "-.01em", lineHeight: 1.14, marginTop: 6 }}>
                  你的企业，终将由<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>思考最出色</em>的人掌舵。确保那个人是你。
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "40ch", margin: "22px 0 28px", lineHeight: 1.9 }}>
                  一个由英国特许管理协会（CMI）认可的高管 MBA，在 <b style={{ color: "#fff" }}>3 个月、每月一个周末</b> 内，
                  为你装上顶尖领导者的思维框架。没有论文，没有考试 —— 只有更锋利的头脑，以及一份属于你自己企业的转型方案。
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
                  <Link href="#apply" className="btn btn-primary">立即报名 →</Link>
                  <Link href="#programme" className="btn btn-ghost">了解课程</Link>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="英国特许管理协会 CMI" width={82} height={28} style={{ height: 28, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp 可索赔" width={38} height={38} style={{ height: 38, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>已培养 {FACTS.gradsApprox} 位领导者 · {FACTS.cohorts} 届</span>
                </div>
              </Reveal>
            </div>

            {/* form card */}
            <div className="zh-form">
              <Reveal delay={120}>
                <div className="card" id="apply-top" style={{ padding: 26, background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)" }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>免费 · 两分钟</p>
                  <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>查询你的资格与下一期开课</h2>
                  <p className="fine" style={{ marginBottom: 18 }}>留下资料，我们的课程团队会尽快回电 —— 说明适合度、开课日期、奖学金与 HRD Corp，无需承诺。</p>
                  <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>师资曾受托培养这些机构的领导者</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.6 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* WHY NOW */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">为什么是现在</span></div></Reveal>
          <Reveal><h2 className="sec-h">昨天让你成功的思维，正是今天困住你的原因。</h2></Reveal>
          <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gap: 12 }}>
            {FORCES_ZH.map((f, i) => (
              <Reveal key={f}>
                <li style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
                  <span className="mono acc" style={{ fontSize: ".8rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: "var(--ink-2)", fontSize: "1.05rem" }}>{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">教学方法</span></div></Reveal>
          <Reveal><h2 className="sec-h">真正改变的，是你判断的方式 —— 七种思维。</h2></Reveal>
          <div className="insight-grid mt-m">
            {EDGE_ZH.map((t, i) => (
              <Reveal key={t.i} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>{t.i}</div>
                  <h3 style={{ fontSize: "1.12rem", marginBottom: 8 }}>{t.h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.8 }}>{t.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">课程结构</span></div></Reveal>
          <Reveal><h2 className="sec-h">6 个月，两个阶段。</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gap: 16 }}>
            <Reveal>
              <div className="card">
                <div className="mono acc" style={{ fontSize: ".74rem", marginBottom: 8 }}>第 1–3 个月 · 共 3 次课程</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: 8 }}>英国 CMI 认证</h3>
                <p style={{ margin: 0, color: "var(--ink-2)", lineHeight: 1.9 }}>取得「面向未来的商业领导力」高管 MBA 认证，由英国特许管理协会（CMI）颁发 —— 每月一个周末，共三次课程。</p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="card">
                <div className="mono acc" style={{ fontSize: ".74rem", marginBottom: 8 }}>第 4–6 个月</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: 8 }}>特许经理人（CMgr）</h3>
                <p style={{ margin: 0, color: "var(--ink-2)", lineHeight: 1.9 }}>进阶至特许经理人资格 —— 管理领域的特许专业身份，地位相当于金融领域的特许会计师。</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CREDENTIAL */}
      <section id="credential" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">你将取得的证书</span></div></Reveal>
          <Reveal><h2 className="sec-h">获英国 CMI 认可 —— 由其首席执行官亲笔签署。</h2></Reveal>
          <Reveal className="mt-m">
            <div className="zh-cert" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, alignItems: "center", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 10, border: "1px solid var(--line-2)" }}>
                <Image src="/brand/cmi-certificate.png" alt="英国 CMI 高管 MBA 证书样本" width={320} height={278} style={{ width: 280, height: "auto", display: "block", borderRadius: 4 }} />
              </div>
              <div>
                <p style={{ color: "var(--ink-2)", margin: 0, fontSize: "1rem", lineHeight: 1.9 }}>
                  你的「面向未来的商业领导力」高管 MBA，依据 CMI 专业标准获得认可。CMI 是全球拥有超过 {FACTS.cmiMembers} 名会员的管理专业机构。（图为证书样本。）
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">学费投资</span></div></Reveal>
          <Reveal><h2 className="sec-h">同等的公信力，只需一小部分的时间与费用。</h2></Reveal>
          <Reveal className="mt-m">
            <div className="zh-fees" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
              {[[`${FACTS.priceStd}`, "标准学费"], [`${FACTS.priceNet}`, "含 RM4,000 奖学金后"], ["100%", "HRD Corp 可索赔"]].map(([b, s]) => (
                <div key={s} style={{ background: "var(--surface)", padding: "20px 16px", textAlign: "center" }}>
                  <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", display: "block", color: "#fff" }}>{b}</b>
                  <span className="mono" style={{ fontSize: ".62rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal><p className="fine mt-s" style={{ lineHeight: 1.8 }}>马来西亚学员可享 RM4,000 奖学金（实付 RM6,000）· 符合条件的雇主 100% HRD Corp 可索赔 · 提供分期付款。国际学员：{FACTS.priceIntl}。</p></Reveal>
        </div>
      </section>

      {/* INTAKES */}
      <section id="intakes" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 开课日期</span></div></Reveal>
          <Reveal><h2 className="sec-h">三个班次开放报名。</h2></Reveal>
          <div className="insight-grid mt-m">
            {INTAKES.map((it, i) => (
              <Reveal key={it.co} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h3 style={{ fontSize: "1.2rem" }}>{it.co.replace("Cohort", "第").concat(" 届")}</h3>
                    <span className="pill" style={{ fontSize: ".64rem" }}>{it.seats === "Open" ? "开放中" : "即将满额"}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6, color: "var(--ink-2)", fontSize: ".92rem" }}>
                    <li>第一次：{it.s1}</li>
                    <li>第二次：{it.s2}</li>
                    <li>第三次：{it.s3}</li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">常见问题</span></div></Reveal>
          <Reveal><h2 className="sec-h">你可能想知道的。</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gap: 14 }}>
            {FAQ_ZH.map((f) => (
              <Reveal key={f.q}>
                <div className="card">
                  <h3 style={{ fontSize: "1.08rem", marginBottom: 8, color: "#fff" }}>{f.q}</h3>
                  <p style={{ margin: 0, color: "var(--ink-2)", lineHeight: 1.9, fontSize: ".95rem" }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="zh-apply" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start" }}>
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">索取资讯</span></div>
              <h2 className="sec-h">下一届不会等人。你的思维也不该等。</h2>
              <p className="sec-sub" style={{ lineHeight: 1.9 }}>立即报名，我们的课程团队将与你联系，说明适合度、下一期开课、HRD Corp 索赔与奖学金资格。无需承诺。</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
                {["一对一沟通你的目标与适合度", "2026 各班次名额与排期", "HRD Corp 索赔与奖学金资格"].map((t) => (
                  <li key={t} style={{ paddingLeft: 26, position: "relative", color: "var(--ink-2)" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--crimson)" }}>→</span>{t}
                  </li>
                ))}
              </ul>
              <p className="fine" style={{ marginTop: 22 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ padding: 26 }}>
                <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .zh-hero{grid-template-columns:1fr!important;gap:30px!important}
          .zh-form{order:-1}
          .zh-cert{grid-template-columns:1fr!important}
          .zh-fees{grid-template-columns:1fr!important}
          .zh-apply{grid-template-columns:1fr!important;gap:34px!important}
        }
      `}</style>
    </div>
  );
}
