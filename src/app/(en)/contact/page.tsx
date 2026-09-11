import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { CTA_LABELS, ENQUIRY_COMMITMENT, PROGRAMME_YEAR, SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/contact", {
  title: "Contact Future Ready EMBA",
  description: `Contact the Future Ready Executive MBA programme team by WhatsApp, phone or email, or arrange an online or in-person meeting. ${ENQUIRY_COMMITMENT}`,
});

const waText = encodeURIComponent(
  "Hello Future Ready EMBA team, I'd like to discuss the Future Ready Executive MBA (CMI UK)."
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
              <h1 className="sec-h" style={{ maxWidth: "18ch" }}>Talk to the programme team.</h1>
              <p className="sec-sub">
                Questions about programme fit, dates, the fee, HRD Corp or the scholarship? Reach the {SITE.provider} team directly, or
                arrange a call, an online meeting or an in-person meeting at an agreed location — or ask for the {PROGRAMME_YEAR} programme guide first. {ENQUIRY_COMMITMENT}
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
                  Contact Future Ready EMBA on WhatsApp →
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="card" style={{ padding: 28 }}>
              <p className="mono sec-k acc" style={{ marginBottom: 6 }}>Choose the next step</p>
              <h2 style={{ fontSize: "1.8rem", color: "var(--ink)", marginBottom: 12, lineHeight: 1.15 }}>One place for programme enquiries.</h2>
              <p style={{ color: "var(--ink-2)", margin: "0 0 20px" }}>Use the enquiry page to request the {PROGRAMME_YEAR} programme guide, choose a contact method or arrange a programme conversation.</p>
              <Link href="/apply" className="btn btn-primary" style={{ width: "100%" }}>{CTA_LABELS.conversation} →</Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-ghost" style={{ width: "100%", marginTop: 10 }}>Email {SITE.email}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
