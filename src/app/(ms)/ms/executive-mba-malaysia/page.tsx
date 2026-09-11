import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CTA_LABELS, CLIENTS, FACTS, PROGRAMME_POSITIONING_MS, SITE } from "@/lib/content";
import { CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS, HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/executive-mba-malaysia", {
  title: "Executive MBA Malaysia untuk Pemimpin yang Bekerja",
  description:
    "Untuk pemilik, pengarah dan pengurus kanan Malaysia: satu isu sebenar ke pelan disemak fasilitator dalam enam bulan, yuran, biasiswa dan pembiayaan HRD Corp bertulis.",
});

const TERMA = [
  {
    h: "Pembiayaan HRD Corp yang diterajui majikan",
    p: `${HRD_CORP_CLAIM_MS} Pasukan program menyediakan sebut harga, jadual, kandungan program dan dokumen jurulatih untuk membantu majikan memohon.`,
  },
  {
    h: "Kelayakan biasiswa untuk pemohon Malaysia",
    p: `Yuran standard ialah ${FACTS.priceStd}. Biasiswa ${FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis. Sebarang anugerah dan yuran peserta disahkan secara individu secara bertulis; biasiswa tidak automatik.`,
  },
  {
    h: "Enam bulan seiring dengan jawatan anda",
    p: `Anda melengkapkan ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, dari 9 pagi hingga 6 petang, sepanjang ${FACTS.durationMonths} bulan, sambil kekal dalam jawatan anda. Chartered Manager ialah laluan Chartered Manager yang berasingan dan tidak wajib, ditentukan oleh CMI, dengan syarat kelayakan, penilaian dan yuran tersendiri.`,
  },
  {
    h: "Fasilitator dan kajian kes yang dekat dengan konteks ASEAN",
    p: "Fasilitator membawa pengalaman sebenar di Malaysia dan serantau — dalam kepimpinan korporat, perundingan, pembuatan, kewangan, pengurusan bakat dan transformasi organisasi.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/ms/executive-mba-malaysia#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan membawa satu isu perniagaan sebenar dalam tanggungjawab peserta Malaysia kepada pelan tindakan bertulis yang disemak fasilitator, sepanjang enam bulan, sambil peserta terus bekerja. Program ini dianugerahkan dan disokong oleh CMI, dikendalikan di Malaysia dan dalam talian; majikan berdaftar HRD Corp yang layak boleh memohon pembiayaan diterajui majikan, tertakluk pada kelulusan.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/ms/executive-mba-malaysia`,
  inLanguage: "ms-MY",
  areaServed: { "@type": "Country", name: "MY" },
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/ms/executive-mba-malaysia#malaysia-course-instance`,
    name: "Future Ready Executive MBA — penyampaian Malaysia",
    url: `${SITE.url}/ms/executive-mba-malaysia`,
    courseMode: "onsite",
    offers: {
      "@type": "Offer",
      price: "10000",
      priceCurrency: "MYR",
      category: "Executive education",
      url: `${SITE.url}/ms/executive-mba-malaysia`,
    },
  },
};

export default function ExecutiveMbaMalaysiaPage() {
  return (
    <>
      <JsonLd data={courseJsonLd} />

      {/* INTRO — Malaysia-specific */}
      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Executive MBA · Malaysia</span></div>
          </Reveal>
          <Reveal>
            <h1 className="sec-h" style={{ maxWidth: "24ch" }}>
              Daripada satu isu sebenar kepada pelan disemak fasilitator.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Pemilik perniagaan, pengarah dan pengurus kanan di Malaysia memikul keputusan yang ditunggu oleh seluruh
              perniagaan. Sepanjang {FACTS.durationMonths} bulan, projek amali perniagaan membawa satu keputusan itu —
              soal harga, soal penggantian kepimpinan atau isu operasi dalam tanggungjawab anda sendiri — daripada
              masalah kepada pelan bertulis yang mengandungi keputusan, tindakan, pemilik dan ukuran, disemak oleh
              fasilitator, sambil anda kekal dalam jawatan anda. {PROGRAMME_POSITIONING_MS} Ia program pembangunan
              profesional bukan akademik selama enam bulan; bukan ijazah akademik terakreditasi MQA atau kelayakan
              yang dikawal selia. {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Anda melengkapkan {FACTS.trainingDays} hari latihan merentasi {FACTS.liveSessions} sesi berjadual,
              bimbingan satu-ke-satu dan projek amali, sambil terus bekerja. Chartered Manager ialah laluan
              Chartered Manager yang berasingan dan tidak wajib, ditentukan oleh CMI, dan tidak termasuk dalam
              program mahupun yuran yang diterbitkan.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Yuran standard ialah {FACTS.priceStd}. Biasiswa {FACTS.scholarshipProvider} adalah terhad dan
              dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan
              bertulis. Sebarang anugerah dan yuran peserta disahkan secara individu secara bertulis; biasiswa tidak
              automatik. <b style={{ color: "var(--ink)" }}>{HRD_CORP_CLAIM_MS}</b>
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
              <Link href="/ms/apply?intent=employer_sponsored" className="btn">{CTA_LABELS.ms.company}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TERMA YANG DISAHKAN UNTUK MALAYSIA */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Terma yang disahkan untuk Malaysia</span></div></Reveal>
          <Reveal><h2 className="sec-h">Yuran, laluan pembiayaan dan jadual, disahkan secara bertulis.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Kelayakan biasiswa untuk pemohon Malaysia, proses HRD Corp yang diterajui majikan, dan jadual kohort
              dalam Bahasa Inggeris atau Mandarin, setiap satu disahkan secara individu secara bertulis, di samping
              yuran standard.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {TERMA.map((r, i) => (
              <Reveal key={r.h} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="mono acc" style={{ fontSize: ".82rem", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                  <b style={{ color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.12rem", display: "block", marginBottom: 8 }}>{r.h}</b>
                  <span style={{ color: "var(--ink-2)", fontSize: ".93rem" }}>{r.p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            Permohonan geran dibuat oleh majikan, bukan peserta; dan HRD Corp — bukan penyedia program — yang memutuskan kelulusan serta jumlah yang diluluskan. Lihat{" "}
            <Link href="/ms/hrd-corp-claimable">pembiayaan HRD Corp yang diterajui majikan</Link>. Butiran penuh program di halaman{" "}
            <Link href="/ms/executive-mba">Executive MBA</Link>, atau semak{" "}
            <Link href="/ms/chartered-manager-malaysia">laluan Chartered Manager di Malaysia</Link>. Jika anda sedang membandingkan kategori program, baca{" "}
            <Link href="/ms/insights/executive-education-vs-executive-mba">pendidikan eksekutif vs Executive MBA</Link>.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="stats">
            <div><b>{FACTS.trainingDays}</b><span>Hari latihan sepanjang enam bulan</span></div>
            <div><b>{FACTS.cohorts}</b><span>Kohort dalam rekod program ABC</span></div>
            <div><b>Kelayakan</b><span>penilaian biasiswa untuk pemohon Malaysia</span></div>
            <div><b>Sebelum latihan</b><span>Majikan memohon geran HRD Corp bagi pihak peserta</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section section--alt">
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Profil syarikat ABC</span></div></Reveal>
          <Reveal><h2 className="sec-h">Lihat organisasi dalam profil penyedia program.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Profil syarikat terkini {SITE.provider} menyenaraikan organisasi berikut
              antara pelanggan dan peserta programnya yang lebih luas:
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 12 }}>
              {CLIENTS.slice(0, 12).map((c) => (
                <li key={c} className="mono" style={{ padding: "10px 16px", border: "1px solid var(--line)", borderRadius: 999, background: "var(--surface)", color: "var(--ink-2)", fontSize: ".84rem" }}>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="fine mt-s">
            Organisasi yang dinamakan mencerminkan pelanggan dan peserta merentasi program {SITE.providerShort};
            penyenaraian ini tidak bermaksud sebarang sokongan rasmi.
          </p>
        </div>
      </section>

      {/* 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Kohort Bahasa Inggeris dan Mandarin 2026</span></div></Reveal>
          <Reveal><h2 className="sec-h">Semak jadual Bahasa Inggeris dan Mandarin yang telah diterbitkan.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Kohort awam Malaysia semasa berjalan dari 9 pagi hingga 6 petang. Kohort 17 diadakan Sabtu hingga Ahad,
              manakala kohort Bahasa Inggeris dan Mandarin lain yang diterbitkan diadakan Jumaat hingga Sabtu.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <IntakeSchedule lang="ms" label="Jadual Sesi Pengambilan Malaysia 2026" />
          </Reveal>
          <p className="mt-s">
            <Link href="/ms/intakes" className="btn btn-primary">Lihat semua kohort 2026</Link>
          </p>
          <p className="fine center mt-s">
            {PROGRAMME_POSITIONING_MS} Ia bukan ijazah akademik yang dikawal selia MQA.{" "}
            {CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Majikan Malaysia yang layak boleh memohon pembiayaan
            HRD Corp sebelum latihan bermula; HRD Corp yang memutuskan kelulusan serta jumlah yang diluluskan. Anda
            boleh juga <Link href="/ms/apply">jadualkan sesi perbincangan program</Link> sebelum membuat keputusan.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan jadual, yuran dan laluan pembiayaan di Malaysia." sub="Pilih panggilan telefon, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan anda tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang diterajui majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." />
    </>
  );
}
