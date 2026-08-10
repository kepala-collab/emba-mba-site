import Link from "next/link";
import { NAV } from "@/lib/content";
import RdrMark from "./RdrMark";

export default function Header() {
  return (
    <header className="navbar">
      <div className="wrap in">
        <Link href="/" aria-label="Right Dot Resources — Future Ready Executive MBA, home" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <RdrMark size={38} />
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
