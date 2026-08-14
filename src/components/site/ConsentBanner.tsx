"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { setAnalyticsConsent } from "@/lib/analytics";
import { usePathname } from "next/navigation";

const CONSENT_STORAGE_KEY = "fr_emba_consent_v1";
export const CONSENT_PREFERENCES_EVENT = "future-ready:open-consent";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/");

  useEffect(() => {
    try {
      setVisible(!window.localStorage.getItem(CONSENT_STORAGE_KEY));
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(CONSENT_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(CONSENT_PREFERENCES_EVENT, open);
  }, []);

  const choose = (analytics: "granted" | "denied") => {
    setAnalyticsConsent({ analytics, marketing: "denied" });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="consent-banner" aria-label={zh ? "分析与隐私选择" : "Analytics privacy choice"}>
      <div>
        <strong>{zh ? "隐私选择" : "Privacy choice"}</strong>
        <p>
          {zh
            ? "我们使用必要储存保障安全及记录报名来源。可选分析工具只会在您允许后加载；目前没有启用广告像素。"
            : "We use essential storage for security and application attribution. Optional analytics helps us improve the site and loads only with your permission. No advertising pixels are active. "}
          <Link href={zh ? "/zh/privacy" : "/privacy"}>{zh ? "隐私政策" : "Privacy policy"}</Link>
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="btn btn-ghost" onClick={() => choose("denied")}>{zh ? "仅必要功能" : "Essential only"}</button>
        <button type="button" className="btn btn-primary" onClick={() => choose("granted")}>{zh ? "允许分析" : "Allow analytics"}</button>
      </div>
    </aside>
  );
}
