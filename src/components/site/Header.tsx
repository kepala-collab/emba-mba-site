"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type MouseEvent as ReactMouseEvent, type SyntheticEvent } from "react";
import { CTA_LABELS, NAV, type NavItem } from "@/lib/content";
import { isCampaignRoute, localeOfPath, pairedRoute, type SiteLocale } from "@/lib/locale-routes";
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

const NAV_MS: NavItem[] = [
  { href: "/ms/executive-mba", label: "Program", children: [
    { href: "/ms/executive-mba", label: "Butiran program" },
    { href: "/ms/how-it-works", label: "Kaedah program" },
    { href: "/ms/curriculum", label: "Kurikulum" },
  ] },
  { href: "/ms/chartered-manager-malaysia", label: "Pengiktirafan & Pasukan", children: [
    { href: "/ms/chartered-manager-malaysia", label: "Pengiktirafan CMI" },
    { href: "/ms/faculty", label: "Fasilitator" },
    { href: "/ms/asian-business-consulting", label: "Asian Business Consulting" },
    { href: "/ms/contact", label: "Hubungi Future Ready EMBA" },
  ] },
  { href: "/ms/fees", label: "Yuran & Tarikh", children: [
    { href: "/ms/fees", label: "Yuran & biasiswa" },
    { href: "/ms/intakes", label: "Tarikh 2026" },
  ] },
  { href: "/ms/resources", label: "Panduan & Bantuan", children: [
    { href: "/ms/resources", label: "Bahan program" },
    { href: "/ms/faq", label: "Soalan lazim" },
    { href: "/ms/diagnostic", label: "Semakan kesesuaian" },
  ] },
];

const HEADER_UI = {
  en: { home: "Home", getGuide: "Get the guide", getGuideShort: "Get guide", menu: "Menu", close: "Close",
    openMenu: "Open menu", closeMenu: "Close menu", explore: "Explore the programme",
    assistant: "Ask the programme assistant →", primaryNav: "Primary navigation", mobileNav: "Mobile navigation",
    mobilePrimaryNav: "Mobile primary navigation", campaignNav: "Programme plan actions" },
  zh: { home: "首页", getGuide: "获取指南", getGuideShort: "获取指南", menu: "菜单", close: "关闭",
    openMenu: "打开菜单", closeMenu: "关闭菜单", explore: "浏览课程",
    assistant: "询问课程助手 →", primaryNav: "主导航", mobileNav: "移动导航",
    mobilePrimaryNav: "移动主导航", campaignNav: "课程资料操作" },
  ms: { home: "Utama", getGuide: "Dapatkan panduan", getGuideShort: "Panduan", menu: "Menu", close: "Tutup",
    openMenu: "Buka menu", closeMenu: "Tutup menu", explore: "Terokai program",
    assistant: "Tanya pembantu program →", primaryNav: "Navigasi utama", mobileNav: "Navigasi mudah alih",
    mobilePrimaryNav: "Navigasi utama mudah alih", campaignNav: "Tindakan pelan program" },
} as const;

const LOCALE_LABELS: Record<SiteLocale, string> = { en: "EN", zh: "中文", ms: "BM" };

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = localeOfPath(pathname);
  const t = HEADER_UI[locale];
  const homeHref = locale === "zh" ? "/zh" : locale === "ms" ? "/ms" : "/home";
  const applyHref = locale === "en" ? "/apply" : `/${locale}/apply`;
  const links = locale === "zh" ? NAV_ZH : locale === "ms" ? NAV_MS : NAV;
  const pair = pairedRoute(pathname);
  const otherLocales = (["en", "zh", "ms"] as SiteLocale[])
    .filter((candidate) => candidate !== locale)
    .map((candidate) => ({
      code: candidate,
      label: LOCALE_LABELS[candidate],
      href: pair?.[candidate] || (candidate === "en" ? "/home" : `/${candidate}`),
    }));
  const cta = locale === "zh" ? CTA_LABELS.zh : locale === "ms" ? CTA_LABELS.ms : CTA_LABELS;
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
          <nav className="campaign-nav-actions" aria-label={t.campaignNav}>
            {otherLocales.map((other) => (
              <Link key={other.code} href={other.href} className="langswitch" lang={other.code === "zh" ? "zh-Hans" : other.code} aria-label={`${LOCALE_LABELS[locale]} → ${other.label}`}>
                {other.label}
              </Link>
            ))}
            <a href="#apply" className="navcta" data-track-event="cta_click" data-track-id="campaign_header_plan" data-track-location="campaign_header">
              {cta.guide}
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
          <nav ref={desktopNavRef} className="navlinks desktop-nav" aria-label={t.primaryNav}>
            <Link href={homeHref} className={pathname === homeHref ? "is-active" : undefined} aria-current={pathname === homeHref ? "page" : undefined}>
              {t.home}
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
            {otherLocales.map((other) => (
              <Link key={other.code} href={other.href} className="langswitch" lang={other.code === "zh" ? "zh-Hans" : other.code} aria-label={`${LOCALE_LABELS[locale]} → ${other.label}`}>
                {other.label}
              </Link>
            ))}
            <Link href={applyHref} className="navcta" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="header_apply" data-track-location="header">{t.getGuide}</Link>
          </nav>
          <div className="mobile-header-actions">
            <Link href={applyHref} className="navcta mobile-navcta" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="mobile_header_apply" data-track-location="mobile_header">{t.getGuideShort}</Link>
            <button
              ref={toggleRef}
              className="mobile-menu-toggle"
              type="button"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="menu-icon" aria-hidden="true"><i /><i /></span>
              <span>{menuOpen ? t.close : t.menu}</span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <button
            className="mobile-nav-backdrop"
            type="button"
            aria-label={t.closeMenu}
            onClick={() => { closeMenu(); toggleRef.current?.focus(); }}
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label={t.mobileNav}
          >
            <div className="mobile-nav-head">
              <p className="mono mobile-nav-label">{t.explore}</p>
              <button className="mobile-panel-close" type="button" onClick={() => { closeMenu(); toggleRef.current?.focus(); }}>
                <span>{t.close}</span><span aria-hidden="true">×</span>
              </button>
            </div>
            <nav aria-label={t.mobilePrimaryNav}>
              <Link className="mobile-nav-home" href={homeHref} onClick={closeMenu} aria-current={pathname === homeHref ? "page" : undefined}>
                <span className="mobile-nav-index">00</span>
                <span>{t.home}</span>
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
              {otherLocales.map((other) => (
                <Link key={other.code} href={other.href} className="mobile-language" lang={other.code === "zh" ? "zh-Hans" : other.code} onClick={closeMenu}>
                  <span>{other.code === "en" ? "English site" : other.code === "zh" ? "中文网站" : "Laman Bahasa Melayu"}</span><span aria-hidden="true">→</span>
                </Link>
              ))}
              <button
                type="button"
                className="btn btn-ghost mobile-assistant-action"
                onClick={() => setAssistantOpen(true)}
                data-track-event="chat_open"
                data-track-id="mobile_menu_assistant"
                data-track-location="mobile_navigation"
              >
                {t.assistant}
              </button>
              <Link href={applyHref} className="btn btn-primary" onClick={handleApplyClick} data-track-event="cta_click" data-track-id="mobile_menu_apply" data-track-location="mobile_navigation">
                {`${cta.guide} →`}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
