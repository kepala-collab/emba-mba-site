import { COMPARISON } from "@/lib/content";
import { COMPARISON_ZH } from "@/lib/content-zh";

type ProgrammeComparisonProps = {
  lang?: "en" | "zh";
  compact?: boolean;
};

const COMPACT_KEYS = new Set(["Duration", "Focus", "Assessment", "Faculty role", "Primary toolkit"]);
const COMPACT_KEYS_ZH = new Set(["修读时间", "学习重点", "评估方式", "导师角色", "主要工具"]);

export default function ProgrammeComparison({ lang = "en", compact = false }: ProgrammeComparisonProps) {
  const zh = lang === "zh";
  const rows = (zh ? COMPARISON_ZH : COMPARISON).filter((row) =>
    compact ? (zh ? COMPACT_KEYS_ZH : COMPACT_KEYS).has(row.k) : true
  );

  return (
    <div
      className="programme-comparison"
      role="region"
      aria-label={zh ? "传统 MBA 与 Future Ready 高管 MBA 对比" : "Traditional MBA and Future Ready Executive MBA comparison"}
    >
      <div className="programme-comparison-head" aria-hidden="true">
        <span>{zh ? "比较项目" : "At a glance"}</span>
        <span>{zh ? "传统 MBA" : "Traditional MBA"}</span>
        <span className="future">{zh ? "Future Ready 高管 MBA" : "Future Ready Executive MBA"}</span>
      </div>
      <dl className="programme-comparison-list">
        {rows.map((row) => (
          <div className="programme-comparison-row" key={row.k}>
            <dt>{row.k}</dt>
            <dd>
              <span className="programme-comparison-mobile-label">{zh ? "传统 MBA" : "Traditional MBA"}</span>
              {row.them}
            </dd>
            <dd className="future">
              <span className="programme-comparison-mobile-label">{zh ? "Future Ready 高管 MBA" : "Future Ready Executive MBA"}</span>
              {row.us}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
