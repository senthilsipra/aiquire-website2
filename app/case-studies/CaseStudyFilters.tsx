"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CaseStudyFiltersProps {
  caseStudies: CaseStudy[];
  industries: string[];
}

// ─── Filter pill component ────────────────────────────────────────────────────

function FilterPill({
  label,
  isActive,
  count,
  onClick,
}: {
  label: string;
  isActive: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2",
        "font-body text-sm font-medium",
        "border transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        isActive
          ? "border-accent bg-accent text-white shadow-sm"
          : "border-border bg-white text-textSecondary hover:border-accent/50 hover:text-accent hover:bg-bgBlue"
      )}
    >
      {label}
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full text-[10px] font-semibold",
          "h-4 min-w-[1rem] px-1",
          isActive
            ? "bg-white/25 text-white"
            : "bg-bgLight text-textSecondary"
        )}
        aria-label={`${count} case studies`}
      >
        {count}
      </span>
    </button>
  );
}

// ─── Card component (defined here to avoid re-importing RevealOnScroll
//     from the server page — this is the client-side card grid) ──────────────

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col h-full",
        "rounded-2xl border border-border bg-white",
        "shadow-sm hover:shadow-lg transition-shadow duration-300",
        "overflow-hidden"
      )}
      style={{ borderLeftColor: study.accentColor, borderLeftWidth: "4px" }}
      aria-labelledby={`filter-card-title-${study.slug}`}
    >
      <div className="flex flex-col h-full p-6 md:p-8">
        {/* Industry badge */}
        <div className="mb-5">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest border"
            style={{
              color: study.accentColor,
              borderColor: study.accentColor,
              backgroundColor: `${study.accentColor}14`,
            }}
          >
            {study.industry}
          </span>
        </div>

        {/* Title */}
        <h3
          id={`filter-card-title-${study.slug}`}
          className="mb-5 font-heading font-bold text-primary text-xl md:text-2xl leading-snug tracking-tight"
        >
          {study.title}
        </h3>

        {/* Challenge */}
        <div className="mb-4">
          <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-textSecondary">
            The Challenge
          </p>
          <p className="font-body text-sm leading-relaxed text-textSecondary">
            {study.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-6">
          <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-textSecondary">
            Our Solution
          </p>
          <p className="font-body text-sm leading-relaxed text-textSecondary">
            {study.solution}
          </p>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="mb-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-textSecondary">
            Results
          </p>
          <ul className="space-y-2" aria-label="Project results">
            {study.results.map((result) => (
              <li
                key={result}
                className="flex items-start gap-2.5 font-body text-sm text-textPrimary"
              >
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success"
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path
                      d="M2 5.5L4 7.5L8 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Ongoing Visibility */}
        {study.ongoingVisibility && (
          <div className="mb-4">
            <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-textSecondary">
              Ongoing Visibility
            </p>
            <p className="font-body text-sm leading-relaxed text-textPrimary">
              {study.ongoingVisibility}
            </p>
          </div>
        )}

        {/* Tech tags */}
        <div className="mb-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {study.techTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md px-2.5 py-1 border border-accent/30 bg-bgBlue font-mono text-[10px] font-medium text-accent tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA — pushed to bottom */}
        <div className="mt-auto pt-4 border-t border-border">
          <Link
            href={`/case-studies/${study.slug}`}
            className="group/link inline-flex items-center gap-1.5 font-body text-sm font-semibold transition-all duration-200"
            style={{ color: study.accentColor }}
            aria-label={`Read full case study: ${study.title}`}
          >
            Read Full Case Study
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/link:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ industry }: { industry: string }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-bgBlue">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z"
            stroke="#2980B9"
            strokeWidth="1.5"
          />
          <path
            d="M14 10v4M14 18h.01"
            stroke="#2980B9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="font-heading font-bold text-primary text-lg mb-2">
        No case studies for {industry} yet
      </p>
      <p className="font-body text-sm text-textSecondary max-w-xs">
        We&apos;re actively working in this space. Check back soon or{" "}
        <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-dark">
          get in touch
        </Link>{" "}
        to discuss your specific needs.
      </p>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function CaseStudyFilters({
  caseStudies,
  industries,
}: CaseStudyFiltersProps) {
  const [selectedIndustry, setSelectedIndustry] = React.useState<string>("All");

  const filteredStudies = React.useMemo(
    () =>
      selectedIndustry === "All"
        ? caseStudies
        : caseStudies.filter((cs) => cs.industry === selectedIndustry),
    [caseStudies, selectedIndustry]
  );

  const countForIndustry = React.useCallback(
    (industry: string) =>
      industry === "All"
        ? caseStudies.length
        : caseStudies.filter((cs) => cs.industry === industry).length,
    [caseStudies]
  );

  return (
    <>
      {/* Filter bar */}
      <div
        className="mt-10 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter case studies by industry"
      >
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-textSecondary mr-2">
          Filter by:
        </span>
        {industries.map((industry) => (
          <FilterPill
            key={industry}
            label={industry}
            isActive={selectedIndustry === industry}
            count={countForIndustry(industry)}
            onClick={() => setSelectedIndustry(industry)}
          />
        ))}
      </div>

      {/* Result count */}
      <div className="mt-6 mb-8" aria-live="polite" aria-atomic="true">
        <p className="font-body text-sm text-textSecondary">
          Showing{" "}
          <span className="font-semibold text-textPrimary">
            {filteredStudies.length}
          </span>{" "}
          {filteredStudies.length === 1 ? "case study" : "case studies"}
          {selectedIndustry !== "All" && (
            <span>
              {" "}
              in{" "}
              <span className="font-semibold text-textPrimary">
                {selectedIndustry}
              </span>
            </span>
          )}
        </p>
      </div>

      {/* Cards grid with animated presence */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        aria-label="Case studies"
      >
        <AnimatePresence mode="popLayout">
          {filteredStudies.length === 0 ? (
            <EmptyState industry={selectedIndustry} />
          ) : (
            filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
