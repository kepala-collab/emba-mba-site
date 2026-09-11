import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, OPERATOR, PROGRAMME_POSITIONING_MS, CTA_LABELS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS, COMPARISON_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const PROGRAMME_POSITIONING_MS_FULL =
  `${PROGRAMME_POSITIONING_MS} Ia program pembangunan profesional bukan akademik selama enam bulan; bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.`;

export const metadata = withSeo("/ms/lp/google", {
  title: "Datang dengan isu perniagaan, pulang dengan pelan tindakan — Executive MBA 2026",
  description:
    `Sepanjang ${FACTS.durationLong}, ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, bimbingan dan projek amali atas isu semasa dalam organisasi anda sendiri, sambil anda terus bekerja.`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/ms/lp/google" },
});

const SOURCE = "lp-google-ms";

const PROCESS = [
  ["01", "Bawa satu keputusan semasa", "Mula dengan satu keputusan yang menjadi tanggungjawab anda sendiri dalam organisasi."],
  ["02", "Gunakan rangka kerja", "Gunakan F.A.S.T. dan disiplin membuat keputusan program untuk menguji andaian dan pilihan."],
  ["03", "Bina pelan tindakan", "Ubah analisis menjadi pelan tindakan bertulis yang disemak fasilitator."],
  ["04", "Guna semula kaedah", "Rangka kerja dan templat kerja kekal bersama anda untuk keputusan akan datang."],
] as const;

const INCLUDED = [
  [`${FACTS.liveSessions} sesi berjadual, dipandu secara langsung`, "Dikendalikan oleh pengamal perniagaan, perunding dan jurulatih eksekutif yang disahkan ABC — anda belajar secara langsung bersama kohort anda."],
  ["Diagnostik kepimpinan peribadi", "Penilaian tersusun untuk melihat cara anda membuat keputusan dan bahagian mana yang paling berbaloi anda kembangkan."],
  ["Bimbingan satu-ke-satu untuk projek anda", "Bimbingan peribadi yang terus dipakai pada isu sebenar dalam organisasi anda — bukan sekadar kajian kes."],
  ["Rangka kerja dan templat kerja", "Simpan semua rangka kerja, rujukan dan templat, dan terus gunakannya di tempat kerja selepas program tamat."],
  ["Projek amali perniagaan", "Hantar satu pelan tindakan bertulis atas isu perniagaan anda sendiri, disemak fasilitator — tiada peperiksaan atau tesis tradisional."],
  [`Penyempurnaan program yang berjaya membawa kepada CMI Certificate of Recognition`, "Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, ditentukan oleh CMI, dengan kelayakan, penilaian dan yuran tersendiri."],
];

export default function MsGoogleLP() {
  return (
    <div lang="ms">
      <section className="section" style={{ paddingTop: "clamp(40px,6vw,72px)", borderBottom: "none" }}>
        <div className="wrap">
          <div className="lpg-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Untuk pengurus yang sedang menimbang satu keputusan sebenar</span></div></Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontSize: "clamp(2.1rem,4.6vw,3.3rem)", letterSpacing: "-.01em", lineHeight: 1.16, marginTop: 6 }}>
                  Datang dengan isu perniagaan, <em style={{ color: "var(--crimson)", fontStyle: "normal" }}>pulang dengan pelan tindakan.</em>
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p style={{ color: "var(--ink-2)", fontSize: "1.1rem", maxWidth: "44ch", margin: "22px 0 26px", lineHeight: 1.9 }}>
                  Sepanjang {FACTS.durationLong}, {FACTS.trainingDays} hari latihan merentasi {FACTS.liveSessions} sesi berjadual, bimbingan dan projek amali dijalankan atas isu semasa dalam organisasi anda sendiri, sambil anda terus bekerja. {PROGRAMME_POSITIONING_MS_FULL}
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <ProgrammeMarks lang="ms" labelled />
                  <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} hari latihan · {FACTS.liveSessions} sesi berjadual · ABC melaporkan {FACTS.cohorts} kohort telah selesai</span>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="lpg-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--line)", marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
                  {[[FACTS.durationLong, "Satu isu perniagaan sebenar kepada pelan tindakan disemak fasilitator"], [`${FACTS.trainingDays} hari`, `Merentasi ${FACTS.liveSessions} sesi berjadual`], ["Dinilai secara terpilih", "Penilaian biasiswa untuk pemohon Malaysia yang layak"]].map(([b, s]) => (
                    <div key={s} className={b.includes("→") ? "lpg-price-stat" : undefined} style={{ background: "var(--surface)", padding: "16px 14px" }}>
                      <b style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.3rem", display: "block", color: "var(--ink)" }}>{b}</b>
                      <span className="mono" style={{ fontSize: ".58rem", letterSpacing: ".04em", color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={210}>
                <p className="fine" style={{ marginTop: 16, maxWidth: "48ch" }}>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}</p>
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
          {[["CMI", "Dianugerahkan dan disokong oleh CMI (UK)"], [FACTS.trainingDays, `hari latihan merentasi ${FACTS.liveSessions} sesi berjadual`], [FACTS.cohorts, "kohort telah selesai, dilaporkan oleh ABC"], ["Dinilai secara terpilih", "penilaian biasiswa untuk pemohon Malaysia yang layak"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section campaign-method">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Bagaimana kerja ini menjadi berguna</span></div></Reveal>
          <Reveal><h2 className="sec-h">Satu isu perniagaan masuk. Satu pelan tindakan bertulis keluar.</h2></Reveal>
          <div className="campaign-path mt-m">
            {PROCESS.map(([number, title, copy]) => (
              <Reveal key={number}><article><span className="mono">{number}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Apa yang termasuk</span></div></Reveal>
          <Reveal><h2 className="sec-h">Semuanya sudah termasuk dalam yuran.</h2></Reveal>
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

      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Perbandingan program yang jelas skopnya</span></div></Reveal>
          <Reveal><h2 className="sec-h">Bandingkan tujuan, format, penilaian dan sifat sijil program.</h2></Reveal>
          <Reveal><p className="sec-sub">Jadual di bawah menggambarkan MBA akademik rujukan sebagai program 18–24 bulan dengan modul akademik, tugasan atau peperiksaan serta tesis; ia tidak mewakili semua MBA akademik.</p></Reveal>
          <div className="mt-s" style={{ display: "grid", gap: 1, background: "var(--line)", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
            {COMPARISON_MS.map((row) => (
              <div key={row.k} className="lpg-cmp" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", gap: 1, background: "var(--line)" }}>
                <div style={{ background: "var(--surface)", padding: "14px 16px" }}><span className="mono sec-k" style={{ fontSize: ".7rem" }}>{row.k}</span></div>
                <div style={{ background: "var(--bg)", padding: "14px 16px", color: "var(--ink)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="acc mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>Program ini</span>{row.us}</div>
                <div style={{ background: "var(--surface)", padding: "14px 16px", color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}><span className="mono" style={{ fontSize: ".6rem", display: "block", marginBottom: 2 }}>MBA akademik rujukan</span>{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="request-plan-again" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>{CTA_LABELS.ms.guide}.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>Ambil panduan dahulu, kemudian barulah pilih sama ada mahu berbincang lanjut melalui WhatsApp atau {CTA_LABELS.ms.conversation.toLowerCase()}. Pasukan program akan menerangkan tarikh pengambilan, yuran standard {FACTS.priceStd} dan proses permohonan HRD Corp yang diterajui majikan. {FACTS.scholarshipEligibility} Biasiswa tidak automatik. {HRD_CORP_CLAIM_MS}</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="ms" placement="footer-cta" variant="campaign" defaultIntent="details_first" />
            </div>
          </Reveal>
          <Reveal><p className="fine" style={{ marginTop: 20 }}>{SITE.director} · Penyelaras Program · {SITE.phone} · {SITE.email}</p></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap maxw-820">
          <p className="fine" style={{ maxWidth: "70ch" }}>{PROGRAMME_POSITIONING_MS_FULL} Peserta yang berjaya dianugerahkan CMI Certificate of Recognition. {HRD_CORP_CLAIM_MS} Data peribadi diproses menurut Akta Perlindungan Data Peribadi 2010 [Akta 709] Malaysia, seperti yang dipinda. Program disampaikan oleh {SITE.provider}. Laman ini dikendalikan oleh {OPERATOR.name}.</p>
        </div>
      </section>

      
    </div>
  );
}
