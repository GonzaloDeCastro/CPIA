"use client";

import Link from "next/link";
import { useState } from "react";

import { EXTRAS_COPY } from "@/lib/guida/extras";
import { HOME_COPY, NEED_ORDER, SCHOOL_URL, type NeedId } from "@/lib/guida/home-copy";
import { useLocale } from "@/lib/i18n/locale";
import { withBasePath } from "@/lib/routing/base-path";

import { CategoryWheel } from "./CategoryWheel";
import { HymnPlayer } from "./HymnPlayer";
import { Picto } from "./Pictos";

const NEED_HREF: Record<NeedId, string> = {
  docs: "/guida/info-utili",
  phrases: "/guida/frasi",
  sport: "/guida/sport",
  art: "/guida/mappa#arte",
  wellbeing: "/guida/mappa#benessere",
  school: "#scuola",
};

const NEED_ICON: Record<NeedId, string> = {
  docs: "📄",
  phrases: "💬",
  sport: "⚽",
  art: "🌋",
  wellbeing: "🌿",
  school: "🏫",
};

const btn =
  "flex min-h-12 w-full items-center gap-3 rounded-lg border-2 border-green-600 bg-green-900 px-3 py-2 text-start text-base font-bold text-green-50 transition-colors hover:border-lime-300 focus-visible:border-lime-300";

export function GuidaHome() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale];
  const extras = EXTRAS_COPY[locale];
  const a = copy.assistant;
  const [profile, setProfile] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-4 sm:px-6 sm:pt-6">
      <header className="flex items-center gap-3 rounded-2xl border border-[#0f4c6e]/20 bg-[#fffdf6] p-3 shadow-[var(--shadow-card)] sm:gap-5 sm:p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBasePath("/guida/brand/logo-mark.webp")} alt="" width={256} height={256} className="h-16 w-16 shrink-0 sm:h-24 sm:w-24" />
        <h1 className="font-brand text-[1.45rem] font-extrabold leading-[1.1] text-[#0f4c6e] sm:text-4xl" lang="it">
          Tra Zagare <em className="font-semibold text-[#c2410c]">e</em> Merendine
        </h1>
      </header>
      <div aria-hidden className="azulejo-strip mt-3" />

      <p className="mt-4 text-lg font-semibold leading-relaxed text-foreground sm:text-xl">{copy.lead}</p>

      <section aria-labelledby="assistente" className="mt-4 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50 sm:p-5">
        <h2 id="assistente" className="font-display text-2xl font-extrabold text-white">
          <span aria-hidden>🤖 </span>
          {a.title}
        </h2>
        {profile === null ? (
          <>
            <p className="mt-2 text-lg font-bold text-lime-300">{a.q1}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {a.profiles.map((p, i) => (
                <li key={p}>
                  <button type="button" className={btn} onClick={() => setProfile(i)}>
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className="mt-2 text-base text-green-100" role="status">
              {a.greetings[profile]}
            </p>
            <p className="mt-2 text-lg font-bold text-lime-300">{a.q2}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {NEED_ORDER[profile].map((id) => (
                <li key={id}>
                  <Link href={NEED_HREF[id]} className={btn}>
                    <span aria-hidden className="text-2xl">{NEED_ICON[id]}</span>
                    {a.needs[id]}
                  </Link>
                </li>
              ))}
            </ul>
            <button type="button" className="mt-3 min-h-10 text-sm font-bold text-green-200 underline hover:text-lime-300" onClick={() => setProfile(null)}>
              {a.restart}
            </button>
          </>
        )}
      </section>

      <section aria-labelledby="categorie" className="mt-6 text-center">
        <h2 id="categorie" className="font-display text-2xl font-extrabold text-heading">
          {copy.wheel.title}
        </h2>
        <div className="mt-3">
          <CategoryWheel />
        </div>
      </section>

      <Link
        href="/guida/frasi"
        className="mt-6 flex items-center gap-4 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50 transition-colors hover:border-lime-300 sm:p-5"
      >
        <span className="flex shrink-0 gap-1">
          <Picto id="passport" size={56} />
          <Picto id="doctor" size={56} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-2xl font-extrabold text-white">{extras.phrasesTitle}</span>
          <span className="mt-1 block text-sm text-green-100">{extras.phrasesHint}</span>
        </span>
        <span aria-hidden className="shrink-0 rounded-lg bg-lime-300 px-4 py-2 text-lg font-extrabold text-green-950">→</span>
      </Link>

      <section id="scuola" aria-labelledby="scuola-h" className="mt-6 scroll-mt-4 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50 sm:p-6">
        <h2 id="scuola-h" className="flex items-center gap-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
          <span aria-hidden className="text-4xl">🏫</span>
          {copy.school.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-green-50 sm:text-lg">{copy.school.text}</p>
        <p className="mt-1 text-xs italic text-green-200">{copy.school.provisional}</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <a
            href={SCHOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-lime-300 px-4 text-center text-base font-extrabold text-green-950 hover:brightness-110"
          >
            {copy.school.site} ↗
          </a>
          <Link
            href="/guida/progetto"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-green-600 px-4 text-center text-base font-bold text-green-50 hover:border-lime-300"
          >
            {extras.projectLink} →
          </Link>
          <HymnPlayer copy={extras.hymn} className="flex [&>button]:w-full [&>button]:justify-center" />
        </div>
      </section>

      <Link
        href="/guida/mappa"
        className="mt-6 flex min-h-12 items-center justify-center rounded-lg border-2 border-green-950 px-4 text-base font-extrabold text-heading hover:bg-green-950 hover:text-lime-300"
      >
        🗺️ {copy.openMap} →
      </Link>
    </div>
  );
}
