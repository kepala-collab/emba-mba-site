import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { languageAlternates } from "@/lib/locale-routes";

const DEFAULT_DESCRIPTION =
  "A three-month professional management programme with a CMI-recognised programme certificate, applied business project and employer-led HRD Corp funding route. HRD Corp decides eligibility and the approved amount.";

export const PROVIDER_ID = `${SITE.url}/#programme-provider`;
export const OPERATOR_ID = `${SITE.url}/#website-operator`;
// Kept as an alias while page-level schema migrates to the explicit provider ID.
export const ORGANIZATION_ID = PROVIDER_ID;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const COURSE_ID = `${SITE.url}/executive-mba#course`;
export const EDITORIAL_TEAM_ID = `${SITE.url}/about#editorial-team`;

const SOCIAL_IMAGE = {
  url: `${SITE.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Executive MBA on Future Ready Business Leadership — awarded and endorsed by CMI",
};

/**
 * Applies the canonical and social metadata contract to a page while preserving
 * route-specific fields such as robots directives and hreflang alternates.
 */
export function withSeo<const T extends Metadata>(path: string, page: T): T & Metadata {
  const title = typeof page.title === "string" ? page.title : SITE.name;
  const description = page.description ?? DEFAULT_DESCRIPTION;
  const openGraph = page.openGraph ?? {};
  const twitter = page.twitter ?? {};
  const locale = path === "/zh" || path.startsWith("/zh/") ? "zh_MY" : "en_MY";
  const mappedLanguages = languageAlternates(path);

  return {
    ...page,
    alternates: {
      ...page.alternates,
      canonical: page.alternates?.canonical ?? path,
      languages: page.alternates?.languages ?? mappedLanguages,
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url: path,
      locale,
      ...openGraph,
      images: openGraph.images ?? [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...twitter,
      images: twitter.images ?? [SOCIAL_IMAGE.url],
    },
  } as T & Metadata;
}

export function editorialTeamSchema() {
  return {
    "@type": "Organization",
    "@id": EDITORIAL_TEAM_ID,
    name: "Asian Business Consulting Editorial Team",
    url: `${SITE.url}/about#editorial-standards`,
    parentOrganization: { "@id": PROVIDER_ID },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
