import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { FACTS, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh", {
  title: `${FACTS.durationMonths} 个月 Executive MBA · 为在职管理者设计`,
  description: `专为在职管理者、企业主与高级领导者打造的 ${FACTS.durationMonths} 个月 Future Ready Executive MBA 专业发展课程。`,
  alternates: { canonical: "/zh" },
  openGraph: {
    type: "website",
    title: `${FACTS.durationMonths} 个月 Executive MBA · 为在职管理者设计`,
    description: "以真实企业课题，锤炼管理判断、决策与执行能力。",
    locale: "zh_MY",
    url: `${SITE.url}/zh`,
  },
});

export default function ZhHome() {
  return <FutureCommerceHome locale="zh" />;
}
