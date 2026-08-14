const isDevelopment = process.env.NODE_ENV === "development";
const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GTM_ID);
const analyticsScriptSources = analyticsEnabled ? " https://www.googletagmanager.com" : "";
const analyticsImageSources = analyticsEnabled ? " https://www.google-analytics.com https://region1.google-analytics.com" : "";
const analyticsConnectSources = analyticsEnabled ? " https://www.google-analytics.com https://region1.google-analytics.com" : "";

const directives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://challenges.cloudflare.com${analyticsScriptSources}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://challenges.cloudflare.com${analyticsImageSources}`,
  "font-src 'self' data:",
  `connect-src 'self' https://challenges.cloudflare.com${analyticsConnectSources}`,
  "frame-src https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "media-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
];

export const contentSecurityPolicyMeta = directives.join("; ");
export const contentSecurityPolicyHeader = [
  ...directives.slice(1),
  "frame-ancestors 'none'",
  // Keep a broadly compatible fallback last for proxies that rewrite CSP.
  // Hostinger currently replaces the application header with its own
  // upgrade-insecure-requests policy; the HTML meta policy enforces the
  // stricter supported directives and X-Frame-Options denies framing.
  `default-src 'self' 'unsafe-inline' data: blob: https://challenges.cloudflare.com${analyticsScriptSources}${analyticsImageSources}`,
].join("; ");
