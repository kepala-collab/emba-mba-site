import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/faculty";
const content = CORE_PAGES_ZH.faculty;

export const metadata = withSeo(path, {
  title: "课程导师与企业教练",
  description: "认识 Future Ready Executive MBA 的导师团队——横跨战略、运营、财务、人才、治理、变革与企业辅导的实战经验。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
