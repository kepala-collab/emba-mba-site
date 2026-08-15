import { computeReleaseFingerprint } from "./release-fingerprint.mjs";
import { setDefaultResultOrder } from "node:dns";

const siteUrl = process.env.RELEASE_CHECK_URL || "https://futurereadymba.com";
const expectedRelease = process.argv[2] || computeReleaseFingerprint();

// Hostinger's edge is more reliable over IPv4 from some Windows networks.
setDefaultResultOrder("ipv4first");

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fetch(url, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      });
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 750));
    }
  }
  throw lastError;
}

const response = await fetchWithRetry(`${siteUrl}/?release_check=${Date.now()}`);
const html = await response.text();
const failures = [];
const release = response.headers.get("x-release-id") || "";
const csp = response.headers.get("content-security-policy") || "";
const frameOptions = response.headers.get("x-frame-options") || "";
const cacheControl = response.headers.get("cache-control") || "";
const sharedMaxAge = Number(cacheControl.match(/s-maxage=(\d+)/)?.[1] || 0);
const metaCsp = html
  .match(/<meta[^>]+http-equiv=["']Content-Security-Policy["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1]
  ?.replaceAll("&#x27;", "'")
  .replaceAll("&#39;", "'")
  .replaceAll("&quot;", '"') || "";
const completeHeaderCsp = csp.includes("default-src 'self'") && csp.includes("frame-ancestors 'none'");
const completeMetaFallback = metaCsp.includes("default-src 'self'")
  && metaCsp.includes("object-src 'none'")
  && metaCsp.includes("form-action 'self'")
  && frameOptions.toUpperCase() === "DENY";

if (!response.ok) failures.push(`homepage returned HTTP ${response.status}`);
if (release !== expectedRelease) failures.push(`release mismatch: expected ${expectedRelease}, received ${release || "no X-Release-ID"}`);
if (!completeHeaderCsp && !completeMetaFallback) failures.push("neither the complete CSP header nor the protected HTML meta fallback is active");
if (!sharedMaxAge || sharedMaxAge > 300) failures.push(`HTML shared cache TTL is missing or too long: ${cacheControl || "no Cache-Control"}`);

if (failures.length) {
  console.error(`Public release verification failed:\n${failures.join("\n")}`);
  process.exit(1);
}

const cspMode = completeHeaderCsp ? "response-header CSP" : "HTML CSP fallback + X-Frame-Options DENY";
console.log(`Verified ${siteUrl}: release ${release}, ${cspMode}, HTML s-maxage=${sharedMaxAge}.`);
