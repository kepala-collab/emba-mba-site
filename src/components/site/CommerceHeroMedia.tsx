"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type CommerceHeroMediaProps = {
  alt: string;
  guideHref: string;
  guideLabel: string;
  kicker: string;
  pauseLabel: string;
  playLabel: string;
  title: string;
};

export default function CommerceHeroMedia({
  alt,
  guideHref,
  guideLabel,
  kicker,
  pauseLabel,
  playLabel,
  title,
}: CommerceHeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncReadyState = () => {
      setIsVideoReady(video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA);
      setIsPlaying(!video.paused && !video.ended);
    };
    const markUnavailable = () => {
      setIsVideoReady(false);
      setIsPlaying(false);
    };

    // Autoplay can begin before React hydrates and attaches JSX media-event
    // handlers. Read the element's current state immediately so a playing
    // video never remains hidden behind its poster.
    syncReadyState();
    video.addEventListener("loadeddata", syncReadyState);
    video.addEventListener("canplay", syncReadyState);
    video.addEventListener("playing", syncReadyState);
    video.addEventListener("pause", syncReadyState);
    video.addEventListener("ended", syncReadyState);
    video.addEventListener("error", markUnavailable);

    return () => {
      video.removeEventListener("loadeddata", syncReadyState);
      video.removeEventListener("canplay", syncReadyState);
      video.removeEventListener("playing", syncReadyState);
      video.removeEventListener("pause", syncReadyState);
      video.removeEventListener("ended", syncReadyState);
      video.removeEventListener("error", markUnavailable);
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
  };

  return (
    <figure className="commerce-hero-media">
      <Image
        src="/media/future-commerce/hero-leader-poster.webp"
        alt={alt}
        fill
        priority
        unoptimized
        sizes="(max-width: 1080px) 100vw, 46vw"
      />
      <video
        ref={videoRef}
        className={isVideoReady ? "is-ready" : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onLoadedData={() => setIsVideoReady(true)}
        onCanPlay={() => setIsVideoReady(true)}
        onError={() => setIsVideoReady(false)}
        onPause={() => setIsPlaying(false)}
        onPlaying={() => setIsPlaying(true)}
      >
        <source
          src="/media/future-commerce/future-ready-emba-leadership-hero-v2.mp4"
          type="video/mp4"
          media="(min-width: 641px) and (prefers-reduced-motion: no-preference)"
        />
      </video>
      <div className="commerce-hero-shade" />

      <div className="commerce-hero-stamp" aria-hidden="true">
        <Image src="/brand/rdr-emblem.webp" alt="" width={40} height={40} />
        <span>FUTURE READY<br />EXECUTIVE MBA</span>
      </div>

      <button
        type="button"
        className="commerce-media-control"
        onClick={togglePlayback}
        aria-label={isPlaying ? pauseLabel : playLabel}
        aria-pressed={!isPlaying}
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        {isPlaying ? pauseLabel : playLabel}
      </button>

      <figcaption>
        <span className="mono">{kicker}</span>
        <strong>{title}</strong>
        <Link href={guideHref} aria-label={guideLabel}>
          <span aria-hidden="true">↗</span>
        </Link>
      </figcaption>
    </figure>
  );
}
