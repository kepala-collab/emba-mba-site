"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";
import { cohortKey, type LeadIntent } from "@/lib/conversion-contract";
import { conversionContextFromLocation, updateConversionContext } from "@/lib/conversion-context";
import { getExperimentAssignmentsJson } from "@/lib/experiments";
import { getLeadAttribution, trackEvent } from "@/lib/analytics";
import { INTAKES, SITE } from "@/lib/content";
import "@/lib/turnstile";

type Lang = "en" | "zh";
type Step = 1 | 2;
type Status = "idle" | "sending" | "ok" | "error" | "verify";
type ErrorType = "validation" | "rate_limit" | "service" | "network" | null;
type LeadFormVariant = "standard" | "campaign";

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAEM-BhpyOxghbYJZ";

const T = {
  en: {
    progress: (step: Step) => `Step ${step} of 2`,
    compactKicker: "Programme enquiry",
    compactTitle: "Get the programme guide.",
    compactIntro: "Tell us what you need first. The programme team will send the relevant information and published 2026 dates.",
    compactIntent: "What are you planning for?",
    stepOneKicker: "Your route",
    stepOneTitle: "What are you planning for?",
    stepOneIntro: "Choose the route that best describes your decision. The programme team will respond with the relevant information.",
    intents: [
      ["individual_self_funded", "Career progression", "I am considering the programme for myself."],
      ["employer_sponsored", "Employer sponsorship", "I want to use employer sponsorship or eligible HRD Corp funds."],
      ["employer_evaluating", "Managers development", "I am evaluating the programme for managers in my company."],
      ["international", "International participant", "I am applying from outside Malaysia."],
      ["mandarin", "Mandarin programme", "I want to discuss a Mandarin-language cohort."],
      ["details_first", "Programme information first", "Send the programme information before arranging a call."],
    ] as const,
    cohort: "Preferred 2026 cohort (optional)",
    cohortOpen: "Open for enquiries",
    cohortUnknown: "I have not selected a cohort",
    continue: "Continue to contact details →",
    campaignContinue: "Continue for the programme guide →",
    campaignKicker: "Free working manager guide",
    campaignTitle: "Send me the 2026 programme guide.",
    campaignIntro: "Includes the three-month CMI-recognised programme certificate stage, the following Chartered Manager preparation stage, published dates, programme fee and scholarship criteria.",
    stepTwoKicker: "Your contact details",
    stepTwoTitle: "Where should the programme team respond?",
    back: "← Back",
    selectedRoute: "Selected route",
    name: "Full name", namePh: "Your name",
    phone: "Phone / WhatsApp", email: "Email", emailPh: "you@company.com",
    company: "Company (optional)", companyPh: "Organisation",
    conversation: "How would you like to continue?",
    conversationOptions: [
      ["programme_call", "A short call about programme fit"],
      ["whatsapp", "A WhatsApp conversation"],
      ["online_meeting", "An online information meeting"],
      ["in_person_meeting", "An in-person meeting at an agreed location"],
      ["details_first", "Send details first — no call yet"],
    ] as const,
    contactWindow: "Preferred contact time",
    contactWindows: [
      ["flexible", "Flexible"],
      ["weekday_morning", "Weekday morning"],
      ["weekday_afternoon", "Weekday afternoon"],
      ["weekday_evening", "Weekday evening"],
      ["weekend", "Weekend"],
    ] as const,
    helper: "We use email to confirm the request and follow the contact method you select.",
    campaignHelper: "Use one contact method. You can review the guide before deciding whether to speak with the programme team.",
    consent: "I agree to be contacted about this programme and understand my data is handled under Malaysia’s PDPA 2010, as amended.",
    submit: "Send my programme request →", sending: "Sending securely…",
    campaignSubmit: "Send my guide →",
    errors: {
      validation: "Check the highlighted information and consent, then submit again. Your entries have been kept.",
      rate_limit: "This network has reached the submission limit. Wait ten minutes, then submit the same request again.",
      service: "The request service is temporarily unavailable. Your entries have been kept; submit again or continue on WhatsApp.",
      network: "The connection was interrupted. Your entries have been kept; check your connection and submit again.",
    },
    verify: "Complete the security check before submitting. Your entries have been kept.",
    verifyErr: "The security check could not load. Refresh the page or continue securely on WhatsApp.",
    verifyFallback: "Continue on WhatsApp →",
    security: "Security verification",
    fine: "Programme enquiry · No payment required · Privacy notice applies",
    campaignFine: "Free guide · No payment · No enrolment commitment",
    okK: "Request received",
    okH: (name: string) => `Thank you${name ? `, ${name}` : ""}. We’ll follow your preference.`,
    okP: "The programme team will respond about programme fit, your selected cohort, employer-led HRD Corp funding and scholarship eligibility. This request is not an admission, scholarship or payment commitment.",
    campaignOkP: "Your guide is ready below. Review it first; a programme conversation is optional and this request is not an admission, scholarship or payment commitment.",
    okRef: "Conversation reference",
    okPlan: "Open the 2026 programme guide →",
    okWa: "Continue on WhatsApp →",
    waMsg: (name: string, cohort: string) => `Hi, I'm ${name || "interested"}. I requested a conversation about the Future Ready Executive MBA${cohort ? ` for ${cohort}` : ""}.`,
  },
  zh: {
    progress: (step: Step) => `第 ${step} 步，共 2 步`,
    compactKicker: "课程咨询",
    compactTitle: "索取课程资料。",
    compactIntro: "请先告诉我们您的需求。课程团队会发送相关资料及已公布的 2026 开课日期。",
    compactIntent: "您目前正在规划什么？",
    stepOneKicker: "您的需求",
    stepOneTitle: "您目前正在规划什么？",
    stepOneIntro: "请选择最符合您情况的选项。课程团队将提供相关资料并按您的选择跟进。",
    intents: [
      ["individual_self_funded", "个人职业发展", "我正在为自己考虑这项课程。"],
      ["employer_sponsored", "公司赞助", "我希望使用公司赞助或符合条件的 HRD Corp 资金。"],
      ["employer_evaluating", "管理人员发展", "我正在为公司的管理人员评估这项课程。"],
      ["international", "国际学员", "我从马来西亚以外地区申请。"],
      ["mandarin", "华语课程", "我想了解华语授课班次。"],
      ["details_first", "先收取课程资料", "先发送课程资料，再决定是否安排通话。"],
    ] as const,
    cohort: "首选 2026 班次（选填）",
    cohortOpen: "开放咨询",
    cohortUnknown: "尚未选择班次",
    continue: "继续填写联系方式 →",
    campaignContinue: "继续获取课程指南 →",
    campaignKicker: "免费在职经理指南",
    campaignTitle: "发送 2026 课程指南给我。",
    campaignIntro: "内容包括三个月获 CMI 认可的课程证书阶段、随后 Chartered Manager 评估准备阶段、已公布日期、课程费用及奖学金条件。",
    stepTwoKicker: "沟通方式",
    stepTwoTitle: "课程团队应如何回复您？",
    back: "← 返回",
    selectedRoute: "已选需求",
    name: "姓名", namePh: "您的姓名",
    phone: "电话 / WhatsApp", email: "电邮", emailPh: "you@company.com",
    company: "公司（选填）", companyPh: "所属机构",
    conversation: "您希望如何进一步了解？",
    conversationOptions: [
      ["programme_call", "简短通话，了解课程是否适合"],
      ["whatsapp", "通过 WhatsApp 沟通"],
      ["online_meeting", "线上课程说明会"],
      ["in_person_meeting", "在双方同意的地点面谈"],
      ["details_first", "先发送资料，暂不通话"],
    ] as const,
    contactWindow: "首选联系时间",
    contactWindows: [
      ["flexible", "时间灵活"],
      ["weekday_morning", "工作日上午"],
      ["weekday_afternoon", "工作日下午"],
      ["weekday_evening", "工作日晚上"],
      ["weekend", "周末"],
    ] as const,
    helper: "我们会通过电邮确认请求，并按您选择的方式联系。",
    campaignHelper: "只需提供一种联系方式。您可先查看指南，再决定是否与课程团队沟通。",
    consent: "我同意就本课程接受联系，并了解我的个人资料将依据马来西亚 2010 年个人资料保护法（PDPA）及其修订处理。",
    submit: "发送课程咨询 →", sending: "正在安全提交…",
    campaignSubmit: "发送课程指南给我 →",
    errors: {
      validation: "请检查资料及同意选项后再次提交。您填写的内容已保留。",
      rate_limit: "此网络已达到提交上限。请等待十分钟后再次提交同一请求。",
      service: "请求服务暂时无法使用。您填写的内容已保留；请再次提交或通过 WhatsApp 联系。",
      network: "网络连接中断。您填写的内容已保留；请检查网络后再次提交。",
    },
    verify: "提交前请完成安全验证。您填写的内容已保留。",
    verifyErr: "安全验证无法加载。请刷新页面，或通过 WhatsApp 安全联系我们。",
    verifyFallback: "通过 WhatsApp 联系我们 →",
    security: "安全验证",
    fine: "课程咨询 · 无需付款 · 适用隐私声明",
    campaignFine: "免费指南 · 无需付款 · 不代表报名承诺",
    okK: "沟通请求已收到",
    okH: (name: string) => `谢谢您${name ? `，${name}` : ""}。我们会按您的选择联系。`,
    okP: "课程团队将回复课程适合度、所选班次、雇主申请 HRD Corp 及奖学金资格。这项请求不等于录取、奖学金批准或付款承诺。",
    campaignOkP: "您的课程指南已可在下方打开。您可先查看资料；是否进一步沟通由您决定。这项请求不等于录取、奖学金批准或付款承诺。",
    okRef: "沟通编号",
    okPlan: "查看 2026 课程指南 →",
    okWa: "继续使用 WhatsApp →",
    waMsg: (name: string, cohort: string) => `您好，我是 ${name || "意向学员"}。我已提交 Future Ready 高管 MBA 沟通请求${cohort ? `，首选 ${cohort}` : ""}。`,
  },
} as const;

function selectedIntentLabel(lang: Lang, intent: LeadIntent) {
  return T[lang].intents.find(([value]) => value === intent)?.[1] || "";
}

function selectedIntentDescription(lang: Lang, intent: LeadIntent) {
  return T[lang].intents.find(([value]) => value === intent)?.[2] || "";
}

function cohortLabel(key: string, lang: Lang) {
  const cohort = INTAKES.find((item) => cohortKey(item.language, item.co) === key);
  if (!cohort) return "";
  const language = lang === "zh" && cohort.language === "Mandarin" ? "华语" : cohort.language;
  return `${cohort.co} · ${language} · ${cohort.s1} 2026`;
}

export default function LeadForm({
  programme = "Executive MBA",
  source = "emba-hub",
  lang = "en",
  placement = "primary",
  variant = "standard",
  compact = false,
  defaultIntent,
  intentOptions,
}: {
  programme?: string;
  source?: string;
  lang?: Lang;
  placement?: string;
  variant?: LeadFormVariant;
  compact?: boolean;
  defaultIntent?: LeadIntent;
  intentOptions?: readonly LeadIntent[];
}) {
  const t = T[lang];
  const campaign = variant === "campaign";
  const compactMode = compact && !campaign;
  const allowedIntents = intentOptions;
  const initialIntent = defaultIntent || (campaign ? "details_first" : allowedIntents?.[0]) || "individual_self_funded";
  const uid = useId();
  const id = (key: string) => `${uid}-${key}`;
  const [step, setStep] = useState<Step>(campaign ? 2 : 1);
  const [status, setStatus] = useState<Status>("idle");
  const [errorType, setErrorType] = useState<ErrorType>(null);
  const [intent, setIntent] = useState<LeadIntent>(initialIntent);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [contactPreference, setContactPreference] = useState(campaign ? "details_first" : "programme_call");
  const [firstName, setFirstName] = useState("");
  const [leadReference, setLeadReference] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileLoadError, setTurnstileLoadError] = useState(false);
  const [turnstileScriptReady, setTurnstileScriptReady] = useState(false);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const formElement = useRef<HTMLFormElement>(null);
  const firstContactField = useRef<HTMLInputElement>(null);
  const submissionId = useRef("");
  const formViewed = useRef(false);
  const formStarted = useRef(false);
  const formId = `${source}:${programme}:${lang}:${placement}`.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const formContext = {
    form_id: formId,
    form_source: source,
    form_location: placement,
    programme,
    form_language: lang,
    form_version: "2026.08.v4",
  };

  function changeIntent(value: LeadIntent) {
    markStarted();
    setIntent(value);
    if (value === "mandarin" && !selectedCohort) {
      const firstMandarin = INTAKES.find((item) => item.language === "Mandarin");
      if (firstMandarin) setSelectedCohort(cohortKey(firstMandarin.language, firstMandarin.co));
    }
  }

  useEffect(() => {
    const context = conversionContextFromLocation();
    setIntent(!allowedIntents || allowedIntents.includes(context.intent) ? context.intent : initialIntent);
    if (!campaign) setSelectedCohort(context.cohort_key || "");
  }, []);

  useEffect(() => {
    const form = formElement.current;
    if (!form || formViewed.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || formViewed.current) return;
      formViewed.current = true;
      trackEvent("lead_form_view", formContext);
      trackEvent("lead_form_step_view", { ...formContext, form_step: campaign ? 2 : 1 });
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(form);
    return () => observer.disconnect();
  });

  useEffect(() => {
    if (step !== 2) return;
    let cancelled = false;
    let retryTimer: number | undefined;
    let attempts = 0;

    const mountWidget = () => {
      if (cancelled || turnstileWidgetId.current || !turnstileContainer.current) return;
      if (!window.turnstile) {
        attempts += 1;
        if (attempts >= 75) {
          setTurnstileLoadError(true);
          trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "script_unavailable" });
          return;
        }
        retryTimer = window.setTimeout(mountWidget, 200);
        return;
      }
      try {
        turnstileWidgetId.current = window.turnstile.render(turnstileContainer.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: "lead-submit",
          theme: "light",
          size: "flexible",
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileLoadError(false);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "token_received" });
            setStatus((current) => current === "verify" ? "idle" : current);
          },
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "challenge_error" });
          },
          "timeout-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "challenge_timeout" });
          },
          "unsupported-callback": () => {
            setTurnstileToken("");
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "browser_unsupported" });
          },
        });
        trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "rendered" });
      } catch {
        if (!cancelled) {
          setTurnstileLoadError(true);
          trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "render_failed" });
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
  }, [step, turnstileScriptReady]);

  function markStarted() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("lead_form_start", formContext);
  }

  function resetTurnstile() {
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
    setTurnstileToken("");
  }

  function continueToContact() {
    markStarted();
    updateConversionContext({ intent, cohort_key: selectedCohort || null });
    trackEvent("conversion_context_set", {
      ...formContext,
      lead_intent: intent,
      cohort_key: selectedCohort || "not_selected",
    });
    trackEvent("lead_form_step_complete", { ...formContext, form_step: 1 });
    setStatus("idle");
    setErrorType(null);
    setStep(2);
    trackEvent("lead_form_step_view", { ...formContext, form_step: 2 });
    window.requestAnimationFrame(() => firstContactField.current?.focus({ preventScroll: true }));
  }

  function returnToRoute() {
    trackEvent("lead_form_step_back", { ...formContext, from_step: 2, to_step: 1 });
    setStatus("idle");
    setErrorType(null);
    setStep(1);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      continueToContact();
      return;
    }
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      trackEvent("lead_form_error", { ...formContext, form_step: 2, error_type: "validation" });
      setStatus("error");
      setErrorType("validation");
      return;
    }
    const formData = new FormData(form);
    formData.delete("cf-turnstile-response");
    const data = Object.fromEntries(formData.entries());
    if (data.website) {
      setFirstName(String(data.name || "").split(" ")[0]);
      setStatus("ok");
      return;
    }
    if (data.consent !== "yes") {
      trackEvent("lead_form_error", { ...formContext, form_step: 2, error_type: "consent_required" });
      setStatus("error");
      setErrorType("validation");
      return;
    }
    if (!turnstileToken) {
      trackEvent("lead_form_error", { ...formContext, form_step: 2, error_type: "security_verification_required" });
      setStatus("verify");
      setErrorType(null);
      return;
    }

    submissionId.current ||= crypto.randomUUID();
    trackEvent("lead_form_step_complete", { ...formContext, form_step: 2 });
    trackEvent("lead_form_submit", { ...formContext, lead_intent: intent, cohort_key: selectedCohort || "not_selected" });
    setStatus("sending");
    setErrorType(null);
    setFirstName(String(data.name || "").split(" ")[0]);
    let responseStatus: number | undefined;
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...getLeadAttribution(),
          submission_id: submissionId.current,
          lead_intent: intent,
          cohort_key: selectedCohort || null,
          participant_type: intent === "international" ? "international" : "malaysian",
          contact_preference: contactPreference,
          programme_interest: programme,
          source,
          experiment_json: getExperimentAssignmentsJson(),
          turnstile_token: turnstileToken,
        }),
      });
      responseStatus = response.status;
      const result = await response.json().catch(() => ({})) as { lead_reference?: unknown };
      if (!response.ok) throw new Error("lead_api_rejected");
      if (typeof result.lead_reference === "string") setLeadReference(result.lead_reference);
      trackEvent("generate_lead", {
        ...formContext,
        lead_type: "programme_conversation_request",
        participant_type: intent === "international" ? "international" : "malaysian",
        contact_preference: contactPreference,
        lead_intent: intent,
        cohort_key: selectedCohort || "not_selected",
      });
      setStatus("ok");
    } catch {
      const nextError: ErrorType = responseStatus === 429
        ? "rate_limit"
        : responseStatus && responseStatus >= 500
          ? "service"
          : responseStatus
            ? "validation"
            : "network";
      trackEvent("lead_form_error", {
        ...formContext,
        form_step: 2,
        error_type: nextError,
        http_status: responseStatus,
      });
      resetTurnstile();
      setErrorType(nextError);
      setStatus("error");
    }
  }

  if (status === "ok") {
    const selectedLabel = cohortLabel(selectedCohort, lang);
    const message = encodeURIComponent(t.waMsg(firstName, selectedLabel));
    return (
      <div className="form lead-form-success" style={{ alignItems: "flex-start", gap: 16 }} role="status">
        <p className="mono sec-k">{t.okK}</p>
        <h3>{t.okH(firstName)}</h3>
        <p className="fine">{campaign ? t.campaignOkP : t.okP}</p>
        {leadReference && <p className="lead-reference"><span>{t.okRef}</span><code>{leadReference}</code></p>}
        {campaign && (
          <a className="btn btn-primary" href={lang === "zh" ? "/zh/resources/advancement-brief" : "/resources/advancement-brief"} data-track-event="cta_click" data-track-id="lead_success_programme_plan" data-track-location="lead_success">
            {t.okPlan}
          </a>
        )}
        <a className="btn btn-wa" href={`https://wa.me/${SITE.whatsapp}?text=${message}`} target="_blank" rel="noopener" data-track-event="contact_click" data-track-id="lead_success_whatsapp" data-track-location="lead_success" data-contact-method="whatsapp" data-contact-language={lang}>
          {t.okWa}
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formElement}
      className={`form lead-form-progressive${campaign ? " lead-form-campaign" : ""}${compactMode ? " lead-form-compact" : ""}`}
      onSubmit={onSubmit}
      onFocusCapture={markStarted}
      aria-busy={status === "sending"}
      data-form-id={formId}
      data-form-source={source}
      data-form-location={placement}
      data-programme={programme}
    >
      {step === 2 && (
        <Script
          id="cloudflare-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          data-action="turnstile-spin-v1"
          onReady={() => {
            setTurnstileScriptReady(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "script_ready" });
          }}
          onError={() => {
            setTurnstileLoadError(true);
            trackEvent("turnstile_widget", { ...formContext, verification_surface: "lead_form", verification_state: "script_error" });
          }}
        />
      )}

      {!campaign && (
        <div className="lead-form-progress" aria-label={t.progress(step)}>
          <span>{t.progress(step)}</span>
          <span className="lead-form-progress-track" aria-hidden="true"><i style={{ width: step === 1 ? "50%" : "100%" }} /></span>
        </div>
      )}

      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {!campaign && <fieldset className="lead-form-step" disabled={step !== 1} hidden={step !== 1}>
        <legend className="sr-only">{t.stepOneTitle}</legend>
        <p className="mono sec-k acc">{compactMode ? t.compactKicker : t.stepOneKicker}</p>
        <h2>{compactMode ? t.compactTitle : t.stepOneTitle}</h2>
        <p className="form-helper lead-form-intro">{compactMode ? t.compactIntro : t.stepOneIntro}</p>
        {compactMode ? (
          <div className="fld lead-form-intent-select">
            <label htmlFor={id("lead-intent")}>{t.compactIntent}</label>
            <select
              id={id("lead-intent")}
              name="lead_intent_choice"
              value={intent}
              onChange={(event) => changeIntent(event.target.value as LeadIntent)}
            >
              {t.intents.filter(([value]) => !allowedIntents || allowedIntents.includes(value)).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <p className="form-helper">{selectedIntentDescription(lang, intent)}</p>
          </div>
        ) : (
          <div className="intent-grid" role="radiogroup" aria-label={t.stepOneTitle}>
            {t.intents.filter(([value]) => !allowedIntents || allowedIntents.includes(value)).map(([value, label, description]) => (
              <label className={`intent-option${intent === value ? " is-selected" : ""}`} key={value}>
                <input
                  type="radio"
                  name="lead_intent_choice"
                  value={value}
                  checked={intent === value}
                  onChange={() => changeIntent(value)}
                />
                <span><strong>{label}</strong><small>{description}</small></span>
              </label>
            ))}
          </div>
        )}
        {!campaign && !compactMode && (
          <div className="fld">
            <label htmlFor={id("cohort")}>{t.cohort}</label>
            <select id={id("cohort")} value={selectedCohort} onChange={(event) => setSelectedCohort(event.target.value)}>
              <option value="">{t.cohortUnknown}</option>
              {INTAKES.map((cohort) => {
                const key = cohortKey(cohort.language, cohort.co);
                return <option key={key} value={key}>{cohortLabel(key, lang)} · {t.cohortOpen}</option>;
              })}
            </select>
          </div>
        )}
        <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>{campaign ? t.campaignContinue : t.continue}</button>
      </fieldset>}

      <fieldset className="lead-form-step" disabled={step !== 2 || status === "sending"} hidden={step !== 2}>
        <legend className="sr-only">{campaign ? t.campaignTitle : t.stepTwoTitle}</legend>
        <div className="lead-form-step-header">
          <div>
            <p className="mono sec-k acc">{campaign ? t.campaignKicker : t.stepTwoKicker}</p>
            <h2>{campaign ? t.campaignTitle : t.stepTwoTitle}</h2>
            {campaign && <p className="form-helper lead-form-intro">{t.campaignIntro}</p>}
          </div>
          {!campaign && <button className="lead-form-back" type="button" onClick={returnToRoute}>{t.back}</button>}
        </div>
        {!campaign && <p className="lead-form-selection"><span>{t.selectedRoute}</span><strong>{selectedIntentLabel(lang, intent)}</strong>{selectedCohort && <small>{cohortLabel(selectedCohort, lang)}</small>}</p>}
        {!campaign && compactMode && (
          <div className="fld">
            <label htmlFor={id("cohort")}>{t.cohort}</label>
            <select id={id("cohort")} value={selectedCohort} onChange={(event) => setSelectedCohort(event.target.value)}>
              <option value="">{t.cohortUnknown}</option>
              {INTAKES.map((cohort) => {
                const key = cohortKey(cohort.language, cohort.co);
                return <option key={key} value={key}>{cohortLabel(key, lang)} · {t.cohortOpen}</option>;
              })}
            </select>
          </div>
        )}
        <div className="fld">
          <label htmlFor={id("name")}>{t.name}</label>
          <input ref={firstContactField} id={id("name")} name="name" placeholder={t.namePh} autoComplete="name" autoCapitalize="words" enterKeyHint="next" required />
        </div>
        {campaign ? (
          <div className="fld">
            <label htmlFor={id("email")}>{t.email}</label>
            <input id={id("email")} name="email" type="email" inputMode="email" placeholder={t.emailPh} autoComplete="email" enterKeyHint="done" required />
            <p className="form-helper">{lang === "zh" ? "提交后，课程决策指南将自动发送至此电邮地址。" : "Your private decision guide will be sent automatically to this email address after submission."}</p>
          </div>
        ) : (
          <>
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
            <div className="two">
              <div className="fld">
                <label htmlFor={id("conversation")}>{t.conversation}</label>
                <select id={id("conversation")} name="contact_preference" value={contactPreference} onChange={(event) => setContactPreference(event.target.value)}>
                  {t.conversationOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div className="fld">
                <label htmlFor={id("contact-window")}>{t.contactWindow}</label>
                <select id={id("contact-window")} name="preferred_contact_window" defaultValue="flexible">
                  {t.contactWindows.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
            </div>
          </>
        )}
        {campaign && <input type="hidden" name="preferred_contact_window" value="flexible" />}
        {!campaign && (
          <div className="fld">
            <label htmlFor={id("company")}>{t.company}</label>
            <input id={id("company")} name="company" placeholder={t.companyPh} autoComplete="organization" autoCapitalize="words" enterKeyHint="next" />
          </div>
        )}
        <p className="form-helper">{campaign ? t.campaignHelper : t.helper}</p>
        <label className="check">
          <input type="checkbox" name="consent" value="yes" required />
          <span>{t.consent}</span>
        </label>
        <div className="turnstile-wrap" role="group" aria-label={t.security}><div ref={turnstileContainer} data-action="turnstile-spin-v1" /></div>
        {turnstileLoadError && (
          <div className="turnstile-fallback" role="alert">
            <p>{t.verifyErr}</p>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.waMsg("", cohortLabel(selectedCohort, lang)))}`} target="_blank" rel="noopener" data-track-event="contact_click" data-track-id="turnstile_fallback_whatsapp" data-track-location="lead_form_security_fallback" data-contact-method="whatsapp" data-contact-language={lang}>{t.verifyFallback}</a>
          </div>
        )}
        <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ width: "100%" }}>
          {status === "sending" ? t.sending : campaign ? t.campaignSubmit : t.submit}
        </button>
        <div aria-live="polite" aria-atomic="true">
          {status === "error" && errorType && <p className="status err" role="alert">{t.errors[errorType]}</p>}
          {status === "verify" && <p className="status err" role="alert">{t.verify}</p>}
        </div>
        <p className="fine center" style={{ margin: 0 }}>{campaign ? t.campaignFine : t.fine}</p>
      </fieldset>
    </form>
  );
}
