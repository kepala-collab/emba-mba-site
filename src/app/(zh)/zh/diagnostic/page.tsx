import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/diagnostic", {
  title: "私人课程匹配检查",
  description: "回答四道问题，生成一份用于核对课程安排、费用、认可与个人需求的私人清单。不评分、不储存，也不上传任何资料。",
});

export default function DiagnosticPage() {
  return (
    <section className="section">
      <div className="wrap diagnostic-shell">
        <ExecutiveDiagnostic lang="zh" />
      </div>
    </section>
  );
}
