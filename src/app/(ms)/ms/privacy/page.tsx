import Reveal from "@/components/site/Reveal";
import { OPERATOR, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/ms/privacy";

export const metadata = withSeo(path, {
  title: "Dasar Privasi",
  description: "Cara laman ini mengumpul, menggunakan, mendedahkan, menyimpan dan melindungi data peribadi menurut Akta Perlindungan Data Peribadi Malaysia.",
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <Reveal>
          <div className="eyebrow"><span className="l" /><span className="mono sec-k">Perundangan</span></div>
          <h1 className="sec-h">Dasar Privasi</h1>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>Kemas kini terakhir: 13 Ogos 2026</p>
        </Reveal>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>Dasar ini menerangkan cara laman web ini memproses data peribadi menurut Akta Perlindungan Data Peribadi 2010 (Akta 709) dan pindaannya.</p>
          <h2>Pengawal data dan penyedia program</h2>
          <p>Laman web ini dan borang pertanyaannya dikendalikan oleh <strong>{OPERATOR.name}</strong> (nombor pendaftaran {OPERATOR.reg}), yang bertindak sebagai rakan pemasaran <strong>{SITE.provider}</strong> bagi pertanyaan program, sebut harga dan penyelarasan pendaftaran. Program disediakan oleh <strong>{SITE.provider}</strong>; data permohonan dikongsi dengan pasukan programnya untuk memproses pertanyaan, penilaian kelayakan, permohonan dan pendaftaran.</p>
          <h2>Data yang kami kumpul</h2>
          <p>Ini termasuk nama, nombor telefon, e-mel, syarikat, jawatan, jenis peserta, mesej, bahasa halaman, halaman rujukan, parameter UTM, pengecam klik iklan, serta data IP, pelayar dan peranti yang direkodkan oleh perkhidmatan pengehosan.</p>
          <h2>Tujuan dan perkongsian</h2>
          <p>Data digunakan untuk membalas pertanyaan, menilai kesesuaian program, memproses pendaftaran, memberikan panduan biasiswa dan HRD Corp, menjaga keselamatan laman web, dan — dengan kebenaran anda — menganalisis prestasi laman. Bagi tujuan ini, data diberikan mengikut keperluan kepada {SITE.provider} dan pembekal perkhidmatan yang dilantik untuk pengehosan, pangkalan data, e-mel, analitik atau komunikasi. Kami tidak menjual data peribadi.</p>
          <h2>Pembantu maklumat program</h2>
          <p>Pembantu maklumat program yang bersifat pilihan menghantar soalan program dan kandungan perbualan terkini yang terhad kepada pembekal inferens AI yang dilantik, untuk menjana jawapan berdasarkan maklumat program yang disahkan. Jangan masukkan nama, nombor telefon, e-mel, nombor kad pengenalan atau maklumat pembayaran. Laman ini menyekat format data hubungan dan identiti yang lazim sebelum penghantaran, tidak menganggap perbualan pembantu sebagai permohonan pendaftaran, dan tidak menyimpan rekod perbualan dalam pangkalan data laman ini. Pembekal pengehosan, keselamatan antipenyalahgunaan dan inferens AI memproses data keselamatan dan penggunaan teragregat yang diperlukan untuk menyediakan perkhidmatan.</p>
          <h2>Penyimpanan, pemprosesan rentas sempadan dan pengekalan</h2>
          <p>Apabila pembekal perkhidmatan memproses data di luar Malaysia, kami mengambil langkah munasabah untuk melindungi data tersebut. Data disimpan hanya selama tempoh yang diperlukan untuk memproses pertanyaan, permohonan serta keperluan perniagaan dan undang-undang, dan selepas itu dipadamkan atau ditanpanamakan.</p>
          <h2>Analitik dan pilihan privasi</h2>
          <p>Storan penting digunakan untuk keselamatan dan rekod sumber permohonan. Alat analitik pilihan hanya dimuatkan selepas anda memberikan kebenaran; laman ini tidak memuatkan piksel pengiklanan secara lalai. Anda boleh mengubah keputusan anda pada bila-bila masa melalui "Pilihan Privasi" di bahagian bawah halaman.</p>
          <h2>Hak anda</h2>
          <p>Dalam skop PDPA, anda boleh meminta akses kepada data anda, meminta pembetulan, menarik balik persetujuan atau mengehadkan pemprosesan. Sila e-mel <a href={`mailto:${SITE.email}`}>{SITE.email}</a> atau hubungi {SITE.phone}.</p>
          <h2>Maklumat hubungan</h2>
          <p>{OPERATOR.name}, {OPERATOR.address}. Pegawai hubungan program dan permohonan: {SITE.director}, <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.phone}.</p>
        </div>
      </div>
    </section>
  );
}
