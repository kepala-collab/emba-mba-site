import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ScrollableTableRegion from "@/components/site/ScrollableTableRegion";
import IntakeSchedule from "@/components/site/IntakeSchedule";
import { CTA_LABELS, FACTS, SITE } from "@/lib/content";
import { COMPARISON_ZH, HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
import { COURSE_ID, ORGANIZATION_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/mba-for-working-professionals", {
  title: "面向在职专业人士的兼读Executive MBA",
  description:
    "一边全职工作，一边进修：为期六个月的Executive MBA，专为在职专业人士打造，三个指定周末授课，也可全程线上。",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "由 CMI 颁授并背书的Executive MBA，六个月内分三个指定课程进行，另设线上选项。",
  provider: {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE.provider,
  },
  url: `${SITE.url}/executive-mba`,
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
  { h: "三个指定周末课程", p: "全程分三个固定课程，每个课程为期一个周末。" },
  { h: "或完全线上进行", p: "也可选择全程线上直播，导师辅导与课程框架与面授班完全一致。" },
  { h: "书面补课安排", p: "万一错过某次课程，ABC 会以书面确认经批准的补课方式：观看指定录像，或参加指定的后续班次。" },
  { h: "应用于当前工作", p: "没有传统论文，也没有考试。学员把框架直接用在自己当下负责的经营课题上。" },
];

const AUDIENCE = [
  { h: "企业主与创业者", p: "企业已经做到、光靠直觉难以独力驾驭的创办人。" },
  { h: "董事与总经理", p: "为业务单元的战略、业绩与交付负责的领导者。" },
  { h: "资深经理", p: "正从单一职能执行，走向跨部门决策的管理者。" },
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
                为<span className="acc">不离开现有岗位</span>的专业人士量身安排的兼读Executive MBA 时间表。
              </h1>
            </Reveal>
            <p className="sec-sub">
              Future Ready Executive MBA 专为想在全职工作之余进修的学员打造。
              课程为期 {FACTS.durationLong}，集中在三个指定周末授课。
              Chartered Manager 属于独立可选的 CMI 路线，另有各自的资格、评估与费用，
              不包含在已公布的课程或费用之内。
            </p>
            <p className="mono sec-k mt-s">
              六个月 · 三个指定课程周末 · 由 CMI 颁授并背书
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
            <h2 className="sec-h">为在职学员公布的上课时间表。</h2>
          </Reveal>
          <p className="sec-sub">
            报名前请先核对三个课程的日期。企业应用项目会把所学与您现职中的经营课题挂钩。
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
            <ScrollableTableRegion kind="comparison" label="Executive MBA 与参考型学术 MBA 形式对比">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">本Executive MBA</th>
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
            并不代表所有 MBA。这门专业课程由 CMI 颁授并背书，并非 MQA 认证的学术学位。
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
            <span className="mono sec-k">2026 开课日期 · 三个指定周末课程</span>
          </div>
          <Reveal>
            <h2 className="sec-h">2026 英语及华语开课时间表。</h2>
          </Reveal>
          <p className="sec-sub">
            目前马来西亚公开班次为上午 9 时至下午 6 时；第 17 班次为周六至周日，
            其余已公布班次为周五至周六。另设全程线上选项。
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
            <h2 className="sec-h">写给肩负战略或企业整体成败的专业人士。</h2>
          </Reveal>
          <p className="sec-sub">
            课程适合肩负战略、转型、创新或增长的企业主、董事、总经理与资深管理者。
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
            {HRD_CORP_CLAIM_ZH} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，
            须经 {FACTS.scholarshipProvider} 评估与书面批准，并非自动获得；具体金额与应付费用均个别书面确认。{" "}
            <Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="对照您眼下的岗位，看看课程安排是否合适。" />
    </>
  );
}
