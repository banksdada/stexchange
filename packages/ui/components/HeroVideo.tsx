"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Optional looping background video for the hero.
 * Put the file at packages/ui/public/hero.mp4 (and optionally hero.webm and hero-poster.jpg).
 * If the file is missing, or the visitor prefers reduced motion, nothing is shown and the
 * hero keeps its plain navy background.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduce) return null;

  return (
    <>
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        aria-hidden
        onCanPlay={() => setReady(true)}
        onError={() => setReady(false)}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {ready && (
        <span className="absolute bottom-3 right-4 z-10 rounded bg-black/40 px-2 py-1 text-[11px] text-white/80">
          Illustrative AI-generated footage
        </span>
      )}
    </>
  );
}
