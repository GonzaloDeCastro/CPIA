import type { ReactNode } from "react";

/**
 * Ilustraciones originales (SVG propios, sin licencias) para las frases útiles.
 * Estilo plano, colores de la guía. Decorativas: el texto siempre acompaña.
 */

const C = {
  ink: "#14532d",
  green: "#16a34a",
  lime: "#bef264",
  sun: "#f59e0b",
  orange: "#ea580c",
  sky: "#38bdf8",
  navy: "#0f4c6e",
  paper: "#fffdf6",
  red: "#dc2626",
  sand: "#fde68a",
  grey: "#cbd5e1",
};

function Box({ children, size, vb = 64 }: { children: ReactNode; size: number; vb?: number }) {
  return (
    <svg viewBox={`0 0 ${vb} ${vb}`} width={size} height={size} aria-hidden focusable="false" className="shrink-0">
      {children}
    </svg>
  );
}

const stroke = { stroke: C.ink, strokeWidth: 2.5, strokeLinejoin: "round", strokeLinecap: "round" } as const;

/* ---------- Pictogramas de frases (64×64) ---------- */
const PICTOS: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="9" y="13" width="46" height="42" rx="6" fill={C.paper} {...stroke} />
      <rect x="9" y="13" width="46" height="13" rx="6" fill={C.orange} {...stroke} />
      <path d="M20 8v10M44 8v10" {...stroke} />
      <circle cx="22" cy="36" r="3" fill={C.green} />
      <circle cx="32" cy="36" r="3" fill={C.green} />
      <circle cx="42" cy="36" r="3" fill={C.sun} />
      <circle cx="22" cy="46" r="3" fill={C.green} />
      <circle cx="32" cy="46" r="3" fill={C.green} />
    </>
  ),
  passport: (
    <>
      <rect x="14" y="7" width="37" height="50" rx="5" fill={C.navy} {...stroke} />
      <circle cx="32.5" cy="26" r="9" fill="none" stroke={C.sand} strokeWidth="2.5" />
      <path d="M23.5 26h18M32.5 17c-5 5-5 13 0 18M32.5 17c5 5 5 13 0 18" stroke={C.sand} strokeWidth="1.8" fill="none" />
      <rect x="22" y="42" width="21" height="4" rx="2" fill={C.sand} />
    </>
  ),
  turtle: (
    <>
      <path d="M12 40c0-12 9-19 21-19s21 7 21 19z" fill={C.green} {...stroke} />
      <path d="M24 40c0-7 3-13 9-19M42 40c0-7-3-13-9-19M20 31h26" stroke={C.ink} strokeWidth="2" fill="none" />
      <circle cx="55" cy="35" r="6" fill={C.lime} {...stroke} />
      <circle cx="57" cy="34" r="1.3" fill={C.ink} />
      <rect x="16" y="40" width="7" height="8" rx="3" fill={C.lime} {...stroke} />
      <rect x="40" y="40" width="7" height="8" rx="3" fill={C.lime} {...stroke} />
      <path d="M10 15h14M10 21h9" stroke={C.sky} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="32" cy="33" r="23" fill={C.paper} {...stroke} />
      <path d="M32 18v16l10 6" stroke={C.orange} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="32" cy="33" r="2.5" fill={C.ink} />
      <path d="M18 8l6 4M46 8l-6 4" {...stroke} />
    </>
  ),
  idcard: (
    <>
      <rect x="6" y="14" width="52" height="36" rx="6" fill={C.paper} {...stroke} />
      <circle cx="21" cy="29" r="6" fill={C.sand} {...stroke} />
      <path d="M11 45c1-7 5-9 10-9s9 2 10 9z" fill={C.green} {...stroke} />
      <path d="M37 25h15M37 32h15M37 39h10" stroke={C.navy} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  healthcard: (
    <>
      <rect x="6" y="14" width="52" height="36" rx="6" fill={C.sky} {...stroke} />
      <rect x="13" y="21" width="14" height="14" rx="3" fill={C.paper} {...stroke} />
      <path d="M20 24v8M16 28h8" stroke={C.red} strokeWidth="3" strokeLinecap="round" />
      <path d="M33 25h19M33 32h19M13 42h20" stroke={C.paper} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  pen: (
    <>
      <rect x="10" y="10" width="36" height="46" rx="4" fill={C.paper} {...stroke} />
      <path d="M17 22h22M17 30h22M17 38h12" stroke={C.grey} strokeWidth="3" strokeLinecap="round" />
      <path d="M52 14l-22 22-3 9 9-3 22-22z" fill={C.sun} {...stroke} />
      <path d="M49 17l6 6" {...stroke} />
    </>
  ),
  clipboard: (
    <>
      <rect x="12" y="10" width="40" height="48" rx="5" fill={C.paper} {...stroke} />
      <rect x="23" y="5" width="18" height="10" rx="3" fill={C.grey} {...stroke} />
      <path d="M20 28l4 4 7-8M20 44l4 4 7-8" stroke={C.green} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 29h10M36 45h10" stroke={C.navy} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  doctor: (
    <>
      <circle cx="32" cy="19" r="10" fill={C.sand} {...stroke} />
      <path d="M12 58c0-14 8-21 20-21s20 7 20 21z" fill={C.paper} {...stroke} />
      <path d="M32 37v21" {...stroke} />
      <path d="M32 44v5M29.5 46.5h5" stroke={C.red} strokeWidth="3" strokeLinecap="round" />
      <path d="M22 38c-2 7 0 12 5 13M42 38c2 7 0 12-5 13" stroke={C.navy} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="27" cy="52" r="3" fill={C.navy} />
    </>
  ),
  question: (
    <>
      <circle cx="32" cy="32" r="24" fill={C.sun} {...stroke} />
      <path d="M24 26c0-5 4-8 8-8s8 3 8 7c0 6-8 6-8 12" fill="none" stroke={C.paper} strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="46" r="3.2" fill={C.paper} />
    </>
  ),
  bankcard: (
    <>
      <rect x="5" y="14" width="54" height="36" rx="6" fill={C.green} {...stroke} />
      <rect x="5" y="22" width="54" height="8" fill={C.ink} />
      <rect x="12" y="37" width="14" height="9" rx="2" fill={C.sun} {...stroke} />
      <path d="M36 42h16" stroke={C.lime} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="25" cy="44" rx="17" ry="7" fill={C.sun} {...stroke} />
      <path d="M8 44v-7c0 4 8 7 17 7s17-3 17-7v7" fill={C.sun} {...stroke} />
      <ellipse cx="25" cy="37" rx="17" ry="7" fill={C.sand} {...stroke} />
      <circle cx="44" cy="22" r="14" fill={C.sun} {...stroke} />
      <path d="M49 17c-5-3-11 0-11 5s6 8 11 5M36 21h9M36 25h9" stroke={C.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </>
  ),
  house: (
    <>
      <path d="M8 31L32 9l24 22z" fill={C.orange} {...stroke} />
      <rect x="14" y="30" width="36" height="25" fill={C.paper} {...stroke} />
      <rect x="27" y="40" width="10" height="15" rx="2" fill={C.navy} {...stroke} />
      <rect x="17" y="35" width="8" height="8" rx="1" fill={C.sky} {...stroke} />
      <rect x="39" y="35" width="8" height="8" rx="1" fill={C.sky} {...stroke} />
    </>
  ),
  contract: (
    <>
      <path d="M13 6h27l11 11v41H13z" fill={C.paper} {...stroke} />
      <path d="M40 6v11h11" fill={C.sand} {...stroke} />
      <path d="M20 26h24M20 33h24M20 40h14" stroke={C.grey} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 51c4-6 6 2 9-3s4 2 8-1" stroke={C.navy} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  search: (
    <>
      <circle cx="26" cy="26" r="16" fill={C.sky} fillOpacity=".35" {...stroke} />
      <path d="M38 38l18 18" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
      <path d="M18 24c2-5 7-7 11-5" stroke={C.paper} strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
};

export type PictoId = keyof typeof PICTOS;

export function Picto({ id, size = 64 }: { id: string; size?: number }) {
  return <Box size={size}>{PICTOS[id] ?? PICTOS.question}</Box>;
}

/* ---------- Escenas grandes por situación (120×120) ---------- */
const SCENES: Record<string, ReactNode> = {
  questura: (
    <>
      <rect x="0" y="0" width="120" height="120" rx="18" fill={C.sky} fillOpacity=".25" />
      <rect x="0" y="96" width="120" height="24" fill={C.green} fillOpacity=".35" />
      <path d="M18 52L60 24l42 28z" fill={C.navy} {...stroke} />
      <rect x="24" y="52" width="72" height="46" fill={C.paper} {...stroke} />
      <path d="M32 52v46M46 52v46M74 52v46M88 52v46" stroke={C.grey} strokeWidth="3" />
      <rect x="52" y="68" width="16" height="30" rx="3" fill={C.navy} {...stroke} />
      <path d="M60 24V10" {...stroke} />
      <path d="M60 10h18v9H60z" fill={C.green} {...stroke} />
      <path d="M69 10h9v9h-9z" fill={C.paper} />
      <path d="M78 10h0v9" stroke={C.red} />
      <path d="M60 31l4 3-1.5 5h-5L56 34z" fill={C.sand} stroke={C.ink} strokeWidth="1.5" />
    </>
  ),
  entrate: (
    <>
      <rect x="0" y="0" width="120" height="120" rx="18" fill={C.sand} fillOpacity=".5" />
      <rect x="14" y="30" width="70" height="52" rx="8" fill={C.paper} {...stroke} />
      <circle cx="34" cy="52" r="9" fill={C.sand} {...stroke} />
      <path d="M20 76c1-10 7-13 14-13s13 3 14 13z" fill={C.green} {...stroke} />
      <path d="M56 46h20M56 56h20M56 66h13" stroke={C.navy} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="62" y="62" width="40" height="40" rx="8" fill={C.orange} {...stroke} />
      <path d="M74 74h16M74 82h16M74 90h10" stroke={C.paper} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="96" cy="26" r="14" fill={C.sun} {...stroke} />
      <path d="M101 21c-5-3-11 0-11 5s6 8 11 5M89 25h9M89 29h9" stroke={C.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </>
  ),
  asp: (
    <>
      <rect x="0" y="0" width="120" height="120" rx="18" fill={C.sky} fillOpacity=".3" />
      <rect x="22" y="36" width="76" height="62" rx="6" fill={C.paper} {...stroke} />
      <rect x="22" y="36" width="76" height="14" rx="6" fill={C.red} {...stroke} />
      <circle cx="60" cy="30" r="20" fill={C.paper} {...stroke} />
      <path d="M60 19v22M49 30h22" stroke={C.red} strokeWidth="8" strokeLinecap="round" />
      <rect x="50" y="68" width="20" height="30" rx="3" fill={C.navy} {...stroke} />
      <rect x="30" y="60" width="14" height="14" rx="2" fill={C.sky} {...stroke} />
      <rect x="76" y="60" width="14" height="14" rx="2" fill={C.sky} {...stroke} />
    </>
  ),
  banca: (
    <>
      <rect x="0" y="0" width="120" height="120" rx="18" fill={C.lime} fillOpacity=".35" />
      <path d="M14 46L60 18l46 28z" fill={C.green} {...stroke} />
      <rect x="18" y="46" width="84" height="8" fill={C.paper} {...stroke} />
      <path d="M28 54v36M48 54v36M72 54v36M92 54v36" stroke={C.ink} strokeWidth="9" />
      <path d="M28 54v36M48 54v36M72 54v36M92 54v36" stroke={C.paper} strokeWidth="4" />
      <rect x="12" y="90" width="96" height="10" rx="2" fill={C.paper} {...stroke} />
      <circle cx="60" cy="35" r="7" fill={C.sun} {...stroke} />
      <path d="M62.5 32.5c-3-1.5-6 0-6 2.5s3 4 6 2.5M55 34.5h6M55 37h6" stroke={C.ink} strokeWidth="1.4" fill="none" />
    </>
  ),
  casa: (
    <>
      <rect x="0" y="0" width="120" height="120" rx="18" fill={C.sky} fillOpacity=".3" />
      <rect x="0" y="98" width="120" height="22" fill={C.green} fillOpacity=".4" />
      <path d="M12 56L60 14l48 42z" fill={C.orange} {...stroke} />
      <rect x="22" y="54" width="76" height="46" fill={C.paper} {...stroke} />
      <rect x="52" y="68" width="18" height="32" rx="3" fill={C.navy} {...stroke} />
      <rect x="30" y="62" width="16" height="16" rx="2" fill={C.sky} {...stroke} />
      <rect x="76" y="62" width="16" height="16" rx="2" fill={C.sky} {...stroke} />
      <circle cx="96" cy="94" r="9" fill="none" stroke={C.sun} strokeWidth="5" />
      <path d="M103 98l12 8M110 102v6" stroke={C.sun} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
};

export function Scene({ id, size = 120 }: { id: string; size?: number }) {
  return (
    <Box size={size} vb={120}>
      {SCENES[id] ?? SCENES.casa}
    </Box>
  );
}
