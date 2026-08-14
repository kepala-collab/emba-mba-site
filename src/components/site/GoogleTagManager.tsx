"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "fr_emba_consent_v1";

function analyticsGranted() {
  try {
    const value = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY) || "{}") as {
      analytics?: string;
    };
    return value.analytics === "granted";
  } catch {
    return false;
  }
}

export default function GoogleTagManager() {
  const containerId = process.env.NEXT_PUBLIC_GTM_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(analyticsGranted());
    sync();
    window.addEventListener("future-ready:consent-update", sync);
    return () => window.removeEventListener("future-ready:consent-update", sync);
  }, []);

  if (!containerId || !/^GTM-[A-Z0-9]+$/.test(containerId) || !enabled) return null;

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${containerId}');`}
    </Script>
  );
}
