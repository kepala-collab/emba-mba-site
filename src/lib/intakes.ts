import type { SiteLocale } from "@/lib/locale-routes";

export type IntakeStatus = "upcoming" | "started" | "completed";

const MS_MONTHS: Record<string, string> = {
  Jan: "Jan",
  Feb: "Feb",
  Mar: "Mac",
  Apr: "Apr",
  May: "Mei",
  Jun: "Jun",
  Jul: "Jul",
  Aug: "Ogos",
  Sep: "Sep",
  Oct: "Okt",
  Nov: "Nov",
  Dec: "Dis",
};

const ZH_MONTHS: Record<string, string> = {
  Jan: "1",
  Feb: "2",
  Mar: "3",
  Apr: "4",
  May: "5",
  Jun: "6",
  Jul: "7",
  Aug: "8",
  Sep: "9",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

/**
 * `INTAKES` (src/lib/content.ts) stores canonical date ranges as English
 * strings such as "22–23 Aug" using an en-dash (U+2013). This renders that
 * canonical value in the page locale without changing the underlying fact.
 */
export function formatIntakeDateRange(range: string, locale: SiteLocale): string {
  const match = range.match(/^(\d+)–(\d+)\s+([A-Za-z]+)$/);
  if (!match) return range;
  const [, day1, day2, month] = match;

  if (locale === "ms") {
    const msMonth = MS_MONTHS[month];
    if (!msMonth) return range;
    return `${day1}–${day2} ${msMonth}`;
  }

  if (locale === "zh") {
    const zhMonth = ZH_MONTHS[month];
    if (!zhMonth) return range;
    return `${zhMonth} 月 ${day1} 至 ${day2} 日`;
  }

  return range;
}

/**
 * `INTAKES` stores canonical times as English strings such as "9am–6pm".
 * This renders that canonical value in the page locale.
 */
export function formatIntakeTime(time: string, locale: SiteLocale): string {
  const match = time.match(/^(\d+)(am|pm)–(\d+)(am|pm)$/i);
  if (!match) return time;
  const [, hour1, period1, hour2, period2] = match;

  if (locale === "ms") {
    const msPeriod = (period: string) => (period.toLowerCase() === "am" ? "pagi" : "petang");
    return `${hour1} ${msPeriod(period1)} hingga ${hour2} ${msPeriod(period2)}`;
  }

  if (locale === "zh") {
    const zhPeriod = (period: string) => (period.toLowerCase() === "am" ? "上午" : "下午");
    return `${zhPeriod(period1)} ${hour1} 时至${zhPeriod(period2)} ${hour2} 时`;
  }

  return time;
}

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
