import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/about", {
  title: "关于 Future Ready 高管 MBA｜认识 Roy Affandi",
  description: "认识课程协调人 Roy Affandi，了解 Future Ready 高管 MBA 为马来西亚专业人士及企业领导者设立的初衷。",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "关于我们", path: "/zh/about" }]} />
      <section className="section">
        <div className="wrap about-affandi-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg-2)" }}>
              <Image src="/brand/community/affandi-portrait.png" alt="Roy Affandi" width={1122} height={1403} sizes="(max-width: 760px) 100vw, 42vw" style={{ width: "100%", height: "auto", display: "block" }} priority />
            </figure>
          </Reveal>
          <Reveal delay={70}>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">关于 Future Ready</span></div>
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}.</h1>
              <p className="sec-sub">课程协调人</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>对 Roy Affandi 而言，初衷很简单：帮助更多马来西亚人在事业、企业与社区中继续向前。</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>他在银行与金融、企业传播、销售与市场、房地产发展及企业战略领域累积超过三十年经验，深知进步很少是一条直线——关键在于看清局面、作出下一个稳妥的决定，然后持续前行。</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px,4vw,44px)" }}>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">课程团队</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", maxWidth: "22ch" }}>从课程设计到回答您问题的人，责任线清晰可见。</h2>
              <p className="sec-sub" style={{ maxWidth: "62ch" }}><strong>Asian Business Consulting（ABC）</strong>是 HRD Corp 注册培训机构，为专业人士及企业设计并交付其签名课程；Future Ready Executive MBA, CMI (UK) 是其中之一。</p>
              <p className="fine" style={{ maxWidth: "62ch", marginTop: 18 }}>面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书，是由 Asian Business Consulting 设计及交付的三个月专业发展课程。Right Dots Resources 是其 Associate Partner，负责课程咨询及报名协调。HRD Corp 注册马来西亚雇主须在开课前通过 e-TRiS 提交 grant 申请；资格及批准金额由 HRD Corp 决定。</p>
              <Link href="/zh/asian-business-consulting" className="text-action" style={{ marginTop: 16 }}>进一步了解 Asian Business Consulting <span aria-hidden="true">↗</span></Link>
              <figure className="partnership-seal">
                <Image src="/brand/partnership-seal.png" alt="Asian Business Consulting 与 Right Dots Resources 战略合作" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
                <figcaption className="mono sec-k">Asian Business Consulting × Right Dots Resources · in collaboration</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap about-story-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">来自马来西亚的视角</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.35rem)", maxWidth: "16ch" }}>让更多马来西亚人向前迈进。</h2>
              <p className="sec-sub">商业环境瞬息万变，良好的判断力让人站得更稳。</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi 曾在马来西亚国家银行行长办公室任职，并在私人领域担任企业战略及业务高层职务。他持有马来亚大学经济学（荣誉）学位（分析方向），在墨尔本大学完成研究生课程，并且是英国 CMI 会员。</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>今天，市场、客户期望与技术的变化不断加快，AI 正在改变领导者决策前必须权衡的信息。答案不是更多噪音，也不是为理论而理论，而是实用的框架——帮助人们提出更好的问题、清晰思考、果断行动。</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg)" }}>
              <Image src="/brand/community/about-affandi.jpeg" alt="Roy Affandi 的生活片段" width={1440} height={2560} sizes="(max-width: 760px) 100vw, 46vw" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption className="fine" style={{ padding: "12px 16px 14px" }}>工作是专业的，初衷是个人的：帮助人们建立更稳固的未来。</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <CtaSection lang="zh" programme="Executive MBA" heading="与课程团队沟通 Future Ready 高管 MBA。" sub="选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。" />
      <style>{`@media(max-width:760px){.about-affandi-grid,.about-story-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
