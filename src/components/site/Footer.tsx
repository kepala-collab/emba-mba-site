"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_LABELS, FACTS, SITE, OPERATOR, PROGRAMME_POSITIONING_MS, PROGRAMME_POSITIONING_SENTENCE, PROGRAMME_POSITIONING_ZH } from "@/lib/content";
import { localeOfPath } from "@/lib/locale-routes";
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

const LEGAL_LINKS_MS = [
  ["/ms/privacy", "Dasar Privasi"],
  ["/ms/terms", "Terma & Syarat"],
  ["/ms/contact", "Hubungan undang-undang & privasi"],
] as const;

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = localeOfPath(pathname);
  const zh = locale === "zh";
  const ms = locale === "ms";
  const year = new Date().getFullYear();

  if (isCampaignRoute(pathname)) {
    const legalLinks = zh ? LEGAL_LINKS_ZH : ms ? LEGAL_LINKS_MS : LEGAL_LINKS;
    return (
      <footer className="site campaign-footer">
        <div className="wrap">
          <section className="legal-footer" aria-label={zh ? "法律与合规信息" : ms ? "Maklumat undang-undang dan pematuhan" : "Legal and compliance information"}>
            <nav className="footer-legal-links" aria-label={zh ? "法律与隐私链接" : ms ? "Pautan undang-undang dan privasi" : "Legal and privacy links"}>
              {legalLinks.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              <PrivacyChoicesButton label={zh ? "隐私选择" : ms ? "Pilihan privasi" : "Privacy choices"} />
            </nav>
            <div className="legal-copy">
              <p>© {year} {OPERATOR.name}. {zh ? "商业注册号" : ms ? "No. Pendaftaran Perniagaan" : "Business Registration No."} {OPERATOR.reg}.</p>
              <p><strong>{zh ? "课程声明：" : ms ? "Notis program:" : "Programme notice:"}</strong> {zh
                ? `${PROGRAMME_POSITIONING_ZH} 这是由 ${SITE.provider} 提供的三个月专业发展课程；并非 MQA 认证的学术学位或受监管资格。CMI 决定会员等级、后缀称号、Chartered 评估、会员资格及费用。`
                : ms
                  ? `${PROGRAMME_POSITIONING_MS} Ini ialah program pembangunan profesional tiga bulan yang dikendalikan oleh ${SITE.provider}, bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia. CMI menentukan gred keahlian, gelaran pasca-nama, penilaian Chartered, keahlian dan yuran.`
                  : `${PROGRAMME_POSITIONING_SENTENCE} It is a three-month professional development programme delivered by ${SITE.provider}, not an MQA-accredited academic degree or a regulated qualification. CMI controls membership grades, post-nominals, Chartered assessment, membership and fees.`}</p>
              <p><strong>{zh ? "资料保护：" : ms ? "Perlindungan data:" : "Data protection:"}</strong> {zh
                ? `个人资料由 ${OPERATOR.name} 按照马来西亚《2010 年个人资料保护法》[Act 709] 及其修订处理。`
                : ms
                  ? `Data peribadi diproses oleh ${OPERATOR.name} menurut Akta Perlindungan Data Peribadi 2010 [Akta 709] Malaysia, seperti yang dipinda.`
                  : `Personal data is processed by ${OPERATOR.name} in accordance with Malaysia’s Personal Data Protection Act 2010 [Act 709], as amended.`}</p>
            </div>
          </section>
        </div>
      </footer>
    );
  }

  if (ms) {
    return (
      <footer className="site">
        <div className="wrap">
          <div className="foot foot-zh">
            <div>
              <h2>Hubungi kami</h2>
              <span className="foot-contact">{SITE.director} · Penyelaras Program</span>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <Link href="/ms/apply">Aturkan perbualan program</Link>
              <Link href="/home">English site →</Link>
              <Link href="/zh">中文网站 →</Link>
              <Image src="/brand/partnership-seal.png" alt="Asian Business Consulting dan Right Dots Resources dalam kerjasama" width={1000} height={1000} className="foot-seal" />
            </div>
            <div>
              <h2>Program</h2>
              <Link href="/ms/executive-mba">Butiran program</Link>
              <Link href="/ms/chartered-manager-malaysia">Laluan Chartered Manager</Link>
              <Link href="/ms/curriculum">Kurikulum</Link>
              <Link href="/ms/fees">Yuran dan biasiswa</Link>
              <Link href="/ms/intakes">Tarikh kohort</Link>
              <Link href="/ms/faculty">Barisan fasilitator</Link>
              <Link href="/ms/resources">Bahan keputusan</Link>
              <Link href="/ms/diagnostic">Semakan kesesuaian program</Link>
              <Link href="/ms/insights/advancement-question">Wawasan pengurusan</Link>
              <Link href="/ms/faq">Soalan lazim</Link>
              <Link href="/ms/asian-business-consulting">Tentang Asian Business Consulting</Link>
            </div>
          </div>
          <section className="legal-footer" aria-label="Maklumat undang-undang dan pematuhan">
            <nav className="footer-legal-links" aria-label="Pautan undang-undang dan privasi">
              {LEGAL_LINKS_MS.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              <PrivacyChoicesButton label="Pilihan privasi" />
            </nav>
            <div className="legal-copy">
              <p>© {year} {OPERATOR.name}. No. Pendaftaran Perniagaan {OPERATOR.reg}. Alamat perniagaan berdaftar: {OPERATOR.address}.</p>
              <p><strong>Notis rakan kongsi:</strong> {OPERATOR.name} ialah rakan kongsi bersekutu {SITE.provider}, menguruskan pertanyaan program, harga dan penyelarasan pendaftaran.</p>
              <p><strong>Notis program:</strong> {PROGRAMME_POSITIONING_MS} Ini ialah program pembangunan profesional tiga bulan yang dikendalikan oleh {SITE.provider}; bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia. Pemohon Malaysia yang layak boleh memohon biasiswa {FACTS.scholarshipAmount} {FACTS.scholarshipProvider}; biasiswa tertakluk pada kekosongan, penilaian dan kelulusan bertulis, dan tidak automatik. HRD Corp menentukan kelayakan pembiayaan majikan dan jumlah yang diluluskan.</p>
              <p><strong>Perlindungan data:</strong> Data peribadi diproses oleh {OPERATOR.name} menurut Akta Perlindungan Data Peribadi 2010 [Akta 709] Malaysia, seperti yang dipinda. Lihat Dasar Privasi untuk butiran.</p>
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
              <Link href="/ms">Laman Bahasa Melayu →</Link>
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
            <Link href="/ms">Laman Bahasa Melayu →</Link>
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
