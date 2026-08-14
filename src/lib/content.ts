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
    scholarshipAmount: 4000,
    scholarshipLabel: "RM4,000.00",
    participantAmount: 6000,
    participantLabel: "RM6,000.00",
  },
} as const;

export const FACTS = {
  durationLong: "6 months",
  durationShort: "6 months",
  certificationPhase: "First 3 months · 3 sessions",
  charteredPhase: "Months 4–6 · supported CMgr pathway",
  priceStd: FEES.standard.label,
  scholarshipProvider: FEES.malaysia.scholarshipProvider,
  scholarshipAmt: FEES.malaysia.scholarshipLabel,
  priceNet: FEES.malaysia.participantLabel,
  priceIntl: "USD 2,500",
  gradsApprox: "~200",
  cohorts: "13",
  cmiMembers: "200,000+",
};

export const PROGRAMME_PRICING = {
  individuals: [
    {
      key: "global-online",
      title: "Global Online EMBA Public Programme",
      audience: "Open to participants worldwide, irrespective of country",
      price: `${FACTS.priceIntl} per person`,
      actionHref: "/online-executive-mba",
      actionLabel: "Explore the global online programme",
    },
    {
      key: "country-online",
      title: "Country-Specific Online EMBA Public Programme",
      audience: "Online delivery organised for a specific country or market",
      price: `Contact ${OPERATOR.name} for country-specific pricing`,
      actionHref: "/contact",
      actionLabel: "Request country-specific pricing",
    },
    {
      key: "local-onsite",
      title: "On-Site Localised EMBA Public Programme",
      audience: "In-person delivery adapted to the local market",
      price: `Contact ${OPERATOR.name} for localised on-site pricing`,
      actionHref: "/contact",
      actionLabel: "Request an on-site proposal",
    },
  ],
  companies: {
    title: "Customisable in-house Managers Development Programme (MDP)",
    description:
      "A company-specific management development pathway can be designed around the organisation's requirements. Subject to the agreed programme design and completion requirements, it can include an EMBA programme certificate recognised against CMI Professional Standards.",
    price: "Pricing is scoped to requirements and remains subject to the proposal, enrolment terms and conditions.",
  },
} as const;

// The marketed journey runs for six months: the programme certificate phase
// occupies the first three months, followed by supported preparation for the
// separate, eligibility-based Chartered Manager assessment route.
export const STAGES = [
  {
    t: "Months 1–3 · 3 sessions",
    h: "Executive MBA programme certificate",
    d: "Complete six training days across the first three monthly sessions and the applied business project. Successful participants receive the Executive MBA programme certificate recognised against CMI Professional Standards, subject to the provider's current CMI arrangement.",
  },
  {
    t: "Professional recognition · current CMI terms apply",
    h: "Foundation Chartered Manager — fCMgr",
    d: "Current CMI guidance says learners completing a CMI Recognised programme can achieve Foundation Chartered Manager status and use fCMgr after their name. Activation, continued use and renewal remain subject to the provider's current CMI arrangement, CMI confirmation and active membership.",
  },
  {
    t: "Months 4–6 · supported assessment pathway",
    h: "Chartered Manager — CMgr MCMI",
    d: "Participants who meet CMI's entry criteria move into a supported Chartered Manager phase: organising evidence of applied leadership and results, preparing the written application and preparing for the professional discussion. CMgr MCMI is awarded only after successful CMI assessment; eligibility, timing, membership and fees remain under CMI's control.",
  },
  {
    t: "Senior recognition · experience applies",
    h: "Fellow or Chartered Fellow",
    d: "Experienced strategic leaders may later qualify to apply for FCMI or CMgr FCMI. Current CMI criteria include 10 years of management experience, with at least three at strategic level; approval and continuing membership remain with CMI.",
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
  { i: "01 · Systems", h: "See the whole board", p: "Trace cause to third-order consequence before you commit." },
  { i: "02 · First-Principle", h: "Break it to bedrock", p: "Strip a problem to its atoms and rebuild a disruptive answer." },
  { i: "03 · Design-Integrative", h: "Fuse logic + creativity", p: "Hold strategy and imagination in the same move." },
  { i: "04 · Framework", h: "Structure the chaos", p: "Turn overwhelming complexity into a decision you can act on." },
  { i: "05 · Five-Fold", h: "Think in five lenses", p: "Stress-test every call from angles most leaders never see." },
  { i: "06 · 4D Strategic", h: "Align the forces", p: "Draw, drive, define and deliver — in one coherent strategy." },
  { i: "07 · Holistic", h: "Connect people + business", p: "Align human capital, innovation and growth for real impact." },
];

export const FLOW = ["Right Thinking", "Right Questions", "Right Ideas", "Right Solutions", "Exceptional Value"];

export const SIGNATURE_QUOTE = {
  text: "With the Executive MBA, ‘We Connect The Dots’ for your future.",
  attribution: "Dr. Xavier Johnson",
  role: "Chief Business Methodologist",
} as const;

export const MODULES = [
  { c: "M01", p: "F.A.S.T. Methodology" },
  { c: "M02", p: "Job-To-Be-Done value creation" },
  { c: "M03", p: "Future Foresight & landscape sensing" },
  { c: "M04", p: "Critical business issues" },
  { c: "M05", p: "Strategic DNA · 4D crafting" },
  { c: "M06", p: "Strategic Business Action Planning" },
  { c: "M07", p: "Transformational situational leadership" },
  { c: "M08", p: "Facilitative team intervention" },
  { c: "M09", p: "Integrated business systems thinking" },
  { c: "M10", p: "BOLT transformation journey" },
  { c: "M11", p: "Influence by design" },
  { c: "M12", p: "Stakeholder ecosystem engagement" },
];

export type Faculty = { n: string; r: string; focus: string; b: string; img: string };
export const FACULTY: Faculty[] = [
  {
    n: "Dr. Xavier Johnson", r: "Chief Business Methodologist",
    focus: "Strategic Thinking · F.A.S.T. · BOLT",
    b: "30+ years in strategic business thinking and business organisation leadership (BOLT). Architect of the F.A.S.T. Transformation methodology. Author, speaker, musician and corporate transformation expert.",
    img: "/brand/faculty/xavier-johnson.png",
  },
  {
    n: "Ir. Dr. Jonas Anthony", r: "Chief Business Consultant",
    focus: "Lean · Industry 4.0 · TQM",
    b: "Executive leadership in one of Malaysia's largest Japanese manufacturing conglomerates. Distinguished expert in Lean, Industry 4.0 and Total Quality Management. Renowned leadership mentor, industry advisor and academic contributor.",
    img: "/brand/faculty/jonas-anthony.png",
  },
  {
    n: "Dr. Eugene D'Cruz", r: "Faculty & Coach",
    focus: "Transformational HR · Talent Development",
    b: "20+ years in transformational HR and business leadership across diverse global industries. Bridges global expertise with academic excellence. Innovator in strategic leadership and talent development.",
    img: "/brand/faculty/eugene-dcruz.png",
  },
  {
    n: "Dr. Simona Carman Costea", r: "Faculty & Coach",
    focus: "Change Leadership · OD · Cross-Cultural",
    b: "Expert in leading large-scale change initiatives across Asia. Specialist in organisational development and cross-cultural leadership. Certified change coach with a strong academic and consulting background.",
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
    b: "Key architect in financial-sector policy and talent development at Bank Negara Malaysia. Recognised expert in future-proofing business, sustainability and viability. Academic leader and advocate for financial literacy.",
    img: "/brand/faculty/chin-nyuk-sang.png",
  },
  {
    n: "Lee Mean Yeit", r: "Faculty & Coach",
    focus: "Business Excellence · Coaching",
    b: "Over 15 years of leadership across government, conglomerates and large corporations, integrating business excellence with personal transformation and purpose-driven leadership. Helps professionals and leaders unlock their potential through strategic business expertise, coaching, wealth, wisdom and mindfulness.",
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
  { b: "Live facilitation across three sessions", s: "Framework workshops led by experienced business practitioners and consultants." },
  { b: "Personal leadership diagnostics", s: "Assessments that show exactly where your thinking is costing you." },
  { b: "Executive coaching & project review", s: "One-to-one guidance applied to your real business, not a case study." },
  { b: "The Leverage Management System (LMS)", s: "A permanent toolkit of frameworks, references and prompts you keep for life." },
  { b: "A live capstone transformation project", s: "Leave with a board-ready growth plan — no thesis, no exam." },
  { b: "A structured six-month professional pathway", s: "The first three months lead to the CMI-recognised programme certificate; months four to six provide supported preparation for eligible participants pursuing CMI's separate Chartered Manager assessment." },
  { b: `An alumni network of ${FACTS.gradsApprox} leaders`, s: "The room becomes your informal board for years after." },
];

export const COMPARISON = [
  { k: "Duration", them: "Commonly 18–24 months, depending on the institution and study mode", us: "Six-month professional pathway: three months to the programme certificate, then three months of supported CMgr assessment preparation" },
  { k: "Focus", them: "Academic content, theory, research and case analysis", us: "Business context, strategic judgment and reusable decision frameworks" },
  { k: "Assessment", them: "Often assignments, examinations and a dissertation or thesis; formats vary", us: "An applied project on the participant's own business; no traditional exams or thesis" },
  { k: "Faculty role", them: "Usually academic faculty, sometimes alongside industry practitioners", us: "Business practitioners, consultants and executive coaches" },
  { k: "Primary toolkit", them: "Academic texts, research literature and case studies", us: "F.A.S.T. methodology plus 12 practical business frameworks" },
  { k: "Format", them: "Full-time, part-time, evening, weekend or online formats vary by institution", us: "One scheduled weekend session a month while participants continue working" },
  { k: "Investment", them: "Varies by institution and programme", us: "RM10,000.00 standard; RM6,000.00 for Malaysian participants after the RM4,000.00 LIFE Innoversity scholarship" },
  { k: "Credential", them: "An academic MBA degree when awarded by an appropriately accredited institution", us: "A professional programme recognised by CMI (UK); not an MQA-accredited academic degree" },
];

export const FAQS = [
  { q: "How is the programme structured?", a: "It is a six-month professional pathway. During months one to three, participants complete six training days across the first three monthly sessions, coaching and an applied business project leading to the CMI-recognised Executive MBA programme certificate. During months four to six, participants who meet CMI entry criteria receive structured support to prepare for the separate Chartered Manager assessment. CMgr MCMI is awarded only after successful CMI assessment and is not automatic." },
  { q: "Is it MQA-recognised?", a: "No — MQA governs academic degrees. This is a professional programme recognised by the Chartered Management Institute (CMI), UK, and is globally respected. It is deliberately not an academic degree." },
  { q: "I'm too busy to attend everything.", a: "Sessions run one weekend a month. Miss one and you catch up by video or re-sit it in a later cohort — no penalty." },
  { q: "What if it isn't worth it?", a: "A Session 1 refund arrangement is available under the provider's current written terms. You must notify the programme team promptly after the first two training days, stop participating and return all issued materials. Confirm the applicable deadline, payment scope and processing details in writing before enrolment." },
  { q: "Can my company claim it?", a: "An eligible HRD Corp-registered Malaysian employer may apply to claim up to 100% of the approved programme fee from its levy for an employee, subject to programme registration, prior grant approval, sufficient levy balance and HRD Corp's current rules. The employer—not the individual—makes the application." },
  { q: "Who is it for?", a: "Owners, directors, GMs and senior managers — typically 35–55 with 10+ years of experience — who need to lead transformation, not just manage operations." },
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
  "This professional development programme is recognised by CMI (UK) and is not an MQA-accredited academic qualification. HRD Corp claims are subject to employer and programme eligibility; scholarships are subject to eligibility and availability. Personal data is processed under Malaysia's Personal Data Protection Act 2010 [Act 709], as amended.";

export type NavItem = { href: string; label: string };
export const NAV: NavItem[] = [
  { href: "/executive-mba", label: "The Programme" },
  { href: "/how-it-works", label: "The Method" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/fees", label: "Investment" },
  { href: "/intakes", label: "2026 Intakes" },
  { href: "/insights", label: "Insights" },
];
