import Link from "next/link";

import { withBasePath } from "@/lib/routing/base-path";

type Props = {
  /** Rutas dentro de `public/guida/`, sin `-sm.webp`. */
  photos: string[];
  href: string;
  label: string;
};

/** Columna de fotos enmarcadas que acompaña la home solo en pantallas anchas. */
export function HomeSidePhotos({ photos, href, label }: Props) {
  return (
    <aside className="hidden pt-6 xl:block">
      <Link href={href} className="group sticky top-6 mx-auto flex max-w-60 flex-col gap-4">
        {photos.map((p, i) => (
          <span
            key={p}
            className={`block overflow-hidden rounded-2xl border-4 border-[#fffdf6] shadow-[var(--shadow-elevated)] ${i % 2 ? "rotate-2" : "-rotate-2"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath(`/guida/${p}-sm.webp`)}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </span>
        ))}
        <span className="rounded-lg border-2 border-lime-300 bg-green-950 px-3 py-2 text-center text-sm font-extrabold text-lime-300">{label} →</span>
      </Link>
    </aside>
  );
}
