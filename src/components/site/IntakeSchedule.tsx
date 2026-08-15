import Link from "next/link";
import { INTAKES } from "@/lib/content";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import { cohortKey } from "@/lib/conversion-contract";

type Props = {
  lang?: "en" | "zh";
  label?: string;
};

export default function IntakeSchedule({ lang = "en", label }: Props) {
  const zh = lang === "zh";
  const regionLabel = label || (zh ? "2026 年高管 MBA 开课日期" : "2026 Executive MBA intake schedule");

  return (
    <div className="intake-schedule">
      <div className="intake-schedule-table">
        <ScrollableTableRegion
          kind="intake"
          label={regionLabel}
          hint={zh ? "左右滑动查看所有日期 →" : "Swipe to see all dates →"}
        >
          <table className="intake">
            <thead>
              <tr>
                <th>{zh ? "班次" : "Cohort"}</th>
                <th>{zh ? "语言" : "Language"}</th>
                <th>{zh ? "第一次" : "Session 1"}</th>
                <th>{zh ? "第二次" : "Session 2"}</th>
                <th>{zh ? "第三次" : "Session 3"}</th>
                <th>{zh ? "上课日与时间" : "Days / time"}</th>
                <th><span className="sr-only">{zh ? "咨询" : "Enquire"}</span></th>
              </tr>
            </thead>
            <tbody>
              {INTAKES.map((cohort) => {
                const key = cohortKey(cohort.language, cohort.co);
                const intent = cohort.language === "Mandarin" ? "mandarin" : "individual_self_funded";
                const href = `${zh ? "/zh/apply" : "/apply"}?cohort=${encodeURIComponent(key)}&intent=${intent}`;
                return (
                <tr key={key}>
                  <td className="co">{cohort.co}</td>
                  <td>{zh ? (cohort.language === "Mandarin" ? "华语" : "英语") : cohort.language}</td>
                  <td className="s mono">{cohort.s1}</td>
                  <td className="s mono">{cohort.s2}</td>
                  <td className="s mono">{cohort.s3}</td>
                  <td className="seats">
                    {zh ? (cohort.days === "Sat–Sun" ? "星期六至星期日" : "星期五至星期六") : cohort.days}
                    <br />
                    {cohort.time}
                  </td>
                  <td className="intake-action-cell">
                    <Link className="intake-action-link" href={href} data-track-event="cohort_select" data-track-id={`cohort_${key}`} data-track-location="intake_schedule" data-track-cohort={key} data-track-intent={intent}>
                      {zh ? "咨询此班次" : "Discuss this cohort"}
                    </Link>
                  </td>
                </tr>
              );})}
            </tbody>
          </table>
        </ScrollableTableRegion>
      </div>

      <div className="intake-card-list" role="list" aria-label={regionLabel}>
        {INTAKES.map((cohort) => {
          const key = cohortKey(cohort.language, cohort.co);
          const intent = cohort.language === "Mandarin" ? "mandarin" : "individual_self_funded";
          const href = `${zh ? "/zh/apply" : "/apply"}?cohort=${encodeURIComponent(key)}&intent=${intent}`;
          const language = zh ? (cohort.language === "Mandarin" ? "华语" : "英语") : cohort.language;
          const days = zh
            ? (cohort.days === "Sat–Sun" ? "星期六至星期日" : "星期五至星期六")
            : cohort.days;
          const availability = zh
            ? (cohort.seats === "Open" ? "开放咨询" : "请确认名额")
            : (cohort.seats === "Open" ? "Open for enquiries" : "Confirm availability");

          return (
            <article className="intake-card" role="listitem" key={`mobile-${key}`}>
              <header>
                <div>
                  <p className="mono">{language}</p>
                  <h3>{cohort.co}</h3>
                </div>
                <span className="intake-availability">{availability}</span>
              </header>
              <dl>
                <div><dt>{zh ? "第一次" : "Session 1"}</dt><dd>{cohort.s1}</dd></div>
                <div><dt>{zh ? "第二次" : "Session 2"}</dt><dd>{cohort.s2}</dd></div>
                <div><dt>{zh ? "第三次" : "Session 3"}</dt><dd>{cohort.s3}</dd></div>
              </dl>
              <footer><span>{days}</span><strong>{cohort.time}</strong></footer>
              <Link className="intake-card-action" href={href} data-track-event="cohort_select" data-track-id={`mobile_cohort_${key}`} data-track-location="intake_schedule_mobile" data-track-cohort={key} data-track-intent={intent}>
                {zh ? "咨询此班次 →" : "Discuss this cohort →"}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
