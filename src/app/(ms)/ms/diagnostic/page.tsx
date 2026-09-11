import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { PROGRAMME_FIT_CHECK } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/diagnostic", {
  title: PROGRAMME_FIT_CHECK.ms,
  description:
    "Jawab empat soalan peribadi untuk melihat fakta tanggungjawab, jadual, yuran dan pengiktirafan CMI anda. Bukan ujian kemasukan atau ramalan hasil kerjaya.",
});

export default function DiagnosticPage() {
  return (
    <section className="section">
      <div className="wrap diagnostic-shell">
        <ExecutiveDiagnostic lang="ms" />
      </div>
    </section>
  );
}
