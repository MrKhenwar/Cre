"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, {
    stiffness: 120,
    damping: 22,
    mass: 0.6,
  });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const format = (latest: number) =>
      `${prefix}${Math.round(latest).toLocaleString("en-US")}${suffix}`;

    if (shouldReduceMotion) {
      if (ref.current) ref.current.textContent = format(value);
      return;
    }

    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
    return unsubscribe;
  }, [spring, prefix, suffix, shouldReduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
