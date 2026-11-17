"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Optional banner image. Shows nothing until the file exists in packages/ui/public/images/.
 * While images are AI-generated it carries an "Illustrative" label (remove it for real photos).
 */
export default function PageImage({ file, alt }: { file: string; alt: string }) {
  const [ok, setOk] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The image may finish loading before React attaches onLoad, so check it once on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setOk(true);
  }, []);

  return (
    <figure className={ok ? "container-x max-w-5xl pt-12" : "sr-only"} aria-hidden={!ok}>
      <div className="relative overflow-hidden rounded-2xl shadow-lift">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={`/images/${file}`}
          alt={ok ? alt : ""}
          className="aspect-[16/9] w-full object-cover"
          onLoad={() => setOk(true)}
          onError={() => setOk(false)}
        />
        {ok && (
          <figcaption className="absolute bottom-3 right-4 rounded bg-black/40 px-2 py-1 text-[11px] text-white/80">
            Illustrative AI-generated image
          </figcaption>
        )}
      </div>
    </figure>
  );
}
