"use client";
import { useEffect, useRef } from "react";

// The "connecting the dots" network motif — echoes ABC's brand + the systems-thinking theme.
export default function NodeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const x = c.getContext("2d");
    if (!x) return;
    const dpr = window.devicePixelRatio || 1;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, raf = 0, visible = true;
    let P: { x: number; y: number; vx: number; vy: number }[] = [];
    const size = () => {
      const r = c.parentElement!.getBoundingClientRect();
      W = c.width = r.width * dpr;
      H = c.height = r.height * dpr;
    };
    const init = () => {
      size();
      const n = Math.min(58, Math.floor(W / 34));
      P = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      }));
    };
    const frame = () => {
      x.clearRect(0, 0, W, H);
      const max = 160 * dpr;
      for (const p of P) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < P.length; i++)
        for (let j = i + 1; j < P.length; j++) {
          const a = P[i], b = P[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < max) {
            x.globalAlpha = (1 - d / max) * 0.22;
            x.strokeStyle = (i + j) % 9 === 0 ? "#E63A48" : "#5C8DF0";
            x.lineWidth = 1;
            x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke();
          }
        }
      x.globalAlpha = 1;
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        x.fillStyle = i % 8 === 0 ? "#E63A48" : "#5C8DF0";
        x.globalAlpha = i % 8 === 0 ? 0.9 : 0.45;
        x.beginPath(); x.arc(p.x, p.y, (i % 8 === 0 ? 2.3 : 1.5) * dpr, 0, 7); x.fill();
      }
      x.globalAlpha = 1;
      if (!reduce && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };
    init(); frame();
    const restart = () => {
      cancelAnimationFrame(raf);
      if (visible && !document.hidden) frame();
    };
    const onResize = () => { cancelAnimationFrame(raf); init(); restart(); };
    const onVisibilityChange = () => restart();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    }, { rootMargin: "120px 0px" });
    observer.observe(c);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);
  return <canvas ref={ref} className="node-canvas" aria-hidden="true" />;
}
