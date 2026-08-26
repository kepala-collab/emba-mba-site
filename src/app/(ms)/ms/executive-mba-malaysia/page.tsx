import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CLIENTS, CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/ms/executive-mba-malaysia", {
  title: "Executive MBA Malaysia untuk Pemimpin Bekerja",
  description:
    "Program eksekutif enam bulan untuk pemimpin bekerja di Malaysia, dengan pembelajaran aplikasi, pengiktirafan CMI dan laluan HRD Corp oleh majikan.",
});

const REASONS = [
  {
    h: "Pembiayaan HRD Corp dipohon majikan",
    p: `${HRD_CORP_CLAIM_MS} Pasukan program membekalkan sebut harga, jadual, kandungan kursus dan dokumen jurulatih.`,
  },
  {
    h: `Biasiswa Malaysia — ${FACTS.scholarshipAmount}`,
    p: `Yuran standard ialah ${FACTS.priceStd}. Pemohon Malaysia yang layak boleh menerima biasiswa ${FACTS.scholarshipProvider} selepas penilaian dan kelulusan bertulis. Penerima yang diluluskan membayar ${FACTS.priceAfterScholarship}.`,
  },
  {
    h: "Program enam bulan untuk pemimpin yang bekerja",
    p: "Program enam bulan ini menggunakan tiga hujung minggu berjadual, 9 pagi hingga 6 petang, bersama bimbingan dan projek aplikasi. Chartered Manager ialah laluan pilihan CMI yang berasingan dengan kelayakan, penilaian dan yuran tersendiri.",
  },
  {
    h: "Fasilitator dan kes yang relevan dengan ASEAN",
    p: "Pengalaman fasilitator merangkumi kerja di Malaysia dan serantau dalam kepimpinan korporat, perundingan, pembuatan, kewangan, bakat dan perubahan organisasi.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Ia dikendalikan di Malaysia dan dalam talian; pembiayaan majikan boleh dipertimbangkan bagi majikan berdaftar HRD Corp yang layak, tertakluk pada kelulusan.",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/ms/executive-mba`,
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
              Executive MBA yang dibina untuk pemimpin Malaysia.
            </h1>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Future Ready Executive MBA ialah program pendidikan eksekutif dan pembangunan profesional
              enam bulan untuk pemilik perniagaan, pengarah dan pengurus kanan di Malaysia. Ia dianugerahkan
              dan disokong oleh CMI serta dikendalikan melalui sesi langsung yang berfokus. <b style={{ color: "var(--ink)" }}>{HRD_CORP_CLAIM_MS}</b>{" "}
              Yuran program ditetapkan dalam ringgit pada {FACTS.priceStd}. Pemohon Malaysia yang layak boleh menerima{" "}
              <b style={{ color: "var(--ink)" }}>biasiswa {FACTS.scholarshipProvider} {FACTS.scholarshipAmount}</b> selepas penilaian dan kelulusan bertulis.
              Peserta menggunakan rangka kerja program terhadap organisasi, pasaran dan konteks operasi mereka sendiri.
            </p>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Anda terus bekerja sambil menyelesaikan tiga sesi hujung minggu berjadual, bimbingan dan projek aplikasi. Chartered Manager ialah laluan pilihan CMI yang berasingan dan tidak termasuk dalam program atau yuran yang diterbitkan. Program dikendalikan merentasi tiga sesi berjadual sementara peserta terus bekerja.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.guide} →</Link>
              <Link href="/ms/fees" className="btn">Yuran &amp; biasiswa</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY MALAYSIAN LEADERS CHOOSE IT */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Mengapa pemimpin Malaysia memilihnya</span></div></Reveal>
          <Reveal><h2 className="sec-h">Harga Malaysia, pembiayaan majikan dan jadual yang diterbitkan.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Program ini menggabungkan CMI Certificate of Recognition dengan kelayakan biasiswa Malaysia,
              proses HRD Corp yang dipohon majikan serta jadual kohort Bahasa Inggeris dan Mandarin.
            </p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {REASONS.map((r, i) => (
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
            Pihak yang memohon geran ialah majikan, bukan peserta; HRD Corp, bukan penyedia program, memutuskan kelulusan dan jumlah yang diluluskan. Lihat{" "}
            <Link href="/ms/hrd-corp-claimable">pembiayaan HRD Corp yang dipohon majikan</Link>. Butiran penuh program di halaman{" "}
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
            <div><b>{FACTS.trainingDays}</b><span>Hari latihan dalam program</span></div>
            <div><b>{FACTS.cohorts}</b><span>Kohort dalam rekod program ABC</span></div>
            <div><b>{FACTS.scholarshipAmount}</b><span>biasiswa untuk pemohon Malaysia yang layak</span></div>
            <div><b>Sebelum latihan</b><span>Majikan mengemukakan permohonan geran HRD Corp</span></div>
          </div></Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap maxw-820">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Profil syarikat ABC</span></div></Reveal>
          <Reveal><h2 className="sec-h">Organisasi yang disenaraikan oleh penyedia program.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Profil syarikat semasa {SITE.provider} menyenaraikan organisasi berikut
              dalam kalangan pelanggan dan peserta programnya yang lebih luas:
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
            penyenaraian tidak bermakna sokongan rasmi.
          </p>
        </div>
      </section>

      {/* 2026 INTAKES TEASER */}
      <section className="section">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Kohort Bahasa Inggeris dan Mandarin 2026</span></div></Reveal>
          <Reveal><h2 className="sec-h">Jadual Bahasa Inggeris dan Mandarin telah diterbitkan.</h2></Reveal>
          <Reveal>
            <p className="sec-sub">
              Kohort awam Malaysia semasa berjalan dari 9 pagi hingga 6 petang. Kohort 17 pada Sabtu hingga Ahad;
              kohort Bahasa Inggeris dan Mandarin lain yang diterbitkan pada Jumaat hingga Sabtu.
            </p>
          </Reveal>
          <Reveal className="mt-s">
            <IntakeSchedule lang="ms" label="Jadual kemasukan Malaysia 2026" />
          </Reveal>
          <p className="mt-s">
            <Link href="/ms/intakes" className="btn btn-primary">Lihat semua kohort 2026</Link>
          </p>
          <p className="fine center mt-s">
            Program profesional ini dianugerahkan dan disokong oleh CMI; ia bukan ijazah akademik yang
            dikawal selia MQA. Majikan Malaysia yang layak boleh memohon pembiayaan HRD Corp sebelum latihan;
            HRD Corp memutuskan kelulusan dan jumlah yang diluluskan. Anda boleh <Link href="/ms/apply">mengaturkan perbualan program</Link> sebelum membuat keputusan.
          </p>
        </div>
      </section>

      <CtaSection lang="ms" programme="Executive MBA" heading="Bincangkan jadual, yuran dan laluan pembiayaan di Malaysia." sub="Pilih panggilan, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar." />
    </>
  );
}
