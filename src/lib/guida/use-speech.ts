"use client";

import { useCallback, useEffect, useState } from "react";

import { SPEECH_LANG } from "@/lib/guida/copy";
import type { Locale } from "@/lib/i18n/locale";

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
 * Cuando haya grabaciones propias, reemplazar `play` por un <audio> sin cambiar quien lo usa.
 */
export function useSpeech() {
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [missing, setMissing] = useState<Locale | null>(null);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setPlayingKey(null);
  }, []);

  const play = useCallback(
    (key: string, text: string, lang: Locale) => {
      if (!("speechSynthesis" in window)) {
        setMissing(lang);
        return;
      }
      if (playingKey === key) {
        stop();
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
