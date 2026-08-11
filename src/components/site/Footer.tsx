"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RdrMark from "./RdrMark";
import { SITE, COMPLIANCE, NAV, OPERATOR } from "@/lib/content";

const COMPLIANCE_ZH =
  "本课程并非受监管的学历资格，也未经 MQA 认证；这是一项由英国特许管理协会（CMI）认可的专业课程。符合条件的马来西亚雇主可通过 HRD Corp 申请索赔。马来西亚学员可享奖学金。个人资料依据马来西亚 2010 年个人资料保护法（PDPA）处理。";

export default function Footer() {
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/") || pathname.startsWith("/zh#");
  const year = new Date().getFullYear();

  if (zh) {
    return (
      <footer className="site">
        <div className="wrap">
          <div className="foot" style={{ gridTemplateColumns: "1.6fr 1fr" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <RdrMark size={40} />
                <strong style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.05rem" }}>{OPERATOR.name}</strong>
              </div>
              <p>
                本网站由 {OPERATOR.name} 运营 —— Future Ready 高管 MBA 的授权招生伙伴。本课程由 {SITE.provider} 提供，
                并获英国特许管理协会（CMI）认可。
              </p>
            </div>
            <div>
              <h4>联系我们</h4>
              <span className="foot-contact">{SITE.director} · 课程协调员</span>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <Link href="/zh#apply">立即报名</Link>
              <Link href="/">English site →</Link>
            </div>
          </div>
          <p className="fine" style={{ marginTop: 16 }}>
            © {year} {OPERATOR.name}（注册号 {OPERATOR.reg}）。{OPERATOR.address}。
          </p>
          <p className="fine" style={{ marginTop: 8 }}>{COMPLIANCE_ZH}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <RdrMark size={40} />
              <strong style={{ color: "#fff", fontFamily: "var(--font-fraunces)", fontSize: "1.05rem" }}>{OPERATOR.name}</strong>
            </div>
            <p>
              This site is operated by {OPERATOR.name}, an authorised marketing &amp; enrolment partner for the
              Future Ready Executive MBA — a CMI (UK)-endorsed programme delivered by {SITE.provider}.
            </p>
          </div>
          <div>
            <h4>Programme</h4>
            {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            <Link href="/corporate-training">Corporate Training</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <h4>Popular</h4>
            <Link href="/hrd-corp-claimable">HRD Corp Claimable</Link>
            <Link href="/online-executive-mba">Online Executive MBA</Link>
            <Link href="/executive-mba-vs-mba">Executive MBA vs MBA</Link>
            <Link href="/ai-executive-mba">AI-Ready MBA</Link>
            <Link href="/mba-for-working-professionals">For Working Professionals</Link>
            <Link href="/executive-mba-malaysia">Executive MBA Malaysia</Link>
            <Link href="/mba-for-sme-owners">For SME Owners</Link>
            <Link href="/mba-for-entrepreneurs">For Entrepreneurs</Link>
            <Link href="/programmes/shift-hr">SHIFT! HR Workshop</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <span className="foot-contact">{SITE.director} · Programme Coordinator</span>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link href="/apply">Apply Now</Link>
            <Link href="/zh">中文网站 →</Link>
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 24 }}>
          {[["/about", "About"], ["/contact", "Contact"], ["/privacy", "Privacy Policy"], ["/terms", "Terms & Conditions"]].map(([href, label]) => (
            <Link key={href} href={href} style={{ color: "var(--ink-2)", fontSize: ".86rem" }}>{label}</Link>
          ))}
        </div>
        <p className="fine" style={{ marginTop: 16 }}>
          © {year} {OPERATOR.name} (Reg. No. {OPERATOR.reg}). {OPERATOR.address}.
        </p>
        <p className="fine" style={{ marginTop: 8 }}>{COMPLIANCE}</p>
      </div>
    </footer>
  );
}
