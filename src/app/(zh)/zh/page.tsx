import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh", {
  title: "六个月高管 MBA · 为在职管理者设计",
  description: "为在职管理者、企业主及高级领导者设计的六个月 Future Ready Executive MBA 专业发展课程。",
  alternates: { canonical: "/zh" },
  openGraph: {
    type: "website",
    title: "六个月高管 MBA · 为在职管理者设计",
    description: "通过真实企业课题提升管理判断、决策与执行能力。",
    locale: "zh_MY",
    url: `${SITE.url}/zh`,
  },
});

export default function ZhHome() {
  return <FutureCommerceHome locale="zh" />;
}
