import { writeFileSync } from "node:fs";
import { computeReleaseFingerprint } from "./release-fingerprint.mjs";

const releaseId = computeReleaseFingerprint();
writeFileSync("release-id.txt", `${releaseId}\n`, "utf8");
console.log(`Release manifest updated: ${releaseId}.`);
