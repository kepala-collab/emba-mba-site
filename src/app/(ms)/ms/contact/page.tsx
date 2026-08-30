import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/ms/contact";
const waText = encodeURIComponent("Hai, saya ingin bertanya tentang Future Ready Executive MBA (program yang diiktiraf CMI, UK).");

export const metadata = withSeo(path, {
  title: "Hubungi Future Ready Executive MBA",
  description: "Hubungi pasukan program Future Ready Executive MBA melalui WhatsApp, telefon, e-mel atau borang dalam talian untuk pertanyaan tentang kesesuaian, kohort, yuran dan HRD Corp.",
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">Hubungi</span></div>
            <h1 className="sec-h">Hubungi Future Ready Executive MBA</h1>
            <p className="sec-sub">Tanya kami tentang kesesuaian program, tarikh mula, biasiswa atau permohonan HRD Corp. Menghantar borang tidak bermakna kemasukan automatik atau apa-apa komitmen bayaran.</p>
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
      <style>{`.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start}@media(max-width:820px){.contact-grid{grid-template-columns:1fr;gap:34px}}`}</style>
    </section>
  );
}
