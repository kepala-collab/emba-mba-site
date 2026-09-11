import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import GuideApplyPage from "@/components/site/GuideApplyPage";
import { CTA_LABELS, FACTS, PROGRAMME_YEAR } from "@/lib/content";
import { ENQUIRY_COMMITMENT_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/apply";

export const metadata = withSeo(path, {
  title: CTA_LABELS.zh.guide,
  description: `${PROGRAMME_YEAR} 课程指南涵盖 ${FACTS.durationMonths} 个月的课程结构、已公布日期、标准费用、奖学金评估方式及 CMI 认可。${ENQUIRY_COMMITMENT_ZH}`,
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: `${PROGRAMME_YEAR} 年课程指南`, path }]} />
      <GuideApplyPage locale="zh" source="zh-apply-guide" />
    </>
  );
}
