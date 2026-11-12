"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { useUi } from "@/lib/i18n/locale";

export function CountryPickerContent({ map }: { map: ReactNode }) {
  const ui = useUi();
  const p = ui.picker;
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10 sm:px-6">
      <p className="font-display text-sm font-bold uppercase tracking-wide text-sun">
        Mapa Jugar
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {p.title}
      </h1>
      <p className="mt-3 max-w-xl text-base font-semibold text-white/80 sm:text-lg">
        {p.subtitle}
      </p>
      <div
        className="mt-6 rounded-3xl border-2 border-white/25 bg-white/5 p-3 shadow-[var(--shadow-card)] sm:p-5"
        aria-label={p.worldLabel}
      >
        {map}
      </div>
      <p className="mt-4 text-sm font-semibold text-white/75">
        {p.hint}{" "}
        <Link
          href="/mapa/sicilia"
          className="font-bold text-sun underline-offset-2 hover:underline"
        >
          🏝️ {p.goSicily}
        </Link>
      </p>
      <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/trivia" className="text-sm font-bold text-sun underline-offset-2 hover:underline">
          {p.triviaArgentina}
        </Link>
        <Link href="/trivia/italia" className="text-sm font-bold text-sun underline-offset-2 hover:underline">
          {p.triviaItaly}
        </Link>
        <Link href="/trivia/sicilia" className="text-sm font-bold text-sun underline-offset-2 hover:underline">
          {p.triviaSicily}
        </Link>
        <Link href="/trivia/campania" className="text-sm font-bold text-sun underline-offset-2 hover:underline">
          {p.triviaCampania}
        </Link>
      </p>
    </main>
  );
}
