import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/ms/intakes";

export const metadata = withSeo(path, {
  title: "Tarikh Kohort Executive MBA 2026 — Bahasa Inggeris dan Mandarin",
  description:
    "Semak tarikh dan waktu tiga sesi hujung minggu bagi Cohort 17–19 (Bahasa Inggeris) dan Cohort 2–3 (Mandarin) untuk tahun 2026.",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Laman Utama", path: "/ms" }, { name: "Tarikh kohort", path }]} />
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Kohort Bahasa Inggeris dan Mandarin 2026</span></div>
            <h1 className="sec-h">Pilih kohort yang sesuai dengan jadual kerja anda.</h1>
            <p className="sec-sub">Kelima-lima kohort yang diterbitkan diselesaikan melalui tiga sesi hujung minggu dalam tempoh tiga bulan. Chartered Manager ialah laluan pilihan CMI yang berasingan dan tidak termasuk dalam program ini atau yuran yang diterbitkan.</p>
            <p className="fine mt-s">Pasukan program mengesahkan kekosongan kohort semasa membalas pertanyaan anda.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">Jadual penuh</span></div></Reveal>
          <Reveal><h2 className="sec-h">Pastikan anda dapat hadir pada ketiga-tiga hujung minggu.</h2></Reveal>
          <Reveal className="mt-m"><IntakeSchedule lang="ms" /></Reveal>
          <p className="fine mt-s">Cohort 17 berlangsung pada hari Sabtu hingga Ahad; kohort lain yang diterbitkan berlangsung pada hari Jumaat hingga Sabtu. Semua sesi bermula 9 pagi hingga 6 petang. Jika ABC mengubah tarikh yang diterbitkan, peserta berdaftar akan menerima tarikh gantian secara bertulis.</p>
        </div>
      </section>

      <section className="section center">
        <div className="wrap maxw-820">
          <Reveal>
            <h2 className="sec-h">Sebelum membuat keputusan, sahkan tarikh dan urusan kehadiran anda.</h2>
            <p className="sec-sub">Maklumkan kepada pasukan program tarikh dan bahasa pilihan anda. Anda boleh memilih panggilan ringkas, sesi penerangan dalam talian, pertemuan di lokasi yang dipersetujui, atau menerima maklumat terlebih dahulu.</p>
            <div className="mt-m"><Link href="/ms/apply" className="btn btn-primary">{CTA_LABELS.ms.conversation} →</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
