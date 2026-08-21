import { Archivo, Fraunces, IBM_Plex_Mono } from "next/font/google";
import type { Viewport } from "next";
import "../globals.css";
import SiteChrome from "@/components/site/SiteChrome";
import { contentSecurityPolicyMeta } from "@/lib/content-security-policy";
import { ROOT_METADATA } from "@/lib/root-metadata";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata = ROOT_METADATA;
export const viewport: Viewport = { themeColor: "#F7FBFF", colorScheme: "light", viewportFit: "cover" };

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY" className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicyMeta} />
      </head>
      <body data-theme="working-scholar">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
