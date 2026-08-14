import { captureAttribution, initializeAnalytics, trackEvent } from "./lib/analytics";

try {
  initializeAnalytics();
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
