import type { NextConfig } from "next";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { contentSecurityPolicyHeader } from "./src/lib/content-security-policy";

const isDevelopment = process.env.NODE_ENV === "development";

function releaseId() {
  // Read the fingerprint frozen before upload. Hosting build systems can
  // rewrite lock metadata during installation, so recomputing after install
  // does not always describe the source archive that was approved.
  try {
    const declared = readFileSync("release-id.txt", "utf8").trim();
    if (/^content-[a-f0-9]{12}$/.test(declared)) return declared;
  } catch {
    // Local development and older archives fall back to live computation.
  }

  try {
    return execFileSync(process.execPath, ["scripts/release-fingerprint.mjs"], {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();
  } catch {
    if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 12);
    return "unversioned";
  }
}

const currentReleaseId = releaseId();

const securityHeaders = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Origin-Agent-Cluster", value: "?1" },
  { key: "Content-Security-Policy", value: contentSecurityPolicyHeader },
  { key: "X-Release-ID", value: currentReleaseId },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  ...(
    isDevelopment
      ? []
      : [{
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        }]
  ),
];

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle for Hostinger Node.js hosting.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.futurereadymba.com" }],
        destination: "https://futurereadymba.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate, s-maxage=300, stale-while-revalidate=60",
          },
          {
            key: "CDN-Cache-Control",
            value: "public, s-maxage=300, stale-while-revalidate=60",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store, max-age=0" },
          { key: "CDN-Cache-Control", value: "no-store" },
        ],
      },
      {
        // Next.js fingerprints these generated assets in their filenames, so
        // browsers and the CDN can safely retain them across repeat visits.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "CDN-Cache-Control", value: "public, s-maxage=31536000, immutable" },
        ],
      },
      {
        source: "/media/future-commerce/future-ready-emba-leadership-hero-v3.mp4",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "CDN-Cache-Control", value: "public, s-maxage=31536000, immutable" },
        ],
      },
      {
        source: "/zh/:path*",
        headers: [{ key: "Content-Language", value: "zh-Hans" }],
      },
      {
        source: "/ms/:path*",
        headers: [{ key: "Content-Language", value: "ms" }],
      },
    ];
  },
  images: {
    // Allow our own trusted SVG brand mark to be served via next/image.
    // The sandbox CSP prevents any script execution inside SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
