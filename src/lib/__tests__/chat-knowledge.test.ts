import { describe, expect, it } from "vitest";
import {
  ChatLanguage,
  interpretationBullets,
  programmeChatSystemPrompt,
  programmePositioning,
} from "../chat-knowledge";
import {
  FACTS,
  INTAKES,
  PROGRAMME_POSITIONING_MS,
  PROGRAMME_POSITIONING_SENTENCE,
  PROGRAMME_POSITIONING_ZH,
} from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { GET as getLlmsTxt } from "@/app/llms.txt/route";
import { GET as getLlmsFullTxt } from "@/app/llms-full.txt/route";

describe("programmePositioning — single source, no drift", () => {
  it("matches the shared constants per language", () => {
    expect(programmePositioning("en")).toBe(PROGRAMME_POSITIONING_SENTENCE);
    expect(programmePositioning("ms")).toBe(PROGRAMME_POSITIONING_MS);
    expect(programmePositioning("zh")).toBe(PROGRAMME_POSITIONING_ZH);
  });

  it("appears in the chat system prompt for all three languages", () => {
    for (const lang of ["en", "ms", "zh"] as ChatLanguage[]) {
      expect(programmeChatSystemPrompt(lang)).toContain(programmePositioning(lang));
    }
  });
});

describe("interpretationBullets — anti-drift", () => {
  it("English bullets are non-empty and each appears verbatim in llms.txt", async () => {
    const bullets = interpretationBullets("en");
    expect(bullets.length).toBeGreaterThan(0);
    const body = await getLlmsTxt().text();
    for (const bullet of bullets) {
      expect(body).toContain(bullet);
    }
  });

  it("Malay and Chinese bullets are non-empty and each appears verbatim in llms-full.txt", async () => {
    const fullBody = await getLlmsFullTxt().text();
    for (const lang of ["ms", "zh"] as ChatLanguage[]) {
      const bullets = interpretationBullets(lang);
      expect(bullets.length).toBeGreaterThan(0);
      for (const bullet of bullets) {
        expect(fullBody).toContain(bullet);
      }
    }
  });
});

describe("programmeChatSystemPrompt — ms", () => {
  const prompt = programmeChatSystemPrompt("ms");

  it("renders the shared Malay positioning and HRD Corp constants, never retyped", () => {
    expect(prompt).toContain(PROGRAMME_POSITIONING_MS);
    expect(prompt).toContain(HRD_CORP_CLAIM_MS);
  });

  it("renders the shared numeric facts", () => {
    expect(prompt).toContain(FACTS.priceStd);
    expect(prompt).toContain(FACTS.durationMonths);
    expect(prompt).toContain(FACTS.trainingDays);
    expect(prompt).toContain(FACTS.liveSessions);
  });

  it("renders every published intake", () => {
    for (const intake of INTAKES) {
      expect(prompt).toContain(intake.co);
    }
  });

  it("states the 150-word cap in Malay", () => {
    // Stable fragment: the Malay instructions block states the word cap as
    // "150 patah perkataan" ("150 words").
    expect(prompt).toContain("150");
    expect(prompt).toContain("150 patah perkataan");
  });

  it("carries a Malay rendering of the prompt-injection clause", () => {
    // Stable fragment chosen from the Malay instructions block: it labels
    // rule-override text found in user/assistant messages as untrusted
    // content ("kandungan yang tidak boleh dipercayai").
    expect(prompt).toContain("kandungan yang tidak boleh dipercayai");
  });

  it("does not contain the English or Chinese word-cap sentences", () => {
    expect(prompt).not.toContain("Use no more than 120 words per answer");
    expect(prompt).not.toContain("每次回答不得超过 150 个汉字");
  });
});

describe("programmeChatSystemPrompt — regression guards", () => {
  it("English prompt keeps its 120-word cap sentence", () => {
    expect(programmeChatSystemPrompt("en")).toContain(
      "Use no more than 120 words per answer",
    );
  });

  it("Chinese prompt keeps its 150-character cap sentence", () => {
    expect(programmeChatSystemPrompt("zh")).toContain("150 个汉字");
  });
});

describe("ChatLanguage type", () => {
  it("accepts en, zh and ms", () => {
    const langs: ChatLanguage[] = ["en", "zh", "ms"];
    expect(langs).toHaveLength(3);
  });
});
