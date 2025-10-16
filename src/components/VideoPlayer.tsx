"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true; 
    if (isPlaying) {
      const maybePromise = v.play();
      if (maybePromise && typeof (maybePromise as any).catch === "function") {
        (maybePromise as Promise<void>).catch(() => {});
      }
    } else {
      v.pause();
    }
  }, [isPlaying, vdoSrc]);

  return (
    <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow mx-auto">
      <video
        ref={videoRef}
        src={vdoSrc}
        className="w-full h-auto"
        playsInline
      />
    </div>
  );
}
