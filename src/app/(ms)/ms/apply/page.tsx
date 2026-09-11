import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import GuideApplyPage from "@/components/site/GuideApplyPage";
import { PROGRAMME_YEAR } from "@/lib/content";
import { ENQUIRY_COMMITMENT_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const path = "/ms/apply";

export const metadata = withSeo(path, {
  title: `Dapatkan panduan program ${PROGRAMME_YEAR}`,
  description: `Minta panduan program ${PROGRAMME_YEAR}: struktur enam bulan, tarikh yang diterbitkan, yuran standard, penilaian biasiswa dan pengiktirafan CMI. ${ENQUIRY_COMMITMENT_MS}`,
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: `Panduan program ${PROGRAMME_YEAR}`, path }]} />
      <GuideApplyPage locale="ms" source="ms-apply-guide" />
    </>
  );
}
