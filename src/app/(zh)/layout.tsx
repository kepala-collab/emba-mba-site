import { Archivo, IBM_Plex_Mono, Noto_Sans_SC, Source_Serif_4 } from "next/font/google";
import type { Viewport } from "next";
import "../globals.css";
import SiteChrome from "@/components/site/SiteChrome";
import { contentSecurityPolicyMeta } from "@/lib/content-security-policy";
import { ROOT_METADATA } from "@/lib/root-metadata";

const displaySerif = Source_Serif_4({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "optional",
  adjustFontFallback: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "optional", adjustFontFallback: true });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "optional", adjustFontFallback: true });
const notoSansSc = Noto_Sans_SC({ variable: "--font-noto-sans-sc", weight: "variable", display: "optional", preload: false, adjustFontFallback: true, fallback: ["Microsoft YaHei", "PingFang SC", "sans-serif"] });

export const metadata = ROOT_METADATA;
export const viewport: Viewport = { themeColor: "#F7FBFF", colorScheme: "light", viewportFit: "cover" };

export default function ChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hans" className={`${displaySerif.variable} ${archivo.variable} ${plexMono.variable} ${notoSansSc.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicyMeta} />
      </head>
      <body data-theme="working-scholar">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
