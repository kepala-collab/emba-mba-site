import {
  isLeadIntent,
  normalizeCohortKey,
  type LeadIntent,
} from "@/lib/conversion-contract";

const STORAGE_KEY = "fr_emba_conversion_context_v1";

export type ConversionContext = {
  version: 1;
  intent: LeadIntent;
  cohort_key: string | null;
  updated_at: string;
};

const DEFAULT_CONTEXT: ConversionContext = {
  version: 1,
  intent: "individual_self_funded",
  cohort_key: null,
  updated_at: "",
};

function validContext(value: unknown): value is ConversionContext {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const candidate = value as Partial<ConversionContext>;
  return candidate.version === 1 && isLeadIntent(candidate.intent) &&
    (candidate.cohort_key === null || normalizeCohortKey(candidate.cohort_key) !== null);
}

export function readConversionContext(): ConversionContext {
  if (typeof window === "undefined") return DEFAULT_CONTEXT;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONTEXT, updated_at: new Date().toISOString() };
    const parsed: unknown = JSON.parse(raw);
    return validContext(parsed) ? parsed : { ...DEFAULT_CONTEXT, updated_at: new Date().toISOString() };
  } catch {
    return { ...DEFAULT_CONTEXT, updated_at: new Date().toISOString() };
  }
}

export function updateConversionContext(
  patch: Partial<Pick<ConversionContext, "intent" | "cohort_key">>,
): ConversionContext {
  const current = readConversionContext();
  const next: ConversionContext = {
    version: 1,
    intent: isLeadIntent(patch.intent) ? patch.intent : current.intent,
    cohort_key: patch.cohort_key === null
      ? null
      : normalizeCohortKey(patch.cohort_key) || current.cohort_key,
    updated_at: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Conversion context remains available in component state when storage is blocked.
    }
  }
  return next;
}

export function conversionContextFromLocation(): ConversionContext {
  if (typeof window === "undefined") return DEFAULT_CONTEXT;
  const params = new URLSearchParams(window.location.search);
  const intent = params.get("intent");
  const cohort = params.get("cohort");
  return updateConversionContext({
    intent: isLeadIntent(intent) ? intent : undefined,
    cohort_key: cohort === "" ? null : normalizeCohortKey(cohort) || undefined,
  });
}
