import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  /** The testimonial quote text. */
  quote: string;
  /** Full name of the person giving the testimonial. */
  author: string;
  /** Job title of the author. */
  title: string;
  /** Company name of the author. */
  company: string;
  /**
   * Optional URL for the author's avatar image.
   * When omitted a tasteful initial-based fallback is rendered instead.
   */
  photoSrc?: string;
  className?: string;
}

/**
 * Derives up to two initials from a full name string.
 * e.g. "Jane Smith" → "JS", "Alice" → "A"
 */
function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

/**
 * TestimonialCard
 *
 * A server component that renders a single customer testimonial.
 * Features a large decorative opening quote mark rendered purely in CSS,
 * an italicised quote, and an author attribution row with an optional avatar.
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  company,
  photoSrc,
  className,
}) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col",
        "rounded-2xl border border-border bg-white",
        "p-6 md:p-8",
        "shadow-sm",
        className
      )}
    >
      {/* Decorative opening quote mark — purely CSS, no extra DOM weight */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-3 left-6",
          "select-none font-heading text-8xl font-black leading-none",
          "text-accent opacity-20"
        )}
      >
        &ldquo;
      </span>

      {/* Quote body */}
      <blockquote className="relative flex-1">
        <p
          className={cn(
            "font-body text-base italic leading-relaxed text-textPrimary",
            "md:text-lg"
          )}
        >
          {quote}
        </p>
      </blockquote>

      {/* Divider */}
      <hr className="my-5 border-border" aria-hidden="true" />

      {/* Author attribution */}
      <figcaption className="flex items-center gap-3">
        {/* Avatar — real image or initial fallback */}
        {photoSrc ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
            <Image
              src={photoSrc}
              alt={`Photo of ${author}`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center",
              "rounded-full bg-bgBlue",
              "font-heading text-sm font-bold text-accent"
            )}
            aria-hidden="true"
          >
            {initials(author)}
          </div>
        )}

        {/* Name, title, company */}
        <div className="min-w-0">
          <p className="font-body text-sm font-semibold text-textPrimary truncate">
            {author}
          </p>
          <p className="font-body text-xs text-textSecondary truncate">
            {title}
            {company && (
              <>
                <span className="mx-1 text-border" aria-hidden="true">
                  ·
                </span>
                {company}
              </>
            )}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

export { TestimonialCard };
