"use client";

import Link from "next/link";

import { EXTRAS_COPY } from "@/lib/guida/extras";
import { PHRASE_GROUPS } from "@/lib/guida/phrases";
import { GROUP_SCENE, PHRASE_PICTOS, PHRASES_UI } from "@/lib/guida/phrases-ui";
import { recordingFor, useSpeech } from "@/lib/guida/use-speech";
import { LOCALES, useLocale, type Locale } from "@/lib/i18n/locale";

import { A11yButtons } from "./A11yButtons";
import { Picto, Scene } from "./Pictos";

function Speaker({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor" />
      {on ? <rect x="16" y="9" width="6" height="6" rx="1" fill="currentColor" /> : <path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" />}
    </svg>
  );
}

export function FrasiSituation({ id }: { id: string }) {
  const { locale } = useLocale();
  const ui = PHRASES_UI[locale];
  const extras = EXTRAS_COPY[locale];
  const { playingKey, play, missing } = useSpeech();
  const group = PHRASE_GROUPS.find((g) => g.id === id);
  if (!group) return null;
  const pictos = PHRASE_PICTOS[id] ?? [];
  const rtl = locale === "ar" ? "rtl" : "ltr";
  const mineName = LOCALES.find((l) => l.id === locale)?.name ?? locale;

  const audioBtn = (key: string, text: string, lang: Locale, label: string, primary: boolean, recording?: string) => (
    <button
      type="button"
      onClick={() => play(key, text, lang, recording)}
      aria-pressed={playingKey === key}
      aria-label={`${label}: ${text}`}
      className={`flex min-h-14 flex-1 items-center justify-center gap-2 rounded-lg border-2 px-3 text-sm font-extrabold transition hover:brightness-110 ${
        primary ? "border-lime-300 bg-lime-300 text-green-950" : "border-white bg-white text-green-950"
      }`}
    >
      <Speaker on={playingKey === key} />
      <span className="flex flex-col items-start leading-tight">
        <span>{playingKey === key ? ui.stop : label}</span>
        <span className="text-[11px] font-bold opacity-70">{lang === "it" ? "🇮🇹 Italiano" : mineName}</span>
      </span>
    </button>
  );

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
      <div className="flex items-center justify-between gap-2">
        <Link href="/guida/frasi" className="inline-flex min-h-11 items-center text-sm font-bold text-heading underline">
          ← {ui.allSituations}
        </Link>
        <A11yButtons />
      </div>

      <header className="mt-2 flex items-center gap-4">
        <Scene id={GROUP_SCENE[id]} size={96} />
        <div>
          <h1 className="font-display text-2xl font-extrabold leading-tight text-heading sm:text-4xl" lang={locale} dir={rtl}>
            {group.title[locale]}
          </h1>
          {locale !== "it" ? <p className="mt-1 text-sm font-semibold text-foreground-muted" lang="it">{group.title.it}</p> : null}
        </div>
      </header>

      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {ui.steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3 rounded-xl bg-lime-300 px-4 py-3 text-base font-extrabold text-green-950">
            <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-950 text-lime-300">{i + 1}</span>
            <span dir={rtl} lang={locale}>{s}</span>
          </li>
        ))}
      </ol>

      {missing ? (
        <p role="status" className="mt-3 rounded-xl border-2 border-orange-500 bg-orange-100 px-4 py-3 text-base font-bold text-orange-950" dir={rtl} lang={locale}>
          🔇 {ui.noVoice}
        </p>
      ) : null}

      <ul className="mt-5 grid gap-4">
        {group.items.map((ph, i) => (
          <li key={ph.it} className="rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50 sm:p-5">
            <div className="flex items-start gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#fffdf6] sm:h-24 sm:w-24">
                <Picto id={pictos[i] ?? "question"} size={64} />
              </div>
              <div className="min-w-0">
                {locale !== "it" ? (
                  <p className="text-xl font-extrabold leading-snug text-white" lang={locale} dir={rtl}>
                    {ph.tr[locale]}
                  </p>
                ) : null}
                {locale === "ar" ? (
                  <p className="mt-1 text-sm italic text-green-200" lang="ar-Latn" dir="ltr">{ph.arLatin}</p>
                ) : null}
                <p className={locale === "it" ? "text-xl font-extrabold text-white" : "mt-2 text-base text-green-100"} lang="it">
                  {ph.it}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              {locale !== "it" ? audioBtn(`${ph.it}|mine`, ph.tr[locale], locale, ui.listenMine, false, recordingFor(id, i + 1, locale)) : null}
              {audioBtn(`${ph.it}|it`, ph.it, "it", ui.listenIt, true, recordingFor(id, i + 1, "it"))}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-foreground-muted">{extras.phrasesNote}</p>
    </div>
  );
}
