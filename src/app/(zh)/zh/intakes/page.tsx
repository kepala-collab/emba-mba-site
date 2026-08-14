import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/intakes";
const content = CORE_PAGES_ZH.intakes;

export const metadata = withSeo(path, {
  title: "2026 高管 MBA 英语及华语班开课日期",
  description: "查看 2026 年英语 Cohort 17–19 与华语 Cohort 2–3 的三个周末课程日期与时间。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
