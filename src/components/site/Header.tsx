"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content";
import RdrMark from "./RdrMark";

// Chinese single-page funnel nav → anchors within /zh
const NAV_ZH = [
  { href: "/zh#programme", label: "课程详情" },
  { href: "/zh#method", label: "教学方法" },
  { href: "/zh#credential", label: "证书" },
  { href: "/zh#fees", label: "学费" },
  { href: "/zh#intakes", label: "开课日期" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/") || pathname.startsWith("/zh#");
  const homeHref = zh ? "/zh" : "/";
  const applyHref = zh ? "/zh#apply" : "/apply";

  return (
    <header className="navbar">
      <div className="wrap in">
        <Link href={homeHref} aria-label="Right Dot Resources — Future Ready Executive MBA, home" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <RdrMark size={38} />
          <span style={{ fontFamily: "var(--font-fraunces)", fontWeight: 600, fontSize: "1.05rem", color: "#fff", lineHeight: 1, letterSpacing: "-.01em" }}>
            Future&nbsp;Ready <span style={{ color: "var(--crimson)" }}>EMBA</span>
          </span>
        </Link>
        <nav className="navlinks">
          {(zh ? NAV_ZH : NAV).map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Link href={zh ? "/" : "/zh"} className="langswitch" aria-label={zh ? "Switch to English" : "切换到中文"} style={{ letterSpacing: ".02em" }}>
            {zh ? "EN" : "中文"}
          </Link>
          <Link href={applyHref} className="navcta">{zh ? "立即报名" : "Apply Now"}</Link>
        </nav>
      </div>
    </header>
  );
}
