"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const splits = [
  { label: "Typed into Google, clicked a result", value: 54 },
  { label: "Asked an AI, booked whoever it named", value: 46 },
];

export function ProblemReframe() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              The problem
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Google is no longer the whole game.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-balance text-lg text-muted-foreground">
              A customer looking for a plumber, a lawyer, or a boutique
              doesn&apos;t type &ldquo;10 best near me&rdquo; anymore. They
              ask ChatGPT, Perplexity, or Google&apos;s AI Overview — and
              call, book, or buy from whichever business the answer names
              first. If you&apos;re not cited, you don&apos;t drop a
              ranking. You disappear completely, and nobody hands you a
              report on searches you never even showed up in. Most agencies
              are still selling keyword rankings and monthly PDFs for a
              search behavior that&apos;s already moved on.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-card/60 p-8">
            <p className="mb-6 text-sm text-muted-foreground">
              How your next customer actually finds you
            </p>
            <div className="flex flex-col gap-6">
              {splits.map((split) => (
                <div key={split.label}>
                  <div className="mb-2 flex items-baseline justify-between text-sm">
                    <span className="text-foreground/80">{split.label}</span>
                    <span className="font-mono text-muted-foreground">
                      {split.value}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet/60 to-violet"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${split.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm text-muted-foreground">
              Source: Crevix analysis of client search-referral data, 2026.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
