import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

const path = "/zh/contact";
const waText = encodeURIComponent("您好，我想咨询 Future Ready 高管 MBA（英国 CMI 认可课程）。");

export const metadata = withSeo(path, {
  title: "联系课程团队",
  description: "通过 WhatsApp、电话、电邮或在线表格联系 Future Ready 高管 MBA 课程团队，咨询资格、班次、学费及 HRD Corp。",
});

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">联系</span></div>
            <h1 className="sec-h">直接与课程团队联系</h1>
            <p className="sec-sub">咨询课程适合度、开课日期、奖学金或 HRD Corp 申请。提交表格并不代表自动录取或付款。</p>
            <div className="mt-m" style={{ display: "grid", gap: 10 }}>
              <p style={{ margin: 0 }}><strong>{SITE.director}</strong> · 课程协调员</p>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="noopener" style={{ justifySelf: "start" }} data-track-event="contact_click" data-track-id="zh_contact_whatsapp" data-track-location="contact_page" data-contact-method="whatsapp" data-contact-language="zh">使用 WhatsApp 联系 →</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card"><LeadForm source="zh-contact" programme="Executive MBA" lang="zh" placement="contact" /></div>
          </Reveal>
        </div>
      </div>
      <style>{`.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start}@media(max-width:820px){.contact-grid{grid-template-columns:1fr;gap:34px}}`}</style>
    </section>
  );
}
