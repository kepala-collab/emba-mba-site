import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/"] },
      // Search inclusion and model-training access are separate business choices.
      { userAgent: "GPTBot", disallow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
