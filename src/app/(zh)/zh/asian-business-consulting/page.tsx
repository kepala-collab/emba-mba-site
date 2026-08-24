import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import CtaSection from "@/components/site/CtaSection";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import YouTubeFilm from "@/components/site/YouTubeFilm";
import { OPERATOR, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const ABC_URL = "https://www.asianbusinessconsulting.biz";

export const metadata = withSeo("/zh/asian-business-consulting", {
  title: "关于 Asian Business Consulting — 课程提供机构",
  description:
    "Asian Business Consulting（ABC）是设计并提供 Future Ready 高管 MBA 的马来西亚培训机构，为 CMI（UK）认可中心。了解其团队与合作伙伴。",
});

const MILESTONES = [
  { n: "2020", s: "ABC 于马来西亚注册" },
  { n: "2024年7月", s: "CMI（英国）背书及认可状态" },
  { n: "17", s: "个已开办班次：16 个英语班与首个华语班" },
  { n: "154", s: "位课程毕业生" },
];

const LEADERS = [
  {
    n: "Dr. Xavier Johnson",
    role: "Asian Business Consulting 首席商业方法总监 · LIFE University 创办人",
    img: "/brand/faculty/xavier-johnson.png",
    b: "F.A.S.T. 方法与课程十二个核心模块的设计者。马来亚大学校友，专注于组织商业架构、商业模式创新与设计思维，并透过关联机构 Waterhouse Consult Think 提供顾问服务。",
  },
  {
    n: "Ir. Dr. Jonas Anthony",
    role: "ABC 首席营运官 · LIFE Innoversity 联合创办人",
    img: "/brand/faculty/jonas-anthony.png",
    b: "退休前任 Panasonic AVC Networks 吉隆坡企业管理执行董事，曾任马来西亚 Panasonic 制造人力资源发展主席。逾 32 年精益、工业 4.0、品质与供应链经验；亦为英国特许工程师、特许品质专业人士及泰莱大学工程学院客座教授。",
  },
  {
    n: "Mr Allan Gan",
    role: "Asian Business Consulting 首席课程总监 · LIFE Innoversity 联合创办人",
    img: "/brand/faculty/allan-gan.webp",
    b: "负责课程的交付与日常运营——排期、后勤与企业客户关系，并与 CMI（UK）及 HRD Corp 协调，确保课程符合企业培训津贴要求。",
  },
  {
    n: "Roy Affandi",
    role: "课程运营经理及协调员",
    img: "/brand/community/affandi-portrait.png",
    b: "负责班次招生、入学安排与企业联系，并协助中小企业及大型机构处理 HRD Corp 津贴流程。马来亚大学分析经济学（荣誉）学士，墨尔本大学研究生，持高管 MBA（CMI UK），并为 CMI（UK）会员。",
  },
];

const abcSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asian Business Consulting",
  alternateName: "ABC",
  url: ABC_URL,
  foundingDate: "2020",
  areaServed: "MY",
  founder: { "@type": "Person", name: "Dr. Xavier Johnson" },
  member: LEADERS.map((leader) => ({ "@type": "Person", name: leader.n, jobTitle: leader.role })),
  sameAs: [ABC_URL],
};

export default function AbcPageZh() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "Asian Business Consulting", path: "/zh/asian-business-consulting" }]} />
      <JsonLd data={abcSchema} />

      <section className="section geo-section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">课程提供机构 · Asian Business Consulting</span></div>
          </Reveal>
          <Reveal delay={40}>
            <h1 className="sec-h" style={{ maxWidth: "22ch" }}>
              打造 <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Future Ready 高管 MBA</em> 的机构。
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="sec-sub" style={{ maxWidth: "60ch" }}>
              Asian Business Consulting（ABC）是一家于 2020 年在马来西亚注册的管理咨询、企业培训与高管学习机构。历经近三年与 CMI（UK）共同开发，设计出为期三个月的 Future Ready 高管 MBA，并以 CMI（UK）认可中心的身份提供课程。
            </p>
          </Reveal>
          <Reveal delay={110}>
            <div className="working-hero-actions">
              <a href={ABC_URL} className="btn btn-primary" target="_blank" rel="noopener" data-track-event="outbound_click" data-track-id="abc_website" data-track-location="abc_hero_zh">
                访问官网 asianbusinessconsulting.biz <span aria-hidden="true">↗</span>
              </a>
              <Link href="/zh/executive-mba" className="text-action">查看课程 <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="working-fact-band" aria-label="Asian Business Consulting 概览">
        <div className="wrap working-fact-grid">
          {MILESTONES.map((m) => (
            <div key={m.n}><strong>{m.n}</strong><span>{m.s}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">团队</span></div>
            <h2 className="sec-h">设计并交付课程的团队。</h2>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>由资深实践者组成的小团队。ABC 会在第一次课程前发出的班次说明中，确认该班导师与顾问名单。</p>
          </Reveal>
          <div className="abc-leaders">
            {LEADERS.map((leader, index) => (
              <Reveal key={leader.n} delay={(index % 2) * 60}>
                <article className="abc-leader">
                  {leader.img ? (
                    <Image src={leader.img} alt={leader.n} width={192} height={192} sizes="96px" />
                  ) : (
                    <span className="abc-avatar" aria-hidden="true">{leader.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                  )}
                  <div>
                    <h3>{leader.n}</h3>
                    <p className="role">{leader.role}</p>
                    <p>{leader.b}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="abc-film" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">首届毕业典礼 · 2026年8月</span></div>
            <h2 className="sec-h">17 个班次，154 位毕业生，共享一个重要里程碑。</h2>
            <p className="sec-sub" style={{ maxWidth: "56ch" }}>Future Ready 高管 MBA 于 2026 年 8 月举行首届毕业典礼。86 位毕业生出席，代表横跨 17 个班次、共 154 位毕业生的社群：16 个英语班与首个华语班。</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="film-prestige" style={{ marginTop: 24 }}>
              <div className="film-ribbon"><span className="dot" aria-hidden="true" /> 首届毕业典礼 · 86 位毕业生出席 · 2026年8月</div>
              <JsonLd data={{ "@context": "https://schema.org", "@type": "VideoObject", name: "Future Ready Executive MBA — 首届毕业典礼影片", description: "2026 年 8 月首届 Future Ready Executive MBA 毕业典礼精华，86 位毕业生出席。", "thumbnailUrl": `${SITE.url}/brand/abc-graduation-poster.jpg`, "uploadDate": "2026-08-22", "embedUrl": "https://www.youtube-nocookie.com/embed/6uEbqYOZxkg", "contentUrl": "https://youtu.be/6uEbqYOZxkg", "inLanguage": "zh-Hans-MY" }} />
              <YouTubeFilm videoId="6uEbqYOZxkg" poster="/brand/abc-graduation-poster.jpg" lang="zh" />
              <div className="film-cap"><strong>86 位毕业生出席典礼，</strong>并与导师及来自马来西亚商界与公共领域的嘉宾共同见证这一里程碑。</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">认可与资助</span></div>
            <h2 className="sec-h">支持课程交付的机构。</h2>
          </Reveal>
          <div className="grid-forces" style={{ marginTop: 26 }}>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>英国特许管理协会（CMI）</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>CMI 是外部品质机构。本课程自 2024 年 7 月起由 CMI 颁授并背书，ABC 亦列为其认可的国际中心。</p>
              <a href="https://www.managers.org.uk/community/cmi-internationally/centres/" className="text-action" target="_blank" rel="noopener" style={{ marginTop: 10 }}>在 CMI 名录中查证 <span aria-hidden="true">↗</span></a>
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>HRD Corp（马来西亚）</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>ABC 是 HRD Corp 注册培训机构，马来西亚雇主可透过人力资源发展基金资助学员。HRD Corp 决定资格及批准金额。</p>
              <Link href="/zh/fees" className="text-action" style={{ marginTop: 10 }}>雇主资助如何运作 <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <h3 style={{ fontSize: "1.15rem" }}>Right Dots Resources</h3>
              <p style={{ color: "var(--ink-2)", fontSize: ".92rem", marginTop: 8 }}>ABC 开发并提供课程；{OPERATOR.name} 是其市场推广机构，负责市场推广、课程咨询、报价及报名协调。</p>
              <Link href="/zh/contact" className="text-action" style={{ marginTop: 10 }}>联系课程团队 <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="partnership-seal">
            <Image src="/brand/partnership-seal.png" alt="Asian Business Consulting 与 Right Dots Resources 合作" width={1000} height={1000} sizes="(max-width: 640px) 68vw, 320px" />
            <figcaption className="mono sec-k">Asian Business Consulting × {OPERATOR.name} · 合作</figcaption>
          </figure>
        </div>
      </section>

      <CtaSection lang="zh" programme="Executive MBA" heading="与课程团队沟通。" sub="咨询 Future Ready 高管 MBA，或访问 asianbusinessconsulting.biz 进一步了解 Asian Business Consulting。" />
    </>
  );
}
