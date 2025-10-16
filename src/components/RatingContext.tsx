"use client";

import { createContext, useContext } from "react";

type RatingUpdater = (venueName: string, value: number) => void;

const RatingContext = createContext<{ updateRating: RatingUpdater } | null>(null);

export function useRatingUpdater() {
  const ctx = useContext(RatingContext);
  if (!ctx) throw new Error("useRatingUpdater must be used within RatingProvider");
  return ctx.updateRating;
}

export function RatingProvider({
  children,
  updateRating,
}: {
  children: React.ReactNode;
  updateRating: RatingUpdater;
}) {
  return <RatingContext.Provider value={{ updateRating }}>{children}</RatingContext.Provider>;
}
