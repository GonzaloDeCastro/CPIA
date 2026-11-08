"use client";

import { useState } from "react";

import { TRIVIA_COPY_ES, type TriviaCopy } from "@/lib/trivia/copy";
import { createPlayer } from "@/lib/trivia/game-state";
import type { TriviaRoundsPerPlayer } from "@/lib/trivia/types";

type Props = {
  onStart: (players: ReturnType<typeof createPlayer>[], rounds: TriviaRoundsPerPlayer) => void;
  copy?: TriviaCopy;
};

export function TriviaLobby({ onStart, copy = TRIVIA_COPY_ES }: Props) {
  const [count, setCount] = useState(2);
  const [names, setNames] = useState(["", ""]);
  const [rounds, setRounds] = useState<TriviaRoundsPerPlayer>(3);
  const [error, setError] = useState("");

  const setPlayerCount = (n: number) => {
    setCount(n);
    setNames((prev) => {
      const next = [...prev];
      while (next.length < n) next.push("");
      return next.slice(0, n);
    });
    setError("");
  };

  const handleStart = () => {
    const trimmed = names.map((n) => n.trim());
    if (trimmed.some((n) => !n)) {
      setError(copy.errorNames);
      return;
    }
    const lower = trimmed.map((n) => n.toLowerCase());
    if (new Set(lower).size !== lower.length) {
      setError(copy.errorDuplicates);
      return;
    }
    onStart(
      trimmed.map((name, i) => createPlayer(name, i)),
      rounds,
    );
  };

  return (
    <div className="mx-auto max-w-lg space-y-6 rounded-3xl border-2 border-sun/40 bg-surface-elevated p-6 shadow-[var(--shadow-card)]">
      <div>
        <h2 className="font-display text-2xl font-bold text-heading">{copy.lobbyTitle}</h2>
        <p className="mt-1 text-sm font-medium text-foreground-muted">
          {copy.lobbyHint}
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold text-heading">{copy.playerCount}</p>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPlayerCount(n)}
              className={`min-h-12 min-w-12 rounded-full px-4 text-sm font-extrabold transition ${
                count === n
                  ? "bg-sun text-sun-ink shadow-[var(--shadow-card)]"
                  : "border-2 border-heading/20 bg-background-warm text-heading"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <ul className="space-y-3">
        {names.map((name, i) => (
          <li key={i}>
            <label className="mb-1 block text-sm font-bold text-heading">
              {copy.playerLabel(i + 1)}
            </label>
            <input
              type="text"
              maxLength={24}
              value={name}
              onChange={(e) => {
                const next = [...names];
                next[i] = e.target.value;
                setNames(next);
                setError("");
              }}
              placeholder={copy.playerPlaceholder(i + 1)}
              className="w-full rounded-2xl border-2 border-heading/15 bg-background px-4 py-3 text-base font-semibold text-foreground outline-none focus:border-celeste"
            />
          </li>
        ))}
      </ul>

      <div>
        <p className="mb-2 text-sm font-bold text-heading">{copy.questionsPerPlayer}</p>
        <div className="flex gap-2">
          {([3, 5] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRounds(n)}
              className={`min-h-12 flex-1 rounded-2xl text-sm font-extrabold ${
                rounds === n
                  ? "bg-water text-white"
                  : "border-2 border-heading/20 bg-background-warm text-heading"
              }`}
            >
              {copy.questionsOption(n)}
            </button>
          ))}
        </div>
      </div>

      {error ? (
        <p className="text-sm font-bold text-terracotta" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="button"
        onClick={handleStart}
        className="w-full min-h-14 rounded-2xl bg-sun text-lg font-extrabold text-sun-ink shadow-[var(--shadow-card)] transition hover:brightness-110 active:scale-[0.99]"
      >
        {copy.start}
      </button>
    </div>
  );
}
