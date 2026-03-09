import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SERVICES, ENGAGEMENT_MODELS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DoubleDiamondDiagram } from "@/components/ui/DoubleDiamondDiagram";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "End-to-end AI services — from strategy and roadmapping to custom model development, generative AI, data engineering, and MLOps. We take you from AI idea to AI impact.",
  openGraph: {
    title: "Our Services | Aiquire",
    description:
      "End-to-end AI services covering strategy, ML development, generative AI, software engineering, data infrastructure, and MLOps.",
  },
};

// ─── Icon map ────────────────────────────────────────────────────────────────
// Renders the icon name as an SVG badge so the page stays server-only
// (no lucide-react dynamic import required). Each icon is hand-drawn inline.

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const iconClass = cn("h-8 w-8 text-accent", className);

  const icons: Record<string, React.ReactNode> = {
    Lightbulb: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    BrainCircuit: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
    Sparkles: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    ),
    Code2: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    Database: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    Settings2: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
    Zap: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    Target: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    Users: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    RefreshCw: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    ),
    UserPlus: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
      </svg>
    ),
  };

  return <>{icons[name] ?? null}</>;
}

// ─── Double Diamond Step Cards ────────────────────────────────────────────────

interface DiamondStepCardProps {
  step: string;
  phase: string;
  description: string;
  index: number;
}

function DiamondStepCard({ step, phase, description, index }: DiamondStepCardProps) {
  return (
    <RevealOnScroll delay={index * 100}>
      <div
        className={cn(
          "flex flex-col items-center text-center px-6 py-8",
          "rounded-2xl border border-accent/20 bg-white",
          "shadow-sm"
        )}
      >
        <span
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full",
            "bg-accent text-white font-heading font-bold text-sm mb-4"
          )}
          aria-hidden="true"
        >
          {index + 1}
        </span>
        <p className="mb-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          {step}
        </p>
        <h3 className="font-heading font-bold text-xl text-textPrimary mb-2">
          {phase}
        </h3>
        <p className="font-body text-sm leading-relaxed text-textSecondary">
          {description}
        </p>
      </div>
    </RevealOnScroll>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-primary">
        {/* Mesh gradient decoration */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-accent-dark/20 blur-3xl"
        />

        <div
          className={cn(
            "relative z-10 mx-auto max-w-[1280px]",
            "px-4 sm:px-6 lg:px-8",
            "py-28 md:py-40",
            "flex flex-col items-center text-center"
          )}
        >
          {/* Overline pill */}
          <p
            className={cn(
              "mb-5 inline-block rounded-full border border-accent/30 bg-accent/10",
              "px-4 py-1.5",
              "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-light"
            )}
          >
            End-to-End AI Services
          </p>

          {/* H1 */}
          <h1
            className={cn(
              "mx-auto max-w-4xl",
              "font-heading font-bold",
              "text-display-sm md:text-display-md lg:text-display-lg",
              "leading-tight tracking-tight",
              "text-white"
            )}
          >
            Everything You Need to Go From{" "}
            <span className="text-accent-light">AI Idea</span> to{" "}
            <span className="text-accent-light">AI Impact</span>
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "mx-auto mt-7 max-w-2xl",
              "font-body text-lg leading-relaxed text-white/75",
              "md:text-xl"
            )}
          >
            We bring together management consulting rigor and production-grade
            AI engineering to deliver AI that actually works — across strategy,
            development, data, and operations.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-13 items-center justify-center",
                "rounded-xl px-8",
                "bg-accent text-white",
                "font-body text-base font-semibold",
                "border border-accent",
                "transition-all duration-200",
                "hover:bg-accent-light hover:border-accent-light",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              Book a Discovery Call
            </Link>
            <Link
              href="#services-grid"
              className={cn(
                "inline-flex h-13 items-center justify-center",
                "rounded-xl px-8",
                "bg-transparent text-white",
                "font-body text-base font-semibold",
                "border border-white/30",
                "transition-all duration-200",
                "hover:bg-white/10 hover:border-white/60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. DOUBLE DIAMOND PROCESS ──────────────────────────────────── */}
      <SectionWrapper bg="blue" id="process">
        <SectionHeading
          overline="Our Methodology"
          heading="Our Approach: The Double Diamond for AI"
          subheading="A proven design thinking framework adapted for AI — ensuring we solve the right problem before building the right solution."
          align="center"
        />

        {/* Diagram */}
        <div className="mt-14">
          <DoubleDiamondDiagram variant="full" />
        </div>

        {/* Diamond group labels */}
        <div className="mt-12 mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            className={cn(
              "rounded-xl border border-accent/20 bg-white/60 px-6 py-4",
              "flex items-center gap-3"
            )}
          >
            <span
              className={cn(
                "inline-flex h-8 w-8 shrink-0 items-center justify-center",
                "rounded-full bg-accent text-white font-mono text-xs font-bold"
              )}
            >
              1
            </span>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Diamond 1: Find the Right Problem
            </p>
          </div>
          <div
            className={cn(
              "rounded-xl border border-accent/20 bg-white/60 px-6 py-4",
              "flex items-center gap-3"
            )}
          >
            <span
              className={cn(
                "inline-flex h-8 w-8 shrink-0 items-center justify-center",
                "rounded-full bg-accent-dark text-white font-mono text-xs font-bold"
              )}
            >
              2
            </span>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
              Diamond 2: Build the Right Solution
            </p>
          </div>
        </div>

        {/* 4-step cards */}
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DiamondStepCard
            index={0}
            step="Phase 01"
            phase="Discover"
            description="We go wide. Stakeholder interviews, data audits, process mapping, and competitive analysis uncover what is really happening in your business."
          />
          <DiamondStepCard
            index={1}
            step="Phase 02"
            phase="Define"
            description="We synthesize findings into a sharp problem statement, prioritized AI use cases, and an ROI model that leadership can stand behind."
          />
          <DiamondStepCard
            index={2}
            step="Phase 03"
            phase="Develop"
            description="We explore multiple solution architectures, prototype rapidly, and validate approaches against real data before committing to a direction."
          />
          <DiamondStepCard
            index={3}
            step="Phase 04"
            phase="Deliver"
            description="We build production systems, integrate them into your operations, set up MLOps and governance, and measure results against agreed KPIs."
          />
        </div>
      </SectionWrapper>

      {/* ── 3. SERVICES GRID ───────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="services-grid">
        <SectionHeading
          overline="What We Do"
          heading="Our Service Areas"
          subheading="Six practice areas, one integrated team. Each capability reinforces the others — so your AI initiative gets the full picture, not just a slice."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={Math.floor(i / 2) * 100 + (i % 2) * 60}>
              <article
                className={cn(
                  "group flex flex-col h-full",
                  "rounded-2xl border border-border bg-white",
                  "p-8",
                  "shadow-sm transition-shadow duration-300",
                  "hover:shadow-md hover:border-accent/30"
                )}
              >
                {/* Icon + title row */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center",
                      "rounded-xl bg-bgBlue border border-accent/15",
                      "transition-colors duration-200 group-hover:bg-accent/10"
                    )}
                  >
                    <ServiceIcon name={service.icon} />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl text-textPrimary leading-snug">
                      {service.title}
                    </h2>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-textSecondary">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Sub-service bullet list (first 4) */}
                <ul className="mb-6 space-y-2.5 flex-1">
                  {service.subServices.slice(0, 4).map((sub) => (
                    <li
                      key={sub.title}
                      className="flex items-start gap-2.5 font-body text-sm text-textSecondary"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="font-semibold text-textPrimary">
                          {sub.title}
                        </span>{" "}
                        — {sub.desc}
                      </span>
                    </li>
                  ))}
                  {service.subServices.length > 4 && (
                    <li className="pl-4 font-body text-xs text-textSecondary/70 italic">
                      + {service.subServices.length - 4} more capabilities
                    </li>
                  )}
                </ul>

                {/* Learn more link */}
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "inline-flex items-center gap-1.5",
                    "font-body text-sm font-semibold text-accent",
                    "transition-all duration-200",
                    "group-hover:gap-2.5",
                    "focus-visible:outline-none focus-visible:underline"
                  )}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 4. ENGAGEMENT MODELS ───────────────────────────────────────── */}
      <SectionWrapper bg="light" id="engagement-models">
        <SectionHeading
          overline="How We Engage"
          heading="Flexible Ways to Work Together"
          subheading="Every engagement is structured around your goals, timeline, and risk tolerance. Choose the model that fits — or combine them as you scale."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <RevealOnScroll key={model.title} delay={i * 80}>
              <div
                className={cn(
                  "flex flex-col h-full",
                  "rounded-2xl border border-border bg-white",
                  "p-6",
                  "shadow-sm transition-all duration-300",
                  "hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center",
                    "rounded-xl bg-bgBlue border border-accent/15"
                  )}
                >
                  <ServiceIcon name={model.icon} className="h-6 w-6 text-accent" />
                </div>

                {/* Duration badge */}
                <span
                  className={cn(
                    "mb-3 inline-flex w-fit items-center rounded-full",
                    "border border-accent/20 bg-bgBlue",
                    "px-2.5 py-0.5",
                    "font-mono text-[10px] font-medium uppercase tracking-widest text-accent"
                  )}
                >
                  {model.duration}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-textPrimary mb-2 leading-snug">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-textSecondary flex-1">
                  {model.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* "We Amplify" principle note */}
        <RevealOnScroll delay={150}>
          <p className="font-body text-sm text-textSecondary italic mt-4">
            Every engagement model is built around one principle: your team gets better, not smaller. We integrate with your people and processes, not around them.
          </p>
        </RevealOnScroll>

        {/* Bottom CTA nudge */}
        <RevealOnScroll delay={200}>
          <div className="mt-12 text-center">
            <p className="font-body text-base text-textSecondary mb-4">
              Not sure which model fits your situation?
            </p>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-11 items-center justify-center",
                "rounded-lg px-7",
                "bg-accent text-white",
                "font-body text-sm font-semibold",
                "border border-accent",
                "transition-all duration-200",
                "hover:bg-accent-light hover:border-accent-light",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              Talk to Us — It&apos;s Free
            </Link>

            <div className="mt-6">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent hover:text-accent-light transition-colors"
              >
                Get a Free AI Workflow Audit →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 5. CTA BANNER ─────────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Turn Your AI Initiative Into a Competitive Advantage?"
        body="Book a free 30-minute discovery call. We'll listen, ask hard questions, and tell you honestly what AI can — and can't — do for your business right now."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="View Case Studies"
        secondaryCtaHref="/case-studies"
      />
    </>
  );
}
