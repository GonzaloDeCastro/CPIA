import { TRIVIA_COPY_ES, type TriviaCopy } from "@/lib/trivia/copy";
import type { TriviaPlayer } from "@/lib/trivia/types";

type Props = {
  players: TriviaPlayer[];
  activePlayerId?: string;
  copy?: TriviaCopy;
};

export function TriviaScoreboard({ players, activePlayerId, copy = TRIVIA_COPY_ES }: Props) {
  const sorted = [...players].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.totalCorrectTimeMs - b.totalCorrectTimeMs;
  });

  return (
    <div className="rounded-2xl border-2 border-heading/15 bg-background-warm/80 p-4">
      <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-heading">
        {copy.scores}
      </h3>
      <ul className="space-y-2">
        {sorted.map((p) => {
          const active = p.id === activePlayerId;
          return (
            <li
              key={p.id}
              className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-bold ${
                active ? "bg-sun/30 ring-2 ring-sun" : "bg-surface"
              }`}
            >
              <span className="truncate text-heading">{p.name}</span>
              <span className="shrink-0 text-foreground-muted">
                {copy.points(p.score)}
                {p.score > 0 ? (
                  <span className="ml-2 text-xs">({(p.totalCorrectTimeMs / 1000).toFixed(1)}s)</span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
