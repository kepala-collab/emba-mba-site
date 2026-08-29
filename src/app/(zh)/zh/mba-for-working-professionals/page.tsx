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
  title: "面向在职专业人士的兼读高管 MBA",
  description:
    "在全职工作的同时进修：一门为期六个月的高管 MBA，专为在职专业人士设计，三个指定周末课程，或以线上课程形式进行。",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": COURSE_ID,
  name: "Future Ready Executive MBA (CMI UK)",
  description:
    "面向未来商业领导力的高管 MBA 由 CMI 颁授并背书，六个月内三个指定课程进行，另设线上课程选项。",
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
  { h: "三个指定周末课程", p: "课程分三个既定课程，每个课程为期一个周末。" },
  { h: "或完全线上进行", p: "课程也提供线上直播形式，辅导与框架与现场班次相同。" },
  { h: "书面补课安排", p: "如学员错过某次课程，ABC 会以书面方式记录经批准的补课方式：指定视频，或指定后续班次的出席。" },
  { h: "应用于当前工作", p: "没有传统的论文或考试。学员把框架应用于自己目前负责的企业课题。" },
];

const AUDIENCE = [
  { h: "企业主与创业者", p: "把企业扩展到直觉已难以独力承担规模的创办人。" },
  { h: "董事与总经理", p: "对业务单位战略、绩效及交付负责的领导者。" },
  { h: "资深经理", p: "正从职能执行，转向跨职能决策责任的管理者。" },
  { h: "资深专业人士", p: "对战略、转型、创新或增长负责的专业人士。" },
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
                为仍<span className="acc">留任原有职位</span>的专业人士而设的兼读高管 MBA 时间安排。
              </h1>
            </Reveal>
            <p className="sec-sub">
              Future Ready 高管 MBA 专为希望在全职工作期间进修的学员设计。
              课程为期 {FACTS.durationLong}，采用三个指定周末课程。
              Chartered Manager 是独立可选的 CMI 路线，具有独立资格、评估及费用；
              不包含在已公布课程或费用内。
            </p>
            <p className="mono sec-k mt-s">
              六个月 · 三个指定课程周末 · 由 CMI 颁授并背书
            </p>
            <p className="sec-sub mt-s">
              探索完整的{" "}
              <Link href="/zh/executive-mba" className="acc">高管 MBA 课程</Link>，
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
              <figcaption>专为在学习期间仍持续承担工作的管理者而设。</figcaption>
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
            <h2 className="sec-h">为仍在职的学员公布的课程时间表。</h2>
          </Reveal>
          <p className="sec-sub">
            报名前请查看三个课程日期。企业应用项目把课程与学员目前职位中的企业课题连接起来。
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
            <h2 className="sec-h">比较两种不同修读形式及资格性质的路线。</h2>
          </Reveal>
          <p className="sec-sub">
            本对比中的参考型学术 MBA 修读时间为 18–24 个月，采用学术评估及论文。
            以下是两种已定义修读形式的对比。
          </p>
          <Reveal className="mt-s">
            <ScrollableTableRegion kind="comparison" label="高管 MBA 与参考型学术 MBA 形式对比">
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th className="us">本高管 MBA</th>
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
            此表把参考型学术 MBA 界定为一门 18–24 个月、以学术模块、作业或考试及论文为主的课程，
            并不代表所有 MBA 课程。这门专业课程由 CMI 颁授并背书，并非 MQA 认证的学术学位。
            请依据您所需要的资格性质及修读形式作出选择。查看完整的{" "}
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
            现行马来西亚公开班次时间为上午 9 时至下午 6 时；第 17 班次为星期六至星期日，
            其余已公布班次为星期五至星期六。另设完全线上课程选项。
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
            <h2 className="sec-h">面向负责战略或企业整体责任的专业人士。</h2>
          </Reveal>
          <p className="sec-sub">
            课程适合负责战略、转型、创新或增长的企业主、董事、总经理及资深管理者。
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
            {HRD_CORP_CLAIM_ZH} 符合资格的马来西亚申请者经评估及书面批准后，
            可接受 {FACTS.scholarshipProvider} 奖学金择优评估；任何奖学金金额及应付费用均会个别以书面确认。{" "}
            <Link href="/zh/apply" className="acc">{CTA_LABELS.zh.guide}</Link>。
          </p>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="对照您目前的职位，检视课程安排是否合适。" />
    </>
  );
}
