import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { PROGRAMME_FIT_CHECK } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/diagnostic", {
  title: PROGRAMME_FIT_CHECK.en,
  description:
    "Answer four private questions to see the facts for your responsibilities, schedule, fee and CMI recognition. Not an admission test or a career-outcome prediction.",
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
