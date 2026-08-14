"use client";
import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";
import { SITE } from "@/lib/content";
import { getLeadAttribution, trackEvent } from "@/lib/analytics";
import "@/lib/turnstile";

type Lang = "en" | "zh";

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAEM-BhpyOxghbYJZ";

const T = {
  en: {
    name: "Full name", namePh: "Your name",
    phone: "Phone / WhatsApp", email: "Email", emailPh: "you@company.com",
    company: "Company", companyPh: "Organisation",
    participant: "Participant", malaysian: "Malaysian", international: "International",
    conversation: "How would you like to continue?",
    conversationOptions: [
      ["programme_call", "A short call about programme fit"],
      ["in_person_meeting", "An in-person meeting at an agreed location"],
      ["online_meeting", "An online information meeting"],
      ["details_first", "Send details first — no call yet"],
    ],
    consent: "I agree to be contacted about this programme and understand my data is handled under Malaysia’s PDPA 2010, as amended.",
    submit: "Request a conversation →", sending: "Sending…",
    err: "Please complete the required fields and tick consent, then try again.",
    verify: "Please complete the security check before submitting.",
    verifyErr: "The security check could not load. Refresh the page or continue securely on WhatsApp.",
    verifyFallback: "Continue on WhatsApp →",
    security: "Security verification",
    fine: "Exploratory · No obligation · PDPA-compliant",
    okK: "Request received", okH: (n: string) => `Thank you${n ? `, ${n}` : ""}. We’ll follow your preference.`,
    okP: "The programme team will contact you in the way you selected to discuss fit, schedules, HRD Corp and scholarship options. This is a conversation, not an admission or payment commitment.",
    okWa: "Continue on WhatsApp →",
    waMsg: (n: string) => `Hi, I'm ${n || "interested"} — I requested a conversation about the Future Ready Executive MBA (CMI UK).`,
  },
  zh: {
    name: "姓名", namePh: "您的姓名",
    phone: "电话 / WhatsApp", email: "电邮", emailPh: "you@company.com",
    company: "公司", companyPh: "所属机构",
    participant: "学员类型", malaysian: "马来西亚公民", international: "国际学员",
    conversation: "您希望如何进一步了解？",
    conversationOptions: [
      ["programme_call", "简短通话，了解课程是否适合"],
      ["in_person_meeting", "在双方同意的地点面谈"],
      ["online_meeting", "线上课程说明会"],
      ["details_first", "先发送资料，暂不通话"],
    ],
    consent: "我同意就本课程接受联系，并了解我的个人资料将依据马来西亚 2010 年个人资料保护法（PDPA）及其修订处理。",
    submit: "预约沟通 →", sending: "提交中…",
    err: "请填写必填字段并勾选同意，然后重试。",
    verify: "提交前请先完成安全验证。",
    verifyErr: "安全验证无法加载。请刷新页面，或通过 WhatsApp 安全联系我们。",
    verifyFallback: "通过 WhatsApp 联系我们 →",
    security: "安全验证",
    fine: "先了解 · 无需承诺 · 符合 PDPA",
    okK: "沟通请求已收到", okH: (n: string) => `谢谢您${n ? `，${n}` : ""}。我们会按您的选择联系。`,
    okP: "课程团队将按您选择的方式沟通适合度、排期、HRD Corp 及奖学金。这只是了解课程，不等于录取或付款承诺。",
    okWa: "继续使用 WhatsApp →",
    waMsg: (n: string) => `您好，我是 ${n || "意向学员"} — 我想进一步了解 Future Ready 高管 MBA（英国 CMI）。`,
  },
} as const;

export default function LeadForm({
  programme = "Executive MBA",
  source = "emba-hub",
  lang = "en",
  placement = "primary",
}: { programme?: string; source?: string; lang?: Lang; placement?: string }) {
  const t = T[lang];
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err" | "verify">("idle");
  const [firstName, setFirstName] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileLoadError, setTurnstileLoadError] = useState(false);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const formElement = useRef<HTMLFormElement>(null);
  const formViewed = useRef(false);
  const formStarted = useRef(false);
  const formId = `${source}:${programme}:${lang}:${placement}`.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const formContext = {
    form_id: formId,
    form_source: source,
    form_location: placement,
    programme,
    form_language: lang,
  };

  useEffect(() => {
    const form = formElement.current;
    if (!form || formViewed.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || formViewed.current) return;
      formViewed.current = true;
      trackEvent("lead_form_view", formContext);
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(form);
    return () => observer.disconnect();
  });

  useEffect(() => {
    let cancelled = false;
    let retryTimer: number | undefined;
    let attempts = 0;

    const mountWidget = () => {
      if (cancelled || turnstileWidgetId.current || !turnstileContainer.current) return;
      if (!window.turnstile) {
        attempts += 1;
        if (attempts >= 50) {
          setTurnstileLoadError(true);
          return;
        }
        retryTimer = window.setTimeout(mountWidget, 200);
        return;
      }

      try {
        turnstileWidgetId.current = window.turnstile.render(turnstileContainer.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: "lead-submit",
          theme: "dark",
          size: "flexible",
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileLoadError(false);
            setStatus((current) => (current === "verify" ? "idle" : current));
          },
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
          },
        });
      } catch {
        if (!cancelled) {
          setTurnstileLoadError(true);
        }
      }
    };

    mountWidget();
    return () => {
      cancelled = true;
      if (retryTimer) window.clearTimeout(retryTimer);
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
      turnstileWidgetId.current = null;
    };
  }, []);

  function resetTurnstile() {
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
    setTurnstileToken("");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.reportValidity()) return;
    const formData = new FormData(f);
    formData.delete("cf-turnstile-response");
    const data = Object.fromEntries(formData.entries());
    // Honeypot: bots fill hidden fields. Silently "succeed" without sending.
    if (data.website) { setFirstName(String(data.name || "").split(" ")[0]); setStatus("ok"); return; }
    if (!(data.consent as string)) {
      trackEvent("lead_form_error", { ...formContext, error_type: "consent_required" });
      setStatus("err");
      return;
    }
    if (!turnstileToken) {
      trackEvent("lead_form_error", { ...formContext, error_type: "security_verification_required" });
      setStatus("verify");
      return;
    }
    trackEvent("lead_form_submit", formContext);
    setStatus("sending");
    setFirstName(String(data.name || "").split(" ")[0]);
    let responseStatus: number | undefined;
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...getLeadAttribution(),
          programme_interest: programme,
          source,
          turnstile_token: turnstileToken,
        }),
      });
      responseStatus = res.status;
      if (!res.ok) throw new Error(await res.text());
      trackEvent("generate_lead", {
        ...formContext,
        lead_type: "programme_conversation_request",
        participant_type: data.participant_type,
        contact_preference: data.contact_preference,
      });
      setStatus("ok");
    } catch {
      trackEvent("lead_form_error", {
        ...formContext,
        error_type: responseStatus ? "api_rejected" : "network_error",
        http_status: responseStatus,
      });
      resetTurnstile();
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
        <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener" data-track-event="contact_click" data-track-id="lead_success_whatsapp" data-track-location="lead_success" data-contact-method="whatsapp" data-contact-language={lang}>
          {t.okWa}
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formElement}
      className="form"
      onSubmit={onSubmit}
      onFocusCapture={() => {
        if (formStarted.current) return;
        formStarted.current = true;
        trackEvent("lead_form_start", formContext);
      }}
      aria-busy={status === "sending"}
      data-form-id={formId}
      data-form-source={source}
      data-form-location={placement}
      data-programme={programme}
    >
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onError={() => setTurnstileLoadError(true)}
      />
      {/* Honeypot — visually hidden, off-screen, not announced to users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="fld">
        <label htmlFor={id("name")}>{t.name}</label>
        <input id={id("name")} name="name" placeholder={t.namePh} autoComplete="name" autoCapitalize="words" enterKeyHint="next" required />
      </div>
      <div className="two">
        <div className="fld">
          <label htmlFor={id("phone")}>{t.phone}</label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" placeholder="+60" autoComplete="tel" enterKeyHint="next" required />
        </div>
        <div className="fld">
          <label htmlFor={id("email")}>{t.email}</label>
          <input id={id("email")} name="email" type="email" inputMode="email" placeholder={t.emailPh} autoComplete="email" enterKeyHint="next" required />
        </div>
      </div>
      <div className="fld">
        <label htmlFor={id("conversation")}>{t.conversation}</label>
        <select id={id("conversation")} name="contact_preference" defaultValue="programme_call">
          {t.conversationOptions.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      <div className="two">
        <div className="fld">
          <label htmlFor={id("company")}>{t.company}</label>
          <input id={id("company")} name="company" placeholder={t.companyPh} autoComplete="organization" autoCapitalize="words" enterKeyHint="next" />
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
      <div className="turnstile-wrap" aria-label={t.security}>
        <div ref={turnstileContainer} />
      </div>
      {turnstileLoadError && (
        <div className="turnstile-fallback" role="alert">
          <p>{t.verifyErr}</p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.waMsg(""))}`}
            target="_blank"
            rel="noopener"
            data-track-event="contact_click"
            data-track-id="turnstile_fallback_whatsapp"
            data-track-location="lead_form_security_fallback"
            data-contact-method="whatsapp"
            data-contact-language={lang}
          >
            {t.verifyFallback}
          </a>
        </div>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending" || !turnstileToken} style={{ width: "100%" }}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "err" && <p className="status err" role="alert">{t.err}</p>}
      {status === "verify" && <p className="status err" role="alert">{t.verify}</p>}
      <p className="fine center" style={{ margin: 0 }}>{t.fine}</p>
    </form>
  );
}
