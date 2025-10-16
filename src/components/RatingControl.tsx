"use client";

import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useRatingUpdater } from "./RatingContext";

export default function RatingControl({ venueName }: { venueName: string }) {
  const [value, setValue] = useState<number | null>(0);
  const updateRating = useRatingUpdater();

  const id = `${venueName} Rating`;

  return (
    <div className="flex justify-center py-3">
      <Rating
        id={id}
        name={id}
        data-testid={id}
        value={value}
        onChange={(_, newValue) => {
          const v = newValue ?? 0;
          setValue(v);
          updateRating(venueName, v);
        }}
      />
    </div>
  );
}
