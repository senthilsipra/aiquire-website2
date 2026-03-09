"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

export interface ServiceCardProps {
  /**
   * Name of the Lucide icon to display, e.g. "BrainCircuit", "BarChart3".
   * The icon is loaded dynamically so only the icon actually used is bundled
   * per card at runtime.
   */
  icon: string;
  title: string;
  description: string;
  /** href for the "Learn more" link. */
  href: string;
  className?: string;
}

/**
 * Lazily resolves a Lucide icon by name.
 * Returns null while loading and on error so the card degrades gracefully.
 */
function useLucideIcon(name: string) {
  const [IconComponent, setIconComponent] =
    React.useState<React.ComponentType<LucideProps> | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    import("lucide-react")
      .then((mod) => {
        if (cancelled) return;
        const found = (mod as Record<string, unknown>)[name];
        if (typeof found === "function") {
          setIconComponent(
            () => found as React.ComponentType<LucideProps>
          );
        }
      })
      .catch(() => {
        // Silently ignore — card renders without icon
      });

    return () => {
      cancelled = true;
    };
  }, [name]);

  return IconComponent;
}

/**
 * ServiceCard
 *
 * A client component that displays a single service offering.
 * Framer Motion `whileHover` lifts the card and intensifies its shadow;
 * the icon circle shifts from accent to accent-light on hover via CSS
 * transition so no JS re-render is required.
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  href,
  className,
}) => {
  const Icon = useLucideIcon(icon);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col",
        "rounded-2xl border border-border bg-white",
        "p-6 md:p-8",
        "shadow-sm transition-shadow duration-300",
        "hover:shadow-lg",
        className
      )}
    >
      {/* Icon circle */}
      <div
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center",
          "rounded-full",
          "bg-bgBlue text-accent",
          "transition-colors duration-300",
          "group-hover:bg-accent group-hover:text-white"
        )}
        aria-hidden="true"
      >
        {Icon ? (
          <Icon size={22} strokeWidth={1.75} />
        ) : (
          /* Fallback placeholder while icon loads */
          <span className="h-5 w-5 rounded-full bg-accent/20" />
        )}
      </div>

      {/* Title */}
      <h3
        className={cn(
          "mb-2 font-heading text-xl font-bold text-primary",
          "leading-snug tracking-tight"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-textSecondary">
        {description}
      </p>

      {/* Learn more link */}
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1",
          "font-body text-sm font-semibold text-accent",
          "transition-colors duration-200",
          "hover:text-accent-light",
          // Ensure the entire card is not the click target so the link
          // remains the accessible interaction point.
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
        )}
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </motion.div>
  );
};

export { ServiceCard };
