import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/hrd-corp-claimable", {
  title: "Executive MBA & Geran HRD Corp untuk Majikan",
  description:
    "Bagaimana majikan Malaysia yang berdaftar memohon melalui e-TRiS sebelum latihan, dokumen yang dibekalkan, dan bagaimana HRD Corp memutuskan kelayakan serta pembiayaan.",
});

const STEPS = [
  {
    h: "Sahkan program yang didaftarkan",
    p: `${SITE.provider} memberi majikan butiran pendaftaran program, sebut harga, jadual, kandungan program dan dokumen jurulatih.`,
  },
  {
    h: "Majikan memohon sebelum latihan",
    p: "Pengguna HRD Corp yang diberi kuasa oleh majikan mengemukakan permohonan geran melalui e-TRiS sebelum kohort bermula. Peserta tidak mengemukakan permohonan tersebut.",
  },
  {
    h: "HRD Corp mengeluarkan keputusannya",
    p: "HRD Corp menentukan kelayakan dan jumlah yang diluluskan berdasarkan Allowable Cost Matrix. Jumlah itu tidak boleh melebihi baki levi majikan yang tersedia.",
  },
  {
    h: "Kedua-dua pihak mengemukakan dokumen tuntutan",
    p: "Selepas latihan yang diluluskan selesai, penyedia latihan dan majikan mengemukakan dokumen tuntutan masing-masing dalam tempoh yang ditetapkan HRD Corp.",
  },
];

const INCLUSIONS_MS = [
  { b: "Enam hari latihan merentasi tiga sesi berpandu", s: "Bengkel rangka kerja yang dikendalikan pengamal, mengikut tarikh yang telah diterbitkan sepanjang program enam bulan." },
  { b: "Penilaian kendiri pengurusan berpandu", s: "Nilai semula cara anda membuat keputusan hari ini, dan pilih bidang khusus untuk diperkukuh sepanjang program." },
  { b: "Bimbingan eksekutif & semakan projek", s: "Bimbingan bersemuka satu-dengan-satu, disesuaikan dengan konteks organisasi peserta sendiri." },
  { b: "The Leverage Management System (LMS)", s: "Peserta menyimpan rangka kerja program, bahan rujukan dan templat kerja untuk digunakan semula." },
];

const HRD_FAQS = [
  {
    q: "Bolehkah syarikat saya mendaftarkan pengasas atau ahli pasukan kanan?",
    a: "Program ini terbuka kepada eksekutif dan ke atas, termasuk pengurus kanan, pengarah, pemilik perniagaan dan pengasas. Bagi pembiayaan HRD Corp yang dipohon majikan, syarikat mesti berdaftar dengan HRD Corp, mempunyai baki levi dan mengemukakan permohonan sebelum latihan. Pengasas atau pemilik boleh disertakan apabila syarikat mengesahkan peserta berada dalam senarai gajinya. HRD Corp memutuskan kelayakan dan jumlah yang diluluskan.",
  },
  {
    q: "Bolehkah majikan saya memohon pembiayaan HRD Corp?",
    a: HRD_CORP_CLAIM_MS,
  },
  {
    q: "Adakah anda menguruskan dokumen?",
    a: `Pasukan program membekalkan sebut harga, jadual, kandungan program dan dokumen jurulatih. Majikan mengemukakan permohonan geran serta dokumen tuntutan di pihak majikan. ${SITE.provider} mengemukakan dokumen tuntutan penyedia latihan.`,
  },
  {
    q: "Bagaimana jika kami tidak berdaftar dengan HRDC?",
    a: `Yuran standard ialah ${FACTS.priceStd}. Biasiswa ${FACTS.scholarshipProvider} terhad dan diberikan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis — ia bukan automatik. Setiap anugerah dan yuran peserta disahkan satu per satu secara bertulis. Pilihan bayaran individu disenaraikan di halaman Yuran.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HRD_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HrdCorpClaimablePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* INTRO */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Permohonan HRD Corp oleh majikan · SBL-Khas · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              Fahami proses geran HRD Corp sebelum latihan bermula.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              {SITE.provider} ialah Penyedia Latihan HRD Corp (HRDC) yang diluluskan. Future
              Ready Business Leadership dianugerahkan dan disokong oleh Chartered Management Institute (CMI).
              <b style={{ color: "var(--ink)" }}> {HRD_CORP_CLAIM_MS}</b> Pasukan program menyediakan
              dokumen sokongan program.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ms/apply?intent=employer_sponsored" className="btn btn-primary">{CTA_LABELS.ms.company} →</Link>
              <Link href="/ms/fees" className="btn">Lihat yuran &amp; biasiswa</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW THE CLAIM WORKS */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Bagaimana tuntutan berjalan</span></div></Reveal>
          <Reveal><h2 className="sec-h">Kenali empat tanggungjawab, dari permohonan hingga tuntutan.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Majikan, HRD Corp dan penyedia latihan masing-masing memegang bahagian tersendiri dalam proses ini.
              Kelulusan hanya muktamad apabila HRD Corp mengeluarkannya.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{s.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{s.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Apa yang dirangkumi</span></div></Reveal>
          <Reveal><h2 className="sec-h">Lihat komponen program yang termasuk dalam geran yang diluluskan.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              HRD Corp menyatakan jumlah yang diluluskan dalam keputusan gerannya. Executive MBA ialah
              program enam bulan yang berakhir dengan sijil program. Program ini merangkumi:
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "var(--surface)" }}>
              {INCLUSIONS_MS.map((it, i) => (
                <li key={it.b} style={{ padding: "20px 22px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 16 }}>
                  <span className="mono acc" style={{ fontSize: ".8rem", flex: "none", marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.14rem", display: "block" }}>{it.b}</b>
                    <span style={{ color: "var(--ink-2)", fontSize: ".93rem", display: "block", marginTop: 4 }}>{it.s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            Butiran penuh program di halaman <Link href="/ms/executive-mba">Executive MBA</Link>.
            Program profesional ini dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik yang
            dikawal selia MQA.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY NOTE */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Siapa yang boleh menuntut</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pilih laluan pembiayaan majikan atau bayaran individu.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Tuntutan HRD Corp ialah laluan <b style={{ color: "var(--ink)" }}>B2B yang dibayar syarikat</b>:
              majikan Malaysia yang berdaftar dengan HRD Corp mengemukakan permohonan sebelum latihan.
              HRD Corp memutuskan kelayakan dan jumlah yang diluluskan, yang tidak boleh melebihi baki levi
              majikan yang ada. Belum berdaftar levi, atau menyertai secara
              individu? Biasiswa {FACTS.scholarshipProvider} terhad dan diberikan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis —
              atau anda boleh memilih pelan ansuran.
            </p>
          </Reveal>
          <p className="fine mt-s">
            Pihak yang memohon geran ialah majikan, bukan peserta; HRD Corp, bukan penyedia program, memutuskan kelulusan dan jumlah yang diluluskan. Pasukan program membekalkan dokumen program:
            {" "}{SITE.director}, {SITE.phone} · {SITE.email}. Untuk membincangkan kelayakan dan dokumentasi, hantar{" "}
            <Link href="/ms/apply">pertanyaan program</Link>.
          </p>
        </div>
      </section>

      {/* HRDC FAQ */}
      <section className="section faq">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">HRD Corp · jawapan ringkas</span></div></Reveal>
          <Reveal><h2 className="sec-h">Fahami soalan HRDC yang majikan sering tanya.</h2></Reveal>
          <Reveal className="mt-s">
            {HRD_FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
          <p className="fine center mt-s">
            Lanjut tentang kos dan pembiayaan di halaman <Link href="/ms/fees">pelaburan</Link>.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Sediakan permohonan HRD Corp syarikat anda sebelum latihan." sub="Pilih panggilan, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." defaultIntent="employer_sponsored" intentOptions={["employer_sponsored", "employer_evaluating"]} />
    </>
  );
}
