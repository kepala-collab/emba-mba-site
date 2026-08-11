"use client";
import { useId, useState } from "react";
import { SITE } from "@/lib/content";

type Lang = "en" | "zh";

const T = {
  en: {
    name: "Full name", namePh: "Your name",
    phone: "Phone / WhatsApp", email: "Email", emailPh: "you@company.com",
    company: "Company", companyPh: "Organisation",
    participant: "Participant", malaysian: "Malaysian", international: "International",
    consent: "I agree to be contacted about this programme and understand my data is handled under Malaysia’s PDPA 2010.",
    submit: "Apply Now →", sending: "Sending…",
    err: "Please complete the required fields and tick consent, then try again.",
    fine: "Free · No obligation · PDPA-compliant",
    okK: "Application received", okH: (n: string) => `Thank you${n ? `, ${n}` : ""}. Your application is in.`,
    okP: "Our programme team will be in touch shortly to discuss your fit, the next intake, HRD Corp and scholarship options. Want to talk sooner? Message us directly.",
    okWa: "Continue on WhatsApp →",
    waMsg: (n: string) => `Hi, I'm ${n || "interested"} — I just applied for the Future Ready Executive MBA (CMI UK).`,
  },
  zh: {
    name: "姓名", namePh: "您的姓名",
    phone: "电话 / WhatsApp", email: "电邮", emailPh: "you@company.com",
    company: "公司", companyPh: "所属机构",
    participant: "学员类型", malaysian: "马来西亚公民", international: "国际学员",
    consent: "我同意就本课程接受联系，并了解我的个人资料将依据马来西亚 2010 年个人资料保护法（PDPA）处理。",
    submit: "立即报名 →", sending: "提交中…",
    err: "请填写必填字段并勾选同意，然后重试。",
    fine: "免费 · 无需承诺 · 符合 PDPA",
    okK: "报名已收到", okH: (n: string) => `谢谢您${n ? `，${n}` : ""}。您的报名已提交。`,
    okP: "我们的课程团队将尽快与您联系，讨论您的适合度、下一期开课、HRD Corp 索赔及奖学金选项。想更快了解？直接给我们发消息。",
    okWa: "继续使用 WhatsApp →",
    waMsg: (n: string) => `您好，我是 ${n || "意向学员"} — 我刚报名了 Future Ready 高管 MBA（英国 CMI）。`,
  },
} as const;

// Read attribution/context at submit time (avoids a setState-in-effect and stays SSR-safe).
function collectMeta(): Record<string, string> {
  const p = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const m: Record<string, string> = {};
  keys.forEach((k) => { const v = p.get(k); if (v) m[k] = v; });
  m.page_path = window.location.pathname;
  m.referrer = document.referrer || "";
  return m;
}

export default function LeadForm({
  programme = "Executive MBA",
  source = "emba-hub",
  lang = "en",
}: { programme?: string; source?: string; lang?: Lang }) {
  const t = T[lang];
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [firstName, setFirstName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = Object.fromEntries(new FormData(f).entries());
    // Honeypot: bots fill hidden fields. Silently "succeed" without sending.
    if (data.website) { setFirstName(String(data.name || "").split(" ")[0]); setStatus("ok"); return; }
    if (!(data.consent as string)) { setStatus("err"); return; }
    setStatus("sending");
    setFirstName(String(data.name || "").split(" ")[0]);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...collectMeta(), programme_interest: programme, source }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    const msg = encodeURIComponent(t.waMsg(firstName));
    return (
      <div className="form" style={{ alignItems: "flex-start", gap: 16 }}>
        <p className="mono sec-k">{t.okK}</p>
        <h3 style={{ fontSize: "1.5rem", color: "#fff" }}>{t.okH(firstName)}</h3>
        <p className="fine">{t.okP}</p>
        <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener">
          {t.okWa}
        </a>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {/* Honeypot — visually hidden, off-screen, not announced to users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="fld">
        <label htmlFor={id("name")}>{t.name}</label>
        <input id={id("name")} name="name" placeholder={t.namePh} autoComplete="name" required />
      </div>
      <div className="two">
        <div className="fld">
          <label htmlFor={id("phone")}>{t.phone}</label>
          <input id={id("phone")} name="phone" type="tel" placeholder="+60" autoComplete="tel" required />
        </div>
        <div className="fld">
          <label htmlFor={id("email")}>{t.email}</label>
          <input id={id("email")} name="email" type="email" placeholder={t.emailPh} autoComplete="email" required />
        </div>
      </div>
      <div className="two">
        <div className="fld">
          <label htmlFor={id("company")}>{t.company}</label>
          <input id={id("company")} name="company" placeholder={t.companyPh} autoComplete="organization" />
        </div>
        <div className="fld">
          <label htmlFor={id("type")}>{t.participant}</label>
          <select id={id("type")} name="participant_type" defaultValue="malaysian">
            <option value="malaysian">{t.malaysian}</option>
            <option value="international">{t.international}</option>
          </select>
        </div>
      </div>
      <label className="check">
        <input type="checkbox" name="consent" value="yes" required />
        <span>{t.consent}</span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ width: "100%" }}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "err" && <p className="status err">{t.err}</p>}
      <p className="fine center" style={{ margin: 0 }}>{t.fine}</p>
    </form>
  );
}
