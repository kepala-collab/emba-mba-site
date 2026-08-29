import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import YouTubeFilm from "@/components/site/YouTubeFilm";
import { OPERATOR, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const ABC_URL = "https://www.asianbusinessconsulting.biz";

export const metadata = withSeo("/ms/asian-business-consulting", {
  title: "Tentang Asian Business Consulting — Penyedia Program",
  description:
    "Kenali Asian Business Consulting (ABC), organisasi latihan Malaysia yang mereka bentuk dan menyampaikan Future Ready Executive MBA sebagai pusat CMI (UK).",
});

const MILESTONES = [
  { n: "2020", s: "ABC didaftarkan di Malaysia" },
  { n: "Julai 2024", s: "Status dianugerahkan dan disokong oleh CMI (UK)" },
  { n: "17", s: "kohort telah dikendalikan: 16 kohort Bahasa Inggeris dan 1 kohort Mandarin" },
  { n: "154", s: "graduan program" },
];

const LEADERS = [
  {
    n: "Dr. Xavier Johnson",
    role: "Ketua Metodologi Perniagaan, Asian Business Consulting · Pengasas LIFE University",
    img: "/brand/faculty/xavier-johnson.webp",
    b: "Pereka metodologi F.A.S.T. dan dua belas modul teras program. Alumni Universiti Malaya yang memberi tumpuan pada seni bina perniagaan organisasi, inovasi model perniagaan dan pemikiran reka bentuk, serta menyediakan khidmat perundingan melalui entiti bersekutu Waterhouse Consult Think.",
  },
  {
    n: "Ir. Dr. Jonas Anthony",
    role: "Ketua Pegawai Operasi ABC · Pengasas Bersama LIFE Innoversity",
    img: "/brand/faculty/jonas-anthony.webp",
    b: "Sebelum bersara, beliau ialah Pengarah Eksekutif Pengurusan Korporat di Panasonic AVC Networks Kuala Lumpur dan pernah mempengerusikan pembangunan sumber manusia pembuatan Panasonic Malaysia. Lebih 32 tahun pengalaman dalam lean, Industri 4.0, kualiti dan rantaian bekalan; beliau juga Jurutera Bertauliah (UK), profesional kualiti bertauliah dan profesor adjung di Sekolah Kejuruteraan Universiti Taylor's.",
  },
  {
    n: "Mr Allan Gan",
    role: "Ketua Pengarah Program, Asian Business Consulting · Pengasas Bersama LIFE Innoversity",
    img: "/brand/faculty/allan-gan.webp",
    b: "Bertanggungjawab terhadap penyampaian dan operasi harian program — penjadualan, logistik dan hubungan klien korporat — serta penyelarasan dengan CMI (UK) dan HRD Corp bagi memastikan program memenuhi keperluan geran latihan majikan.",
  },
  {
    n: "Roy Affandi",
    role: "Pengurus Operasi dan Penyelaras Program",
    img: "/brand/community/affandi-portrait.webp",
    b: "Menguruskan pengambilan kohort, urusan kemasukan dan hubungan korporat, serta membantu PKS dan organisasi besar dengan proses geran HRD Corp. Ijazah Sarjana Muda Ekonomi Analitikal (Kepujian) dari Universiti Malaya, lepasan pascasiswazah Universiti Melbourne, memegang Executive MBA (CMI UK) dan merupakan ahli CMI (UK).",
  },
];

const abcSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asian Business Consulting",
  alternateName: "ABC",
  url: ABC_URL,
  foundingDate: "2020",
  areaServed: "MY",
  founder: { "@type": "Person", name: "Dr. Xavier Johnson" },
  member: LEADERS.map((leader) => ({ "@type": "Person", name: leader.n, jobTitle: leader.role })),
  sameAs: [ABC_URL],
};

export default function AbcPageMs() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman utama", path: "/ms" }, { name: "Asian Business Consulting", path: "/ms/asian-business-consulting" }]} />
      <JsonLd data={abcSchema} />

      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Penyedia program · Asian Business Consulting</span></div>
          </Reveal>
          <Reveal delay={40}>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Organisasi di sebalik <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Future Ready Executive MBA</em>.
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="sec-sub" style={{ maxWidth: "60ch" }}>
              Asian Business Consulting (ABC) ialah organisasi perundingan pengurusan, latihan korporat dan pembelajaran eksekutif yang didaftarkan di Malaysia pada 2020. Selepas hampir tiga tahun pembangunan bersama CMI (UK), ABC mereka bentuk Future Ready Executive MBA selama enam bulan dan menyampaikannya sebagai pusat yang diiktiraf CMI (UK).
            </p>
          </Reveal>
          <Reveal delay={110}>
            <div className="working-hero-actions">
              <a href={ABC_URL} className="btn btn-primary" target="_blank" rel="noopener" data-track-event="outbound_click" data-track-id="abc_website" data-track-location="abc_hero_ms">
                Lawati laman rasmi asianbusinessconsulting.biz <span aria-hidden="true">↗</span>
              </a>
              <Link href="/ms/executive-mba" className="text-action">Lihat program <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="Ringkasan Asian Business Consulting">
        <div className="wrap working-fact-grid">
          {MILESTONES.map((m) => (
            <div key={m.n}><strong>{m.n}</strong><span>{m.s}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Pasukan</span></div>
            <h2 className="sec-h">Pasukan yang mereka bentuk dan menyampaikan program.</h2>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>Pasukan kecil yang terdiri daripada pengamal berpengalaman. ABC mengesahkan senarai fasilitator dan perunding setiap kohort dalam makluman kohort yang dihantar sebelum sesi pertama.</p>
          </Reveal>
          <div className="abc-leaders">
            {LEADERS.map((leader, index) => (
              <Reveal key={leader.n} delay={(index % 2) * 60}>
                <article className="abc-leader">
                  {leader.img ? (
                    <Image src={leader.img} alt={leader.n} width={192} height={192} sizes="96px" />
                  ) : (
                    <span className="abc-avatar" aria-hidden="true">{leader.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                  )}
                  <div>
                    <h3>{leader.n}</h3>
                    <p className="role">{leader.role}</p>
                    <p>{leader.b}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="abc-film" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Majlis graduasi sulung · Ogos 2026</span></div>
            <h2 className="sec-h">17 kohort, 154 graduan, satu detik bersejarah yang dikongsi bersama.</h2>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>Future Ready Executive MBA mengadakan majlis graduasi sulungnya pada Ogos 2026. Seramai 86 graduan hadir, mewakili komuniti 154 graduan merentasi 17 kohort: 16 kohort Bahasa Inggeris dan satu kohort Mandarin.</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="film-prestige" style={{ marginTop: 24 }}>
              <div className="film-ribbon"><span className="dot" aria-hidden="true" /> Majlis graduasi sulung · 86 graduan hadir · Ogos 2026</div>
              <JsonLd data={{ "@context": "https://schema.org", "@type": "VideoObject", name: "Future Ready Executive MBA — Filem Majlis Graduasi Sulung", description: "Sorotan majlis graduasi sulung Future Ready Executive MBA pada Ogos 2026, dihadiri 86 graduan.", "thumbnailUrl": `${SITE.url}/brand/abc-graduation-poster.webp`, "uploadDate": "2026-08-22", "embedUrl": "https://www.youtube-nocookie.com/embed/6uEbqYOZxkg", "contentUrl": "https://youtu.be/6uEbqYOZxkg", "inLanguage": "ms-MY" }} />
              <YouTubeFilm videoId="6uEbqYOZxkg" poster="/brand/abc-graduation-poster.webp" lang="ms" />
              <div className="film-cap"><strong>86 graduan menghadiri majlis tersebut,</strong> bersama fasilitator serta tetamu daripada komuniti perniagaan dan sektor awam Malaysia bagi meraikan detik bersejarah ini.</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Pengiktirafan dan pembiayaan</span></div>
            <h2 className="sec-h">Organisasi yang menyokong penyampaian program.</h2>
          </Reveal>
          <div className="grid-forces" style={{ marginTop: 26 }}>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>Chartered Management Institute (CMI), UK</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>CMI ialah badan kualiti luaran. Program ini dianugerahkan dan disokong oleh CMI sejak Julai 2024, dan ABC tersenarai sebagai pusat antarabangsa yang diiktirafnya.</p>
              <a href="https://www.managers.org.uk/community/cmi-internationally/centres/" className="text-action" target="_blank" rel="noopener" style={{ marginTop: 10 }}>Sahkan dalam direktori CMI <span aria-hidden="true">↗</span></a>
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>HRD Corp (Malaysia)</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>ABC ialah penyedia latihan berdaftar HRD Corp, dan majikan Malaysia boleh membiayai peserta melalui dana pembangunan sumber manusia. HRD Corp menentukan kelayakan dan jumlah yang diluluskan.</p>
              <Link href="/ms/fees" className="text-action" style={{ marginTop: 10 }}>Bagaimana pembiayaan majikan berfungsi <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>Right Dots Resources</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>ABC membangunkan dan menyampaikan program; {OPERATOR.name} ialah rakan pemasarannya yang menguruskan promosi, pertanyaan program, sebut harga dan penyelarasan pendaftaran.</p>
              <Link href="/ms/contact" className="text-action" style={{ marginTop: 10 }}>Hubungi pasukan program <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="partnership-seal">
            <Image src="/brand/partnership-seal.webp" alt="Kerjasama Asian Business Consulting dengan Right Dots Resources" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
            <figcaption className="mono sec-k">Asian Business Consulting × {OPERATOR.name} · Kerjasama</figcaption>
          </figure>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Berhubung dengan pasukan program." sub="Ajukan pertanyaan tentang Future Ready Executive MBA, atau lawati asianbusinessconsulting.biz untuk mengenali Asian Business Consulting dengan lebih dekat." />
    </>
  );
}
