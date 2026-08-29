import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/how-it-works";
const content = CORE_PAGES_ZH.method;

export const metadata = withSeo(path, {
  title: "F.A.S.T. 管理决策方法",
  description: "看 F.A.S.T. 如何帮助管理者厘清企业问题、验证假设、权衡方案，并落实为可执行的行动计划。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
