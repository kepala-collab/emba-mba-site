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
  director: "Roy Affandi",
  providerUrl: process.env.NEXT_PUBLIC_PROVIDER_URL || "",
  providerLinkedIn: process.env.NEXT_PUBLIC_PROVIDER_LINKEDIN || "",
};

export const PROGRAMME_YEAR = "2026";

export const CTA_LABELS = {
  guide: `Get the ${PROGRAMME_YEAR} programme guide`,
  conversation: "Arrange a programme conversation",
  company: "Enquire for your company",
  whatsapp: "Talk to Roy on WhatsApp",
  zh: {
    guide: `获取 ${PROGRAMME_YEAR} 课程指南`,
    conversation: "预约课程沟通",
    company: "企业课程咨询",
    whatsapp: "通过 WhatsApp 联系 Roy",
  },
} as const;

export const PROGRAMME_PROOF = {
  graduates: 154,
  cohorts: 17,
  englishCohorts: 16,
  mandarinCohorts: 1,
  graduationAttendance: 86,
  inauguralGraduation: "August 2026",
} as const;

export const ORGANISATIONAL_STATEMENT =
  "The Future Ready Executive MBA is a three-month professional development programme designed and delivered by Asian Business Consulting, with CMI (UK) Endorsed and Recognised status. Right Dots Resources is its Associate Partner for programme enquiries and enrolment coordination. Employer funding may be available to eligible HRD Corp-registered employers, subject to HRD Corp approval and the approved amount.";

export const ABC_PROFILE = {
  name: "Asian Business Consulting",
  shortName: "ABC",
  hrdStatus: "Registered HRD Corp Training Provider",
  description:
    "ABC develops and structures signature training programmes for professionals and organisations. The Future Ready Executive MBA, CMI (UK) is one of its signature programmes.",
  programmePositioning:
    "The Future Ready Executive MBA is a three-month professional development programme with CMI (UK) Endorsed and Recognised status. It is non-academic, not an MQA-accredited academic degree or a regulated qualification.",
} as const;

// The Associate Partner to Asian Business Consulting that operates this site
// and handles marketing, enquiries, pricing and enrolment coordination.
export const OPERATOR = {
  name: "Right Dots Resources",
  role: "Associate Partner",
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
    eligibility:
      "Available to eligible Malaysian applicants only, subject to scholarship availability, assessment and written approval by the programme team.",
  },
} as const;

export const FACTS = {
  durationLong: "3 months",
  durationShort: "3 months",
  certificationPhase: "3 months · 3 sessions",
  trainingDays: "6",
  liveSessions: "3",
  moduleCount: "12",
  publishedIntakes: "5",
  priceStd: FEES.standard.label,
  scholarshipProvider: FEES.malaysia.scholarshipProvider,
  scholarshipAmount: FEES.malaysia.scholarshipLabel,
  scholarshipEligibility: FEES.malaysia.eligibility,
  priceAfterScholarship: FEES.malaysia.participantLabel,
  // Backward-compatible aliases used only by archived release-verification copies.
  scholarshipAmt: FEES.malaysia.scholarshipLabel,
  priceNet: FEES.malaysia.participantLabel,
  priceIntl: "USD 2,500",
  cohorts: String(PROGRAMME_PROOF.cohorts),
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

export const COMPANY_ENROLMENT = {
  eligibility:
    "The programme is open to executives and above, including senior managers, directors, business owners and founders.",
  hrdRoute:
    "For employer-led HRD Corp funding, the company must be HRD Corp-registered, have available levy and submit the application before training. A founder or owner may be included where the company confirms the participant is on its payroll. HRD Corp decides eligibility and the approved amount.",
} as const;

export const REFUND_TERMS = {
  title: "Written Session 1 refund terms",
  description:
    "ABC's signed enrolment terms define refund eligibility, the notice deadline, the refundable amount, the condition for returning issued materials and the processing date. Participants receive and review those terms before payment. No refund promise applies outside the signed terms.",
} as const;

export const DELIVERY_CONTROL = {
  schedule:
    `The dates shown are the published ${PROGRAMME_YEAR} schedule. If ABC changes a date, registered participants receive the replacement date in writing.`,
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

// The marketed Executive MBA runs for three months. Chartered Manager is a
// separate optional CMI route, with its own eligibility, assessment and fees.
export const STAGES = [
  {
    t: "3 months · 3 sessions",
    h: "Executive MBA programme certificate",
    d: "Complete six training days across three monthly sessions, the coaching requirements and the applied business project. Successful participants are awarded the CMI Certificate of Recognition for the Executive MBA programme.",
  },
  {
    t: "Professional recognition",
    h: "Foundation Chartered Manager — fCMgr",
    d: "CMI's published terms for CMI Recognised programmes state that learners receive Foundation Chartered Manager status on completion. CMI controls activation, continued use, membership renewal and the fCMgr post-nominal.",
  },
  {
    t: "Optional next step · CMI route",
    h: "Chartered Manager — CMgr MCMI",
    d: "Chartered Manager is a separate CMI route. CMI confirms eligibility, assesses each application and controls timing, membership and fees. It is not included in the published Executive MBA programme or fee.",
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
  role: "Chief Business Methodologist, Asian Business Consulting · Founder, LIFE University",
} as const;

export const CERTIFICATE_POSITIONING = {
  headline: "CMI (UK) Endorsed & Recognised · professional development",
  credential: "CMI Certificate of Recognition",
  distinction:
    "The Future Ready Executive MBA is a professional development programme with CMI (UK) Endorsed and Recognised status. Successful participants are awarded a CMI Certificate of Recognition. It is non-academic, not an MQA-accredited academic degree or a regulated qualification.",
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

export const CMI_PATHWAY = {
  reviewedAt: "15 August 2026",
  charteredManager: "https://www.managers.org.uk/membership/chartered-manager/",
  routes: "https://www.managers.org.uk/membership/chartered-manager/routes-to-chartered-manager-status/",
  malaysia: "https://www.managers.org.uk/community/regional-networks/malaysia/",
  international: "https://www.managers.org.uk/community/cmi-internationally/",
  recognition: CERTIFICATE_POSITIONING.cmiRecognitionSource,
  qualifications: "https://www.managers.org.uk/education-and-learning/qualifications/qualifications-explained/",
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
    n: "Dr. Xavier Johnson", r: "Chief Business Methodologist, Asian Business Consulting · Founder, LIFE University",
    focus: "Strategic Thinking · F.A.S.T. · BOLT",
    b: "Works in strategic business thinking and business organisation leadership (BOLT). Architect of the F.A.S.T. Transformation methodology, Chief Business Methodologist of Asian Business Consulting and Founder of LIFE University.",
    img: "/brand/faculty/xavier-johnson.png",
  },
  {
    n: "Ir. Dr. Jonas Anthony", r: "Faculty Director",
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
  { b: "Six training days across three sessions", s: "Practitioner-led framework workshops scheduled once a month during the three-month programme." },
  { b: "Guided management self-assessment", s: "Review current decision habits and select specific areas to improve during the programme." },
  { b: "Executive coaching & project review", s: "One-to-one guidance applied to the participant's own organisational context." },
  { b: "The Leverage Management System (LMS)", s: "Participants retain the programme frameworks, references and working templates." },
  { b: "An applied business project", s: "Produce a written action plan for a current business issue and submit it for faculty review; there is no traditional thesis or examination." },
  { b: "CMI Certificate of Recognition", s: "Successful completion leads to the CMI Certificate of Recognition. Chartered Manager is a separate optional CMI route with its own eligibility, assessment and fees." },
];

export const COMPARISON = [
  { k: "Duration", them: "18–24 months", us: "Three months: six training days across three monthly sessions" },
  { k: "Focus", them: "Academic theory, research and case analysis", us: "Business context, strategic judgment and reusable decision frameworks" },
  { k: "Assessment", them: "Assignments or examinations plus a dissertation or thesis", us: "An applied project on the participant's own business; no traditional examination or thesis" },
  { k: "Faculty role", them: "Academic teaching and research supervision", us: "Business practitioners, consultants and executive coaches" },
  { k: "Primary toolkit", them: "Academic texts, research literature and case studies", us: "The F.A.S.T. method and 12 applied management modules" },
  { k: "Format", them: "Scheduled academic study under the institution's published timetable", us: "One scheduled weekend session a month during the three-month programme while participants continue working" },
  { k: "Investment", them: "The institution's published tuition and ancillary fees", us: "RM10,000.00 standard; eligible Malaysian applicants may receive a RM5,000.00 LIFE Innoversity scholarship after assessment and written approval" },
  { k: "Credential", them: "An academic MBA degree from the awarding institution", us: "CMI Certificate of Recognition for a professional programme; not an MQA-accredited academic degree" },
];

export const FAQS = [
  { q: "How is the programme structured?", a: "The Executive MBA runs for three months. Participants complete six training days across three monthly sessions, receive coaching and complete an applied business project leading to the CMI-recognised Executive MBA programme certificate. Chartered Manager is a separate optional CMI route with its own eligibility, assessment and fees; it is not included in the published Executive MBA programme or fee." },
  { q: "Can I complete the programme while working full time?", a: "Yes. The Malaysian public programme runs across three monthly sessions, with six scheduled training days in total. Participants remain in their professional roles and complete an applied project based on a current business issue. Review every published session date before enrolling." },
  { q: "Is this executive education or an academic MBA degree?", a: "It is a three-month professional development and executive education programme called the Future Ready Executive MBA. It has CMI (UK) Endorsed and Recognised status, but it is not an MQA-accredited academic degree or a regulated qualification." },
  { q: "What do successful participants receive?", a: "Successful participants receive the CMI Certificate of Recognition for the Future Ready Executive MBA programme. CMI controls the final certificate format and wording. Chartered Manager is a separate CMI route and is not automatically awarded through programme completion." },
  { q: "Does completing the programme make me a Chartered Manager?", a: "No. Successful programme completion leads to the CMI Certificate of Recognition and, under CMI's published CMI Recognised offer, Foundation Chartered Manager status. Full Chartered Manager status is separate. CMI determines the participant's route and eligibility, assesses the application and professional evidence, and controls the award, membership and fees." },
  { q: "How does CMI determine the Chartered Manager route?", a: "CMI currently publishes Full Assessment, CMI Fast Track and Apprenticeship routes. Full Assessment is available to managers with a management, business or leadership degree plus three years' management experience, or at least five years' management experience without a management-specific qualification. Fast Track requires a listed CMI qualification completed within five years plus at least three years' management experience. This programme is CMI Recognised, not a CMI qualification, so CMI must confirm the applicable route for each participant." },
  { q: "Is it MQA-recognised?", a: "No. This is a professional development programme with CMI (UK) Endorsed and Recognised status. It is not an MQA-accredited academic degree or a regulated qualification." },
  { q: "What happens if I miss a session?", a: "Contact the programme team before the session. ABC records the approved catch-up method in writing: video access or attendance in a named later cohort." },
  { q: "What are the refund terms?", a: REFUND_TERMS.description },
  { q: "Can my company use its HRD Corp levy?", a: `${HRD_CORP_CLAIM.short} ${HRD_CORP_CLAIM.responsibility}` },
  { q: "Can a company enrol its founder or senior team?", a: `${COMPANY_ENROLMENT.eligibility} ${COMPANY_ENROLMENT.hrdRoute}` },
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

// ABC's Future Ready Corporate Training Series (2026–2030).
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
  "This professional development programme has CMI (UK) Endorsed and Recognised status, and successful participants are awarded the CMI Certificate of Recognition. It is not an MQA-accredited academic degree or a regulated qualification. HRD Corp determines every grant approval and approved amount. Personal data is processed under Malaysia's Personal Data Protection Act 2010 [Act 709], as amended.";

export type NavItem = { href: string; label: string; children?: readonly NavItem[] };
export const NAV: NavItem[] = [
  {
    href: "/executive-mba",
    label: "Programme",
    children: [
      { href: "/executive-mba", label: "Programme overview" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/curriculum", label: "Curriculum" },
      { href: "/executive-mba-malaysia", label: "Malaysia programme" },
      { href: "/online-executive-mba", label: "Online programme" },
    ],
  },
  {
    href: "/chartered-manager-malaysia",
    label: "Recognition & Team",
    children: [
      { href: "/chartered-manager-malaysia", label: "CMI recognition" },
      { href: "/faculty", label: "Faculty & coaches" },
      { href: "/asian-business-consulting", label: "Asian Business Consulting" },
      { href: "/about", label: "About Roy Affandi" },
      { href: "/contact", label: "Contact Roy" },
    ],
  },
  {
    href: "/fees",
    label: "Fees & Dates",
    children: [
      { href: "/fees", label: "Fees & scholarship" },
      { href: "/hrd-corp-claimable", label: "HRD Corp funding" },
      { href: "/intakes", label: `${PROGRAMME_YEAR} intakes` },
      { href: "/corporate-training", label: "Corporate training" },
    ],
  },
  {
    href: "/resources",
    label: "Guides & Help",
    children: [
      { href: "/resources", label: "Decision resources" },
      { href: "/insights", label: "Insights" },
      { href: "/executive-mba-vs-mba", label: "Executive MBA vs MBA" },
      { href: "/faq", label: "Frequently asked questions" },
      { href: "/diagnostic", label: "Programme fit check" },
    ],
  },
];
