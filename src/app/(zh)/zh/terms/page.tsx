import Reveal from "@/components/site/Reveal";
import { FACTS, OPERATOR, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_ZH, REFUND_TERMS_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/terms";

export const metadata = withSeo(path, {
  title: "条款与条件",
  description: "使用 Future Ready 高管 MBA 网站、提交咨询、课程资料、退款安排、专业课程性质及适用法律的条款。",
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <Reveal>
          <div className="eyebrow"><span className="l" /><span className="mono sec-k">法律</span></div>
          <h1 className="sec-h">条款与条件</h1>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>最后更新：2026 年 8 月 14 日</p>
        </Reveal>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>使用本网站或提交咨询，即表示您同意以下网站条款。正式报名、付款及退款以课程提供者签发的书面报名条款为准。</p>
          <h2>网站与课程提供者</h2>
          <p>本网站由 <strong>{OPERATOR.name}</strong>（注册号 {OPERATOR.reg}）运营，并作为 <strong>{SITE.provider}</strong> 的市场推广机构，负责课程咨询、报价及报名协调。课程由 <strong>{SITE.provider}</strong> 提供及授课；两者为独立公司。</p>
          <h2>课程与资格说明</h2>
          <p>本网站公布 ABC 提供的课程资料。适用于每名学员的书面建议书及已签署报名条款列明价格、交付方式、完成要求及证书。如 ABC 更改已公布日期，已报名学员将收到书面替代日期。面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书；并非 MQA 认证的学术学位或受监管资格。</p>
          <h2>特许经理人</h2>
          <p>特许经理人（CMgr）是须另行向 CMI 申请的专业身份。完成课程不会自动取得 CMgr；经验、会员、评估、申请及费用要求均由 CMI 决定。</p>
          <h2>退款安排</h2>
          <p>{REFUND_TERMS_ZH} 已签署条款也列明公司付款及 HRD Corp grant 的取消程序；如本网站与已签署条款不一致，以已签署条款为准。</p>
          <h2>不作结果保证</h2>
          <p>本网站不保证录取、奖学金、HRD Corp 批准、就业、收入、晋升或任何商业成果。标准费用为 {FACTS.priceStd}。符合资格的马来西亚申请者可接受 {FACTS.scholarshipProvider} 奖学金评估；任何奖学金金额及应付费用均会个别以书面确认。{HRD_CORP_CLAIM_ZH}</p>
          <h2>课程资讯助手</h2>
          <p>可选用的课程资讯助手以自动化 AI 依据限定的课程资料回答问题。AI 答案仅供参考，并不构成录取、报价、奖学金、HRD Corp 或报名确认。请勿通过助手提交个人、身份、机密或付款资料。正式书面建议书及已签署的报名条款始终优先。</p>
          <h2>营销通讯</h2>
          <p>当您订阅、索取课程指南或提交咨询，即表示您同意接收课程团队发送的 Future Ready Executive MBA 课程资讯及营销通讯（通过电子邮件；如您提供电话号码，亦可能通过 WhatsApp 或电话联系）。您可随时通过营销邮件中的退订选项或联系 <a href="mailto:support@futurereadymba.com">support@futurereadymba.com</a> 撤回同意；撤回不影响我们回复您已提出的咨询。个人资料依据马来西亚 2010 年个人资料保护法（第 709 号法令）及其修订处理。</p>
          <h2>适用法律与联系</h2>
          <p>本条款受马来西亚法律管辖。查询请联系 {SITE.director}：<a href={`mailto:${SITE.email}`}>{SITE.email}</a>，{SITE.phone}。</p>
        </div>
      </div>
    </section>
  );
}
