import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms", {
  title: "Executive MBA Enam Bulan untuk Pengurus Bekerja",
  description: "Program pembangunan profesional Future Ready Executive MBA selama enam bulan untuk pengurus bekerja, pemilik perniagaan dan pemimpin kanan.",
  openGraph: {
    type: "website",
    title: "Executive MBA Enam Bulan untuk Pengurus Bekerja",
    description: "Asah pertimbangan pengurusan, kemahiran membuat keputusan dan pelaksanaan melalui isu perniagaan sebenar.",
    locale: "ms_MY",
    url: `${SITE.url}/ms`,
  },
});

export default function MsHome() {
  return <FutureCommerceHome locale="ms" />;
}
