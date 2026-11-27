"use client";

import Link from "next/link";

import { HOME_COPY, INFO_LINKS } from "@/lib/guida/home-copy";
import { useLocale } from "@/lib/i18n/locale";

import { A11yButtons } from "./A11yButtons";

export function InfoUtiliView() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale];
  const c = copy.info;

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
      <div className="flex items-center justify-between gap-2">
        <Link href="/guida" className="inline-flex min-h-11 items-center text-sm font-bold text-heading underline">
          ← {copy.back}
        </Link>
        <A11yButtons />
      </div>
      <h1 className="mt-2 font-display text-3xl font-extrabold text-heading sm:text-4xl">{c.title}</h1>
      <div aria-hidden className="azulejo-strip mt-3" />
      <p className="mt-3 text-lg text-foreground">{c.intro}</p>

      <ul className="mt-5 grid gap-3 sm:gap-4 md:grid-cols-3">
        {INFO_LINKS.map((l, i) => (
          <li key={l.id} className="flex flex-col gap-3 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50">
            <h2 className="text-lg font-extrabold leading-snug text-white">{c.cards[i].name}</h2>
            <p className="text-sm text-green-100">{c.cards[i].desc}</p>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex min-h-11 items-center justify-center rounded-lg bg-lime-300 px-3 text-sm font-extrabold text-green-950 hover:brightness-110"
            >
              {c.open} ↗
            </a>
            <Link
              href={`/guida/frasi/${l.phraseGroup}`}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-green-600 px-3 text-center text-sm font-bold text-green-50 hover:border-lime-300"
            >
              🔊 {c.phrases}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
