import { verifiedProgrammeFacts } from "@/lib/chat-knowledge";
import {
  FACTS,
  INTAKES,
  PROGRAMME_POSITIONING_MS,
  PROGRAMME_POSITIONING_ZH,
  SITE,
} from "@/lib/content";
import { HRD_CORP_CLAIM_MS, PROGRAMME_AUDIENCE_MS, REFUND_TERMS_MS } from "@/lib/content-ms";
import { HRD_CORP_CLAIM_ZH, PROGRAMME_AUDIENCE_ZH, REFUND_TERMS_ZH } from "@/lib/content-zh";

export const dynamic = "force-static";

// Placeholder-neutral for Release 1: R3.4 refreshes the Malay and Chinese
// prose from final copy. Every fact value below is interpolated from
// content.ts, content-ms.ts or content-zh.ts — never a hand-typed number,
// fee, date, CMI phrase or HRD Corp condition.
function intakeLines(): string {
  return INTAKES.map(
    (intake) =>
      `- ${intake.language} ${intake.co}: ${intake.s1} / ${intake.s2} / ${intake.s3}, ${intake.days}, ${intake.time} (${intake.seats})`,
  ).join("\n");
}

function malaySection(): string {
  return `## Bahasa Melayu
- Program: ${SITE.name}. ${PROGRAMME_POSITIONING_MS}
- Penyedia dan penganjur program: ${SITE.provider} (ABC).
- Tempoh: ${FACTS.durationMonths} bulan — ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, meliputi ${FACTS.moduleCount} modul.
- Yuran standard: ${FACTS.priceStd}. Biasiswa ${FACTS.scholarshipProvider} terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak.
- HRD Corp: ${HRD_CORP_CLAIM_MS}
- Khalayak program: ${PROGRAMME_AUDIENCE_MS}
- Terma bayaran balik: ${REFUND_TERMS_MS}
- Kohort tersiar:
${intakeLines()}
- Laman web: ${SITE.url}`;
}

function chineseSection(): string {
  return `## 简体中文
- 课程：${SITE.name}。${PROGRAMME_POSITIONING_ZH}
- 课程提供方与主办方：${SITE.provider}（ABC）。
- 时长：${FACTS.durationMonths} 个月 — ${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次课程完成，共 ${FACTS.moduleCount} 个模块。
- 标准费用：${FACTS.priceStd}。${FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者。
- HRD Corp：${HRD_CORP_CLAIM_ZH}
- 适合对象：${PROGRAMME_AUDIENCE_ZH}
- 退款条款：${REFUND_TERMS_ZH}
- 已公布批次：
${intakeLines()}
- 网站：${SITE.url}`;
}

export function GET() {
  const body = `# ${SITE.name} — verified programme facts (full)

> This is the complete verified fact set behind ${SITE.url}, in English, Bahasa Melayu and 简体中文. Placeholder-neutral for Release 1; R3.4 refreshes this copy from the final three-language content while keeping every fact identical to ${SITE.url}/llms.txt.

## English
${verifiedProgrammeFacts("en")}

${malaySection()}

${chineseSection()}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
