"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Brain,
  Cpu,
  Laptop,
  Cloud,
  GraduationCap,
  Package,
  Lightbulb,
  BrainCircuit,
  Sparkles,
  Code2,
  Settings2
} from "lucide-react";
import type { LucideProps } from "lucide-react";

export interface ServiceCardProps {
  /**
   * Name of the Lucide icon to display, e.g. "Brain", "Briefcase".
   */
  icon: string;
  title: string;
  description: string;
  /** href for the "Learn more" link. */
  href: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Briefcase,
  Brain,
  Cpu,
  Laptop,
  Cloud,
  GraduationCap,
  Package,
  Lightbulb,
  BrainCircuit,
  Sparkles,
  Code2,
  Settings2
};

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
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col items-center text-center",
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
