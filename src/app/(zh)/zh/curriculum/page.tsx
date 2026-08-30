import ChineseCorePage from "@/components/site/ChineseCorePage";
import { FACTS } from "@/lib/content";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/curriculum";
const content = CORE_PAGES_ZH.curriculum;

export const metadata = withSeo(path, {
  title: `课程大纲与 ${FACTS.moduleCount} 门领导力模块`,
  description: `细看 Executive MBA 的 ${FACTS.moduleCount} 门模块、三个学习阶段、以真实企业课题为核心的企业应用项目，以及不设论文、不设传统考试的评估方式。`,
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
