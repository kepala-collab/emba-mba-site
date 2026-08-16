import { readFileSync } from "node:fs";
import { computeReleaseFingerprint } from "./release-fingerprint.mjs";

const expected = computeReleaseFingerprint();
let declared = "";

try {
  declared = readFileSync("release-id.txt", "utf8").trim();
} catch {
  // The error below gives the release operator one actionable command.
}

if (declared !== expected) {
  console.error(`Release manifest is stale: expected ${expected}, received ${declared || "no release-id.txt"}. Run npm run release:sync.`);
  process.exitCode = 1;
} else {
  console.log(`Release manifest verified: ${declared}.`);
}
