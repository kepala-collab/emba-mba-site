import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

const PRIMARY = ["", "/executive-mba", "/apply", "/zh"];
const CORE = ["/how-it-works", "/curriculum", "/fees", "/intakes", "/faculty", "/faq", "/corporate-training"];
const CLUSTER = [
  "/hrd-corp-claimable", "/online-executive-mba", "/executive-mba-vs-mba",
  "/ai-executive-mba", "/mba-for-working-professionals", "/programmes/shift-hr",
  "/executive-mba-malaysia", "/mba-for-sme-owners", "/mba-for-entrepreneurs",
];
const INSIGHTS = [
  "/insights", "/insights/first-principles-thinking",
  "/insights/systems-thinking-for-leaders", "/insights/design-thinking-for-business",
];
const INFO = ["/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const build = (routes: string[], priority: number, cf: "weekly" | "monthly") =>
    routes.map((r) => ({ url: `${SITE.url}${r}`, lastModified: now, changeFrequency: cf, priority }));
  return [
    ...build(PRIMARY, 0.95, "weekly"),
    ...build(CORE, 0.8, "weekly"),
    ...build(CLUSTER, 0.75, "monthly"),
    ...build(INSIGHTS, 0.7, "monthly"),
    ...build(INFO, 0.4, "monthly"),
  ];
}
