"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Hero Background ─────────────────────────────────────────────────────────

function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0F2B46]" />
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(41,128,185,0.15) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(52,152,219,0.12) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

function FloatingDots() {
  const dots: { top: string; left?: string; right?: string; size: number; delay: number }[] = [
    { top: "15%", left: "8%", size: 6, delay: 0 },
    { top: "72%", left: "5%", size: 4, delay: 1.5 },
    { top: "30%", right: "6%", size: 5, delay: 0.8 },
    { top: "85%", left: "20%", size: 4, delay: 1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {dots.map((dot, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/30"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Hero Component ──────────────────────────────────────────────────────────

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-primary min-h-[60vh] flex flex-col justify-center">
      <MeshGradient />
      <FloatingDots />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Overline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/25 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              Case Studies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "font-heading font-bold !text-white text-balance",
              "text-display-md md:text-display-lg lg:text-7xl",
              "leading-[1.1] tracking-tight mb-6"
            )}
          >
            Real Results Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-blue-400">
              Domains and Technologies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base leading-relaxed !text-white/80 md:text-lg max-w-2xl mx-auto mb-12"
          >
            Discover how Aiquire drives measurable success with tailored solutions across industries and technologies. See the impact of our AI-powered innovations.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
