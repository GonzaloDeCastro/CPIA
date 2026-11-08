"use client";

import { useState } from "react";

import { TRIVIA_COPY_ES, type TriviaCopy } from "@/lib/trivia/copy";
import { pickRandomTriviaPrize, type TriviaPrizeSet } from "@/data/trivia/reward-manifest";
import { downloadTriviaCertificate } from "@/lib/trivia/download-certificate";
import { withBasePath } from "@/lib/routing/base-path";
import type { TriviaPlayer } from "@/lib/trivia/types";

type Props = {
  winners: TriviaPlayer[];
  shared: boolean;
  onPlayAgain: () => void;
  copy?: TriviaCopy;
  prizeSet?: TriviaPrizeSet;
};

export function TriviaWinner({
  winners,
  shared,
  onPlayAgain,
  copy = TRIVIA_COPY_ES,
  prizeSet = "argentina",
}: Props) {
  const [downloading, setDownloading] = useState(false);
  const [reward] = useState(() => pickRandomTriviaPrize(prizeSet));

  const handleDownload = async (player: TriviaPlayer) => {
    setDownloading(true);
    try {
      await downloadTriviaCertificate(player, reward, copy.certificate);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg space-y-6 rounded-3xl border-2 border-sun/50 bg-surface-elevated p-6 text-center shadow-[var(--shadow-elevated)]">
      <p className="text-5xl leading-none" aria-hidden>
        🏆
      </p>
      <h2 className="font-display text-3xl font-bold text-heading">
        {shared && winners.length > 1 ? copy.tie : copy.winner}
      </h2>
      <ul className="space-y-2">
        {winners.map((w) => (
          <li key={w.id} className="text-xl font-extrabold text-heading">
            {w.name} — {copy.points(w.score)}
          </li>
        ))}
      </ul>
      <p className="text-sm font-medium text-foreground-muted">
        {copy.prize(reward.label)}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath(reward.imagePath)}
        alt={reward.speciesName}
        className="mx-auto h-40 w-auto object-contain"
        style={prizeSet === "argentina" ? { imageRendering: "pixelated" } : undefined}
      />
      <div className="flex flex-col gap-3">
        {winners.map((w) => (
          <button
            key={w.id}
            type="button"
            disabled={downloading}
            onClick={() => void handleDownload(w)}
            className="min-h-12 rounded-2xl bg-water px-4 text-sm font-extrabold text-white shadow-[var(--shadow-card)] hover:brightness-110 disabled:opacity-60"
          >
            {copy.download(w.name)}
          </button>
        ))}
        <button
          type="button"
          onClick={onPlayAgain}
          className="min-h-12 rounded-2xl border-2 border-heading/20 bg-background-warm text-sm font-extrabold text-heading"
        >
          {copy.playAgain}
        </button>
      </div>
    </div>
  );
}
