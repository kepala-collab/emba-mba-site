import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/zh/intakes";

export const metadata = withSeo(path, {
  title: "2026 高管 MBA 英语及华语班开课日期",
  description: "查看 2026 年英语 Cohort 17–19 与华语 Cohort 2–3 的三个周末课程日期与时间。",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "开课日期", path }]} />
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 英语及华语班</span></div>
            <h1 className="sec-h">选择符合工作日程的班次。</h1>
            <p className="sec-sub">五个已公布班次均在六个月内完成三个周末课程。Chartered Manager 属于独立可选 CMI 路线，不包含在本课程或已公布费用内。</p>
            <p className="fine mt-s">课程团队会在回复咨询时确认班次名额。</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">完整排期</span></div></Reveal>
          <Reveal><h2 className="sec-h">先确认三个周末都能出席。</h2></Reveal>
          <Reveal className="mt-m"><IntakeSchedule lang="zh" /></Reveal>
          <p className="fine mt-s">Cohort 17 于星期六至星期日上课；其余已公布班次于星期五至星期六上课。所有课程时间均为上午 9 时至下午 6 时。如 ABC 更改已公布日期，已报名学员将收到书面替代日期。</p>
        </div>
      </section>

      <section className="section center">
        <div className="wrap maxw-820">
          <Reveal>
            <h2 className="sec-h">决定之前，先确认日期与出席安排。</h2>
            <p className="sec-sub">告诉课程团队适合你的日期及语言。你可选择简短通话、线上说明会、在双方同意的地点面谈，或先收取资料。</p>
            <div className="mt-m"><Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.conversation} →</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
