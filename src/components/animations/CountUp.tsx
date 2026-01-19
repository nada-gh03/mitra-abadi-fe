"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function CountUp({
  to,
  from = 0,
  delay = 0,
  duration = 2,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(
              Math.round(latest)
            );
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, to, from, delay, duration, motionValue]);

  return (
    <span className={className} ref={ref}>
      {from}
    </span>
  );
}
