import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeComparison from "@/components/site/ProgrammeComparison";
import { SITE, FACTS, INTAKES, CLIENTS } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH, PROGRAMME_AUDIENCE_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh", {
  title: "高管 MBA（英国 CMI 认可）· 六个月专业路径",
  description:
    "六个月专业路径：首三个月完成获英国 CMI 认可的 Executive MBA 课程证书阶段，随后三个月为符合条件者提供特许经理人评估准备支持。标准费用 RM10,000.00；马来西亚学员获 RM5,000.00 奖学金后实付 RM5,000.00。",
  alternates: {
    canonical: "/zh",
    languages: { "en": "/", "zh-Hans": "/zh", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    title: "高管 MBA（英国 CMI 认可）· 六个月专业路径",
    description: "首三个月完成课程证书阶段，随后三个月为符合 CMI 条件者提供特许经理人评估准备支持。HRD Corp 注册雇主须在开课前提交申请。",
    locale: "zh_MY",
    url: `${SITE.url}/zh`,
  },
  twitter: {
    title: "高管 MBA（英国 CMI 认可）· 六个月专业路径",
    description: "首三个月完成课程证书阶段，随后三个月为符合 CMI 条件者提供特许经理人评估准备支持。HRD Corp 注册雇主须在开课前提交申请。",
  },
});

const SOURCE = "zh-hub";

const FORCES_ZH = [
  "市场变化正在重塑价格与需求",
  "科技正在改变行业边界与商业模式",
  "AI 正在改变工作流程与决策方式",
  "客户需求持续变化",
  "竞争者正在调整其产品与运营方式",
];

const EDGE_ZH = [
  { i: "01 · 系统思维", h: "理解整体系统", p: "在决策前分析原因、相互依赖关系及潜在后果。" },
  { i: "02 · 第一性原理", h: "检验基本假设", p: "区分事实、限制与假设，再依据证据设计选项。" },
  { i: "03 · 设计整合", h: "结合分析与创新", p: "在战略逻辑、使用者需要及实际限制之间取得平衡。" },
  { i: "04 · 框架思维", h: "梳理复杂信息", p: "把复杂信息整理成可说明、可执行的决策。" },
  { i: "05 · 五重视角", h: "审视五个角度", p: "从五个明确的商业视角评估每项决定。" },
  { i: "06 · 4D 战略", h: "连接战略与执行", p: "以描绘、驱动、定义及交付组成连贯的规划流程。" },
  { i: "07 · 整体思维", h: "连接人才与业务", p: "综合考虑人才能力、创新及商业要求。" },
];

const FAQ_ZH = [
  { q: "课程如何安排？", a: "这是六个月专业路径。首三个月包含六个培训日、三个周末课程、辅导及企业项目，并在完成要求后取得获 CMI 认可的 Executive MBA 课程证书。第四至第六个月为符合 CMI 条件者提供特许经理人评估准备支持；CMgr MCMI 仅在通过 CMI 评估后授予。" },
  { q: "是否获 MQA 认证？", a: "否。本课程由英国特许管理协会（CMI）依据其专业标准批准及认可；完成者获 CMI 课程认可证书。本课程并非 MQA 认证的学术学位或受监管资格。" },
  { q: "如果无法出席某次课程怎么办？", a: "请在课程开始前联系课程团队。ABC 将以书面方式确认指定视频或指定后续班次的补课安排。" },
  { q: "公司可以使用 HRD Corp levy 吗？", a: HRD_CORP_CLAIM_ZH },
  { q: "适合谁参加？", a: PROGRAMME_AUDIENCE_ZH },
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
                  你的企业将由认为自己已<em style={{ color: "var(--crimson)", fontStyle: "normal" }}>“准备好迎接未来”</em>的人来经营。
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "40ch", margin: "22px 0 28px", lineHeight: 1.9 }}>
                  一个由英国特许管理协会（CMI）认可的六个月专业路径：<b style={{ color: "var(--ink)" }}>首三个月完成课程证书阶段，随后三个月准备 CMI 特许经理人评估</b>，
                  课程教授七套定义明确的思维框架。没有传统论文或考试；评估以学员自身企业的应用项目为基础。
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
                  <Link href="#apply" className="btn btn-primary">咨询课程 →</Link>
                  <Link href="#programme" className="btn btn-ghost">了解课程</Link>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                  <span className="chip"><Image src="/brand/cmi-logo.png" alt="英国特许管理协会 CMI" width={82} height={28} style={{ height: 28, width: "auto" }} /></span>
                  <span className="chip"><Image src="/brand/hrdcorp-badge.png" alt="HRD Corp 可索赔" width={38} height={38} style={{ height: 38, width: "auto" }} /></span>
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} 个培训日 · {FACTS.liveSessions} 次课程 · ABC 报告已完成 {FACTS.cohorts} 届</span>
                </div>
              </Reveal>
            </div>

            {/* form card */}
            <div className="zh-form">
              <Reveal delay={120}>
                <div className="card nested-form-card" id="apply-top" style={{ padding: 26, background: "linear-gradient(180deg,var(--surface),var(--bg-2))", border: "1px solid var(--line-2)" }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>课程咨询 · 无需付款</p>
                  <h2 style={{ fontSize: "1.3rem", color: "var(--ink)", marginBottom: 8, lineHeight: 1.3 }}>了解适合对象与下一期开课</h2>
                  <p className="fine" style={{ marginBottom: 18 }}>选择联系方式后，课程团队会说明适合对象、已公布日期、马来西亚奖学金及雇主申请 HRD Corp 的流程。</p>
                  <LeadForm programme="Executive MBA" source={SOURCE} lang="zh" placement="hero" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 课程对比 */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">敏捷度一览</span></div></Reveal>
          <Reveal><h2 className="sec-h">不仅比较名称，更要比较学习设计。</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ lineHeight: 1.9 }}>传统 MBA 的结构因院校而异；以下概览说明 Future Ready 高管 MBA 在时间、重点、评估、导师及工具方面的设计差异。</p></Reveal>
          <Reveal className="mt-m"><ProgrammeComparison lang="zh" compact /></Reveal>
        </div>
      </section>

      {/* TRUST */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg-2)" }}>
        <div className="wrap"><p className="mono center" style={{ color: "var(--muted)", marginBottom: 14, fontSize: ".78rem" }}>以下机构列于 ABC 的公司简介；列名不代表对本网站或课程作出认可</p></div>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
          {CLIENTS.slice(0, 9).map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-fraunces)", fontSize: "1rem", color: "var(--ink-2)", opacity: 0.7 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* WHY NOW */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">为什么是现在</span></div></Reveal>
          <Reveal><h2 className="sec-h">商业环境变化时，决策方法也需要更新。</h2></Reveal>
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
          <Reveal><h2 className="sec-h">七种思维方法，组成一套决策流程。</h2></Reveal>
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
          <Reveal><h2 className="sec-h">三个月取得课程证书，再用三个月准备 Chartered Manager 评估。</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gap: 16 }}>
            <Reveal>
              <div className="card">
                <div className="mono acc" style={{ fontSize: ".74rem", marginBottom: 8 }}>第 1–3 个月 · 共 3 次课程</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: 8 }}>Executive MBA 课程证书</h3>
                <p style={{ margin: 0, color: "var(--ink-2)", lineHeight: 1.9 }}>完成六个培训日及企业项目。证书说明本课程依据 CMI 专业标准获得认可；此课程并非受监管资格。</p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="card">
                <div className="mono acc" style={{ fontSize: ".74rem", marginBottom: 8 }}>第 4–6 个月 · 评估准备支持</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: 8 }}>特许经理人（CMgr）路径</h3>
                <p style={{ margin: 0, color: "var(--ink-2)", lineHeight: 1.9 }}>符合 CMI 条件的学员将在三个月内整理领导成果证据、准备书面申请及专业讨论。CMgr MCMI 仅在通过 CMI 独立评估后授予；经验、会员、评估及费用要求由 CMI 决定。</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CREDENTIAL */}
      <section id="credential" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">你将取得的证书</span></div></Reveal>
          <Reveal><h2 className="sec-h">课程获 CMI 批准、认可与背书；完成者获 CMI 课程认可证书。</h2></Reveal>
          <Reveal className="mt-m">
            <div className="zh-cert" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, alignItems: "center", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 10, border: "1px solid var(--line-2)" }}>
                <Image src="/brand/cmi-certificate.png" alt="英国 CMI 高管 MBA 证书样本" width={320} height={278} style={{ width: 280, height: "auto", display: "block", borderRadius: 4 }} />
              </div>
              <div>
                <p style={{ color: "var(--ink-2)", margin: 0, fontSize: "1rem", lineHeight: 1.9 }}>
                  课程依据 CMI 专业标准获批及认可；完成要求后获颁 CMI 课程认可证书。图中样本带有 CMI 首席执行官 Ann Francke OBE 的签名；CMI 决定正式证书的格式、文字及签署人。
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
          <Reveal><h2 className="sec-h">先确认完整费用、奖学金及资助流程。</h2></Reveal>
          <Reveal className="mt-m">
            <div className="zh-fees" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
              {[[`${FACTS.priceStd}`, "标准费用"], [`${FACTS.priceNet}`, "马来西亚学员实付"], ["开课前", "雇主提交 HRD Corp 申请"]].map(([b, s]) => (
                <div key={s} style={{ background: "var(--surface)", padding: "20px 16px", textAlign: "center" }}>
                  <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", display: "block", color: "var(--ink)" }}>{b}</b>
                  <span className="mono" style={{ fontSize: ".62rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal><p className="fine mt-s" style={{ lineHeight: 1.8 }}>标准费用为 {FACTS.priceStd}；LIFE Innoversity 为马来西亚学员提供 {FACTS.scholarshipAmt} 奖学金，学员实付 {FACTS.priceNet}。{HRD_CORP_CLAIM_ZH} 个人分期方案列于费用页面。全球线上公开课程：每人 {FACTS.priceIntl}。</p></Reveal>
        </div>
      </section>

      {/* INTAKES */}
      <section id="intakes" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 开课日期</span></div></Reveal>
          <Reveal><h2 className="sec-h">英语及华语班排期已公布。</h2></Reveal>
          <div className="insight-grid mt-m">
            {INTAKES.map((it, i) => (
              <Reveal key={it.co} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h3 style={{ fontSize: "1.2rem" }}>{it.language === "Mandarin" ? "华语" : "英语"} {it.co}</h3>
                    <span className="pill" style={{ fontSize: ".64rem" }}>{it.seats === "Open" ? "开放中" : "即将满额"}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6, color: "var(--ink-2)", fontSize: ".92rem" }}>
                    <li>第一次：{it.s1}</li>
                    <li>第二次：{it.s2}</li>
                    <li>第三次：{it.s3}</li>
                    <li>{it.days === "Sat–Sun" ? "星期六至星期日" : "星期五至星期六"} · {it.time}</li>
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
          <Reveal><h2 className="sec-h">报名之前需要确认的事项。</h2></Reveal>
          <div className="mt-m" style={{ display: "grid", gap: 14 }}>
            {FAQ_ZH.map((f) => (
              <Reveal key={f.q}>
                <div className="card">
                  <h3 style={{ fontSize: "1.08rem", marginBottom: 8, color: "var(--ink)" }}>{f.q}</h3>
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
              <h2 className="sec-h">先确认课程是否符合你的目标。</h2>
              <p className="sec-sub" style={{ lineHeight: 1.9 }}>你可预约简短通话、线上说明会、面谈，或先收取资料。课程团队会说明适合对象、已公布日期、马来西亚奖学金及雇主申请 HRD Corp 的流程；咨询不等于录取或付款承诺。</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
                {["一对一沟通你的目标与适合度", "已公布的 2026 班次日期", "马来西亚学员费用与雇主申请 HRD Corp 的流程"].map((t) => (
                  <li key={t} style={{ paddingLeft: 26, position: "relative", color: "var(--ink-2)" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--crimson)" }}>→</span>{t}
                  </li>
                ))}
              </ul>
              <p className="fine" style={{ marginTop: 22 }}>{SITE.director} · 课程协调员 · {SITE.phone} · {SITE.email}</p>
            </Reveal>
            <Reveal delay={80}>
              <aside className="card conversation-choice-card">
                <p className="mono sec-k">由你选择下一步</p>
                <h3>先看资料，或在准备好时再沟通。</h3>
                <p>你可继续查看完整课程、学费与开课日期。若希望课程团队按你选择的方式联系，请使用独立咨询页面。</p>
                <div className="working-hero-actions">
                  <Link href="/zh/apply" className="btn btn-primary">选择沟通方式 →</Link>
                  <Link href="/zh/fees" className="text-action">查看完整费用 →</Link>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .zh-hero{grid-template-columns:1fr!important;gap:30px!important}
          .zh-cert{grid-template-columns:1fr!important}
          .zh-fees{grid-template-columns:1fr!important}
          .zh-apply{grid-template-columns:1fr!important;gap:34px!important}
        }
      `}</style>
    </div>
  );
}
