"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// None of these three render anything needed for first paint (assistant
// launcher, consent banner, GTM loader are all below-the-fold / permission
// gated chrome). Loading them through next/dynamic with ssr:false keeps their
// client bundles out of the JS the browser must fetch and parse to hydrate
// the page, and mounting only after the browser reports idle keeps that work
// off the main thread during the critical rendering window.
const GoogleTagManager = dynamic(() => import("@/components/site/GoogleTagManager"), { ssr: false });
const ConsentBanner = dynamic(() => import("@/components/site/ConsentBanner"), { ssr: false });
const ProgrammeAssistant = dynamic(() => import("@/components/site/ProgrammeAssistant"), { ssr: false });

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function IdleChrome() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = window as IdleWindow;
    if (typeof win.requestIdleCallback === "function") {
      const handle = win.requestIdleCallback(() => setReady(true), { timeout: 1500 });
      return () => win.cancelIdleCallback?.(handle);
    }
    const timer = window.setTimeout(() => setReady(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <GoogleTagManager />
      <ConsentBanner />
      <ProgrammeAssistant />
    </>
  );
}
