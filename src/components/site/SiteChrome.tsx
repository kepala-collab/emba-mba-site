import { Suspense } from "react";
import AnalyticsBridge from "@/components/site/AnalyticsBridge";
import GoogleTagManager from "@/components/site/GoogleTagManager";
import ConsentBanner from "@/components/site/ConsentBanner";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import ProgrammeAssistant from "@/components/site/ProgrammeAssistant";
import JsonLd from "@/components/site/JsonLd";
import { SITE, COMPLIANCE, OPERATOR } from "@/lib/content";
import { OPERATOR_ID, PROVIDER_ID, WEBSITE_ID } from "@/lib/seo";

export default function SiteChrome({ children }: Readonly<{ children: React.ReactNode }>) {
  const providerSameAs = [SITE.providerUrl, SITE.providerLinkedIn].filter(Boolean);
  const operatorSameAs = [OPERATOR.linkedIn].filter(Boolean);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": PROVIDER_ID,
        name: SITE.provider,
        alternateName: "ABC",
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/brand/abc-mark.png`,
          width: 650,
          height: 180,
        },
        slogan: SITE.tagline,
        ...(SITE.providerUrl ? { url: SITE.providerUrl } : {}),
        ...(providerSameAs.length ? { sameAs: providerSameAs } : {}),
        description: COMPLIANCE,
        address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressCountry: "MY" },
      },
      {
        "@type": "Organization",
        "@id": OPERATOR_ID,
        name: OPERATOR.name,
        legalName: OPERATOR.name,
        identifier: OPERATOR.reg,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}${OPERATOR.logo}`,
        },
        description: `${OPERATOR.name} is the authorised ${OPERATOR.role} for marketing, programme enquiries, pricing and enrolment coordination.`,
        ...(operatorSameAs.length ? { sameAs: operatorSameAs } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 86, Jalan Desa Bakti, Taman Desa, Jalan Klang Lama",
          postalCode: "58100",
          addressLocality: "Kuala Lumpur",
          addressRegion: "Wilayah Persekutuan Kuala Lumpur",
          addressCountry: "MY",
        },
        telephone: SITE.phone,
        email: SITE.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "programme enquiries, pricing and enrolment coordination",
          telephone: SITE.phone,
          email: SITE.email,
          availableLanguage: ["English", "Malay", "Chinese"],
          areaServed: ["Malaysia", "Worldwide"],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": OPERATOR_ID },
        about: { "@id": PROVIDER_ID },
        inLanguage: ["en-MY", "zh-Hans-MY"],
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <GoogleTagManager />
      <Suspense fallback={null}><AnalyticsBridge /></Suspense>
      <Header />
      <main>{children}</main>
      <Footer />
      <ConsentBanner />
      <ProgrammeAssistant />
      <WhatsAppFloat />
    </>
  );
}
