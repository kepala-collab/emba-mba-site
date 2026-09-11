import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { PROGRAMME_YEAR, SITE } from "@/lib/content";
import { ENQUIRY_COMMITMENT_MS } from "@/lib/content-ms";
import { withSeo } from "@/lib/seo";

const path = "/ms/contact";
const waText = encodeURIComponent("Hai, saya ingin bertanya tentang Future Ready Executive MBA (program yang diiktiraf CMI, UK).");

export const metadata = withSeo(path, {
  title: "Hubungi Future Ready Executive MBA",
  description: `Hubungi pasukan program Future Ready Executive MBA melalui WhatsApp, telefon, e-mel atau borang dalam talian untuk pertanyaan tentang kesesuaian program, kohort, yuran dan HRD Corp. ${ENQUIRY_COMMITMENT_MS}`,
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Hubungi</span></div>
            <h1 className="sec-h">Bercakap dengan pasukan program.</h1>
            <p className="sec-sub">Tanya kami tentang kesesuaian program, tarikh mula, yuran, biasiswa atau permohonan HRD Corp — atau minta panduan program {PROGRAMME_YEAR} dahulu. {ENQUIRY_COMMITMENT_MS}</p>
            <div className="mt-m" style={{ display: "grid", gap: 10 }}>
              <p style={{ margin: 0 }}><strong>{SITE.director}</strong> · Penyelaras Program</p>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="noopener" style={{ justifySelf: "start" }} data-track-event="contact_click" data-track-id="ms_contact_whatsapp" data-track-location="contact_page" data-contact-method="whatsapp" data-contact-language="ms">Hubungi Future Ready Executive MBA di WhatsApp →</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card"><LeadForm source="ms-contact" programme="Executive MBA" lang="ms" placement="contact" /></div>
          </Reveal>
        </div>
      </div>
      
    </section>
  );
}
