import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { BOUNDARY_COMPACT } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/home", {
  title: "Executive MBA for Working Managers in Malaysia",
  description: `Bring one live business issue and leave with a plan your team can act on. Executive MBA, ${BOUNDARY_COMPACT}.`,
  alternates: { canonical: "/home" },
});

export default function Home() {
  return <FutureCommerceHome locale="en" />;
}
