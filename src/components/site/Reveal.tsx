import type { ReactNode } from "react";

export default function Reveal({
  children, className = "",
}: { children: ReactNode; className?: string; delay?: number }) {
  // Content is visible in the server response. This avoids delaying LCP,
  // removes a site-wide hydration boundary, and prevents transform-driven
  // layout shifts while preserving the existing wrapper contract.
  return <div className={`reveal in ${className}`}>{children}</div>;
}
