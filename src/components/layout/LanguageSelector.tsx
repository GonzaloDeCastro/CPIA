"use client";

import { LOCALES, useLocale } from "@/lib/i18n/locale";

/** Selector de idioma fijo en una esquina. */
export function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  return (
    <div
      role="group"
      aria-label="Idioma / Language / Lingua"
      className="fixed bottom-3 right-3 z-[120] flex max-w-[calc(100vw-1.5rem)] flex-nowrap justify-end gap-0.5 rounded-full border border-white/30 bg-sky-deep/95 p-1 sm:gap-1 text-white shadow-[var(--shadow-elevated)] backdrop-blur-md sm:bottom-4 sm:right-4"
    >
      {LOCALES.map((l) => {
        const selected = l.id === locale;
        return (
          <button
            key={l.id}
            type="button"
            title={l.name}
            aria-pressed={selected}
            onClick={() => setLocale(l.id)}
            className={`inline-flex min-h-10 cursor-pointer items-center gap-0.5 rounded-full px-1.5 text-[11px] sm:gap-1 sm:px-3 sm:text-xs font-extrabold transition-colors ${
              selected ? "bg-sun text-sun-ink" : "hover:bg-white/15"
            }`}
          >
            <span aria-hidden className="text-base leading-none">
              {l.flag}
            </span>
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
