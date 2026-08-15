"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { getTurnstileApi as turnstileApi } from "@/lib/turnstile";
import { useFloatingUi } from "@/components/site/FloatingUiContext";

type Lang = "en" | "zh";
type Message = { role: "user" | "assistant"; content: string };

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAEM-BhpyOxghbYJZ";

const COPY = {
  en: {
    open: "Ask the programme assistant",
    title: "Programme assistant",
    eyebrow: "Verified programme facts",
    intro: "Ask about format, fees, intakes, recognition or eligibility. No personal details needed.",
    placeholder: "Ask a programme question…",
    send: "Send",
    sending: "Thinking…",
    close: "Close assistant",
    clear: "Clear conversation",
    disclosure: "AI answers are informational, not formal confirmation. Written programme and enrolment terms control.",
    privacy: "Do not enter personal, identity, payment or confidential information.",
    personalData: "For your privacy, please remove personal contact or identity details and ask the question again.",
    unavailable: "The assistant is unavailable right now. Please contact the programme team on WhatsApp.",
    security: "Security verification could not be completed. Please try again or use WhatsApp.",
    human: "Continue with a person on WhatsApp",
    prompts: ["What does the programme cost?", "How is it recognised?", "How does the certificate differ from an attendance certificate?", "When is the next intake?"],
    waMessage: "Hi, I have a question about the Future Ready Executive MBA.",
  },
  zh: {
    open: "咨询课程助手",
    title: "课程资讯助手",
    eyebrow: "经核实的课程资料",
    intro: "可查询课程形式、费用、开课日期、认可及申请条件，无需提供个人资料。",
    placeholder: "请输入课程问题…",
    send: "发送",
    sending: "正在整理…",
    close: "关闭课程助手",
    clear: "清除对话",
    disclosure: "AI 答案仅供参考，并非正式确认；正式课程资料及报名条款为准。",
    privacy: "请勿输入个人、身份、付款或机密资料。",
    personalData: "为了保护您的隐私，请删除个人联系或身份证明资料后重新提问。",
    unavailable: "课程助手暂时无法使用，请通过 WhatsApp 联系课程团队。",
    security: "无法完成安全验证，请重试或使用 WhatsApp。",
    human: "通过 WhatsApp 联系真人",
    prompts: ["课程费用是多少？", "课程获得什么认可？", "这与一般 HRD Corp 培训有何不同？", "下一期何时开课？"],
    waMessage: "您好，我想咨询 Future Ready 高管 MBA。",
  },
} as const;

function likelyContainsPersonalData(value: string) {
  const hasEmail = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(value);
  const hasIdentityNumber = /\b\d{6}-\d{2}-\d{4}\b/.test(value);
  const phoneCandidates = value.match(/(?:^|\s)(?:\+?\d[\d\s().-]{6,}\d)(?=$|\s|[,.!?])/g) || [];
  return hasEmail || hasIdentityNumber || phoneCandidates.some((candidate) => {
    const digitCount = candidate.replace(/\D/g, "").length;
    return digitCount >= 9 && digitCount <= 15;
  });
}

export default function ProgrammeAssistant() {
  const pathname = usePathname() || "/";
  const lang: Lang = pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
  const t = COPY[lang];
  const {
    assistantOpen: open,
    persistentActionsVisible,
    setAssistantOpen: setOpen,
  } = useFloatingUi();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [obstructionVisible, setObstructionVisible] = useState(false);
  const [turnstileScriptReady, setTurnstileScriptReady] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileToken = useRef<string | null>(null);
  const pendingVerification = useRef<((token: string | null) => void) | null>(null);

  useEffect(() => {
    setOpen(false);
    setMessages([]);
    setInput("");
    setError("");
    setStatus("idle");
    const turnstile = turnstileApi();
    if (turnstileWidgetId.current && turnstile) {
      turnstile.remove(turnstileWidgetId.current);
      turnstileWidgetId.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    const obstructions = [...document.querySelectorAll(".form, .programme-film")];
    if (!obstructions.length) {
      setObstructionVisible(false);
      return;
    }
    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
      setObstructionVisible([...visibility.values()].some(Boolean));
    }, { threshold: 0.08 });
    obstructions.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inertTargets = [
      ...document.querySelectorAll<HTMLElement>(".navbar,main,footer,.wa-float,.consent-banner"),
    ];
    const previousInert = inertTargets.map((target) => target.inert);
    inertTargets.forEach((target) => { target.inert = true; });
    window.setTimeout(() => inputRef.current?.focus(), 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled]),input:not([disabled])")];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      inertTargets.forEach((target, index) => { target.inert = previousInert[index]; });
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (!open || turnstileWidgetId.current) return;
    let cancelled = false;
    let attempts = 0;
    let timer: number | undefined;

    const mountWidget = () => {
      if (cancelled || turnstileWidgetId.current || !turnstileContainer.current) return;
      const turnstile = turnstileApi();
      if (!turnstile) {
        attempts += 1;
        if (attempts < 75) timer = window.setTimeout(mountWidget, 200);
        else trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "script_unavailable" });
        return;
      }
      try {
        turnstileWidgetId.current = turnstile.render(turnstileContainer.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: "programme-chat",
          theme: "light",
          execution: "execute",
          appearance: "interaction-only",
          callback: (token) => {
            turnstileToken.current = token;
            trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "token_received" });
            pendingVerification.current?.(token);
          },
          "expired-callback": () => {
            turnstileToken.current = null;
            pendingVerification.current?.(null);
          },
          "error-callback": () => {
            turnstileToken.current = null;
            trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "challenge_error" });
            pendingVerification.current?.(null);
          },
          "timeout-callback": () => {
            turnstileToken.current = null;
            trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "challenge_timeout" });
            pendingVerification.current?.(null);
          },
          "unsupported-callback": () => {
            turnstileToken.current = null;
            trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "browser_unsupported" });
            pendingVerification.current?.(null);
          },
        });
        trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "rendered" });
      } catch {
        trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "render_failed" });
        pendingVerification.current?.(null);
      }
    };

    mountWidget();
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
      const turnstile = turnstileApi();
      if (turnstileWidgetId.current && turnstile) {
        turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, [open, turnstileScriptReady]);

  useEffect(() => () => {
    const turnstile = turnstileApi();
    if (turnstileWidgetId.current && turnstile) {
      turnstile.remove(turnstileWidgetId.current);
    }
    turnstileWidgetId.current = null;
    pendingVerification.current?.(null);
  }, []);

  async function getSecurityToken(): Promise<string | null> {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      if (turnstileWidgetId.current && turnstileApi()) break;
      await new Promise((resolve) => window.setTimeout(resolve, 100));
    }

    if (turnstileToken.current) {
      const token = turnstileToken.current;
      turnstileToken.current = null;
      return token;
    }

    return new Promise((resolve) => {
      const turnstile = turnstileApi();
      if (!turnstileWidgetId.current || !turnstile) {
        trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "execute_unavailable" });
        resolve(null);
        return;
      }
      let settled = false;
      const finish = (token: string | null) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeout);
        if (pendingVerification.current === finish) pendingVerification.current = null;
        resolve(token);
      };
      const timeout = window.setTimeout(() => finish(null), 12_000);
      pendingVerification.current = finish;
      try {
        turnstile.execute(turnstileWidgetId.current);
        trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "executed" });
      } catch {
        trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "execute_failed" });
        finish(null);
      }
    });
  }

  function resetSecurity() {
    const turnstile = turnstileApi();
    if (turnstileWidgetId.current && turnstile) {
      turnstileToken.current = null;
      turnstile.reset(turnstileWidgetId.current);
    }
  }

  async function sendQuestion(question: string) {
    const cleanQuestion = question.trim().slice(0, 600);
    if (!cleanQuestion || status === "sending") return;
    if (likelyContainsPersonalData(cleanQuestion)) {
      setError(t.personalData);
      setStatus("error");
      return;
    }

    const nextMessages: Message[] = [...messages.slice(-5), { role: "user", content: cleanQuestion }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setStatus("sending");
    trackEvent("chat_message", { chat_language: lang, chat_turn: nextMessages.filter((message) => message.role === "user").length });

    try {
      const token = await getSecurityToken();
      if (!token) throw new Error("security");
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, lang, turnstile_token: token }),
      });
      const result = (await response.json()) as { answer?: string; error?: string };
      if (!response.ok || !result.answer) {
        if (result.error === "personal_data_not_allowed") throw new Error("personal");
        throw new Error(response.status === 400 ? "security" : "unavailable");
      }
      setMessages([...nextMessages, { role: "assistant", content: result.answer }]);
      setStatus("idle");
      resetSecurity();
    } catch (caught) {
      const reason = caught instanceof Error ? caught.message : "unavailable";
      setError(reason === "personal" ? t.personalData : reason === "security" ? t.security : t.unavailable);
      setStatus("error");
      resetSecurity();
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendQuestion(input);
  }

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        data-action="turnstile-spin-v1"
        onReady={() => {
          setTurnstileScriptReady(true);
          trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "script_ready" });
        }}
        onError={() => {
          setTurnstileScriptReady(false);
          trackEvent("turnstile_widget", { verification_surface: "programme_assistant", verification_state: "script_error" });
        }}
      />
      <button
        ref={launcherRef}
        className={`programme-assistant-launcher${obstructionVisible || !persistentActionsVisible ? " is-suppressed" : ""}`}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-hidden={obstructionVisible || !persistentActionsVisible}
        tabIndex={obstructionVisible || !persistentActionsVisible ? -1 : undefined}
        onClick={() => {
          setOpen(true);
          trackEvent("chat_open", { chat_language: lang, chat_location: "persistent_assistant" });
        }}
      >
        <span aria-hidden="true" className="assistant-mark">?</span>
        <span>{t.open}</span>
      </button>

      {open && (
        <>
          <button className="programme-assistant-backdrop" type="button" aria-label={t.close} onClick={() => { setOpen(false); launcherRef.current?.focus(); }} />
          <section ref={dialogRef} className="programme-assistant-panel" role="dialog" aria-modal="true" aria-labelledby="programme-assistant-title">
            <header className="programme-assistant-head">
              <div>
                <span className="mono">{t.eyebrow}</span>
                <h2 id="programme-assistant-title">{t.title}</h2>
              </div>
              <button type="button" aria-label={t.close} onClick={() => { setOpen(false); launcherRef.current?.focus(); }}>×</button>
            </header>

            <div ref={threadRef} className="programme-assistant-thread" aria-live="polite" aria-busy={status === "sending"}>
              {messages.length === 0 && (
                <div className="programme-assistant-welcome">
                  <p>{t.intro}</p>
                  <div className="programme-assistant-prompts">
                    {t.prompts.map((prompt) => (
                      <button key={prompt} type="button" onClick={() => void sendQuestion(prompt)}>{prompt}<span aria-hidden="true">→</span></button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`programme-assistant-message ${message.role}`}>
                  <span className="mono">{message.role === "user" ? (lang === "zh" ? "您" : "You") : (lang === "zh" ? "助手" : "Assistant")}</span>
                  <p>{message.content}</p>
                </div>
              ))}
              {status === "sending" && <p className="programme-assistant-thinking" role="status">{t.sending}</p>}
              {status === "error" && <p className="programme-assistant-error" role="alert">{error}</p>}
            </div>

            <div className="programme-assistant-compose">
              <form onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="programme-assistant-input">{t.placeholder}</label>
                <input
                  ref={inputRef}
                  id="programme-assistant-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value.slice(0, 600))}
                  placeholder={t.placeholder}
                  maxLength={600}
                  autoComplete="off"
                  disabled={status === "sending"}
                />
                <button type="submit" disabled={!input.trim() || status === "sending"}>{status === "sending" ? t.sending : t.send}</button>
              </form>
              <div ref={turnstileContainer} className="programme-assistant-turnstile" aria-hidden="true" data-action="turnstile-spin-v1" />
              <p className="programme-assistant-privacy">{t.privacy}</p>
              <div className="programme-assistant-actions">
                <button type="button" onClick={() => { setMessages([]); setError(""); setStatus("idle"); inputRef.current?.focus(); }}>{t.clear}</button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="contact_click"
                  data-track-id="chat_handoff_whatsapp"
                  data-track-location="programme_assistant"
                  data-contact-method="whatsapp"
                  data-contact-language={lang}
                >{t.human} ↗</a>
              </div>
              <p className="programme-assistant-disclosure">{t.disclosure}</p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
