"use client";

import Link from "next/link";

import { EXTRAS_COPY } from "@/lib/guida/extras";
import { PHRASE_GROUPS } from "@/lib/guida/phrases";
import { GROUP_SCENE, PHRASES_UI } from "@/lib/guida/phrases-ui";
import { useLocale } from "@/lib/i18n/locale";

import { A11yButtons } from "./A11yButtons";
import { Scene } from "./Pictos";

export function FrasiIndex() {
  const { locale } = useLocale();
  const ui = PHRASES_UI[locale];
  const extras = EXTRAS_COPY[locale];

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
      <div className="flex items-center justify-between gap-2">
        <Link href="/guida" className="inline-flex min-h-11 items-center text-sm font-bold text-heading underline">
          ← {ui.back}
        </Link>
        <A11yButtons />
      </div>
      <h1 className="mt-2 font-display text-3xl font-extrabold text-heading sm:text-4xl">{extras.phrasesTitle}</h1>
      <div aria-hidden className="azulejo-strip mt-3" />
      <p className="mt-3 text-lg font-bold text-foreground">{ui.pick}</p>

      <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {PHRASE_GROUPS.map((g) => (
          <li key={g.id}>
            <Link
              href={`/guida/frasi/${g.id}`}
              className="flex h-full flex-col items-center gap-2 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-3 text-center text-green-50 transition-colors hover:border-lime-300 sm:p-4"
            >
              <Scene id={GROUP_SCENE[g.id]} size={120} />
              <span className="text-base font-extrabold leading-snug text-white sm:text-lg" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
                {g.title[locale]}
              </span>
              {locale !== "it" ? (
                <span className="text-xs font-semibold text-green-200" lang="it">{g.title.it}</span>
              ) : null}
              <span className="mt-auto rounded-full bg-lime-300 px-3 py-1 text-xs font-extrabold text-green-950">
                {ui.count(g.items.length)} →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-foreground-muted">{extras.phrasesNote}</p>
    </div>
  );
}
