import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/zh/intakes";

export const metadata = withSeo(path, {
  title: "2026 Executive MBA 英语及华语班开课日期",
  description: "查看 2026 年英语班（Cohort 17–19）与华语班（Cohort 2–3）三个周末的上课日期与时间。",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "开课日期", path }]} />
      <section className="section">
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">2026 英语及华语班</span></div>
            <h1 className="sec-h">选择与工作日程契合的班次。</h1>
            <p className="sec-sub">五个已公布班次，都在六个月内以三个周末完成。Chartered Manager 属于独立可选的 CMI 路线，不含在本课程与已公布费用之内。</p>
            <p className="fine mt-s">班次名额将由课程团队在回复咨询时确认。</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal><div className="eyebrow"><span className="l" /><span className="mono sec-k">完整排期</span></div></Reveal>
          <Reveal><h2 className="sec-h">报名前，先确认三个周末都能出席。</h2></Reveal>
          <Reveal className="mt-m"><IntakeSchedule lang="zh" /></Reveal>
          <p className="fine mt-s">Cohort 17 于周六至周日上课，其余已公布班次于周五至周六上课；上课时间均为上午 9 时至下午 6 时。如 ABC 调整已公布日期，已报名学员将收到书面通知的替代日期。</p>
        </div>
      </section>

      <section className="section center">
        <div className="wrap maxw-820">
          <Reveal>
            <h2 className="sec-h">做决定之前，先确认日期与出席安排。</h2>
            <p className="sec-sub">告诉课程团队您合适的日期与授课语言。您可以选择简短通话、线上说明会、在双方约定的地点面谈，或先索取资料。</p>
            <div className="mt-m"><Link href="/zh/apply" className="btn btn-primary">{CTA_LABELS.zh.conversation} →</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
