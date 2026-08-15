// Central content library for the ABC Executive MBA lead-gen hub.
// Source of truth: PROJECT-BRIEF.md + CONTENT-LIBRARY.md

export const SITE = {
  name: "Future Ready Executive MBA",
  provider: "Asian Business Consulting",
  providerShort: "ABC",
  tagline: "Connecting the Dots",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://futurereadymba.com",
  whatsapp: "60129818533",
  phone: "+60 12-981 8533",
  email: "support@futurereadymba.com",
  director: "Rostam Affandi Ahmad",
  providerUrl: process.env.NEXT_PUBLIC_PROVIDER_URL || "",
  providerLinkedIn: process.env.NEXT_PUBLIC_PROVIDER_LINKEDIN || "",
};

// The Global and Local Programme Partner that operates this site and handles
// enquiries, pricing and enrolment coordination. Distinct from SITE.provider
// (Asian Business Consulting), which provides and delivers the programme.
export const OPERATOR = {
  name: "Right Dots Resources",
  role: "Global and Local Programme Partner",
  reg: "202603145615 (003856919-U)",
  address:
    "No. 86, Jalan Desa Bakti, Taman Desa, Jalan Klang Lama, 58100 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
  logo: "/brand/rdr-mark.svg",
  linkedIn: process.env.NEXT_PUBLIC_OPERATOR_LINKEDIN || "",
};

export const FEES = {
  standard: { amount: 10000, label: "RM10,000.00" },
  malaysia: {
    scholarshipProvider: "LIFE Innoversity",
    scholarshipAmount: 5000,
    scholarshipLabel: "RM5,000.00",
    participantAmount: 5000,
    participantLabel: "RM5,000.00",
  },
} as const;

export const FACTS = {
  durationLong: "6 months",
  durationShort: "6 months",
  certificationPhase: "First 3 months · 3 sessions",
  charteredPhase: "Months 4–6 · CMgr assessment preparation",
  trainingDays: "6",
  liveSessions: "3",
  moduleCount: "12",
  publishedIntakes: "5",
  priceStd: FEES.standard.label,
  scholarshipProvider: FEES.malaysia.scholarshipProvider,
  scholarshipAmt: FEES.malaysia.scholarshipLabel,
  priceNet: FEES.malaysia.participantLabel,
  priceIntl: "USD 2,500",
  cohorts: "13",
};

export const PROGRAMME_AUDIENCE =
  "Business owners, directors, general managers and senior managers responsible for business results, teams, cross-functional decisions or growth plans.";

export const HRD_CORP_CLAIM = {
  label: "Employer-led HRD Corp funding · subject to approval",
  short:
    "An HRD Corp-registered Malaysian employer submits the grant application in e-TRiS before training. HRD Corp determines eligibility and the approved amount under its Allowable Cost Matrix; funding cannot exceed the employer's available levy balance.",
  process:
    "The employer submits the grant application before training. The programme team supplies the quotation, schedule, course content and trainer documents. After the approved training is completed, the training provider and employer submit their respective claim documents within HRD Corp's stated deadline.",
  responsibility:
    "The employer—not the participant—applies for the grant. HRD Corp—not the programme provider—decides approval and the approved amount.",
} as const;

export const REFUND_TERMS = {
  title: "Written Session 1 refund terms",
  description:
    "ABC's signed enrolment terms define refund eligibility, the notice deadline, the refundable amount, the condition for returning issued materials and the processing date. Participants receive and review those terms before payment. No refund promise applies outside the signed terms.",
} as const;

export const DELIVERY_CONTROL = {
  schedule:
    "The dates shown are the published 2026 schedule. If ABC changes a date, registered participants receive the replacement date in writing.",
  faculty:
    "ABC confirms the faculty assigned to each cohort in the cohort briefing issued before Session 1.",
  modules:
    "Every cohort covers all 12 modules. The cohort timetable states the teaching sequence.",
} as const;

export const COMPARISON_SCOPE =
  "This table defines its reference academic MBA as an 18–24 month programme built around academic modules, assignments or examinations, and a dissertation or thesis. It does not describe every MBA programme.";

export const PROGRAMME_PRICING = {
  individuals: [
    {
      key: "global-online",
      title: "Global Online Executive MBA",
      audience: "Open to participants worldwide, irrespective of country",
      price: `${FACTS.priceIntl} per person`,
      actionHref: "/online-executive-mba",
      actionLabel: "Explore the global online programme",
    },
    {
      key: "country-online",
      title: "Country-Specific Online Programme",
      audience: "Online delivery organised for a specific country or market",
      price: `Contact ${OPERATOR.name} for country-specific pricing`,
      actionHref: "/contact",
      actionLabel: "Request country-specific pricing",
    },
    {
      key: "local-onsite",
      title: "Local In-Person Programme",
      audience: "In-person delivery adapted to the local market",
      price: `Contact ${OPERATOR.name} for localised on-site pricing`,
      actionHref: "/contact",
      actionLabel: "Request an on-site proposal",
    },
  ],
  companies: {
    title: "Custom company programme (MDP)",
    description:
      "ABC designs the in-house management development programme around the organisation's written requirements. The formal proposal specifies the modules, delivery format, completion requirements and certificate.",
    price: "The formal proposal states the complete fee and payment terms before the company accepts the engagement.",
  },
} as const;

// The marketed programme runs for six months: the programme certificate phase
// occupies the first three months, followed by supported preparation for the
// separate, eligibility-based Chartered Manager assessment route.
export const STAGES = [
  {
    t: "Months 1–3 · 3 sessions",
    h: "Executive MBA programme certificate",
    d: "Complete six training days across three monthly sessions, the coaching requirements and the applied business project. Successful participants are awarded the CMI Certificate of Recognition for the Executive MBA programme.",
  },
  {
    t: "Professional recognition",
    h: "Foundation Chartered Manager — fCMgr",
    d: "CMI's published terms for CMI Recognised programmes state that learners receive Foundation Chartered Manager status on completion. CMI controls activation, continued use, membership renewal and the fCMgr post-nominal.",
  },
  {
    t: "Months 4–6 · assessment preparation",
    h: "Chartered Manager — CMgr MCMI",
    d: "Participants who meet CMI's entry criteria move into a supported Chartered Manager phase: organising evidence of applied leadership and results, preparing the written application and preparing for the professional discussion. CMgr MCMI is awarded only after successful CMI assessment; eligibility, timing, membership and fees remain under CMI's control.",
  },
  {
    t: "Senior recognition · experience applies",
    h: "Fellow or Chartered Fellow",
    d: "CMI lists 10 years of management experience, including three years at strategic level, for its Fellow route. CMI assesses every application and controls continuing membership and post-nominal use.",
  },
];

export const FORCES = [
  { n: "01", t: "Markets are re-pricing overnight" },
  { n: "02", t: "Technology is dissolving industries" },
  { n: "03", t: "AI is rewriting how work gets done" },
  { n: "04", t: "Customers expect what didn't exist last year" },
  { n: "05", t: "Competitors are adapting faster than you" },
];

export const THINKING_EDGE = [
  { i: "01 · Systems", h: "Trace the wider system", p: "Examine causes, dependencies and likely consequences before deciding." },
  { i: "02 · First-Principle", h: "Test the foundations", p: "Separate verified constraints from assumptions, then build options from the evidence." },
  { i: "03 · Design-Integrative", h: "Combine analysis and invention", p: "Develop options that balance strategic logic, user needs and practical constraints." },
  { i: "04 · Framework", h: "Structure complexity", p: "Organise complex information into a decision that can be explained and acted upon." },
  { i: "05 · Five-Fold", h: "Review five perspectives", p: "Evaluate each decision through five defined business perspectives." },
  { i: "06 · 4D Strategic", h: "Connect strategy to delivery", p: "Use Draw, Drive, Define and Deliver as one coherent planning process." },
  { i: "07 · Holistic", h: "Connect people and business", p: "Consider human capability, innovation and commercial requirements together." },
];

export const FLOW = ["Right Thinking", "Right Questions", "Right Ideas", "Right Solutions", "Exceptional Value"];

export const SIGNATURE_QUOTE = {
  text: "With the Executive MBA, ‘We Connect The Dots’ for your future.",
  attribution: "Dr. Xavier Johnson",
  role: "Chief Business Methodologist",
} as const;

export const CERTIFICATE_POSITIONING = {
  headline: "Programme approved & endorsed by CMI (UK) · certificate awarded by CMI",
  credential: "CMI Certificate of Recognition",
  distinction:
    "CMI has approved and endorsed the programme against CMI's Professional Standard. Successful participants are awarded a CMI Certificate of Recognition. The certificate records professional programme completion; it is not a regulated qualification or an academic degree.",
  professionalRelevance:
    "The certificate documents completion of management and leadership development recognised against CMI's Professional Standard and can be listed on a professional profile. It does not guarantee promotion, employment, salary progression or any other career outcome.",
  specimenSignatory:
    "The provider-supplied specimen certificate bears the signature of Ann Francke OBE, Chief Executive of CMI. CMI controls the final certificate format, wording and authorised signatory at the date of issue.",
  signatoryContext:
    "CMI states that Ann Francke was awarded an OBE in 2020 for services to workplace equality. OBE means Officer of the Order of the British Empire, an official UK honour for distinguished achievement or service. The honour belongs to the signatory and does not alter the programme certificate's formal status.",
  cmiRecognitionSource: "https://www.managers.org.uk/our-services/cmi-recognition/",
  annFranckeSource: "https://www.managers.org.uk/about-cmi/governance/executive-team/",
  reviewedAt: "2026-08-14",
} as const;

export const MODULES = [
  { c: "M01", p: "F.A.S.T. structured decision method" },
  { c: "M02", p: "Identify the value customers need" },
  { c: "M03", p: "Anticipate market and industry change" },
  { c: "M04", p: "Define the critical business issue" },
  { c: "M05", p: "Shape strategic direction with 4D" },
  { c: "M06", p: "Turn strategy into an action plan" },
  { c: "M07", p: "Lead people through change" },
  { c: "M08", p: "Facilitate team problem-solving" },
  { c: "M09", p: "Understand the business as a system" },
  { c: "M10", p: "Build a BOLT implementation plan" },
  { c: "M11", p: "Communicate and influence decisions" },
  { c: "M12", p: "Align the stakeholder ecosystem" },
];

export type Faculty = { n: string; r: string; focus: string; b: string; img: string };
export const FACULTY: Faculty[] = [
  {
    n: "Dr. Xavier Johnson", r: "Chief Business Methodologist",
    focus: "Strategic Thinking · F.A.S.T. · BOLT",
    b: "Works in strategic business thinking and business organisation leadership (BOLT). Architect of the F.A.S.T. Transformation methodology. Author, speaker, musician and corporate transformation practitioner.",
    img: "/brand/faculty/xavier-johnson.png",
  },
  {
    n: "Ir. Dr. Jonas Anthony", r: "Chief Business Consultant",
    focus: "Lean · Industry 4.0 · TQM",
    b: "Held executive leadership responsibility in a Japanese manufacturing conglomerate. Works in Lean, Industry 4.0 and Total Quality Management as a leadership mentor, industry advisor and academic contributor.",
    img: "/brand/faculty/jonas-anthony.png",
  },
  {
    n: "Dr. Eugene D'Cruz", r: "Faculty & Coach",
    focus: "Transformational HR · Talent Development",
    b: "Works in transformational HR, business leadership, strategic leadership and talent development across multiple industries.",
    img: "/brand/faculty/eugene-dcruz.png",
  },
  {
    n: "Dr. Simona Carman Costea", r: "Faculty & Coach",
    focus: "Change Leadership · OD · Cross-Cultural",
    b: "Leads change initiatives across Asia and works in organisational development and cross-cultural leadership. Certified change coach with academic and consulting experience.",
    img: "/brand/faculty/simona-costea.png",
  },
  {
    n: "Dr. Aaron Koo", r: "Faculty & Coach",
    focus: "Finance · Risk · Governance",
    b: "Began his career with a Big 4 accounting firm and went on to hold senior executive roles including GM, COO and CFO in public-listed companies across industries. Provides financial and risk consultancy to major corporations such as Bank Negara Malaysia and industry advisory panels.",
    img: "/brand/faculty/aaron-koo.png",
  },
  {
    n: "Dr. Chin Nyuk Sang", r: "Faculty & Coach",
    focus: "Financial Policy · Sustainability",
    b: "Worked in financial-sector policy and talent development at Bank Negara Malaysia. Focuses on business sustainability, viability and financial literacy.",
    img: "/brand/faculty/chin-nyuk-sang.png",
  },
  {
    n: "Lee Mean Yeit", r: "Faculty & Coach",
    focus: "Business Excellence · Coaching",
    b: "Leadership experience across government, conglomerates and large corporations, integrating business excellence with coaching, purpose, wealth, wisdom and mindfulness.",
    img: "/brand/faculty/lee-mean-yeit.png",
  },
];

export const INTAKES = [
  { co: "Cohort 17", language: "English", s1: "22–23 Aug", s2: "19–20 Sep", s3: "17–18 Oct", startDate: "2026-08-22", endDate: "2026-10-18", days: "Sat–Sun", time: "9am–6pm", seats: "Open" },
  { co: "Cohort 18", language: "English", s1: "25–26 Sep", s2: "23–24 Oct", s3: "13–14 Nov", startDate: "2026-09-25", endDate: "2026-11-14", days: "Fri–Sat", time: "9am–6pm", seats: "Open" },
  { co: "Cohort 19", language: "English", s1: "30–31 Oct", s2: "20–21 Nov", s3: "4–5 Dec", startDate: "2026-10-30", endDate: "2026-12-05", days: "Fri–Sat", time: "9am–6pm", seats: "Open" },
  { co: "Cohort 2", language: "Mandarin", s1: "4–5 Sep", s2: "9–10 Oct", s3: "6–7 Nov", startDate: "2026-09-04", endDate: "2026-11-07", days: "Fri–Sat", time: "9am–6pm", seats: "Open" },
  { co: "Cohort 3", language: "Mandarin", s1: "30–31 Oct", s2: "20–21 Nov", s3: "4–5 Dec", startDate: "2026-10-30", endDate: "2026-12-05", days: "Fri–Sat", time: "9am–6pm", seats: "Open" },
];

export const INCLUSIONS = [
  { b: "Six training days across three sessions", s: "Practitioner-led framework workshops scheduled once a month during the certificate phase." },
  { b: "Guided management self-assessment", s: "Review current decision habits and select specific areas to improve during the programme." },
  { b: "Executive coaching & project review", s: "One-to-one guidance applied to the participant's own organisational context." },
  { b: "The Leverage Management System (LMS)", s: "Participants retain the programme frameworks, references and working templates." },
  { b: "An applied business project", s: "Produce a written action plan for a current business issue and submit it for faculty review; there is no traditional thesis or examination." },
  { b: "CMI certificate and Chartered Manager preparation", s: "Successful completion leads to the CMI Certificate of Recognition; months four to six prepare eligible participants for CMI's separate Chartered Manager assessment." },
];

export const COMPARISON = [
  { k: "Duration", them: "18–24 months", us: "Six months: three months to the programme certificate, followed by three months of supported CMgr assessment preparation" },
  { k: "Focus", them: "Academic theory, research and case analysis", us: "Business context, strategic judgment and reusable decision frameworks" },
  { k: "Assessment", them: "Assignments or examinations plus a dissertation or thesis", us: "An applied project on the participant's own business; no traditional examination or thesis" },
  { k: "Faculty role", them: "Academic teaching and research supervision", us: "Business practitioners, consultants and executive coaches" },
  { k: "Primary toolkit", them: "Academic texts, research literature and case studies", us: "F.A.S.T. methodology plus 12 practical business frameworks" },
  { k: "Format", them: "Scheduled academic study under the institution's published timetable", us: "One scheduled weekend session a month during the certificate phase while participants continue working" },
  { k: "Investment", them: "The institution's published tuition and ancillary fees", us: "RM10,000.00 standard; Malaysian participants pay RM5,000.00 after the RM5,000.00 LIFE Innoversity scholarship" },
  { k: "Credential", them: "An academic MBA degree from the awarding institution", us: "CMI Certificate of Recognition for a professional programme; not an MQA-accredited academic degree" },
];

export const FAQS = [
  { q: "How is the programme structured?", a: "The programme runs for six months. During months one to three, participants complete six training days across three monthly sessions, receive coaching and complete an applied business project leading to the CMI-recognised Executive MBA programme certificate. During months four to six, participants who meet CMI entry criteria receive support to prepare for the separate Chartered Manager assessment. CMgr MCMI is awarded only after successful CMI assessment and is not automatic." },
  { q: "Is it MQA-recognised?", a: "No. This is a professional development programme approved and endorsed by CMI against its Professional Standard. It is not an MQA-accredited academic degree or a regulated qualification." },
  { q: "What happens if I miss a session?", a: "Contact the programme team before the session. ABC records the approved catch-up method in writing: video access or attendance in a named later cohort." },
  { q: "What are the refund terms?", a: REFUND_TERMS.description },
  { q: "Can my company use its HRD Corp levy?", a: `${HRD_CORP_CLAIM.short} ${HRD_CORP_CLAIM.responsibility}` },
  { q: "Who is the programme for?", a: PROGRAMME_AUDIENCE },
];

export const CLIENTS = [
  "Bank Negara Malaysia", "Maybank", "Sime Darby", "Samsung", "Panasonic", "Prudential",
  "Malaysia Airports", "SIRIM", "Top Glove", "DKSH", "Great Eastern", "Public Bank",
  "RHB", "Affin Bank", "MISC", "Tokio Marine",
];

export const ASSOCIATES = [
  "Chartered Management Institute (UK)", "HRD Corp", "IDEO", "ASQ",
  "Balanced Scorecard Institute", "Chartered Quality Institute", "Maxwell Leadership",
  "University of Malaya", "Genos International", "IAC",
];

// ABC's Future Ready Corporate Training Series (2026–2030) — HRD Corp claimable.
// Categories with their "potential programmes" (menu; fees/dates supplied by ABC per engagement).
export const CORP_TRAINING = [
  { c: "AI Leadership & Enterprise AI Adoption", p: ["AI Leadership for Executives", "AI for Managers", "Agentic AI in the Workplace", "AI Productivity Masterclass", "Prompt Engineering for Business", "AI Workflow Automation", "Responsible AI & AI Governance"] },
  { c: "Digital Transformation & Operational Excellence", p: ["AI-Driven Operational Excellence", "Lean Six Sigma Essentials", "Business Process Reengineering", "Process Automation", "Continuous Improvement Systems", "Digital Workflow Optimisation"] },
  { c: "Future-Ready Leadership", p: ["Future-Ready Leadership", "Adaptive Leadership", "Coaching for Performance", "Leading Hybrid Teams", "Leadership Agility", "High Performance Leadership"] },
  { c: "Strategic Thinking & Business Acumen", p: ["Strategic Thinking Masterclass", "Business Acumen for Managers", "Systems Thinking", "Scenario Planning", "Strategic Decision Making", "Business Model Innovation"] },
  { c: "Data Analytics for Business Leaders", p: ["Data-Driven Decision Making", "Business Analytics for Managers", "HR Analytics", "Sales Analytics", "KPI & Dashboard Development", "Power BI for Business"] },
  { c: "Customer Experience Transformation", p: ["CX Excellence", "Service Transformation", "Customer Journey Mapping", "Design Thinking", "AI in Customer Service", "Voice of Customer Strategies"] },
  { c: "Change Leadership & Transformation", p: ["Leading Change", "Change Management", "Transformation Leadership", "Building Agile Organisations", "Managing Resistance to Change", "Change Communication"] },
  { c: "Human Skills in the AI Era", p: ["Critical Thinking", "Emotional Intelligence", "Creative Problem Solving", "Collaboration & Influence", "Communication Excellence", "Negotiation Skills"] },
  { c: "Cybersecurity & AI Governance", p: ["Cybersecurity Awareness", "Data Privacy & PDPA", "AI Governance", "Responsible AI", "Digital Risk Management", "Information Security Essentials"] },
  { c: "ESG & Sustainable Leadership", p: ["ESG Leadership", "Sustainability Strategy", "Responsible Governance", "Climate Risk Awareness", "Ethical Leadership", "Sustainable Business Practices"] },
];

export const COMPLIANCE =
  "CMI has approved and endorsed this professional development programme against its Professional Standard and awards the CMI Certificate of Recognition to successful participants. It is not an MQA-accredited academic degree or a regulated qualification. HRD Corp determines every grant approval and approved amount. Personal data is processed under Malaysia's Personal Data Protection Act 2010 [Act 709], as amended.";

export type NavItem = { href: string; label: string };
export const NAV: NavItem[] = [
  { href: "/executive-mba", label: "Programme" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/fees", label: "Fees" },
  { href: "/intakes", label: "2026 Dates" },
  { href: "/resources", label: "Guides" },
];
