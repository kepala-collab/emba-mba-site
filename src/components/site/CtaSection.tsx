import LeadForm from "./LeadForm";
import Reveal from "./Reveal";
import { SITE } from "@/lib/content";

export default function CtaSection({
  programme = "Executive MBA",
  heading = "Start with a conversation, not a commitment.",
  sub = "Tell us how you would like to explore the programme: a short call, an online information meeting, an in-person meeting at an agreed location, or details by email first. The programme team will discuss fit, schedules, HRD Corp and scholarship eligibility — no sales obligation.",
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
              {["Choose a call, online meeting, in-person meeting or details first", "Review the 2026 class schedule before deciding", "Understand HRD Corp and scholarship eligibility"].map((t) => (
                <li key={t} style={{ paddingLeft: 26, position: "relative", color: "var(--ink-2)" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--crimson)", fontFamily: "var(--font-plex-mono)" }}>→</span>{t}
                </li>
              ))}
            </ul>
            <p className="fine" style={{ marginTop: 22 }}>
              {SITE.director} · Programme Coordinator · {SITE.phone} · {SITE.email}
            </p>
          </Reveal>
          <Reveal delay={80}><LeadForm programme={programme} source={source} placement="footer-cta" /></Reveal>
        </div>
      </div>
      <style>{`@media(max-width:820px){.cta-grid{grid-template-columns:1fr!important;gap:34px!important}}`}</style>
    </section>
  );
}
