import { describe, expect, it } from "vitest";
import {
  ChatLanguage,
  programmeChatSystemPrompt,
} from "../chat-knowledge";
import { FACTS, INTAKES, PROGRAMME_POSITIONING_MS } from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";

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
