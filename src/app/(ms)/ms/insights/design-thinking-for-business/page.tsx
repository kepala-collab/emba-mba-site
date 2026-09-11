import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ArticleAttribution, { ARTICLE_PUBLISHED, ARTICLE_REVIEWED } from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/insights/design-thinking-for-business", {
  title: "Mulakan Dengan Orang yang Ingin Anda Layani",
  description:
    "Pemikiran reka bentuk untuk pemimpin: cari masalah tepat sebelum membina, uji idea bersama penerima, dan imbangi keinginan, kebolehlaksanaan dan kebolehsaraan.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-22T12:04:03+08:00",
    modifiedTime: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mulakan Dengan Orang yang Ingin Anda Layani",
  mainEntityOfPage: "https://futurereadymba.com/ms/insights/design-thinking-for-business",
  image: "https://futurereadymba.com/opengraph-image",
  datePublished: `${ARTICLE_PUBLISHED}T12:04:03+08:00`,
  dateModified: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  inLanguage: "ms-MY",
  description:
    "Pemikiran reka bentuk untuk pemimpin: cari masalah tepat sebelum membina, uji idea bersama penerima, dan imbangi keinginan, kebolehlaksanaan dan kebolehsaraan.",
  author: {
    "@type": "Organization",
    "@id": EDITORIAL_TEAM_ID,
    name: "Asian Business Consulting Editorial Team",
  },
  publisher: {
    "@type": "Organization",
    "@id": PROVIDER_ID,
    name: "Asian Business Consulting",
  },
  articleSection: "Wawasan",
  about: "Pemikiran reka bentuk sebagai cara mencari masalah yang tepat sebelum membina",
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Wawasan", path: "/ms/insights" }, { name: "Pemikiran Reka Bentuk", path: "/ms/insights/design-thinking-for-business" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">Wawasan · Pemikiran</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces)", maxWidth: "18ch" }}>
              Mulakan dengan orang yang ingin anda layani.
            </h1>
            <ArticleAttribution lang="ms" />
            <p className="lead" style={{ maxWidth: "64ch" }}>
              Produk boleh dibina dengan baik dan masih gagal, kerana ia
              menjawab soalan yang salah untuk orang yang salah. Pemikiran
              reka bentuk ialah disiplin mencari masalah yang tepat terlebih
              dahulu: mulakan dengan orang yang ingin anda layani, uji apa
              yang anda pelajari sebelum melabur, dan anggap setiap idea
              sebagai sesuatu yang perlu dibuktikan, bukan dipertahankan. Ini
              bukan naluri semula jadi; ia kemahiran yang dipraktikkan, pada
              keputusan sebenar, bukan andaian.
            </p>
          </Reveal>

          <div className="prose" style={{ maxWidth: "68ch", marginTop: 40 }}>
            <h2>Apa sebenarnya pemikiran reka bentuk</h2>
            <p>
              Pemikiran reka bentuk mengambil cara seorang pereka bentuk bekerja, lalu
              menjadikannya kaedah umum untuk merungkai masalah yang rumit dan kabur.
              Langkahnya kedengaran mudah: mulakan dengan orang yang ingin anda layani,
              perhatikan realiti mereka dengan teliti, dan biarkan apa yang anda pelajari
              membentuk penyelesaian. Bukan sebaliknya — bermula dengan penyelesaian
              yang sudah anda minati, kemudian sibuk mencari bukti untuk mengesahkannya.
            </p>
            <p>
              Prosesnya memang berulang, bukan lurus dari satu titik ke titik lain.
              Pasukan menguji setiap andaian dengan prototaip kos rendah sebelum
              melancarkannya sepenuhnya, kemudian memperhalus penyelesaian berdasarkan
              bukti yang benar-benar dilihat di lapangan. Sikap inilah — rasa ingin tahu
              didahulukan sebelum keyakinan — yang membezakannya daripada perancangan
              biasa.
            </p>

            <blockquote>
              Matlamatnya bukan untuk terpaut pada idea anda sendiri, tetapi untuk
              terpaut pada masalahnya — dan bertahan dengannya cukup lama sehingga
              anda benar-benar memahaminya.
            </blockquote>

            <h2>Lima peringkat, dalam konteks perniagaan</h2>
            <p>
              Model klasiknya mempunyai lima mod. Anggaplah ia peringkat yang anda ulang
              alik secara bebas, bukan senarai langkah yang disiapkan sekali lalu
              ditandakan selesai.
            </p>
            <ul>
              <li>
                <strong>Empati.</strong> Dekati orang yang anda ingin bantu — temu bual,
                pemerhatian, luangkan masa mengikuti kerja harian mereka. Matlamatnya
                ialah memahami apa yang mereka lalui dan hadapi, dalam bahasa mereka
                sendiri, sebelum anda memutuskan apa yang perlu diperbaiki.
              </li>
              <li>
                <strong>Takrifkan.</strong> Tapiskan apa yang anda dengar menjadi satu
                pernyataan masalah yang tepat dan bersifat manusiawi. Takrifan yang
                jitu — &ldquo;klinisi yang sibuk kehilangan dua puluh minit setiap syif
                semata-mata untuk menyelaraskan rekod&rdquo; — jauh lebih bermakna
                berbanding taklimat kabur untuk &ldquo;menambah baik kecekapan.&rdquo;
              </li>
              <li>
                <strong>Ideasi.</strong> Cetuskan seberapa banyak jawapan alternatif
                sebelum menyempitkan pilihan. Kepelbagaian idea penting pada peringkat
                ini; pertimbangan datang kemudian, selepas ada pilihan untuk dibandingkan.
                Tujuannya ialah melepasi idea pertama yang paling ketara.
              </li>
              <li>
                <strong>Prototaip.</strong> Jadikan idea itu nyata dengan kos serendah
                mungkin — lakaran, mock-up boleh diklik, atau satu larian perkhidmatan
                secara manual. Prototaip ialah soalan yang dizahirkan dalam bentuk
                fizikal, bukan produk siap yang dikecilkan.
              </li>
              <li>
                <strong>Uji.</strong> Bawakan prototaip itu kepada pengguna sebenar dan
                perhatikan apa yang mereka buat, bukan sekadar apa yang mereka kata.
                Setiap ujian memberi maklum balas semula kepada peringkat empati dan
                takrifan, dan kitarannya bermula semula.
              </li>
            </ul>

            <h2>Mengapa ia penting bagi pemimpin dan strategi</h2>
            <p>
              Bagi seorang eksekutif, tarikannya bersifat komersial, bukan estetik.
              Pemikiran reka bentuk secara sistematik menekan satu risiko komersial yang
              paling menyakitkan: membina sesuatu yang akhirnya tidak dipilih
              pelanggan. Dengan mendesak bukti dikumpul lebih awal, ia mengalihkan detik
              kegagalan daripada pelancaran yang mahal kepada prototaip
              yang murah.
            </p>
            <p>
              Ia juga menyatukan kreativiti dengan logik perniagaan melalui satu lensa
              yang mudah namun tegas. Inovasi yang benar-benar bertahan mesti berada di
              titik pertemuan tiga ujian:
            </p>
            <ul>
              <li>
                <strong>Diingini</strong> — adakah orang benar-benar mahukannya?
                (soalan manusia)
              </li>
              <li>
                <strong>Boleh dilaksanakan</strong> — mampukah kita benar-benar
                membina dan menyampaikannya? (soalan teknikal)
              </li>
              <li>
                <strong>Boleh disara</strong> — adakah ia masuk akal sebagai
                perniagaan yang mampan? (soalan komersial)
              </li>
            </ul>
            <p>
              Pemikiran reka bentuk paling kuat pada aspek keinginan — tepat pada titik
              yang paling lemah dalam strategi konvensional. Dan di sinilah tugas
              pemimpin: mengimbangi ketiga-tiga ujian ini serentak, bukan menyempurnakan
              satu dengan mengorbankan yang lain.
            </p>

            <h3>Tugas sebenar yang perlu diselesaikan <span style={{ fontStyle: "italic" }}>(the right job to be done)</span></h3>
            <p>
              Ambil contoh sebuah bank pasaran pertengahan yang kehilangan pelanggan muda
              kepada aplikasi fintech. Gerak balas naluri ialah perlumbaan ciri: tambah
              carta bajet, reka bentuk semula papan pemuka, lancarkan lebih pantas. Namun,
              meluangkan masa menemu bual pelanggan sebenar mendedahkan kerja yang
              sama sekali berbeza. Mereka bukan membeli carta; mereka sebenarnya
              mengharapkan perkhidmatan itu menjawab satu persoalan yang membimbangkan
              hati — &ldquo;mampukah saya menanggung kos ini sekarang, tanpa kejutan buruk
              di kemudian hari?&rdquo;
            </p>
            <p>
              Ditakrif semula begitu, masalahnya bukan lagi antara muka. Ia soal keyakinan
              dan kejelasan pada saat keputusan dibuat. Satu anjakan itu sahaja mengubah
              hala tuju keseluruhan pelan produk — beralih ke arah isyarat kemampuan
              kewangan secara masa nyata dan amaran berbahasa mudah, serta menjauhi
              timbunan ciri yang kelihatan hebat dalam mesyuarat tetapi lemah dalam
              penggunaan sebenar. Kumpulan pelanggan dan data sumbernya tidak berubah;
              yang berubah ialah pasukan itu kini memiliki takrifan yang lebih jitu
              tentang apa yang sebenarnya pelanggan mahukan.
            </p>

            <h2>Di mana jalan pintas mengenakan kos</h2>
            <p>
              Jalan pintas mengenakan kos pada tiga tempat:
            </p>
            <ul>
              <li>
                <strong>Melangkau kajian pelanggan.</strong> Terus melompat ke peringkat
                ideasi mudah menukar andaian dalaman menjadi keperluan produk secara
                tidak sedar.
              </li>
              <li>
                <strong>Terlalu lewat membina prototaip.</strong> Prototaip pertama yang
                terlalu halus dan lengkap menaikkan kos untuk berpatah balik sebelum
                andaian utamanya sempat diuji.
              </li>
              <li>
                <strong>Menganggapnya sekadar gimik bengkel.</strong> Nota melekit dan
                sesi luar pejabat tidak menjadikannya satu disiplin. Pemikiran reka
                bentuk hanya berhasil apabila penemuannya benar-benar mengubah apa yang
                dibiayai, dilancarkan dan dihentikan.
              </li>
            </ul>

            <h2>Tempat kaedah ini dalam program</h2>
            <p>
              Pemikiran reka bentuk integratif ialah salah satu daripada tujuh
              disiplin dalam kaedah F.A.S.T. Future Ready Executive MBA. Di
              sini, ia berganding dengan rangka kerja Jobs-To-Be-Done serta
              ujian Diingini–Boleh Dilaksanakan–Boleh Disara yang
              diperkenalkan tadi — diajar bukan sebagai teori, tetapi sebagai
              sesuatu yang dipraktikkan pada keputusan anda sendiri sepanjang
              enam bulan itu.
            </p>
            <h2>Sumber dan bacaan lanjut</h2>
            <p>
              Untuk memahami rangka keinginan, kebolehlaksanaan dan kebolehsaraan dengan
              lebih mendalam — berserta penjelasan terkini IDEO tentang amalan berulang
              ini — rujuk{" "}
              <a href="https://designthinking.ideo.com/introduction" target="_blank" rel="noopener noreferrer">pengenalan IDEO kepada pemikiran reka bentuk</a>.
            </p>
            <p>
              Gunakan ini pada keputusan yang sedang anda tangani sekarang.{" "}
              <Link className="text-action" href="/ms/diagnostic">
                Buka Semakan kesesuaian program <span aria-hidden="true">↗</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        lang="ms"
        programme="Executive MBA"
        heading="Uji apa yang benar-benar dihargai oleh orang yang anda layani, sebelum anda membina."
      />
    </>
  );
}
