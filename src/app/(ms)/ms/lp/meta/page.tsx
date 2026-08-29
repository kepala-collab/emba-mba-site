import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/lp/meta", {
  title: "Executive MBA untuk Pemimpin yang Sedang Bekerja | Future Ready",
  description:
    "Future Ready Executive MBA enam bulan untuk pengurus yang sedang bekerja: enam hari latihan, tiga sesi berjadual dan projek aplikasi perniagaan.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/ms/lp/meta" },
});

const SOURCE = "lp-meta-ms";

const EDGE = [
  ["Memahami keseluruhan sistem", "Analisis punca, kebergantungan dan kesan susulan sebelum membuat keputusan."],
  ["Menguji andaian asas", "Bezakan fakta, kekangan dan andaian, kemudian bentuk pilihan berdasarkan bukti."],
  ["Menggabungkan analisis dan inovasi", "Seimbangkan logik strategik, keperluan pengguna dan kekangan praktikal."],
  ["Menyusun maklumat yang rumit", "Terjemahkan maklumat kompleks kepada keputusan yang boleh dijelaskan dan dilaksanakan."],
  ["Menilai dari lima sudut", "Nilai setiap keputusan daripada lima perspektif perniagaan yang jelas."],
  ["Menghubungkan bakat dan perniagaan", "Pertimbangkan keupayaan insan, inovasi dan keperluan komersial secara bersepadu."],
];

const WALK = [
  "Enam hari latihan dengan fasilitasi langsung, dikendalikan fasilitator yang disahkan pasukan program",
  "Diagnostik kepimpinan peribadi untuk mengenal pasti corak keputusan dan keutamaan pembangunan",
  "Bimbingan eksekutif peribadi yang diaplikasikan terhadap situasi perniagaan peserta sendiri",
  "Rangka kerja dan pustaka alat (LMS) yang dikekalkan selepas tamat program",
  "Satu projek transformasi perniagaan untuk penilaian fasilitator",
  "Program diiktiraf CMI (UK); CMgr perlu dipohon secara berasingan",
];

export default function MsMetaLP() {
  return (
    <div lang="ms">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">Untuk pemimpin yang memikul tanggungjawab keputusan merentas fungsi</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              Tamatkan dalam enam bulan: Executive MBA dalam kepimpinan perniagaan masa hadapan, <em style={{ color: "var(--crimson)", fontStyle: "normal" }}>dianugerahkan dan disokong oleh CMI.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              Selesaikan enam hari latihan, bimbingan dan projek aplikasi perniagaan dalam enam bulan, sambil terus bekerja. Chartered Manager ialah laluan CMI berasingan yang bersifat pilihan, dengan kelayakan, penilaian dan yuran tersendiri.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">Dapatkan maklumat program 2026 →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <ProgrammeMarks lang="ms" centered labelled />
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} hari latihan · {FACTS.liveSessions} sesi · ABC melaporkan {FACTS.cohorts} kohort telah selesai</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Keupayaan yang dibina</span></div></Reveal>
          <Reveal><h2 className="sec-h">Enam kaedah keputusan yang saling melengkapi.</h2></Reveal>
          <div className="insight-grid mt-m">
            {EDGE.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8 }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="campaign-fact-band">
        <div className="wrap campaign-fact-grid">
          {[["CMI", "Dianugerahkan dan disokong oleh CMI (UK)"], [FACTS.trainingDays, "hari latihan langsung merentasi tiga peringkat"], ["1", "projek aplikasi berasaskan isu perniagaan sebenar"], ["Kelayakan", "penilaian biasiswa untuk pemohon Malaysia"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Apa yang termasuk</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pengajaran, bimbingan, alat dan penilaian dalam program.</h2></Reveal>
          <div role="list" style={{ padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {WALK.map((w) => (
              <Reveal key={w}>
                <div role="listitem" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc" style={{ marginTop: 3, fontWeight: 700 }}>→</span>
                  <span style={{ color: "var(--ink-2)", fontSize: "1.02rem" }}>{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>Yuran standard ialah {FACTS.priceStd}. Pemohon Malaysia yang layak boleh dipertimbangkan, secara terpilih, untuk biasiswa LIFE Innoversity. Sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis. Biasiswa tidak diberikan secara automatik. {HRD_CORP_CLAIM_MS} Pelan ansuran disenaraikan di halaman yuran.</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>Dapatkan maklumat program dan biasiswa 2026.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>Terima maklumat ringkas terlebih dahulu, kemudian pilih e-mel, WhatsApp atau panggilan padanan program yang ringkas. Pasukan program akan menerangkan tarikh mula yang diterbitkan, yuran peserta Malaysia dan proses permohonan HRD Corp oleh majikan.</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="ms" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · Penyelaras Program · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>
    </div>
  );
}
