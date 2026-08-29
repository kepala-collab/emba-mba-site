const ATTRIBUTION_STORAGE_KEY = "fr_emba_attribution_v1";
const CONSENT_STORAGE_KEY = "fr_emba_consent_v1";
const SCHEMA_VERSION = "1.0";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "utm_source_platform",
  "utm_creative_format",
  "utm_marketing_tactic",
] as const;

const CLICK_IDS = [
  ["gclid", "google"],
  ["gbraid", "google"],
  ["wbraid", "google"],
  ["fbclid", "meta"],
  ["msclkid", "microsoft"],
  ["ttclid", "tiktok"],
  ["li_fat_id", "linkedin"],
  ["rdt_cid", "reddit"],
  ["epik", "pinterest"],
  ["sccid", "snapchat"],
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
type ConsentChoice = "granted" | "denied";

export type AttributionTouch = Partial<Record<UtmKey, string>> & {
  captured_at: string;
  page_path: string;
  referrer?: string;
  traffic_source: string;
  traffic_medium: string;
  click_id_type?: string;
  click_id?: string;
};

export type AttributionState = {
  version: 1;
  session_id: string;
  first_touch: AttributionTouch;
  last_touch: AttributionTouch;
};

export type AnalyticsConsent = {
  analytics: ConsentChoice;
  marketing: ConsentChoice;
};

export type DataLayerEvent = {
  event: string;
  event_id: string;
  event_timestamp: string;
  schema_version: string;
  site_id: "future_ready_emba";
  [key: string]: unknown;
};

type AnalyticsApi = {
  track: typeof trackEvent;
  setConsent: typeof setAnalyticsConsent;
  getAttribution: typeof getAttribution;
};

declare global {
  interface Window {
    dataLayer?: Array<DataLayerEvent | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    futureReadyAnalytics?: AnalyticsApi;
    __FR_EMBA_ANALYTICS_READY__?: boolean;
    __FR_EMBA_ATTRIBUTION__?: AttributionState;
  }
}

function safeValue(value: string | null | undefined, maxLength = 255) {
  if (!value) return undefined;
  // oxlint-disable-next-line no-control-regex -- Control bytes are stripped deliberately.
  const clean = value.trim().replace(/[\u0000-\u001F\u007F]/g, "");
  return clean ? clean.slice(0, maxLength) : undefined;
}

function newId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 14)}`;
}

function cleanReferrer(value: string | undefined) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`.slice(0, 2048);
  } catch {
    return undefined;
  }
}

function queryValues(url: URL) {
  const values = new Map<string, string>();
  url.searchParams.forEach((value, key) => {
    const safe = safeValue(value);
    if (safe && !values.has(key.toLowerCase())) values.set(key.toLowerCase(), safe);
  });
  return values;
}

function createTouch(url: URL, referrer = document.referrer): AttributionTouch {
  const query = queryValues(url);
  const utms: Partial<Record<UtmKey, string>> = {};
  UTM_KEYS.forEach((key) => {
    const value = query.get(key);
    if (value) utms[key] = value;
  });

  const click = CLICK_IDS.find(([key]) => query.has(key));
  const cleanedReferrer = cleanReferrer(referrer);
  let referralHost: string | undefined;
  if (cleanedReferrer) {
    try {
      const parsed = new URL(cleanedReferrer);
      if (parsed.hostname !== url.hostname) referralHost = parsed.hostname.replace(/^www\./, "");
    } catch {
      referralHost = undefined;
    }
  }

  const trafficSource =
    utms.utm_source || (click ? click[1] : undefined) || referralHost || "direct";
  const trafficMedium =
    utms.utm_medium || (click ? "paid" : undefined) || (referralHost ? "referral" : "none");

  return {
    captured_at: new Date().toISOString(),
    page_path: url.pathname.slice(0, 2048) || "/",
    referrer: cleanedReferrer,
    traffic_source: trafficSource,
    traffic_medium: trafficMedium,
    ...(click ? { click_id_type: click[0], click_id: query.get(click[0]) } : {}),
    ...utms,
  };
}

function isAttributionState(value: unknown): value is AttributionState {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const state = value as Partial<AttributionState>;
  return state.version === 1 &&
    typeof state.session_id === "string" &&
    !!state.first_touch && typeof state.first_touch === "object" &&
    !!state.last_touch && typeof state.last_touch === "object";
}

function readAttribution() {
  if (typeof window === "undefined") return undefined;
  if (window.__FR_EMBA_ATTRIBUTION__) return window.__FR_EMBA_ATTRIBUTION__;
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed: unknown = JSON.parse(raw);
    if (isAttributionState(parsed)) {
      window.__FR_EMBA_ATTRIBUTION__ = parsed;
      return parsed;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function writeAttribution(state: AttributionState) {
  window.__FR_EMBA_ATTRIBUTION__ = state;
  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Attribution remains available in memory when storage is unavailable.
  }
}

function hasCampaignSignal(url: URL) {
  const query = queryValues(url);
  return UTM_KEYS.some((key) => query.has(key)) || CLICK_IDS.some(([key]) => query.has(key));
}

export function captureAttribution(urlInput?: string | URL) {
  if (typeof window === "undefined") return undefined;
  const url = urlInput instanceof URL
    ? urlInput
    : new URL(urlInput || window.location.href, window.location.origin);
  const existing = readAttribution();
  const touch = createTouch(url);

  if (!existing) {
    const state: AttributionState = {
      version: 1,
      session_id: newId(),
      first_touch: touch,
      last_touch: touch,
    };
    writeAttribution(state);
    return state;
  }

  if (hasCampaignSignal(url)) {
    const state = { ...existing, last_touch: touch };
    writeAttribution(state);
    return state;
  }
  return existing;
}

export function getAttribution() {
  if (typeof window === "undefined") return undefined;
  return readAttribution() || captureAttribution();
}

function readConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return { analytics: "denied", marketing: "denied" };
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return { analytics: "denied", marketing: "denied" };
    const value = JSON.parse(raw) as Partial<AnalyticsConsent>;
    return {
      analytics: value.analytics === "granted" ? "granted" : "denied",
      marketing: value.marketing === "granted" ? "granted" : "denied",
    };
  } catch {
    return { analytics: "denied", marketing: "denied" };
  }
}

export function getAnalyticsConsent(): AnalyticsConsent {
  return readConsent();
}

function emit(event: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function applyGoogleConsent(command: "default" | "update", consent: AnalyticsConsent) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("consent", command, {
    analytics_storage: consent.analytics,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    ...(command === "default" ? { wait_for_update: 500 } : {}),
  });
}

function pageType(pathname: string) {
  if (pathname === "/home" || pathname === "/zh") return "home";
  if (pathname.includes("/lp/")) return "landing_page";
  if (pathname === "/apply" || pathname === "/zh/apply") return "application";
  if (pathname.startsWith("/insights/") && pathname !== "/insights/") return "article";
  if (["/privacy", "/terms", "/zh/privacy", "/zh/terms"].includes(pathname)) return "legal";
  return "content";
}

export function analyticsPageName(pathname: string) {
  if (pathname === "/home") return "home";
  if (pathname === "/zh") return "home_zh";
  return pathname
    .replace(/^\//, "")
    .replaceAll("/", "_")
    .replaceAll("-", "_")
    .toLowerCase();
}

function languageContext() {
  const path = window.location.pathname;
  const pageLocale = document.documentElement.lang ||
    (path === "/zh" || path.startsWith("/zh/")
      ? "zh-Hans"
      : path === "/ms" || path.startsWith("/ms/")
        ? "ms-MY"
        : "en-MY");
  const lc = pageLocale.toLowerCase();
  return {
    page_language: lc.startsWith("zh") ? "zh" : lc.startsWith("ms") ? "ms" : "en",
    page_locale: pageLocale,
  };
}

function attributionContext() {
  const state = getAttribution();
  if (!state) return {};
  const touch = state.last_touch;
  return {
    attribution_session_id: state.session_id,
    traffic_source: touch.traffic_source,
    traffic_medium: touch.traffic_medium,
    campaign_name: touch.utm_campaign,
    campaign_id: touch.utm_id,
    click_id_type: touch.click_id_type,
    click_id: touch.click_id,
  };
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || window.__FR_EMBA_ANALYTICS_READY__) return;
  window.dataLayer = window.dataLayer || [];
  captureAttribution();
  const consent = readConsent();
  applyGoogleConsent("default", consent);
  emit({
    event: "consent_default",
    event_id: newId(),
    event_timestamp: new Date().toISOString(),
    schema_version: SCHEMA_VERSION,
    site_id: "future_ready_emba",
    ...languageContext(),
    consent_analytics: consent.analytics,
    consent_marketing: consent.marketing,
  });
  emit({
    event: "analytics_ready",
    event_id: newId(),
    event_timestamp: new Date().toISOString(),
    schema_version: SCHEMA_VERSION,
    site_id: "future_ready_emba",
    ...languageContext(),
    ...attributionContext(),
  });
  window.futureReadyAnalytics = {
    track: trackEvent,
    setConsent: setAnalyticsConsent,
    getAttribution,
  };
  window.__FR_EMBA_ANALYTICS_READY__ = true;
}

export function trackEvent(event: string, properties: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  initializeAnalytics();
  emit({
    event,
    event_id: newId(),
    event_timestamp: new Date().toISOString(),
    schema_version: SCHEMA_VERSION,
    site_id: "future_ready_emba",
    page_path: window.location.pathname,
    page_name: analyticsPageName(window.location.pathname),
    page_type: pageType(window.location.pathname),
    ...languageContext(),
    ...attributionContext(),
    ...properties,
  });
}

export function setAnalyticsConsent(consent: Partial<AnalyticsConsent>) {
  if (typeof window === "undefined") return;
  const current = readConsent();
  const next: AnalyticsConsent = {
    analytics: consent.analytics === "granted" ? "granted" : consent.analytics === "denied" ? "denied" : current.analytics,
    marketing: consent.marketing === "granted" ? "granted" : consent.marketing === "denied" ? "denied" : current.marketing,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // The consent event still reaches the data layer when storage is unavailable.
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_mode_update",
    event_id: newId(),
    event_timestamp: new Date().toISOString(),
    schema_version: SCHEMA_VERSION,
    site_id: "future_ready_emba",
    analytics_storage: next.analytics,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  applyGoogleConsent("update", next);
  window.dispatchEvent(new CustomEvent("future-ready:consent-update", { detail: next }));
  trackEvent("consent_update", {
    consent_analytics: next.analytics,
    consent_marketing: next.marketing,
  });
}

export function getLeadAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const state = getAttribution();
  if (!state) return {};
  const touch = state.last_touch;
  const language = languageContext();
  // Keep attribution_json comfortably under the API's 4096-char cap so a
  // UTM-rich campaign visitor's valid submission is never rejected as invalid.
  const ATTRIBUTION_JSON_CAP = 3900;
  const clip = (v: string | undefined) => (typeof v === "string" ? v.slice(0, 120) : undefined);
  const compactTouch = (t: typeof touch) => ({
    page_path: clip(t.page_path),
    traffic_source: clip(t.traffic_source),
    traffic_medium: clip(t.traffic_medium),
    utm_source: clip(t.utm_source),
    utm_medium: clip(t.utm_medium),
    utm_campaign: clip(t.utm_campaign),
    utm_term: clip(t.utm_term),
    utm_content: clip(t.utm_content),
    utm_id: clip(t.utm_id),
    click_id_type: clip(t.click_id_type),
    click_id: clip(t.click_id),
    referrer: clip(t.referrer),
  });
  const fullAttribution = JSON.stringify(state);
  const attributionJson = fullAttribution.length <= ATTRIBUTION_JSON_CAP
    ? fullAttribution
    : JSON.stringify({
        version: state.version,
        session_id: state.session_id,
        first_touch: compactTouch(state.first_touch),
        last_touch: compactTouch(touch),
        truncated: true,
      });
  const values: Record<string, string | undefined> = {
    page_path: window.location.pathname,
    page_language: language.page_language,
    landing_page: state.first_touch.page_path,
    referrer: touch.referrer,
    first_referrer: state.first_touch.referrer,
    utm_source: touch.utm_source,
    utm_medium: touch.utm_medium,
    utm_campaign: touch.utm_campaign,
    utm_term: touch.utm_term,
    utm_content: touch.utm_content,
    click_id_type: touch.click_id_type,
    click_id: touch.click_id,
    attribution_session_id: state.session_id,
    attribution_json: attributionJson,
  };
  return Object.fromEntries(
    Object.entries(values).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
  );
}
