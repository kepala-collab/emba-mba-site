import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import CtaSection from "@/components/site/CtaSection";
import ArticleAttribution, { ARTICLE_PUBLISHED, ARTICLE_REVIEWED } from "@/components/site/ArticleAttribution";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";
import { EDITORIAL_TEAM_ID, PROVIDER_ID, withSeo } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export const metadata = withSeo("/zh/insights/design-thinking-for-business", {
  title: "商业中的设计思维",
  description:
    "面向领导者的设计思维实用指南：理解客户、界定问题、制作原型，并平衡渴望度、可行性与商业可行性。",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-22T12:04:03+08:00",
    modifiedTime: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "商业中的设计思维：面向领导者的实用指南",
  mainEntityOfPage: "https://futurereadymba.com/zh/insights/design-thinking-for-business",
  image: "https://futurereadymba.com/opengraph-image",
  datePublished: `${ARTICLE_PUBLISHED}T12:04:03+08:00`,
  dateModified: `${ARTICLE_REVIEWED}T00:00:00+08:00`,
  inLanguage: "zh-Hans-MY",
  description:
    "理解客户、界定正确问题、快速制作原型，并平衡渴望度、可行性与商业可行性的实用指南。",
  author: {
    "@type": "Organization",
    "@id": EDITORIAL_TEAM_ID,
    name: "Asian Business Consulting Editorial Team",
  },
  publisher: {
    "@type": "Organization",
    "@id": PROVIDER_ID,
    name: "Asian Business Consulting",
  },
  articleSection: "Insights",
  about: "面向商业领导者及战略的设计思维",
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: "洞察", path: "/zh/insights" }, { name: "设计思维", path: "/zh/insights/design-thinking-for-business" }]} />
      <JsonLd data={jsonLd} />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="l" />
              <span className="mono sec-k">洞察 · 思维方法</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces)", maxWidth: "18ch" }}>
              商业中的设计思维
            </h1>
            <ArticleAttribution lang="zh" />
            <p className="lead" style={{ maxWidth: "64ch" }}>
              一个完成度很高的产品，仍会瞄准错误的客户问题。设计思维通过一种以人为本、
              反复迭代的解决问题方式来处理这个风险——从真实需求出发，而不是从内部假设出发，
              并把每个想法都当作待验证的假设，而不是需要捍卫的结论。
            </p>
          </Reveal>

          <div className="prose" style={{ maxWidth: "68ch", marginTop: 40 }}>
            <h2>设计思维到底是什么</h2>
            <p>
              设计思维借用设计师的工作习惯，把它变成一套解决复杂、模糊问题的通用方法。
              它的核心动作看似简单：从你要服务的对象开始，仔细观察他们的真实处境，
              让你观察到的东西塑造解决方案——而不是先有一个自己喜欢的方案，
              再去找一个市场为它辩护。
            </p>
            <p>
              这种方法刻意采用反复迭代，而不是线性推进。团队在投入全面上线之前，
              先用低成本原型检验假设，再根据观察到的证据修正方案。
              先保持好奇、后建立信念——这正是它与传统规划的区别所在。
            </p>

            <blockquote>
              重点不是爱上你的想法，而是爱上问题本身，并保持这份专注，直到真正理解它。
            </blockquote>

            <h2>企业场景中的五个阶段</h2>
            <p>
              经典模型有五个阶段。它们是你可以来回切换的模式，而不是完成一次就打勾的步骤。
            </p>
            <ul>
              <li>
                <strong>同理。</strong> 接近你所服务的人——访谈、观察、
                投入时间了解他们的工作流程。目标是先用他们自己的语言理解他们的体验与困难，
                再决定要解决什么。
              </li>
              <li>
                <strong>界定。</strong> 把听到的内容提炼成一个精准的、以人为核心的问题陈述。
                一个精确的界定——例如“繁忙的临床医生每班次要花二十分钟核对记录”——比
                “提升效率”这类模糊指令更有实际作用。
              </li>
              <li>
                <strong>构思。</strong> 在收窄之前先产生多个不同的答案。
                这一步重视选项的丰富度；判断留到有了多个选项之后再进行，
                目的是跳出第一个明显想到的方案。
              </li>
              <li>
                <strong>制作原型。</strong> 用最低的成本把想法变得具体——一张草图、
                一个可点击的模型、单次手动走一遍服务流程。原型是被实体化的提问，
                而不是缩小版的成品。
              </li>
              <li>
                <strong>测试。</strong> 把原型交到真实用户面前，观察他们的实际行为，
                而不只是听他们怎么说。每一次测试都回流到同理与界定阶段，形成新一轮循环。
              </li>
            </ul>

            <h2>为什么对领导者及战略而言重要</h2>
            <p>
              对高管而言，设计思维的价值是商业性的，不是美学性的。它系统性地降低了一项关键商业风险：
              打造出客户不会选择的东西。通过尽早引入证据，它把失败发生的节点，
              从代价高昂的正式上线，提前到成本很低的原型阶段。
            </p>
            <p>
              它也用一个简单而严谨的视角，把创造力与商业逻辑连接起来。
              一项能持续下去的创新，必须同时通过三项检验：
            </p>
            <ul>
              <li>
                <strong>渴望度</strong>——人们是否真的想要它？（人的问题）
              </li>
              <li>
                <strong>可行性</strong>——我们是否真的能把它做出来并交付？（技术问题）
              </li>
              <li>
                <strong>商业可行性</strong>——它是否构成可持续的商业逻辑？（商业问题）
              </li>
            </ul>
            <p>
              设计思维在渴望度上最有优势，而这恰恰是传统战略最薄弱的地方——
              领导者的工作，是同时把握这三者，而不是只优化其中一项而牺牲其余两项。
            </p>

            <h3>回到客户真正要完成的“任务”</h3>
            <p>
              设想一家中端银行正流失年轻客户到金融科技应用。
              直觉反应是加入功能竞赛：增加预算图表、重做仪表板、加快上线速度。
              但真正坐下来做客户访谈，往往会发现一个不同的任务。
              客户买的不是图表；他们雇用的是一项服务，用来回答一个焦虑的问题——
              “我现在能不能负担这笔支出，而不会之后有意外的坏消息？”
            </p>
            <p>
              以这种方式重新界定后，问题就不再是界面本身，而是决策那一刻的信心与清晰度。
              这一个转变改变了整条产品路线图的方向——转向实时的可负担性提示与
              直白易懂的提醒——而不是一堆在会议室里测试良好、在实际使用中表现不佳的功能。
              客户群与原始数据没有改变，改变的是团队对客户任务给出了更精准的界定。
            </p>

            <h2>常见陷阱</h2>
            <ul>
              <li>
                <strong>跳过客户研究。</strong> 直接进入构思阶段，容易把内部假设当成产品需求。
              </li>
              <li>
                <strong>原型制作过晚。</strong> 一个完成度过高的首个原型，
                会在关键假设尚未验证前，提高改变方向的代价。
              </li>
              <li>
                <strong>把它当作一场工作坊表演。</strong> 便利贴与外出团建，
                本身不构成一套方法。设计思维只有在洞察真正改变资源投入、
                产品上线与项目终止的决定时，才会带来实际价值。
              </li>
            </ul>

            <h2>从方法到熟练运用</h2>
            <p>
              设计整合思维是{" "}
              <Link href="/zh/how-it-works">Future Ready 高管 MBA</Link>{" "}
              F.A.S.T. 方法中的七个思维学科之一，与上文提到的
              Jobs-To-Be-Done 及渴望度、可行性、商业可行性框架并列——
              课程把它作为你可以用在自己战略课题上的工具来教授，而不是作为理论讲授。
              如果你希望带领的创新经得起真实客户的检验，
              <Link href="/zh/executive-mba">高管 MBA</Link>{" "}
              课程会帮助你把这套方法练成本能反应。
            </p>
            <h2>资料来源及延伸阅读</h2>
            <p>
              关于渴望度、可行性与商业可行性这一经典框架，以及 IDEO 对这套迭代实践方法的最新说明，参见{" "}
              <a href="https://designthinking.ideo.com/introduction" target="_blank" rel="noopener noreferrer">IDEO 设计思维简介（英文）</a>。
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        lang="zh"
        programme="Executive MBA"
        heading="在投入资源之前，先验证客户真正重视什么。"
      />
    </>
  );
}
