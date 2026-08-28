import { describe, expect, it } from "vitest";
import { MODULES } from "../content";

describe("published learning architecture", () => {
  it("keeps the approved twelve modules in slide-7 order", () => {
    expect(MODULES).toEqual([
      { c: "M01", title: "Future Foresight", outcome: "Sense the business landscape" },
      { c: "M02", title: "JTBD", outcome: "Customer-centred innovation and growth" },
      { c: "M03", title: "F.A.S.T. Methodology", outcome: "Adaptive systems-based thinking" },
      { c: "M04", title: "Critical Issues", outcome: "Problems and opportunities" },
      { c: "M05", title: "Strategic DNA", outcome: "4D Strategic Crafting" },
      { c: "M06", title: "SBAP", outcome: "Strategic Business Action Planning" },
      { c: "M07", title: "Transformational Leadership", outcome: "Principled and situational" },
      { c: "M08", title: "Team Intervention", outcome: "Coaching for acceleration" },
      { c: "M09", title: "Integrated Systems", outcome: "Systems perspective and review" },
      { c: "M10", title: "Organisation Transformation", outcome: "BOLT leadership" },
      { c: "M11", title: "Influence by Design", outcome: "Strategic presence and precision" },
      { c: "M12", title: "Stakeholder Ecosystem", outcome: "Trust and influence networks" },
    ]);
  });
});
