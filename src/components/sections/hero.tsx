"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

const engines = ["Google", "ChatGPT", "Perplexity", "Gemini"];

const AUDIT_EMAIL = "hello@crevix.agency";
const AUDIT_SUBJECT = "Audit Request";
const AUDIT_BODY = `Hi Crevix team,

I'd like to request a GEO Audit for my business.

Business name:
Website:
Biggest challenge right now:

Thanks!`;

const AUDIT_MAILTO = `mailto:${AUDIT_EMAIL}?subject=${encodeURIComponent(AUDIT_SUBJECT)}&body=${encodeURIComponent(AUDIT_BODY)}`;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20"
    >
      <AuroraBackground />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.span
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-soft"
        >
          For every business, in every industry
        </motion.span>

        <motion.h1
          {...fadeUp(0.08)}
          className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-[3.75rem]"
        >
          Plumber. Dentist. Law firm. Boutique. Realtor.
          <br />
          <span className="text-gradient-violet">
            ChatGPT already picked one. Make it you.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          Nobody scrolls ten blue links anymore. They ask AI once, and buy
          from whoever it names. Crevix builds the tracking, the schema, and
          the landing pages that put your name in that answer — live in your
          dashboard, not a PDF next quarter.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            nativeButton={false}
            className="group h-12 bg-violet px-7 text-base text-primary-foreground shadow-[0_0_40px_-12px_var(--violet)] hover:bg-violet/90"
            render={
              <a href="#cta">
                Book a call
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            }
          />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="h-12 border-white/15 bg-white/[0.03] px-7 text-base hover:bg-white/[0.06]"
            render={
              <a href={AUDIT_MAILTO}>
                <FileSearch className="mr-1 h-4 w-4" />
                Request an audit
              </a>
            }
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.32)}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
            Tracking your visibility across
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {engines.map((engine) => (
              <span
                key={engine}
                className="font-mono font-medium text-foreground/80"
              >
                {engine}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
