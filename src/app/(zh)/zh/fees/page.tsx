import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/fees";
const content = CORE_PAGES_ZH.fees;

export const metadata = withSeo(path, {
  title: "学费、奖学金与 HRD Corp 申领",
  description: "Future Ready Executive MBA 标准费用为 RM10,000.00；符合资格的马来西亚申请者可择优接受奖学金评估，最终奖学金与应付费用均以书面个别确认。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
