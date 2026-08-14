import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Origin-Agent-Cluster", value: "?1" },
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
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/zh/:path*",
        headers: [{ key: "Content-Language", value: "zh-Hans" }],
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
