import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/about", {
  title: "关于 Future Ready Executive MBA｜认识 Roy Affandi",
  description: "认识课程协调人 Roy Affandi，看看 Future Ready Executive MBA 为马来西亚专业人士与企业领导者而设的初心。",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "关于我们", path: "/zh/about" }]} />
      <section className="section">
        <div className="wrap about-affandi-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg-2)" }}>
              <Image src="/brand/community/affandi-portrait.webp" alt="Roy Affandi" width={1122} height={1403} sizes="(max-width: 760px) 100vw, 42vw" style={{ width: "100%", height: "auto", display: "block" }} priority />
            </figure>
          </Reveal>
          <Reveal delay={70}>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">关于 Future Ready</span></div>
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}.</h1>
              <p className="sec-sub">课程协调人</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>对 Roy Affandi 来说，初心很简单：帮更多马来西亚人在事业、企业与社区里不断向前。</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>三十多年里，他在银行与金融、企业传播、销售与市场、房地产开发及企业战略等领域一路走来，深知进步很少是一条直线——要紧的是看清局面、稳稳走出下一步，然后一直走下去。</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="editorial-standards" className="section editorial-standards-anchor">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px,4vw,44px)" }}>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">课程团队</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", maxWidth: "22ch" }}>从设计课程的人，到解答您疑问的人，责任线一清二楚。</h2>
              <p className="sec-sub" style={{ maxWidth: "62ch" }}><strong>Asian Business Consulting（ABC）</strong>是 HRD Corp 注册培训机构，为专业人士与企业设计并交付自家的招牌课程，Future Ready Executive MBA, CMI (UK) 便是其一。</p>
              <p className="fine" style={{ maxWidth: "62ch", marginTop: 18 }}>这门面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书，是 Asian Business Consulting 设计并交付的六个月专业发展课程。Right Dots Resources 是其 Associate Partner，负责课程咨询与报名协调。已注册 HRD Corp 的马来西亚雇主须在开课前经 e-TRiS 递交 grant 申请；资格与批准金额由 HRD Corp 裁定。</p>
              <Link href="/zh/asian-business-consulting" className="text-action" style={{ marginTop: 16 }}>进一步了解 Asian Business Consulting <span aria-hidden="true">↗</span></Link>
              <figure className="partnership-seal">
                <Image src="/brand/partnership-seal.webp" alt="Asian Business Consulting 与 Right Dots Resources 战略合作" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
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
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.35rem)", maxWidth: "16ch" }}>让更多马来西亚人往前走。</h2>
              <p className="sec-sub">商业环境瞬息万变，判断力过硬，人才站得稳。</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi 曾任职于马来西亚国家银行行长办公室，也在私人领域担任企业战略与业务的高层职务。他持马来亚大学经济学（荣誉）学位（分析方向），在墨尔本大学完成研究生课程，并为英国 CMI 会员。</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>如今，市场、客户期望与技术都在加速变化，AI 更在重塑领导者下判断前要权衡的种种信息。出路不在于更多噪音，也不在于为理论而理论，而在于一套实用的框架——帮人问出更好的问题、把事情想清楚、然后果断出手。</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg)" }}>
              <Image src="/brand/community/about-affandi.webp" alt="Roy Affandi 的生活片段" width={1440} height={2560} sizes="(max-width: 760px) 100vw, 46vw" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption className="fine" style={{ padding: "12px 16px 14px" }}>做的是专业的事，怀的是私人的心：帮人搭起更稳的未来。</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <CtaSection lang="zh" programme="Executive MBA" heading="就 Future Ready Executive MBA，与课程团队聊聊。" sub="可选通话、线上会议、面谈或电邮。课程团队会解答关于适配度、日期、费用、认可，以及由雇主主导的 HRD Corp 资助等问题；咨询不代表报名或付款承诺。" />
      <style>{`@media(max-width:760px){.about-affandi-grid,.about-story-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
