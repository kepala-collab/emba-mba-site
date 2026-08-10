import type { Metadata } from "next";
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { SITE, COMPLIANCE } from "@/lib/content";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Future Ready Executive MBA (CMI UK) | Asian Business Consulting",
    template: "%s | Future Ready Executive MBA",
  },
  description:
    "A CMI (UK)-endorsed Executive MBA in Future-Ready Business Leadership — 3 months to your CMI certification, then Chartered Manager (a 6-month programme). HRD Corp claimable.",
  keywords: [
    "executive MBA Malaysia", "CMI UK MBA", "HRD Corp claimable MBA", "future ready leadership",
    "online executive MBA", "executive education Malaysia", "MBA for working professionals",
  ],
  openGraph: {
    type: "website",
    siteName: "Future Ready Executive MBA",
    title: "Future Ready Executive MBA (CMI UK)",
    description: "Install the thinking of elite leaders over 3 months. CMI (UK)-endorsed, HRD Corp claimable.",
    url: SITE.url,
  },
  twitter: { card: "summary_large_image", title: "Future Ready Executive MBA (CMI UK)" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.provider,
    alternateName: "ABC",
    url: SITE.url,
    slogan: SITE.tagline,
    description: COMPLIANCE,
    telephone: SITE.phone,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressCountry: "MY" },
  };
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
