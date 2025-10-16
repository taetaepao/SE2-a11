"use client";

import Link from "next/link";
import Card from "@/components/Card";
import { RatingProvider } from "@/components/RatingContext";
import { useReducer } from "react";

type RatingState = Map<string, number>;
type Action =
  | { type: "set"; venue: string; value: number }
  | { type: "remove"; venue: string };

const venues = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

function reducer(state: RatingState, action: Action): RatingState {
  const next = new Map(state);
  switch (action.type) {
    case "set":
      next.set(action.venue, action.value);
      return next;
    case "remove":
      next.delete(action.venue);
      return next;
    default:
      return state;
  }
}

export default function CardPanel({ className = "" }: { className?: string }) {
  const [ratings, dispatch] = useReducer(
    reducer,
    new Map<string, number>(venues.map((v) => [v.venueName, 0]))
  );

  const updateRating = (venueName: string, value: number) => {
    dispatch({ type: "set", venue: venueName, value });
  };

  const ratedCount = [...ratings.values()].filter((v) => v > 0).length;

  return (
  <RatingProvider updateRating={updateRating}>
    <div style={{ padding: "2rem" }}>
      <div className={`flex justify-center gap-10 flex-wrap p-12 ${className}`}>
        {venues.map(v => (
          <Card
            key={v.vid}
            venueName={v.venueName}
            imgSrc={v.imgSrc}
            href={`/venue/${v.vid}`}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-8 text-center text-black">
        <h2 className="text-xl font-semibold mb-3">
          Venue List with Ratings: {ratedCount}
        </h2>
        <ul className="divide-y rounded-lg border">
          {[...ratings.entries()].map(([venue, value]) => (
            <li
              key={venue}
              data-testid={venue}
              className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-neutral-50"
              onClick={() => dispatch({ type: "remove", venue })}
              title="Click to remove from rating map"
            >
              <span className="font-medium">{venue}</span>
              <span className="text-gray-600">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </RatingProvider>
);
}
