import LeadForm from "./LeadForm";
import Reveal from "./Reveal";
import { SITE } from "@/lib/content";
import type { LeadIntent } from "@/lib/conversion-contract";

export default function CtaSection({
  programme = "Executive MBA",
  heading = "Get the facts you need to decide.",
  sub = "Choose a call, online meeting, in-person meeting or email. The programme team will answer questions about suitability, dates, fees, recognition and employer-led HRD Corp funding. An enquiry does not commit you to enrol or pay.",
  source = "emba-hub",
  formVariant = "standard",
  intentOptions,
  steps,
  sectionId = "apply",
}: {
  programme?: string;
  heading?: string;
  sub?: string;
  source?: string;
  formVariant?: "standard" | "campaign";
  intentOptions?: readonly LeadIntent[];
  steps?: readonly string[];
  sectionId?: string;
}) {
  const checklist = steps || [
    "Choose how the team should contact you",
    "Confirm programme fit, available dates and the exact fee",
    "Decide your next step after receiving the information",
  ];
  return (
    <section id={sectionId} className="section" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="cta-grid">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Programme enquiry</span></div>
            <h2 className="sec-h">{heading}</h2>
            <p className="sec-sub">{sub}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {checklist.map((t) => (
                <li key={t} style={{ paddingLeft: 26, position: "relative", color: "var(--ink-2)" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--crimson)", fontFamily: "var(--font-plex-mono)" }}>→</span>{t}
                </li>
              ))}
            </ul>
            <p className="fine" style={{ marginTop: 22 }}>
              {SITE.director} · Programme Coordinator · {SITE.phone} · {SITE.email}
            </p>
          </Reveal>
          <Reveal delay={80}><LeadForm programme={programme} source={source} placement="footer-cta" variant={formVariant} intentOptions={intentOptions} /></Reveal>
        </div>
      </div>
    </section>
  );
}
