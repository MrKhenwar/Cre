import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-soft">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-balance text-base text-muted-foreground sm:text-lg",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
