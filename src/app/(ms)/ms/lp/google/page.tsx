import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/lp/google", {
  title: "Executive MBA Malaysia — Diiktiraf CMI (UK), Program Enam Bulan",
  description:
    "Program pembangunan profesional Future Ready Executive MBA enam bulan: enam hari latihan, tiga sesi berjadual dan projek aplikasi perniagaan. Pembiayaan majikan tertakluk pada syarat dan kelulusan HRD Corp.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/ms/lp/google" },
});

const SOURCE = "lp-google-ms";

const INCLUDED = [
  ["Fasilitasi langsung dalam tiga sesi", "Dikendalikan oleh pengamal perniagaan, perunding dan jurulatih eksekutif yang disahkan ABC dalam makluman kohort."],
  ["Diagnostik kepimpinan peribadi", "Penilaian berstruktur untuk mengenal pasti corak keputusan dan keutamaan pembangunan anda."],
  ["Bimbingan eksekutif dan projek", "Bimbingan peribadi yang diaplikasikan terhadap perniagaan sebenar anda, bukan kajian kes."],
  ["Sistem pengurusan tuasan (LMS)", "Kekalkan rangka kerja, rujukan dan templat kerja selepas menamatkan program."],
  ["Projek aplikasi perniagaan", "Hantar satu pelan tindakan perniagaan untuk penilaian fasilitator; tiada tesis atau peperiksaan tradisional."],
  ["Dianugerahkan dan disokong oleh CMI (UK)", "Chartered Manager ialah laluan berasingan yang bersifat pilihan, dengan kelayakan, penilaian dan yuran tersendiri."],
];

const CMP = [
  ["Masa", "Enam bulan: enam hari latihan, diselesaikan dalam tiga sesi berjadual", "18–24 bulan"],
  ["Pelaburan", "Yuran standard RM10,000.00; pemohon Malaysia yang layak boleh dipertimbangkan, secara terpilih, untuk biasiswa, dengan sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis", "Yuran pengajian dan caj tambahan yang diterbitkan institusi penganugerah"],
  ["Format", "Tiga hujung minggu berjadual sepanjang program; peserta terus bekerja", "Mengikut jadual akademik yang diterbitkan institusi penganugerah"],
  ["Penilaian", "Projek aplikasi berasaskan perniagaan peserta sendiri; tiada peperiksaan atau tesis tradisional", "Tugasan atau peperiksaan, berserta tesis"],
  ["Sijil", "Sijil pengiktirafan program profesional CMI; bukan ijazah akademik bertauliah MQA", "Ijazah MBA akademik daripada institusi penganugerah"],
];

export default function MsGoogleLP() {
  return (
    <div lang="ms">
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Untuk pengurus Malaysia yang sedang membandingkan program pembangunan profesional</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.1rem,4.6vw,3.3rem)", letterSpacing: "-.01em", lineHeight: 1.16, marginTop: 6 }}>
                  Tamatkan dalam enam bulan: Executive MBA dalam kepimpinan perniagaan masa hadapan, <em style={{ color: "var(--crimson)", fontStyle: "normal" }}>dianugerahkan dan disokong oleh CMI.</em>
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.1rem", maxWidth: "44ch", margin: "22px 0 26px", lineHeight: 1.9 }}>
                  Selesaikan tiga sesi, projek perniagaan dan program pembangunan profesional yang diiktiraf CMI dalam enam bulan, sambil terus bekerja. <b style={{ color: "var(--ink)" }}>Chartered Manager</b> ialah laluan CMI berasingan yang bersifat pilihan, dengan kelayakan, penilaian dan yuran tersendiri.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <ProgrammeMarks lang="ms" labelled />
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} hari latihan · {FACTS.liveSessions} sesi · ABC melaporkan {FACTS.cohorts} kohort telah selesai</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[["6 bulan", "Program pembangunan profesional lengkap"], [FACTS.trainingDays + " hari", "Diselesaikan dalam tiga sesi berjadual"], ["Kelayakan", "Penilaian biasiswa untuk pemohon Malaysia"]].map(([b, s]) => (
                    <div key={s} className={b.includes("→") ? "lpg-price-stat" : undefined} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.3rem", display: "block", color: "var(--ink)" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".58rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lpg-form" id="apply">
              <Reveal delay={120}>
                <LeadForm programme="Executive MBA" source={SOURCE} lang="ms" placement="hero" variant="campaign" defaultIntent="details_first" />
              </Reveal>
            </div>
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

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Apa yang termasuk</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pembelajaran dan sokongan yang dirangkumi oleh yuran program.</h2></Reveal>
          <div className="insight-grid mt-m">
            {INCLUDED.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".72rem", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{h}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.8 }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Perbandingan program dengan skop yang jelas</span></div></Reveal>
          <Reveal><h2 className="sec-h">Bandingkan tujuan, format, penilaian dan sifat sijil program.</h2></Reveal>
          <Reveal><p className="sec-sub">Jadual di bawah mentakrifkan MBA akademik rujukan sebagai program 18–24 bulan dengan modul akademik, tugasan atau peperiksaan serta tesis; ia tidak mewakili semua MBA akademik.</p></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {CMP.map(([k, us, them]) => (
              <div key={k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "var(--ink)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="acc mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>Program ini</span>{us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>MBA akademik rujukan</span>{them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="request-plan-again" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>Dapatkan maklumat program dan biasiswa 2026.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>Terima maklumat terlebih dahulu, kemudian pilih sama ada untuk berbincang lanjut melalui WhatsApp atau panggilan ringkas. Pasukan program akan menerangkan tarikh yang diterbitkan, yuran peserta Malaysia dan proses permohonan HRD Corp oleh majikan. {HRD_CORP_CLAIM_MS}</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="ms" placement="footer-cta" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · Penyelaras Program · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>

      <style>{`@media(max-width:900px){.lpg-grid{grid-template-columns:1fr!important;gap:30px!important}.lpg-cmp{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
