"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  slug: string;
  title: string;
}

interface IndustryTabsProps {
  industries: TabItem[];
}

/**
 * IndustryTabs
 *
 * A sticky, horizontally scrollable tab bar that lets visitors jump to any
 * industry section on the page. The active tab is determined by which section
 * is currently in the viewport via IntersectionObserver. Each tab click
 * smoothly scrolls the matched anchor into view, accounting for the sticky
 * header height.
 */
export default function IndustryTabs({ industries }: IndustryTabsProps) {
  const [activeSlug, setActiveSlug] = useState<string>(industries[0]?.slug ?? "");
  const tabListRef = useRef<HTMLDivElement>(null);

  // ── IntersectionObserver: track which section is in view ──────────────────
  useEffect(() => {
    const sections = industries
      .map(({ slug }) => document.getElementById(slug))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [industries]);

  // ── Scroll active tab button into view inside the tab bar ─────────────────
  useEffect(() => {
    if (!tabListRef.current) return;
    const activeBtn = tabListRef.current.querySelector<HTMLButtonElement>(
      `[data-slug="${activeSlug}"]`
    );
    if (!activeBtn) return;
    activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeSlug]);

  // ── Smooth scroll to section ───────────────────────────────────────────────
  function handleTabClick(slug: string) {
    const target = document.getElementById(slug);
    if (!target) return;

    // Account for sticky tabs height (~56px) + sticky nav height (~72px)
    const stickyOffset = 56 + 72;
    const top =
      target.getBoundingClientRect().top + window.scrollY - stickyOffset;

    window.scrollTo({ top, behavior: "smooth" });
    setActiveSlug(slug);
  }

  return (
    <div
      className={cn(
        "sticky top-[72px] z-30",
        "w-full bg-white/95 backdrop-blur-md",
        "border-b border-border",
        "shadow-sm"
      )}
      role="navigation"
      aria-label="Jump to industry section"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Industries"
          className={cn(
            "flex items-center gap-0 overflow-x-auto",
            "scrollbar-none",
            // Hide scrollbar across browsers
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          )}
        >
          {industries.map(({ slug, title }) => {
            const isActive = activeSlug === slug;
            return (
              <button
                key={slug}
                role="tab"
                data-slug={slug}
                aria-selected={isActive}
                onClick={() => handleTabClick(slug)}
                className={cn(
                  "relative shrink-0 px-5 py-4",
                  "font-body text-sm font-medium whitespace-nowrap",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
                  isActive
                    ? "text-accent"
                    : "text-textSecondary hover:text-textPrimary"
                )}
              >
                {title}

                {/* Active underline indicator */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 rounded-t-sm",
                    "transition-all duration-250",
                    isActive ? "bg-accent opacity-100" : "opacity-0"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
