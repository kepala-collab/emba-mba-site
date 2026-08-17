import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/diagnostic", {
  title: "Working Manager Progression Check",
  description: "Answer four private questions to identify the programme information that matters to your responsibilities, schedule, fees and professional progression.",
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
