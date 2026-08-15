import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/diagnostic", {
  title: "私人高管进阶决策工具",
  description: "一项不会评分、储存或传送资料的私人思考工具，帮助你确认选择专业发展课程前所需的证据。",
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
