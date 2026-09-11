import ChineseCorePage from "@/components/site/ChineseCorePage";
import { FACTS } from "@/lib/content";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/fees";
const content = CORE_PAGES_ZH.fees;

export const metadata = withSeo(path, {
  title: "学费、奖学金与 HRD Corp 申领",
  description: `${FACTS.priceStd} 标准费用；${FACTS.scholarshipProvider} 奖学金个别评估，以书面确认，并非自动授予。`,
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
