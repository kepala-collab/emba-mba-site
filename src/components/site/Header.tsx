import Link from "next/link";
import Image from "next/image";
import { NAV, OPERATOR } from "@/lib/content";

export default function Header() {
  return (
    <header className="navbar">
      <div className="wrap in">
        <Link href="/" aria-label="Future Ready Executive MBA — home" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <span style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", background: "#fff", border: "1px solid var(--line-2)", flex: "none" }}>
            <Image src={OPERATOR.logo} alt="" width={44} height={44} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
          </span>
          <span style={{ fontFamily: "var(--font-fraunces)", fontWeight: 600, fontSize: "1.05rem", color: "#fff", lineHeight: 1, letterSpacing: "-.01em" }}>
            Future&nbsp;Ready <span style={{ color: "var(--crimson)" }}>EMBA</span>
          </span>
        </Link>
        <nav className="navlinks">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Link href="/apply" className="navcta">Apply Now</Link>
        </nav>
      </div>
    </header>
  );
}
