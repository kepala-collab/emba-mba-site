import { describe, expect, it } from "vitest";
import { contentSecurityPolicyHeader, contentSecurityPolicyMeta } from "../content-security-policy";

describe("content security policy", () => {
  const requiredDirectives = [
    "default-src 'self'",
    "object-src 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "manifest-src 'self'",
    "worker-src 'self' blob:",
    "media-src 'self'",
  ];

  it("header contains every required directive", () => {
    for (const directive of requiredDirectives) {
      expect(contentSecurityPolicyHeader).toContain(directive);
    }
  });

  it("meta contains every required directive except frame-ancestors", () => {
    for (const directive of requiredDirectives) {
      if (directive.startsWith("frame-ancestors")) continue;
      expect(contentSecurityPolicyMeta).toContain(directive);
    }
    expect(contentSecurityPolicyMeta).not.toContain("frame-ancestors");
  });

  it("header and meta differ by exactly the frame-ancestors segment", () => {
    const headerParts = contentSecurityPolicyHeader.split("; ");
    const metaParts = contentSecurityPolicyMeta.split("; ");
    expect(headerParts.filter((part) => !part.startsWith("frame-ancestors"))).toEqual(metaParts);
  });

  it("script-src allows Turnstile and inline scripts", () => {
    expect(contentSecurityPolicyHeader).toContain("https://challenges.cloudflare.com");
    expect(contentSecurityPolicyHeader).toMatch(/script-src[^;]*'unsafe-inline'/);
  });

  it("frame-src allows Turnstile and YouTube nocookie embeds", () => {
    expect(contentSecurityPolicyHeader).toMatch(/frame-src[^;]*https:\/\/challenges\.cloudflare\.com/);
    expect(contentSecurityPolicyHeader).toMatch(/frame-src[^;]*https:\/\/www\.youtube-nocookie\.com/);
  });

  it("does not allow 'unsafe-eval' outside development", () => {
    expect(process.env.NODE_ENV).not.toBe("development");
    expect(contentSecurityPolicyHeader).not.toContain("'unsafe-eval'");
    expect(contentSecurityPolicyMeta).not.toContain("'unsafe-eval'");
  });
});
