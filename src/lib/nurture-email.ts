// Bilingual nurture email sequence — stage-gated follow-ups for guide requesters.
// Self-contained: no imports from app content so it can be rendered anywhere.

export type NurtureLanguage = "en" | "zh" | "ms";
export type NurtureStepKey = "day3" | "day7" | "day14";

export const NURTURE_STEPS: { key: NurtureStepKey; afterDays: number }[] = [
  { key: "day3", afterDays: 3 },
  { key: "day7", afterDays: 7 },
  { key: "day14", afterDays: 14 },
];

const NAVY = "#102B52";
const DEEP = "#0B1F3D";
const INK = "#1E3658";
const MUTED = "#526A89";
const PALE = "#EEF5FF";
const LINE = "#D6E2F2";
const GOLD = "#A9791F";
const BG = "#F2F6FC";

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif";

type StepCopy = {
  subject: string;
  preheader: string;
  greeting: (name: string) => string;
  headline: string;
  paragraphs: string[];
  facts?: { label: string; value: string }[];
  ctaLabel: string;
  ctaPath: string;
  secondaryLabel: string;
};

const WHATSAPP = "https://wa.me/60129818533";

const EN: Record<NurtureStepKey, StepCopy> = {
  day3: {
    subject: "Did the guide answer your questions?",
    preheader: "Three pages worth a second look — and one honest boundary worth knowing.",
    greeting: (name) => `Dear ${name},`,
    headline: "Did the guide answer your questions?",
    paragraphs: [
      "A few days ago you requested the Working Manager’s Guide to the Future Ready Executive MBA. Most readers tell us three sections decide it for them: how the six months actually run, what the CMI (UK) recognition means — and what it deliberately does not — and the published fee.",
      "If anything in those pages is unclear, that is exactly what a programme conversation is for. No payment, no enrolment commitment — just answers.",
    ],
    facts: [
      { label: "Format", value: "6 months · three scheduled weekends across the programme · no time out of the business" },
      { label: "Recognition", value: "Awarded and endorsed by CMI · professional programme, not an academic degree" },
      { label: "Fee", value: "RM10,000 published · scholarship assessed individually, confirmed in writing" },
    ],
    ctaLabel: "Arrange a programme conversation",
    ctaPath: "/apply",
    secondaryLabel: "Or reply to this email with your one question — the team reads every reply.",
  },
  day7: {
    subject: "The remaining 2026 cohorts, in one view",
    preheader: "Three weekends per cohort. The calendar decides more than the brochure does.",
    greeting: (name) => `Dear ${name},`,
    headline: "The calendar decides more than the brochure does.",
    paragraphs: [
      "Every cohort covers the full six-month programme across three scheduled weekends, 9am–6pm, on the published dates — so the applied work happens inside your business between sessions.",
      "The live calendar of remaining 2026 cohorts, in English and Mandarin, is on the website. If a date almost works, tell the team before you rule it out — the calendar conversation is usually the shortest one.",
    ],
    facts: [
      { label: "Commitment", value: "6 training days across 3 weekend sessions" },
      { label: "Between sessions", value: "Coaching plus an applied project on your own business" },
      { label: "Employers", value: "Funding may be available to eligible HRD Corp-registered employers, subject to HRD Corp approval" },
    ],
    ctaLabel: "See the live 2026 calendar",
    ctaPath: "/intakes",
    secondaryLabel: "Employer-sponsored? Ask for the employer funding brief — it maps the HRD Corp steps.",
  },
  day14: {
    subject: "One conversation. No commitment.",
    preheader: "Start with a conversation. Decide in your own time.",
    greeting: (name) => `Dear ${name},`,
    headline: "Start with a conversation. Decide in your own time.",
    paragraphs: [
      "Two weeks ago you requested the programme guide. If the timing isn’t right, that is a legitimate decision — the guide will still be honest next intake.",
      "But if the only thing between you and a decision is an unanswered question — fit, dates, the fee, the scholarship assessment, or what the recognition does and doesn’t mean — one short conversation settles it. No payment, no enrolment commitment, no follow-up pressure.",
    ],
    ctaLabel: "Arrange a programme conversation",
    ctaPath: "/apply",
    secondaryLabel: "Prefer chat? Message the programme team on WhatsApp — quick questions welcome.",
  },
};

const ZH: Record<NurtureStepKey, StepCopy> = {
  day3: {
    subject: "课程指南解答了您的疑问吗？",
    preheader: "三个最值得再看一遍的部分，以及一条值得了解的诚实边界。",
    greeting: (name) => `${name}，您好：`,
    headline: "课程指南解答了您的疑问吗？",
    paragraphs: [
      "几天前您索取了 Future Ready Executive MBA 课程指南。多数读者告诉我们，三个部分最能帮助他们做决定：六个月如何安排、CMI（英国）认可的含义与边界，以及已公布的课程费用。",
      "如果其中任何内容不够清楚，这正是课程沟通的意义——无需付款，不构成报名承诺，只为解答。",
    ],
    facts: [
      { label: "课程安排", value: "为期六个月 · 三个指定周末课程 · 无需离岗" },
      { label: "认可", value: "CMI（英国）认可的专业发展课程，非学术学位" },
      { label: "费用", value: "公布费用 RM10,000 · 奖学金逐一评估，以书面确认为准" },
    ],
    ctaLabel: "预约课程沟通",
    ctaPath: "/zh/apply",
    secondaryLabel: "也可直接回复本邮件提出您的问题，课程团队会阅读每一封回信。",
  },
  day7: {
    subject: "2026 年剩余班次，一目了然",
    preheader: "每个班次三个周末。日历比宣传册更能决定选择。",
    greeting: (name) => `${name}，您好：`,
    headline: "日历比宣传册更能决定选择。",
    paragraphs: [
      "每个班次均覆盖完整的六个月课程：三个排定的周末，9am–6pm，并按公布日期进行——应用项目就在两次课程之间、在您自己的业务中完成。",
      "网站上有 2026 年剩余英语及华语班次的实时日历。如果某个日期只差一点就合适，请先告诉团队再做决定——关于日历的沟通通常是最短的一次。",
    ],
    facts: [
      { label: "时间投入", value: "三个周末共六个培训日" },
      { label: "课程之间", value: "一对一辅导，及基于您自身业务的应用项目" },
      { label: "雇主赞助", value: "符合条件的 HRD Corp 注册雇主或可申请资助，以 HRD Corp 审批为准" },
    ],
    ctaLabel: "查看 2026 实时日历",
    ctaPath: "/zh/intakes",
    secondaryLabel: "由雇主赞助？可向团队索取雇主资助简报，了解 HRD Corp 申请步骤。",
  },
  day14: {
    subject: "一次沟通，零承诺",
    preheader: "从一次沟通开始，按您自己的节奏决定。",
    greeting: (name) => `${name}，您好：`,
    headline: "从一次沟通开始，按您自己的节奏决定。",
    paragraphs: [
      "两周前您索取了课程指南。如果现在时机未到，这本身就是一个合理的决定——下一个班次，指南依然诚实。",
      "但如果阻碍您做决定的只是一个未解答的问题——适合度、日期、费用、奖学金评估，或认可的含义与边界——一次简短沟通就能解决。无需付款，不构成报名承诺，也不会有后续压力。",
    ],
    ctaLabel: "预约课程沟通",
    ctaPath: "/zh/apply",
    secondaryLabel: "更习惯聊天？欢迎通过 WhatsApp 联系课程团队，小问题也欢迎。",
  },
};

const MS: Record<NurtureStepKey, StepCopy> = {
  day3: {
    subject: "Adakah panduan program menjawab persoalan anda?",
    preheader: "Tiga bahagian yang wajar dibaca semula — dan satu batasan jujur yang perlu anda ketahui.",
    greeting: (name) => `${name}, salam sejahtera,`,
    headline: "Adakah panduan program menjawab persoalan anda?",
    paragraphs: [
      "Beberapa hari lalu anda memohon Panduan Pengurus Bekerja untuk Future Ready Executive MBA. Kebanyakan pembaca memberitahu kami tiga bahagian yang paling membantu keputusan mereka: bagaimana tempoh enam bulan itu berjalan sebenarnya, apa maksud pengiktirafan CMI (UK) — dan apa yang secara sengaja tidak dimaksudkannya — serta yuran yang telah diterbitkan.",
      "Jika mana-mana bahagian dalam panduan itu kurang jelas, itulah sebabnya perbualan program wujud. Tiada pembayaran, tiada komitmen pendaftaran — hanya jawapan.",
    ],
    facts: [
      { label: "Format", value: "Tempoh enam bulan · tiga hujung minggu berjadual sepanjang program · tanpa perlu keluar dari kerja" },
      { label: "Pengiktirafan", value: "Dianugerah dan disokong oleh CMI · program profesional, bukan ijazah akademik" },
      { label: "Yuran", value: "RM10,000 diterbitkan · biasiswa dinilai secara individu, disahkan secara bertulis" },
    ],
    ctaLabel: "Atur perbualan program",
    ctaPath: "/ms/apply",
    secondaryLabel: "Atau balas e-mel ini dengan satu soalan anda — pasukan program membaca setiap balasan.",
  },
  day7: {
    subject: "Kohort 2026 yang masih tinggal, dalam satu paparan",
    preheader: "Tiga hujung minggu bagi setiap kohort. Kalendar lebih menentukan berbanding risalah.",
    greeting: (name) => `${name}, salam sejahtera,`,
    headline: "Kalendar lebih menentukan berbanding risalah.",
    paragraphs: [
      "Setiap kohort merangkumi keseluruhan program enam bulan sepanjang tiga sesi hujung minggu berjadual, 9 pagi–6 petang, mengikut tarikh yang diterbitkan — projek aplikasi anda dijalankan dalam perniagaan anda sendiri di antara sesi.",
      "Kalendar langsung bagi kohort 2026 yang masih tinggal, dalam Bahasa Inggeris dan Mandarin, terdapat di laman web. Jika satu-satu tarikh hampir sesuai, maklumkan kepada pasukan sebelum anda menolaknya — perbualan mengenai kalendar biasanya yang paling ringkas.",
    ],
    facts: [
      { label: "Komitmen", value: "6 hari latihan sepanjang 3 sesi hujung minggu" },
      { label: "Antara sesi", value: "Bimbingan bersama projek aplikasi ke atas perniagaan anda sendiri" },
      { label: "Majikan", value: "Pembiayaan mungkin tersedia untuk majikan berdaftar HRD Corp yang layak, tertakluk kepada kelulusan HRD Corp" },
    ],
    ctaLabel: "Lihat kalendar langsung 2026",
    ctaPath: "/ms/intakes",
    secondaryLabel: "Ditaja majikan? Minta ringkasan pembiayaan majikan — ia memetakan langkah e-TRiS HRD Corp.",
  },
  day14: {
    subject: "Satu perbualan. Tiada komitmen.",
    preheader: "Mulakan dengan satu perbualan. Buat keputusan mengikut masa anda sendiri.",
    greeting: (name) => `${name}, salam sejahtera,`,
    headline: "Mulakan dengan satu perbualan. Buat keputusan mengikut masa anda sendiri.",
    paragraphs: [
      "Dua minggu lalu anda memohon panduan program. Jika masa ini kurang sesuai, itu satu keputusan yang sah — panduan itu akan tetap jujur pada kohort akan datang.",
      "Tetapi jika satu-satunya perkara yang menghalang anda daripada membuat keputusan ialah satu soalan yang belum terjawab — kesesuaian, tarikh, yuran, penilaian biasiswa, atau apa yang dimaksudkan (dan tidak dimaksudkan) oleh pengiktirafan itu — satu perbualan ringkas dapat menyelesaikannya. Tiada pembayaran, tiada komitmen pendaftaran, tiada tekanan susulan.",
    ],
    ctaLabel: "Atur perbualan program",
    ctaPath: "/ms/apply",
    secondaryLabel: "Lebih selesa berbual? Hubungi pasukan program melalui WhatsApp — soalan ringkas dialu-alukan.",
  },
};

const FOOTER = {
  en: {
    statement:
      "The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. It is a six-month professional development programme designed and delivered by Asian Business Consulting. Right Dots Resources is its Associate Partner for programme enquiries and enrolment coordination.",
    reason:
      "You are receiving this because you requested the programme guide and agreed to receive programme updates and marketing communications.",
    unsubscribe: "Unsubscribe",
    contact: "support@futurereadymba.com · +60 12-981 8533 · futurereadymba.com",
    whatsapp: "Chat with the programme team on WhatsApp",
  },
  zh: {
    statement:
      "面向未来商业领导力的 Executive MBA，由 CMI 颁授并背书。这是由 Asian Business Consulting 设计及授课的六个月专业发展课程。Right Dots Resources 为其课程咨询与报名协调的合作伙伴。",
    reason: "您收到本邮件，是因为您索取了课程指南并同意接收课程资讯及营销通讯。",
    unsubscribe: "退订",
    contact: "support@futurereadymba.com · +60 12-981 8533 · futurereadymba.com",
    whatsapp: "通过 WhatsApp 联系课程团队",
  },
  ms: {
    statement:
      "Executive MBA dalam Future Ready Business Leadership dianugerah dan disokong oleh CMI. Ia merupakan program pembangunan profesional selama enam bulan yang direka dan disampaikan oleh Asian Business Consulting. Right Dots Resources adalah Rakan Bersekutu bagi pertanyaan program dan penyelarasan pendaftaran.",
    reason:
      "Anda menerima e-mel ini kerana anda memohon panduan program dan bersetuju menerima kemas kini program serta komunikasi pemasaran.",
    unsubscribe: "Berhenti langgan",
    contact: "support@futurereadymba.com · +60 12-981 8533 · futurereadymba.com",
    whatsapp: "Berbual dengan pasukan program melalui WhatsApp",
  },
};

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function renderNurtureEmail(input: {
  step: NurtureStepKey;
  language: NurtureLanguage;
  recipientName: string;
  unsubscribeUrl: string;
  baseUrl?: string;
}): { subject: string; html: string; text: string } {
  const { step, language } = input;
  const base = (input.baseUrl || "https://futurereadymba.com").replace(/\/$/, "");
  const copy = (language === "zh" ? ZH : language === "ms" ? MS : EN)[step];
  const footer = FOOTER[language];
  const name = escapeHtml(input.recipientName || (language === "zh" ? "您" : language === "ms" ? "anda" : "there"));
  const ctaUrl = `${base}${copy.ctaPath}?utm_source=nurture&utm_medium=email&utm_campaign=${step}&utm_content=${language}`;
  const unsub = escapeHtml(input.unsubscribeUrl);

  const factsHtml = copy.facts
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:26px 0;background:${PALE};border:1px solid ${LINE};border-radius:12px;">
        ${copy.facts
          .map(
            (fact, index) => `<tr>
          <td style="padding:${index === 0 ? "18px" : "12px"} 22px ${index === (copy.facts?.length || 0) - 1 ? "18px" : "12px"} 22px;">
            <div style="font-family:${SANS};font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:${GOLD};padding-bottom:3px;">${escapeHtml(fact.label)}</div>
            <div style="font-family:${SANS};font-size:14px;line-height:1.55;color:${INK};">${escapeHtml(fact.value)}</div>
          </td>
        </tr>`,
          )
          .join("")}
      </table>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="${language === "zh" ? "zh-Hans" : language === "ms" ? "ms" : "en"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(copy.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BG};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(copy.preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};">
    <tr><td align="center" style="padding:32px 14px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">

        <!-- header -->
        <tr><td style="background:${DEEP};border-radius:14px 14px 0 0;padding:26px 34px;">
          <div style="font-family:${SANS};font-size:12px;letter-spacing:3px;color:#EAF1FB;text-transform:uppercase;">Future Ready <span style="color:#C9A96A;">Executive MBA</span></div>
          <div style="height:3px;width:52px;background:${GOLD};margin-top:12px;border-radius:2px;"></div>
        </td></tr>

        <!-- body -->
        <tr><td style="background:#ffffff;padding:38px 34px 30px;border-left:1px solid ${LINE};border-right:1px solid ${LINE};">
          <div style="font-family:${SERIF};font-size:26px;line-height:1.25;color:${NAVY};padding-bottom:18px;">${escapeHtml(copy.headline)}</div>
          <div style="font-family:${SANS};font-size:15px;line-height:1.7;color:${INK};">
            <p style="margin:0 0 14px;">${copy.greeting(name)}</p>
            ${copy.paragraphs.map((paragraph) => `<p style="margin:0 0 14px;">${escapeHtml(paragraph)}</p>`).join("")}
          </div>
          ${factsHtml}
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 10px;">
            <tr><td style="background:${NAVY};border-radius:999px;">
              <a href="${ctaUrl}" style="display:inline-block;padding:14px 34px;font-family:${SANS};font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">${escapeHtml(copy.ctaLabel)}&nbsp;&rarr;</a>
            </td></tr>
          </table>
          <p style="font-family:${SANS};font-size:13px;line-height:1.6;color:${MUTED};margin:16px 0 0;">${escapeHtml(copy.secondaryLabel)}</p>
          <p style="font-family:${SANS};font-size:13px;margin:8px 0 0;"><a href="${WHATSAPP}" style="color:${NAVY};">${escapeHtml(footer.whatsapp)}</a></p>
        </td></tr>

        <!-- footer -->
        <tr><td style="background:#F7FAFF;border:1px solid ${LINE};border-top:1px solid ${LINE};border-radius:0 0 14px 14px;padding:22px 34px 26px;">
          <p style="font-family:${SANS};font-size:11px;line-height:1.65;color:${MUTED};margin:0 0 10px;">${escapeHtml(footer.statement)}</p>
          <p style="font-family:${SANS};font-size:11px;line-height:1.65;color:${MUTED};margin:0 0 10px;">${escapeHtml(footer.reason)}</p>
          <p style="font-family:${SANS};font-size:11px;line-height:1.65;color:${MUTED};margin:0;">
            ${escapeHtml(footer.contact)} &nbsp;·&nbsp; <a href="${unsub}" style="color:${MUTED};text-decoration:underline;">${escapeHtml(footer.unsubscribe)}</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    copy.greeting(input.recipientName || (language === "zh" ? "您" : language === "ms" ? "anda" : "there")),
    "",
    ...copy.paragraphs,
    "",
    ...(copy.facts ? copy.facts.map((fact) => `${fact.label}: ${fact.value}`) : []),
    "",
    `${copy.ctaLabel}: ${ctaUrl}`,
    footer.whatsapp + ": " + WHATSAPP,
    "",
    footer.statement,
    footer.reason,
    `${footer.unsubscribe}: ${input.unsubscribeUrl}`,
    footer.contact,
  ].join("\n");

  return { subject: copy.subject, html, text };
}
