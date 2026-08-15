import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { withSeo } from "@/lib/seo";

const path = "/zh/apply";

export const metadata = withSeo(path, {
  title: "预约 Future Ready 高管 MBA 课程沟通",
  description: "选择简短通话、线上说明会、在双方同意的地点面谈或先收取资料；提交咨询不等于录取或付款。",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "申请", path }]} />
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">先沟通，再决定</span></div>
            <h1 className="sec-h">选择最适合您的了解方式</h1>
            <p className="sec-sub">可选择简短通话、线上说明会、在双方同意的地点面谈，或先收取资料。提交资料不等于录取或付款承诺。</p>
          </Reveal>
          <Reveal className="mt-m">
            <h2 className="sec-h" style={{ fontSize: "1.55rem", marginBottom: 18 }}>告诉我们你希望如何继续</h2>
            <LeadForm source="zh-apply" programme="Executive MBA" lang="zh" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
