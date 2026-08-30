import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  FACTS,
  PROGRAMME_POSITIONING_MS,
  PROGRAMME_POSITIONING_SENTENCE,
  PROGRAMME_POSITIONING_ZH,
  PROGRAMME_PROOF,
} from "../content";

const ROOT = process.cwd();
const MALAY_MQA_QUESTION = "Adakah ini ijazah terakreditasi MQA?";

function read(relativePath: string) {
  return readFileSync(join(ROOT, relativePath), "utf8");
}

function filesBelow(relativePath: string): string[] {
  const absolute = join(ROOT, relativePath);
  return readdirSync(absolute).flatMap((name) => {
    const child = join(absolute, name);
    const relative = join(relativePath, name);
    return statSync(child).isDirectory() ? filesBelow(relative) : [relative];
  });
}

describe("cross-language programme fact parity", () => {
  it("derives the cohort total from the published language split", () => {
    expect(PROGRAMME_PROOF.englishCohorts + PROGRAMME_PROOF.mandarinCohorts).toBe(PROGRAMME_PROOF.cohorts);
    expect(FACTS.cohorts).toBe(String(PROGRAMME_PROOF.cohorts));
  });

  it("renders the language split from PROGRAMME_PROOF on every ABC proof page", () => {
    for (const path of [
      "src/app/(en)/asian-business-consulting/page.tsx",
      "src/app/(ms)/ms/asian-business-consulting/page.tsx",
      "src/app/(zh)/zh/asian-business-consulting/page.tsx",
    ]) {
      const source = read(path);
      expect(source, path).toContain("PROGRAMME_PROOF.cohorts");
      expect(source, path).toContain("PROGRAMME_PROOF.englishCohorts");
      expect(source, path).toContain("PROGRAMME_PROOF.mandarinCohorts");
    }
  });

  it("locks the three flagship CMI claims verbatim", () => {
    expect(PROGRAMME_POSITIONING_SENTENCE).toContain("awarded and endorsed by CMI");
    expect(PROGRAMME_POSITIONING_MS).toContain("dianugerahkan dan disokong oleh CMI");
    expect(PROGRAMME_POSITIONING_ZH).toContain("颁授并背书");
  });

  it("keeps forbidden scholarship amounts and deprecated terms out of published source", () => {
    const searchable = [
      ...filesBelow("src"),
      ...filesBelow("scripts"),
      "HANDOFF.md",
      "SEO-CONTENT-GOVERNANCE.md",
      ".design/conversion-architecture/INFORMATION_ARCHITECTURE.md",
    ].filter((path) => /\.(?:ts|tsx|mjs|py|md)$/.test(path) && !path.endsWith("fact-parity.test.ts"));
    const corpus = searchable.map((path) => read(path)).join("\n");
    expect(corpus).not.toMatch(/RM\s?(?:4[,.]?000|6[,.]?000)/i);
    expect(corpus).not.toContain("bertauliah MQA");
    expect(corpus).not.toContain("Associate Partner");
    expect(corpus).not.toContain("dianugerah dan disokong");
  });

  it("keeps the Malay MQA FAQ selector byte-identical to its source question", () => {
    expect(read("src/lib/content-ms.ts")).toContain(`["${MALAY_MQA_QUESTION}",`);
    expect(read("src/app/(ms)/ms/executive-mba-vs-mba/page.tsx")).toContain(`"${MALAY_MQA_QUESTION}"`);
  });
});
