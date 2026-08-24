"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FilmLang = "en" | "zh" | "ms";

const COPY: Record<FilmLang, { play: string; title: string; note: string }> = {
  en: {
    play: "Play the graduation film",
    title: "Future Ready Executive MBA — inaugural graduation film",
    note: "Plays on YouTube. No YouTube content loads until you press play.",
  },
  zh: {
    play: "播放毕业典礼影片",
    title: "Future Ready Executive MBA — 首届毕业典礼影片",
    note: "影片通过 YouTube 播放；按下播放前不会加载任何 YouTube 内容。",
  },
  ms: {
    play: "Mainkan filem majlis graduasi",
    title: "Future Ready Executive MBA — filem majlis graduasi sulung",
    note: "Dimainkan melalui YouTube. Tiada kandungan YouTube dimuatkan sehingga anda menekan main.",
  },
};

/**
 * Click-to-load YouTube facade: shows the local poster (zero third-party
 * requests) until the visitor presses play, then swaps in a
 * youtube-nocookie.com iframe with autoplay.
 */
export default function YouTubeFilm({
  videoId,
  poster,
  lang = "en",
  trackId = "graduation_film",
}: {
  videoId: string;
  poster: string;
  lang?: FilmLang;
  trackId?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const copy = COPY[lang];

  if (playing) {
    return (
      <div className="yt-film is-playing">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={copy.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="yt-film yt-film-facade"
      onClick={() => {
        setPlaying(true);
        trackEvent("video_play", { video_id: videoId, track_id: trackId, provider: "youtube" });
      }}
      aria-label={copy.play}
      data-track-event="video_play"
      data-track-id={trackId}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt={copy.title} width={1600} height={900} loading="lazy" decoding="async" />
      <span className="yt-film-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
      </span>
      <span className="yt-film-note">{copy.note}</span>
    </button>
  );
}
