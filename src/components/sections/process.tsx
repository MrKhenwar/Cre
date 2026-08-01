"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We run your business through the GEO Visibility Tracker: exactly where you're cited, and where you're invisible, across every AI engine that matters.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We inject the schema and deploy the landing pages. Days, not weeks.",
  },
  {
    number: "03",
    title: "Track",
    description:
      "You watch it work — live citations, live conversions — in your own dashboard.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="How it works"
        title="A system, not a scramble."
        description="Three steps, repeated every quarter — so visibility compounds instead of resetting."
        className="mb-20"
      />

      <div className="relative">
        <div className="absolute inset-x-[14%] top-6 hidden h-px bg-white/10 md:block" />
        <motion.div
          className="absolute inset-x-[14%] top-6 hidden h-px origin-left bg-gradient-to-r from-violet/20 via-violet to-violet/20 md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <RevealGroup
          className="mx-auto grid max-w-3xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-6"
          stagger={0.12}
        >
          {steps.map((step) => (
            <RevealItem
              key={step.number}
              className="relative flex flex-col items-start gap-4 md:items-center md:text-center"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-violet/40 bg-background font-mono text-sm text-violet-soft">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
