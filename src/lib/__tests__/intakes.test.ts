import { expect, test } from "vitest";
import { formatIntakeDateRange, formatIntakeTime } from "../intakes";

test("formatIntakeDateRange renders Malay month abbreviations", () => {
  expect(formatIntakeDateRange("22–23 Aug", "ms")).toBe("22–23 Ogos");
  expect(formatIntakeDateRange("17–18 Oct", "ms")).toBe("17–18 Okt");
  expect(formatIntakeDateRange("4–5 Dec", "ms")).toBe("4–5 Dis");
});

test("formatIntakeDateRange leaves an already-Malay abbreviation intentionally unchanged", () => {
  expect(formatIntakeDateRange("19–20 Sep", "ms")).toBe("19–20 Sep");
});

test("formatIntakeDateRange leaves English untouched", () => {
  expect(formatIntakeDateRange("22–23 Aug", "en")).toBe("22–23 Aug");
});

test("formatIntakeDateRange renders Chinese numerals", () => {
  expect(formatIntakeDateRange("22–23 Aug", "zh")).toBe("8 月 22 至 23 日");
});

test("formatIntakeTime renders Malay", () => {
  expect(formatIntakeTime("9am–6pm", "ms")).toBe("9 pagi hingga 6 petang");
});

test("formatIntakeTime renders Chinese", () => {
  expect(formatIntakeTime("9am–6pm", "zh")).toBe("上午 9 时至下午 6 时");
});

test("formatIntakeTime leaves English untouched", () => {
  expect(formatIntakeTime("9am–6pm", "en")).toBe("9am–6pm");
});
