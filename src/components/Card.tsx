"use client";

import Image from "next/image";
import { Rating } from "@mui/material";
import Link from "next/link";

interface CardProps {
  venueName: string;
  imgSrc: string;
  href?: string;
  rating?: number; // optional
  onRatingChange?: (value: number) => void; // optional
}

export default function Card({
  venueName,
  imgSrc,
  href,
  rating,
  onRatingChange,
}: CardProps) {
  const cardBody = (
    <div
      className="
        w-72 bg-white rounded-xl shadow-lg overflow-hidden
        flex flex-col hover:shadow-2xl hover:bg-neutral-100 transition-all
      "
    >
      <div className="relative w-full h-48">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {venueName}
        </h3>

        {typeof rating === "number" && onRatingChange && (
          <Rating
            id={`${venueName}-rating`}
            name={`${venueName}-rating`}
            value={rating}
            onChange={(_, val) => onRatingChange(val ?? 0)}
            precision={0.5}
          />
        )}
      </div>
    </div>
  );

  return href ? <Link href={href}>{cardBody}</Link> : cardBody;
}
