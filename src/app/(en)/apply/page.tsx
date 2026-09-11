import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import GuideApplyPage from "@/components/site/GuideApplyPage";
import { ENQUIRY_COMMITMENT, PROGRAMME_YEAR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/apply", {
  title: `Get the ${PROGRAMME_YEAR} Programme Guide`,
  description: `Request the ${PROGRAMME_YEAR} programme guide: structure, dates, fee, scholarship assessment and CMI recognition. ${ENQUIRY_COMMITMENT}`,
});

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/home" }, { name: `${PROGRAMME_YEAR} programme guide`, path: "/apply" }]} />
      <GuideApplyPage locale="en" source="en-apply-guide" />
    </>
  );
}
