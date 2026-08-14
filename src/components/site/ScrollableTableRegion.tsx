import type { ReactNode } from "react";

type ScrollableTableRegionProps = {
  children: ReactNode;
  kind: "comparison" | "intake";
  label: string;
  className?: string;
  hint?: string;
};

export default function ScrollableTableRegion({
  children,
  kind,
  label,
  className = "",
  hint = "Swipe to see all columns →",
}: ScrollableTableRegionProps) {
  const classes = `${kind === "comparison" ? "cmp-wrap" : "intake-wrap"} ${className}`.trim();

  return (
    <div
      className={classes}
      role="region"
      aria-label={`${label}. Horizontally scrollable table.`}
      tabIndex={0}
      data-scroll-hint={hint}
    >
      {children}
    </div>
  );
}
