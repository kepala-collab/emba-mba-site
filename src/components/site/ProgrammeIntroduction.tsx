"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFloatingUi } from "@/components/site/FloatingUiContext";
import { trackEvent } from "@/lib/analytics";

const VIDEO_URL = process.env.NEXT_PUBLIC_PROGRAMME_VIDEO_URL;
const CAPTIONS_URL = process.env.NEXT_PUBLIC_PROGRAMME_VIDEO_CAPTIONS_URL;

type ProgrammeIntroductionProps = {
  image?: "hero" | "conversation";
  placement?: string;
};

const programmeImages = {
  hero: {
    src: "/brand/working-scholar-hero.webp",
    alt: "Experienced manager reviewing programme information at a desk",
  },
  conversation: {
    src: "/brand/working-scholar-conversation.webp",
    alt: "Illustration of two experienced professionals discussing a programme decision",
  },
} as const;

export default function ProgrammeIntroduction({ image = "hero", placement = "programme-introduction" }: ProgrammeIntroductionProps) {
  const { contentDialogOpen: open, setContentDialogOpen: setOpen } = useFloatingUi();
  const programmeImage = programmeImages[image];
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const videoMilestones = useRef(new Set<number>());
  const hasVideo = Boolean(VIDEO_URL);

  function openIntroduction() {
    trackEvent("programme_introduction_open", {
      content_type: hasVideo ? "video" : "text",
      content_location: placement,
    });
    setOpen(true);
  }

  function trackVideoMilestone(milestone: number) {
    if (videoMilestones.current.has(milestone)) return;
    videoMilestones.current.add(milestone);
    trackEvent(milestone === 0 ? "programme_video_start" : "programme_video_progress", {
      content_location: placement,
      video_progress: milestone,
    });
  }

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inertTargets = [
      ...document.querySelectorAll<HTMLElement>(".navbar,main,footer,.consent-banner,.programme-assistant-launcher,.wa-float"),
    ];
    const previousInert = inertTargets.map((target) => target.inert);
    inertTargets.forEach((target) => { target.inert = true; });
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled]),video[controls]")];
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

  return (
    <>
      <div className="programme-film">
        <div className="programme-film-art">
          <Image
            className="programme-film-image"
            src={programmeImage.src}
            alt={programmeImage.alt}
            fill
            priority={image === "hero"}
            sizes="(max-width: 1023px) 100vw, 46vw"
          />
          <div className="programme-film-caption">
            <span className="mono">PROGRAMME INTRODUCTION</span>
            <strong>{hasVideo ? "Watch how the six-month programme works." : "Read how the six-month programme works."}</strong>
          </div>
        </div>
        <div className="programme-film-control">
          <div>
            <p className="mono">Programme introduction</p>
            <strong>{hasVideo ? "A three-minute programme overview" : "The complete six-month structure"}</strong>
          </div>
          <button
            ref={triggerRef}
            type="button"
            className="film-play"
            onClick={openIntroduction}
            aria-haspopup="dialog"
          >
            <span aria-hidden="true">{hasVideo ? "▶" : "→"}</span>
            {hasVideo ? "Watch" : "Read"}
          </button>
        </div>
        <p className="programme-film-note">
          {hasVideo
            ? `${CAPTIONS_URL ? "Captions and transcript available" : "Transcript available"} · no sound autoplay`
            : "Text overview · no contact details required"}
        </p>
      </div>

      {mounted && open && createPortal(
        <div className="film-dialog-shell" role="presentation">
          <button className="film-dialog-backdrop" type="button" aria-label="Close programme introduction" onClick={() => setOpen(false)} />
          <section ref={dialogRef} className="film-dialog" role="dialog" aria-modal="true" aria-labelledby="film-dialog-title">
            <header>
              <div>
                <p className="mono sec-k">Programme introduction</p>
                <h2 id="film-dialog-title">What happens during the six-month programme.</h2>
              </div>
              <button ref={closeRef} type="button" aria-label="Close programme introduction" onClick={() => { setOpen(false); triggerRef.current?.focus(); }}>×</button>
            </header>
            {hasVideo ? (
              <video
                className="programme-video"
                controls
                preload="metadata"
                poster={programmeImage.src}
                onPlay={() => trackVideoMilestone(0)}
                onTimeUpdate={(event) => {
                  const video = event.currentTarget;
                  if (!Number.isFinite(video.duration) || video.duration <= 0) return;
                  const progress = (video.currentTime / video.duration) * 100;
                  [25, 50, 75].forEach((milestone) => {
                    if (progress >= milestone) trackVideoMilestone(milestone);
                  });
                }}
                onEnded={() => trackVideoMilestone(100)}
              >
                <source src={VIDEO_URL} />
                {CAPTIONS_URL && <track kind="captions" src={CAPTIONS_URL} srcLang="en" label="English" default />}
                Your browser does not support embedded video. Read the transcript below.
              </video>
            ) : (
              <div className="film-placeholder" aria-label="Programme overview">
                <div>
                  <strong>Six months. One focused programme.</strong>
                  <p>Three scheduled sessions cover the programme workshops, coaching and applied business project. Chartered Manager is a separate CMI route and is not included in the published Executive MBA programme or fee.</p>
                </div>
              </div>
            )}
            <div className="film-transcript">
              <h3>Transcript</h3>
              <p><strong>This programme is designed for experienced working managers.</strong> It uses your real business responsibilities as the context for learning.</p>
              <p>Across six months, you attend six training days in three scheduled sessions, receive coaching and complete an applied business project. Successful completion leads to the CMI Certificate of Recognition for the programme.</p>
              <p>Chartered Manager is a separate optional CMI route. CMI controls eligibility, assessment, membership and fees, and Chartered Manager status is not included in the published programme or fee.</p>
            </div>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
