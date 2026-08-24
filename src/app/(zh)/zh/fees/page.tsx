import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/fees";
const content = CORE_PAGES_ZH.fees;

export const metadata = withSeo(path, {
  title: "学费、奖学金与 HRD Corp 索赔",
  description: "Future Ready 高管 MBA 费用：标准费用 RM10,000；符合资格的马来西亚申请者可申请 RM4,000 LIFE Innoversity 奖学金，获批者实付 RM6,000。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
