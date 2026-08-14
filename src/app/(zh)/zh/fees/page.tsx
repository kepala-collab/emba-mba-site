import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/fees";
const content = CORE_PAGES_ZH.fees;

export const metadata = withSeo(path, {
  title: "学费、奖学金与 HRD Corp 索赔",
  description: "个人及企业高管 MBA 费用：2026 马来西亚学员奖学金价、每人 USD 2,500 全球线上课程、Right Dots Resources 本地报价及企业内部 MDP。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
