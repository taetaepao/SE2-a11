"use client";

import { useCallback, useRef, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onContextMenu = useCallback<EventListener>((e: Event) => {
    const root = wrapperRef.current;
    const target = e.target as Node | null;
    if (root && target && root.contains(target)) {
      e.preventDefault();
    }
  }, []);

  useWindowListener("contextmenu", onContextMenu);

  return (
    <div
  ref={wrapperRef}
  className="
    max-w-4xl mx-auto p-8
    bg-gradient-to-r from-white to-gray-50
    rounded-2xl shadow-lg
    flex flex-row items-center justify-between
    gap-8
  "
>
  {/* วิดีโอแสดงด้านซ้าย */}
  <div className="flex-1">
    <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
  </div>

  {/* ข้อความและปุ่ม */}
  <div className="flex-1 flex flex-col items-start gap-4">
    <h2 className="text-2xl font-bold text-gray-900 leading-snug margin-10">
      Book your venue today
    </h2>
    <button
      className="
        px-6 py-3 rounded-lg
        bg-indigo-600 text-white
        hover:bg-indigo-700 transition-colors
        font-medium shadow
      "
      onClick={() => setPlaying((v) => !v)}
      name={playing ? "Pause" : "Play"}
    >
      {playing ? "Pause" : "Play"}
    </button>
  </div>
</div>

  );
}
