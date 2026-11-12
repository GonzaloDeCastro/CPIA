import { UiLink } from "@/components/layout/UiLink";
import {
  WORLD_COUNTRIES,
  WORLD_MAP_VIEW_BOX,
} from "@/data/map/world-paths.generated";

const LINKS = {
  AR: { href: "/mapa/argentina", text: "argentina" },
  IT: { href: "/mapa/italia", text: "italy" },
} as const;

type LinkId = keyof typeof LINKS;

const PLAYABLE = WORLD_COUNTRIES.filter((c) => c.id in LINKS);
const OTHERS = WORLD_COUNTRIES.filter((c) => !(c.id in LINKS));

/** Mapamundi: tocá Argentina o Italia para entrar a su mapa. */
export function WorldMapPicker() {
  return (
    <svg
      viewBox={WORLD_MAP_VIEW_BOX}
      className="h-auto w-full select-none"
      role="group"
    >
      <g fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.35)" strokeWidth={0.4}>
        {OTHERS.map((c) => (
          <path key={c.id} d={c.d} />
        ))}
      </g>
      {PLAYABLE.map((c) => {
        const info = LINKS[c.id as LinkId];
        return (
          <UiLink
            key={c.id}
            href={info.href}
            text={info.text}
            className="group"
          >
            <path
              d={c.d}
              className="cursor-pointer fill-sun stroke-white transition-colors group-hover:fill-white group-focus-visible:fill-white"
              strokeWidth={1}
            />
          </UiLink>
        );
      })}
    </svg>
  );
}
