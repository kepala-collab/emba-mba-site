"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState(true);

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
        sizes="(max-width: 1080px) 100vw, 46vw"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/future-commerce/hero-leader-poster.webp"
        aria-hidden="true"
        tabIndex={-1}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src="/media/future-commerce/hero-leader.mp4" type="video/mp4" />
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
