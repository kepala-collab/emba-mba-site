import ChineseCorePage from "@/components/site/ChineseCorePage";
import { FACTS } from "@/lib/content";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/how-it-works";
const content = CORE_PAGES_ZH.method;

export const metadata = withSeo(path, {
  title: `${FACTS.durationMonths} 个月内，会有什么改变`,
  description: `看看在每次研习课内外您会做什么、那份经导师评审的书面行动方案，以及 ${FACTS.durationMonths} 个月结束后留下的东西。`,
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
