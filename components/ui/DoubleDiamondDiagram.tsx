"use client";

import React, { useState, useId } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface DoubleDiamondProps {
  variant?: "full" | "compact";
  className?: string;
}

type PhaseId = "discover" | "define" | "develop" | "deliver";

interface Phase {
  id: PhaseId;
  label: string;
  diamond: 1 | 2;
  side: "left" | "right";
  mode: "Diverge" | "Converge";
  description: string;
  activities: string[];
  color: string;
  arrowDirection: "right" | "left";
}

// ─── Phase Data ─────────────────────────────────────────────────────────────

const PHASES: Phase[] = [
  {
    id: "discover",
    diamond: 1,
    side: "left",
    mode: "Diverge",
    label: "Discover",
    description:
      "We go wide. Stakeholder interviews, data audits, process mapping, competitive analysis, and customer journey research.",
    activities: [
      "Stakeholder interviews",
      "Data audits",
      "Process mapping",
      "Journey research",
      "Competitive analysis",
    ],
    color: "#2980B9",
    arrowDirection: "right",
  },
  {
    id: "define",
    diamond: 1,
    side: "right",
    mode: "Converge",
    label: "Define",
    description:
      "We synthesize everything into a sharp problem statement and prioritized AI use cases with modeled ROI.",
    activities: [
      "Problem framing",
      "Use case prioritization",
      "ROI modeling",
      "Requirements synthesis",
      "Project brief",
    ],
    color: "#1A5E8A",
    arrowDirection: "left",
  },
  {
    id: "develop",
    diamond: 2,
    side: "left",
    mode: "Diverge",
    label: "Develop",
    description:
      "We explore multiple solution architectures, prototype rapidly, and test approaches with real data.",
    activities: [
      "Solution architecture",
      "Rapid prototyping",
      "Data experiments",
      "Approach validation",
      "Technical spikes",
    ],
    color: "#2980B9",
    arrowDirection: "right",
  },
  {
    id: "deliver",
    diamond: 2,
    side: "right",
    mode: "Converge",
    label: "Deliver",
    description:
      "We build production systems, integrate into operations, set up MLOps and governance, and measure results.",
    activities: [
      "Production engineering",
      "Integration",
      "MLOps setup",
      "Team training",
      "Performance measurement",
    ],
    color: "#1A5E8A",
    arrowDirection: "left",
  },
];

// ─── SVG Geometry Constants ─────────────────────────────────────────────────
//
// Layout (viewBox = "0 0 900 320"):
//   Each diamond occupies a 280×220 bounding box.
//   Diamond 1: centre at (200, 140); Diamond 2: centre at (700, 140)
//   Half-width (hw) = 140; Half-height (hh) = 110
//   Connector line from right midpoint of D1 (340, 140) to left midpoint of D2 (560, 140)
//   Diamond midpoints sit at x = 340 (D1 right) and x = 560 (D2 left)
//   Labels area below (y > 250)

const VB_W = 900;
const VB_H = 340;

// Diamond 1
const D1_CX = 200;
const D1_CY = 140;
const D1_HW = 160; // half-width
const D1_HH = 110; // half-height

// Diamond 2
const D2_CX = 700;
const D2_CY = 140;
const D2_HW = 160;
const D2_HH = 110;

// Derived vertices
const d1 = {
  top: { x: D1_CX, y: D1_CY - D1_HH },
  right: { x: D1_CX + D1_HW, y: D1_CY },
  bottom: { x: D1_CX, y: D1_CY + D1_HH },
  left: { x: D1_CX - D1_HW, y: D1_CY },
};

const d2 = {
  top: { x: D2_CX, y: D2_CY - D2_HH },
  right: { x: D2_CX + D2_HW, y: D2_CY },
  bottom: { x: D2_CX, y: D2_CY + D2_HH },
  left: { x: D2_CX - D2_HW, y: D2_CY },
};

// Connector endpoints
const CONN_X1 = d1.right.x;
const CONN_X2 = d2.left.x;
const CONN_Y = D1_CY; // both diamonds share same cy

// Quadrant fill paths (triangles inside each diamond)
function makeQuadrantPath(
  apex: { x: number; y: number },
  mid1: { x: number; y: number },
  centre: { x: number; y: number },
  mid2: { x: number; y: number }
): string {
  return `M ${apex.x} ${apex.y} L ${mid1.x} ${mid1.y} L ${centre.x} ${centre.y} L ${mid2.x} ${mid2.y} Z`;
}

// Diamond 1 – Discover (left quadrant: left → top → centre → bottom)
const DISCOVER_PATH = makeQuadrantPath(
  d1.left,
  d1.top,
  { x: D1_CX, y: D1_CY },
  d1.bottom
);

// Diamond 1 – Define (right quadrant: right → top → centre → bottom)
const DEFINE_PATH = makeQuadrantPath(
  d1.right,
  d1.top,
  { x: D1_CX, y: D1_CY },
  d1.bottom
);

// Diamond 2 – Develop (left quadrant)
const DEVELOP_PATH = makeQuadrantPath(
  d2.left,
  d2.top,
  { x: D2_CX, y: D2_CY },
  d2.bottom
);

// Diamond 2 – Deliver (right quadrant)
const DELIVER_PATH = makeQuadrantPath(
  d2.right,
  d2.top,
  { x: D2_CX, y: D2_CY },
  d2.bottom
);

// Outer diamond outline paths (full perimeter)
const D1_OUTLINE = `M ${d1.top.x} ${d1.top.y} L ${d1.right.x} ${d1.right.y} L ${d1.bottom.x} ${d1.bottom.y} L ${d1.left.x} ${d1.left.y} Z`;
const D2_OUTLINE = `M ${d2.top.x} ${d2.top.y} L ${d2.right.x} ${d2.right.y} L ${d2.bottom.x} ${d2.bottom.y} L ${d2.left.x} ${d2.left.y} Z`;

// Centre divider lines (vertical axis of each diamond)
const D1_DIVIDER = `M ${D1_CX} ${d1.top.y} L ${D1_CX} ${d1.bottom.y}`;
const D2_DIVIDER = `M ${D2_CX} ${d2.top.y} L ${D2_CX} ${d2.bottom.y}`;

const PHASE_PATHS: Record<PhaseId, string> = {
  discover: DISCOVER_PATH,
  define: DEFINE_PATH,
  develop: DEVELOP_PATH,
  deliver: DELIVER_PATH,
};

// ─── Sub-components ─────────────────────────────────────────────────────────

interface PhaseCardProps {
  phase: Phase;
  isActive: boolean;
  onSelect: (id: PhaseId | null) => void;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, isActive, onSelect }) => {
  return (
    <motion.button
      onClick={() => onSelect(isActive ? null : phase.id)}
      className={cn(
        "w-full text-left rounded-xl border p-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        isActive
          ? "border-accent bg-bgBlue"
          : "border-border bg-white hover:border-accent/40 hover:bg-bgBlue/40"
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      aria-expanded={isActive}
      aria-label={`${phase.label} phase details`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-mono uppercase tracking-wider",
              isActive
                ? "bg-accent text-white"
                : "bg-primary/10 text-primary"
            )}
          >
            {phase.mode}
          </span>
          <span
            className={cn(
              "text-base font-heading font-semibold",
              isActive ? "text-accent" : "text-textPrimary"
            )}
          >
            {phase.label}
          </span>
        </div>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={isActive ? "text-accent" : "text-textSecondary"}
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-textSecondary leading-relaxed">
              {phase.description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {phase.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex items-center gap-2 text-xs text-textSecondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// Animated detail panel shown below diagram on desktop
interface DetailPanelProps {
  phase: Phase | null;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ phase }) => {
  return (
    <AnimatePresence mode="wait">
      {phase && (
        <motion.div
          key={phase.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 rounded-2xl border border-accent/20 bg-bgBlue px-8 py-6"
          role="region"
          aria-live="polite"
          aria-label={`${phase.label} phase details`}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
            {/* Left: heading block */}
            <div className="sm:w-56 shrink-0 mb-4 sm:mb-0">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-mono font-medium text-accent uppercase tracking-widest">
                {phase.mode}
              </span>
              <h3 className="mt-2 text-2xl font-heading font-bold text-primary leading-tight">
                {phase.label}
              </h3>
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">
                {phase.description}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px self-stretch bg-accent/15" />

            {/* Right: activities */}
            <div className="flex-1">
              <p className="text-xs font-mono font-medium text-accent uppercase tracking-widest mb-3">
                Key Activities
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {phase.activities.map((activity, i) => (
                  <motion.li
                    key={activity}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.22 }}
                    className="flex items-center gap-2.5 text-sm text-textPrimary"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold font-mono">
                      {i + 1}
                    </span>
                    {activity}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Arrow marker component (diverge/converge visual indicator) ──────────────
interface ArrowIndicatorProps {
  direction: "right" | "left";
  label: string;
  x: number;
  y: number;
  isActive: boolean;
}

const ArrowIndicator: React.FC<ArrowIndicatorProps> = ({
  direction,
  label,
  x,
  y,
  isActive,
}) => {
  const arrowPath =
    direction === "right"
      ? "M0 0 L10 5 L0 10 L3 5 Z"
      : "M10 0 L0 5 L10 10 L7 5 Z";

  return (
    <g transform={`translate(${x}, ${y})`} aria-hidden="true">
      <path
        d={arrowPath}
        fill={isActive ? "#2980B9" : "#9FBCD9"}
        style={{ transition: "fill 0.3s ease" }}
      />
      <text
        x={direction === "right" ? 16 : -6}
        y={5}
        textAnchor={direction === "right" ? "start" : "end"}
        dominantBaseline="middle"
        fontSize="9"
        fontFamily="var(--font-jetbrains-mono, monospace)"
        letterSpacing="0.08em"
        fill={isActive ? "#2980B9" : "#9FBCD9"}
        style={{ transition: "fill 0.3s ease", textTransform: "uppercase" }}
      >
        {label}
      </text>
    </g>
  );
};

// ─── The SVG Diagram ─────────────────────────────────────────────────────────

interface DiagramSVGProps {
  activePhase: PhaseId | null;
  inView: boolean;
  onPhaseClick: (id: PhaseId | null) => void;
  onPhaseHover: (id: PhaseId | null) => void;
  variant: "full" | "compact";
  gradientId: string;
  glowId: string;
}

const DiagramSVG: React.FC<DiagramSVGProps> = ({
  activePhase,
  inView,
  onPhaseClick,
  onPhaseHover,
  variant,
  gradientId,
  glowId,
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: "easeInOut" as const },
    },
  };

  const connectorVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" as const, delay: 1.2 },
    },
  };

  const STROKE_MUTED = "#9FBCD9";
  const FILL_ACTIVE = "rgba(41, 128, 185, 0.12)";
  const FILL_NONE = "rgba(41, 128, 185, 0.03)";

  function getQuadrantFill(id: PhaseId): string {
    if (!inView) return "rgba(41,128,185,0)";
    if (activePhase === id) return FILL_ACTIVE;
    if (activePhase === null) return FILL_NONE;
    return "rgba(41,128,185,0.01)";
  }

  // Label positions — outside each quadrant
  const labelPositions: Record<
    PhaseId,
    { x: number; y: number; anchor: "start" | "end" | "middle" }
  > = {
    discover: { x: D1_CX - D1_HW - 12, y: D1_CY, anchor: "end" },
    define: { x: D1_CX + D1_HW + 12, y: D1_CY, anchor: "start" },
    develop: { x: D2_CX - D2_HW - 12, y: D2_CY, anchor: "end" },
    deliver: { x: D2_CX + D2_HW + 12, y: D2_CY, anchor: "start" },
  };

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      width="100%"
      role="img"
      aria-label="Double Diamond diagram showing the four phases of AI consulting: Discover, Define, Develop, Deliver"
      className="max-w-full"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Gradient for outlines */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2980B9" />
          <stop offset="50%" stopColor="#3498DB" />
          <stop offset="100%" stopColor="#2980B9" />
        </linearGradient>

        {/* Glow filter */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Quadrant fills (interactive) ── */}
      {PHASES.map((phase) => (
        <motion.path
          key={`fill-${phase.id}`}
          d={PHASE_PATHS[phase.id]}
          fill={getQuadrantFill(phase.id)}
          stroke="none"
          className={variant === "full" ? "cursor-pointer" : ""}
          onClick={
            variant === "full" ? () => onPhaseClick(phase.id) : undefined
          }
          onMouseEnter={
            variant === "full" ? () => onPhaseHover(phase.id) : undefined
          }
          onMouseLeave={
            variant === "full" ? () => onPhaseHover(null) : undefined
          }
          animate={{ fill: getQuadrantFill(phase.id) }}
          transition={{ duration: 0.3 }}
          role={variant === "full" ? "button" : undefined}
          aria-label={
            variant === "full" ? `${phase.label} phase` : undefined
          }
          tabIndex={variant === "full" ? 0 : undefined}
          onKeyDown={
            variant === "full"
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onPhaseClick(phase.id);
                  }
                }
              : undefined
          }
        />
      ))}

      {/* ── Divider lines (centre axes) ── */}
      <motion.path
        d={D1_DIVIDER}
        stroke={STROKE_MUTED}
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="none"
        opacity={inView ? 0.6 : 0}
        animate={{ opacity: inView ? 0.6 : 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      />
      <motion.path
        d={D2_DIVIDER}
        stroke={STROKE_MUTED}
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="none"
        opacity={inView ? 0.6 : 0}
        animate={{ opacity: inView ? 0.6 : 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      />

      {/* ── Diamond 1 outline (animated draw) ── */}
      <motion.path
        d={D1_OUTLINE}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glowId})`}
        variants={pathVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />

      {/* ── Connector line ── */}
      <motion.line
        x1={CONN_X1}
        y1={CONN_Y}
        x2={CONN_X2}
        y2={CONN_Y}
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        strokeDasharray="6 3"
        variants={connectorVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />

      {/* ── Diamond 2 outline (animated draw, delayed) ── */}
      <motion.path
        d={D2_OUTLINE}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glowId})`}
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 1.4,
              ease: "easeInOut",
              delay: 0.5,
            },
          },
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />

      {/* ── Centre dot at midpoint (connector node) ── */}
      {[
        { x: CONN_X1, y: CONN_Y },
        { x: CONN_X2, y: CONN_Y },
      ].map(({ x, y }, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={x}
          cy={y}
          r="4"
          fill="#2980B9"
          opacity={0}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 1.3 + i * 0.1, duration: 0.3 }}
        />
      ))}

      {/* ── Phase labels (full variant only) ── */}
      {variant === "full" &&
        PHASES.map((phase, i) => {
          const pos = labelPositions[phase.id];
          const isActive = activePhase === phase.id;
          return (
            <motion.g
              key={`label-${phase.id}`}
              opacity={0}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1.6 + i * 0.15, duration: 0.35 }}
              className="cursor-pointer"
              onClick={() => onPhaseClick(phase.id)}
            >
              <text
                x={pos.x}
                y={pos.y - 8}
                textAnchor={pos.anchor}
                dominantBaseline="auto"
                fontSize="11"
                fontFamily="var(--font-jetbrains-mono, monospace)"
                letterSpacing="0.1em"
                fill={isActive ? "#2980B9" : "#9FBCD9"}
                style={{ transition: "fill 0.3s ease", textTransform: "uppercase" }}
              >
                {phase.mode.toUpperCase()}
              </text>
              <text
                x={pos.x}
                y={pos.y + 8}
                textAnchor={pos.anchor}
                dominantBaseline="hanging"
                fontSize="15"
                fontWeight="700"
                fontFamily="var(--font-cabinet, sans-serif)"
                letterSpacing="-0.02em"
                fill={isActive ? "#2980B9" : "#2C3E50"}
                style={{ transition: "fill 0.3s ease" }}
              >
                {phase.label}
              </text>
            </motion.g>
          );
        })}

      {/* ── Diamond group labels ── */}
      {variant === "full" && (
        <>
          <motion.text
            x={D1_CX}
            y={d1.bottom.y + 22}
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-dm-sans, sans-serif)"
            fill="#5D6D7E"
            letterSpacing="0.04em"
            opacity={0}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 2.1, duration: 0.4 }}
          >
            The Right Problem
          </motion.text>
          <motion.text
            x={D2_CX}
            y={d2.bottom.y + 22}
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-dm-sans, sans-serif)"
            fill="#5D6D7E"
            letterSpacing="0.04em"
            opacity={0}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 2.3, duration: 0.4 }}
          >
            The Right Solution
          </motion.text>

          {/* Decorative bracket lines under labels */}
          {[
            { cx: D1_CX, hw: D1_HW * 0.55, y: d1.bottom.y + 14 },
            { cx: D2_CX, hw: D2_HW * 0.55, y: d2.bottom.y + 14 },
          ].map(({ cx, hw, y }, i) => (
            <motion.path
              key={`bracket-${i}`}
              d={`M ${cx - hw} ${y} L ${cx - hw} ${y + 4} M ${cx - hw} ${y + 4} L ${cx + hw} ${y + 4} M ${cx + hw} ${y + 4} L ${cx + hw} ${y}`}
              stroke="#D5D8DC"
              strokeWidth="1"
              fill="none"
              opacity={0}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 2.0 + i * 0.2, duration: 0.4 }}
            />
          ))}
        </>
      )}

      {/* ── Diverge/Converge arrow indicators ── */}
      {variant === "full" && (
        <>
          <ArrowIndicator
            direction="right"
            label="Diverge"
            x={D1_CX - 36}
            y={D1_CY - 8}
            isActive={activePhase === "discover"}
          />
          <ArrowIndicator
            direction="left"
            label="Converge"
            x={D1_CX + 8}
            y={D1_CY - 8}
            isActive={activePhase === "define"}
          />
          <ArrowIndicator
            direction="right"
            label="Diverge"
            x={D2_CX - 36}
            y={D2_CY - 8}
            isActive={activePhase === "develop"}
          />
          <ArrowIndicator
            direction="left"
            label="Converge"
            x={D2_CX + 8}
            y={D2_CY - 8}
            isActive={activePhase === "deliver"}
          />
        </>
      )}
    </svg>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export const DoubleDiamondDiagram: React.FC<DoubleDiamondProps> = ({
  variant = "full",
  className,
}) => {
  const uid = useId();
  const gradientId = `dd-gradient-${uid}`;
  const glowId = `dd-glow-${uid}`;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const [activePhase, setActivePhase] = useState<PhaseId | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<PhaseId | null>(null);

  const effectivePhase = activePhase ?? hoveredPhase;

  function handlePhaseClick(id: PhaseId | null) {
    setActivePhase((prev) => (prev === id ? null : id));
  }

  function handlePhaseHover(id: PhaseId | null) {
    setHoveredPhase(id);
  }

  // Compact variant: static SVG only, no labels, no interactivity
  if (variant === "compact") {
    return (
      <div ref={containerRef} className={cn("w-full", className)} aria-hidden>
        <DiagramSVG
          activePhase={null}
          inView={inView}
          onPhaseClick={() => {}}
          onPhaseHover={() => {}}
          variant="compact"
          gradientId={gradientId}
          glowId={glowId}
        />
      </div>
    );
  }

  // Full variant: interactive diagram + detail panel + mobile card list
  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      {/* ── Desktop SVG diagram ── */}
      <div className="hidden md:block relative">
        <DiagramSVG
          activePhase={effectivePhase}
          inView={inView}
          onPhaseClick={handlePhaseClick}
          onPhaseHover={handlePhaseHover}
          variant="full"
          gradientId={gradientId}
          glowId={glowId}
        />

        {/* Subtle hint text */}
        <motion.p
          className="mt-2 text-center text-xs text-textSecondary/70 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 2.5, duration: 0.4 }}
        >
          Click or hover any quadrant to explore
        </motion.p>
      </div>

      {/* ── Desktop detail panel ── */}
      <div className="hidden md:block">
        <DetailPanel
          phase={
            effectivePhase
              ? (PHASES.find((p) => p.id === effectivePhase) ?? null)
              : null
          }
        />
      </div>

      {/* ── Mobile: stacked phase cards ── */}
      <div className="md:hidden space-y-3">
        {/* Mobile diagram (compact, static) */}
        <div className="mb-6">
          <DiagramSVG
            activePhase={activePhase}
            inView={inView}
            onPhaseClick={() => {}}
            onPhaseHover={() => {}}
            variant="compact"
            gradientId={`${gradientId}-mobile`}
            glowId={`${glowId}-mobile`}
          />
        </div>

        {/* All four phases stacked sequentially */}
        <div className="space-y-3">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.35 }}
            >
              <PhaseCard
                phase={phase}
                isActive={activePhase === phase.id}
                onSelect={handlePhaseClick}
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Sequential phase highlight ticker (desktop decorative) ── */}
      <PhaseSequenceTicker inView={inView} activePhase={activePhase} />
    </div>
  );
};

// ─── Phase Sequence Ticker ───────────────────────────────────────────────────
// Shows a subtle animated sequence indicator when no phase is selected

interface PhaseSequenceTickerProps {
  inView: boolean;
  activePhase: PhaseId | null;
}

const PhaseSequenceTicker: React.FC<PhaseSequenceTickerProps> = ({
  inView,
  activePhase,
}) => {
  const [tickIndex, setTickIndex] = useState(0);

  React.useEffect(() => {
    if (!inView || activePhase !== null) return;
    const interval = setInterval(() => {
      setTickIndex((i) => (i + 1) % PHASES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [inView, activePhase]);

  if (activePhase !== null) return null;

  return (
    <motion.div
      className="hidden md:flex items-center justify-center gap-2 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: 2.8, duration: 0.4 }}
      aria-hidden="true"
    >
      {PHASES.map((phase, i) => (
        <React.Fragment key={phase.id}>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="h-1.5 rounded-full bg-accent"
              animate={{
                width: tickIndex === i ? 24 : 6,
                opacity: tickIndex === i ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.span
              className="text-xs font-mono text-textSecondary"
              animate={{ opacity: tickIndex === i ? 1 : 0.35 }}
              transition={{ duration: 0.3 }}
            >
              {phase.label}
            </motion.span>
          </div>
          {i < PHASES.length - 1 && (
            <span className="text-border text-xs">›</span>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default DoubleDiamondDiagram;
