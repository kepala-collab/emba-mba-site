"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The root layout renders one <html lang="en">. This keeps that attribute in sync
// with the route so /zh* pages report Simplified Chinese to assistive tech and crawlers.
// (A full fix would move to an app/[lang] structure; this covers the a11y/SEO gap cheaply.)
export default function LangSync() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
    document.documentElement.lang = isZh ? "zh-Hans" : "en";
  }, [pathname]);
  return null;
}
