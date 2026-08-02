"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MIN_DISPLAY_MS = 650;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, MIN_DISPLAY_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: shouldReduceMotion ? 1 : 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <span className="flex h-14 w-14 items-center justify-center drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              <Image
                src="/logo-icon.png"
                alt="Crevis"
                width={56}
                height={34}
                priority
                className="h-9 w-auto"
              />
            </span>
            <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
              {!shouldReduceMotion && (
                <motion.div
                  className="h-full w-full bg-violet"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
