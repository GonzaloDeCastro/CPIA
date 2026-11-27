"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { SPEECH_LANG } from "@/lib/guida/copy";
import type { Locale } from "@/lib/i18n/locale";
import { withBasePath } from "@/lib/routing/base-path";

/** Grabaciones reales en árabe (`public/guida/audio/ar/<situación>-<n>.m4a`). Falta banca-2: usa la voz del dispositivo. */
const AR_RECORDINGS = new Set([
  "questura-1", "questura-2", "questura-3", "questura-4",
  "entrate-1", "entrate-2", "entrate-3", "entrate-4",
  "asp-1", "asp-2", "asp-3",
  "banca-1", "banca-3",
  "casa-1", "casa-2", "casa-3",
]);

/** Grabaciones reales en español (`public/guida/audio/es/<situación>-<n>.ogg`): están las 17 frases. */
const ES_RECORDINGS = new Set([
  "questura-1", "questura-2", "questura-3", "questura-4",
  "entrate-1", "entrate-2", "entrate-3", "entrate-4",
  "asp-1", "asp-2", "asp-3",
  "banca-1", "banca-2", "banca-3",
  "casa-1", "casa-2", "casa-3",
]);

/** Grabaciones reales en francés (`public/guida/audio/fr/<situación>-<n>.m4a`): están las 17 frases. */
const FR_RECORDINGS = ES_RECORDINGS;

/** Grabaciones reales en inglés y rumano (`.ogg`): están las 17 frases. */
const EN_RECORDINGS = ES_RECORDINGS;
const RO_RECORDINGS = ES_RECORDINGS;

/** Grabaciones reales en italiano (`.m4a`): están las 17 frases. */
const IT_RECORDINGS = ES_RECORDINGS;

/** Ruta de la grabación real de una frase (n empieza en 1), o undefined si no hay. */
export function recordingFor(groupId: string, n: number, lang: Locale): string | undefined {
  const id = `${groupId}-${n}`;
  if (lang === "ar") return AR_RECORDINGS.has(id) ? `/guida/audio/ar/${id}.m4a` : undefined;
  if (lang === "es") return ES_RECORDINGS.has(id) ? `/guida/audio/es/${id}.ogg` : undefined;
  if (lang === "fr") return FR_RECORDINGS.has(id) ? `/guida/audio/fr/${id}.m4a` : undefined;
  if (lang === "en") return EN_RECORDINGS.has(id) ? `/guida/audio/en/${id}.ogg` : undefined;
  if (lang === "ro") return RO_RECORDINGS.has(id) ? `/guida/audio/ro/${id}.ogg` : undefined;
  if (lang === "it") return IT_RECORDINGS.has(id) ? `/guida/audio/it/${id}.m4a` : undefined;
  return undefined;
}

/** ¿El dispositivo tiene una voz para este idioma? (el árabe y el rumano a veces faltan) */
function hasVoice(lang: Locale): boolean {
  const base = SPEECH_LANG[lang].split("-")[0].toLowerCase();
  return window.speechSynthesis
    .getVoices()
    .some((v) => v.lang.toLowerCase().replace("_", "-").startsWith(base));
}

/**
 * Lee un texto en voz alta con la voz del dispositivo.
 * `missing` queda con el idioma sin voz instalada, para avisar con un mensaje.
 * Si se pasa `recording`, reproduce ese archivo de audio en vez de la voz del dispositivo.
 */
export function useSpeech() {
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [missing, setMissing] = useState<Locale | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopFile = () => {
    audioRef.current?.pause();
    audioRef.current = null;
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setPlayingKey(null);
  }, []);

  const play = useCallback(
    (key: string, text: string, lang: Locale, recording?: string) => {
      if (playingKey === key) {
        stop();
        return;
      }
      stopFile();
      if (recording) {
        setMissing(null);
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        const a = new Audio(withBasePath(recording));
        a.onended = () => setPlayingKey(null);
        a.onerror = () => setPlayingKey(null);
        audioRef.current = a;
        a.play().catch(() => setPlayingKey(null));
        setPlayingKey(key);
        return;
      }
      if (!("speechSynthesis" in window)) {
        setMissing(lang);
        return;
      }
      setMissing(null);
      // Las voces cargan tarde en algunos navegadores: si la lista está vacía, no bloqueamos.
      const loaded = window.speechSynthesis.getVoices().length > 0;
      if (loaded && !hasVoice(lang)) {
        setMissing(lang);
        return;
      }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = SPEECH_LANG[lang];
      u.rate = 0.9;
      u.onend = () => setPlayingKey(null);
      u.onerror = () => setPlayingKey(null);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
      setPlayingKey(key);
    },
    [playingKey, stop],
  );

  return { playingKey, play, stop, missing, clearMissing: () => setMissing(null) };
}
