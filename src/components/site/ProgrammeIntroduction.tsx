"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFloatingUi } from "@/components/site/FloatingUiContext";

const VIDEO_URL = process.env.NEXT_PUBLIC_PROGRAMME_VIDEO_URL;

type ProgrammeIntroductionProps = {
  image?: "hero" | "conversation";
};

const programmeImages = {
  hero: {
    src: "/brand/working-scholar-hero.webp",
    alt: "Illustration of an experienced executive reviewing a business decision brief",
  },
  conversation: {
    src: "/brand/working-scholar-conversation.webp",
    alt: "Illustration of two experienced professionals discussing a programme decision",
  },
} as const;

export default function ProgrammeIntroduction({ image = "hero" }: ProgrammeIntroductionProps) {
  const { contentDialogOpen: open, setContentDialogOpen: setOpen } = useFloatingUi();
  const programmeImage = programmeImages[image];
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
            priority
            sizes="(max-width: 1023px) 100vw, 46vw"
          />
          <div className="programme-film-caption">
            <span className="mono">THE WORKING SCHOLAR</span>
            <strong>A serious place to examine what comes next.</strong>
          </div>
        </div>
        <div className="programme-film-control">
          <div>
            <p className="mono">Programme introduction</p>
            <strong>{VIDEO_URL ? "A three-minute introduction to the pathway" : "The programme story, with a readable transcript"}</strong>
          </div>
          <button
            ref={triggerRef}
            type="button"
            className="film-play"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            <span aria-hidden="true">▶</span>
            {VIDEO_URL ? "Watch" : "Open"}
          </button>
        </div>
        <p className="programme-film-note">Captions and transcript available · no sound autoplay</p>
      </div>

      {mounted && open && createPortal(
        <div className="film-dialog-shell" role="presentation">
          <button className="film-dialog-backdrop" type="button" aria-label="Close programme introduction" onClick={() => setOpen(false)} />
          <section ref={dialogRef} className="film-dialog" role="dialog" aria-modal="true" aria-labelledby="film-dialog-title">
            <header>
              <div>
                <p className="mono sec-k">Programme introduction</p>
                <h2 id="film-dialog-title">Experience is where the work begins.</h2>
              </div>
              <button ref={closeRef} type="button" aria-label="Close programme introduction" onClick={() => { setOpen(false); triggerRef.current?.focus(); }}>×</button>
            </header>
            {VIDEO_URL ? (
              <video className="programme-video" controls preload="metadata" poster="/brand/emba-lockup.png">
                <source src={VIDEO_URL} />
                Your browser does not support embedded video. Read the transcript below.
              </video>
            ) : (
              <div className="film-placeholder" aria-label="Programme video placeholder">
                <Image src="/brand/emba-lockup.png" alt="Future Ready Executive MBA" width={720} height={459} />
                <p>The approved programme video can be added here without changing the layout or accessibility model.</p>
              </div>
            )}
            <div className="film-transcript">
              <h3>Transcript</h3>
              <p><strong>Your experience brought you here.</strong> You already manage consequences: people, customers, budgets, uncertainty and change. The programme begins with that reality.</p>
              <p>Across six months, you examine the questions behind the next role, connect evidence through the F.A.S.T. disciplines, and apply the work to a real business context.</p>
              <p>The first three months lead to the programme certificate phase. The following three months support eligible participants preparing for CMI&rsquo;s separate Chartered Manager assessment. The assessment, membership and fees remain under CMI&rsquo;s control.</p>
            </div>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
