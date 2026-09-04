"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_PREFERENCES_EVENT, setAnalyticsConsent } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { useFloatingUi } from "@/components/site/FloatingUiContext";

const CONSENT_STORAGE_KEY = "fr_emba_consent_v1";

export default function ConsentBanner() {
  const { consentVisible, setConsentStatus } = useFloatingUi();
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/");
  const ms = pathname === "/ms" || pathname.startsWith("/ms/");
  const [expanded, setExpanded] = useState(false);
  const copy = zh
    ? {
        label: "分析与隐私选择",
        compact: "隐私选择",
        title: "隐私选择",
        body: "必要储存用于安全及记录咨询来源。分析工具只会在您允许后加载；目前没有启用广告像素。",
        policy: "隐私政策",
        policyHref: "/zh/privacy",
        essential: "仅必要功能",
        analytics: "允许分析",
        close: "关闭隐私选择",
      }
    : ms
      ? {
          label: "Pilihan analitik dan privasi",
          compact: "Pilihan privasi",
          title: "Pilihan privasi",
          body: "Storan penting melindungi pertanyaan. Analitik pilihan hanya dimuatkan dengan izin anda; tiada piksel pengiklanan yang aktif.",
          policy: "Dasar Privasi",
          policyHref: "/ms/privacy",
          essential: "Penting sahaja",
          analytics: "Benarkan analitik",
          close: "Tutup pilihan privasi",
        }
      : {
          label: "Analytics and privacy choices",
          compact: "Privacy choices",
          title: "Privacy choice",
          body: "Essential storage protects enquiries. Optional analytics loads only with your permission. No advertising pixels are active.",
          policy: "Privacy policy",
          policyHref: "/privacy",
          essential: "Essential only",
          analytics: "Allow analytics",
          close: "Close privacy choices",
        };

  useEffect(() => {
    try {
      setConsentStatus(window.localStorage.getItem(CONSENT_STORAGE_KEY) ? "resolved" : "required");
    } catch {
      setConsentStatus("required");
    }
  }, [setConsentStatus]);

  useEffect(() => {
    const open = () => {
      setConsentStatus("required");
      setExpanded(true);
    };
    window.addEventListener(CONSENT_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(CONSENT_PREFERENCES_EVENT, open);
  }, [setConsentStatus]);

  const choose = (analytics: "granted" | "denied") => {
    setAnalyticsConsent({ analytics, marketing: "denied" });
    setExpanded(false);
    setConsentStatus("resolved");
  };

  if (!consentVisible) return null;

  if (!expanded) {
    return (
      <button
        type="button"
        className="consent-compact"
        aria-label={copy.label}
        aria-expanded="false"
        onClick={() => setExpanded(true)}
      >
        <span aria-hidden="true">◉</span>
        {copy.compact}
      </button>
    );
  }

  return (
    <aside className="consent-banner" aria-label={copy.label}>
      <div>
        <strong>{copy.title}</strong>
        <p>
          {copy.body}{" "}
          <Link href={copy.policyHref}>{copy.policy}</Link>
        </p>
      </div>
      <button type="button" className="consent-close" aria-label={copy.close} onClick={() => setExpanded(false)}>
        <span aria-hidden="true">×</span>
      </button>
      <div className="consent-actions">
        <button type="button" className="btn btn-ghost" onClick={() => choose("denied")}>{copy.essential}</button>
        <button type="button" className="btn btn-primary" onClick={() => choose("granted")}>{copy.analytics}</button>
      </div>
    </aside>
  );
}
