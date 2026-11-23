"use client";

import Link from "next/link";
import { useState } from "react";

import { HOME_COPY, SPORT_TEAMS } from "@/lib/guida/home-copy";
import { useLocale } from "@/lib/i18n/locale";

export function SportView() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale];
  const s = copy.sport;
  const [notice, setNotice] = useState<string | null>(null);

  const football = SPORT_TEAMS[0];
  const others = SPORT_TEAMS.slice(1);

  // Sin url real: enlace de ejemplo, avisa en pantalla en vez de abrir algo.
  function onJoin(url: string | null, e: React.MouseEvent) {
    if (url) return;
    e.preventDefault();
    setNotice(s.exampleMsg);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
      <Link href="/guida" className="inline-flex min-h-11 items-center text-sm font-bold text-heading underline">
        ← {copy.back}
      </Link>
      <h1 className="mt-2 font-display text-3xl font-extrabold text-heading sm:text-4xl">{s.title}</h1>
      <div aria-hidden className="azulejo-strip mt-3" />
      <p className="mt-3 text-lg text-foreground">{s.intro}</p>

      <a
        href={football.url ?? "#"}
        onClick={(e) => onJoin(football.url, e)}
        className="mt-5 flex items-center gap-4 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50 transition-colors hover:border-lime-300 sm:p-6"
      >
        <span aria-hidden className="text-6xl">{football.emoji}</span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-2xl font-extrabold text-white sm:text-3xl">{s.footballQ}</span>
          <span className="mt-1 block text-lg font-bold text-lime-300">{s.footballCta}</span>
        </span>
        <span aria-hidden className="shrink-0 rounded-lg bg-lime-300 px-4 py-2 text-lg font-extrabold text-green-950">→</span>
      </a>
      <p role="status" className="mt-2 min-h-6 text-sm font-semibold text-[#c2410c]">
        {notice}
      </p>

      <h2 className="mt-4 font-display text-2xl font-extrabold text-heading">{s.othersTitle}</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        {others.map((t) => (
          <li key={t.id} className="flex flex-col gap-2 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50">
            <span aria-hidden className="text-4xl">{t.emoji}</span>
            <h3 className="text-lg font-extrabold text-white">{s.desc[t.id].name}</h3>
            <p className="text-sm text-green-100">{s.desc[t.id].desc}</p>
            {t.url === null ? (
              <span className="w-fit rounded-full bg-lime-200 px-2 py-0.5 text-xs font-bold text-green-950">{s.exampleBadge}</span>
            ) : null}
            <a
              href={t.url ?? "#"}
              onClick={(e) => onJoin(t.url, e)}
              className="mt-auto inline-flex min-h-11 items-center justify-center rounded-lg bg-lime-300 px-3 text-sm font-extrabold text-green-950 hover:brightness-110"
            >
              {s.join} →
            </a>
          </li>
        ))}
      </ul>

      <Link
        href="/guida/mappa#sport"
        className="mt-6 flex min-h-12 items-center justify-center rounded-lg border-2 border-green-950 px-4 text-base font-extrabold text-heading hover:bg-green-950 hover:text-lime-300"
      >
        🗺️ {s.gallery} →
      </Link>
    </div>
  );
}
