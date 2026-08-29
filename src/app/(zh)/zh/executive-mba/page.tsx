import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/executive-mba";
const content = CORE_PAGES_ZH.programme;

export const metadata = withSeo(path, {
  title: "Executive MBA 课程详情（英国 CMI 认可）",
  description: "深入了解 Future Ready Executive MBA 的课程结构、适合对象与学习成果，以及 CMI 认可与 MQA 学术学位之间的区别。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
