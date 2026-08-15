import { captureAttribution, getAnalyticsConsent, initializeAnalytics, trackEvent } from "./lib/analytics";

let webVitalsStarted = false;

function startWebVitals() {
  if (webVitalsStarted || getAnalyticsConsent().analytics !== "granted") return;
  webVitalsStarted = true;
  import("web-vitals").then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
    const report = (metric: {
      name: string;
      value: number;
      delta: number;
      id: string;
      rating: string;
      navigationType: string;
    }) => trackEvent("web_vital", {
      metric_name: metric.name,
      metric_value: Number(metric.value.toFixed(metric.name === "CLS" ? 4 : 0)),
      metric_delta: Number(metric.delta.toFixed(metric.name === "CLS" ? 4 : 0)),
      metric_id: metric.id,
      metric_rating: metric.rating,
      navigation_type: metric.navigationType,
    });
    onCLS(report);
    onFCP(report);
    onINP(report);
    onLCP(report);
    onTTFB(report);
  }).catch(() => {
    // Performance monitoring must never affect the visitor journey.
  });
}

try {
  initializeAnalytics();
  performance.mark("future-ready-app-init");
  startWebVitals();
  window.addEventListener("future-ready:consent-update", startWebVitals);
  window.addEventListener("error", (event) => {
    if (getAnalyticsConsent().analytics !== "granted") return;
    trackEvent("client_error", {
      error_type: event.error instanceof Error ? event.error.name : "ScriptError",
      error_source: "window_error",
    });
  });
  window.addEventListener("unhandledrejection", (event) => {
    if (getAnalyticsConsent().analytics !== "granted") return;
    trackEvent("client_error", {
      error_type: event.reason instanceof Error ? event.reason.name : "UnhandledRejection",
      error_source: "unhandled_rejection",
    });
  });
} catch {
  // Analytics must never block application hydration.
}

export function onRouterTransitionStart(
  url: string,
  navigationType: "push" | "replace" | "traverse",
) {
  try {
    captureAttribution(new URL(url, window.location.origin));
    trackEvent("page_navigation", {
      navigation_type: navigationType,
      destination_path: new URL(url, window.location.origin).pathname,
    });
  } catch {
    // Router instrumentation is isolated from navigation by design.
  }
}
