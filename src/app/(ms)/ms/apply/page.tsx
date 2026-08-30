import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import GuideApplyPage from "@/components/site/GuideApplyPage";
import { withSeo } from "@/lib/seo";

const path = "/ms/apply";

export const metadata = withSeo(path, {
  title: "Dapatkan Panduan Future Ready Executive MBA",
  description:
    "Dapatkan panduan program 2026 dengan struktur enam bulan, tarikh yang diterbitkan, yuran program, penilaian biasiswa dan pengiktirafan CMI.",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Panduan program", path }]} />
      <GuideApplyPage locale="ms" source="ms-apply-guide" />
    </>
  );
}
