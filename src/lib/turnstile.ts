export type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "dark";
      size?: "normal" | "flexible" | "compact";
      execution?: "execute";
      appearance?: "interaction-only";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      "timeout-callback"?: () => void;
      "unsupported-callback"?: () => void;
    },
  ) => string;
  execute: (widgetId: string) => void;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function getTurnstileApi() {
  return typeof window === "undefined" ? undefined : window.turnstile;
}
