import Reveal from "@/components/site/Reveal";
import { FACTS, OPERATOR, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_MS, REFUND_TERMS_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const path = "/ms/terms";

export const metadata = withSeo(path, {
  title: "Terma dan Syarat",
  description: "Terma penggunaan laman web Future Ready Executive MBA, penghantaran pertanyaan, maklumat program, urusan bayaran balik, sifat program profesional dan undang-undang yang terpakai.",
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <Reveal>
          <div className="eyebrow"><span className="l" /><span className="mono sec-k">Perundangan</span></div>
          <h1 className="sec-h">Terma dan Syarat</h1>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>Kemas kini terakhir: 14 Ogos 2026</p>
        </Reveal>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>Dengan menggunakan laman web ini atau menghantar pertanyaan, anda bersetuju dengan terma laman berikut. Pendaftaran rasmi, bayaran dan bayaran balik tertakluk pada terma pendaftaran bertulis yang dikeluarkan oleh penyedia program.</p>
          <h2>Laman web dan penyedia program</h2>
          <p>Laman web ini dikendalikan oleh <strong>{OPERATOR.name}</strong> (nombor pendaftaran {OPERATOR.reg}), yang bertindak sebagai rakan pemasaran <strong>{SITE.provider}</strong> bagi pertanyaan program, sebut harga dan penyelarasan pendaftaran. Program disediakan dan disampaikan oleh <strong>{SITE.provider}</strong>; kedua-duanya ialah syarikat yang berasingan.</p>
          <h2>Maklumat program dan kelayakan</h2>
          <p>Laman ini menerbitkan maklumat program yang disediakan oleh ABC. Cadangan bertulis dan terma pendaftaran yang ditandatangani bagi setiap peserta menyatakan harga, kaedah penyampaian, keperluan tamat program dan sijil. Jika ABC mengubah tarikh yang diterbitkan, peserta berdaftar akan menerima tarikh gantian secara bertulis. Executive MBA dalam kepimpinan perniagaan masa hadapan dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.</p>
          <h2>Chartered Manager</h2>
          <p>Chartered Manager (CMgr) ialah status profesional yang perlu dipohon secara berasingan kepada CMI. Menamatkan program tidak memberikan status CMgr secara automatik; keperluan pengalaman, keahlian, penilaian, permohonan dan yuran ditentukan oleh CMI.</p>
          <h2>Urusan bayaran balik</h2>
          <p>{REFUND_TERMS_MS} Terma yang ditandatangani juga menyatakan prosedur pembatalan bagi bayaran syarikat dan geran HRD Corp; jika terdapat percanggahan antara laman ini dan terma yang ditandatangani, terma yang ditandatangani diguna pakai.</p>
          <h2>Tiada jaminan hasil</h2>
          <p>Laman ini tidak menjamin kemasukan, biasiswa, kelulusan HRD Corp, pekerjaan, pendapatan, kenaikan pangkat atau sebarang hasil perniagaan. Yuran standard ialah {FACTS.priceStd}. Biasiswa {FACTS.scholarshipProvider} terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis; sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis. {HRD_CORP_CLAIM_MS}</p>
          <h2>Pembantu maklumat program</h2>
          <p>Pembantu maklumat program yang bersifat pilihan menggunakan AI automatik untuk menjawab soalan berdasarkan maklumat program yang terhad. Jawapan AI adalah untuk rujukan sahaja dan tidak membentuk pengesahan kemasukan, sebut harga, biasiswa, HRD Corp atau pendaftaran. Jangan hantar data peribadi, identiti, sulit atau pembayaran melalui pembantu. Cadangan bertulis rasmi dan terma pendaftaran yang ditandatangani sentiasa diguna pakai.</p>
          <h2>Komunikasi pemasaran</h2>
          <p>Apabila anda melanggan, meminta panduan program atau menghantar pertanyaan, anda bersetuju menerima maklumat program dan komunikasi pemasaran Future Ready Executive MBA daripada pasukan program (melalui e-mel; jika anda memberikan nombor telefon, anda juga boleh dihubungi melalui WhatsApp atau telefon). Anda boleh menarik balik persetujuan pada bila-bila masa melalui pautan berhenti melanggan dalam e-mel pemasaran atau dengan menghubungi <a href="mailto:support@futurereadymba.com">support@futurereadymba.com</a>; penarikan balik tidak menjejaskan balasan kami terhadap pertanyaan yang telah anda hantar. Data peribadi diproses menurut Akta Perlindungan Data Peribadi 2010 (Akta 709) dan pindaannya.</p>
          <h2>Undang-undang yang terpakai dan hubungan</h2>
          <p>Terma ini ditadbir oleh undang-undang Malaysia. Untuk pertanyaan, hubungi {SITE.director}: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.phone}.</p>
        </div>
      </div>
    </section>
  );
}
