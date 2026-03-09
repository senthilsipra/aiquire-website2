"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Animated mesh gradient background ───────────────────────────────────────

const MeshGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base dark navy */}
      <div className="absolute inset-0 bg-[#0F2B46]" />

      {/* Animated mesh blobs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(41,128,185,0.18) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(52,152,219,0.14) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(26,94,138,0.20) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -15, 20, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/5" />
    </div>
  );
};

// ─── Floating accent dots decoration ─────────────────────────────────────────

const FloatingDots: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {[
      { top: "15%", left: "8%", size: 6, delay: 0, duration: 4 },
      { top: "72%", left: "5%", size: 4, delay: 1.5, duration: 5 },
      { top: "30%", right: "6%", size: 5, delay: 0.8, duration: 6 },
      { top: "60%", right: "10%", size: 3, delay: 2.2, duration: 4.5 },
      { top: "85%", left: "20%", size: 4, delay: 1, duration: 5.5 },
      { top: "10%", right: "25%", size: 3, delay: 3, duration: 4 },
    ].map((dot, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full bg-accent/30"
        style={{
          top: dot.top,
          left: (dot as { left?: string }).left,
          right: (dot as { right?: string }).right,
          width: dot.size,
          height: dot.size,
        }}
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: dot.duration,
          repeat: Infinity,
          delay: dot.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// ─── Trust bar companies ──────────────────────────────────────────────────────

const TRUST_COMPANIES = [
  "McKinsey",
  "BCG",
  "Deloitte",
  "Accenture",
  "Google",
  "Meta",
  "Amazon",
];

const TrustBar: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
    className="mt-16 pt-10 border-t border-white/10"
  >
    <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-5 text-center">
      Teams from:
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      {TRUST_COMPANIES.map((company) => (
        <span
          key={company}
          className={cn(
            "inline-flex items-center justify-center",
            "rounded-full px-4 py-1.5",
            "bg-white/[0.07] border border-white/[0.12]",
            "font-heading font-semibold text-sm text-white/60",
            "tracking-tight",
            "transition-colors duration-200",
            "hover:bg-white/[0.12] hover:text-white/80 hover:border-white/20"
          )}
        >
          {company}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─── Main HeroContent component ───────────────────────────────────────────────

const HeroContent: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated background */}
      <MeshGradient />
      <FloatingDots />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">

        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full",
              "bg-accent/15 border border-accent/25",
              "px-4 py-2 mb-8",
              "font-mono text-xs font-medium text-accent-light uppercase tracking-[0.18em]"
            )}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse"
              aria-hidden="true"
            />
            AI Consulting &amp; Engineering
          </span>
        </motion.div>

        {/* H1 headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
          className={cn(
            "font-[family-name:var(--font-cabinet)] font-extrabold text-white",
            "text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]",
            "leading-[1.07] tracking-tight",
            "max-w-5xl text-balance"
          )}
        >
          We put AI exactly where your business wins.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3498DB] to-[#5DADE2]">
            Faster than you expect.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className={cn(
            "mt-8 max-w-3xl font-body text-base sm:text-lg leading-relaxed",
            "text-white/70"
          )}
        >
          Most businesses try AI everywhere and hope something works.
          We know exactly where it belongs in your business and technology,
          and we put it there fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-14 items-center justify-center",
              "rounded-xl px-8",
              "bg-accent border border-accent text-white",
              "font-body font-semibold text-base",
              "transition-all duration-200",
              "hover:bg-accent-light hover:border-accent-light hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2B46]"
            )}
          >
            Book a Free Discovery Call
          </Link>

          {/* Ghost CTA */}
          <Link
            href="/case-studies"
            className={cn(
              "inline-flex h-14 items-center justify-center gap-2",
              "rounded-xl px-8",
              "bg-transparent text-white",
              "border border-white/25",
              "font-body font-semibold text-base",
              "transition-all duration-200",
              "hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2B46]"
            )}
          >
            See Our Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Audit CTA */}
          <Link
            href="/audit"
            className={cn(
              "inline-flex h-14 items-center justify-center gap-2",
              "rounded-xl px-8",
              "bg-transparent text-white",
              "border border-white/25",
              "font-body font-semibold text-base",
              "transition-all duration-200",
              "hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2B46]"
            )}
          >
            Get a Free AI Workflow Audit
          </Link>
        </motion.div>

        {/* Trust bar */}
        <TrustBar />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export { HeroContent };
export default HeroContent;
