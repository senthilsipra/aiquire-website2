import type { Metadata } from "next";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { cn } from "@/lib/utils";
import { SERVICES, ENGAGEMENT_MODELS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DoubleDiamondDiagram } from "@/components/ui/DoubleDiamondDiagram";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Services & Solutions | Aiquire",
  description:
    "End-to-end AI services — from strategy and roadmapping to custom model development, generative AI, data engineering, and MLOps. We take you from AI idea to AI impact.",
  alternates: {
    canonical: "https://aiquire.ai/services",
  },
  openGraph: {
    title: "Our AI Services | Aiquire",
    description:
      "End-to-end AI services covering strategy, ML development, generative AI, software engineering, data infrastructure, and MLOps.",
  },
};

// ─── Icon resolver ────────────────────────────────────────────────────────────
// Note: This remains a server-side component. Lucide icons are rendered as SVGs.

type LucideIconComponent = ForwardRefExoticComponent<
  LucideProps & RefAttributes<SVGSVGElement>
>;

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const icons = LucideIcons as unknown as Record<string, LucideIconComponent>;
  const Icon = icons[name] ?? icons["HelpCircle"];

  return (
    <Icon
      className={cn("h-8 w-8 text-accent", className)}
      strokeWidth={1.75}
      aria-hidden="true"
    />
  );
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
                    <h3 className="font-heading font-bold text-xl text-textPrimary leading-snug">
                      {service.title}
                    </h3>
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
