// Trilingual nurture email sequence — stage-gated follow-ups for guide requesters.
import { FACTS, ENQUIRY_COMMITMENT, CERTIFICATE_POSITIONING } from "./content";
import { ENQUIRY_COMMITMENT_MS, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS } from "./content-ms";
import { ENQUIRY_COMMITMENT_ZH, CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH } from "./content-zh";

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

type ResourceLink = { label: string; path: string };

type StepCopy = {
  subject: string;
  preheader: string;
  greeting: (name: string) => string;
  headline: string;
  paragraphs: string[];
  facts?: { label: string; value: string }[];
  resources: ResourceLink[];
  ctaLabel: string;
  ctaPath: string;
  secondaryLabel: string;
};

const WHATSAPP = "https://wa.me/60129818533";

const EN: Record<NurtureStepKey, StepCopy> = {
  day3: {
    subject: "A second look at the 2026 programme guide",
    preheader: "One page worth re-reading, plus a short decision guide on what to check before you apply.",
    greeting: (name) => `Dear ${name},`,
    headline: "A second look at the 2026 programme guide",
    paragraphs: [
      "A few days ago you requested the 2026 programme guide for the Future Ready Executive MBA. Three sections tend to decide it: how the six months actually run, what the CMI recognition means, and what it does not, and the published fee.",
      `To make that comparison easier, the linked decision guide sets out the questions worth asking before you apply. If anything remains unclear after reading it, that is exactly what a programme conversation is for. ${ENQUIRY_COMMITMENT}`,
    ],
    facts: [
      { label: "Format", value: `${FACTS.durationLong} · ${FACTS.liveSessions} scheduled weekends across the programme · no time out of the business` },
      { label: "Recognition", value: "Awarded and endorsed by CMI · professional programme, not an academic degree" },
      { label: "Fee", value: `${FACTS.priceStd} published · scholarship assessed individually, confirmed in writing` },
    ],
    resources: [{ label: "Read the decision guide", path: "/downloads/future-ready-decision-guide.pdf" }],
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
      "Every cohort covers the full six-month programme across three scheduled weekends, 9am–6pm, on the published dates, so the applied work happens inside your business between sessions.",
      "The live calendar of remaining 2026 cohorts, in English and Mandarin, is on the website. If you are employer-sponsored, the linked funding brief maps the HRD Corp steps before you plan a date around them.",
    ],
    facts: [
      { label: "Commitment", value: `${FACTS.trainingDays} training days across ${FACTS.liveSessions} weekend sessions` },
      { label: "Between sessions", value: "Coaching plus an applied project on your own business" },
      { label: "Employers", value: "Funding may be available to eligible HRD Corp-registered employers, subject to HRD Corp approval" },
    ],
    resources: [
      { label: "Read the employer funding brief", path: "/downloads/future-ready-employer-funding-brief.pdf" },
    ],
    ctaLabel: "See the live 2026 calendar",
    ctaPath: "/intakes",
    secondaryLabel: "Employer-sponsored? The funding brief above maps the HRD Corp steps.",
  },
  day14: {
    subject: "One conversation, whenever you're ready",
    preheader: "Start with a conversation. Decide in your own time.",
    greeting: (name) => `Dear ${name},`,
    headline: "Start with a conversation. Decide in your own time.",
    paragraphs: [
      "Two weeks ago you requested the 2026 programme guide. If the timing is not right, that is a legitimate decision — the programme will still be here, honestly described, at the next intake.",
      `If a scholarship is part of your decision, the linked eligibility brief explains how assessment works. And if the only thing between you and a decision is an unanswered question, fit, dates, the fee, or what the recognition does and does not mean, one short conversation settles it. ${ENQUIRY_COMMITMENT}`,
    ],
    resources: [{ label: "Read the scholarship eligibility brief", path: "/downloads/future-ready-scholarship-eligibility.pdf" }],
    ctaLabel: "Arrange a programme conversation",
    ctaPath: "/apply",
    secondaryLabel: "Prefer chat? Message the programme team on WhatsApp — quick questions welcome.",
  },
};

const ZH: Record<NurtureStepKey, StepCopy> = {
  day3: {
    subject: "2026 年课程指南，再读一遍",
    preheader: "一页值得再看，附上申请前该问清楚的问题清单。",
    greeting: (name) => `${name}，您好：`,
    headline: "2026 年课程指南，再读一遍",
    paragraphs: [
      `几天前您索取了 Future Ready Executive MBA 的 2026 年课程指南。三个部分最能帮助您做决定：${FACTS.durationMonths} 个月如何安排、CMI 认可的含义与边界，以及已公布的课程费用。`,
      `为方便您比较，附上的决策指南列出了申请前值得确认的问题。读完后如仍有不清楚之处，这正是课程沟通的意义所在。${ENQUIRY_COMMITMENT_ZH}`,
    ],
    facts: [
      { label: "课程安排", value: `为期 ${FACTS.durationMonths} 个月 · ${FACTS.liveSessions} 次指定研习课（每次两天）· 无需离岗` },
      { label: "认可", value: "CMI 认可的专业发展课程，非学术学位" },
      { label: "费用", value: `公布费用 ${FACTS.priceStd} · 奖学金按个别情况评估，以书面确认为准` },
    ],
    resources: [{ label: "阅读决策指南", path: "/downloads/future-ready-decision-guide-zh.pdf" }],
    ctaLabel: "预约课程咨询",
    ctaPath: "/zh/apply",
    secondaryLabel: "也可直接回复本邮件提出您的问题，课程团队会阅读每一封回信。",
  },
  day7: {
    subject: "2026 年剩余届次，一目了然",
    preheader: "每届 3 次指定研习课。日程安排比资料本身更能决定选择。",
    greeting: (name) => `${name}，您好：`,
    headline: "日程安排比资料本身更能决定选择。",
    paragraphs: [
      `每一届均覆盖完整的 ${FACTS.durationMonths} 个月课程：${FACTS.liveSessions} 次指定研习课，上课时间为上午 9 时至下午 6 时，并按公布日期进行，企业应用项目就在两次研习课之间、在您自己的业务中完成。`,
      "网站上有 2026 年剩余英语及华语届次的实时日程表。若您由雇主赞助，附上的资助简报说明了人力资源发展机构（HRD Corp）的申请步骤，可在确定日期前先行了解。",
    ],
    facts: [
      { label: "时间投入", value: `${FACTS.liveSessions} 次研习课共 ${FACTS.trainingDays} 个培训日` },
      { label: "课程之间", value: "一对一辅导，及基于您自身业务的应用项目" },
      { label: "雇主赞助", value: "符合条件的 HRD Corp 注册雇主或可申请资助，以 HRD Corp 审批为准" },
    ],
    resources: [
      { label: "阅读雇主资助简报", path: "/downloads/future-ready-employer-funding-brief-zh.pdf" },
    ],
    ctaLabel: "查看 2026 实时日程表",
    ctaPath: "/zh/intakes",
    secondaryLabel: "由雇主赞助？以上资助简报说明了 HRD Corp 的申请步骤。",
  },
  day14: {
    subject: "一次沟通，何时决定由您",
    preheader: "从一次沟通开始，按您自己的节奏决定。",
    greeting: (name) => `${name}，您好：`,
    headline: "从一次沟通开始，按您自己的节奏决定。",
    paragraphs: [
      "两周前您索取了 2026 年课程指南。如果现在时机未到，这本身就是一个合理的决定：下一届开课时，课程指南依然会如实说明一切。",
      `若奖学金是您决策的一部分，附上的资格简报说明了评估方式如何运作。而如果阻碍您做决定的只是一个未解答的问题，适合度、日期、费用，或认可的含义与边界，一次简短沟通就能解决。${ENQUIRY_COMMITMENT_ZH}`,
    ],
    resources: [{ label: "阅读奖学金资格简报", path: "/downloads/future-ready-scholarship-eligibility-zh.pdf" }],
    ctaLabel: "预约课程咨询",
    ctaPath: "/zh/apply",
    secondaryLabel: "更习惯聊天？欢迎通过 WhatsApp 联系课程团队，小问题也欢迎。",
  },
};

const MS: Record<NurtureStepKey, StepCopy> = {
  day3: {
    subject: "Semakan semula panduan program 2026",
    preheader: "Satu halaman wajar dibaca semula, disertakan panduan keputusan sebelum anda memohon.",
    greeting: (name) => `Salam sejahtera, ${name},`,
    headline: "Semakan semula panduan program 2026",
    paragraphs: [
      "Beberapa hari lalu anda memohon panduan program 2026 untuk Future Ready Executive MBA. Tiga bahagian paling membantu keputusan pembaca: bagaimana tempoh enam bulan itu berjalan sebenarnya, apa maksud pengiktirafan CMI, dan apa yang tidak dimaksudkannya, serta yuran yang telah diterbitkan.",
      `Untuk memudahkan perbandingan itu, panduan keputusan yang disertakan menyenaraikan soalan yang wajar ditanya sebelum anda memohon. Jika masih ada bahagian yang kurang jelas selepas membacanya, itulah sebabnya perbincangan program wujud. ${ENQUIRY_COMMITMENT_MS}`,
    ],
    facts: [
      { label: "Format", value: `Tempoh ${FACTS.durationMonths} bulan · ${FACTS.liveSessions} hujung minggu berjadual sepanjang program · tanpa perlu keluar dari kerja` },
      { label: "Pengiktirafan", value: "Dianugerahkan dan disokong oleh CMI · program profesional, bukan ijazah akademik" },
      { label: "Yuran", value: `${FACTS.priceStd} diterbitkan · biasiswa dinilai secara individu, disahkan secara bertulis` },
    ],
    resources: [{ label: "Baca panduan keputusan", path: "/downloads/future-ready-decision-guide-ms.pdf" }],
    ctaLabel: "Jadualkan sesi perbincangan program",
    ctaPath: "/ms/apply",
    secondaryLabel: "Atau balas e-mel ini dengan satu soalan anda — pasukan program membaca setiap balasan.",
  },
  day7: {
    subject: "Kohort 2026 yang berbaki, dalam satu paparan",
    preheader: "Tiga hujung minggu bagi setiap kohort. Jadual lebih menentukan berbanding risalah.",
    greeting: (name) => `Salam sejahtera, ${name},`,
    headline: "Jadual lebih menentukan berbanding risalah.",
    paragraphs: [
      "Setiap kohort merangkumi keseluruhan program enam bulan sepanjang tiga sesi hujung minggu berjadual, 9.00 pagi hingga 6.00 petang, mengikut tarikh yang diterbitkan — kerja aplikasi dijalankan dalam perniagaan anda sendiri antara sesi.",
      "Jadual terkini bagi kohort 2026 yang berbaki, dalam Bahasa Inggeris dan Mandarin, terdapat di laman web. Jika anda ditaja majikan, ringkasan pembiayaan yang disertakan memetakan langkah HRD Corp sebelum anda menetapkan tarikh.",
    ],
    facts: [
      { label: "Komitmen", value: `${FACTS.trainingDays} hari latihan sepanjang ${FACTS.liveSessions} sesi hujung minggu` },
      { label: "Antara sesi", value: "Bimbingan bersama kerja aplikasi berdasarkan perniagaan anda sendiri" },
      { label: "Majikan", value: "Pembiayaan mungkin tersedia untuk majikan berdaftar HRD Corp yang layak, tertakluk kepada kelulusan HRD Corp" },
    ],
    resources: [
      { label: "Baca ringkasan pembiayaan majikan", path: "/downloads/future-ready-employer-funding-brief-ms.pdf" },
    ],
    ctaLabel: "Lihat jadual terkini 2026",
    ctaPath: "/ms/intakes",
    secondaryLabel: "Ditaja majikan? Ringkasan pembiayaan di atas memetakan langkah HRD Corp.",
  },
  day14: {
    subject: "Satu perbualan, bila-bila anda bersedia",
    preheader: "Mulakan dengan satu perbualan. Buat keputusan mengikut masa anda sendiri.",
    greeting: (name) => `Salam sejahtera, ${name},`,
    headline: "Mulakan dengan satu perbualan. Buat keputusan mengikut masa anda sendiri.",
    paragraphs: [
      "Dua minggu lalu anda memohon panduan program 2026. Jika masa ini kurang sesuai, itu satu keputusan yang sah — program ini akan tetap digambarkan secara jujur pada kohort akan datang.",
      `Jika biasiswa adalah sebahagian daripada keputusan anda, ringkasan kelayakan yang disertakan menerangkan cara penilaian dijalankan. Dan jika satu-satunya perkara yang menghalang anda daripada membuat keputusan ialah satu soalan yang belum terjawab — kesesuaian, tarikh, yuran, atau apa yang dimaksudkan dan tidak dimaksudkan oleh pengiktirafan itu — satu perbualan ringkas dapat menyelesaikannya. ${ENQUIRY_COMMITMENT_MS}`,
    ],
    resources: [{ label: "Baca ringkasan kelayakan biasiswa", path: "/downloads/future-ready-scholarship-eligibility-ms.pdf" }],
    ctaLabel: "Jadualkan sesi perbincangan program",
    ctaPath: "/ms/apply",
    secondaryLabel: "Lebih selesa berbual? Hubungi pasukan program melalui WhatsApp — soalan ringkas dialu-alukan.",
  },
};

const FOOTER = {
  en: {
    statement:
      `The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. It is a six-month professional development programme designed and delivered by Asian Business Consulting. Right Dots Resources is its marketing agency for programme enquiries and enrolment coordination. ${CERTIFICATE_POSITIONING.professionalRelevance}`,
    reason:
      "You are receiving this because you requested the programme guide and agreed to receive programme updates and marketing communications.",
    unsubscribe: "Unsubscribe",
    contact: "support@futurereadymba.com · +60 12-981 8533 · futurereadymba.com",
    whatsapp: "Chat with the programme team on WhatsApp",
    signOff: "Future Ready Programme Team",
  },
  zh: {
    statement:
      `面向未来商业领导力的 Executive MBA，由 CMI 颁发并认可。这是由 Asian Business Consulting 设计及授课的 ${FACTS.durationMonths} 个月专业发展课程。Right Dots Resources 是其市场推广机构，负责课程咨询与报名协调。${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}`,
    reason: "您收到本邮件，是因为您索取了课程指南并同意接收课程资讯及推广通讯。",
    unsubscribe: "退订",
    contact: "support@futurereadymba.com · +60 12-981 8533 · futurereadymba.com",
    whatsapp: "通过 WhatsApp 联系课程团队",
    signOff: "课程团队 敬上",
  },
  ms: {
    statement:
      `Executive MBA dalam Future Ready Business Leadership dianugerahkan dan disokong oleh CMI. Ia merupakan program pembangunan profesional selama ${FACTS.durationMonths} bulan yang direka dan disampaikan oleh Asian Business Consulting. Right Dots Resources ialah agensi pemasaran bagi pertanyaan program dan penyelarasan pendaftaran. ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}`,
    reason:
      "Anda menerima e-mel ini kerana anda memohon panduan program dan bersetuju menerima kemas kini program serta komunikasi pemasaran.",
    unsubscribe: "Berhenti langgan",
    contact: "support@futurereadymba.com · +60 12-981 8533 · futurereadymba.com",
    whatsapp: "Berbual dengan pasukan program melalui WhatsApp",
    signOff: "Salam hormat,\nPasukan Program Future Ready Executive MBA",
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
  const name = escapeHtml(input.recipientName || (language === "zh" ? "您" : language === "ms" ? "Tuan/Puan" : "there"));
  const ctaUrl = `${base}${copy.ctaPath}?utm_source=nurture&utm_medium=email&utm_campaign=${step}&utm_content=${language}`;
  const unsub = escapeHtml(input.unsubscribeUrl);
  const resourceUrls = copy.resources.map((resource) => ({
    label: resource.label,
    url: `${base}${resource.path}?utm_source=nurture&utm_medium=email&utm_campaign=${step}&utm_content=${language}`,
  }));

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
          ${resourceUrls.length
            ? `<p style="font-family:${SANS};font-size:14px;line-height:1.7;color:${INK};margin:0 0 18px;">${resourceUrls
                .map((resource) => `<a href="${resource.url}" style="color:${NAVY};font-weight:bold;">${escapeHtml(resource.label)}&nbsp;&rarr;</a>`)
                .join("<br>")}</p>`
            : ""}
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 10px;">
            <tr><td style="background:${NAVY};border-radius:999px;">
              <a href="${ctaUrl}" style="display:inline-block;padding:14px 34px;font-family:${SANS};font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">${escapeHtml(copy.ctaLabel)}&nbsp;&rarr;</a>
            </td></tr>
          </table>
          <p style="font-family:${SANS};font-size:13px;line-height:1.6;color:${MUTED};margin:16px 0 0;">${escapeHtml(copy.secondaryLabel)}</p>
          <p style="font-family:${SANS};font-size:13px;margin:8px 0 0;"><a href="${WHATSAPP}" style="color:${NAVY};">${escapeHtml(footer.whatsapp)}</a></p>
          <p style="font-family:${SANS};font-size:13px;line-height:1.6;color:${INK};margin:18px 0 0;white-space:pre-line;">${escapeHtml(footer.signOff)}</p>
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
    copy.greeting(input.recipientName || (language === "zh" ? "您" : language === "ms" ? "Tuan/Puan" : "there")),
    "",
    ...copy.paragraphs,
    "",
    ...(copy.facts ? copy.facts.map((fact) => `${fact.label}: ${fact.value}`) : []),
    "",
    ...resourceUrls.map((resource) => `${resource.label}: ${resource.url}`),
    `${copy.ctaLabel}: ${ctaUrl}`,
    footer.whatsapp + ": " + WHATSAPP,
    "",
    footer.signOff,
    "",
    footer.statement,
    footer.reason,
    `${footer.unsubscribe}: ${input.unsubscribeUrl}`,
    footer.contact,
  ].join("\n");

  return { subject: copy.subject, html, text };
}
