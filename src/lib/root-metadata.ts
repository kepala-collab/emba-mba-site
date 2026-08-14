import type { Metadata } from "next";
import { SITE } from "@/lib/content";

const verification: Metadata["verification"] = {
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : {}),
  ...(process.env.BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
    : {}),
};

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: "Future Ready EMBA",
  manifest: "/manifest.webmanifest",
  title: {
    default: "Future Ready Executive MBA (CMI UK) | Asian Business Consulting",
    template: "%s | Future Ready",
  },
  description:
    "A six-month Executive MBA pathway: three months to the CMI-recognised programme certificate, then supported Chartered Manager assessment preparation.",
  openGraph: {
    type: "website",
    siteName: "Future Ready Executive MBA",
    title: "Future Ready Executive MBA (CMI UK)",
    description: "Build future-ready leadership through a six-month professional pathway recognised by CMI (UK), with supported Chartered Manager assessment preparation.",
    url: "/",
    locale: "en_MY",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630, alt: "Future Ready Executive MBA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Ready Executive MBA (CMI UK)",
    description: "A professional leadership programme for working leaders, recognised by CMI (UK).",
    images: [`${SITE.url}/opengraph-image`],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    title: "Future Ready EMBA",
    statusBarStyle: "black-translucent",
  },
  verification,
  category: "executive education",
  robots: { index: true, follow: true },
};
