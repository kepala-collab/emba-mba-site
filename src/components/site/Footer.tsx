"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FACTS, SITE, NAV, OPERATOR } from "@/lib/content";
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
                ? `Future Ready 高管 MBA 是由 ${SITE.provider} 提供，并由 CMI 依据其专业标准批准及认可的专业发展课程；并非 MQA 认证的学术学位或受监管资格。CMI 决定会员等级、后缀称号、Chartered 评估、会员资格及费用。`
                : `The Future Ready Executive MBA is a professional development programme delivered by ${SITE.provider} and approved and endorsed by CMI against its Professional Standard. It is not an MQA-accredited academic degree or a regulated qualification. CMI controls membership grades, post-nominals, Chartered assessment, membership and fees.`}</p>
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
              <Link href="/">English site →</Link>
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
              <p><strong>课程声明：</strong>Future Ready 高管 MBA 是由 {SITE.provider} 提供，并由 CMI 依据其专业标准批准及认可的专业发展课程；并非 MQA 认证的学术学位或受监管资格。符合资格的马来西亚申请者可申请 {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} 奖学金；奖学金视名额、评估及书面批准而定，并非自动获得。HRD Corp 决定雇主资助资格及批准金额。</p>
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
        <div className="foot">
          <div>
            <h2>Programme</h2>
            {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            <Link href="/corporate-training">Corporate Training</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <h2>Popular</h2>
            <Link href="/hrd-corp-claimable">HRD Corp Claimable</Link>
            <Link href="/online-executive-mba">Online Executive MBA</Link>
            <Link href="/executive-mba-vs-mba">Executive MBA vs MBA</Link>
            <Link href="/ai-executive-mba">AI-Enabled Leadership</Link>
            <Link href="/mba-for-working-professionals">For Working Professionals</Link>
            <Link href="/executive-mba-malaysia">Executive MBA Malaysia</Link>
            <Link href="/chartered-manager-malaysia">Chartered Manager Malaysia</Link>
            <Link href="/mba-for-sme-owners">For SME Owners</Link>
            <Link href="/mba-for-entrepreneurs">For Entrepreneurs</Link>
            <Link href="/programmes/shift-hr">SHIFT! HR Workshop</Link>
            <Link href="/asian-business-consulting">About Asian Business Consulting</Link>
          </div>
          <div>
            <h2>Contact</h2>
            <span className="foot-contact">{SITE.director} · Programme Coordinator</span>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link href="/apply">Arrange a programme conversation</Link>
            <Link href="/zh">中文网站 →</Link>
            <Image src="/brand/partnership-seal.png" alt="Asian Business Consulting × Right Dots Resources — in collaboration" width={1000} height={1000} className="foot-seal" />
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
            <p><strong>Programme notice:</strong> The Future Ready Executive MBA is a professional development programme delivered by {SITE.provider} and approved and endorsed by CMI against its Professional Standard. It is not an MQA-accredited academic degree or a regulated qualification. CMI controls Foundation Chartered Manager activation, membership grades, post-nominals, Chartered assessment, membership and fees. Eligible Malaysian applicants may receive the {FACTS.scholarshipAmount} {FACTS.scholarshipProvider} scholarship, subject to availability, assessment and written approval; it is not automatic. HRD Corp decides employer funding eligibility and the approved amount.</p>
            <p><strong>Data protection:</strong> Personal data is processed by {OPERATOR.name} in accordance with Malaysia&rsquo;s Personal Data Protection Act 2010 [Act 709], as amended. See the Privacy Policy for details.</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
