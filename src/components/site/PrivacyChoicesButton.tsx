"use client";

import { CONSENT_PREFERENCES_EVENT } from "@/lib/analytics";

export default function PrivacyChoicesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_PREFERENCES_EVENT))}
    >
      {label}
    </button>
  );
}
