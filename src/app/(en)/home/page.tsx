import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { ABC_PROFILE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/home", {
  title: "Executive MBA for Working Managers in Malaysia",
  description: `${ABC_PROFILE.programmePositioning} Bring one live business issue and leave with a plan your team can act on.`,
  alternates: { canonical: "/home" },
});

export default function Home() {
  return <FutureCommerceHome locale="en" />;
}
