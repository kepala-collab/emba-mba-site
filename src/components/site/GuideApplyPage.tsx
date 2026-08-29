import Link from "next/link";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/content";

type Locale = "en" | "ms" | "zh";

const COPY = {
  en: {
    eyebrow: "Free 2026 programme guide",
    title: "Get the programme guide. Then decide if a conversation is worthwhile.",
    intro: "The PDF explains the six-month structure, published dates, standard fee, scholarship assessment and CMI recognition in one clear document.",
    points: [
      "See how six training days are structured across six months.",
      "Understand who the programme is for and what you complete.",
      "Review the published facts before speaking with the programme team.",
    ],
    reassurance: "Free PDF · No payment · No application commitment",
    contact: "Prefer a direct answer? Contact Future Ready EMBA on WhatsApp →",
  },
  ms: {
    eyebrow: "Panduan program 2026 percuma",
    title: "Dapatkan panduan program. Kemudian tentukan sama ada perbualan diperlukan.",
    intro: "PDF ini menerangkan struktur enam bulan, tarikh diterbitkan, yuran standard, penilaian biasiswa dan pengiktirafan CMI dalam satu dokumen yang jelas.",
    points: [
      "Lihat susunan enam hari latihan sepanjang enam bulan.",
      "Fahami sasaran peserta dan hasil yang perlu disiapkan.",
      "Semak fakta yang diterbitkan sebelum berbincang dengan pasukan program.",
    ],
    reassurance: "PDF percuma · Tiada bayaran · Bukan komitmen permohonan",
    contact: "Mahukan jawapan terus? Hubungi Future Ready EMBA melalui WhatsApp →",
  },
  zh: {
    eyebrow: "免费 2026 课程指南",
    title: "先获取课程指南，再决定是否需要进一步沟通。",
    intro: "一份 PDF 清楚说明六个月课程结构、已公布日期、标准费用、奖学金择优评估方式及 CMI 认可。",
    points: [
      "了解六个培训日如何分布在六个月内。",
      "确认课程适合对象及学员需要完成的成果。",
      "先查看已公布资料，再决定是否联系课程团队。",
    ],
    reassurance: "免费 PDF · 无需付款 · 不代表申请承诺",
    contact: "希望直接获得答复？通过 WhatsApp 联系 Future Ready Executive MBA →",
  },
} as const;

export default function GuideApplyPage({ locale, source }: { locale: Locale; source: string }) {
  const copy = COPY[locale];
  const whatsappText = encodeURIComponent(
    locale === "zh"
      ? "您好，我想了解 Future Ready Executive MBA。请发送课程及下一期开课资料。"
      : locale === "ms"
        ? "Hai pasukan Future Ready EMBA, saya ingin mengetahui lebih lanjut tentang program dan kohort seterusnya."
        : "Hello Future Ready EMBA team, I'd like to understand the programme and next intake.",
  );

  return (
    <section className="section guide-apply-page geo-section">
      <div className="wrap guide-apply-grid">
        <Reveal className="guide-apply-copy">
          <p className="eyebrow"><span className="l" /><span className="mono sec-k">{copy.eyebrow}</span></p>
          <h1 className="sec-h">{copy.title}</h1>
          <p className="sec-sub">{copy.intro}</p>
          <ul className="guide-apply-points">
            {copy.points.map((point) => <li key={point}><span aria-hidden="true">→</span><span>{point}</span></li>)}
          </ul>
          <div className="guide-apply-marks"><ProgrammeMarks labelled /></div>
          <Link
            className="guide-apply-contact"
            href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="contact_click"
            data-track-id={`${source}_whatsapp`}
            data-track-location="guide_apply"
            data-contact-method="whatsapp"
            data-contact-language={locale}
          >
            {copy.contact}
          </Link>
        </Reveal>

        <Reveal delay={70} className="guide-apply-form-shell">
          <LeadForm
            source={source}
            programme="Executive MBA"
            lang={locale}
            placement="guide-apply"
            variant="campaign"
            defaultIntent="details_first"
          />
          <p className="guide-apply-reassurance">{copy.reassurance}</p>
        </Reveal>
      </div>
    </section>
  );
}
