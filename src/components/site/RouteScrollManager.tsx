"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

let pendingRouteHash: string | null = null;

function withoutSmoothScroll(action: () => void) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  action();
  root.style.scrollBehavior = previous;
}

function scrollToPageTop() {
  withoutSmoothScroll(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

export default function RouteScrollManager() {
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    if (window.location.hash) return;
    scrollToPageTop();
  }, [pathname]);

  useEffect(() => {
    const hash = pendingRouteHash ?? decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const scrollToHash = () => {
      const target = document.getElementById(hash);
      if (!target) return false;
      withoutSmoothScroll(() => target.scrollIntoView({ block: "start", behavior: "auto" }));
      return true;
    };
    const frame = window.requestAnimationFrame(scrollToHash);
    const observer = new MutationObserver(() => {
      scrollToHash();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const retries = [100, 300, 700].map((delay, index, all) =>
      window.setTimeout(() => {
        scrollToHash();
        if (index === all.length - 1) {
          pendingRouteHash = null;
          observer.disconnect();
        }
      }, delay),
    );

    return () => {
      window.cancelAnimationFrame(frame);
      retries.forEach(window.clearTimeout);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const resetSamePageNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin === current.origin &&
        destination.hash &&
        destination.pathname !== current.pathname
      ) {
        event.preventDefault();
        pendingRouteHash = decodeURIComponent(destination.hash.slice(1));
        router.push(`${destination.pathname}${destination.search}${destination.hash}`, { scroll: false });
        return;
      }

      if (
        destination.origin === current.origin &&
        destination.pathname === current.pathname &&
        destination.search === current.search &&
        !destination.hash
      ) {
        window.requestAnimationFrame(scrollToPageTop);
      }
    };

    document.addEventListener("click", resetSamePageNavigation, true);
    return () => document.removeEventListener("click", resetSamePageNavigation, true);
  }, [router]);

  return null;
}
