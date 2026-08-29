import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/curriculum";
const content = CORE_PAGES_ZH.curriculum;

export const metadata = withSeo(path, {
  title: "课程大纲与 12 门领导力模块",
  description: "细看 Executive MBA 的 12 门模块、三个学习阶段、以真实企业课题为核心的应用项目，以及不设论文、不设传统考试的评估方式。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
