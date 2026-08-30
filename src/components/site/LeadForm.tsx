"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";
import { cohortKey, type LeadIntent } from "@/lib/conversion-contract";
import { conversionContextFromLocation, updateConversionContext } from "@/lib/conversion-context";
import { getExperimentAssignmentsJson } from "@/lib/experiments";
import { getLeadAttribution, trackEvent } from "@/lib/analytics";
import { INTAKES, PROGRAMME_YEAR, SITE } from "@/lib/content";
import { getIntakeStatus, malaysiaDateKey } from "@/lib/intakes";
import "@/lib/turnstile";

type Lang = "en" | "zh" | "ms";
type Step = 1 | 2;
type Status = "idle" | "sending" | "ok" | "error" | "verify";
type ErrorType = "validation" | "rate_limit" | "service" | "network" | null;
type LeadFormVariant = "standard" | "campaign";
type TurnstileSize = "flexible" | "compact";

const PHONE_COUNTRY_CODES = [
  { code: "+60", label: "🇲🇾 +60" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+62", label: "🇮🇩 +62" },
  { code: "+66", label: "🇹🇭 +66" },
  { code: "+63", label: "🇵🇭 +63" },
  { code: "+84", label: "🇻🇳 +84" },
  { code: "+673", label: "🇧🇳 +673" },
  { code: "+86", label: "🇨🇳 +86" },
  { code: "+852", label: "🇭🇰 +852" },
  { code: "+886", label: "🇹🇼 +886" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+971", label: "🇦🇪 +971" },
];

const EMAIL_DOMAINS = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com", "icloud.com", "qq.com", "163.com"];

function emailSuggestions(draft: string): string[] {
  const value = draft.trim();
  if (!value || value.length < 2) return [];
  const atIndex = value.indexOf("@");
  const local = atIndex === -1 ? value : value.slice(0, atIndex);
  const typedDomain = atIndex === -1 ? "" : value.slice(atIndex + 1).toLowerCase();
  if (!local) return [];
  return EMAIL_DOMAINS.filter((domain) => domain.startsWith(typedDomain) && domain !== typedDomain).map(
    (domain) => `${local}@${domain}`,
  );
}

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAEM-BhpyOxghbYJZ";

const GUIDE_PDF = {
  en: "/downloads/working-managers-guide-2026.pdf",
  zh: "/downloads/zaizhi-jingli-zhinan-2026.pdf",
  ms: "/downloads/panduan-pengurus-bekerja-2026.pdf",
} as const;

const T = {
  en: {
    progress: (step: Step) => `Step ${step} of 2`,
    compactKicker: "Programme enquiry",
    compactTitle: "Get the programme guide.",
    compactIntro: `Tell us what you need first. The programme team will send the relevant information and published ${PROGRAMME_YEAR} dates.`,
    compactIntent: "What are you planning for?",
    stepOneKicker: "Your route",
    stepOneTitle: "What are you planning for?",
    stepOneIntro: "Choose the route that best describes your decision. The programme team will respond with the relevant information.",
    intents: [
      ["individual_self_funded", "Career progression", "I am considering the programme for myself."],
      ["employer_sponsored", "Employer sponsorship", "I want to use employer sponsorship or eligible HRD Corp funds."],
      ["employer_evaluating", "Manager development", "I am evaluating the programme for managers in my company."],
      ["international", "International participant", "I am applying from outside Malaysia."],
      ["mandarin", "Mandarin programme", "I want to discuss a Mandarin-language cohort."],
      ["details_first", "Programme information first", "Send the programme information before arranging a call."],
    ] as const,
    cohort: `Preferred ${PROGRAMME_YEAR} cohort (optional)`,
    cohortOpen: "Open for enquiries",
    cohortUnknown: "I have not selected a cohort",
    continue: "Continue to contact details →",
    campaignContinue: "Continue for the programme guide →",
    campaignKicker: "Free PDF programme guide",
    campaignTitle: `Get the ${PROGRAMME_YEAR} Future Ready EMBA guide.`,
    campaignIntro: "Review the programme before deciding whether to speak with us.",
    campaignBenefits: [
      "See how the six months and six training days work",
      "Understand the CMI recognition and programme boundaries",
      "Compare dates, the published fee and scholarship criteria",
    ],
    stepTwoKicker: "Your contact details",
    stepTwoTitle: "Where should the programme team respond?",
    back: "← Back",
    selectedRoute: "Selected route",
    name: "Full name", namePh: "Your name",
    phone: "Phone / WhatsApp", campaignPhone: "Phone / WhatsApp (optional)", email: "Email", emailPh: "you@company.com",
    company: "Company (optional)", companyPh: "Organisation",
    conversation: "How would you like to continue?",
    conversationOptions: [
      ["programme_call", "A short call about programme fit"],
      ["whatsapp", "A WhatsApp conversation with the programme team"],
      ["online_meeting", "An online information meeting"],
      ["in_person_meeting", "An in-person meeting at an agreed location"],
      ["details_first", "Send details first — no call yet"],
    ] as const,
    contactWindow: "Preferred contact time",
    contactWindows: [
      ["flexible", "Flexible"],
      ["weekday_morning", "Weekday morning"],
      ["weekday_afternoon", "Weekday afternoon"],
      ["weekday_evening", "Weekday evening"],
      ["weekend", "Weekend"],
    ] as const,
    helper: "We use email to confirm the request and follow the contact method you select.",
    campaignHelper: "We will email the PDF immediately. Add a phone number only if you would also like a WhatsApp or call follow-up.",
    consent: "I agree to be contacted about this programme, and understand my data is handled under Malaysia’s PDPA 2010, as amended.",
    campaignConsent: "Send me the programme guide and reply to this request. My information will be handled under Malaysia’s PDPA 2010, as amended.",
    consentMarketing: "Send me programme updates and marketing communications. I can unsubscribe at any time.",
    submit: "Send my programme request →", sending: "Sending securely…",
    campaignSubmit: "Email me the guide →",
    errors: {
      validation: "Check the highlighted information and consent, then submit again. Your entries have been kept.",
      rate_limit: "This network has reached the submission limit. Wait ten minutes, then submit the same request again.",
      service: "The request service is temporarily unavailable. Your entries have been kept; submit again or contact Future Ready EMBA on WhatsApp.",
      network: "The connection was interrupted. Your entries have been kept; check your connection and submit again.",
    },
    verify: "Complete the security check before submitting. Your entries have been kept.",
    fieldRequired: "Please complete this field.",
    emailInvalid: "Enter a valid email address.",
    consentRequired: "Please tick this box so we can respond.",
    verifyErr: "The security check could not load. Refresh the page or contact Future Ready EMBA on WhatsApp.",
    verifyFallback: "Contact Future Ready EMBA on WhatsApp →",
    security: "Security verification",
    fine: "Programme enquiry · No payment required · Privacy notice applies",
    campaignFine: "Free PDF · No payment · No application · Unsubscribe anytime",
    okK: "Request received",
    okH: (name: string) => `Thank you${name ? `, ${name}` : ""}. We’ll follow your preference.`,
    okP: "The programme team will respond about programme fit, your selected cohort, employer-led HRD Corp funding and scholarship eligibility. This request is not an admission, scholarship or payment commitment.",
    campaignOkP: "Your PDF guide is ready below and has also been emailed to you. Review it first; a programme conversation is optional.",
    okRef: "Conversation reference",
    okPlan: "Download the PDF guide →",
    okWa: "Contact Future Ready EMBA on WhatsApp →",
    waMsg: (name: string, cohort: string) => `Hi, I'm ${name || "interested"}. I requested a conversation about the Future Ready Executive MBA${cohort ? ` for ${cohort}` : ""}.`,
  },
  zh: {
    progress: (step: Step) => `第 ${step} 步，共 2 步`,
    compactKicker: "课程咨询",
    compactTitle: "索取课程资料。",
    compactIntro: `请先告诉我们您的需求。课程团队会发送相关资料及已公布的 ${PROGRAMME_YEAR} 开课日期。`,
    compactIntent: "您目前正在规划什么？",
    stepOneKicker: "您的需求",
    stepOneTitle: "您目前正在规划什么？",
    stepOneIntro: "请选择最符合您情况的选项。课程团队将提供相关资料并按您的选择跟进。",
    intents: [
      ["individual_self_funded", "个人职业发展", "我正在为自己考虑这项课程。"],
      ["employer_sponsored", "公司赞助", "我希望使用公司赞助或符合条件的 HRD Corp 资金。"],
      ["employer_evaluating", "管理人员发展", "我正在为公司的管理人员评估这项课程。"],
      ["international", "国际学员", "我从马来西亚以外地区申请。"],
      ["mandarin", "华语课程", "我想了解华语授课班次。"],
      ["details_first", "先收取课程资料", "先发送课程资料，再决定是否安排通话。"],
    ] as const,
    cohort: `首选 ${PROGRAMME_YEAR} 班次（选填）`,
    cohortOpen: "开放咨询",
    cohortUnknown: "尚未选择班次",
    continue: "继续填写联系方式 →",
    campaignContinue: "继续获取课程指南 →",
    campaignKicker: "免费 PDF 课程指南",
    campaignTitle: `获取 ${PROGRAMME_YEAR} Future Ready Executive MBA 课⁠程⁠指⁠南。`,
    campaignIntro: "先了解课程内容，再决定是否与课程团队沟通。",
    campaignBenefits: [
      "了解六个月课程及六个培训日的安排",
      "了解 CMI 专业认可及课程属性边界",
      "比较开课日期、标准费用及奖学金择优评估条件",
    ],
    stepTwoKicker: "沟通方式",
    stepTwoTitle: "课程团队应如何回复您？",
    back: "← 返回",
    selectedRoute: "已选需求",
    name: "姓名", namePh: "您的姓名",
    phone: "电话 / WhatsApp", campaignPhone: "电话 / WhatsApp（选填）", email: "电邮", emailPh: "you@company.com",
    company: "公司（选填）", companyPh: "所属机构",
    conversation: "您希望如何进一步了解？",
    conversationOptions: [
      ["programme_call", "简短通话，了解课程是否适合"],
      ["whatsapp", "通过 WhatsApp 与课程团队沟通"],
      ["online_meeting", "线上课程说明会"],
      ["in_person_meeting", "在双方同意的地点面谈"],
      ["details_first", "先发送资料，暂不通话"],
    ] as const,
    contactWindow: "首选联系时间",
    contactWindows: [
      ["flexible", "时间灵活"],
      ["weekday_morning", "工作日上午"],
      ["weekday_afternoon", "工作日下午"],
      ["weekday_evening", "工作日晚上"],
      ["weekend", "周末"],
    ] as const,
    helper: "我们会通过电邮确认请求，并按您选择的方式联系。",
    campaignHelper: "PDF 将立即发送至您的电邮。只有在您也希望通过 WhatsApp 或电话跟进时，才需要填写电话号码。",
    consent: "我同意课程团队就本课程与我联系，并了解我的个人资料将依据马来西亚 2010 年个人资料保护法（PDPA）及其修订处理。",
    campaignConsent: "请发送课程指南并回复此请求。我的资料将依据马来西亚 2010 年个人资料保护法（PDPA）及其修订处理。",
    consentMarketing: "我愿意接收课程资讯与营销通讯，可随时退订。",
    submit: "发送课程咨询 →", sending: "正在安全提交…",
    campaignSubmit: "将指南发送至我的电邮 →",
    errors: {
      validation: "请检查资料及同意选项后再次提交。您填写的内容已保留。",
      rate_limit: "此网络已达到提交上限。请等待十分钟后再次提交同一请求。",
      service: "请求服务暂时无法使用。您填写的内容已保留；请再次提交或通过 WhatsApp 联系 Future Ready Executive MBA。",
      network: "网络连接中断。您填写的内容已保留；请检查网络后再次提交。",
    },
    verify: "提交前请完成安全验证。您填写的内容已保留。",
    fieldRequired: "请填写此栏。",
    emailInvalid: "请输入有效的电邮地址。",
    consentRequired: "请勾选此项，我们才能回复您。",
    verifyErr: "安全验证无法加载。请刷新页面，或通过 WhatsApp 联系 Future Ready Executive MBA。",
    verifyFallback: "通过 WhatsApp 联系 Future Ready Executive MBA →",
    security: "安全验证",
    fine: "课程咨询 · 无需付款 · 适用隐私声明",
    campaignFine: "免费 PDF · 无需付款 · 不代表申请 · 可随时退订",
    okK: "沟通请求已收到",
    okH: (name: string) => `谢谢您${name ? `，${name}` : ""}。我们会按您的选择联系。`,
    okP: "课程团队将回复课程适合度、所选班次、雇主申请 HRD Corp 及奖学金资格。这项请求不等于录取、奖学金批准或付款承诺。",
    campaignOkP: "您的 PDF 指南已可在下方下载，并已发送至您的电邮。您可先查看资料；是否进一步沟通由您决定。",
    okRef: "沟通编号",
    okPlan: "下载 PDF 课程指南 →",
    okWa: "通过 WhatsApp 联系 Future Ready Executive MBA →",
    waMsg: (name: string, cohort: string) => `您好，我是 ${name || "意向学员"}。我已提交 Future Ready Executive MBA 沟通请求${cohort ? `，首选 ${cohort}` : ""}。`,
  },
  ms: {
    progress: (step: Step) => `Langkah ${step} daripada 2`,
    compactKicker: "Pertanyaan program",
    compactTitle: "Dapatkan panduan program.",
    compactIntro: `Beritahu kami keperluan anda terlebih dahulu. Pasukan program akan menghantar maklumat yang berkaitan serta tarikh ${PROGRAMME_YEAR} yang telah diumumkan.`,
    compactIntent: "Apakah yang sedang anda rancang?",
    stepOneKicker: "Laluan anda",
    stepOneTitle: "Apakah yang sedang anda rancang?",
    stepOneIntro: "Pilih laluan yang paling menepati keputusan anda. Pasukan program akan membalas dengan maklumat yang berkaitan.",
    intents: [
      ["individual_self_funded", "Kemajuan kerjaya", "Saya sedang mempertimbangkan program ini untuk diri sendiri."],
      ["employer_sponsored", "Tajaan majikan", "Saya ingin menggunakan tajaan majikan atau dana HRD Corp yang layak."],
      ["employer_evaluating", "Pembangunan pengurus", "Saya sedang menilai program ini untuk pengurus di syarikat saya."],
      ["international", "Peserta antarabangsa", "Saya memohon dari luar Malaysia."],
      ["mandarin", "Program Mandarin", "Saya ingin berbincang mengenai kohort berbahasa Mandarin."],
      ["details_first", "Maklumat program dahulu", "Hantarkan maklumat program sebelum mengatur panggilan."],
    ] as const,
    cohort: `Kohort ${PROGRAMME_YEAR} pilihan (tidak wajib)`,
    cohortOpen: "Pertanyaan dibuka",
    cohortUnknown: "Saya belum memilih kohort",
    continue: "Teruskan ke maklumat hubungan →",
    campaignContinue: "Teruskan untuk panduan program →",
    campaignKicker: "Panduan program PDF percuma",
    campaignTitle: `Dapatkan panduan Future Ready EMBA ${PROGRAMME_YEAR}.`,
    campaignIntro: "Semak program terlebih dahulu sebelum memutuskan sama ada mahu berbincang dengan kami.",
    campaignBenefits: [
      "Lihat susunan enam bulan dan enam hari latihan",
      "Fahami pengiktirafan CMI dan batas status program",
      "Bandingkan tarikh, yuran yang diterbitkan dan penilaian biasiswa",
    ],
    stepTwoKicker: "Maklumat hubungan anda",
    stepTwoTitle: "Ke mana pasukan program patut membalas?",
    back: "← Kembali",
    selectedRoute: "Laluan dipilih",
    name: "Nama penuh", namePh: "Nama anda",
    phone: "Telefon / WhatsApp", campaignPhone: "Telefon / WhatsApp (pilihan)", email: "E-mel", emailPh: "anda@syarikat.com",
    company: "Syarikat (tidak wajib)", companyPh: "Organisasi",
    conversation: "Bagaimanakah anda mahu meneruskan?",
    conversationOptions: [
      ["programme_call", "Panggilan ringkas mengenai kesesuaian program"],
      ["whatsapp", "Perbualan WhatsApp bersama pasukan program"],
      ["online_meeting", "Sesi maklumat dalam talian"],
      ["in_person_meeting", "Pertemuan bersemuka di lokasi yang dipersetujui"],
      ["details_first", "Hantar maklumat dahulu — belum perlu panggilan"],
    ] as const,
    contactWindow: "Waktu hubungan pilihan",
    contactWindows: [
      ["flexible", "Fleksibel"],
      ["weekday_morning", "Hari bekerja, pagi"],
      ["weekday_afternoon", "Hari bekerja, tengah hari"],
      ["weekday_evening", "Hari bekerja, malam"],
      ["weekend", "Hujung minggu"],
    ] as const,
    helper: "Kami menggunakan e-mel untuk mengesahkan permohonan ini dan menghubungi anda mengikut kaedah yang anda pilih.",
    campaignHelper: "PDF akan dihantar melalui e-mel dengan segera. Tambah nombor telefon hanya jika anda juga mahu susulan melalui WhatsApp atau panggilan.",
    consent: "Saya bersetuju dihubungi mengenai program ini, dan memahami data saya diproses menurut Akta Perlindungan Data Peribadi 2010 (Akta 709), seperti yang dipinda.",
    campaignConsent: "Hantarkan panduan program dan balas permintaan ini. Maklumat saya akan dikendalikan menurut Akta Perlindungan Data Peribadi 2010 (Akta 709), seperti yang dipinda.",
    consentMarketing: "Hantarkan saya perkembangan program dan komunikasi pemasaran. Saya boleh berhenti melanggan pada bila-bila masa.",
    submit: "Hantar permohonan program saya →", sending: "Sedang dihantar dengan selamat…",
    campaignSubmit: "E-melkan panduan kepada saya →",
    errors: {
      validation: "Semak maklumat yang ditanda serta kotak persetujuan, kemudian hantar semula. Maklumat yang anda isi telah disimpan.",
      rate_limit: "Rangkaian ini telah mencapai had penghantaran. Tunggu sepuluh minit, kemudian hantar semula permohonan yang sama.",
      service: "Perkhidmatan permohonan tidak tersedia buat sementara waktu. Maklumat anda telah disimpan; hantar semula atau hubungi Future Ready EMBA melalui WhatsApp.",
      network: "Sambungan terputus. Maklumat anda telah disimpan; semak sambungan internet anda dan hantar semula.",
    },
    verify: "Lengkapkan semakan keselamatan sebelum menghantar. Maklumat yang anda isi telah disimpan.",
    fieldRequired: "Sila lengkapkan medan ini.",
    emailInvalid: "Masukkan alamat e-mel yang sah.",
    consentRequired: "Sila tandakan kotak ini supaya kami boleh membalas.",
    verifyErr: "Semakan keselamatan tidak dapat dimuatkan. Muat semula halaman atau hubungi Future Ready EMBA melalui WhatsApp.",
    verifyFallback: "Hubungi Future Ready EMBA melalui WhatsApp →",
    security: "Pengesahan keselamatan",
    fine: "Pertanyaan program · Tiada bayaran diperlukan · Notis privasi terpakai",
    campaignFine: "PDF percuma · Tiada bayaran · Bukan permohonan · Boleh berhenti melanggan bila-bila masa",
    okK: "Permohonan diterima",
    okH: (name: string) => `Terima kasih${name ? `, ${name}` : ""}. Kami akan menghubungi anda mengikut pilihan anda.`,
    okP: "Pasukan program akan membalas mengenai kesesuaian program, kohort pilihan anda, permohonan HRD Corp oleh majikan serta kelayakan biasiswa. Permohonan ini bukan pengesahan kemasukan, kelulusan biasiswa atau komitmen bayaran.",
    campaignOkP: "Panduan PDF anda sedia dimuat turun di bawah dan telah dihantar melalui e-mel. Semak dahulu; perbualan program adalah pilihan.",
    okRef: "Rujukan perbualan",
    okPlan: "Muat turun panduan PDF →",
    okWa: "Hubungi Future Ready EMBA melalui WhatsApp →",
    waMsg: (name: string, cohort: string) => `Hai, saya ${name || "berminat"}. Saya telah memohon perbincangan mengenai Future Ready Executive MBA${cohort ? ` untuk ${cohort}` : ""}.`,
  },
} as const;

function selectedIntentLabel(lang: Lang, intent: LeadIntent) {
  return T[lang].intents.find(([value]) => value === intent)?.[1] || "";
}

function selectedIntentDescription(lang: Lang, intent: LeadIntent) {
  return T[lang].intents.find(([value]) => value === intent)?.[2] || "";
}

function cohortLabel(key: string, lang: Lang) {
  const cohort = INTAKES.find((item) => cohortKey(item.language, item.co) === key);
  if (!cohort) return "";
  const language = lang === "zh" && cohort.language === "Mandarin" ? "华语" : cohort.language;
  return `${cohort.co} · ${language} · ${cohort.s1} ${PROGRAMME_YEAR}`;
}

export default function LeadForm({
  programme = "Executive MBA",
  source = "emba-hub",
  lang = "en",
  placement = "primary",
  variant = "standard",
  compact = false,
  defaultIntent,
  intentOptions,
}: {
  programme?: string;
  source?: string;
  lang?: Lang;
  placement?: string;
  variant?: LeadFormVariant;
  compact?: boolean;
  defaultIntent?: LeadIntent;
  intentOptions?: readonly LeadIntent[];
}) {
  const t = T[lang];
  const campaign = variant === "campaign";
  const compactMode = compact && !campaign;
  const allowedIntents = intentOptions;
  const initialIntent = defaultIntent || (campaign ? "details_first" : allowedIntents?.[0]) || "individual_self_funded";
  const uid = useId();
  const id = (key: string) => `${uid}-${key}`;
  const [step, setStep] = useState<Step>(campaign ? 2 : 1);
  const [status, setStatus] = useState<Status>("idle");
  const [errorType, setErrorType] = useState<ErrorType>(null);
  const [intent, setIntent] = useState<LeadIntent>(initialIntent);
  const [selectedCohort, setSelectedCohort] = useState("");
  // Seed with a sentinel so server and first client render agree (no hydration
  // mismatch); the real Malaysia date is applied after mount, at which point
  // started/completed cohorts drop out of the enquiry dropdown.
  const [cohortToday, setCohortToday] = useState("0000-00-00");
  // Field-level validation errors (keyed by input name) so each failing field
  // can carry aria-invalid + a linked aria-describedby message for assistive tech.
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  // Set on a failed submit so the effect below moves focus to the first invalid
  // field once the error attributes have rendered (not on later error clears).
  const focusFirstErrorRef = useRef(false);
  const [contactPreference, setContactPreference] = useState(campaign ? "details_first" : "programme_call");
  const [firstName, setFirstName] = useState("");
  const [leadReference, setLeadReference] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileLoadError, setTurnstileLoadError] = useState(false);
  const [emailDraft, setEmailDraft] = useState("");
  const [turnstileScriptReady, setTurnstileScriptReady] = useState(false);
  const [turnstileRequested, setTurnstileRequested] = useState(false);
  const [turnstileSize, setTurnstileSize] = useState<TurnstileSize>("flexible");
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const formElement = useRef<HTMLFormElement>(null);
  const firstContactField = useRef<HTMLInputElement>(null);
  const submissionId = useRef("");
  const formViewed = useRef(false);
  const formStarted = useRef(false);
  const formId = `${source}:${programme}:${lang}:${placement}`.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const formContext = {
    form_id: formId,
    form_source: source,
    form_location: placement,
    programme,
    form_language: lang,
    form_version: "2026.08.v4",
  };

  function changeIntent(value: LeadIntent) {
    markStarted();
    setIntent(value);
    if (value === "mandarin" && !selectedCohort) {
      const firstMandarin = INTAKES.find((item) => item.language === "Mandarin");
      if (firstMandarin) setSelectedCohort(cohortKey(firstMandarin.language, firstMandarin.co));
    }
  }

  useEffect(() => {
    const context = conversionContextFromLocation();
    setIntent(!allowedIntents || allowedIntents.includes(context.intent) ? context.intent : initialIntent);
    const today = malaysiaDateKey();
    if (!campaign) {
      // Only restore a preselected cohort if it is still open for enquiries —
      // a stored key for a now-started cohort would otherwise be submitted.
      const key = context.cohort_key || "";
      const match = key ? INTAKES.find((cohort) => cohortKey(cohort.language, cohort.co) === key) : undefined;
      setSelectedCohort(match && getIntakeStatus(match.startDate, match.endDate, today) === "upcoming" ? key : "");
    }
    setCohortToday(today);
  }, []);

  useEffect(() => {
    if (!focusFirstErrorRef.current) return;
    focusFirstErrorRef.current = false;
    const names = Object.keys(fieldErrors);
    if (names.length === 0) return;
    formElement.current
      ?.querySelector<HTMLElement>(names.map((name) => `[name="${name}"]`).join(","))
      ?.focus();
  }, [fieldErrors]);

  useEffect(() => {
    const form = formElement.current;
    if (!form || formViewed.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || formViewed.current) return;
      formViewed.current = true;
      trackEvent("lead_form_view", formContext);
      trackEvent("lead_form_step_view", { ...formContext, form_step: campaign ? 2 : 1 });
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(form);
    return () => observer.disconnect();
    // Attach the view observer once on mount; formViewed guards duplicates.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const form = formElement.current;
    if (!form || step !== 2 || turnstileRequested) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setTurnstileRequested(true);
      observer.disconnect();
    }, { threshold: 0.01, rootMargin: "240px 0px" });
    observer.observe(form);
    return () => observer.disconnect();
  }, [step, turnstileRequested]);

  useEffect(() => {
    const container = turnstileContainer.current;
    if (!container || step !== 2) return;
    const updateSize = (width: number) => setTurnstileSize(width < 300 ? "compact" : "flexible");
    updateSize(container.clientWidth);
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) updateSize(width);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [step]);

  useEffect(() => {
    if (step !== 2 || !turnstileRequested) return;
    let cancelled = false;
    let retryTimer: number | undefined;
    let attempts = 0;

    const mountWidget = () => {
      if (cancelled || turnstileWidgetId.current || !turnstileContainer.current) return;
      if (!window.turnstile) {
        attempts += 1;
        if (attempts >= 75) {
          setTurnstileLoadError(true);
          trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "script_unavailable" });
          return;
        }
        retryTimer = window.setTimeout(mountWidget, 200);
        return;
      }
      try {
        turnstileWidgetId.current = window.turnstile.render(turnstileContainer.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: "lead-submit",
          theme: "light",
          size: turnstileSize,
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileLoadError(false);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "token_received" });
            setStatus((current) => current === "verify" ? "idle" : current);
          },
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "challenge_error" });
          },
          "timeout-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "challenge_timeout" });
          },
          "unsupported-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "browser_unsupported" });
          },
        });
        trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "rendered" });
      } catch {
        if (!cancelled) {
          setTurnstileLoadError(true);
          trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "render_failed" });
        }
      }
    };

    mountWidget();
    return () => {
      cancelled = true;
      if (retryTimer) window.clearTimeout(retryTimer);
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
      turnstileWidgetId.current = null;
    };
  }, [step, turnstileRequested, turnstileScriptReady, turnstileSize]);

  function markStarted() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("lead_form_start", formContext);
  }

  function resetTurnstile() {
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
    setTurnstileToken("");
  }

  function continueToContact() {
    markStarted();
    updateConversionContext({ intent, cohort_key: selectedCohort || null });
    trackEvent("conversion_context_set", {
      ...formContext,
      lead_intent: intent,
      cohort_key: selectedCohort || "not_selected",
    });
    trackEvent("lead_form_step_complete", { ...formContext, form_step: 1 });
    setStatus("idle");
    setErrorType(null);
    setStep(2);
    trackEvent("lead_form_step_view", { ...formContext, form_step: 2 });
    window.requestAnimationFrame(() => firstContactField.current?.focus({ preventScroll: true }));
  }

  function returnToRoute() {
    trackEvent("lead_form_step_back", { ...formContext, from_step: 2, to_step: 1 });
    setStatus("idle");
    setErrorType(null);
    setFieldErrors({});
    setStep(1);
  }

  function clearFieldError(name: string) {
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  // Collect per-field validation errors on the step-2 form so each failing
  // input can be announced individually to assistive tech and visibly flagged.
  function collectFieldErrors(form: HTMLFormElement): Record<string, string> {
    const errors: Record<string, string> = {};
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input[name], select[name], textarea[name]",
    ).forEach((element) => {
      if (element.name === "website" || element.disabled || element.type === "hidden") return;
      if (element.name === "consent") {
        if (element instanceof HTMLInputElement && !element.checked) errors.consent = t.consentRequired;
        return;
      }
      if (element.checkValidity()) return;
      errors[element.name] = element.validity.typeMismatch ? t.emailInvalid : t.fieldRequired;
    });
    return errors;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      continueToContact();
      return;
    }
    const form = event.currentTarget;
    const errors = collectFieldErrors(form);
    if (Object.keys(errors).length > 0) {
      const consentOnly = Object.keys(errors).length === 1 && errors.consent;
      trackEvent("lead_form_error", { ...formContext, form_step: 2, error_type: consentOnly ? "consent_required" : "validation" });
      focusFirstErrorRef.current = true;
      setFieldErrors(errors);
      setStatus("error");
      setErrorType("validation");
      return;
    }
    setFieldErrors({});
    const formData = new FormData(form);
    formData.delete("cf-turnstile-response");
    const data = Object.fromEntries(formData.entries());
    data.marketing = data.consent_marketing === "yes" ? "yes" : "no";
    delete data.consent_marketing;
    if (data.phone_local !== undefined) {
      const localNumber = String(data.phone_local || "").replace(/\D/g, "").replace(/^0+/, "");
      if (localNumber) data.phone = `${String(data.phone_cc || "+60")}${localNumber}`;
      delete data.phone_local;
      delete data.phone_cc;
    }
    if (data.website) {
      setFirstName(String(data.name || "").split(" ")[0]);
      setStatus("ok");
      return;
    }
    if (!turnstileToken) {
      trackEvent("lead_form_error", { ...formContext, form_step: 2, error_type: "security_verification_required" });
      setStatus("verify");
      setErrorType(null);
      return;
    }

    submissionId.current ||= crypto.randomUUID();
    trackEvent("lead_form_step_complete", { ...formContext, form_step: 2 });
    trackEvent("lead_form_submit", { ...formContext, lead_intent: intent, cohort_key: selectedCohort || "not_selected" });
    setStatus("sending");
    setErrorType(null);
    setFirstName(String(data.name || "").split(" ")[0]);
    let responseStatus: number | undefined;
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...getLeadAttribution(),
          submission_id: submissionId.current,
          lead_intent: intent,
          cohort_key: selectedCohort || null,
          participant_type: intent === "international" ? "international" : "malaysian",
          contact_preference: contactPreference,
          programme_interest: programme,
          source,
          experiment_json: getExperimentAssignmentsJson(),
          turnstile_token: turnstileToken,
        }),
      });
      responseStatus = response.status;
      const result = await response.json().catch(() => ({})) as { lead_reference?: unknown };
      if (!response.ok) throw new Error("lead_api_rejected");
      if (typeof result.lead_reference === "string") setLeadReference(result.lead_reference);
      trackEvent("generate_lead", {
        ...formContext,
        lead_type: campaign ? "programme_guide_request" : "programme_conversation_request",
        participant_type: intent === "international" ? "international" : "malaysian",
        contact_preference: contactPreference,
        lead_intent: intent,
        cohort_key: selectedCohort || "not_selected",
      });
      setStatus("ok");
    } catch {
      const nextError: ErrorType = responseStatus === 429
        ? "rate_limit"
        : responseStatus && responseStatus >= 500
          ? "service"
          : responseStatus
            ? "validation"
            : "network";
      trackEvent("lead_form_error", {
        ...formContext,
        form_step: 2,
        error_type: nextError,
        http_status: responseStatus,
      });
      resetTurnstile();
      setErrorType(nextError);
      setStatus("error");
    }
  }

  if (status === "ok") {
    const selectedLabel = cohortLabel(selectedCohort, lang);
    const message = encodeURIComponent(t.waMsg(firstName, selectedLabel));
    return (
      <div className="form lead-form-success" role="status">
        <p className="mono sec-k">{t.okK}</p>
        <h3>{t.okH(firstName)}</h3>
        <p className="fine">{campaign ? t.campaignOkP : t.okP}</p>
        {leadReference && <p className="lead-reference"><span>{t.okRef}</span><code>{leadReference}</code></p>}
        {campaign && (
          <a className="btn btn-primary" href={GUIDE_PDF[lang]} download data-track-event="cta_click" data-track-id="lead_success_programme_plan" data-track-location="lead_success">
            {t.okPlan}
          </a>
        )}
        <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${message}`} target="_blank" rel="noopener" data-track-event="contact_click" data-track-id="lead_success_whatsapp" data-track-location="lead_success" data-contact-method="whatsapp" data-contact-language={lang}>
          {t.okWa}
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formElement}
      noValidate
      className={`form lead-form-progressive${campaign ? " lead-form-campaign" : ""}${compactMode ? " lead-form-compact" : ""}`}
      onSubmit={onSubmit}
      onFocusCapture={() => {
        markStarted();
        if (step === 2) setTurnstileRequested(true);
      }}
      onPointerDownCapture={() => {
        if (step === 2) setTurnstileRequested(true);
      }}
      aria-busy={status === "sending"}
      data-form-id={formId}
      data-form-source={source}
      data-form-location={placement}
      data-programme={programme}
    >
      {step === 2 && turnstileRequested && (
        <Script
          id="cloudflare-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          data-action="turnstile-spin-v1"
          onReady={() => {
            setTurnstileScriptReady(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "script_ready" });
          }}
          onError={() => {
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "script_error" });
          }}
        />
      )}

      {!campaign && (
        <div className="lead-form-progress" aria-label={t.progress(step)}>
          <span>{t.progress(step)}</span>
          <span className="lead-form-progress-track" aria-hidden="true"><i className={step === 2 ? "is-complete" : undefined} /></span>
        </div>
      )}

      <div className="lead-form-honeypot" aria-hidden="true">
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {!campaign && <fieldset className="lead-form-step" disabled={step !== 1} hidden={step !== 1}>
        <legend className="sr-only">{t.stepOneTitle}</legend>
        <p className="mono sec-k acc">{compactMode ? t.compactKicker : t.stepOneKicker}</p>
        <h2>{compactMode ? t.compactTitle : t.stepOneTitle}</h2>
        <p className="form-helper lead-form-intro">{compactMode ? t.compactIntro : t.stepOneIntro}</p>
        {compactMode ? (
          <div className="fld lead-form-intent-select">
            <label htmlFor={id("lead-intent")}>{t.compactIntent}</label>
            <select
              id={id("lead-intent")}
              name="lead_intent_choice"
              value={intent}
              onChange={(event) => changeIntent(event.target.value as LeadIntent)}
            >
              {t.intents.filter(([value]) => !allowedIntents || allowedIntents.includes(value)).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <p className="form-helper">{selectedIntentDescription(lang, intent)}</p>
          </div>
        ) : (
          <div className="intent-grid" role="radiogroup" aria-label={t.stepOneTitle}>
            {t.intents.filter(([value]) => !allowedIntents || allowedIntents.includes(value)).map(([value, label, description]) => (
              <label className={`intent-option${intent === value ? " is-selected" : ""}`} key={value}>
                <input
                  type="radio"
                  name="lead_intent_choice"
                  value={value}
                  checked={intent === value}
                  onChange={() => changeIntent(value)}
                />
                <span><strong>{label}</strong><small>{description}</small></span>
              </label>
            ))}
          </div>
        )}
        {!campaign && !compactMode && (
          <div className="fld">
            <label htmlFor={id("cohort")}>{t.cohort}</label>
            <select id={id("cohort")} value={selectedCohort} onChange={(event) => setSelectedCohort(event.target.value)}>
              <option value="">{t.cohortUnknown}</option>
              {INTAKES.filter((cohort) => getIntakeStatus(cohort.startDate, cohort.endDate, cohortToday) === "upcoming").map((cohort) => {
                const key = cohortKey(cohort.language, cohort.co);
                return <option key={key} value={key}>{cohortLabel(key, lang)} · {t.cohortOpen}</option>;
              })}
            </select>
          </div>
        )}
        <button className="btn btn-primary lead-form-primary-action" type="submit">{campaign ? t.campaignContinue : t.continue}</button>
      </fieldset>}

      <fieldset className="lead-form-step" disabled={step !== 2 || status === "sending"} hidden={step !== 2}>
        <legend className="sr-only">{campaign ? t.campaignTitle : t.stepTwoTitle}</legend>
        <div className="lead-form-step-header">
          <div>
            <p className="mono sec-k acc">{campaign ? t.campaignKicker : t.stepTwoKicker}</p>
            <h2>{campaign ? t.campaignTitle : t.stepTwoTitle}</h2>
            {campaign && (
              <>
                <p className="form-helper lead-form-intro">{t.campaignIntro}</p>
                <ul className="lead-magnet-benefits">
                  {t.campaignBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                </ul>
              </>
            )}
          </div>
          {!campaign && <button className="lead-form-back" type="button" onClick={returnToRoute}>{t.back}</button>}
        </div>
        {!campaign && <p className="lead-form-selection"><span>{t.selectedRoute}</span><strong>{selectedIntentLabel(lang, intent)}</strong>{selectedCohort && <small>{cohortLabel(selectedCohort, lang)}</small>}</p>}
        {!campaign && compactMode && (
          <div className="fld">
            <label htmlFor={id("cohort")}>{t.cohort}</label>
            <select id={id("cohort")} value={selectedCohort} onChange={(event) => setSelectedCohort(event.target.value)}>
              <option value="">{t.cohortUnknown}</option>
              {INTAKES.filter((cohort) => getIntakeStatus(cohort.startDate, cohort.endDate, cohortToday) === "upcoming").map((cohort) => {
                const key = cohortKey(cohort.language, cohort.co);
                return <option key={key} value={key}>{cohortLabel(key, lang)} · {t.cohortOpen}</option>;
              })}
            </select>
          </div>
        )}
        <div className="fld">
          <label htmlFor={id("name")}>{t.name}</label>
          <input ref={firstContactField} id={id("name")} name="name" placeholder={t.namePh} autoComplete="name" autoCapitalize="words" enterKeyHint="next" required aria-invalid={fieldErrors.name ? true : undefined} aria-describedby={fieldErrors.name ? id("name-error") : undefined} onInput={() => clearFieldError("name")} />
          {fieldErrors.name && <p id={id("name-error")} className="field-error">{fieldErrors.name}</p>}
        </div>
        {campaign ? (
          <>
            <div className="fld">
              <label htmlFor={id("email")}>{t.email}</label>
              <input
                id={id("email")}
                name="email"
                type="email"
                inputMode="email"
                placeholder={t.emailPh}
                autoComplete="email"
                enterKeyHint="next"
                required
                list={id("email-domains")}
                value={emailDraft}
                onChange={(event) => { setEmailDraft(event.target.value); clearFieldError("email"); }}
                aria-invalid={fieldErrors.email ? true : undefined}
                aria-describedby={fieldErrors.email ? id("email-error") : undefined}
              />
              <datalist id={id("email-domains")}>
                {emailSuggestions(emailDraft).map((suggestion) => (
                  <option key={suggestion} value={suggestion} />
                ))}
              </datalist>
              {fieldErrors.email && <p id={id("email-error")} className="field-error">{fieldErrors.email}</p>}
              <p className="form-helper">{lang === "zh" ? "提交后，课程决策指南将自动发送至此电邮地址。" : lang === "ms" ? "Panduan keputusan peribadi anda akan dihantar secara automatik ke alamat e-mel ini selepas penghantaran." : "Your private decision guide will be sent automatically to this email address after submission."}</p>
            </div>
            <div className="fld">
              <label htmlFor={id("phone-local")}>{t.campaignPhone}</label>
              <div className="phone-split">
                <select id={id("phone-cc")} name="phone_cc" defaultValue="+60" autoComplete="tel-country-code" aria-label={lang === "zh" ? "国家区号" : lang === "ms" ? "Kod negara" : "Country code"}>
                  {PHONE_COUNTRY_CODES.map((entry) => (
                    <option key={entry.code} value={entry.code}>{entry.label}</option>
                  ))}
                </select>
                <input id={id("phone-local")} name="phone_local" type="tel" inputMode="tel" placeholder="12 345 6789" autoComplete="tel-national" enterKeyHint="done" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="fld">
              <label htmlFor={id("phone-local")}>{t.phone}</label>
              <div className="phone-split">
                <select id={id("phone-cc")} name="phone_cc" defaultValue="+60" autoComplete="tel-country-code" aria-label={lang === "zh" ? "国家区号" : lang === "ms" ? "Kod negara" : "Country code"}>
                  {PHONE_COUNTRY_CODES.map((entry) => (
                    <option key={entry.code} value={entry.code}>{entry.label}</option>
                  ))}
                </select>
                <input id={id("phone-local")} name="phone_local" type="tel" inputMode="tel" placeholder="12 345 6789" autoComplete="tel-national" enterKeyHint="next" required aria-invalid={fieldErrors.phone_local ? true : undefined} aria-describedby={fieldErrors.phone_local ? id("phone-error") : undefined} onInput={() => clearFieldError("phone_local")} />
              </div>
              {fieldErrors.phone_local && <p id={id("phone-error")} className="field-error">{fieldErrors.phone_local}</p>}
            </div>
            <div className="fld">
              <label htmlFor={id("email")}>{t.email}</label>
              <input
                id={id("email")}
                name="email"
                type="email"
                inputMode="email"
                placeholder={t.emailPh}
                autoComplete="email"
                enterKeyHint="next"
                required
                list={id("email-domains")}
                value={emailDraft}
                onChange={(event) => { setEmailDraft(event.target.value); clearFieldError("email"); }}
                aria-invalid={fieldErrors.email ? true : undefined}
                aria-describedby={fieldErrors.email ? id("email-error") : undefined}
              />
              <datalist id={id("email-domains")}>
                {emailSuggestions(emailDraft).map((suggestion) => (
                  <option key={suggestion} value={suggestion} />
                ))}
              </datalist>
              {fieldErrors.email && <p id={id("email-error")} className="field-error">{fieldErrors.email}</p>}
            </div>
            <div className="two">
              <div className="fld">
                <label htmlFor={id("conversation")}>{t.conversation}</label>
                <select id={id("conversation")} name="contact_preference" value={contactPreference} onChange={(event) => setContactPreference(event.target.value)}>
                  {t.conversationOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div className="fld">
                <label htmlFor={id("contact-window")}>{t.contactWindow}</label>
                <select id={id("contact-window")} name="preferred_contact_window" defaultValue="flexible">
                  {t.contactWindows.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
            </div>
          </>
        )}
        {campaign && <input type="hidden" name="preferred_contact_window" value="flexible" />}
        {!campaign && (
          <div className="fld">
            <label htmlFor={id("company")}>{t.company}</label>
            <input id={id("company")} name="company" placeholder={t.companyPh} autoComplete="organization" autoCapitalize="words" enterKeyHint="next" />
          </div>
        )}
        <p className="form-helper">{campaign ? t.campaignHelper : t.helper}</p>
        <div className="consent-group" role="group" aria-label={lang === "zh" ? "同意条款" : lang === "ms" ? "Persetujuan" : "Consent"}>
          <label className="check">
            <input type="checkbox" name="consent" value="yes" required aria-invalid={fieldErrors.consent ? true : undefined} aria-describedby={fieldErrors.consent ? id("consent-error") : undefined} onChange={() => clearFieldError("consent")} />
            <span>{campaign ? t.campaignConsent : t.consent}</span>
          </label>
          {fieldErrors.consent && <p id={id("consent-error")} className="field-error">{fieldErrors.consent}</p>}
          <label className="check">
            <input type="checkbox" name="consent_marketing" value="yes" />
            <span>{t.consentMarketing}</span>
          </label>
        </div>
        <div className="turnstile-wrap" data-size={turnstileSize} role="group" aria-label={t.security}><div ref={turnstileContainer} data-action="turnstile-spin-v1" /></div>
        {turnstileLoadError && (
          <div className="turnstile-fallback" role="alert">
            <p>{t.verifyErr}</p>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.waMsg("", cohortLabel(selectedCohort, lang)))}`} target="_blank" rel="noopener" data-track-event="contact_click" data-track-id="turnstile_fallback_whatsapp" data-track-location="lead_form_security_fallback" data-contact-method="whatsapp" data-contact-language={lang}>{t.verifyFallback}</a>
          </div>
        )}
        <button className="btn btn-primary lead-form-primary-action" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : campaign ? t.campaignSubmit : t.submit}
        </button>
        <div aria-live="polite" aria-atomic="true">
          {status === "error" && errorType && <p className="status err" role="alert">{t.errors[errorType]}</p>}
          {status === "verify" && <p className="status err" role="alert">{t.verify}</p>}
        </div>
        <p className="fine center lead-form-fine-print">{campaign ? t.campaignFine : t.fine}</p>
      </fieldset>
    </form>
  );
}
