import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = [
  ...globSync("src/app/**/*.ts"),
  ...globSync("src/app/**/*.tsx"),
  ...globSync("src/components/site/**/*.ts"),
  ...globSync("src/components/site/**/*.tsx"),
  "src/lib/content.ts",
  "src/lib/content-zh.ts",
  "src/lib/lead-email.ts",
  "src/lib/chat-knowledge.ts",
  "src/lib/root-metadata.ts",
  "src/lib/seo.ts",
];

const excluded = new Set([
  "src/app/(en)/privacy/page.tsx",
  "src/app/(en)/terms/page.tsx",
  "src/app/(zh)/zh/privacy/page.tsx",
  "src/app/(zh)/zh/terms/page.tsx",
]);

const banned = [
  ["rough estimate", /\b(?:roughly|approximately|about\s+\d)\b/i],
  ["undefined norm", /\b(?:typically|usually|commonly|often|most|generally|perhaps|maybe)\b/i],
  ["approximation symbol", /~\s*\d/],
  ["unsupported prestige claim", /\b(?:globally respected|world-class|best-in-class|unrivalled|unmatched|unparalleled)\b/i],
  ["unsupported outcome framing", /\b(?:future-proof|board-ready|game[- ]changing|same credibility)\b/i],
  ["generic aspiration language", /\b(?:unlock your|elevate your|redefine your|reimagine your|empower your|transformative journey|thrive in (?:today's|the modern)|navigate the (?:modern|complex|changing) landscape)\b/i],
  ["opaque programme language", /\b(?:working scholar|structured inquiry|decision brief|decision dossier|recognition boundary|workable commitment|serious learning)\b/i],
  ["opaque decision tooling", /\b(?:readiness diagnostic|private decision tool|executive mba pathway|professional development pathway)\b/i],
  ["pressure CTA", /\b(?:claim your seat|act now|don't miss out|no-pressure enquiry)\b/i],
  ["disparaging comparison", /\b(?:not lecturers|certificate on a shelf|done coasting)\b/i],
  ["unbounded HRD Corp percentage", /\bup to 100%\b/i],
  ["refund guarantee", /money[- ]back guarantee/i],
  ["stale content field", /\b(?:gradsApprox|cmiMembers)\b/],
  ["stale fee", /RM\s*(?:4|6),?000(?:\.00)?/i],
  ["retired six-month programme", /\b(?:six[- ]month|6[- ]month|first three months|months four to six|three further months|next three months|certificate phase|programme-certificate phase)\b/i],
  ["retired Chinese staged programme", /(?:六个月|6\s*个月|第四至第六|课程证书阶段|CMgr\s*申请准备|3\s*\+\s*3)/i],
  ["unsupported programme Level 7 claim", /(?:Future Ready|Executive MBA|programme|课程|本课程).{0,80}\bLevel\s*7\b|\bLevel\s*7\b.{0,80}(?:Future Ready|Executive MBA|programme|课程|本课程)/i],
  ["EMBA name expansion", /\bExecutive Master of Business Administration\b/i],
  ["Future Ready EMBA Chinese name expansion", /Future Ready.{0,40}工商管理硕士|工商管理硕士.{0,40}Future Ready/i],
  ["retired conversion CTA", /\b(?:Request the programme guide|Get Programme Guide|Request programme information|Discuss this cohort|Ask about programme fit|Request a 15-minute call)\b/i],
  ["retired coordinator name", /\b(?:Rostam Affandi Ahmad|Rostam Affandi)\b/i],
  ["retired generic WhatsApp CTA", /\b(?:Continue with a person on WhatsApp|Chat on WhatsApp|Chat with us on WhatsApp|Contact us on WhatsApp|Continue on WhatsApp)\b/i],
  ["ambiguous Chinese qualifier", /(?:可能|通常|多数|大约|最高\s*100%|全球认可|须视.+而定)/],
  ["Chinese pressure or prestige framing", /(?:立即报名|同等的公信力|看看你是否符合|准备好取得|无需承诺|无须承诺|颠覆性的答案)/],
];

const failures = [];

for (const file of files) {
  const normalizedFile = file.replaceAll("\\", "/");
  if (excluded.has(normalizedFile)) continue;
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  for (const [label, pattern] of banned) {
    lines.forEach((line, index) => {
      if (pattern.test(line)) failures.push(`${file}:${index + 1} [${label}] ${line.trim()}`);
    });
  }
  if (!normalizedFile.includes("/programmes/shift-hr/")) {
    lines.forEach((line, index) => {
      if (/\bHRD Corp claimable(?:\s+programme|\s+training|\s+course|\.)/i.test(line)) {
        failures.push(`${file}:${index + 1} [unqualified HRD Corp claim sentence] ${line.trim()}`);
      }
    });
  }
}

const canonical = readFileSync("src/lib/content.ts", "utf8");
const required = [
  'durationLong: "3 months"',
  'priceStd: FEES.standard.label',
  'scholarshipAmount: 5000',
  'participantAmount: 5000',
  'priceIntl: "USD 2,500"',
  'trainingDays: "6"',
  'liveSessions: "3"',
  'moduleCount: "12"',
  'director: "Roy Affandi"',
  'whatsapp: "Talk to Roy on WhatsApp"',
];

for (const statement of required) {
  if (!canonical.includes(statement)) failures.push(`src/lib/content.ts [missing canonical fact] ${statement}`);
}

const identityChecks = [
  ["src/app/(en)/asian-business-consulting/page.tsx", "Chief Programme Director, Asian Business Consulting · Co-Founder, LIFE Innoversity"],
  ["src/app/(en)/asian-business-consulting/page.tsx", "Chief Business Methodologist, Asian Business Consulting · Founder, LIFE University"],
  ["src/app/(zh)/zh/asian-business-consulting/page.tsx", "Asian Business Consulting 首席课程总监 · LIFE Innoversity 联合创办人"],
  ["src/app/(zh)/zh/asian-business-consulting/page.tsx", "Asian Business Consulting 首席商业方法总监 · LIFE University 创办人"],
];

for (const [file, statement] of identityChecks) {
  if (!readFileSync(file, "utf8").includes(statement)) failures.push(`${file} [missing approved identity wording] ${statement}`);
}

if (failures.length > 0) {
  console.error("Content clarity audit failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log(`Content clarity audit passed across ${files.length - excluded.size} public content files.`);
