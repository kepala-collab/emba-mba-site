import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { withSeo } from "@/lib/seo";

const path = "/ms/apply";

export const metadata = withSeo(path, {
  title: "Aturkan Perbualan Program Future Ready Executive MBA",
  description:
    "Pilih panggilan, sesi dalam talian, pertemuan atau terima maklumat dahulu. Pertanyaan bukan tawaran kemasukan atau komitmen bayaran.",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Mohon", path }]} />
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Berbincang dahulu, kemudian buat keputusan</span></div>
            <h1 className="sec-h">Pilih cara yang paling sesuai untuk anda mengetahui lebih lanjut</h1>
            <p className="sec-sub">Anda boleh memilih panggilan ringkas, sesi penerangan dalam talian, pertemuan di lokasi yang dipersetujui, atau menerima maklumat terlebih dahulu. Menghantar maklumat bukan tawaran kemasukan atau komitmen bayaran.</p>
          </Reveal>
          <Reveal className="mt-m">
            <h2 className="sec-h" style={{ fontSize: "1.55rem", marginBottom: 18 }}>Beritahu kami bagaimana anda mahu meneruskan</h2>
            <LeadForm source="ms-apply" programme="Executive MBA" lang="ms" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
