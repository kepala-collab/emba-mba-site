import { describe, expect, it } from "vitest";
import { cohortKey, isContactWindow, isLeadIntent, normalizeCohortKey } from "../conversion-contract";

describe("conversion contract", () => {
  it("creates stable, URL-safe cohort keys", () => {
    expect(cohortKey("English", "Cohort 17")).toBe("english-cohort-17");
    expect(cohortKey("Mandarin", "Cohort 2")).toBe("mandarin-cohort-2");
  });

  it("rejects untrusted cohort values", () => {
    expect(normalizeCohortKey("english-cohort-17")).toBe("english-cohort-17");
    expect(normalizeCohortKey("../../admin")).toBeNull();
    expect(normalizeCohortKey("a".repeat(65))).toBeNull();
  });

  it("validates the published intent and contact-window enums", () => {
    expect(isLeadIntent("employer_sponsored")).toBe(true);
    expect(isLeadIntent("unknown")).toBe(false);
    expect(isContactWindow("weekday_evening")).toBe(true);
    expect(isContactWindow("midnight")).toBe(false);
  });
});
