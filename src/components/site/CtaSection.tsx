import LeadForm from "./LeadForm";
import Reveal from "./Reveal";
import { SITE } from "@/lib/content";

export default function CtaSection({
  programme = "Executive MBA",
  heading = "Your next cohort won't wait. Neither should your thinking.",
  sub = "Apply now and our programme team will be in touch to discuss your fit, the next intake, HRD Corp claims and scholarship eligibility. No obligation.",
  source = "emba-hub",
}: { programme?: string; heading?: string; sub?: string; source?: string }) {
  return (
    <section id="apply" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start" }} className="cta-grid">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Request information</span></div>
            <h2 className="sec-h">{heading}</h2>
            <p className="sec-sub">{sub}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {["A personal call to discuss your goals & fit", "2026 intake availability & scheduling", "HRD Corp claim & scholarship eligibility"].map((t) => (
                <li key={t} style={{ paddingLeft: 26, position: "relative", color: "var(--ink-2)" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--crimson)", fontFamily: "var(--font-plex-mono)" }}>→</span>{t}
                </li>
              ))}
            </ul>
            <p className="fine" style={{ marginTop: 22 }}>
              {SITE.director} · Programme Coordinator · {SITE.phone} · {SITE.email}
            </p>
          </Reveal>
          <Reveal delay={80}><LeadForm programme={programme} source={source} /></Reveal>
        </div>
      </div>
      <style>{`@media(max-width:820px){.cta-grid{grid-template-columns:1fr!important;gap:34px!important}}`}</style>
    </section>
  );
}
