"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

const SLIDES = [
  {
    kicker: "Three months · built around work",
    title: "Lead with certainty when the business gets complicated.",
    body: "A practical Executive MBA for working leaders who need sharper decisions, real momentum and a plan they can act on.",
    action: "Get the programme guide",
    href: "#home-programme-guide",
    kind: "video" as const,
    src: "/media/home-graduation-loop.mp4",
    poster: "/brand/abc-graduation-poster.jpg",
    position: "center 45%",
    mobilePosition: "center 48%",
  },
  {
    kicker: "One live business challenge",
    title: "Bring the decision that cannot stay unresolved.",
    body: "Use structured frameworks, faculty coaching and an applied project to turn a current business issue into a defensible action plan.",
    action: "See how the programme works",
    href: "/how-it-works",
    kind: "image" as const,
    src: "/brand/working-scholar-method.webp",
    alt: "Working leaders collaborating in an Executive MBA learning session",
    position: "center 46%",
    mobilePosition: "center 42%",
  },
  {
    kicker: "Real people · recognised completion",
    title: "The work leads somewhere visible.",
    body: "Join a practitioner-led programme completed by 154 graduates across 17 cohorts: 16 English cohorts and the first Mandarin cohort.",
    action: "Meet the programme community",
    href: "/asian-business-consulting#abc-film",
    kind: "image" as const,
    src: "/brand/community/graduation-cohort.jpeg",
    alt: "Future Ready Executive MBA graduates gathered at the inaugural graduation",
    position: "center 42%",
    mobilePosition: "center 40%",
  },
] as const;

const ROTATION_MS = 8000;

export default function HomeHeroSlider() {
  const [active, setActive] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [inViewport, setInViewport] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const sliderRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rotationPaused = manualPaused || interacting || !inViewport || !pageVisible || reduceMotion;

  const selectSlide = useCallback((index: number, pauseRotation = false) => {
    setActive((index + SLIDES.length) % SLIDES.length);
    if (pauseRotation) setManualPaused(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(slider);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (rotationPaused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [rotationPaused]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active === 0 && inViewport && pageVisible && !reduceMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [active, inViewport, pageVisible, reduceMotion]);

  return (
    <section
      ref={sliderRef}
      className="home-slider"
      aria-label="Future Ready Executive MBA highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
      }}
    >
      <div className="home-slider-track">
        {SLIDES.map((slide, index) => {
          const isActive = active === index;
          return (
            <article
              key={slide.title}
              className={`home-slide${isActive ? " is-active" : ""}`}
              aria-hidden={!isActive}
              aria-label={`${index + 1} of ${SLIDES.length}`}
              aria-roledescription="slide"
              inert={!isActive ? true : undefined}
            >
              <div
                className="home-slide-media"
                style={{
                  "--media-position": slide.position,
                  "--media-position-mobile": slide.mobilePosition,
                } as CSSProperties}
              >
                {slide.kind === "video" ? (
                  <>
                    <Image
                      className="home-slide-video-poster"
                      src={slide.poster}
                      alt="Future Ready Executive MBA graduation highlights"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 900px) 100vw, 68vw"
                    />
                    <video
                      ref={videoRef}
                      className="home-slide-video"
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster={slide.poster}
                      aria-label="Future Ready Executive MBA graduation highlights"
                    >
                      <source src={slide.src} type="video/mp4" media="(min-width: 641px)" />
                    </video>
                  </>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 900px) 100vw, 68vw"
                  />
                )}
              </div>
              <div className="home-slide-shade" />
              <div className="home-slide-copy">
                <p className="mono">{slide.kicker}</p>
                {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
                <p className="home-slide-lede">{slide.body}</p>
                <Link href={slide.href} className="btn home-slide-action" tabIndex={isActive ? 0 : -1}>
                  {slide.action} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="home-slider-controls">
        <button type="button" className="home-slider-arrow" onClick={() => selectSlide(active - 1, true)} aria-label="Previous slide">←</button>
        <div className="home-slider-dots" aria-label="Choose a slide">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={active === index ? "is-active" : ""}
              onClick={() => selectSlide(index, true)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-current={active === index ? "true" : undefined}
            ><span /></button>
          ))}
        </div>
        <button type="button" className="home-slider-arrow" onClick={() => selectSlide(active + 1, true)} aria-label="Next slide">→</button>
        <button type="button" className="home-slider-pause" onClick={() => setManualPaused((value) => !value)} aria-label={manualPaused ? "Resume slide rotation" : "Pause slide rotation"}>
          {manualPaused ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
