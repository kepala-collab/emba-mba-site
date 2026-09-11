import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, OPERATOR, PROGRAMME_POSITIONING_MS, CTA_LABELS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS, INCLUSIONS_CMI_CERTIFICATE_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const PROGRAMME_POSITIONING_MS_FULL =
  `${PROGRAMME_POSITIONING_MS} Ia program pembangunan profesional bukan akademik selama enam bulan; bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.`;

export const metadata = withSeo("/ms/lp/meta", {
  title: "Daripada keputusan tidak formal kepada kaedah yang boleh ditunjukkan — Executive MBA 2026",
  description:
    `Sepanjang ${FACTS.durationLong}, ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, bimbingan dan projek amali atas isu semasa dalam organisasi anda sendiri, sambil anda terus bekerja.`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/ms/lp/meta" },
});

const SOURCE = "lp-meta-ms";

const PRESSURES = [
  ["Tanggungjawab anda semakin besar", "Keputusan yang anda pikul menjadi bahan projek amali perniagaan."],
  ["Keputusan semakin kurang jelas", "Anda mentakrifkan keputusan, menguji bukti dan mendedahkan pertukaran dengan satu kaedah."],
  ["Anda tidak boleh berhenti bekerja", `${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual; kerja amali berlaku dalam organisasi anda antara sesi.`],
] as const;

const PROCESS = [
  ["01", "Bawa satu keputusan semasa", "Mula dengan satu keputusan yang menjadi tanggungjawab anda sendiri dalam organisasi."],
  ["02", "Gunakan rangka kerja", "Gunakan proses tersusun untuk mentakrifkan masalah, menguji andaian dan membandingkan pilihan praktikal."],
  ["03", "Bina pelan tindakan", "Ubah analisis menjadi pelan tindakan bertulis yang disemak fasilitator."],
] as const;

export default function MsMetaLP() {
  return (
    <div lang="ms">
      <section className="section" style={{ paddingTop: "clamp(44px,6vw,80px)", borderBottom: "none" }}>
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: "center" }}><span className="l" /><span className="mono sec-k">Untuk pengurus yang membuat keputusan merentas orang, operasi dan strategi</span></div></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: "clamp(2.1rem,4.8vw,3.4rem)", letterSpacing: "-.01em", lineHeight: 1.18, margin: "10px auto 0", maxWidth: "24ch" }}>
              Daripada keputusan tidak formal kepada kaedah yang boleh ditunjukkan.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ color: "var(--ink-2)", fontSize: "1.14rem", maxWidth: "46ch", margin: "24px auto 30px", lineHeight: 1.9 }}>
              Sepanjang {FACTS.durationLong}, {FACTS.trainingDays} hari latihan merentasi {FACTS.liveSessions} sesi berjadual, bimbingan dan projek amali dijalankan atas isu semasa dalam organisasi anda sendiri, sambil anda terus bekerja. {PROGRAMME_POSITIONING_MS_FULL}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 26 }}>
              <a href="#apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <ProgrammeMarks lang="ms" centered labelled />
              <span className="mono" style={{ color: "var(--muted)", letterSpacing: ".06em", fontSize: ".76rem" }}>{FACTS.trainingDays} hari latihan · {FACTS.liveSessions} sesi berjadual · ABC melaporkan {FACTS.cohorts} kohort telah selesai</span>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="fine" style={{ margin: "16px auto 0", maxWidth: "48ch" }}>{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Mengapa pengurus mula mencari</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pemimpin masih boleh belajar cara membuat keputusan.</h2></Reveal>
          <div className="insight-grid mt-m">
            {PRESSURES.map(([h, p], i) => (
              <Reveal key={h} delay={(i % 3) * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".7rem", marginBottom: 10 }}>0{i + 1}</div>
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
          {[["CMI", "Dianugerahkan dan disokong oleh CMI (UK)"], [FACTS.trainingDays, `hari latihan merentasi ${FACTS.liveSessions} sesi berjadual`], [FACTS.cohorts, "kohort telah selesai, dilaporkan oleh ABC"], ["Dinilai secara terpilih", "penilaian biasiswa untuk pemohon Malaysia yang layak"]].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Apa yang anda akan lakukan</span></div></Reveal>
          <Reveal><h2 className="sec-h">Satu isu perniagaan masuk. Satu pelan tindakan bertulis keluar.</h2></Reveal>
          <div role="list" style={{ padding: 0, margin: "26px 0 0", display: "grid", gap: 14 }}>
            {PROCESS.map(([number, title, body]) => (
              <Reveal key={number}>
                <div role="listitem" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="acc mono" style={{ marginTop: 3, fontWeight: 700 }}>{number}</span>
                  <span style={{ color: "var(--ink-2)", fontSize: "1.02rem" }}><b style={{ color: "var(--ink)" }}>{title}.</b> {body}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s"><p className="fine" style={{ marginTop: 26 }}>{INCLUSIONS_CMI_CERTIFICATE_MS} Yuran standard ialah {FACTS.priceStd}. {FACTS.scholarshipEligibility} Biasiswa tidak automatik. {HRD_CORP_CLAIM_MS} Pelan ansuran boleh dilihat di halaman yuran.</p></Reveal>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="wrap maxw-820" style={{ textAlign: "center" }}>
          <Reveal><h2 className="sec-h" style={{ marginInline: "auto" }}>{CTA_LABELS.ms.guide}.</h2></Reveal>
          <Reveal><p className="sec-sub" style={{ margin: "16px auto 0", maxWidth: "44ch", lineHeight: 1.9 }}>Ambil maklumat ringkas dahulu, kemudian barulah pilih e-mel, WhatsApp atau {CTA_LABELS.ms.conversation.toLowerCase()}. Pasukan program akan menerangkan tarikh mula pengambilan, yuran standard dan proses permohonan HRD Corp yang diterajui majikan.</p></Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: 560, margin: "26px auto 0", textAlign: "left" }}>
              <LeadForm programme="Executive MBA" source={SOURCE} lang="ms" variant="campaign" defaultIntent="details_first" />
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
