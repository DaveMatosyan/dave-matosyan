"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: Lenis | null = null;
    let frame = 0;

    // Init only after two rAF ticks land within 100ms — proof of a live
    // animation clock. In throttled/frozen contexts (headless panes,
    // some webviews) Lenis would hijack wheel events it can never fulfill.
    frame = requestAnimationFrame((t1) => {
      frame = requestAnimationFrame((t2) => {
        if (t2 - t1 > 100) return;
        lenis = new Lenis({ lerp: 0.1, anchors: true });
        frame = requestAnimationFrame(function loop(time) {
          lenis?.raf(time);
          frame = requestAnimationFrame(loop);
        });
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
