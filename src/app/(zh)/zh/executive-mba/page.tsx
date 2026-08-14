import ChineseCorePage from "@/components/site/ChineseCorePage";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { withSeo } from "@/lib/seo";

const path = "/zh/executive-mba";
const content = CORE_PAGES_ZH.programme;

export const metadata = withSeo(path, {
  title: "高管 MBA 课程详情（英国 CMI 认可）",
  description: "了解 Future Ready 高管 MBA 的课程结构、适合对象、学习成果、CMI 认可及与 MQA 学术学位的区别。",
});

export default function Page() {
  return <ChineseCorePage path={path} {...content} />;
}
