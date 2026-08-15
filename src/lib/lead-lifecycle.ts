export const LEAD_STAGES = [
  "new",
  "contacted",
  "meeting_scheduled",
  "evaluating",
  "employer_process",
  "applied",
  "enrolled",
  "not_proceeding",
] as const;

export type LeadStage = (typeof LEAD_STAGES)[number];

const ALLOWED_TRANSITIONS: Record<LeadStage, readonly LeadStage[]> = {
  new: ["contacted", "meeting_scheduled", "evaluating", "employer_process", "applied", "not_proceeding"],
  contacted: ["meeting_scheduled", "evaluating", "employer_process", "applied", "not_proceeding"],
  meeting_scheduled: ["contacted", "evaluating", "employer_process", "applied", "not_proceeding"],
  evaluating: ["contacted", "meeting_scheduled", "employer_process", "applied", "not_proceeding"],
  employer_process: ["contacted", "meeting_scheduled", "evaluating", "applied", "not_proceeding"],
  applied: ["contacted", "evaluating", "employer_process", "enrolled", "not_proceeding"],
  enrolled: [],
  not_proceeding: ["contacted", "meeting_scheduled", "evaluating", "employer_process", "applied"],
};

export function isLeadStage(value: unknown): value is LeadStage {
  return typeof value === "string" && (LEAD_STAGES as readonly string[]).includes(value);
}

export function canTransitionLead(from: LeadStage, to: LeadStage): boolean {
  return from !== to && ALLOWED_TRANSITIONS[from].includes(to);
}

export function lifecycleEventType(stage: LeadStage): string {
  return `lead.${stage}`;
}
