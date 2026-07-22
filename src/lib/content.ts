// Central content library for the ABC Executive MBA lead-gen hub.
// Source of truth: PROJECT-BRIEF.md + CONTENT-LIBRARY.md

export const SITE = {
  name: "Future Ready Executive MBA",
  provider: "Asian Business Consulting",
  providerShort: "ABC",
  tagline: "Connecting the Dots",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://emba-mba-site.vercel.app",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "60163319236",
  phone: "+60 16-331 9236",
  email: "allan.asianbiz@gmail.com",
  director: "Allan Gan",
  venue: "TheFoodTree@OWG, Glenmarie",
};

// The company that operates this site and captures leads (the channel partner).
// Distinct from SITE.provider (Asian Business Consulting), which delivers the programme.
export const OPERATOR = {
  name: "Right Dots Resources",
  reg: "202603145615 (003856919-U)",
  address:
    "No. 86, Jalan Desa Bakti, Taman Desa, Jalan Klang Lama, 58100 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
  logo: "/brand/rdr-emblem.png",
};

export const FACTS = {
  durationLong: "6 intensive days over ~3 months",
  durationShort: "6 days · ~3 months",
  priceStd: "RM10,000",
  priceNet: "RM5,000",
  priceIntl: "USD 2,500",
  gradsApprox: "~200",
  cohorts: "13",
  cmiMembers: "200,000+",
};

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
  { co: "Cohort 16", s1: "5–6 Jun", s2: "3–4 Jul", s3: "31 Jul–1 Aug", seats: "Filling" },
  { co: "Cohort 17", s1: "21–22 Aug", s2: "18–19 Sep", s3: "16–17 Oct", seats: "Open" },
  { co: "Cohort 18", s1: "30–31 Oct", s2: "20–21 Nov", s3: "4–5 Dec", seats: "Open" },
];

export const INCLUSIONS = [
  { b: "6 days of live facilitation", s: "Framework workshops led by practitioners who advise Fortune-500 and Bursa-listed boards." },
  { b: "Personal leadership diagnostics", s: "Assessments that show exactly where your thinking is costing you." },
  { b: "Executive coaching & project review", s: "One-to-one guidance applied to your real business, not a case study." },
  { b: "The Leverage Management System (LMS)", s: "A permanent toolkit of frameworks, references and prompts you keep for life." },
  { b: "A live capstone transformation project", s: "Leave with a board-ready growth plan — no thesis, no exam." },
  { b: "CMI (UK) recognition + Chartered pathway", s: "A globally respected credential and a route to Chartered Manager (MCMI)." },
  { b: `An alumni network of ${FACTS.gradsApprox} leaders`, s: "The room becomes your informal board for years after." },
];

export const COMPARISON = [
  { k: "Time", us: "6 days over ~3 months", them: "1.5–2 years" },
  { k: "Investment", us: "RM10,000 (RM5,000 w/ scholarship)", them: "RM60,000–150,000+" },
  { k: "Format", us: "One weekend a month · keep working", them: "Career pause or heavy nightly load" },
  { k: "Assessment", us: "A real business project", them: "Exams & a thesis" },
  { k: "What you build", us: "Thinking frameworks + AI fluency", them: "Theory & case memorisation" },
  { k: "Credential", us: "CMI (UK) · Chartered Manager pathway", them: "Academic degree" },
];

export const FAQS = [
  { q: "How can an MBA-level programme take only 6 days?", a: "Because we teach context, not content. You're not memorising cases — you're installing frameworks and AI-enabled thinking you apply immediately to your own business. Depth comes from application, not seat-time." },
  { q: "Is it MQA-recognised?", a: "No — MQA governs academic degrees. This is a professional programme recognised by the Chartered Management Institute (CMI), UK, and is globally respected. It is deliberately not an academic degree." },
  { q: "I'm too busy to attend everything.", a: "Sessions run one weekend a month. Miss one and you catch up by video or re-sit it in a later cohort — no penalty." },
  { q: "What if it isn't worth it?", a: "Sit the first two days. If you don't see the value, return the manual and we arrange a refund within a month. The risk sits with us." },
  { q: "Can my company claim it?", a: "Yes — the programme is HRD Corp claimable for eligible Malaysian employers, and installment plans are available for individuals." },
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

export const COMPLIANCE =
  "This programme is not a regulated qualification and is not MQA-accredited; it is a professional programme recognised by CMI (UK). HRD Corp claimable for eligible Malaysian employers. Scholarship for Malaysian participants. Personal data is processed under Malaysia's PDPA 2010.";

export type NavItem = { href: string; label: string };
export const NAV: NavItem[] = [
  { href: "/executive-mba", label: "The Programme" },
  { href: "/how-it-works", label: "The Method" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/fees", label: "Investment" },
  { href: "/intakes", label: "2026 Intakes" },
  { href: "/insights", label: "Insights" },
];
