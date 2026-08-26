import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import GuideApplyPage from "@/components/site/GuideApplyPage";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/apply", {
  title: "Get the Future Ready Executive MBA Programme Guide",
  description:
    "Receive the free 2026 programme guide with the six-month structure, published dates, programme fee, scholarship assessment and CMI recognition.",
});

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: "Programme guide", path: "/apply" }]} />
      <GuideApplyPage locale="en" source="en-apply-guide" />
    </>
  );
}
