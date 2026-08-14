import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/curriculum";
const content = CORE_PAGES_ZH.curriculum;

export const metadata = withSeo(path, {
  title: "课程大纲与 12 个领导力模块",
  description: "查看高管 MBA 的十二个模块、三个学习阶段、企业项目及无论文、无传统考试的评估方式。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
