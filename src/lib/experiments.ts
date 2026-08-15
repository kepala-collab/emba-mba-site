import { getAnalyticsConsent, trackEvent } from "@/lib/analytics";

const VISITOR_KEY = "fr_emba_experiment_visitor_v1";
const ASSIGNMENT_KEY = "fr_emba_experiment_assignments_v1";

const EXPERIMENTS = [
  {
    id: "apply_value_frame_v1",
    variants: ["control", "decision_support"],
    trafficPercent: 100,
  },
] as const;

export type ExperimentAssignments = Record<string, string>;

function stableHash(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function readJson(key: string): unknown {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

function visitorId(): string {
  const existing = readJson(VISITOR_KEY);
  if (typeof existing === "string" && /^[0-9a-f-]{36}$/i.test(existing)) return existing;
  const value = crypto.randomUUID();
  try {
    window.localStorage.setItem(VISITOR_KEY, JSON.stringify(value));
  } catch {
    // The in-memory assignment for this call remains valid when storage is blocked.
  }
  return value;
}

export function getExperimentAssignments(): ExperimentAssignments {
  if (
    typeof window === "undefined" ||
    process.env.NEXT_PUBLIC_EXPERIMENTS_ENABLED !== "true" ||
    getAnalyticsConsent().analytics !== "granted"
  ) return {};

  const stored = readJson(ASSIGNMENT_KEY);
  const assignments: ExperimentAssignments = stored && typeof stored === "object" && !Array.isArray(stored)
    ? Object.fromEntries(Object.entries(stored).filter((entry): entry is [string, string] => typeof entry[1] === "string"))
    : {};
  const id = visitorId();
  let changed = false;

  for (const experiment of EXPERIMENTS) {
    if (assignments[experiment.id]) continue;
    const bucket = stableHash(`${id}:${experiment.id}`) % 10_000;
    if (bucket >= experiment.trafficPercent * 100) continue;
    const variant = experiment.variants[bucket % experiment.variants.length];
    assignments[experiment.id] = variant;
    changed = true;
    trackEvent("experiment_assignment", {
      experiment_id: experiment.id,
      experiment_variant: variant,
    });
  }

  if (changed) {
    try {
      window.localStorage.setItem(ASSIGNMENT_KEY, JSON.stringify(assignments));
    } catch {
      // Assignments still accompany the current lead when storage is unavailable.
    }
  }
  return assignments;
}

export function getExperimentAssignmentsJson(): string {
  return JSON.stringify(getExperimentAssignments());
}
