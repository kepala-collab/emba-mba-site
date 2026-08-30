import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/lp/meta", {
  title: "Executive MBA untuk Pemimpin yang Sedang Bekerja | Future Ready",
  description:
    "Future Ready Executive MBA selama enam bulan untuk pengurus yang sedang bekerja di Malaysia: enam hari latihan, tiga sesi berpandu dan projek berteraskan cabaran perniagaan sebenar.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/ms/lp/meta" },
});

const SOURCE = "lp-meta-ms";

const EDGE = [
  ["Fahami keseluruhan sistem", "Lihat punca, kaitan dan kesan susulan sesuatu isu sebelum anda membuat keputusan."],
  ["Uji andaian asas", "Bezakan fakta, kekangan dan andaian, kemudian bentuk pilihan berdasarkan bukti sebenar."],
  ["Gabungkan analisis dan inovasi", "Imbangkan logik strategik, keperluan pengguna dan kekangan sebenar di lapangan."],
  ["Susun maklumat yang rumit", "Ubah maklumat yang rumit menjadi keputusan yang mudah dijelaskan dan terus boleh dilaksanakan."],
  ["Nilai dari lima sudut", "Nilai setiap keputusan menerusi lima sudut perniagaan yang jelas."],
  ["Hubungkan bakat dan perniagaan", "Timbangkan keupayaan insan, inovasi dan keperluan komersial secara serentak."],
];

const WALK = [
  "Enam hari latihan berpandu secara langsung, dikendalikan fasilitator yang disahkan pasukan program",
  "Diagnostik kepimpinan peribadi untuk melihat cara anda membuat keputusan dan bahagian mana yang paling berbaloi anda kembangkan",
  "Bimbingan eksekutif peribadi yang terus dipakai pada situasi perniagaan anda sendiri",
  "Rangka kerja dan pustaka alat (LMS) yang kekal milik anda selepas program tamat",
  "Satu projek transformasi perniagaan untuk dinilai fasilitator",
  "Program dianugerahkan dan disokong oleh CMI (UK); Chartered Manager perlu dipohon secara berasingan",
];

export default function MsMetaLP() {
  return (
    <div lang="ms">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">Untuk pemimpin yang membuat keputusan merentas jabatan</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "20ch" }}>
              Tamatkan dalam enam bulan: Executive MBA dalam kepimpinan perniagaan masa hadapan, <em style={{ color: "var(--crimson)", fontStyle: "normal" }}>dianugerahkan dan disokong oleh CMI.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              Selesaikan enam hari latihan, bimbingan dan projek berteraskan cabaran perniagaan sebenar dalam enam bulan — sambil anda terus bekerja. Chartered Manager pula ialah laluan CMI yang berasingan dan bersifat pilihan, dengan kelayakan, penilaian dan yuran tersendiri.
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
          <Reveal><h2 className="sec-h">Kuasai enam kaedah membuat keputusan.</h2></Reveal>
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
          {[["CMI", "Dianugerahkan dan disokong oleh CMI (UK)"], [FACTS.trainingDays, "hari latihan langsung merentas tiga peringkat"], ["1", "projek berteraskan cabaran perniagaan sebenar"], ["Kelayakan", "penilaian biasiswa terpilih untuk pemohon Malaysia"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Apa yang termasuk</span></div></Reveal>
          <Reveal><h2 className="sec-h">Lihat semua yang anda dapat dalam program.</h2></Reveal>
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
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>Yuran standard ialah {FACTS.priceStd}. Biasiswa LIFE Innoversity terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis — ia tidak automatik dan bukan kod diskaun. {HRD_CORP_CLAIM_MS} Pelan ansuran boleh dilihat di halaman yuran.</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>Dapatkan maklumat program dan biasiswa 2026.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>Ambil maklumat ringkas dahulu, kemudian barulah pilih e-mel, WhatsApp atau panggilan kesesuaian program yang ringkas. Pasukan program akan menerangkan tarikh mula sesi pengambilan, yuran peserta Malaysia dan proses permohonan HRD Corp yang diterajui majikan.</p></Reveal>
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
