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
    "写给领导者的设计思维实战指南：读懂客户、界定真问题、快速做原型，并在渴望度、可行性与商业可行性之间找到平衡。",
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
    "读懂客户、界定对的问题、快速做原型，并在渴望度、可行性与商业可行性之间取得平衡的实战指南。",
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
              产品做得再精致，也可能对准了错误的问题。设计思维正是为化解这个风险而生——
              它以人为本、小步快跑，从客户的真实需求出发，而非从内部的想当然出发；
              把每一个想法都当作有待验证的假设，而不是急于捍卫的结论。
            </p>
          </Reveal>

          <div className="prose" style={{ maxWidth: "68ch", marginTop: 40 }}>
            <h2>设计思维到底是什么</h2>
            <p>
              设计思维把设计师的工作习惯提炼成一套通用方法，用来对付复杂而模糊的难题。
              它的核心动作说来简单：从您要服务的人入手，仔细观察他们的真实处境，
              让眼前的事实来塑造方案——而不是先认定一个自己中意的方案，
              再回过头去找市场替它背书。
            </p>
            <p>
              这套方法有意反复打磨，而不是一条道走到底。团队在全面上线之前，
              先用低成本原型验证假设，再依据看到的证据调整方向。
              先带着好奇、后形成信念——这正是它与传统规划的分水岭。
            </p>

            <blockquote>
              关键不在于爱上自己的想法，而在于爱上问题本身，并守住这份专注，直到真正把它看透。
            </blockquote>

            <h2>企业场景中的五个阶段</h2>
            <p>
              经典模型分为五个阶段。它们是您可以来回切换的工作模式，而不是走完一遍就打勾的流程。
            </p>
            <ul>
              <li>
                <strong>同理。</strong> 走近您所服务的人——访谈、观察，
                花时间摸清他们的工作流程。先用他们自己的话理解他们的感受与难处，
                再决定该解决什么。
              </li>
              <li>
                <strong>界定。</strong> 把听来的内容提炼成一句精准、以人为核心的问题陈述。
                一句到位的界定——比如“忙碌的临床医生每个班次要花二十分钟核对记录”——
                远比“提升效率”这种空泛的指令管用。
              </li>
              <li>
                <strong>构思。</strong> 先发散，再收敛。这一步要的是选项够多、够不一样；
                判断留到手上有了好几个方案再说，目的是跳出第一个冒出来的显而易见的答案。
              </li>
              <li>
                <strong>制作原型。</strong> 用最低的成本把想法做实——一张草图、
                一个能点的模型，或者亲手把服务流程走一遍。原型是被具象化的提问，
                而不是缩小版的成品。
              </li>
              <li>
                <strong>测试。</strong> 把原型摆到真实用户面前，看他们实际怎么做，
                而不只是听他们怎么说。每一轮测试都会回流到同理与界定，开启新一圈循环。
              </li>
            </ul>

            <h2>为什么对领导者与战略至关重要</h2>
            <p>
              对高管来说，设计思维的价值在商业，而非在美学。它系统性地压低了一项关键风险：
              辛苦打造出客户根本不会选的东西。靠着及早引入证据，它把失败发生的时点，
              从代价高昂的正式上线，提前到几乎不花钱的原型阶段。
            </p>
            <p>
              它还用一个简单而严谨的视角，把创造力与商业逻辑打通。
              一项站得住脚的创新，必须同时闯过三关：
            </p>
            <ul>
              <li>
                <strong>渴望度</strong>——人们是不是真的想要它？（人的问题）
              </li>
              <li>
                <strong>可行性</strong>——我们是不是真的做得出来、交付得了？（技术问题）
              </li>
              <li>
                <strong>商业可行性</strong>——它能不能撑起一门可持续的生意？（商业问题）
              </li>
            </ul>
            <p>
              设计思维的长项恰在渴望度，而这偏偏是传统战略最薄弱的一环——
              领导者的本事，是把三者一并拿捏，而不是顾此失彼，只优化一项、牺牲另外两项。
            </p>

            <h3>回到客户真正想“搞定”的那件事</h3>
            <p>
              设想一家中端银行，正把年轻客户一个个丢给金融科技应用。
              直觉反应是加入功能军备竞赛：多加预算图表、重做仪表板、把上线节奏提速。
              可真正坐下来做几场客户访谈，往往会浮现出另一件事。
              客户买的不是图表；他们“雇”这项服务，是为回答一个让他们心里发慌的问题——
              “这笔钱我现在花得起吗，回头会不会冒出意外的坏消息？”
            </p>
            <p>
              这样一重新界定，问题就不再是界面本身，而是掏钱那一刻的信心与清晰。
              仅仅这一转念，就掉转了整条产品路线图的方向——转向实时的可负担性提示、
              一看就懂的提醒——而不是一堆在会议室里测得漂亮、一到实战就掉链子的功能。
              客户群没变，手上的数据也没变，变的只是团队把客户真正要办的事看得更准了。
            </p>

            <h2>常见的坑</h2>
            <ul>
              <li>
                <strong>跳过客户研究。</strong> 一上来就构思，很容易把内部的臆测当成客户的需求。
              </li>
              <li>
                <strong>原型做得太迟。</strong> 第一版原型做得太精细，
                会在关键假设还没验证之前，就把掉头的成本抬高。
              </li>
              <li>
                <strong>把它当成一场工作坊表演。</strong> 便利贴和外出团建，
                本身算不上方法。只有当洞察真正左右了资源怎么投、产品要不要上、项目该不该停，
                设计思维才谈得上有价值。
              </li>
            </ul>

            <h2>从会用到用得得心应手</h2>
            <p>
              设计整合思维，是{" "}
              <Link href="/zh/how-it-works">Future Ready Executive MBA</Link>{" "}
              F.A.S.T. 方法七个思维学科之一，与前文的
              Jobs-To-Be-Done、以及渴望度、可行性、商业可行性框架并列——
              课程不是把它当理论来讲，而是当作一件您能直接用在自家战略课题上的工具来教。
              如果您希望自己主导的创新经得起真实客户的检验，
              <Link href="/zh/executive-mba">Executive MBA</Link>{" "}
              课程会帮您把这套方法练成一种本能。
            </p>
            <h2>资料来源与延伸阅读</h2>
            <p>
              关于渴望度、可行性、商业可行性这套经典框架，以及 IDEO 对这套迭代方法的最新阐述，参见{" "}
              <a href="https://designthinking.ideo.com/introduction" target="_blank" rel="noopener noreferrer">IDEO 设计思维简介（英文）</a>。
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        lang="zh"
        programme="Executive MBA"
        heading="投入资源之前，先弄清客户真正在乎什么。"
      />
    </>
  );
}
