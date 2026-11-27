"use client";

import { useEffect, useState } from "react";

import { EXTRAS_COPY } from "@/lib/guida/extras";
import { useLocale } from "@/lib/i18n/locale";

const KEYS = { big: "guida-big", hc: "guida-hc" } as const;
type Kind = keyof typeof KEYS;

/** Vive fuera del componente: la elección se mantiene entre pantallas aunque no haya localStorage. */
const prefs: Record<Kind, boolean> = { big: false, hc: false };

function apply() {
  const root = document.documentElement;
  root.style.fontSize = prefs.big ? "125%" : "";
  root.classList.toggle("guida-hc", prefs.hc);
}

/** Botones de accesibilidad (letra grande y modo oscuro de alto contraste), iguales en toda la guía. */
export function A11yButtons({ className = "" }: { className?: string }) {
  const { locale } = useLocale();
  const a11y = EXTRAS_COPY[locale].a11y;
  const [state, setState] = useState(prefs);

  useEffect(() => {
    try {
      for (const k of Object.keys(KEYS) as Kind[]) prefs[k] = window.localStorage.getItem(KEYS[k]) === "1";
    } catch {
      /* sin storage */
    }
    apply();
    setState({ ...prefs });
  }, []);

  function toggle(kind: Kind) {
    prefs[kind] = !prefs[kind];
    apply();
    setState({ ...prefs });
    try {
      window.localStorage.setItem(KEYS[kind], prefs[kind] ? "1" : "0");
    } catch {
      /* ignorar */
    }
  }

  const buttons: { kind: Kind; icon: string; label: string }[] = [
    { kind: "big", icon: "Aa", label: a11y.bigText },
    { kind: "hc", icon: "◐", label: a11y.contrast },
  ];

  return (
    <div className={`flex shrink-0 items-center gap-2 ${className}`} role="group" aria-label={a11y.label}>
      {buttons.map((b) => (
        <button
          key={b.kind}
          type="button"
          className={`inline-flex min-h-10 min-w-11 items-center justify-center rounded-lg border-2 px-3 text-sm font-extrabold transition-colors ${
            state[b.kind] ? "border-lime-300 bg-green-950 text-lime-300" : "border-green-600 bg-[#fffdf6] text-green-950 hover:border-lime-300"
          }`}
          aria-pressed={state[b.kind]}
          aria-label={b.label}
          title={b.label}
          onClick={() => toggle(b.kind)}
        >
          {b.icon}
        </button>
      ))}
    </div>
  );
}
