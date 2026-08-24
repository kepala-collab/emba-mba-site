import { readFileSync, readdirSync } from "node:fs";
import { extname, relative, resolve } from "node:path";

const root = resolve(process.cwd(), ".next", "server", "app");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = resolve(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function routeFor(file) {
  let route = `/${relative(root, file).replaceAll("\\", "/").replace(/\.html$/, "")}`;
  if (route === "/index") route = "/";
  return route;
}

const pages = walk(root).filter((file) => extname(file) === ".html");
const pageMap = new Map(pages.map((file) => [routeFor(file), readFileSync(file, "utf8")]));
const knownRoutes = new Set(pageMap.keys());
const failures = [];
let jsonLdCount = 0;
let indexedCount = 0;
const longDescriptions = [];

for (const [route, html] of pageMap) {
  if (route === "/_not-found" || route === "/_global-error") continue;
  const noindex = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
  if (noindex) continue;
  indexedCount += 1;

  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  if (!canonical) failures.push(`${route}: canonical missing`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) failures.push(`${route}: expected exactly one h1`);
  if (route !== "/home" && route !== "/zh" && route !== "/ms") {
    if (!html.includes('class="site-breadcrumbs"')) failures.push(`${route}: visible breadcrumb navigation missing`);
    if (!html.includes('"@type":"BreadcrumbList"')) failures.push(`${route}: BreadcrumbList structured data missing`);
  }

  const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] || "";
  if (!description) failures.push(`${route}: description missing`);
  if (description.length > 180) longDescriptions.push(`${route} (${description.length})`);

  for (const block of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    jsonLdCount += 1;
    try {
      JSON.parse(block[1]);
    } catch (error) {
      failures.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const target = match[1].split(/[?#]/)[0].replace(/\/$/, "") || "/";
    if (target.startsWith("/_next/") || target.includes("[indexNowKey]")) continue;
    if (!knownRoutes.has(target) && !target.includes(".")) failures.push(`${route}: broken internal target ${target}`);
  }
}

if (longDescriptions.length) failures.push(`Descriptions over 180 characters: ${longDescriptions.join(", ")}`);

const uniqueFailures = [...new Set(failures)];
if (uniqueFailures.length) {
  console.error(uniqueFailures.join("\n"));
  process.exit(1);
}

console.log(`Release audit passed: ${indexedCount} indexed pages, ${jsonLdCount} valid JSON-LD blocks, no broken internal page targets.`);
