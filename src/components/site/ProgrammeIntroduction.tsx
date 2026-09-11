"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFloatingUi } from "@/components/site/FloatingUiContext";
import { trackEvent } from "@/lib/analytics";
import { FACTS } from "@/lib/content";

const VIDEO_URL = process.env.NEXT_PUBLIC_PROGRAMME_VIDEO_URL;
const CAPTIONS_URL = process.env.NEXT_PUBLIC_PROGRAMME_VIDEO_CAPTIONS_URL;

type Lang = "en" | "zh" | "ms";

type ProgrammeIntroductionProps = {
  image?: "hero" | "conversation";
  placement?: string;
  lang?: Lang;
};

const programmeImages = {
  en: {
    hero: { src: "/brand/working-scholar-hero.webp", alt: "Experienced manager reviewing programme information at a desk" },
    conversation: { src: "/brand/working-scholar-conversation.webp", alt: "Illustration of two experienced professionals discussing a programme decision" },
  },
  zh: {
    hero: { src: "/brand/working-scholar-hero.webp", alt: "资深经理在办公桌前查看课程资料" },
    conversation: { src: "/brand/working-scholar-conversation.webp", alt: "两位资深专业人士讨论课程决定的插图" },
  },
  ms: {
    hero: { src: "/brand/working-scholar-hero.webp", alt: "Pengurus berpengalaman menyemak maklumat program di mejanya" },
    conversation: { src: "/brand/working-scholar-conversation.webp", alt: "Ilustrasi dua profesional berpengalaman membincangkan keputusan program" },
  },
} as const;

const COPY = {
  en: {
    kicker: "PROGRAMME INTRODUCTION",
    captionVideo: "Watch how the six-month programme works.",
    captionText: "Read how the six-month programme works.",
    controlLabel: "Programme introduction",
    controlVideo: "A three-minute programme overview",
    controlText: "The complete six-month structure",
    watch: "Watch",
    read: "Read",
    noteVideo: (hasCaptions: boolean) => `${hasCaptions ? "Captions and transcript available" : "Transcript available"} · no sound autoplay`,
    noteText: "Text overview · no contact details required",
    closeLabel: "Close programme introduction",
    dialogKicker: "Programme introduction",
    dialogTitle: "What happens during the six-month programme.",
    placeholderLabel: "Programme overview",
    placeholderStrong: `${FACTS.durationMonths} months. One focused programme.`,
    placeholderBody: `${FACTS.liveSessions} scheduled sessions cover the programme workshops, coaching and applied business project. Chartered Manager is a separate optional CMI route and is not included in the published Executive MBA programme or fee.`,
    transcriptHeading: "Transcript",
    transcriptP1Strong: "This programme is designed for experienced working managers.",
    transcriptP1Rest: " It uses your real business responsibilities as the context for learning.",
    transcriptP2: `Across ${FACTS.durationLong}, you complete ${FACTS.trainingDays} training days across ${FACTS.liveSessions} scheduled sessions, receive coaching and complete an applied business project. Successful completion leads to the CMI Certificate of Recognition for the programme.`,
    transcriptP3: "Chartered Manager is a separate optional CMI route. CMI controls eligibility, assessment, membership and fees, and Chartered Manager status is not included in the published programme or fee.",
    fallback: "Your browser does not support embedded video. Read the transcript below.",
  },
  zh: {
    kicker: "课程介绍",
    captionVideo: "观看六个月课程如何进行。",
    captionText: "阅读六个月课程如何进行。",
    controlLabel: "课程介绍",
    controlVideo: "三分钟课程概览",
    controlText: "完整的六个月课程结构",
    watch: "观看",
    read: "阅读",
    noteVideo: (hasCaptions: boolean) => `${hasCaptions ? "提供字幕及文字稿" : "提供文字稿"} · 不会自动播放声音`,
    noteText: "文字概览 · 无需提供联系资料",
    closeLabel: "关闭课程介绍",
    dialogKicker: "课程介绍",
    dialogTitle: "六个月课程期间会发生什么。",
    placeholderLabel: "课程概览",
    placeholderStrong: `${FACTS.durationMonths} 个月，一项专注的课程。`,
    placeholderBody: `${FACTS.liveSessions} 次导师带领的研习课涵盖课程工作坊、辅导及企业应用项目。Chartered Manager 是独立可选的 CMI 路线，不包含在已公布的 Executive MBA 课程或学费内。`,
    transcriptHeading: "文字稿",
    transcriptP1Strong: "本课程专为资深在职经理而设。",
    transcriptP1Rest: "课程以您真实的业务职责作为学习情境。",
    transcriptP2: `${FACTS.durationMonths} 个月内，您完成 ${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次导师带领的研习课，并获得辅导及完成企业应用项目。达到课程要求后，可取得该课程的 CMI 认可证书。`,
    transcriptP3: "Chartered Manager 是独立可选的 CMI 路线。CMI 负责资格、评估、会员及费用，Chartered Manager 身份不包含在已公布的课程或学费内。",
    fallback: "您的浏览器不支援内嵌视频，请阅读以下文字稿。",
  },
  ms: {
    kicker: "PENGENALAN PROGRAM",
    captionVideo: "Tonton bagaimana program enam bulan ini berjalan.",
    captionText: "Baca bagaimana program enam bulan ini berjalan.",
    controlLabel: "Pengenalan program",
    controlVideo: "Gambaran keseluruhan program selama tiga minit",
    controlText: "Struktur lengkap enam bulan",
    watch: "Tonton",
    read: "Baca",
    noteVideo: (hasCaptions: boolean) => `${hasCaptions ? "Sari kata dan transkrip tersedia" : "Transkrip tersedia"} · tiada bunyi automain`,
    noteText: "Gambaran teks · tiada butiran hubungan diperlukan",
    closeLabel: "Tutup pengenalan program",
    dialogKicker: "Pengenalan program",
    dialogTitle: "Apa yang berlaku sepanjang program enam bulan.",
    placeholderLabel: "Gambaran keseluruhan program",
    placeholderStrong: `${FACTS.durationMonths} bulan. Satu program yang tertumpu.`,
    placeholderBody: `${FACTS.liveSessions} sesi berjadual merangkumi bengkel program, bimbingan dan projek amali perniagaan. Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, dan tidak termasuk dalam program Executive MBA atau yuran yang diterbitkan.`,
    transcriptHeading: "Transkrip",
    transcriptP1Strong: "Program ini direka untuk pengurus berpengalaman yang bekerja.",
    transcriptP1Rest: " Ia menggunakan tanggungjawab perniagaan sebenar anda sebagai konteks pembelajaran.",
    transcriptP2: `Sepanjang ${FACTS.durationMonths} bulan, anda menyelesaikan ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, menerima bimbingan dan menyiapkan projek amali perniagaan. Penyempurnaan yang berjaya membawa kepada CMI Certificate of Recognition bagi program ini.`,
    transcriptP3: "Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib. CMI mengawal kelayakan, penilaian, keahlian dan yuran, dan status Chartered Manager tidak termasuk dalam program atau yuran yang diterbitkan.",
    fallback: "Pelayar anda tidak menyokong video terbenam. Baca transkrip di bawah.",
  },
} as const;

export default function ProgrammeIntroduction({ image = "hero", placement = "programme-introduction", lang = "en" }: ProgrammeIntroductionProps) {
  const { contentDialogOpen: open, setContentDialogOpen: setOpen } = useFloatingUi();
  const t = COPY[lang];
  const programmeImage = programmeImages[lang][image];
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
            <span className="mono">{t.kicker}</span>
            <strong>{hasVideo ? t.captionVideo : t.captionText}</strong>
          </div>
        </div>
        <div className="programme-film-control">
          <div>
            <p className="mono">{t.controlLabel}</p>
            <strong>{hasVideo ? t.controlVideo : t.controlText}</strong>
          </div>
          <button
            ref={triggerRef}
            type="button"
            className="film-play"
            onClick={openIntroduction}
            aria-haspopup="dialog"
          >
            <span aria-hidden="true">{hasVideo ? "▶" : "→"}</span>
            {hasVideo ? t.watch : t.read}
          </button>
        </div>
        <p className="programme-film-note">
          {hasVideo ? t.noteVideo(Boolean(CAPTIONS_URL)) : t.noteText}
        </p>
      </div>

      {mounted && open && createPortal(
        <div className="film-dialog-shell" role="presentation">
          <button className="film-dialog-backdrop" type="button" aria-label={t.closeLabel} onClick={() => setOpen(false)} />
          <section ref={dialogRef} className="film-dialog" role="dialog" aria-modal="true" aria-labelledby="film-dialog-title">
            <header>
              <div>
                <p className="mono sec-k">{t.dialogKicker}</p>
                <h2 id="film-dialog-title">{t.dialogTitle}</h2>
              </div>
              <button ref={closeRef} type="button" aria-label={t.closeLabel} onClick={() => { setOpen(false); triggerRef.current?.focus(); }}>×</button>
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
                {t.fallback}
              </video>
            ) : (
              <div className="film-placeholder" aria-label={t.placeholderLabel}>
                <div>
                  <strong>{t.placeholderStrong}</strong>
                  <p>{t.placeholderBody}</p>
                </div>
              </div>
            )}
            <div className="film-transcript">
              <h3>{t.transcriptHeading}</h3>
              <p><strong>{t.transcriptP1Strong}</strong>{t.transcriptP1Rest}</p>
              <p>{t.transcriptP2}</p>
              <p>{t.transcriptP3}</p>
            </div>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
