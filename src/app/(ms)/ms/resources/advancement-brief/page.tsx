import Link from "next/link";
import PrintBriefButton from "@/components/site/PrintBriefButton";
import { CERTIFICATE_POSITIONING, CTA_LABELS, FACTS, SIGNATURE_QUOTE } from "@/lib/content";
import { HRD_CORP_CLAIM_MS, PROGRAMME_AUDIENCE_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/resources/advancement-brief", {
  title: "Panduan Program Executive MBA",
  description: "Panduan program yang boleh dicetak: untuk siapa program ini, struktur enam bulan, kaedah aplikasi, yuran peserta Malaysia, pengiktirafan CMI dan langkah seterusnya.",
});

export default function AdvancementBriefPage() {
  return (
    <div className="brief-shell">
      <div className="brief-toolbar">
        <Link className="text-action" href="/ms/resources">← Kembali ke bahan keputusan</Link>
        <PrintBriefButton label="Cetak atau simpan sebagai PDF" />
      </div>
      <article className="brief-document">
        <header>
          <p className="mono sec-k">Panduan program Executive MBA</p>
          <h1>Panduan Program Executive MBA</h1>
          <p>Penerangan program yang ringkas dan konkrit untuk pengurus yang sedang bekerja dan sedang menimbang keupayaan yang mesti dihasilkan oleh fasa pembelajaran profesional seterusnya.</p>
        </header>
        <section className="brief-chapter"><span className="mono">01 / Kesesuaian</span><div><h2>Mulakan daripada keperluan kerja, bukan daripada gelaran.</h2><p>{PROGRAMME_AUDIENCE_MS}</p><p>Peserta perlu membawa satu situasi perniagaan sebenar: isu strategik, keutamaan transformasi, jurang keupayaan, atau keputusan yang memberi kesan besar.</p></div></section>
        <section className="brief-chapter"><span className="mono">02 / Kaedah</span><div><h2>Aplikasikan inkuiri berstruktur terhadap situasi sebenar.</h2><p>Enam bulan ini merangkumi enam hari latihan, tiga sesi berjadual, rangka kerja pengamal, diagnostik, bimbingan dan projek aplikasi perniagaan. Fokus pembelajaran meliputi sistem, bukti, andaian, pilihan dan pelaksanaan.</p><div className="brief-facts"><div><strong>6 hari</strong><span>Latihan program</span></div><div><strong>3 sesi</strong><span>Diatur sepanjang program</span></div><div><strong>12 modul</strong><span>Rangka kerja aplikasi</span></div></div></div></section>
        <section className="brief-chapter"><span className="mono">03 / Susunan enam bulan</span><div><h2>Enam bulan, program yang lengkap.</h2><p>Peserta menamatkan tiga sesi berjadual, bimbingan dan projek aplikasi perniagaan dalam tempoh enam bulan. Peserta yang memenuhi keperluan program menerima CMI Certificate of Recognition.</p><p>Chartered Manager ialah laluan CMI berasingan yang bersifat pilihan, dengan kelayakan, penilaian, keahlian dan yuran tersendiri; ia tidak termasuk dalam program ini atau yuran yang diterbitkan.</p></div></section>
        <section className="brief-chapter"><span className="mono">04 / Pengiktirafan</span><div><h2>{CERTIFICATE_POSITIONING.headline}</h2><p>Executive MBA dalam kepimpinan perniagaan masa hadapan dianugerahkan dan disokong oleh CMI. Peserta yang memenuhi keperluan menerima CMI Certificate of Recognition. Sijil ini merekodkan tamat program profesional; ia bukan kelayakan yang dikawal selia atau ijazah akademik.</p></div></section>
        <section className="brief-chapter"><span className="mono">05 / Yuran</span><div><h2>Yuran standard dan kelayakan biasiswa.</h2><div className="brief-facts"><div><strong>{FACTS.priceStd}</strong><span>Yuran standard program</span></div><div><strong>Kelayakan</strong><span>Penilaian biasiswa untuk pemohon Malaysia</span></div><div><strong>Bertulis</strong><span>Anugerah dan yuran peserta</span></div></div><p>Biasiswa tertakluk pada kekosongan terhad, penilaian terpilih dan kelulusan bertulis; ia tidak diberikan secara automatik. {HRD_CORP_CLAIM_MS}</p></div></section>
        <section className="brief-chapter"><span className="mono">06 / Keputusan</span><div><h2>Sahkan perkara ini sebelum mendaftar.</h2><ul><li>Isu perniagaan sebenar yang mana akan saya bawa ke dalam projek aplikasi perniagaan?</li><li>Bolehkah saya menghadiri sesi yang diterbitkan dan menyiapkan keperluan projek?</li><li>Adakah saya jelas tentang sifat dan sempadan sijil program?</li><li>Jika saya mahu meneruskan permohonan Chartered Manager, adakah saya faham penilaian dan yuran berasingan CMI?</li><li>Jika dibiayai majikan, siapa yang bertanggungjawab mengemukakan permohonan HRD Corp sebelum kursus bermula?</li></ul></div></section>
        <section className="brief-chapter"><span className="mono">07 / Prinsip</span><div><h2>“{SIGNATURE_QUOTE.text}”</h2><p><strong>{SIGNATURE_QUOTE.attribution}</strong> · {SIGNATURE_QUOTE.role}</p><Link className="btn btn-primary" href="/ms/apply">{CTA_LABELS.ms.guide}</Link></div></section>
      </article>
    </div>
  );
}
