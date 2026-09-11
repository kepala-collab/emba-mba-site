import { describe, expect, it } from "vitest";
import { NURTURE_STEPS, renderNurtureEmail } from "../nurture-email";

const PDF_HREF: Record<"en" | "zh" | "ms", Record<"day3" | "day7" | "day14", string>> = {
  en: {
    day3: "/downloads/future-ready-decision-guide.pdf",
    day7: "/downloads/future-ready-employer-funding-brief.pdf",
    day14: "/downloads/future-ready-scholarship-eligibility.pdf",
  },
  zh: {
    day3: "/downloads/future-ready-decision-guide-zh.pdf",
    day7: "/downloads/future-ready-employer-funding-brief-zh.pdf",
    day14: "/downloads/future-ready-scholarship-eligibility-zh.pdf",
  },
  ms: {
    day3: "/downloads/future-ready-decision-guide-ms.pdf",
    day7: "/downloads/future-ready-employer-funding-brief-ms.pdf",
    day14: "/downloads/future-ready-scholarship-eligibility-ms.pdf",
  },
};

const PAGE_HREF: Record<"en" | "zh" | "ms", Record<"day7" | "day14", string>> = {
  en: { day7: "/intakes", day14: "/apply" },
  zh: { day7: "/zh/intakes", day14: "/zh/apply" },
  ms: { day7: "/ms/intakes", day14: "/ms/apply" },
};

describe("nurture email templates", () => {
  for (const language of ["en", "zh", "ms"] as const) {
    for (const { key: step } of NURTURE_STEPS) {
      it(`renders ${language} ${step} with safe content and unsubscribe controls`, () => {
        const unsubscribeUrl = "https://futurereadymba.com/api/unsubscribe?e=abc&t=def&l=en";
        const message = renderNurtureEmail({
          step,
          language,
          recipientName: '<script>alert("x")</script>',
          unsubscribeUrl,
        });

        expect(message.subject).toBeTruthy();
        expect(message.html).toContain("<!DOCTYPE html>");
        expect(message.html).not.toContain('<script>alert("x")</script>');
        expect(message.html).toContain("&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;");
        expect(message.html).toContain("utm_source=nurture");
        expect(message.html).toContain("api/unsubscribe?e=abc&amp;t=def&amp;l=en");
        expect(message.text).toContain(unsubscribeUrl);
        expect(message.text.toLowerCase()).not.toContain("three-month");

        // The rendered HTML contains the exact PDF href for this step and language.
        const pdfHref = PDF_HREF[language][step];
        const expectedUtm = `utm_source=nurture&utm_medium=email&utm_campaign=${step}&utm_content=${language}`;
        expect(message.html).toContain(`${pdfHref}?${expectedUtm}`);

        // day7 and day14 each contain two distinct links (the PDF and the page);
        // day3 contains only the decision-guide PDF link.
        if (step === "day7" || step === "day14") {
          const pageHref = PAGE_HREF[language][step];
          expect(message.html).toContain(`${pageHref}?${expectedUtm}`);
          expect(pdfHref).not.toBe(pageHref);
        }

        // No nurture step has an attachment field rendered anywhere.
        expect(message.html.toLowerCase()).not.toContain("attachment");

        // List-Unsubscribe one-click URL and a plain-text part are present.
        expect(message.text.length).toBeGreaterThan(0);
        expect(message.text).toContain(unsubscribeUrl);
      });
    }
  }

  it("uses Tuan/Puan as the Malay fallback name, never anda, in the greeting", () => {
    const message = renderNurtureEmail({
      step: "day3",
      language: "ms",
      recipientName: "",
      unsubscribeUrl: "https://futurereadymba.com/api/unsubscribe?e=a&t=b&l=ms",
    });
    expect(message.text).toContain("Salam sejahtera, Tuan/Puan,");
    expect(message.text).not.toContain("Salam sejahtera, anda,");
  });
});
