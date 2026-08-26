"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";
import { useFloatingUi } from "@/components/site/FloatingUiContext";
import { isCampaignRoute, localeOfPath } from "@/lib/locale-routes";

export default function WhatsAppFloat() {
  const { persistentActionsVisible } = useFloatingUi();
  const pathname = usePathname() || "/";
  const locale = localeOfPath(pathname);
  const label = locale === "zh"
    ? "通过 WhatsApp 联系 Future Ready 高管 MBA"
    : locale === "ms"
      ? "Hubungi Future Ready EMBA di WhatsApp"
      : "Contact Future Ready EMBA on WhatsApp";
  const [formState, setFormState] = useState({ pathname: "", visible: false });
  const formVisible = formState.pathname === pathname && formState.visible;
  const msg = encodeURIComponent(locale === "zh"
    ? "您好，我想进一步了解 Future Ready 高管 MBA（英国 CMI）。请提供课程和下一期开课详情。"
    : locale === "ms"
      ? "Salam sejahtera, saya ingin mengetahui lebih lanjut tentang Future Ready Executive MBA (CMI UK). Mohon kongsikan butiran program dan tarikh kemasukan seterusnya."
      : "Hello Future Ready EMBA team, I'd like to explore the Future Ready Executive MBA (CMI UK). Please share the programme and next-intake details."
  );

  useEffect(() => {
    const forms = [...document.querySelectorAll(".form")];
    if (!forms.length) return;
    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
      const visible = [...visibility.values()].some(Boolean);
      setFormState((current) =>
        current.pathname === pathname && current.visible === visible
          ? current
          : { pathname, visible }
      );
    }, { threshold: 0.08 });
    forms.forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, [pathname]);

  const suppressed = isCampaignRoute(pathname) || formVisible || !persistentActionsVisible;

  return (
    <aside className="wa-float-region" aria-label={label} aria-hidden={suppressed}>
      <a
        className={`wa-float${suppressed ? " is-suppressed" : ""}`}
        href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        aria-hidden={suppressed}
        tabIndex={suppressed ? -1 : undefined}
        data-track-event="contact_click"
        data-track-id="global_whatsapp"
        data-track-location="persistent_contact"
        data-contact-method="whatsapp"
        data-contact-language={locale}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#052e15" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z"/>
        </svg>
        <span className="wa-float-label">{label}</span>
      </a>
    </aside>
  );
}
