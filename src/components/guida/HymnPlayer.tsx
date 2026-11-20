"use client";

import { useEffect, useRef, useState } from "react";

import type { ExtrasCopy } from "@/lib/guida/extras";
import { withBasePath } from "@/lib/routing/base-path";

/** Botón de play del himno de la escuela (`public/guida/audio/himno.mp3`). El archivo se carga recién al tocar. */
export function HymnPlayer({ copy }: { copy: ExtrasCopy["hymn"] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  function toggle() {
    if (!audioRef.current) {
      const a = new Audio(withBasePath("/guida/audio/himno.mp3"));
      a.onended = () => setPlaying(false);
      a.onerror = () => setPlaying(false);
      audioRef.current = a;
    }
    const a = audioRef.current;
    if (playing) {
      a.pause();
      a.currentTime = 0;
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }

  return (
    <div className="mt-3 flex justify-center">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={copy.label}
        className="inline-flex min-h-12 items-center gap-3 rounded-lg border-2 border-lime-300 bg-green-950 px-5 text-base font-extrabold text-lime-300 transition hover:brightness-125"
      >
        <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-lime-300 text-green-950">
          {playing ? "■" : "▶"}
        </span>
        <span>{playing ? copy.stop : copy.play}</span>
      </button>
    </div>
  );
}
