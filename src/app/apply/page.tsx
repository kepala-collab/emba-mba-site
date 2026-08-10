import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import { SITE, FACTS, INCLUSIONS } from "@/lib/content";

export const metadata = {
  title: "Apply Now",
  description:
    "Apply for the Future Ready Executive MBA (CMI UK). Register your details and our programme team will be in touch about your fit, the next intake, HRD Corp and scholarship. Free, no obligation.",
};

const waText = encodeURIComponent(
  "Hi Allan, I'd like to apply for the Future Ready Executive MBA (CMI UK) — please share the next intake details."
);

const RECEIVE = [
  "A personal call from our programme team about your fit",
  "2026 intake dates and current seat availability",
  "HRD Corp claim guidance for eligible employers",
  "Scholarship — RM4,000 off for Malaysian participants (pay RM6,000)",
];

export default function ApplyPage() {
  return (
    <>
      <style>{`
        .apply-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        @media (max-width: 880px) {
          .apply-grid { grid-template-columns: 1fr; gap: 40px; }
          .apply-right { order: -1; }
        }
      `}</style>

      <section className="section">
        <div className="wrap">
          <div className="apply-grid">
            {/* LEFT — the pitch */}
            <div>
              <Reveal>
                <p className="eyebrow"><span className="l" />Apply Now</p>
                <h1 className="sec-h" style={{ marginTop: 14, maxWidth: "13ch" }}>
                  Your next cohort won&rsquo;t wait. Neither should your thinking.
                </h1>
                <p className="sec-sub" style={{ marginTop: 18, maxWidth: "42ch" }}>
                  One page. Two minutes. Register your interest and our programme team will call you
                  to discuss your fit, the next intake, and exactly how the {FACTS.priceStd} fee
                  becomes {FACTS.priceNet} with scholarship.
                </p>
              </Reveal>

              <Reveal delay={80}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 18,
                    marginTop: 28,
                    paddingTop: 24,
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <Image src="/brand/cmi-logo.png" alt="CMI (UK)" width={26} height={26} style={{ objectFit: "contain" }} />
                    Recognised by CMI (UK)
                  </span>
                  <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <Image src="/brand/hrdcorp-badge.png" alt="HRD Corp" width={26} height={26} style={{ objectFit: "contain" }} />
                    HRD Corp claimable
                  </span>
                  <span className="mono sec-k" style={{ opacity: 0.85 }}>
                    {FACTS.gradsApprox} leaders trained · {FACTS.cohorts} cohorts
                  </span>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <p className="mono sec-k acc" style={{ marginTop: 32, marginBottom: 14 }}>
                  What happens next
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
                  {RECEIVE.map((r) => (
                    <li key={r} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span className="acc" style={{ marginTop: 2, fontWeight: 700 }}>→</span>
                      <span style={{ color: "var(--ink-2)" }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <div style={{ marginTop: 30 }}>
                  <a
                    className="btn btn-wa"
                    href={`https://wa.me/${SITE.whatsapp}?text=${waText}`}
                    target="_blank"
                    rel="noopener"
                  >
                    Chat on WhatsApp →
                  </a>
                  <p className="fine" style={{ marginTop: 16, lineHeight: 1.7 }}>
                    Prefer to speak directly? {SITE.director} · {" "}
                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} style={{ color: "var(--ink-2)" }}>{SITE.phone}</a> · {" "}
                    <a href={`mailto:${SITE.email}`} style={{ color: "var(--ink-2)" }}>{SITE.email}</a>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <p className="fine" style={{ marginTop: 26, maxWidth: "44ch", opacity: 0.8 }}>
                  {INCLUSIONS[0].b} · {INCLUSIONS[4].b} · {INCLUSIONS[5].b}. Our team walks you through the full breakdown on your call.
                </p>
              </Reveal>
            </div>

            {/* RIGHT — the form */}
            <div className="apply-right">
              <Reveal delay={120}>
                <div className="card" style={{ padding: 28 }}>
                  <p className="mono sec-k acc" style={{ marginBottom: 6 }}>Two minutes</p>
                  <h2 style={{ fontSize: "1.35rem", color: "#fff", marginBottom: 20, lineHeight: 1.25 }}>
                    Apply for the next cohort
                  </h2>
                  <LeadForm programme="Executive MBA" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Reassurance strip */}
          <Reveal delay={80}>
            <div
              className="pill center mt-s"
              style={{ marginTop: 44, display: "block", textAlign: "center", padding: "14px 20px" }}
            >
              <span className="mono sec-k">
                Free · No obligation · PDPA-compliant · Your details go straight to the programme team.
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
