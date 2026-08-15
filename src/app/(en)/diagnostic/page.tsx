import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/diagnostic", {
  title: "Private Programme Fit Check",
  description: "Answer four questions and create a private checklist for reviewing programme fit, schedule, fees and recognition. No score, storage or data submission.",
});

export default function DiagnosticPage() {
  return (
    <section className="section">
      <div className="wrap diagnostic-shell">
        <ExecutiveDiagnostic />
      </div>
    </section>
  );
}
