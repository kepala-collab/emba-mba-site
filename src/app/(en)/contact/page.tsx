import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/contact", {
  title: "Contact",
  description:
    "Contact the Future Ready Executive MBA programme team by WhatsApp, phone or email, or arrange an online or in-person programme meeting.",
});

const waText = encodeURIComponent(
  "Hi, I'd like to speak with someone about the Future Ready Executive MBA (CMI UK)."
);

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <style>{`.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start}@media(max-width:820px){.contact-grid{grid-template-columns:1fr;gap:34px}}`}</style>
        <div className="contact-grid">
          <div>
            <Reveal>
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">Contact</span></div>
              <h1 className="sec-h" style={{ maxWidth: "16ch" }}>Talk to the programme team.</h1>
              <p className="sec-sub">
                Questions about fit, intakes, HRD Corp or the scholarship? Reach the {SITE.provider} team directly, or
                arrange a call, an online information meeting or an in-person meeting at an agreed location. You can also ask for details first.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-m" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <p className="mono sec-k" style={{ marginBottom: 4 }}>Programme Coordinator</p>
                  <p style={{ margin: 0, color: "var(--ink)", fontFamily: "var(--font-fraunces)", fontSize: "1.15rem" }}>{SITE.director}</p>
                  <p style={{ margin: "2px 0 0", color: "var(--muted)", fontSize: ".9rem" }}>Future Ready Executive MBA</p>
                </div>
                <div>
                  <p className="mono sec-k" style={{ marginBottom: 6 }}>Direct lines</p>
                  <p style={{ margin: "2px 0" }}><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} style={{ color: "var(--ink-2)" }}>{SITE.phone}</a></p>
                  <p style={{ margin: "2px 0" }}><a href={`mailto:${SITE.email}`} style={{ color: "var(--ink-2)" }}>{SITE.email}</a></p>
                </div>
                <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="noopener" style={{ alignSelf: "flex-start" }} data-track-event="contact_click" data-track-id="contact_page_whatsapp" data-track-location="contact_page" data-contact-method="whatsapp" data-contact-language="en">
                  Chat on WhatsApp →
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="card" style={{ padding: 28 }}>
              <p className="mono sec-k acc" style={{ marginBottom: 6 }}>Choose the next step</p>
              <h2 style={{ fontSize: "1.35rem", color: "var(--ink)", marginBottom: 20, lineHeight: 1.25 }}>Arrange a programme conversation</h2>
              <LeadForm programme="Executive MBA" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
