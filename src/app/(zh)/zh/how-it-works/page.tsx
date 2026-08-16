import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/how-it-works";
const content = CORE_PAGES_ZH.method;

export const metadata = withSeo(path, {
  title: "F.A.S.T. 管理决策方法",
  description: "了解 F.A.S.T. 如何帮助管理者界定企业问题、检验假设、比较选项，并制定可执行的行动方案。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
