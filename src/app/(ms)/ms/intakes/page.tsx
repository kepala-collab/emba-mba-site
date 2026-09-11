import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS, FACTS, INTAKES, PROGRAMME_YEAR, SITE } from "@/lib/content";
import { CORE_PAGES_MS } from "@/lib/content-ms";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";

const path = "/ms/intakes";
const content = CORE_PAGES_MS.intakes;

export const metadata = withSeo(path, {
  title: `Tarikh Kohort Executive MBA ${PROGRAMME_YEAR} — Bahasa Inggeris dan Mandarin`,
  description:
    `Dibuka untuk pertanyaan: semak tarikh dan waktu ${FACTS.liveSessions} sesi berjadual bagi Kohort 17–19 (Bahasa Inggeris) dan Kohort 2–3 (Mandarin) untuk tahun ${PROGRAMME_YEAR}.`,
});

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}${path}#course`,
  name: content.title,
  description: content.intro,
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}${path}`,
  inLanguage: "ms-MY",
  hasCourseInstance: INTAKES.map((c) => ({
    "@type": "CourseInstance",
    "@id": `${SITE.url}${path}#${c.language.toLowerCase()}-${c.co.toLowerCase().replace(" ", "-")}`,
    name: `${SITE.name} — ${c.language} ${c.co}`,
    courseMode: "onsite",
    courseWorkload: `Three ${c.days} sessions, 9am–6pm, during the six-month programme`,
    startDate: c.startDate,
  })),
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Tarikh kohort", path }]} />
      <JsonLd data={courseJsonLd} />
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Kohort Bahasa Inggeris dan Mandarin {PROGRAMME_YEAR}</span></div>
            <h1 className="sec-h">Pilih bila enam bulan anda bermula.</h1>
            <p className="sec-sub">Setiap kohort yang diterbitkan selesai dalam {FACTS.durationMonths} bulan menerusi {FACTS.liveSessions} sesi berjadual. Tarikh yang ditunjukkan ialah jadual {PROGRAMME_YEAR} yang diterbitkan; jika ABC mengubah sesuatu tarikh, peserta berdaftar menerima tarikh gantian secara bertulis. Chartered Manager pula ialah laluan Chartered Manager yang berasingan dan tidak wajib, ditentukan oleh CMI — ia tidak termasuk dalam program ini atau yuran yang diterbitkan.</p>
            <p className="fine mt-s">Dibuka untuk pertanyaan.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Jadual penuh</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pastikan anda dapat hadir pada ketiga-tiga hujung minggu.</h2></Reveal>
          <Reveal className="mt-m"><IntakeSchedule lang="ms" /></Reveal>
          <p className="fine mt-s">Kohort 17 berlangsung pada hari Sabtu hingga Ahad; kohort lain yang diterbitkan berlangsung pada hari Jumaat hingga Sabtu. Semua sesi bermula 9 pagi hingga 6 petang. Jika ABC mengubah tarikh yang diterbitkan, peserta berdaftar akan menerima tarikh gantian secara bertulis.</p>
        </div>
      </section>

      <section className="section center">
        <div className="wrap maxw-820">
          <Reveal>
            <h2 className="sec-h">Sebelum membuat keputusan, sahkan tarikh dan urusan kehadiran anda.</h2>
            <p className="sec-sub">Beritahu pasukan program tarikh dan bahasa pilihan anda. Anda boleh pilih panggilan ringkas, sesi penerangan dalam talian, pertemuan di lokasi yang dipersetujui, atau sekadar menerima maklumat dahulu.</p>
            <div className="mt-m"><Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.conversation} →</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
