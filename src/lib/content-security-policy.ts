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
  "frame-src https://challenges.cloudflare.com https://www.youtube-nocookie.com",
  "worker-src 'self' blob:",
  "media-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
];

// `frame-ancestors` is header-only. Omitting it from the meta policy avoids a
// browser console error while the response header still enforces it.
export const contentSecurityPolicyMeta = directives
  .filter((directive) => !directive.startsWith("frame-ancestors"))
  .join("; ");
export const contentSecurityPolicyHeader = directives.join("; ");
