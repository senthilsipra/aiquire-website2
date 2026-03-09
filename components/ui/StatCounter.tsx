"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatCounterProps {
  /** The target number to count up to. Supports decimals, e.g. 3.2. */
  value: number;
  /**
   * A string appended directly after the animated number.
   * Examples: "+", "x", "%", "k"
   */
  suffix?: string;
  /** Descriptive label rendered beneath the number. */
  label: string;
  className?: string;
}

/**
 * easeOut interpolation: starts fast, decelerates to end.
 * t is a normalised time value in [0, 1].
 */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Determines the number of decimal places in a number.
 * Used to format the animated counter with matching precision.
 */
function decimalPlaces(n: number): number {
  const str = String(n);
  const dot = str.indexOf(".");
  return dot === -1 ? 0 : str.length - dot - 1;
}

/**
 * StatCounter
 *
 * Displays an animated count-up number that triggers once when the
 * element scrolls into the viewport. The animation runs for 1.5 s with
 * an easeOut curve and correctly handles decimal target values.
 */
const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = "",
  label,
  className,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  // `once: true` ensures the animation fires only the first time the
  // element enters the viewport, not on subsequent scroll passes.
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const [displayValue, setDisplayValue] = React.useState<number>(0);
  const animationRef = React.useRef<number | null>(null);
  const places = decimalPlaces(value);

  React.useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // ms
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const current = easedProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        // Snap to exact target value to avoid floating-point drift
        setDisplayValue(value);
      }
    }

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, value]);

  const formattedValue =
    places > 0 ? displayValue.toFixed(places) : Math.round(displayValue).toString();

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      {/* Animated number + suffix */}
      <p
        className={cn(
          "font-heading font-bold text-primary",
          "text-5xl md:text-6xl lg:text-7xl",
          "leading-none tracking-tight",
          "tabular-nums"
        )}
        aria-label={`${value}${suffix} ${label}`}
        aria-live="polite"
      >
        {formattedValue}
        {suffix && (
          <span className="text-accent">{suffix}</span>
        )}
      </p>

      {/* Label */}
      <p
        className={cn(
          "mt-2 font-body text-sm font-medium uppercase tracking-widest",
          "text-textSecondary"
        )}
        aria-hidden="true"
      >
        {label}
      </p>
    </div>
  );
};

export { StatCounter };
