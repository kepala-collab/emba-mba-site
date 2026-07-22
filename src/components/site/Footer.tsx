import Link from "next/link";
import Image from "next/image";
import { SITE, COMPLIANCE, NAV, OPERATOR } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ flex: "none", width: 40, height: 40, borderRadius: "50%", overflow: "hidden", background: "#fff", border: "1px solid var(--line-2)" }}>
                <Image src={OPERATOR.logo} alt={OPERATOR.name} width={48} height={48} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
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
            <a>{SITE.director} · Programme Director</a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link href="/apply">Apply Now</Link>
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 24 }}>
          {[["/about", "About"], ["/contact", "Contact"], ["/privacy", "Privacy Policy"], ["/terms", "Terms & Conditions"]].map(([href, label]) => (
            <Link key={href} href={href} style={{ color: "var(--ink-2)", fontSize: ".86rem" }}>{label}</Link>
          ))}
        </div>
        <p className="fine" style={{ marginTop: 16 }}>
          © {new Date().getFullYear()} {OPERATOR.name} (Reg. No. {OPERATOR.reg}). {OPERATOR.address}.
        </p>
        <p className="fine" style={{ marginTop: 8 }}>{COMPLIANCE}</p>
      </div>
    </footer>
  );
}
