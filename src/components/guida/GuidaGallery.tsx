"use client";

import { useEffect, useRef, useState } from "react";

import type { GalleryPhoto } from "@/data/guida/benessere-gallery";
import type { ExtrasCopy } from "@/lib/guida/extras";
import { withBasePath } from "@/lib/routing/base-path";

type Props = {
  copy: ExtrasCopy["gallery"];
  photos: GalleryPhoto[];
  /** Carpeta dentro de `public/guida/` (arte, benessere, deporte). */
  folder: string;
  title: string;
  hint: string;
};

export function GuidaGallery({ copy, photos, folder, title, hint }: Props) {
  const src = (file: string, small = false) => withBasePath(`/guida/${folder}/${file}${small ? "-sm" : ""}.webp`);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const total = photos.length;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const go = (step: number) => setOpen((i) => (i === null ? i : (i + step + total) % total));
  const photo = open !== null ? photos[open] : null;

  return (
    <section className="mt-10" aria-labelledby={`gallery-${folder}`}>
      <h2 id={`gallery-${folder}`} className="font-display text-2xl font-extrabold text-heading">
        {title}
      </h2>
      <p className="mt-1 text-sm text-foreground-muted">{hint}</p>

      <ul className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <li key={p.file} className={p.wide ? "col-span-3 lg:col-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-lg border-2 border-green-700 sm:rounded-xl bg-green-950 focus-visible:border-lime-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src(p.file, true)}
                alt={p.caption}
                lang="it"
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  p.wide ? "aspect-[2/1]" : "aspect-square"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchX.current;
          const end = e.changedTouches[0]?.clientX;
          touchX.current = null;
          if (start === null || end === undefined || Math.abs(end - start) < 40) return;
          go(end < start ? 1 : -1);
        }}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/90"
        aria-label={title}
      >
        {photo && open !== null ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-3" dir="ltr">
            <div className="flex w-full max-w-5xl items-center justify-between text-white">
              <span className="text-sm font-bold">
                {open + 1} / {total}
              </span>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="min-h-11 rounded-full bg-white/15 px-4 text-sm font-extrabold hover:bg-white/25"
              >
                ✕ {copy.close}
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={photo.file}
              src={src(photo.file)}
              alt={photo.caption}
              lang="it"
              className="max-h-[72dvh] w-auto max-w-full rounded-xl object-contain"
            />
            <p className="text-center text-base font-bold text-white" lang="it">
              {photo.caption}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={copy.prev}
                className="min-h-12 min-w-12 rounded-full bg-lime-300 text-xl font-extrabold text-green-950"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={copy.next}
                className="min-h-12 min-w-12 rounded-full bg-lime-300 text-xl font-extrabold text-green-950"
              >
                ›
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
