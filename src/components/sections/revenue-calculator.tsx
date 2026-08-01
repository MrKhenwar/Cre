"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedNumber } from "@/components/ui/animated-number";

const MIN = 2000;
const MAX = 50000;
const STEP = 500;
const DEFAULT_REVENUE = 12000;
const UPLIFT = 0.65;

function formatCompact(value: number) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

export function RevenueCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(DEFAULT_REVENUE);

  const additionalMonthly = monthlyRevenue * UPLIFT;
  const projectedMonthly = monthlyRevenue + additionalMonthly;
  const additionalAnnual = additionalMonthly * 12;

  const sliderProgress = ((monthlyRevenue - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="See it in your numbers"
        title="What would this be worth to you?"
        description="Drag the slider to your current monthly revenue from search. The projection uses our average client uplift, not a guess."
        className="mb-14"
      />

      <Reveal>
        <div className="glow-border relative rounded-2xl border border-white/10 bg-card/60 p-8 sm:p-10">
          <div className="mb-10">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <label
                htmlFor="revenue-slider"
                className="text-sm font-medium text-foreground/80"
              >
                Your current monthly revenue from search
              </label>
              <span className="font-mono text-2xl font-semibold text-gradient-violet">
                {formatCompact(monthlyRevenue)}
                <span className="text-base text-muted-foreground">/mo</span>
              </span>
            </div>

            <input
              id="revenue-slider"
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-violet [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white/80 [&::-moz-range-thumb]:bg-violet [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/80 [&::-webkit-slider-thumb]:bg-violet [&::-webkit-slider-thumb]:shadow-[0_0_12px_var(--violet)]"
              style={{
                background: `linear-gradient(to right, var(--violet) ${sliderProgress}%, color-mix(in oklch, white 10%, transparent) ${sliderProgress}%)`,
              }}
              aria-valuetext={formatCompact(monthlyRevenue)}
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{formatCompact(MIN)}</span>
              <span>{formatCompact(MAX)}+</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5 text-violet-soft" />
                Additional monthly revenue
              </div>
              <div className="font-mono text-3xl font-semibold tracking-tight">
                <AnimatedNumber
                  value={additionalMonthly}
                  prefix="+$"
                  className="text-gradient-violet"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <TrendingUp className="h-3.5 w-3.5 text-violet-soft" />
                Projected monthly total
              </div>
              <div className="font-mono text-3xl font-semibold tracking-tight">
                <AnimatedNumber value={projectedMonthly} prefix="$" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <CalendarClock className="h-3.5 w-3.5 text-violet-soft" />
                Extra revenue per year
              </div>
              <div className="font-mono text-3xl font-semibold tracking-tight">
                <AnimatedNumber value={additionalAnnual} prefix="+$" />
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Based on a {Math.round(UPLIFT * 100)}% average revenue uplift
            across Crevis clients within 6 months, from combined GEO
            citations and higher-converting landing pages. Estimate only —
            individual results vary.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
