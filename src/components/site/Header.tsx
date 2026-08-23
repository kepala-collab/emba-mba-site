"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type MouseEvent as ReactMouseEvent, type SyntheticEvent } from "react";
import { CTA_LABELS, NAV, type NavItem } from "@/lib/content";
import { isCampaignRoute, pairedRoute } from "@/lib/locale-routes";
import { useFloatingUi } from "@/components/site/FloatingUiContext";
import RdrMark from "./RdrMark";

const NAV_ZH: NavItem[] = [
  { href: "/zh/executive-mba", label: "课程", children: [
    { href: "/zh/executive-mba", label: "课程详情" },
    { href: "/zh/how-it-works", label: "课程方法" },
    { href: "/zh/curriculum", label: "课程大纲" },
  ] },
  { href: "/zh/chartered-manager-malaysia", label: "认可与团队", children: [
    { href: "/zh/chartered-manager-malaysia", label: "CMI 认可" },
    { href: "/zh/faculty", label: "师资与导师" },
    { href: "/zh/asian-business-consulting", label: "Asian Business Consulting" },
    { href: "/zh/contact", label: "联系 Future Ready 高管 MBA" },
  ] },
  { href: "/zh/fees", label: "学费与日期", children: [
    { href: "/zh/fees", label: "学费与奖学金" },
    { href: "/zh/intakes", label: "2026 开课日期" },
  ] },
  { href: "/zh/resources", label: "指南与帮助", children: [
    { href: "/zh/resources", label: "课程资料" },
    { href: "/zh/faq", label: "常见问题" },
    { href: "/zh/diagnostic", label: "课程适合度检查" },
  ] },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const zh = pathname === "/zh" || pathname.startsWith("/zh/") || pathname.startsWith("/zh#");
  const homeHref = zh ? "/zh" : "/home";
  const applyHref = zh ? "/zh/apply" : "/apply";
  const links = zh ? NAV_ZH : NAV;
  const pair = pairedRoute(pathname);
  const languageHref = zh ? (pair?.en || "/home") : (pair?.zh || "/zh");
  const {
    navigationOpen: menuOpen,
    setNavigationOpen: setMenuOpen,
    setAssistantOpen,
  } = useFloatingUi();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    document.querySelectorAll<HTMLDetailsElement>(".nav-dropdown[open]").forEach((item) => { item.open = false; });
  }, [pathname]);

  useEffect(() => {
    const closeDropdowns = () => {
      desktopNavRef.current?.querySelectorAll<HTMLDetailsElement>(".nav-dropdown[open]").forEach((item) => { item.open = false; });
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) closeDropdowns();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const activeSummary = desktopNavRef.current?.querySelector<HTMLElement>(".nav-dropdown[open] summary");
      closeDropdowns();
      activeSummary?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

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

    const closeForDesktop = window.matchMedia("(min-width: 1121px)");
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
  const isGroupActive = (item: NavItem) => {
    const programmeAudienceRoute = item.href === "/executive-mba" && (
      pathname.startsWith("/mba-for-") || pathname === "/ai-executive-mba"
    );
    return programmeAudienceRoute || isActive(item.href) || Boolean(item.children?.some((child) => isActive(child.href)));
  };
  const handleDropdownToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    const current = event.currentTarget;
    if (!current.open) return;
    desktopNavRef.current?.querySelectorAll<HTMLDetailsElement>(".nav-dropdown[open]").forEach((item) => {
      if (item !== current) item.open = false;
    });
  };
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
          <Link className="brand-link" href={homeHref} aria-label="Future Ready EMBA home">
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
              {zh ? CTA_LABELS.zh.guide : CTA_LABELS.guide}
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
          <Link className="brand-link" href={homeHref} aria-label="Future Ready EMBA home">
            <RdrMark size={38} />
            <span className="brand-title">
              <span className="brand-prefix">Future&nbsp;Ready</span>{" "}<span className="acc brand-product">EMBA</span>
            </span>
          </Link>
          <nav ref={desktopNavRef} className="navlinks desktop-nav" aria-label={zh ? "主导航" : "Primary navigation"}>
            <Link href={homeHref} className={pathname === homeHref ? "is-active" : undefined} aria-current={pathname === homeHref ? "page" : undefined}>
              {zh ? "首页" : "Home"}
            </Link>
            {links.map((n) => n.children ? (
              <details className="nav-dropdown" key={n.href} onToggle={handleDropdownToggle}>
                <summary className={isGroupActive(n) ? "is-active" : undefined}>{n.label}<span aria-hidden="true">⌄</span></summary>
                <div className="nav-dropdown-panel">
                  {n.children.map((child) => <Link key={child.href} href={child.href} className={isActive(child.href) ? "is-active" : undefined} aria-current={pathname === child.href ? "page" : undefined}>{child.label}</Link>)}
                </div>
              </details>
            ) : (
              <Link key={n.href} href={n.href} className={isActive(n.href) ? "is-active" : undefined} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link>
            ))}
            <Link href={languageHref} className="langswitch" aria-label={zh ? "Switch to English" : "切换到中文"}>
              {zh ? "EN" : "中文"}
            </Link>
            <Link href={applyHref} className="navcta" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="header_apply" data-track-location="header">{zh ? "获取指南" : "Get the guide"}</Link>
          </nav>
          <div className="mobile-header-actions">
            <Link href={applyHref} className="navcta mobile-navcta" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="mobile_header_apply" data-track-location="mobile_header">{zh ? "获取指南" : "Get guide"}</Link>
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
              <Link className="mobile-nav-home" href={homeHref} onClick={closeMenu} aria-current={pathname === homeHref ? "page" : undefined}>
                <span className="mobile-nav-index">00</span>
                <span>{zh ? "首页" : "Home"}</span>
                <span aria-hidden="true">↗</span>
              </Link>
              {links.map((n, index) => (
                <div className="mobile-nav-group" key={n.href}>
                  <Link href={n.href} onClick={closeMenu} aria-current={pathname === n.href ? "page" : undefined}>
                    <span className="mobile-nav-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{n.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                  {n.children?.map((child) => <Link className="mobile-nav-child" key={child.href} href={child.href} onClick={closeMenu} aria-current={pathname === child.href ? "page" : undefined}><span aria-hidden="true">—</span><span>{child.label}</span><span aria-hidden="true">↗</span></Link>)}
                </div>
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
                {zh ? `${CTA_LABELS.zh.guide} →` : `${CTA_LABELS.guide} →`}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
