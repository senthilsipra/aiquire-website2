"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  /**
   * Delay in milliseconds before the animation begins after the element
   * enters the viewport. Defaults to 0.
   */
  delay?: number;
  className?: string;
}

/**
 * RevealOnScroll
 *
 * A client wrapper component that fades-up its children when they scroll
 * into the viewport. The animation fires only once (on first entry).
 *
 * Animation spec:
 * - Initial state:  opacity 0, translateY 20px
 * - Final state:    opacity 1, translateY 0
 * - Duration:       600 ms
 * - Easing:         easeOut
 * - Trigger:        Intersection Observer via Framer Motion `useInView`
 * - Repeat:         never (once: true)
 */
const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  className,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  // Fires once when ≥10% of the element is visible.
  // The negative bottom margin means the element must scroll a little
  // further into the viewport before triggering, which feels more natural.
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -60px 0px",
  });

  const delaySeconds = delay / 1000;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delaySeconds,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export { RevealOnScroll };
