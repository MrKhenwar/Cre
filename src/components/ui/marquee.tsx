"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  durationSeconds?: number;
};

export function Marquee({
  children,
  className,
  reverse = false,
  durationSeconds = 32,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden mask-fade-x",
        className,
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center justify-around gap-16 pr-16",
            "animate-marquee group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]",
          )}
          style={{
            animationDuration: `${durationSeconds}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
