import { COMPARISON, COMPARISON_SCOPE } from "@/lib/content";
import { COMPARISON_MS } from "@/lib/content-ms";
import { COMPARISON_ZH } from "@/lib/content-zh";

type ProgrammeComparisonProps = {
  lang?: "en" | "zh" | "ms";
  compact?: boolean;
};

const COMPACT_KEYS = new Set(["Built for", "Duration", "Focus", "Assessment", "Faculty role", "Primary toolkit"]);
const COMPACT_KEYS_ZH = new Set(["定位", "修读时间", "学习重点", "评估方式", "导师角色", "主要工具"]);
const COMPACT_KEYS_MS = new Set(["Direka untuk", "Tempoh pengajian", "Fokus pembelajaran", "Kaedah penilaian", "Peranan fasilitator", "Alat utama"]);

// "Built for" is the first row in every rendering of the comparison: it
// states the different job each route is built for, before any other row.
// Not sourced from src/lib/content.ts because it is descriptive framing
// copy, not a fact (no number, date, fee or CMI/MQA claim).
const BUILT_FOR_ROW = {
  en: { k: "Built for", them: "Earning an academic degree through academic study, assessment and research.", us: "Working one live business issue to a faculty-reviewed action plan, while remaining in your role." },
  zh: { k: "定位", them: "透过学术研究、作业与考试，修读学术学位。", us: "在职期间，把一项真实企业课题处理成经导师评审的行动方案。" },
  ms: { k: "Direka untuk", them: "Memperoleh ijazah akademik melalui pengajian akademik, penilaian dan penyelidikan.", us: "Menangani satu isu perniagaan sebenar sehingga menjadi pelan tindakan yang disemak fakulti, sambil kekal dalam jawatan anda." },
} as const;

// Malay and Chinese mirrors of COMPARISON_SCOPE (English constant in
// src/lib/content.ts): the reference-group definition required beside
// every rendering of this table.
const COMPARISON_SCOPE_MS =
  "Jadual ini mentakrifkan MBA akademik rujukan sebagai program 18–24 bulan yang dibina di sekitar modul akademik, tugasan atau peperiksaan, dan disertasi atau tesis. Ia tidak menggambarkan setiap program MBA.";
const COMPARISON_SCOPE_ZH =
  "本表所指的参考学术 MBA，是一项为期 18 至 24 个月、以学术模块、作业或考试及论文为核心的课程；并不代表所有 MBA 课程。";

const STRINGS = {
  en: {
    region: "Reference academic MBA and Future Ready Executive MBA comparison",
    head: "At a glance",
    them: "Reference academic MBA",
    us: "Future Ready Executive MBA",
    scope: COMPARISON_SCOPE,
  },
  zh: {
    region: "参考型学术 MBA 与 Future Ready Executive MBA 对比",
    head: "比较项目",
    them: "参考型学术 MBA",
    us: "Future Ready Executive MBA",
    scope: COMPARISON_SCOPE_ZH,
  },
  ms: {
    region: "Perbandingan MBA akademik rujukan dengan Future Ready Executive MBA",
    head: "Sepintas lalu",
    them: "MBA akademik rujukan",
    us: "Future Ready Executive MBA",
    scope: COMPARISON_SCOPE_MS,
  },
} as const;

export default function ProgrammeComparison({ lang = "en", compact = false }: ProgrammeComparisonProps) {
  const t = STRINGS[lang];
  const source = lang === "zh" ? COMPARISON_ZH : lang === "ms" ? COMPARISON_MS : COMPARISON;
  const compactKeys = lang === "zh" ? COMPACT_KEYS_ZH : lang === "ms" ? COMPACT_KEYS_MS : COMPACT_KEYS;
  const builtFor = lang === "zh" ? BUILT_FOR_ROW.zh : lang === "ms" ? BUILT_FOR_ROW.ms : BUILT_FOR_ROW.en;
  const rows = [builtFor, ...source.filter((row) => (compact ? compactKeys.has(row.k) : true))];

  return (
    <div
      className="programme-comparison"
      role="region"
      aria-label={t.region}
    >
      <p className="programme-comparison-scope fine">{t.scope}</p>
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
