"use client";

import "leaflet/dist/leaflet.css";

import type { Map as LeafletMap, LayerGroup } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";

import { approvedPlaces, type GuidaCategory, type GuidaPlace } from "@/data/guida/places";
import { GUIDA_COPY, SPEECH_LANG } from "@/lib/guida/copy";
import { useLocale, type Locale } from "@/lib/i18n/locale";

const CATEGORY_COLOR: Record<GuidaCategory, string> = {
  sport: "#c2410c",
  arte: "#6d28d9",
  benessere: "#0f766e",
};
const CATEGORIES: GuidaCategory[] = ["sport", "arte", "benessere"];

type Tab = "simple" | "mine" | "info";

export function GuidaExplorer() {
  const { locale } = useLocale();
  const copy = GUIDA_COPY[locale];
  const places = useMemo(() => approvedPlaces(), []);

  const [filter, setFilter] = useState<GuidaCategory | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("simple");
  const [speaking, setSpeaking] = useState(false);

  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const visible = useMemo(
    () => places.filter((p) => filter === "all" || p.category === filter),
    [places, filter],
  );
  const selected = places.find((p) => p.id === selectedId) ?? null;

  // Inicializa el mapa (solo en el navegador).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !mapEl.current || mapRef.current) return;
      const map = L.map(mapEl.current, { scrollWheelZoom: false }).setView([37.68, 15.05], 10);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      layerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      setMapReady(true);
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  // Dibuja los pines según filtro y selección.
  useEffect(() => {
    if (!mapReady || !layerRef.current) return;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !layerRef.current) return;
      const layer = layerRef.current;
      layer.clearLayers();
      for (const p of visible) {
        const active = p.id === selectedId;
        const size = active ? 38 : 30;
        const icon = L.divIcon({
          className: "",
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
          html: `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${CATEGORY_COLOR[p.category]};border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.45);color:#fff;font:700 13px/${size - 6}px system-ui;text-align:center">${copy.categories[p.category][0]}</div>`,
        });
        L.marker([p.lat, p.lng], { icon, title: p.name, keyboard: true })
          .on("click", () => {
            setSelectedId(p.id);
            setTab("simple");
          })
          .addTo(layer);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [mapReady, visible, selectedId, copy]);

  // Centra el mapa en la ficha elegida.
  useEffect(() => {
    if (selected && mapRef.current) mapRef.current.flyTo([selected.lat, selected.lng], 12);
  }, [selected]);

  // Corta el audio al cambiar de ficha, pestaña o idioma, o al salir.
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [selectedId, tab, locale]);
  useEffect(() => setSpeaking(false), [selectedId, tab, locale]);

  const activeTab: Tab = tab === "mine" && locale === "it" ? "simple" : tab;

  function textFor(p: GuidaPlace): { text: string; lang: Locale } {
    if (activeTab === "simple") return { text: p.text.it, lang: "it" };
    if (activeTab === "mine") return { text: p.text[locale], lang: locale };
    return { text: p.practical[locale], lang: locale };
  }

  function toggleAudio(text: string, lang: Locale) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = SPEECH_LANG[lang];
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    synth.cancel();
    synth.speak(u);
    setSpeaking(true);
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "simple", label: copy.tabs.simple },
    ...(locale === "it" ? [] : [{ id: "mine" as Tab, label: copy.tabs.mine }]),
    { id: "info", label: copy.tabs.info },
  ];

  const chip = (active: boolean) =>
    `min-h-11 rounded-full border-2 px-4 text-sm font-bold transition-colors ${
      active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-900 hover:border-slate-900"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <h1 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{copy.title}</h1>
      <p className="mt-1 text-base text-slate-700">{copy.subtitle}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2" role="group">
        <button type="button" className={chip(filter === "all")} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          {copy.all}
        </button>
        {CATEGORIES.map((c) => (
          <button key={c} type="button" className={chip(filter === c)} aria-pressed={filter === c} onClick={() => setFilter(c)}>
            <span aria-hidden className="me-2 inline-block h-3 w-3 rounded-full align-middle" style={{ background: CATEGORY_COLOR[c] }} />
            {copy.categories[c]}
          </button>
        ))}
        <span className="ms-auto text-sm font-semibold text-slate-700">{copy.places(visible.length)}</span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div
          ref={mapEl}
          className="h-[360px] w-full overflow-hidden rounded-2xl border border-slate-300 sm:h-[480px]"
          role="application"
          aria-label={copy.title}
          dir="ltr"
        />

        <section className="rounded-2xl border border-slate-300 bg-white p-4 text-slate-900" aria-live="polite">
          {selected ? (
            <>
              <p className="text-sm font-bold" style={{ color: CATEGORY_COLOR[selected.category] }}>
                {copy.categories[selected.category]} · {selected.town}
              </p>
              <h2 className="font-display text-xl font-extrabold">{selected.name}</h2>
              {selected.isExample ? (
                <p className="mt-1 inline-block rounded-md bg-amber-100 px-2 py-1 text-sm font-semibold text-amber-900">
                  {copy.example}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap gap-2" role="tablist">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === t.id}
                    className={chip(activeTab === t.id)}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {(() => {
                const { text, lang } = textFor(selected);
                return (
                  <>
                    <p className="mt-4 text-lg leading-relaxed" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
                      {text}
                    </p>
                    <button
                      type="button"
                      className="mt-3 min-h-12 rounded-full bg-sky-deep px-5 text-base font-extrabold text-white hover:brightness-110"
                      onClick={() => toggleAudio(text, lang)}
                      aria-pressed={speaking}
                    >
                      {speaking ? `■ ${copy.stop}` : `▶ ${copy.listen}`}
                    </button>
                  </>
                );
              })()}
            </>
          ) : (
            <p className="text-base text-slate-700">{copy.pickPlace}</p>
          )}
        </section>
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => {
                setSelectedId(p.id);
                setTab("simple");
              }}
              className={`flex min-h-12 w-full items-center gap-3 rounded-xl border-2 bg-white px-3 text-start text-slate-900 ${
                p.id === selectedId ? "border-slate-900" : "border-slate-200 hover:border-slate-500"
              }`}
            >
              <span aria-hidden className="h-4 w-4 shrink-0 rounded-full" style={{ background: CATEGORY_COLOR[p.category] }} />
              <span className="text-sm font-bold">{p.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
