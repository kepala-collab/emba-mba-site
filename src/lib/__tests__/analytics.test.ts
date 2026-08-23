import { describe, expect, it } from "vitest";
import { analyticsPageName } from "../analytics";

describe("analytics page naming", () => {
  it("uses a stable Home name for the named Home route", () => {
    expect(analyticsPageName("/home")).toBe("home");
    expect(analyticsPageName("/zh")).toBe("home_zh");
  });

  it("normalises nested routes without changing their URLs", () => {
    expect(analyticsPageName("/executive-mba")).toBe("executive_mba");
    expect(analyticsPageName("/insights/advancement-question")).toBe("insights_advancement_question");
  });
});
