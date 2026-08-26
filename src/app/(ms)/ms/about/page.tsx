import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import Reveal from "@/components/site/Reveal";
import { ABC_PROFILE, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const ORGANISATIONAL_STATEMENT_MS =
  "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Ia merupakan program pembangunan profesional enam bulan yang direka dan dikendalikan oleh Asian Business Consulting. Right Dots Resources ialah Rakan Bersekutu bagi pertanyaan program dan penyelarasan pendaftaran. Pembiayaan majikan boleh dipertimbangkan bagi majikan berdaftar HRD Corp yang layak, tertakluk pada kelulusan HRD Corp dan jumlah yang diluluskan.";

export const metadata = withSeo("/ms/about", {
  title: "Tentang Future Ready Executive MBA | Kenali Roy Affandi",
  description: "Kenali Future Ready Executive MBA melalui Penyelaras Program Roy Affandi dan matlamat program ini untuk profesional serta pemimpin perniagaan Malaysia.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Tentang Kami", path: "/ms/about" }]} />
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
              <h1 className="sec-h" style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}>{SITE.director}.</h1>
              <p className="sec-sub">Penyelaras Program</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Bagi Roy Affandi, matlamatnya mudah: membantu lebih ramai rakyat Malaysia melangkah maju dalam kerjaya, perniagaan dan komuniti mereka.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>Dengan pengalaman lebih 30 tahun merentasi perbankan dan kewangan, komunikasi korporat, jualan dan pemasaran, pembangunan hartanah serta strategi korporat, beliau memahami bahawa kemajuan jarang datang dalam garis lurus. Ia lahir daripada kebolehan melihat situasi dengan jelas, membuat keputusan yang wajar seterusnya, dan terus bergerak.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="card" style={{ padding: "clamp(24px,4vw,44px)" }}>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Pasukan program</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", maxWidth: "22ch" }}>Hubungan langsung antara pereka program dengan orang yang menjawab pertanyaan anda.</h2>
              <p className="sec-sub" style={{ maxWidth: "62ch" }}><strong>{ABC_PROFILE.name} (ABC)</strong> ialah Penyedia Latihan Berdaftar HRD Corp. ABC membangunkan dan menyusun program latihan berstruktur untuk profesional dan organisasi. Future Ready Executive MBA, CMI (UK) ialah salah satu program utamanya.</p>
              <p className="fine" style={{ maxWidth: "62ch", marginTop: 18 }}>{ORGANISATIONAL_STATEMENT_MS}</p>
              <Link href="/ms/asian-business-consulting" className="text-action" style={{ marginTop: 16 }}>Lanjut tentang Asian Business Consulting <span aria-hidden="true">↗</span></Link>
              <figure className="partnership-seal">
                <Image src="/brand/partnership-seal.webp" alt="Asian Business Consulting dan Right Dots Resources dalam kerjasama — perkongsian strategik" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
                <figcaption className="mono sec-k">Asian Business Consulting × Right Dots Resources · dalam kerjasama</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap about-story-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
          <Reveal>
            <div>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Perspektif Malaysia</span></div>
              <h2 className="sec-h" style={{ fontSize: "clamp(2rem,4vw,3.35rem)", maxWidth: "16ch" }}>Lebih ramai rakyat Malaysia, melangkah maju.</h2>
              <p className="sec-sub">Dunia perniagaan bergerak pantas. Pertimbangan yang baik memberi seseorang tempat berpijak yang teguh.</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 20 }}>Roy Affandi pernah berkhidmat di Pejabat Gabenor Bank Negara Malaysia serta memegang jawatan kanan dalam strategi korporat dan perniagaan di sektor swasta. Beliau memiliki B.Econs (Hons) (Analytical) dari Universiti Malaya, melanjutkan pengajian pascasiswazah di University of Melbourne, dan merupakan ahli CMI (UK).</p>
              <p className="fine" style={{ maxWidth: "58ch", marginTop: 16 }}>Hari ini, pasaran, jangkaan pelanggan dan teknologi berubah lebih pantas. AI mengubah maklumat yang perlu ditimbang pemimpin sebelum membuat keputusan. Jawapannya bukan lebih banyak hingar atau teori semata-mata, tetapi rangka kerja praktikal yang membantu orang bertanya soalan yang lebih tepat, berfikir dengan jelas dan bertindak dengan yakin.</p>
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
      <style>{`@media(max-width:760px){.about-affandi-grid,.about-story-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
