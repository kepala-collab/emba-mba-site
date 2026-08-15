import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/diagnostic", {
  title: "Private Executive Readiness Diagnostic",
  description: "A private, non-predictive reflection to identify the programme evidence required for your next decision. No score, storage or data submission.",
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
