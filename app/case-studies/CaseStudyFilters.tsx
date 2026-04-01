"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Filter } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CaseStudyFiltersProps {
  caseStudies: CaseStudy[];
}

// ─── Dropdown Component ───────────────────────────────────────────────────────

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 flex-1 min-w-[200px]" ref={containerRef}>
      <label className="text-sm font-semibold text-textPrimary px-1">
        {label}
      </label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between rounded-xl border border-border bg-white p-4 text-sm transition-all text-textPrimary h-[54px]",
            isOpen ? "border-accent ring-1 ring-accent" : "hover:border-accent/50"
          )}
        >
          <span className="truncate">{value}</span>
          <ChevronDown
            className={cn("h-4 w-4 text-textSecondary transition-transform", isOpen && "rotate-180")}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-border bg-white shadow-xl"
            >
              <div className="max-h-60 overflow-y-auto py-1">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex w-full px-4 py-3 text-left text-sm transition-colors",
                      value === opt
                        ? "bg-textSecondary text-white"
                        : "text-textPrimary hover:bg-bgBlue"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Card component ───────────────────────────────────────────────────────────

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col h-full bg-gradient-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
      )}
      style={{ borderTop: `4px solid ${study.accentColor}` }}
    >
      <div className="flex flex-col h-full">
        {/* Main Content Area */}
        <div className="flex-grow">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-2.5 py-0.5 text-[9px] font-bold text-primary uppercase tracking-[0.08em]">
              {study.industry}
            </span>
            <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[9px] font-bold text-accent uppercase tracking-[0.08em]">
              {study.category}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
            {study.title}
          </h3>

          <p className="text-textSecondary text-sm mb-6 line-clamp-3 font-body leading-relaxed opacity-80">
            {study.challenge}
          </p>
        </div>

        {/* Bottom Actions Area */}
        <div className="mt-6 flex flex-col">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50 mb-6">
            {study.techTags.slice(0, 3).map((tag, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded-md bg-bgLight border border-border text-[9px] font-semibold text-textSecondary/60 uppercase"
              >
                {tag}
              </span>
            ))}
            {study.techTags.length > 3 && (
              <span className="text-[9px] font-semibold text-textSecondary/40 self-center">
                +{study.techTags.length - 3}
              </span>
            )}
          </div>

          <Link
            href={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-2 font-bold transition-colors text-sm text-primary hover:text-accent w-fit group/btn"
          >
            Read Full Case Study
            <span className="text-lg transition-transform group-hover/btn:translate-x-1 duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function CaseStudyFilters({
  caseStudies,
}: CaseStudyFiltersProps) {
  const [useCase, setUseCase] = React.useState("All Use Cases");
  const [industry, setIndustry] = React.useState("All Industries");
  const [function_, setFunction] = React.useState("All Functions");
  const [tech, setTech] = React.useState("All Technologies");

  const options = React.useMemo(() => ({
    useCases: ["All Use Cases", ...Array.from(new Set(caseStudies.map((s) => s.category)))],
    industries: ["All Industries", ...Array.from(new Set(caseStudies.map((s) => s.industry)))],
    functions: ["All Functions", ...Array.from(new Set(caseStudies.map((s) => s.businessFunction)))],
    tech: ["All Technologies", ...Array.from(new Set(caseStudies.flatMap((s) => s.techTags)))],
  }), [caseStudies]);

  const filteredStudies = caseStudies.filter((cs) => {
    const matchUseCase = useCase === "All Use Cases" || cs.category === useCase;
    const matchIndustry = industry === "All Industries" || cs.industry === industry;
    const matchFunction = function_ === "All Functions" || cs.businessFunction === function_;
    const matchTech = tech === "All Technologies" || cs.techTags.includes(tech);
    return matchUseCase && matchIndustry && matchFunction && matchTech;
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Filter className="h-6 w-6 text-textSecondary" />
        <h2 className="text-3xl font-heading font-bold text-primary">Filter Case Studies</h2>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FilterSelect
          label="Use Case Category"
          value={useCase}
          options={options.useCases}
          onChange={setUseCase}
        />
        <FilterSelect
          label="Industry"
          value={industry}
          options={options.industries}
          onChange={setIndustry}
        />
        <FilterSelect
          label="Business Function"
          value={function_}
          options={options.functions}
          onChange={setFunction}
        />
        <FilterSelect
          label="AI Technology Used"
          value={tech}
          options={options.tech}
          onChange={setTech}
        />
      </div>

      {/* Result count */}
      <div className="pt-4">
        <p className="text-lg font-medium text-textSecondary capitalize">
          {filteredStudies.length === caseStudies.length ? "All case studies" : `${filteredStudies.length} case studies found`}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredStudies.length > 0 ? (
            filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-border">
              <p className="text-xl font-heading font-semibold text-primary mb-2">No matching case studies</p>
              <p className="text-textSecondary">Try adjusting your filters to find what you&apos;re looking for.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
