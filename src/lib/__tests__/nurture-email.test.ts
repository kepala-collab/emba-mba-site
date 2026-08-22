import { describe, expect, it } from "vitest";
import { NURTURE_STEPS, renderNurtureEmail } from "../nurture-email";

describe("nurture email templates", () => {
  for (const language of ["en", "zh"] as const) {
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
        expect(message.text.toLowerCase()).not.toContain("six-month");
      });
    }
  }
});
