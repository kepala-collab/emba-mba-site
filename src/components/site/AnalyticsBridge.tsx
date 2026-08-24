"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { analyticsPageName, captureAttribution, trackEvent } from "@/lib/analytics";

let lastPageKey = "";

function trackingLocation(element: HTMLElement) {
  if (element.dataset.trackLocation) return element.dataset.trackLocation;
  if (element.closest(".mobile-nav-panel")) return "mobile_navigation";
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest(".hero")) return "hero";
  if (element.closest("#apply,.form")) return "lead_form";
  return "content";
}

function trackingLabel(element: HTMLElement) {
  return (element.dataset.trackLabel || element.getAttribute("aria-label") || element.textContent || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 120);
}

function trackingId(element: HTMLElement, label: string) {
  if (element.dataset.trackId) return element.dataset.trackId;
  const href = element instanceof HTMLAnchorElement ? element.getAttribute("href") || "" : "";
  return `${label || "action"}-${href}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 100);
}

export default function AnalyticsBridge() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    const key = `${pathname}?${search}`;
    captureAttribution(new URL(key, window.location.origin));
    if (lastPageKey === key) return;
    lastPageKey = key;
    trackEvent("page_view", {
      page_name: analyticsPageName(pathname),
      page_title: pathname === "/home"
        ? "Home | Future Ready Executive MBA"
        : pathname === "/zh"
          ? "Home | Future Ready Executive MBA 中文"
          : pathname === "/ms"
            ? "Home | Future Ready Executive MBA BM"
            : document.title,
      page_location: `${window.location.origin}${pathname}`,
      page_query_has_campaign: [...searchParams.keys()].some((keyName) =>
        keyName.toLowerCase().startsWith("utm_") || keyName.toLowerCase().endsWith("clid"),
      ),
    });
  }, [pathname, search, searchParams]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>("[data-track-event],a[href],button");
      if (!element || element.closest("[aria-hidden='true']")) return;
      if (element instanceof HTMLButtonElement && element.type === "submit") return;

      const label = trackingLabel(element);
      const location = trackingLocation(element);
      const explicitEvent = element.dataset.trackEvent;
      const href = element instanceof HTMLAnchorElement ? element.href : "";
      const hrefValue = element instanceof HTMLAnchorElement ? element.getAttribute("href") || "" : "";
      const contactMethod = element.dataset.contactMethod ||
        (href.includes("wa.me/") ? "whatsapp" : hrefValue.startsWith("tel:") ? "phone" : hrefValue.startsWith("mailto:") ? "email" : undefined);
      const documentLang = document.documentElement.lang.toLowerCase();
      const contactLanguage = element.dataset.contactLanguage ||
        (documentLang.startsWith("zh") ? "zh" : documentLang.startsWith("ms") ? "ms" : "en");
      const actionProperties = {
        action_id: trackingId(element, label),
        action_label: label,
        action_location: location,
        contact_method: contactMethod,
        contact_language: contactMethod ? contactLanguage : undefined,
        cohort_key: element.dataset.trackCohort,
        lead_intent: element.dataset.trackIntent,
        destination_path: href && href.startsWith(window.location.origin) ? new URL(href).pathname : undefined,
      };

      if (explicitEvent) {
        trackEvent(explicitEvent, actionProperties);
        if (contactMethod === "whatsapp" && explicitEvent !== "whatsapp_click") {
          trackEvent("whatsapp_click", actionProperties);
        }
        return;
      }

      if (contactMethod) {
        trackEvent("contact_click", actionProperties);
        if (contactMethod === "whatsapp") trackEvent("whatsapp_click", actionProperties);
      } else if (element.matches(".btn,.navcta")) {
        trackEvent("cta_click", actionProperties);
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
