import FutureCommerceHome from "@/components/site/FutureCommerceHome";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms", {
  title: "Executive MBA 6 Bulan untuk Pengurus yang Bekerja",
  description: "Program pembangunan profesional Future Ready Executive MBA selama 6 bulan untuk pengurus yang bekerja, pemilik perniagaan dan pemimpin kanan.",
  openGraph: {
    type: "website",
    title: "Executive MBA 6 Bulan untuk Pengurus yang Bekerja",
    description: "Bawa satu isu perniagaan sebenar dan pulang dengan pelan tindakan yang boleh dilaksanakan oleh pasukan anda.",
    locale: "ms_MY",
    url: `${SITE.url}/ms`,
  },
});

export default function MsHome() {
  return <FutureCommerceHome locale="ms" />;
}
