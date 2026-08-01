"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AuroraBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid mask-fade-x [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)] opacity-40" />

      <motion.div
        className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--violet) 55%, transparent) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.55, 0.75, 0.55],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[8%] top-[10%] h-72 w-72 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--violet-soft, #c4b5fd) 45%, transparent) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, 20, 0],
              }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[6%] top-[20%] h-64 w-64 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--violet) 35%, transparent) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -20, 0],
                y: [0, 25, 0],
              }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
