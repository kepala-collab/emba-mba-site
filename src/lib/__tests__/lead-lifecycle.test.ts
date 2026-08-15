import { describe, expect, it } from "vitest";
import { canTransitionLead, isLeadStage, lifecycleEventType } from "../lead-lifecycle";

describe("lead lifecycle contract", () => {
  it("allows the normal qualified journey", () => {
    expect(canTransitionLead("new", "contacted")).toBe(true);
    expect(canTransitionLead("contacted", "meeting_scheduled")).toBe(true);
    expect(canTransitionLead("meeting_scheduled", "evaluating")).toBe(true);
    expect(canTransitionLead("evaluating", "applied")).toBe(true);
    expect(canTransitionLead("applied", "enrolled")).toBe(true);
  });

  it("blocks impossible or no-op transitions", () => {
    expect(canTransitionLead("new", "enrolled")).toBe(false);
    expect(canTransitionLead("enrolled", "contacted")).toBe(false);
    expect(canTransitionLead("contacted", "contacted")).toBe(false);
  });

  it("validates stages and produces versioned event names", () => {
    expect(isLeadStage("employer_process")).toBe(true);
    expect(isLeadStage("qualified")).toBe(false);
    expect(lifecycleEventType("applied")).toBe("lead.applied");
  });
});
