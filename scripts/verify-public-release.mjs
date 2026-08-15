import { computeReleaseFingerprint } from "./release-fingerprint.mjs";

const siteUrl = process.env.RELEASE_CHECK_URL || "https://futurereadymba.com";
const expectedRelease = process.env.RELEASE_ID || process.argv[2] || computeReleaseFingerprint();

const response = await fetch(`${siteUrl}/?release_check=${Date.now()}`, {
  cache: "no-store",
  headers: { "Cache-Control": "no-cache" },
});
const failures = [];
const release = response.headers.get("x-release-id") || "";
const csp = response.headers.get("content-security-policy") || "";
const cacheControl = response.headers.get("cache-control") || "";
const sharedMaxAge = Number(cacheControl.match(/s-maxage=(\d+)/)?.[1] || 0);

if (!response.ok) failures.push(`homepage returned HTTP ${response.status}`);
if (release !== expectedRelease) failures.push(`release mismatch: expected ${expectedRelease}, received ${release || "no X-Release-ID"}`);
if (!csp.includes("default-src 'self'") || !csp.includes("frame-ancestors 'none'")) failures.push("the complete CSP response header is not active");
if (!sharedMaxAge || sharedMaxAge > 300) failures.push(`HTML shared cache TTL is missing or too long: ${cacheControl || "no Cache-Control"}`);

if (failures.length) {
  console.error(`Public release verification failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`Verified ${siteUrl}: release ${release}, CSP active, HTML s-maxage=${sharedMaxAge}.`);
