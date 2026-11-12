"use client";

import Link from "next/link";
import { useCallback, useEffect, useReducer, useState } from "react";

import {
  INITIAL_TRIVIA_STATE,
  advanceAfterReveal,
  beginTurn,
  getActivePlayer,
  getTurnLabel,
  resolveWinners,
  startGame,
  submitAnswer,
} from "@/lib/trivia/game-state";
import type { TriviaPrizeSet } from "@/data/trivia/reward-manifest";
import { useLocale } from "@/lib/i18n/locale";
import { TRIVIA_COPY } from "@/lib/trivia/copy";
import type { TriviaGameState, TriviaQuestion, TriviaPlayer, TriviaRoundsPerPlayer } from "@/lib/trivia/types";

import { TriviaBoard } from "./TriviaBoard";
import { TriviaLobby } from "./TriviaLobby";
import { TriviaScoreboard } from "./TriviaScoreboard";
import { TriviaWinner } from "./TriviaWinner";

type Props = {
  questions: TriviaQuestion[];
  prizeSet?: TriviaPrizeSet;
  backHref?: string;
};

type Action =
  | { type: "START"; players: TriviaPlayer[]; rounds: TriviaRoundsPerPlayer }
  | { type: "BEGIN_TURN" }
  | { type: "ANSWER"; choiceIndex: number }
  | { type: "ADVANCE" }
  | { type: "RESET" };

function reducer(
  state: TriviaGameState,
  action: Action,
  questions: TriviaQuestion[],
): TriviaGameState {
  switch (action.type) {
    case "START":
      return startGame(INITIAL_TRIVIA_STATE, action.players, action.rounds, questions);
    case "BEGIN_TURN":
      return beginTurn(state);
    case "ANSWER":
      return submitAnswer(state, action.choiceIndex);
    case "ADVANCE":
      return advanceAfterReveal(state);
    case "RESET":
      return { ...INITIAL_TRIVIA_STATE };
    default:
      return state;
  }
}

export function TriviaGame({ questions, prizeSet = "argentina", backHref = "/mapa/argentina" }: Props) {
  const { locale } = useLocale();
  const copy = TRIVIA_COPY[locale];
  const [state, dispatch] = useReducer(
    (s: TriviaGameState, a: Action) => reducer(s, a, questions),
    INITIAL_TRIVIA_STATE,
  );
  const [, tick] = useState(0);

  useEffect(() => {
    if (state.phase !== "playing") return;
    const id = window.setInterval(() => tick((n) => n + 1), 200);
    return () => window.clearInterval(id);
  }, [state.phase]);

  useEffect(() => {
    if (state.phase === "handoff") {
      const t = window.setTimeout(() => dispatch({ type: "BEGIN_TURN" }), 1400);
      return () => window.clearTimeout(t);
    }
    if (state.phase === "reveal") {
      const t = window.setTimeout(() => dispatch({ type: "ADVANCE" }), 2200);
      return () => window.clearTimeout(t);
    }
  }, [state.phase, state.currentTurnIndex]);

  const handleStart = useCallback((players: TriviaPlayer[], rounds: TriviaRoundsPerPlayer) => {
    dispatch({ type: "START", players, rounds });
  }, []);

  const active = getActivePlayer(state);
  const winners = resolveWinners(state);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <header className="text-center">
        <h1 className="font-display text-3xl font-bold text-heading sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-2 text-base font-medium text-foreground-muted">
          {copy.subtitle}
        </p>
      </header>

      {state.phase === "lobby" ? <TriviaLobby onStart={handleStart} copy={copy} /> : null}

      {state.phase === "handoff" && active ? (
        <div
          className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border-2 border-sun/40 bg-sun/15 p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-5xl" aria-hidden>
            👋
          </p>
          <p className="mt-4 font-display text-2xl font-bold text-heading">
            {copy.handoff(active.name)}
          </p>
          <p className="mt-2 text-sm font-medium text-foreground-muted">
            {getTurnLabel(state, copy.turn)}
          </p>
        </div>
      ) : null}

      {state.phase === "playing" && active && state.currentQuestion && state.questionShownAt ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(12rem,16rem)]">
          <TriviaBoard
            playerName={active.name}
            turnLabel={getTurnLabel(state, copy.turn)}
            question={state.currentQuestion}
            questionShownAt={state.questionShownAt}
            onAnswer={(choiceIndex) => dispatch({ type: "ANSWER", choiceIndex })}
            copy={copy}
          />
          <TriviaScoreboard players={state.players} activePlayerId={active.id} copy={copy} />
        </div>
      ) : null}

      {state.phase === "reveal" && state.lastAnswer && state.currentQuestion ? (
        <div
          className="rounded-3xl border-2 border-heading/15 bg-surface-elevated p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-5xl" aria-hidden>
            {state.lastAnswer.correct ? "✅" : "💡"}
          </p>
          <p className="mt-4 text-xl font-extrabold text-heading">
            {state.lastAnswer.correct
              ? copy.correct((state.lastAnswer.timeMs / 1000).toFixed(1))
              : copy.wrong}
          </p>
          {!state.lastAnswer.correct ? (
            <p className="mt-2 text-lg font-bold text-water">
              {state.currentQuestion.choices[state.currentQuestion.correctIndex]}
            </p>
          ) : null}
          {state.currentQuestion.explanation ? (
            <p className="mt-3 text-sm font-medium text-foreground-muted">
              {state.currentQuestion.explanation}
            </p>
          ) : null}
        </div>
      ) : null}

      {state.phase === "finished" && winners[0] ? (
        <TriviaWinner
          winners={winners[0].players}
          shared={winners[0].shared}
          onPlayAgain={() => dispatch({ type: "RESET" })}
          copy={copy}
          prizeSet={prizeSet}
        />
      ) : null}

      {state.phase === "reveal" || state.phase === "handoff" ? (
        <TriviaScoreboard players={state.players} activePlayerId={active?.id} copy={copy} />
      ) : null}

      <p className="text-center">
        <Link
          href={backHref}
          className="text-sm font-bold text-water underline-offset-2 hover:underline"
        >
          {copy.back}
        </Link>
      </p>
    </div>
  );
}
