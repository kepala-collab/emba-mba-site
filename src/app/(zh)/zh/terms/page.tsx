import Reveal from "@/components/site/Reveal";
import { OPERATOR, SITE } from "@/lib/content";
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
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>最后更新：2026 年 8 月 13 日</p>
        </Reveal>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>使用本网站或提交咨询，即表示您同意以下网站条款。正式报名、付款及退款以课程提供者签发的书面报名条款为准。</p>
          <h2>网站与课程提供者</h2>
          <p>本网站由 <strong>{OPERATOR.name}</strong>（注册号 {OPERATOR.reg}）运营，并作为本课程获授权的 Global 及本地课程合作伙伴，负责课程咨询、报价及报名协调。课程由 <strong>{SITE.provider}</strong> 提供及授课；两者为独立公司。</p>
          <h2>课程与资格说明</h2>
          <p>课程、费用、日期、奖学金及名额可能更改，须由课程团队最终确认。证书样本说明本课程依据 CMI 专业标准获得认可，并注明并非受监管资格；本课程也并非 MQA 认证的学术学位。</p>
          <h2>特许经理人</h2>
          <p>特许经理人（CMgr）是须另行向 CMI 申请的专业身份。完成课程不会自动取得 CMgr；经验、会员、评估、申请及费用要求均由 CMI 决定。</p>
          <h2>第一阶段退款安排</h2>
          <p>ABC 目前为参加首两个培训日后认为课程不适合的已报名学员提供退款安排。学员须在第一阶段后尽快通知课程团队、停止参与，并以可再次使用的状态归还所有教材。可退款金额及处理时间以 ABC 当前书面报名条款为准；公司付款及 HRD Corp 索赔可能需要额外取消程序。付款前请索取书面条款。</p>
          <h2>不作结果保证</h2>
          <p>本网站不保证录取、HRD Corp 批准、奖学金、就业、收入、晋升或任何商业成果。HRD Corp 资格、金额及批准由 HRD Corp 与雇主条件决定。</p>
          <h2>课程资讯助手</h2>
          <p>可选用的课程资讯助手以自动化 AI 依据限定的课程资料回答问题；答案可能不完整或不准确，并不构成录取、报价、奖学金、HRD Corp 或报名确认。请勿通过助手提交个人、身份、机密或付款资料。正式书面建议书及已签署的报名条款始终优先。</p>
          <h2>适用法律与联系</h2>
          <p>本条款受马来西亚法律管辖。查询请联系 {SITE.director}：<a href={`mailto:${SITE.email}`}>{SITE.email}</a>，{SITE.phone}。</p>
        </div>
      </div>
    </section>
  );
}
