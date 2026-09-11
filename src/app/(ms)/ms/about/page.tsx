import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import { ABC_PROFILE, SITE } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS } from "@/lib/content-ms";
import { editorialTeamSchema, OPERATOR_ID, withSeo } from "@/lib/seo";

const ORGANISATIONAL_STATEMENT_MS =
  "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Ia merupakan program pembangunan profesional enam bulan yang direka dan dikendalikan oleh Asian Business Consulting. Right Dots Resources ialah agensi pemasaran yang mengendalikan pertanyaan program dan penyelarasan pendaftaran. Pembiayaan majikan boleh dipertimbangkan bagi majikan berdaftar HRD Corp yang layak, tertakluk pada kelulusan HRD Corp dan jumlah yang diluluskan.";

const ABOUT_SCHEMA_MS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/about#roy-affandi`,
      name: SITE.director,
      jobTitle: "Penyelaras Program",
      image: `${SITE.url}/brand/community/affandi-portrait.webp`,
      worksFor: { "@id": OPERATOR_ID },
      description:
        "Penyelaras Program bagi Future Ready Executive MBA, dengan pengalaman lebih 30 tahun merentasi perbankan dan kewangan, komunikasi korporat, jualan dan pemasaran, pembangunan hartanah serta strategi korporat.",
    },
    editorialTeamSchema(),
  ],
};

export const metadata = withSeo("/ms/about", {
  title: "Tentang Future Ready Executive MBA | Kenali Roy Affandi",
  description: "Kenali Roy Affandi, Penyelaras Program bagi Future Ready Executive MBA, dan pasukan program yang menjawab soalan anda tentang kesesuaian, yuran dan pengiktirafan CMI.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Tentang Kami", path: "/ms/about" }]} />
      <JsonLd data={ABOUT_SCHEMA_MS} />
      <section className="section">
        <div className="wrap about-affandi-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg-2)" }}>
              <Image src="/brand/community/affandi-portrait.webp" alt="Roy Affandi" width={1122} height={1403} sizes="(max-width: 760px) 100vw, 42vw" style={{ width: "100%", height: "auto", display: "block" }} priority />
            </figure>
          </Reveal>
          <Reveal delay={70}>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Tentang Future Ready</span></div>
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}. Orang yang menjawab soalan anda.</h1>
              <p className="sec-sub">Penyelaras Program</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Tugas Roy Affandi ialah melayani keputusan yang sedang anda pertimbangkan, dahulu daripada segalanya: jawapan yang jujur tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan, termasuk apabila program ini bukan laluan yang tepat untuk anda. Kepimpinan sebenar ialah kepimpinan berkhidmat (servant leadership): ia diukur pada orang yang dilayaninya.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>Dengan pengalaman lebih 30 tahun merentasi perbankan dan kewangan, komunikasi korporat, jualan dan pemasaran, pembangunan hartanah serta strategi korporat, beliau melihat sendiri bagaimana sesuatu keputusan berubah apabila ia diuji dan ditulis, bukan dipikul seorang diri.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="editorial-standards" className="section editorial-standards-anchor">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px,4vw,44px)" }}>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Pasukan program</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", maxWidth: "22ch" }}>Daripada reka bentuk program kepada soalan anda.</h2>
              <p className="sec-sub" style={{ maxWidth: "62ch" }}><strong>{ABC_PROFILE.name} (ABC)</strong> ialah Penyedia Latihan Berdaftar HRD Corp. ABC membangunkan dan menyusun program latihan berstruktur untuk profesional dan organisasi. Future Ready Executive MBA, CMI (UK) ialah salah satu program utamanya.</p>
              <p className="fine" style={{ maxWidth: "62ch", marginTop: 18 }}>{ORGANISATIONAL_STATEMENT_MS} {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}</p>
              <Link href="/ms/asian-business-consulting" className="text-action" style={{ marginTop: 16 }}>Lanjut tentang Asian Business Consulting <span aria-hidden="true">↗</span></Link>
              <figure className="partnership-seal">
                <Image src="/brand/partnership-seal.webp" alt="Asian Business Consulting dan Right Dots Resources dalam kerjasama — perkongsian strategik" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
                <figcaption className="mono sec-k">Asian Business Consulting × Right Dots Resources · dalam kerjasama</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section--alt">
        <div className="wrap about-story-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Perspektif Malaysia</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.35rem)", maxWidth: "16ch" }}>Lebih ramai rakyat Malaysia, membuat keputusan dengan jelas.</h2>
              <p className="sec-sub">Dunia perniagaan bergerak pantas. Keputusan yang baik memberi anda tempat berpijak yang teguh.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi pernah berkhidmat di Pejabat Gabenor Bank Negara Malaysia serta memegang jawatan kanan dalam strategi korporat dan perniagaan di sektor swasta. Beliau memiliki Ijazah Sarjana Muda Ekonomi Analitikal (Kepujian) dari Universiti Malaya, melanjutkan pengajian pascasiswazah di Universiti Melbourne, dan merupakan ahli CMI (UK).</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>Pasaran, jangkaan pelanggan dan teknologi berubah lebih pantas, dan AI menambah perkara yang perlu ditimbang seorang pemimpin sebelum membuat keputusan. Kaedah ini bukan lebih banyak bunyi atau teori semata-mata. Ia satu set rangka kerja yang membantu pemimpin menguji bukti, mendedahkan pertukaran ganti dan menulis keputusan itu supaya orang lain boleh mengikutinya.</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <figure style={{ margin: 0, overflow: "hidden", borderRadius: 20, border: "1px solid var(--line)", background: "var(--bg)" }}>
              <Image src="/brand/community/about-affandi.webp" alt="Detik peribadi daripada kehidupan Roy Affandi" width={1440} height={2560} sizes="(max-width: 760px) 100vw, 46vw" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption className="fine" style={{ padding: "12px 16px 14px" }}>Kerjanya profesional. Tujuannya peribadi: membantu orang membina masa hadapan yang lebih kukuh.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan Future Ready Executive MBA." sub="Pilih panggilan, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." />
      
    </>
  );
}
