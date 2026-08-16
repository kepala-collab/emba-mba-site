"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type MouseEvent as ReactMouseEvent } from "react";
import { NAV } from "@/lib/content";
import { isCampaignRoute, pairedRoute } from "@/lib/locale-routes";
import { useFloatingUi } from "@/components/site/FloatingUiContext";
import RdrMark from "./RdrMark";

const NAV_ZH = [
  { href: "/zh/executive-mba", label: "课程详情" },
  { href: "/zh/how-it-works", label: "课程方法" },
  { href: "/zh/curriculum", label: "课程大纲" },
  { href: "/zh/chartered-manager-malaysia", label: "CMI 认可" },
  { href: "/zh/fees", label: "学费" },
  { href: "/zh/intakes", label: "开课日期" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/") || pathname.startsWith("/zh#");
  const homeHref = zh ? "/zh" : "/";
  const applyHref = zh ? "/zh/apply" : "/apply";
  const links = zh ? NAV_ZH : NAV;
  const pair = pairedRoute(pathname);
  const languageHref = zh ? (pair?.en || "/") : (pair?.zh || "/zh");
  const {
    navigationOpen: menuOpen,
    setNavigationOpen: setMenuOpen,
    setAssistantOpen,
  } = useFloatingUi();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inertTargets = [
      ...document.querySelectorAll<HTMLElement>(
        "main,footer,.wa-float,.programme-assistant-launcher,.consent-banner,.navbar .brand-link,.navbar .mobile-navcta"
      ),
    ];
    const previousInert = inertTargets.map((target) => target.inert);
    inertTargets.forEach((target) => { target.inert = true; });
    panelRef.current?.querySelector<HTMLElement>("button,a")?.focus();

    const closeForDesktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = [...panelRef.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled])")];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    closeForDesktop.addEventListener("change", onDesktop);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      inertTargets.forEach((target, index) => { target.inert = previousInert[index]; });
      closeForDesktop.removeEventListener("change", onDesktop);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const handleApplyClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    const isPlainActivation =
      event.button === 0 &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey;

    if (pathname !== applyHref || !isPlainActivation) return;

    event.preventDefault();
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior });
    });
  };

  if (isCampaignRoute(pathname)) {
    return (
      <header className="navbar campaign-navbar">
        <div className="wrap in">
          <Link className="brand-link" href={homeHref} aria-label="Future Ready EMBA — Right Dots Resources, home">
            <RdrMark size={38} />
            <span className="brand-title">
              <span className="brand-prefix">Future&nbsp;Ready</span>{" "}<span className="acc brand-product">EMBA</span>
            </span>
          </Link>
          <nav className="campaign-nav-actions" aria-label={zh ? "课程资料操作" : "Programme plan actions"}>
            <Link href={languageHref} className="langswitch" aria-label={zh ? "Switch to English" : "切换到中文"}>
              {zh ? "EN" : "中文"}
            </Link>
            <a href="#apply" className="navcta" data-track-event="cta_click" data-track-id="campaign_header_plan" data-track-location="campaign_header">
              {zh ? "获取 2026 课程资料" : "Get the 2026 programme plan"}
            </a>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={`navbar${menuOpen ? " menu-open" : ""}`}>
        <div className="wrap in">
          <Link className="brand-link" href={homeHref} aria-label="Future Ready EMBA — Right Dots Resources, home">
            <RdrMark size={38} />
            <span className="brand-title">
              <span className="brand-prefix">Future&nbsp;Ready</span>{" "}<span className="acc brand-product">EMBA</span>
            </span>
          </Link>
          <nav className="navlinks desktop-nav" aria-label={zh ? "主导航" : "Primary navigation"}>
            {links.map((n) => (
              <Link key={n.href} href={n.href} className={isActive(n.href) ? "is-active" : undefined} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link>
            ))}
            <Link href={languageHref} className="langswitch" aria-label={zh ? "Switch to English" : "切换到中文"}>
              {zh ? "EN" : "中文"}
            </Link>
            <Link href={applyHref} className="navcta" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="header_apply" data-track-location="header">{zh ? "索取课程资料" : "Get Programme Guide"}</Link>
          </nav>
          <div className="mobile-header-actions">
            <Link href={applyHref} className="navcta mobile-navcta" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="mobile_header_apply" data-track-location="mobile_header">{zh ? "索取资料" : "Get Guide"}</Link>
            <button
              ref={toggleRef}
              className="mobile-menu-toggle"
              type="button"
              aria-label={menuOpen ? (zh ? "关闭菜单" : "Close menu") : (zh ? "打开菜单" : "Open menu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="menu-icon" aria-hidden="true"><i /><i /></span>
              <span>{menuOpen ? (zh ? "关闭" : "Close") : (zh ? "菜单" : "Menu")}</span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <button
            className="mobile-nav-backdrop"
            type="button"
            aria-label={zh ? "关闭菜单" : "Close menu"}
            onClick={() => { closeMenu(); toggleRef.current?.focus(); }}
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label={zh ? "移动导航" : "Mobile navigation"}
          >
            <div className="mobile-nav-head">
              <p className="mono mobile-nav-label">{zh ? "浏览课程" : "Explore the programme"}</p>
              <button className="mobile-panel-close" type="button" onClick={() => { closeMenu(); toggleRef.current?.focus(); }}>
                <span>{zh ? "关闭" : "Close"}</span><span aria-hidden="true">×</span>
              </button>
            </div>
            <nav aria-label={zh ? "移动主导航" : "Mobile primary navigation"}>
              {links.map((n, index) => (
                <Link key={n.href} href={n.href} onClick={closeMenu} aria-current={isActive(n.href) ? "page" : undefined}>
                  <span className="mobile-nav-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{n.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
            <div className="mobile-nav-footer">
              <Link href={languageHref} className="mobile-language" onClick={closeMenu}>
                <span>{zh ? "English site" : "中文网站"}</span><span aria-hidden="true">→</span>
              </Link>
              <button
                type="button"
                className="btn btn-ghost mobile-assistant-action"
                onClick={() => setAssistantOpen(true)}
                data-track-event="chat_open"
                data-track-id="mobile_menu_assistant"
                data-track-location="mobile_navigation"
              >
                {zh ? "询问课程助手 →" : "Ask the programme assistant →"}
              </button>
              <Link href={applyHref} className="btn btn-primary" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="mobile_menu_apply" data-track-location="mobile_navigation">
                {zh ? "索取课程资料 →" : "Request the programme guide →"}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
