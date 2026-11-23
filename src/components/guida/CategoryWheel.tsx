"use client";

import Link from "next/link";

import { HOME_COPY } from "@/lib/guida/home-copy";
import { useLocale } from "@/lib/i18n/locale";
import { withBasePath } from "@/lib/routing/base-path";

const C = 150;
const R_OUT = 144;
const R_IN = 74;
const GAP = 2; // grados de separación entre sectores

function polar(r: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
}

function sector(center: number) {
  const a0 = center - 60 + GAP / 2;
  const a1 = center + 60 - GAP / 2;
  const [x0, y0] = polar(R_OUT, a0);
  const [x1, y1] = polar(R_OUT, a1);
  const [x2, y2] = polar(R_IN, a1);
  const [x3, y3] = polar(R_IN, a0);
  return `M${x0} ${y0} A${R_OUT} ${R_OUT} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${R_IN} ${R_IN} 0 0 0 ${x3} ${y3}Z`;
}

/** Parte el texto en renglones de ~11 letras para que entre dentro del sector. */
function wrap(text: string, max = 11): string[] {
  const lines: string[] = [];
  for (const w of text.split(" ")) {
    const last = lines[lines.length - 1];
    if (last !== undefined && (last + " " + w).length <= max) lines[lines.length - 1] = last + " " + w;
    else lines.push(w);
  }
  return lines;
}

/** Círculo con las 3 categorías alrededor del logo: cada sector es un enlace. */
export function CategoryWheel() {
  const { locale } = useLocale();
  const w = HOME_COPY[locale].wheel;
  const sectors = [
    { center: -90, label: w.info, href: "/guida/info-utili", fill: "#0f4c6e" },
    { center: 30, label: w.sport, href: "/guida/sport", fill: "#15803d" },
    { center: 150, label: w.art, href: "/guida/mappa#arte", fill: "#c2410c" },
  ];

  return (
    <svg viewBox="0 0 300 300" role="group" aria-label={w.title} className="mx-auto block h-auto w-full max-w-[22rem]" direction="ltr">
      {sectors.map((s) => {
        const [tx, ty] = polar(109, s.center);
        const lines = wrap(s.label);
        return (
          <Link key={s.href} href={s.href} aria-label={s.label} className="group outline-none">
            <path
              d={sector(s.center)}
              fill={s.fill}
              stroke="#fffdf6"
              strokeWidth={3}
              className="transition-[filter] group-hover:brightness-125 group-focus-visible:brightness-125"
            />
            <text textAnchor="middle" fill="#fff" fontSize={15} fontWeight={800} className="pointer-events-none" lang={locale}>
              {lines.map((l, i) => (
                <tspan key={i} x={tx} y={ty + (i - (lines.length - 1) / 2) * 17 + 5}>
                  {l}
                </tspan>
              ))}
            </text>
          </Link>
        );
      })}
      <defs>
        <clipPath id="wheel-logo-clip">
          <circle cx={C} cy={C} r={R_IN - 6} />
        </clipPath>
      </defs>
      <circle cx={C} cy={C} r={R_IN - 6} fill="#fffdf6" />
      <image
        href={withBasePath("/guida/brand/logo-mark.webp")}
        x={C - (R_IN - 6)}
        y={C - (R_IN - 6)}
        width={(R_IN - 6) * 2}
        height={(R_IN - 6) * 2}
        clipPath="url(#wheel-logo-clip)"
        aria-hidden
      />
      <circle cx={C} cy={C} r={R_IN - 6} fill="none" stroke="#fffdf6" strokeWidth={3} />
    </svg>
  );
}
