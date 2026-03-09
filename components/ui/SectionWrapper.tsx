import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionBg = "white" | "light" | "blue" | "dark";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /**
   * bg controls the section's background colour:
   * - "white"  → pure white
   * - "light"  → #F8F9FA (bgLight)
   * - "blue"   → #EBF5FB (bgBlue)
   * - "dark"   → #0F2B46 (primary navy) with white text
   */
  bg?: SectionBg;
  /** HTML id attribute for anchor navigation */
  id?: string;
}

const bgClasses: Record<SectionBg, string> = {
  white: "bg-white",
  light: "bg-bgLight",
  blue:  "bg-bgBlue",
  dark:  "bg-primary text-white",
};

/**
 * SectionWrapper
 *
 * A server component that wraps page sections with consistent vertical
 * padding, a centred max-width container, and a background colour variant.
 * It renders a full-bleed <section> with an inner container div so the
 * background spans edge-to-edge while content stays within 1280 px.
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  bg = "white",
  id,
}) => {
  return (
    <section
      id={id}
      className={cn(bgClasses[bg], className)}
    >
      {/* Inner container: centred, max-width capped, consistent horizontal padding */}
      <div
        className={cn(
          "mx-auto max-w-[1280px]",
          "px-4 sm:px-6 lg:px-8",
          "py-20 md:py-28"
        )}
      >
        {children}
      </div>
    </section>
  );
};

export { SectionWrapper };
