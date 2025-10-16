"use client";

import React, { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.remove("shadow-lg", "bg-white");
      event.currentTarget.classList.add("shadow-2xl", "bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-2xl", "bg-neutral-200");
      event.currentTarget.classList.add("shadow-lg", "bg-white");
    }
  }

  return (
    <div
      className="bg-white shadow-lg rounded-lg transition-all duration-300"
      onMouseOver={onCardMouseAction}
      onMouseOut={onCardMouseAction}
    >
      {children}
    </div>
  );
}
