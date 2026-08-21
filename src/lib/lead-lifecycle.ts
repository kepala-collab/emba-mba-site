export const LEAD_STAGES = [
  "new",
  "contacted",
  "qualified",
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
  contacted: ["qualified", "meeting_scheduled", "evaluating", "employer_process", "applied", "not_proceeding"],
  qualified: ["contacted", "meeting_scheduled", "evaluating", "employer_process", "applied", "not_proceeding"],
  meeting_scheduled: ["contacted", "qualified", "evaluating", "employer_process", "applied", "not_proceeding"],
  evaluating: ["contacted", "qualified", "meeting_scheduled", "employer_process", "applied", "not_proceeding"],
  employer_process: ["contacted", "qualified", "meeting_scheduled", "evaluating", "applied", "not_proceeding"],
  applied: ["contacted", "qualified", "evaluating", "employer_process", "enrolled", "not_proceeding"],
  enrolled: [],
  not_proceeding: ["contacted", "qualified", "meeting_scheduled", "evaluating", "employer_process", "applied"],
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
