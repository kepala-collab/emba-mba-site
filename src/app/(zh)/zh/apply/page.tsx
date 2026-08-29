import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import GuideApplyPage from "@/components/site/GuideApplyPage";
import { withSeo } from "@/lib/seo";

const path = "/zh/apply";

export const metadata = withSeo(path, {
  title: "获取 Future Ready Executive MBA 课程指南",
  description: "免费下载 2026 课程指南，了解六个月的课程结构、已公布日期、费用、奖学金择优评估方式及 CMI 认可。",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "课程指南", path }]} />
      <GuideApplyPage locale="zh" source="zh-apply-guide" />
    </>
  );
}
