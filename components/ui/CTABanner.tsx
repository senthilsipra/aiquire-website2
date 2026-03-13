import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CTABannerProps {
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  /** Optional secondary CTA rendered as a ghost / outline button. */
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

/**
 * CTABanner
 *
 * A server component that renders a full-width call-to-action strip.
 *
 * Design:
 * - Dark navy background (#0F2B46) with white text
 * - Centred layout: heading → body → CTA button(s)
 * - Subtle geometric decoration built entirely with CSS — two large
 *   semi-transparent circles positioned in opposite corners create depth
 *   without any image assets.
 * - Primary CTA: accent blue filled button
 * - Optional secondary CTA: white outline button
 */
const CTABanner: React.FC<CTABannerProps> = ({
  heading,
  body,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
}) => {
  return (
    <section
      aria-label="Call to action"
      className={cn(
        "relative w-full overflow-hidden",
        "bg-primary",
        className
      )}
    >
      {/* ── Geometric CSS decoration ────────────────────────────────────── */}
      {/* Top-left circle */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -left-20 -top-20",
          "h-64 w-64 rounded-full",
          "bg-white/5"
        )}
      />
      {/* Bottom-right circle */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-24 -right-24",
          "h-80 w-80 rounded-full",
          "bg-accent/10"
        )}
      />
      {/* Small accent dot — top-right quadrant */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-1/4 top-6",
          "h-4 w-4 rounded-full",
          "bg-accent-light/30"
        )}
      />
      {/* Small primary dot — bottom-left quadrant */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-6 left-1/4",
          "h-3 w-3 rounded-full",
          "bg-white/10"
        )}
      />
      {/* ── /Geometric CSS decoration ────────────────────────────────────── */}

      {/* Content container */}
      <div
        className={cn(
          "relative z-10 mx-auto max-w-[1280px]",
          "px-4 sm:px-6 lg:px-8",
          "py-20 md:py-28",
          "flex flex-col items-center text-center"
        )}
      >
        {/* Heading */}
        <h2
          className={cn(
            "mx-auto max-w-3xl",
            "font-heading font-bold text-white",
            "text-display-sm md:text-display-md",
            "leading-tight tracking-tight"
          )}
        >
          {heading}
        </h2>

        {/* Body copy */}
        <p
          className={cn(
            "mx-auto mt-5 max-w-xl",
            "font-body text-base leading-relaxed text-white/75",
            "md:text-lg"
          )}
        >
          {body}
        </p>

        {/* CTA button group */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA */}
          <Link
            href={ctaHref}
            className={cn(
              "inline-flex h-12 items-center justify-center",
              "rounded-lg px-8",
              "bg-accent text-white",
              "font-body text-base font-semibold",
              "border border-accent",
              "transition-all duration-200",
              "hover:bg-accent-light hover:border-accent-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-accent-light focus-visible:ring-offset-2",
              "focus-visible:ring-offset-primary"
            )}
          >
            {ctaText}
          </Link>

          {/* Optional secondary CTA */}
          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className={cn(
                "inline-flex h-12 items-center justify-center",
                "rounded-lg px-8",
                "bg-transparent text-white",
                "font-body text-base font-semibold",
                "border border-white/40",
                "transition-all duration-200",
                "hover:bg-white/10 hover:border-white/70",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-white focus-visible:ring-offset-2",
                "focus-visible:ring-offset-primary"
              )}
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export { CTABanner };
