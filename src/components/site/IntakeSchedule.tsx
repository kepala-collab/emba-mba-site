"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CTA_LABELS, INTAKES, PROGRAMME_YEAR } from "@/lib/content";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { cohortKey } from "@/lib/conversion-contract";
import { getIntakeStatus, intakeStatusLabel, malaysiaDateKey, type IntakeStatus } from "@/lib/intakes";

type Props = {
  lang?: "en" | "zh" | "ms";
  label?: string;
};

const STRINGS = {
  en: {
    region: `${PROGRAMME_YEAR} Executive MBA intake schedule`,
    hint: "Swipe to see all dates →",
    cohort: "Cohort",
    language: "Language",
    s1: "Session 1",
    s2: "Session 2",
    s3: "Session 3",
    days: "Days / time",
    enquire: "Enquire",
    mandarin: "Mandarin",
    english: "English",
    satSun: "Sat–Sun",
    friSat: "Fri–Sat",
    open: "Open for enquiries",
    confirm: "Confirm availability",
    nextCohort: "See the next available cohort →",
    intakesPath: "/intakes",
    applyPath: "/apply",
    cta: CTA_LABELS.conversation,
  },
  zh: {
    region: `${PROGRAMME_YEAR} 年Executive MBA 开课日期`,
    hint: "左右滑动查看所有日期 →",
    cohort: "班次",
    language: "语言",
    s1: "第一次",
    s2: "第二次",
    s3: "第三次",
    days: "上课日与时间",
    enquire: "咨询",
    mandarin: "华语",
    english: "英语",
    satSun: "星期六至星期日",
    friSat: "星期五至星期六",
    open: "开放咨询",
    confirm: "请确认名额",
    nextCohort: "查看下一个开放班次 →",
    intakesPath: "/zh/intakes",
    applyPath: "/zh/apply",
    cta: CTA_LABELS.zh.conversation,
  },
  ms: {
    region: `Jadual kemasukan Executive MBA ${PROGRAMME_YEAR}`,
    hint: "Leret untuk melihat semua tarikh →",
    cohort: "Kohort",
    language: "Bahasa",
    s1: "Sesi 1",
    s2: "Sesi 2",
    s3: "Sesi 3",
    days: "Hari / masa",
    enquire: "Pertanyaan",
    mandarin: "Mandarin",
    english: "Inggeris",
    satSun: "Sabtu–Ahad",
    friSat: "Jumaat–Sabtu",
    open: "Dibuka untuk pertanyaan",
    confirm: "Sahkan kekosongan tempat",
    nextCohort: "Lihat kohort seterusnya yang dibuka →",
    intakesPath: "/ms/intakes",
    applyPath: "/ms/apply",
    cta: CTA_LABELS.ms.conversation,
  },
} as const;

function statusLabel(status: IntakeStatus, lang: "en" | "zh" | "ms") {
  if (lang === "ms") {
    if (status === "started") return "Kursus sedang berlangsung";
    if (status === "completed") return "Telah tamat";
    return "Akan datang";
  }
  return intakeStatusLabel(status, lang === "zh");
}

export default function IntakeSchedule({ lang = "en", label }: Props) {
  const t = STRINGS[lang];
  const [today, setToday] = useState("0000-00-00");
  const regionLabel = label || t.region;

  useEffect(() => { setToday(malaysiaDateKey()); }, []);

  return (
    <div className="intake-schedule">
      <div className="intake-schedule-table">
        <ScrollableTableRegion
          kind="intake"
          label={regionLabel}
          hint={t.hint}
        >
          <table className="intake">
            <thead>
              <tr>
                <th>{t.cohort}</th>
                <th>{t.language}</th>
                <th>{t.s1}</th>
                <th>{t.s2}</th>
                <th>{t.s3}</th>
                <th>{t.days}</th>
                <th><span className="sr-only">{t.enquire}</span></th>
              </tr>
            </thead>
            <tbody>
              {INTAKES.map((cohort) => {
                const key = cohortKey(cohort.language, cohort.co);
                const intent = cohort.language === "Mandarin" ? "mandarin" : "individual_self_funded";
                const href = `${t.applyPath}?cohort=${encodeURIComponent(key)}&intent=${intent}`;
                const status = getIntakeStatus(cohort.startDate, cohort.endDate, today);
                const canEnquire = status === "upcoming";
                return (
                <tr key={key} data-status={status}>
                  <td className="co">{cohort.co}</td>
                  <td>{cohort.language === "Mandarin" ? t.mandarin : t.english}</td>
                  <td className="s mono">{cohort.s1}</td>
                  <td className="s mono">{cohort.s2}</td>
                  <td className="s mono">{cohort.s3}</td>
                  <td className="seats">
                    {cohort.days === "Sat–Sun" ? t.satSun : t.friSat}
                    <br />
                    {cohort.time}
                  </td>
                  <td className="intake-action-cell">
                    {canEnquire ? <Link className="intake-action-link" href={href} data-track-event="cohort_select" data-track-id={`cohort_${key}`} data-track-location="intake_schedule" data-track-cohort={key} data-track-intent={intent}>
                      {t.cta}
                    </Link> : <span className="intake-status-label">{statusLabel(status, lang)}</span>}
                  </td>
                </tr>
              );})}
            </tbody>
          </table>
        </ScrollableTableRegion>
      </div>

      <ul className="intake-card-list" aria-label={regionLabel}>
        {INTAKES.map((cohort) => {
          const key = cohortKey(cohort.language, cohort.co);
          const intent = cohort.language === "Mandarin" ? "mandarin" : "individual_self_funded";
          const href = `${t.applyPath}?cohort=${encodeURIComponent(key)}&intent=${intent}`;
          const language = cohort.language === "Mandarin" ? t.mandarin : t.english;
          const days = cohort.days === "Sat–Sun" ? t.satSun : t.friSat;
          const availability = cohort.seats === "Open" ? t.open : t.confirm;
          const status = getIntakeStatus(cohort.startDate, cohort.endDate, today);
          const canEnquire = status === "upcoming";

          return (
            <li className="intake-card" key={`mobile-${key}`}>
              <header>
                <div>
                  <p className="mono">{language}</p>
                  <h3>{cohort.co}</h3>
                </div>
                <span className={`intake-availability is-${status}`}>{canEnquire ? availability : statusLabel(status, lang)}</span>
              </header>
              <dl>
                <div><dt>{t.s1}</dt><dd>{cohort.s1}</dd></div>
                <div><dt>{t.s2}</dt><dd>{cohort.s2}</dd></div>
                <div><dt>{t.s3}</dt><dd>{cohort.s3}</dd></div>
              </dl>
              <footer><span>{days}</span><strong>{cohort.time}</strong></footer>
              {canEnquire ? <Link className="intake-card-action" href={href} data-track-event="cohort_select" data-track-id={`mobile_cohort_${key}`} data-track-location="intake_schedule_mobile" data-track-cohort={key} data-track-intent={intent}>
                {`${t.cta} →`}
              </Link> : <Link className="intake-card-action" href={t.intakesPath}>{t.nextCohort}</Link>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
