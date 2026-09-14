import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const route = readFileSync(new URL("../src/app/api/internal/nurture/route.ts", import.meta.url), "utf8");
const failureSql = route.match(/async function recordFailure[\s\S]*?sql: `([^`]+)`/)?.[1];

describe("nurture failure SQL assignment order", () => {
  it("evaluates terminal status before incrementing the counter in MySQL", () => {
    expect(failureSql).toBeDefined();
    // MySQL SET assignments see preceding assignments' updated values. This
    // protects the actual route query, which the pure policy tests do not call.
    const terminalAssignment = failureSql.indexOf("message_id = IF(attempt_count + 1 >= ?");
    const incrementAssignment = failureSql.indexOf("attempt_count = attempt_count + 1");
    expect(terminalAssignment).toBeGreaterThanOrEqual(0);
    expect(incrementAssignment).toBeGreaterThan(terminalAssignment);
  });
});
