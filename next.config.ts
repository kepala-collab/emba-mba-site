import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle for Hostinger Node.js hosting.
  output: "standalone",
  images: {
    // Allow our own trusted SVG brand mark to be served via next/image.
    // The sandbox CSP prevents any script execution inside SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
