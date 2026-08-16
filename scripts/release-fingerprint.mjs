import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const INPUTS = [
  "src",
  "public",
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "scripts/check-release-manifest.mjs",
  "scripts/release-fingerprint.mjs",
  "scripts/prepare-standalone.mjs",
  "scripts/sync-release-manifest.mjs",
];

function collect(path) {
  const details = statSync(path);
  if (!details.isDirectory()) return [path];
  return readdirSync(path)
    .sort((left, right) => left.localeCompare(right))
    .flatMap((name) => collect(resolve(path, name)));
}

export function canonicalFileContent(content) {
  if (content.includes(0)) return content;

  const text = content.toString("utf8");
  if (!Buffer.from(text, "utf8").equals(content)) return content;

  return Buffer.from(text.replaceAll("\r\n", "\n"), "utf8");
}

export function computeReleaseFingerprint(root = process.cwd()) {
  const hash = createHash("sha256");
  const files = INPUTS.flatMap((entry) => collect(resolve(root, entry)))
    .sort((left, right) => left.localeCompare(right));

  for (const file of files) {
    hash.update(relative(root, file).replaceAll("\\", "/"));
    hash.update("\0");
    hash.update(canonicalFileContent(readFileSync(file)));
    hash.update("\0");
  }

  return `content-${hash.digest("hex").slice(0, 12)}`;
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  console.log(computeReleaseFingerprint());
}
