import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { PROGRAMME_POSITIONING_SENTENCE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/home", {
  title: "Executive MBA Malaysia for Working Managers",
  description: `${PROGRAMME_POSITIONING_SENTENCE} Built for Malaysian working managers over six months.`,
  alternates: { canonical: "/home" },
});

export default function Home() {
  return <FutureCommerceHome locale="en" />;
}
