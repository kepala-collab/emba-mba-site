"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ConsentStatus = "unknown" | "required" | "resolved";

type FloatingUiContextValue = {
  consentStatus: ConsentStatus;
  navigationOpen: boolean;
  assistantOpen: boolean;
  contentDialogOpen: boolean;
  consentVisible: boolean;
  persistentActionsVisible: boolean;
  setConsentStatus: (status: ConsentStatus) => void;
  setNavigationOpen: (open: boolean) => void;
  setAssistantOpen: (open: boolean) => void;
  setContentDialogOpen: (open: boolean) => void;
};

const FloatingUiContext = createContext<FloatingUiContextValue | null>(null);

export function FloatingUiProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [consentStatus, setConsentStatusState] = useState<ConsentStatus>("unknown");
  const [navigationOpen, setNavigationOpenState] = useState(false);
  const [assistantOpen, setAssistantOpenState] = useState(false);
  const [contentDialogOpen, setContentDialogOpenState] = useState(false);

  const setConsentStatus = useCallback((status: ConsentStatus) => {
    setConsentStatusState(status);
    if (status === "required") {
      setAssistantOpenState(false);
      setContentDialogOpenState(false);
    }
  }, []);

  const setNavigationOpen = useCallback((open: boolean) => {
    setNavigationOpenState(open);
    if (open) {
      setAssistantOpenState(false);
      setContentDialogOpenState(false);
    }
  }, []);

  const setAssistantOpen = useCallback((open: boolean) => {
    setAssistantOpenState(open);
    if (open) {
      setNavigationOpenState(false);
      setContentDialogOpenState(false);
    }
  }, []);

  const setContentDialogOpen = useCallback((open: boolean) => {
    setContentDialogOpenState(open);
    if (open) {
      setNavigationOpenState(false);
      setAssistantOpenState(false);
    }
  }, []);

  const value = useMemo<FloatingUiContextValue>(() => ({
    consentStatus,
    navigationOpen,
    assistantOpen,
    contentDialogOpen,
    consentVisible:
      consentStatus === "required" && !navigationOpen && !assistantOpen && !contentDialogOpen,
    persistentActionsVisible:
      consentStatus === "resolved" && !navigationOpen && !assistantOpen && !contentDialogOpen,
    setConsentStatus,
    setNavigationOpen,
    setAssistantOpen,
    setContentDialogOpen,
  }), [
    assistantOpen,
    consentStatus,
    contentDialogOpen,
    navigationOpen,
    setAssistantOpen,
    setConsentStatus,
    setContentDialogOpen,
    setNavigationOpen,
  ]);

  return <FloatingUiContext.Provider value={value}>{children}</FloatingUiContext.Provider>;
}

export function useFloatingUi() {
  const value = useContext(FloatingUiContext);
  if (!value) throw new Error("useFloatingUi must be used within FloatingUiProvider");
  return value;
}
