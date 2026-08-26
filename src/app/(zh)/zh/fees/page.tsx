import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/fees";
const content = CORE_PAGES_ZH.fees;

export const metadata = withSeo(path, {
  title: "学费、奖学金与 HRD Corp 索赔",
  description: "Future Ready 高管 MBA 标准费用为 RM10,000；符合资格的马来西亚申请者可接受奖学金评估，任何奖学金金额及应付费用均会个别以书面确认。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
