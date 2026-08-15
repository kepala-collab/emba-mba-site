import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const root = join(process.cwd(), "src");
const files = [];

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if ([".ts", ".tsx", ".css"].includes(extname(path))) files.push(path);
  }
}

walk(root);
const source = files.map((file) => readFileSync(file, "utf8")).join("\n");
const counts = {
  inlineStyles: (source.match(/style=\{/g) || []).length,
  styleBlocks: (source.match(/<style/g) || []).length,
  importantDeclarations: (source.match(/!important/g) || []).length,
};
const budgets = { inlineStyles: 490, styleBlocks: 11, importantDeclarations: 32 };
const failures = Object.entries(counts).filter(([key, value]) => value > budgets[key]);

console.log(`Style budget: ${JSON.stringify(counts)}`);
if (failures.length) {
  console.error(`Style debt increased: ${failures.map(([key, value]) => `${key}=${value} (max ${budgets[key]})`).join(", ")}`);
  process.exit(1);
}
