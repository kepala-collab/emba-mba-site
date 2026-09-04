import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import { SITE } from "@/lib/content";

const ALLOWED_AGENTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "DuckAssistBot",
];

const BLOCKED_AGENTS = [
  "GPTBot",
  "CCBot",
  "Bytespider",
  "Meta-ExternalAgent",
  "Amazonbot",
  "Applebot-Extended",
  "cohere-ai",
  "Diffbot",
  "omgili",
  "Timpibot",
  "ImagesiftBot",
  "anthropic-ai",
];

describe("robots.ts crawler policy", () => {
  const result = robots();
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules];

  function ruleFor(userAgent: string) {
    return rules.find((rule) => rule.userAgent === userAgent);
  }

  it("allows every named search and AI-answer agent with the shared api disallow", () => {
    for (const agent of ALLOWED_AGENTS) {
      const rule = ruleFor(agent);
      expect(rule, `missing rule for ${agent}`).toBeDefined();
      expect(rule?.allow, `${agent} allow`).toBe("/");
      expect(rule?.disallow, `${agent} disallow`).toContain("/api/");
    }
  });

  it("blocks every named training-only crawler outright", () => {
    for (const agent of BLOCKED_AGENTS) {
      const rule = ruleFor(agent);
      expect(rule, `missing rule for ${agent}`).toBeDefined();
      expect(rule?.disallow).toBe("/");
      expect(rule?.allow, `${agent} should have no allow`).toBeUndefined();
    }
  });

  it("never lists an agent in both the allowed and blocked rosters", () => {
    const overlap = ALLOWED_AGENTS.filter((agent) => BLOCKED_AGENTS.includes(agent));
    expect(overlap).toEqual([]);
  });

  it("keeps the sitemap and host directives", () => {
    expect(result.sitemap).toMatch(/\/sitemap\.xml$/);
    expect(result.host).toBe(SITE.url);
  });
});
