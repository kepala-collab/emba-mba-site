"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { isCampaignRoute } from "@/lib/locale-routes";

type Item = { name: string; path: string };

const HOME: Item = { name: "Home", path: "/home" };
const ZH_HOME: Item = { name: "首页", path: "/zh" };
const PROGRAMME: Item = { name: "Programme", path: "/executive-mba" };
const RESOURCES: Item = { name: "Guides", path: "/resources" };
const TEAM: Item = { name: "Recognition", path: "/chartered-manager-malaysia" };
const FEES: Item = { name: "Fees", path: "/fees" };
const INSIGHTS: Item = { name: "Insights", path: "/insights" };
const ZH_PROGRAMME: Item = { name: "课程", path: "/zh/executive-mba" };
const ZH_RESOURCES: Item = { name: "指南与帮助", path: "/zh/resources" };
const ZH_TEAM: Item = { name: "认可与团队", path: "/zh/chartered-manager-malaysia" };
const ZH_FEES: Item = { name: "学费与日期", path: "/zh/fees" };

const ROUTES: Record<string, Item[]> = {
  "/about": [HOME, TEAM, { name: "Roy Affandi", path: "/about" }],
  "/ai-executive-mba": [HOME, PROGRAMME, { name: "AI-ready leadership", path: "/ai-executive-mba" }],
  "/apply": [HOME, { name: "Programme enquiry", path: "/apply" }],
  "/asian-business-consulting": [HOME, TEAM, { name: "Asian Business Consulting", path: "/asian-business-consulting" }],
  "/chartered-manager-malaysia": [HOME, PROGRAMME, { name: "CMI recognition", path: "/chartered-manager-malaysia" }],
  "/contact": [HOME, TEAM, { name: "Contact Roy", path: "/contact" }],
  "/curriculum": [HOME, PROGRAMME, { name: "Curriculum", path: "/curriculum" }],
  "/diagnostic": [HOME, RESOURCES, { name: "Programme fit check", path: "/diagnostic" }],
  "/executive-mba": [HOME, PROGRAMME],
  "/executive-mba-malaysia": [HOME, PROGRAMME, { name: "Executive MBA Malaysia", path: "/executive-mba-malaysia" }],
  "/executive-mba-vs-mba": [HOME, RESOURCES, { name: "Executive MBA vs MBA", path: "/executive-mba-vs-mba" }],
  "/faculty": [HOME, TEAM, { name: "Faculty & coaches", path: "/faculty" }],
  "/faq": [HOME, RESOURCES, { name: "Frequently asked questions", path: "/faq" }],
  "/fees": [HOME, FEES],
  "/how-it-works": [HOME, PROGRAMME, { name: "How it works", path: "/how-it-works" }],
  "/hrd-corp-claimable": [HOME, FEES, { name: "Employer-led HRD Corp funding", path: "/hrd-corp-claimable" }],
  "/insights": [HOME, RESOURCES, INSIGHTS],
  "/insights/advancement-question": [HOME, RESOURCES, INSIGHTS, { name: "How to compare programmes", path: "/insights/advancement-question" }],
  "/insights/design-thinking-for-business": [HOME, RESOURCES, INSIGHTS, { name: "Design thinking", path: "/insights/design-thinking-for-business" }],
  "/insights/executive-education-vs-executive-mba": [HOME, RESOURCES, INSIGHTS, { name: "Executive education vs Executive MBA", path: "/insights/executive-education-vs-executive-mba" }],
  "/insights/first-principles-thinking": [HOME, RESOURCES, INSIGHTS, { name: "First-principles thinking", path: "/insights/first-principles-thinking" }],
  "/insights/systems-thinking-for-leaders": [HOME, RESOURCES, INSIGHTS, { name: "Systems thinking", path: "/insights/systems-thinking-for-leaders" }],
  "/intakes": [HOME, FEES, { name: "2026 intakes", path: "/intakes" }],
  "/mba-for-entrepreneurs": [HOME, PROGRAMME, { name: "For entrepreneurs", path: "/mba-for-entrepreneurs" }],
  "/mba-for-sme-owners": [HOME, PROGRAMME, { name: "For SME owners", path: "/mba-for-sme-owners" }],
  "/mba-for-working-professionals": [HOME, PROGRAMME, { name: "For working professionals", path: "/mba-for-working-professionals" }],
  "/privacy": [HOME, { name: "Privacy policy", path: "/privacy" }],
  "/resources": [HOME, RESOURCES],
  "/resources/advancement-brief": [HOME, RESOURCES, { name: "Advancement brief", path: "/resources/advancement-brief" }],
  "/terms": [HOME, { name: "Terms & conditions", path: "/terms" }],

  "/zh/apply": [ZH_HOME, { name: "课程咨询", path: "/zh/apply" }],
  "/zh/asian-business-consulting": [ZH_HOME, ZH_TEAM, { name: "Asian Business Consulting", path: "/zh/asian-business-consulting" }],
  "/zh/chartered-manager-malaysia": [ZH_HOME, ZH_PROGRAMME, { name: "CMI 认可", path: "/zh/chartered-manager-malaysia" }],
  "/zh/contact": [ZH_HOME, ZH_TEAM, { name: "联系 Roy", path: "/zh/contact" }],
  "/zh/curriculum": [ZH_HOME, ZH_PROGRAMME, { name: "课程大纲", path: "/zh/curriculum" }],
  "/zh/diagnostic": [ZH_HOME, ZH_RESOURCES, { name: "课程适合度检查", path: "/zh/diagnostic" }],
  "/zh/executive-mba": [ZH_HOME, ZH_PROGRAMME],
  "/zh/faculty": [ZH_HOME, ZH_TEAM, { name: "师资与导师", path: "/zh/faculty" }],
  "/zh/faq": [ZH_HOME, ZH_RESOURCES, { name: "常见问题", path: "/zh/faq" }],
  "/zh/fees": [ZH_HOME, ZH_FEES],
  "/zh/how-it-works": [ZH_HOME, ZH_PROGRAMME, { name: "课程方法", path: "/zh/how-it-works" }],
  "/zh/insights/advancement-question": [ZH_HOME, ZH_RESOURCES, { name: "如何比较管理课程", path: "/zh/insights/advancement-question" }],
  "/zh/intakes": [ZH_HOME, ZH_FEES, { name: "2026 开课日期", path: "/zh/intakes" }],
  "/zh/privacy": [ZH_HOME, { name: "隐私政策", path: "/zh/privacy" }],
  "/zh/resources": [ZH_HOME, ZH_RESOURCES],
  "/zh/resources/advancement-brief": [ZH_HOME, ZH_RESOURCES, { name: "管理晋升决策简报", path: "/zh/resources/advancement-brief" }],
  "/zh/terms": [ZH_HOME, { name: "条款与条件", path: "/zh/terms" }],
};

function fallbackItems(pathname: string): Item[] {
  const zh = pathname.startsWith("/zh/");
  const home = zh ? ZH_HOME : HOME;
  const segments = pathname.split("/").filter(Boolean).filter((segment) => segment !== "zh");
  let path = zh ? "/zh" : "";
  return [home, ...segments.map((segment) => {
    path += `/${segment}`;
    return {
      path,
      name: segment.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    };
  })];
}

export default function RouteBreadcrumbs() {
  const pathname = usePathname() || "/";
  if (pathname === "/home" || pathname === "/zh" || isCampaignRoute(pathname)) return null;

  const items = ROUTES[pathname] || fallbackItems(pathname);
  const zh = pathname.startsWith("/zh/");

  return (
    <div className="site-breadcrumbs">
      <JsonLd data={breadcrumbSchema(items)} />
      <div className="wrap">
        <nav aria-label={zh ? "面包屑导航" : "Breadcrumb"}>
          <ol>
            {items.map((item, index) => {
              const current = index === items.length - 1;
              return (
                <li key={`${item.path}-${item.name}`}>
                  {current ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
