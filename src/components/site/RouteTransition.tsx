"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades page content in on client-side navigations only. The first render (the
 * server-delivered initial load) is intentionally left un-animated so the fade
 * never delays the largest contentful paint. `key={pathname}` re-mounts the
 * inner wrapper on each route change so the CSS animation replays; the shared
 * chrome (header, footer, analytics) lives outside this and is untouched.
 * Under prefers-reduced-motion the animation is neutralised globally.
 */
export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasNavigated = useRef(false);
  const animate = hasNavigated.current;

  useEffect(() => {
    hasNavigated.current = true;
  }, []);

  return (
    <div key={pathname} className={animate ? "route-fade" : undefined}>
      {children}
    </div>
  );
}
