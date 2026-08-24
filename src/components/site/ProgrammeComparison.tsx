import { COMPARISON } from "@/lib/content";
import { COMPARISON_MS } from "@/lib/content-ms";
import { COMPARISON_ZH } from "@/lib/content-zh";

type ProgrammeComparisonProps = {
  lang?: "en" | "zh" | "ms";
  compact?: boolean;
};

const COMPACT_KEYS = new Set(["Duration", "Focus", "Assessment", "Faculty role", "Primary toolkit"]);
const COMPACT_KEYS_ZH = new Set(["修读时间", "学习重点", "评估方式", "导师角色", "主要工具"]);
const COMPACT_KEYS_MS = new Set(["Tempoh pengajian", "Fokus pembelajaran", "Kaedah penilaian", "Peranan fasilitator", "Alat utama"]);

const STRINGS = {
  en: {
    region: "Reference academic MBA and Future Ready Executive MBA comparison",
    head: "At a glance",
    them: "Reference academic MBA",
    us: "Future Ready Executive MBA",
  },
  zh: {
    region: "参考型学术 MBA 与 Future Ready 高管 MBA 对比",
    head: "比较项目",
    them: "参考型学术 MBA",
    us: "Future Ready 高管 MBA",
  },
  ms: {
    region: "Perbandingan MBA akademik rujukan dengan Future Ready Executive MBA",
    head: "Sepintas lalu",
    them: "MBA akademik rujukan",
    us: "Future Ready Executive MBA",
  },
} as const;

export default function ProgrammeComparison({ lang = "en", compact = false }: ProgrammeComparisonProps) {
  const t = STRINGS[lang];
  const source = lang === "zh" ? COMPARISON_ZH : lang === "ms" ? COMPARISON_MS : COMPARISON;
  const compactKeys = lang === "zh" ? COMPACT_KEYS_ZH : lang === "ms" ? COMPACT_KEYS_MS : COMPACT_KEYS;
  const rows = source.filter((row) => (compact ? compactKeys.has(row.k) : true));

  return (
    <div
      className="programme-comparison"
      role="region"
      aria-label={t.region}
    >
      <div className="programme-comparison-head" aria-hidden="true">
        <span>{t.head}</span>
        <span>{t.them}</span>
        <span className="future">{t.us}</span>
      </div>
      <dl className="programme-comparison-list">
        {rows.map((row) => (
          <div className="programme-comparison-row" key={row.k}>
            <dt>{row.k}</dt>
            <dd>
              <span className="programme-comparison-mobile-label">{t.them}</span>
              {row.them}
            </dd>
            <dd className="future">
              <span className="programme-comparison-mobile-label">{t.us}</span>
              {row.us}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
