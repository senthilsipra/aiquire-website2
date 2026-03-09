import * as React from "react";
import { cn } from "@/lib/utils";

export type HeadingAlign = "left" | "center";

export interface SectionHeadingProps {
  /**
   * Small uppercase label rendered above the heading.
   * Styled with small-caps, accent blue, and generous letter-spacing.
   */
  overline?: string;
  /** Primary heading text — large, heading font, primary navy. */
  heading: string;
  /** Optional supporting paragraph — body font, secondary colour. */
  subheading?: string;
  /** Horizontal alignment of all text within the component. */
  align?: HeadingAlign;
  className?: string;
}

/**
 * SectionHeading
 *
 * A server component for consistent section titles across the site.
 * Renders an optional overline tag, a prominent H2 heading, and an
 * optional subheading paragraph. All three elements respect the
 * `align` prop so the caller does not need to apply alignment classes.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  overline,
  heading,
  subheading,
  align = "center",
  className,
}) => {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const maxWidthClass =
    align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={cn("w-full", alignClass, className)}>
      {overline && (
        <p
          className={cn(
            "mb-3 inline-block",
            "font-body text-xs font-semibold uppercase tracking-[0.2em]",
            "text-accent",
            // Subtle pill background to lift the label off the page
            "rounded-full bg-bgBlue px-3 py-1"
          )}
          aria-label={`Section label: ${overline}`}
        >
          {overline}
        </p>
      )}

      <h2
        className={cn(
          maxWidthClass,
          "font-heading font-bold text-primary",
          "text-display-sm md:text-display-md",
          "leading-tight tracking-tight",
          overline && "mt-2"
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            maxWidthClass,
            "mt-4 font-body text-base leading-relaxed text-textSecondary",
            "md:text-lg"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
};

export { SectionHeading };
