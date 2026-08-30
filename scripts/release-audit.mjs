import { readFileSync, readdirSync, statSync } from "node:fs";
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

const heroVideoPath = resolve(
  process.cwd(),
  "public",
  "media",
  "future-commerce",
  "future-ready-emba-leadership-hero-v7.mp4",
);
const heroVideo = readFileSync(heroVideoPath);
const heroVideoBytes = statSync(heroVideoPath).size;
const heroAtoms = [];
let heroAtomOffset = 0;

while (heroAtomOffset + 8 <= heroVideo.length) {
  const atomSize = heroVideo.readUInt32BE(heroAtomOffset);
  const atomType = heroVideo.toString("ascii", heroAtomOffset + 4, heroAtomOffset + 8);
  heroAtoms.push(atomType);
  if (atomSize < 8) break;
  heroAtomOffset += atomSize;
}

const moovIndex = heroAtoms.indexOf("moov");
const mdatIndex = heroAtoms.indexOf("mdat");
if (heroVideoBytes > 1_000_000) failures.push(`Hero video exceeds the 1 MB performance budget: ${heroVideoBytes} bytes`);
if (moovIndex < 0 || mdatIndex < 0 || moovIndex > mdatIndex) {
  failures.push("Hero video is not fast-start enabled (the moov atom must precede mdat)");
}

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
