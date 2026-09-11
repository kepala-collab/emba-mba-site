import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { FACTS, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh", {
  title: `${FACTS.durationMonths} 个月 Executive MBA · 专为在职管理者而设`,
  description: `专为在职管理者、企业主与企业高层而设的 ${FACTS.durationMonths} 个月 Future Ready Executive MBA 专业发展课程。`,
  alternates: { canonical: "/zh" },
  openGraph: {
    type: "website",
    title: `${FACTS.durationMonths} 个月 Executive MBA · 专为在职管理者而设`,
    description: "带一个手上的企业课题来，写成团队可落实的行动方案。",
    locale: "zh_MY",
    url: `${SITE.url}/zh`,
  },
});

export default function ZhHome() {
  return <FutureCommerceHome locale="zh" />;
}
