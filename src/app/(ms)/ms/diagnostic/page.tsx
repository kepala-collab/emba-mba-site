import ExecutiveDiagnostic from "@/components/site/ExecutiveDiagnostic";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/diagnostic", {
  title: "Semakan Padanan Program Peribadi",
  description: "Jawab empat soalan untuk membina senarai semak peribadi bagi susunan program, yuran, pengiktirafan dan keperluan anda. Tiada markah diberikan; tiada data disimpan atau dihantar.",
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
