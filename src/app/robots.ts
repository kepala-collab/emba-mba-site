import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

// Search inclusion and model-training access are separate business choices.
// Allowed: named search crawlers and AI-answer agents that cite the site back to a visitor.
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

// Blocked: bulk-training and archival crawlers with no citation-back behaviour.
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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ALLOWED_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
      ...BLOCKED_AGENTS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
