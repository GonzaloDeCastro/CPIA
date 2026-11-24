"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { HOME_COPY, SPORT_TEAMS } from "@/lib/guida/home-copy";
import { useLocale } from "@/lib/i18n/locale";

const STORAGE_KEY = "guida-sport-signups";

type Signup = { id: string; name: string; contact: string; sport: string; at: string };

function readSignups(): Signup[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const v = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(v) ? (v as Signup[]) : [];
  } catch {
    return [];
  }
}

function writeSignups(list: Signup[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* sin almacenamiento: el estado en pantalla igual funciona */
  }
}

export function SportView() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale];
  const s = copy.sport;
  const f = s.form;
  const [notice, setNotice] = useState<string | null>(null);
  const [sport, setSport] = useState<string>(SPORT_TEAMS[0].id);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [signups, setSignups] = useState<Signup[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setSignups(readSignups());
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setNotice(f.missing);
      return;
    }
    const next = [
      { id: String(Date.now()), name: name.trim(), contact: contact.trim(), sport, at: new Date().toISOString() },
      ...signups,
    ];
    setSignups(next);
    writeSignups(next);
    setName("");
    setContact("");
    setNotice(f.saved);
  }

  function remove(id: string) {
    const next = signups.filter((x) => x.id !== id);
    setSignups(next);
    writeSignups(next);
  }

  const football = SPORT_TEAMS[0];
  const others = SPORT_TEAMS.slice(1);

  // Sin url real del equipo: el botón elige ese deporte y lleva al formulario de inscripción.
  function onJoin(id: string, url: string | null, e: React.MouseEvent) {
    if (url) return;
    e.preventDefault();
    setSport(id);
    setNotice(null);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
        onClick={(e) => onJoin(football.id, football.url, e)}
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
            <a
              href={t.url ?? "#"}
              onClick={(e) => onJoin(t.id, t.url, e)}
              className="mt-auto inline-flex min-h-11 items-center justify-center rounded-lg bg-lime-300 px-3 text-sm font-extrabold text-green-950 hover:brightness-110"
            >
              {s.join} →
            </a>
          </li>
        ))}
      </ul>

      <section aria-labelledby="iscrizione" className="mt-6 rounded-2xl border-2 border-green-700 bg-green-950 tile-card p-4 text-green-50 sm:p-6">
        <h2 id="iscrizione" className="font-display text-2xl font-extrabold text-white">✍️ {f.title}</h2>
        <form ref={formRef} onSubmit={submit} className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-base font-bold">
            {f.name}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="min-h-12 rounded-lg border-2 border-green-600 bg-white px-3 text-lg font-semibold text-green-950"
            />
          </label>
          <label className="grid gap-1 text-base font-bold">
            {f.contact}
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              autoComplete="email"
              className="min-h-12 rounded-lg border-2 border-green-600 bg-white px-3 text-lg font-semibold text-green-950"
            />
          </label>
          <label className="grid gap-1 text-base font-bold sm:col-span-2">
            {f.sport}
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="min-h-12 rounded-lg border-2 border-green-600 bg-white px-3 text-lg font-semibold text-green-950"
            >
              {SPORT_TEAMS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.emoji} {s.desc[t.id].name}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="min-h-12 rounded-lg bg-lime-300 px-4 text-lg font-extrabold text-green-950 hover:brightness-110 sm:col-span-2"
          >
            {f.submit}
          </button>
        </form>
        <p role="status" className="mt-2 min-h-6 text-sm font-bold text-lime-300">{notice}</p>
        <p className="text-sm text-green-200">{f.note}</p>

        {signups.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-lg font-extrabold text-white">{f.listTitle}</h3>
            <ul className="mt-2 grid gap-2">
              {signups.map((x) => {
                const t = SPORT_TEAMS.find((tt) => tt.id === x.sport);
                return (
                  <li key={x.id} className="flex items-center gap-3 rounded-lg bg-green-900 px-3 py-2">
                    <span aria-hidden className="text-2xl">{t?.emoji}</span>
                    <span className="min-w-0 flex-1 text-base">
                      <strong className="block truncate">{x.name}</strong>
                      <span className="block truncate text-green-200">{t ? s.desc[t.id].name : x.sport} · {x.contact}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => remove(x.id)}
                      className="min-h-11 rounded-lg border-2 border-green-600 px-3 text-sm font-bold hover:border-lime-300"
                    >
                      {f.remove}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </section>

      <Link
        href="/guida/mappa#sport"
        className="mt-6 flex min-h-12 items-center justify-center rounded-lg border-2 border-green-950 px-4 text-base font-extrabold text-heading hover:bg-green-950 hover:text-lime-300"
      >
        🗺️ {s.gallery} →
      </Link>
    </div>
  );
}
