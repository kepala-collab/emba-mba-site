import Reveal from "@/components/site/Reveal";
import { OPERATOR, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/zh/privacy";

export const metadata = withSeo(path, {
  title: "隐私政策",
  description: "说明本网站如何依据马来西亚个人资料保护法，收集、使用、披露、保存及保护申请人与访客的个人资料。",
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <Reveal>
          <div className="eyebrow"><span className="l" /><span className="mono sec-k">法律</span></div>
          <h1 className="sec-h">隐私政策</h1>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>最后更新：2026 年 8 月 13 日</p>
        </Reveal>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>本政策说明本网站如何依据马来西亚《2010 年个人资料保护法》[Act 709] 及其修订处理个人资料。</p>
          <h2>资料控制者与课程提供者</h2>
          <p>本网站及申请表由 <strong>{OPERATOR.name}</strong>（注册号 {OPERATOR.reg}）运营，并作为 <strong>{SITE.provider}</strong> 的市场推广机构，负责课程咨询、报价与报名协调。课程由 <strong>{SITE.provider}</strong> 提供；申请资料会与其课程团队共享，用于处理咨询、资格评估、申请与报名。</p>
          <h2>我们收集的资料</h2>
          <p>包括姓名、电话、电子邮件、公司、职务、学员类型、留言、页面语言、来源页面、UTM 参数、广告点击识别码，以及托管服务所记录的 IP、浏览器与装置资料。</p>
          <h2>用途与共享</h2>
          <p>资料用于回复咨询、评估课程适配、处理报名、提供奖学金与 HRD Corp 指引、保障网站安全，以及在获得您允许后分析网站表现。为完成上述用途，资料会按需要提供给 {SITE.provider}，以及负责托管、数据库、电子邮件、分析或通讯的受委托服务商；我们不会出售个人资料。</p>
          <h2>课程资讯助手</h2>
          <p>可选用的课程资讯助手，会把课程问题及有限的近期对话内容，发送给受委托的 AI 推理服务商，以依据经核实的课程资料生成答案。请勿输入姓名、电话、电邮、身份证或付款资料。本网站会在发送前拦截常见的联系与身份资料格式，不会把助手对话视为报名申请，也不会在本网站数据库储存对话记录。托管、防滥用与 AI 推理服务商，会处理提供服务所需的安全与汇总使用资料。</p>
          <h2>储存、跨境处理与保留</h2>
          <p>当服务商在马来西亚境外处理资料时，我们会采取合理措施保障资料。资料仅在处理咨询、申请、业务与法律需要的期限内保存，之后予以删除或匿名化。</p>
          <h2>分析及隐私选择</h2>
          <p>必要储存用于安全防护与申请来源记录。可选的分析工具仅在您允许后才会加载；本网站默认不加载广告像素。您可随时通过页尾的「隐私选择」更改决定。</p>
          <h2>您的权利</h2>
          <p>在 PDPA 适用范围内，您可要求查阅或更正资料、撤回同意或限制处理。请电邮 <a href={`mailto:${SITE.email}`}>{SITE.email}</a> 或致电 {SITE.phone}。</p>
          <h2>联系资料</h2>
          <p>{OPERATOR.name}，{OPERATOR.address}。课程与申请联系人：{SITE.director}，<a href={`mailto:${SITE.email}`}>{SITE.email}</a>，{SITE.phone}。</p>
        </div>
      </div>
    </section>
  );
}
