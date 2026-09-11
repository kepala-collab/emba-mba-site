import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { PROGRAMME_FIT_CHECK } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/diagnostic", {
  title: PROGRAMME_FIT_CHECK.zh,
  description: "回答四道私人问题，看清与您的责任、日程、费用及 CMI 认可有关的事实。这不是入学测试，也不会预测职业结果。",
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
