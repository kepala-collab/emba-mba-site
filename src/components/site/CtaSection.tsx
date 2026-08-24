import LeadForm from "./LeadForm";
import Reveal from "./Reveal";
import { SITE } from "@/lib/content";
import type { LeadIntent } from "@/lib/conversion-contract";

const DEFAULTS = {
  en: {
    eyebrow: "Programme enquiry",
    heading: "Get the facts you need to decide.",
    sub: "Choose a call, online meeting, in-person meeting or email. The programme team will answer questions about suitability, dates, fees, recognition and employer-led HRD Corp funding. An enquiry does not commit you to enrol or pay.",
    checklist: [
      "Choose how the team should contact you",
      "Confirm programme fit, available dates and the exact fee",
      "Decide your next step after receiving the information",
    ],
    coordinator: "Programme Coordinator",
  },
  zh: {
    eyebrow: "课程咨询",
    heading: "获取您做决定所需的资料。",
    sub: "选择通话、线上会议、面谈或电邮。课程团队会回答关于适合度、日期、费用、认可及雇主主导 HRD Corp 资助的问题；咨询不构成报名或付款承诺。",
    checklist: [
      "选择您希望团队联系您的方式",
      "确认课程是否适合、可选日期及实际费用",
      "收到资料后，决定您的下一步",
    ],
    coordinator: "课程协调员",
  },
  ms: {
    eyebrow: "Pertanyaan program",
    heading: "Dapatkan fakta yang anda perlukan untuk membuat keputusan.",
    sub: "Pilih panggilan, pertemuan dalam talian, pertemuan bersemuka atau e-mel. Pasukan program akan menjawab soalan tentang kesesuaian, tarikh, yuran, pengiktirafan dan pembiayaan HRD Corp yang dipohon majikan. Pertanyaan tidak mengikat anda untuk mendaftar atau membayar.",
    checklist: [
      "Pilih bagaimana pasukan patut menghubungi anda",
      "Sahkan kesesuaian program, tarikh yang tersedia dan yuran sebenar",
      "Tentukan langkah seterusnya selepas menerima maklumat",
    ],
    coordinator: "Penyelaras Program",
  },
} as const;

export default function CtaSection({
  programme = "Executive MBA",
  heading,
  sub,
  source = "emba-hub",
  formVariant = "standard",
  intentOptions,
  defaultIntent,
  steps,
  sectionId = "apply",
  lang = "en",
}: {
  programme?: string;
  heading?: string;
  sub?: string;
  source?: string;
  formVariant?: "standard" | "campaign";
  intentOptions?: readonly LeadIntent[];
  defaultIntent?: LeadIntent;
  steps?: readonly string[];
  sectionId?: string;
  lang?: "en" | "zh" | "ms";
}) {
  const d = DEFAULTS[lang];
  const resolvedHeading = heading ?? d.heading;
  const resolvedSub = sub ?? d.sub;
  const checklist = steps || d.checklist;
  return (
    <section id={sectionId} className="section" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="cta-grid">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">{d.eyebrow}</span></div>
            <h2 className="sec-h">{resolvedHeading}</h2>
            <p className="sec-sub">{resolvedSub}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {checklist.map((t) => (
                <li key={t} style={{ paddingLeft: 26, position: "relative", color: "var(--ink-2)" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--crimson)", fontFamily: "var(--font-plex-mono)" }}>→</span>{t}
                </li>
              ))}
            </ul>
            <p className="fine" style={{ marginTop: 22 }}>
              {SITE.director} · {d.coordinator} · {SITE.phone} · {SITE.email}
            </p>
          </Reveal>
          <Reveal delay={80}><LeadForm programme={programme} source={source} placement="footer-cta" variant={formVariant} intentOptions={intentOptions} defaultIntent={defaultIntent} lang={lang} /></Reveal>
        </div>
      </div>
    </section>
  );
}
