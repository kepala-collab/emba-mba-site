export type IntakeStatus = "upcoming" | "started" | "completed";

export function malaysiaDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kuala_Lumpur",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value || "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export function getIntakeStatus(startDate: string, endDate: string, today = malaysiaDateKey()): IntakeStatus {
  if (today < startDate) return "upcoming";
  if (today > endDate) return "completed";
  return "started";
}

export function intakeStatusLabel(status: IntakeStatus, zh = false) {
  if (status === "started") return zh ? "课程进行中" : "In progress";
  if (status === "completed") return zh ? "已结束" : "Completed";
  return zh ? "开放咨询" : "Upcoming";
}
