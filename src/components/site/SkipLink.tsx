"use client";

import { usePathname } from "next/navigation";
import { localeOfPath } from "@/lib/locale-routes";

const LABEL = {
  en: "Skip to main content",
  zh: "跳到主要内容",
  ms: "Langkau ke kandungan utama",
} as const;

export default function SkipLink() {
  const pathname = usePathname() || "/";
  const lang = localeOfPath(pathname);
  return (
    <a className="skip-link" href="#main-content">{LABEL[lang]}</a>
  );
}
