"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_LABELS, FACTS, SITE, OPERATOR, PROGRAMME_POSITIONING_SENTENCE, PROGRAMME_POSITIONING_ZH } from "@/lib/content";
import PrivacyChoicesButton from "@/components/site/PrivacyChoicesButton";
import { isCampaignRoute } from "@/lib/locale-routes";

const LEGAL_LINKS = [
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms & Conditions"],
  ["/contact", "Legal & privacy contact"],
] as const;

const LEGAL_LINKS_ZH = [
  ["/zh/privacy", "隐私政策"],
  ["/zh/terms", "条款与条件"],
  ["/zh/contact", "法律与隐私联系"],
] as const;

export default function Footer() {
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/") || pathname.startsWith("/zh#");
  const year = new Date().getFullYear();

  if (isCampaignRoute(pathname)) {
    const legalLinks = zh ? LEGAL_LINKS_ZH : LEGAL_LINKS;
    return (
      <footer className="site campaign-footer">
        <div className="wrap">
          <section className="legal-footer" aria-label={zh ? "法律与合规信息" : "Legal and compliance information"}>
            <nav className="footer-legal-links" aria-label={zh ? "法律与隐私链接" : "Legal and privacy links"}>
              {legalLinks.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              <PrivacyChoicesButton label={zh ? "隐私选择" : "Privacy choices"} />
            </nav>
            <div className="legal-copy">
              <p>© {year} {OPERATOR.name}. {zh ? "商业注册号" : "Business Registration No."} {OPERATOR.reg}.</p>
              <p><strong>{zh ? "课程声明：" : "Programme notice:"}</strong> {zh
                ? `${PROGRAMME_POSITIONING_ZH} 这是由 ${SITE.provider} 提供的三个月专业发展课程；并非 MQA 认证的学术学位或受监管资格。CMI 决定会员等级、后缀称号、Chartered 评估、会员资格及费用。`
                : `${PROGRAMME_POSITIONING_SENTENCE} It is a three-month professional development programme delivered by ${SITE.provider}, not an MQA-accredited academic degree or a regulated qualification. CMI controls membership grades, post-nominals, Chartered assessment, membership and fees.`}</p>
              <p><strong>{zh ? "资料保护：" : "Data protection:"}</strong> {zh
                ? `个人资料由 ${OPERATOR.name} 按照马来西亚《2010 年个人资料保护法》[Act 709] 及其修订处理。`
                : `Personal data is processed by ${OPERATOR.name} in accordance with Malaysia’s Personal Data Protection Act 2010 [Act 709], as amended.`}</p>
            </div>
          </section>
        </div>
      </footer>
    );
  }

  if (zh) {
    return (
      <footer className="site">
        <div className="wrap">
          <div className="foot foot-zh">
            <div>
              <h2>联系我们</h2>
              <span className="foot-contact">{SITE.director} · 课程协调员</span>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <Link href="/zh/apply">预约课程沟通</Link>
              <Link href="/home">English site →</Link>
              <Image src="/brand/partnership-seal.png" alt="Asian Business Consulting 与 Right Dots Resources 合作" width={1000} height={1000} className="foot-seal" />
            </div>
            <div>
              <h2>课程</h2>
              <Link href="/zh/executive-mba">课程详情</Link>
              <Link href="/zh/chartered-manager-malaysia">特许经理人路线</Link>
              <Link href="/zh/curriculum">课程大纲</Link>
              <Link href="/zh/fees">学费与奖学金</Link>
              <Link href="/zh/intakes">开课日期</Link>
              <Link href="/zh/faculty">导师团队</Link>
              <Link href="/zh/resources">决策资料</Link>
              <Link href="/zh/diagnostic">课程匹配检查</Link>
              <Link href="/zh/insights/advancement-question">管理洞察</Link>
              <Link href="/zh/faq">常见问题</Link>
              <Link href="/zh/asian-business-consulting">关于 Asian Business Consulting</Link>
            </div>
          </div>
          <section className="legal-footer" aria-label="法律与合规信息">
            <nav className="footer-legal-links" aria-label="法律与隐私链接">
              {LEGAL_LINKS_ZH.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              <PrivacyChoicesButton label="隐私选择" />
            </nav>
            <div className="legal-copy">
              <p>© {year} {OPERATOR.name}。商业注册号：{OPERATOR.reg}。注册地址：{OPERATOR.address}。</p>
              <p><strong>合作伙伴声明：</strong>{OPERATOR.name} 是 {SITE.provider} 的市场推广机构，负责课程咨询、报价及报名协调。</p>
              <p><strong>课程声明：</strong>{PROGRAMME_POSITIONING_ZH} 这是由 {SITE.provider} 提供的三个月专业发展课程；并非 MQA 认证的学术学位或受监管资格。符合资格的马来西亚申请者可申请 {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} 奖学金；奖学金视名额、评估及书面批准而定，并非自动获得。HRD Corp 决定雇主资助资格及批准金额。</p>
              <p><strong>资料保护：</strong>个人资料由 {OPERATOR.name} 按照马来西亚《2010 年个人资料保护法》[Act 709] 及其修订处理。详情请参阅隐私政策。</p>
            </div>
          </section>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot foot-directory">
          <div>
            <h2>For you</h2>
            <Link href="/executive-mba">Programme overview</Link>
            <Link href="/how-it-works">How the programme works</Link>
            <Link href="/curriculum">Curriculum</Link>
            <Link href="/fees">Fees and scholarship</Link>
            <Link href="/intakes">2026 dates</Link>
            <Link href="/chartered-manager-malaysia">CMI recognition</Link>
          </div>
          <div>
            <h2>For your company</h2>
            <Link href="/executive-mba">Sponsor a participant</Link>
            <Link href="/hrd-corp-claimable">Employer-led HRD Corp funding</Link>
            <Link href="/intakes">English and Mandarin intakes</Link>
            <Link href="/apply?intent=employer_evaluating">{CTA_LABELS.company}</Link>
          </div>
          <div>
            <h2>Guides</h2>
            <Link href="/resources">Decision resources</Link>
            <Link href="/diagnostic">Programme fit check</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/insights/executive-education-vs-executive-mba">Executive education vs Executive MBA</Link>
            <Link href="/faq">Frequently asked questions</Link>
          </div>
          <div>
            <h2>The firm</h2>
            <Link href="/about">About the programme team</Link>
            <Link href="/asian-business-consulting">Asian Business Consulting</Link>
            <Link href="/faculty">Faculty</Link>
            <span className="foot-contact">{SITE.director} · Programme Coordinator</span>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link href="/apply">{CTA_LABELS.conversation}</Link>
            <Link href="/zh">中文网站 →</Link>
            <Image src="/brand/partnership-seal.png" alt="Asian Business Consulting and Right Dots Resources in collaboration" width={1000} height={1000} className="foot-seal" />
          </div>
        </div>
        <section className="legal-footer" aria-label="Legal and compliance information">
          <nav className="footer-legal-links" aria-label="Legal and privacy links">
            {LEGAL_LINKS.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            <PrivacyChoicesButton label="Privacy choices" />
          </nav>
          <div className="legal-copy">
            <p>© {year} {OPERATOR.name}. Business Registration No. {OPERATOR.reg}. Registered business address: {OPERATOR.address}.</p>
            <p><strong>Partner notice:</strong> {OPERATOR.name} is the {OPERATOR.role}, handling programme enquiries, pricing and enrolment coordination.</p>
            <p><strong>Programme notice:</strong> {PROGRAMME_POSITIONING_SENTENCE} It is a three-month professional development programme delivered by {SITE.provider}, not an MQA-accredited academic degree or a regulated qualification. CMI controls Foundation Chartered Manager activation, membership grades, post-nominals, Chartered assessment, membership and fees. Eligible Malaysian applicants may receive the {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} scholarship, subject to availability, assessment and written approval; it is not automatic. HRD Corp decides employer funding eligibility and the approved amount.</p>
            <p><strong>Data protection:</strong> Personal data is processed by {OPERATOR.name} in accordance with Malaysia&rsquo;s Personal Data Protection Act 2010 [Act 709], as amended. See the Privacy Policy for details.</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
