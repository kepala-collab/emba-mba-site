import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CTA_LABELS, FACTS, PROGRAMME_POSITIONING_ZH, SITE } from "@/lib/content";
import {
  CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH,
  COMPARISON_ZH,
  HRD_CORP_CLAIM_ZH,
  PROGRAMME_AUDIENCE_ZH,
} from "@/lib/content-zh";
import { ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/mba-for-working-professionals", {
  title: "面向在职专业人士的兼读 Executive MBA",
  description: `一边全职工作，一边进修：为期 ${FACTS.durationMonths} 个月的 Executive MBA，专为在职专业人士打造，分 ${FACTS.liveSessions} 次指定研习课授课，也可全程线上。`,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE.url}/zh/mba-for-working-professionals#course`,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    `${PROGRAMME_POSITIONING_ZH} 课程为期 ${FACTS.durationMonths} 个月，分 ${FACTS.liveSessions} 次指定研习课进行，另设线上选项。`,
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/zh/mba-for-working-professionals`,
  inLanguage: "zh-Hans-MY",
  hasCourseInstance: {
    "@type": "CourseInstance",
    "@id": `${SITE.url}/zh/mba-for-working-professionals#blended-course-instance`,
    url: `${SITE.url}/zh/mba-for-working-professionals`,
    courseMode: "blended",
    timeRequired: "P6M",
  },
};

const FIT = [
  { h: `${FACTS.liveSessions} 次导师带领的指定研习课`, p: `全程分 ${FACTS.liveSessions} 次研习课进行，每次两天。` },
  { h: "或完全线上进行", p: "也可选择全程线上直播，导师辅导与课程框架与面授班完全一致。" },
  { h: "书面补课安排", p: "万一错过某次课程，ABC 会以书面确认经批准的补课方式：观看指定录像，或参加指定的后续课程。" },
  { h: "决定仍由您来做", p: "没有传统论文，也没有考试。您把框架用在一项自己手上的决策，在课程之间、在自己的企业里落实。" },
];

const AUDIENCE = [
  { h: "企业主与创业者", p: "决定影响的不只是自己的企业主。" },
  { h: "董事与总经理", p: "为业务单元的战略、业绩与交付负责的领导者。" },
  { h: "资深经理", p: "正从单一职能，走向跨部门决策的管理者。" },
  { h: "资深专业人士", p: "肩负战略、转型、创新或增长重任的专业人士。" },
];

export default function MbaForWorkingProfessionalsZhPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1 · Intro */}
      <section className="section geo-section">
        <div className="wrap persona-hero-grid">
          <div>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">面向在职专业人士 · 兼读及线上</span>
            </div>
            <Reveal>
              <h1 className="sec-h">
                职位不变，<span className="acc">决策方式改变</span>
              </h1>
            </Reveal>
            <p className="sec-sub">
              您留在现有岗位与职责。{FACTS.durationLong}内，您把一项已在手上的决策，
              通过 {FACTS.trainingDays} 个培训日、分 {FACTS.liveSessions} 次研习课，加上一对一辅导与企业应用项目，
              做成一份经导师审阅的书面行动方案。课程框架与工作模板由您留用。
              这套方法培养决策能力；业务成果则取决于学员本身的证据、选择与执行。
            </p>
            <p className="mono sec-k mt-s">
            {FACTS.durationLong} · {FACTS.liveSessions} 次研习课 · 由 CMI 颁发并认可
            </p>
            <p className="sec-sub mt-s">
              {PROGRAMME_POSITIONING_ZH} 课程为期 {FACTS.durationMonths} 个月，属非学术性专业发展课程，
              并非 MQA 认证的学术学位或受监管资格。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
              Chartered Manager 属于独立可选的 CMI 路线，另有各自的资格、评估与费用，
              不包含在已公布的课程或费用之内。
            </p>
            <p className="sec-sub mt-s">
              探索完整的{" "}
              <Link href="/zh/executive-mba" className="acc">Executive MBA 课程</Link>，
              或直接查看{" "}
              <Link href="/zh/intakes" className="acc">2026 开课日期</Link>。
            </p>
          </div>
          <Reveal delay={80}>
            <figure className="editorial-visual editorial-visual-portrait persona-hero-visual">
              <Image
                src="/images/future-ready-emba/future-ready-emba-working-leader-portrait-malaysia-4x5.webp"
                alt="一位马来西亚在职领导者在吉隆坡天际线前审阅企业文件"
                width={1664}
                height={2080}
                sizes="(max-width: 900px) 100vw, 38vw"
                priority
              />
              <figcaption>专为学习期间仍照常扛着工作的管理者而设。</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 2 · How it fits your week */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">如何配合您的每周安排</span>
          </div>
          <Reveal>
            <h2 className="sec-h">提前公布的时间表，您仍留在岗位上。</h2>
          </Reveal>
          <p className="sec-sub">
            咨询前请先核对 {FACTS.liveSessions} 次研习课的日期。企业应用项目会把您手上的决策，
            在课程之间、在自己的企业里落实。
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {FIT.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Comparison vs a reference academic MBA */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">与参考型学术 MBA 对比</span>
          </div>
          <Reveal>
            <h2 className="sec-h">对比两条修读形式与资格性质各不相同的路线。</h2>
          </Reveal>
          <p className="sec-sub">
            此处作为参照的学术 MBA 一般需 18–24 个月，采用学术评估与论文。
            下表比较这两种修读形式。
          </p>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="Executive MBA 与参考型学术 MBA 形式对比" hint="向右滑动查看所有列 →">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">本 Executive MBA</th>
                    <th>参考型学术 MBA</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ZH.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td className="us">{r.us}</td>
                      <td className="them">{r.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableTableRegion>
          </Reveal>
          <p className="fine mt-s">
            此表所指的参照学术 MBA，是一门为期 18–24 个月、以学术模块、作业或考试及论文为主的课程，
            并不代表所有 MBA。{PROGRAMME_POSITIONING_ZH} 本课程属非学术性专业发展课程，
            并非 MQA 认证的学术学位或受监管资格。{CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}
            请按您真正需要的资格性质与修读形式来选择。查看完整的{" "}
            <Link href="/zh/fees" className="acc">学费及课程内容</Link>。
          </p>
        </div>
      </section>

      {/* 4 · 2026 intakes teaser */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">2026 开课日期 · {FACTS.liveSessions} 次指定研习课</span>
          </div>
          <Reveal>
            <h2 className="sec-h">选择您的六个月何时开始。</h2>
          </Reveal>
          <p className="sec-sub">
            目前马来西亚公开班的上课时间为上午 9 时至下午 6 时；Cohort 17 排在周六至周日，
            其余已公布日期为周五至周六。另设全程线上选项。
          </p>
          <Reveal className="mt-s">
            <IntakeSchedule lang="zh" label="2026 年在职专业人士开课时间表" />
          </Reveal>
          <p className="mt-s">
            <Link href="/zh/intakes" className="btn btn-primary">查看 2026 所有开课日期</Link>
          </p>
        </div>
      </section>

      {/* 5 · Who it's for */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="l" />
            <span className="mono sec-k">适合对象</span>
          </div>
          <Reveal>
            <h2 className="sec-h">写给肩负战略或企业整体责任的在职专业人士。</h2>
          </Reveal>
          <p className="sec-sub">
            {PROGRAMME_AUDIENCE_ZH}
          </p>
          <div className="mt-m mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {AUDIENCE.map((x) => (
              <Reveal key={x.h}>
                <div className="card">
                  <h3 className="mono sec-k">{x.h}</h3>
                  <p className="sec-sub" style={{ marginTop: 10 }}>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine mt-s">
            {HRD_CORP_CLAIM_ZH} {FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，
            须经评估与书面批准，具体金额与应付费用均个别书面确认。奖学金并非自动授予。{" "}
            <Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="对照您眼下手上的决策，看看这个时间表是否合适。" />
    </>
  );
}
