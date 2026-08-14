import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd(), ".next", "server", "app");
const checks = [
  { file: "index.html", path: "/", hreflang: true },
  { file: "executive-mba.html", path: "/executive-mba", hreflang: true },
  { file: "curriculum.html", path: "/curriculum", hreflang: true },
  { file: "fees.html", path: "/fees", hreflang: true },
  { file: "intakes.html", path: "/intakes", hreflang: true },
  { file: "faculty.html", path: "/faculty", hreflang: true },
  { file: "faq.html", path: "/faq", hreflang: true },
  { file: "zh.html", path: "/zh", hreflang: true },
  { file: "zh/executive-mba.html", path: "/zh/executive-mba", hreflang: true },
  { file: "zh/curriculum.html", path: "/zh/curriculum", hreflang: true },
  { file: "zh/fees.html", path: "/zh/fees", hreflang: true },
  { file: "zh/intakes.html", path: "/zh/intakes", hreflang: true },
  { file: "zh/faculty.html", path: "/zh/faculty", hreflang: true },
  { file: "zh/faq.html", path: "/zh/faq", hreflang: true },
];

const failures = [];
for (const check of checks) {
  const html = readFileSync(resolve(root, check.file), "utf8");
  const expectedCanonical = `href="https://futurereadymba.com${check.path === "/" ? "" : check.path}"`;
  if (!html.includes('rel="canonical"') || !html.includes(expectedCanonical)) {
    failures.push(`${check.path}: canonical missing or incorrect`);
  }
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) {
    failures.push(`${check.path}: expected exactly one h1`);
  }
  if (check.hreflang && (!html.includes('hrefLang="en"') || !html.includes('hrefLang="zh-Hans"'))) {
    failures.push(`${check.path}: language alternates missing`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`SEO regression checks passed for ${checks.length} core pages.`);
