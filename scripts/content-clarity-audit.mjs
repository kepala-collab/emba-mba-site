import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = [
  ...globSync("src/app/**/*.ts"),
  ...globSync("src/app/**/*.tsx"),
  ...globSync("src/components/site/**/*.ts"),
  ...globSync("src/components/site/**/*.tsx"),
  "src/lib/content.ts",
  "src/lib/content-zh.ts",
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
  ["pressure CTA", /\b(?:claim your seat|act now|don't miss out|no-pressure enquiry)\b/i],
  ["disparaging comparison", /\b(?:not lecturers|certificate on a shelf|done coasting)\b/i],
  ["unbounded HRD Corp percentage", /\bup to 100%\b/i],
  ["refund guarantee", /money[- ]back guarantee/i],
  ["stale content field", /\b(?:gradsApprox|cmiMembers)\b/],
  ["stale fee", /RM\s*(?:4|6),?000(?:\.00)?/i],
  ["ambiguous Chinese qualifier", /(?:可能|通常|多数|大约|最高\s*100%|全球认可|须视.+而定)/],
  ["Chinese pressure or prestige framing", /(?:立即报名|同等的公信力|看看你是否符合|准备好取得|无需承诺|无须承诺|颠覆性的答案)/],
];

const failures = [];

for (const file of files) {
  if (excluded.has(file.replaceAll("\\", "/"))) continue;
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  for (const [label, pattern] of banned) {
    lines.forEach((line, index) => {
      if (pattern.test(line)) failures.push(`${file}:${index + 1} [${label}] ${line.trim()}`);
    });
  }
}

const canonical = readFileSync("src/lib/content.ts", "utf8");
const required = [
  'durationLong: "6 months"',
  'priceStd: FEES.standard.label',
  'scholarshipAmount: 5000',
  'participantAmount: 5000',
  'priceIntl: "USD 2,500"',
  'trainingDays: "6"',
  'liveSessions: "3"',
  'moduleCount: "12"',
];

for (const statement of required) {
  if (!canonical.includes(statement)) failures.push(`src/lib/content.ts [missing canonical fact] ${statement}`);
}

if (failures.length > 0) {
  console.error("Content clarity audit failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log(`Content clarity audit passed across ${files.length - excluded.size} public content files.`);
