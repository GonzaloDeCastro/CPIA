"use client";

import "leaflet/dist/leaflet.css";

import type { Map as LeafletMap, LayerGroup } from "leaflet";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { approvedPlaces, type GuidaCategory, type GuidaPlace } from "@/data/guida/places";
import { GUIDA_COPY, SPEECH_LANG } from "@/lib/guida/copy";
import { EXTRAS_COPY, GUIDA_ROUTES } from "@/lib/guida/extras";
import { useLocale, type Locale } from "@/lib/i18n/locale";
import { withBasePath } from "@/lib/routing/base-path";

import { GuidaGallery } from "./GuidaGallery";
import { Picto } from "./Pictos";

const CATEGORY_COLOR: Record<GuidaCategory, string> = {
  sport: "#15803d",
  arte: "#4d7c0f",
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
  const [tab, setTab] = useState<Tab | null>(null);
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);
  const speaking = speakingKey === "place";
  const [routeId, setRouteId] = useState<string | null>(null);
  const [bigText, setBigText] = useState(false);
  const [contrast, setContrast] = useState(false);
  const extras = EXTRAS_COPY[locale];

  const mapEl = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const selectRef = useRef<(id: string) => void>(() => {});
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const route = GUIDA_ROUTES.find((r) => r.id === routeId) ?? null;
  const visible = useMemo(
    () =>
      places.filter(
        (p) => (filter === "all" || p.category === filter) && (!route || route.placeIds.includes(p.id)),
      ),
    [places, filter, route],
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
          .on("click", () => selectRef.current(p.id))
          .addTo(layer);
      }
      if (route) {
        const pts = route.placeIds
          .map((id) => visible.find((p) => p.id === id))
          .filter((p): p is GuidaPlace => Boolean(p))
          .map((p) => [p.lat, p.lng] as [number, number]);
        if (pts.length > 1) {
          L.polyline(pts, { color: "#bef264", weight: 4, dashArray: "8 8", opacity: 0.95 }).addTo(layer);
        }
        if (pts.length > 0 && mapRef.current) mapRef.current.fitBounds(L.latLngBounds(pts), { padding: [60, 60], maxZoom: 13 });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [mapReady, visible, selectedId, copy, route]);

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
  useEffect(() => setSpeakingKey(null), [selectedId, tab, locale]);

  // Accesibilidad: preferencias guardadas en el navegador (si hay storage).
  useEffect(() => {
    try {
      setBigText(window.localStorage.getItem("guida-big") === "1");
      setContrast(window.localStorage.getItem("guida-hc") === "1");
    } catch {
      /* sin storage */
    }
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = bigText ? "125%" : "";
    root.classList.toggle("guida-hc", contrast);
    return () => {
      root.style.fontSize = "";
      root.classList.remove("guida-hc");
    };
  }, [bigText, contrast]);
  function toggleA11y(kind: "big" | "hc") {
    const next = kind === "big" ? !bigText : !contrast;
    if (kind === "big") setBigText(next);
    else setContrast(next);
    try {
      window.localStorage.setItem(kind === "big" ? "guida-big" : "guida-hc", next ? "1" : "0");
    } catch {
      /* ignorar */
    }
  }
  useEffect(() => setTab(null), [locale]);

  // Por defecto se lee en el idioma elegido; el italiano fácil queda en su pestaña.
  const activeTab: Tab = tab === null || (tab === "mine" && locale === "it") ? (locale === "it" ? "simple" : "mine") : tab;

  function textFor(p: GuidaPlace): { text: string; lang: Locale } {
    if (activeTab === "simple") return { text: p.text.it, lang: "it" };
    if (activeTab === "mine") return { text: p.text[locale], lang: locale };
    return { text: p.practical[locale], lang: locale };
  }

  function toggleAudio(key: string, text: string, lang: Locale) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (speakingKey === key) {
      synth.cancel();
      setSpeakingKey(null);
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = SPEECH_LANG[lang];
    u.onend = () => setSpeakingKey(null);
    u.onerror = () => setSpeakingKey(null);
    synth.cancel();
    synth.speak(u);
    setSpeakingKey(key);
  }

  const tabs: { id: Tab; label: string }[] = [
    ...(locale === "it" ? [] : [{ id: "mine" as Tab, label: copy.tabs.mine }]),
    { id: "simple", label: copy.tabs.simple },
    { id: "info", label: copy.tabs.info },
  ];

  const chip = (active: boolean) =>
    `inline-flex min-h-10 shrink-0 items-center whitespace-nowrap rounded-full border-2 px-3 text-[13px] font-bold transition-colors sm:min-h-11 sm:px-4 sm:text-sm ${
      active ? "border-lime-300 bg-lime-300 text-green-950" : "border-green-600 bg-green-800 text-green-50 hover:border-lime-300"
    }`;
  // En el celular las filas de botones se deslizan de costado en vez de apilarse.
  const row =
    "no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 py-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0";

  function selectPlace(id: string) {
    setSelectedId(id);
    setTab(null);
    // En pantallas chicas la ficha queda debajo del mapa: la acercamos a la vista.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    }
  }

  useEffect(() => {
    selectRef.current = selectPlace;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pb-28 pt-4 sm:px-6 sm:pt-6">
      <header className="flex items-center gap-3 rounded-2xl border border-[#0f4c6e]/20 bg-[#fffdf6] p-3 shadow-[var(--shadow-card)] sm:gap-5 sm:p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/guida/brand/logo-mark.webp")}
          alt=""
          width={256}
          height={256}
          className="h-16 w-16 shrink-0 sm:h-24 sm:w-24"
        />
        <div className="min-w-0">
          <h1 className="font-brand text-[1.45rem] font-extrabold leading-[1.1] text-[#0f4c6e] sm:text-4xl" lang="it">
            Tra Zagare <em className="font-semibold text-[#c2410c]">e</em> Merendine
          </h1>
          <p className="mt-1 text-[13px] leading-snug text-[#1e3a4c] sm:text-base">{copy.subtitle}</p>
        </div>
      </header>

      <Link
        href="/guida/frasi"
        className="mt-3 flex items-center gap-4 rounded-3xl border-2 border-green-700 bg-green-950 p-4 text-green-50 transition-colors hover:border-lime-300 sm:p-5"
      >
        <span className="flex shrink-0 gap-1">
          <Picto id="passport" size={56} />
          <Picto id="doctor" size={56} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-2xl font-extrabold text-white">{extras.phrasesTitle}</span>
          <span className="mt-1 block text-sm text-green-100">{extras.phrasesHint}</span>
        </span>
        <span aria-hidden className="shrink-0 rounded-full bg-lime-300 px-4 py-2 text-lg font-extrabold text-green-950">→</span>
      </Link>

      <div className={`mt-3 ${row}`} role="group" aria-label={extras.a11y.label}>
        <button type="button" className={chip(bigText)} aria-pressed={bigText} onClick={() => toggleA11y("big")}>
          Aa {extras.a11y.bigText}
        </button>
        <button type="button" className={chip(contrast)} aria-pressed={contrast} onClick={() => toggleA11y("hc")}>
          ◐ {extras.a11y.contrast}
        </button>
        <Link
          href="/guida/progetto"
          className="inline-flex min-h-10 shrink-0 items-center whitespace-nowrap rounded-full bg-lime-300 px-3 text-[13px] font-extrabold text-green-950 hover:brightness-110 sm:ms-auto sm:min-h-11 sm:px-4 sm:text-sm"
        >
          {extras.projectLink} →
        </Link>
      </div>

      <div className={`mt-2 ${row}`} role="group">
        <button type="button" className={chip(filter === "all")} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          {copy.all}
        </button>
        {CATEGORIES.map((c) => (
          <button key={c} type="button" className={chip(filter === c)} aria-pressed={filter === c} onClick={() => setFilter(c)}>
            <span
              aria-hidden
              className="me-2 inline-block h-3 w-3 rounded-full border border-white/70"
              style={{ background: CATEGORY_COLOR[c] }}
            />
            {copy.categories[c]}
          </button>
        ))}
      </div>

      <div className={`mt-1 ${row}`} role="group" aria-label={extras.routes}>
        <span className="shrink-0 text-[13px] font-bold text-heading sm:text-sm">{extras.routes}:</span>
        <button type="button" className={chip(routeId === null)} aria-pressed={routeId === null} onClick={() => setRouteId(null)}>
          {extras.allRoutes}
        </button>
        {GUIDA_ROUTES.map((r) => (
          <button
            key={r.id}
            type="button"
            className={chip(routeId === r.id)}
            aria-pressed={routeId === r.id}
            onClick={() => {
              setRouteId(r.id);
              setFilter("all");
              setSelectedId(null);
            }}
          >
            {r.name[locale]}
          </button>
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div
          ref={mapEl}
          className="h-[290px] w-full overflow-hidden rounded-2xl border border-green-700 sm:h-[480px]"
          role="application"
          aria-label={copy.title}
          dir="ltr"
        />

        <section
          ref={cardRef}
          className="scroll-mt-4 rounded-2xl border border-green-700 bg-green-950 p-4 text-green-50 sm:p-5"
          aria-live="polite"
        >
          {selected ? (
            <>
              <p className="text-sm font-bold text-lime-300">
                {copy.categories[selected.category]} · {selected.town}
              </p>
              <h2 className="font-display text-xl font-extrabold leading-tight text-white">{selected.name}</h2>
              {selected.isExample ? (
                <p className="mt-2 inline-block rounded-md bg-amber-200 px-2 py-1 text-xs font-semibold text-amber-950 sm:text-sm">
                  {copy.example}
                </p>
              ) : null}

              <div className="mt-3 grid auto-cols-fr grid-flow-col gap-1 rounded-2xl bg-green-900 p-1" role="tablist">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === t.id}
                    className={`min-h-11 rounded-xl px-2 text-xs font-bold leading-tight transition-colors sm:text-sm ${
                      activeTab === t.id ? "bg-lime-300 text-green-950" : "text-green-50 hover:bg-green-800"
                    }`}
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
                    <p className="mt-4 text-base leading-relaxed sm:text-lg" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
                      {text}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="inline-flex min-h-12 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-lime-300 px-5 text-base font-extrabold text-green-950 hover:brightness-110 sm:flex-none"
                        onClick={() => toggleAudio("place", text, lang)}
                        aria-pressed={speaking}
                      >
                        {speaking ? `■ ${copy.stop}` : `▶ ${copy.listen}`}
                      </button>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 flex-1 items-center justify-center whitespace-nowrap rounded-full border-2 border-lime-300 px-5 text-base font-extrabold text-lime-300 hover:bg-green-900 sm:flex-none"
                      >
                        ➜ {extras.directions}
                      </a>
                    </div>
                  </>
                );
              })()}
            </>
          ) : (
            <p className="text-base text-green-200">{copy.pickPlace}</p>
          )}
        </section>
      </div>

      <p className="mt-4 text-sm font-semibold text-foreground-muted">{copy.places(visible.length)}</p>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => selectPlace(p.id)}
              className={`flex min-h-12 w-full items-center gap-3 rounded-xl border-2 bg-green-900 px-3 py-2 text-start text-green-50 ${
                p.id === selectedId ? "border-lime-300" : "border-green-700 hover:border-green-400"
              }`}
            >
              <span
                aria-hidden
                className="h-4 w-4 shrink-0 rounded-full border border-white/70"
                style={{ background: CATEGORY_COLOR[p.category] }}
              />
              <span className="min-w-0 flex-1 text-sm font-bold">{p.name}</span>
              <span className="shrink-0 text-xs font-semibold text-green-200">{p.town}</span>
            </button>
          </li>
        ))}
      </ul>

      <GuidaGallery copy={extras.gallery} />

    </div>
  );
}
