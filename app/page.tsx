import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

// Constants
import { SERVICES, STATS, DIAMOND_PHASES } from "@/lib/constants";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// Utilities
import { cn } from "@/lib/utils";

// Layout & UI primitives (server components)
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABanner } from "@/components/ui/CTABanner";

// Client hero section
import { HeroContent } from "@/components/sections/HeroContent";

// Double Diamond (lazy — heavy client component)
import DoubleDiamondDiagram from "@/components/ui/DoubleDiamondDiagram";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${SITE_NAME} — We Build AI That Actually Works for Your Business`,
  description:
    "Aiquire combines management consulting rigor with production-grade AI engineering. Our team — from McKinsey, BCG, Deloitte, and Accenture — helps companies build AI systems that deliver measurable business impact.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} — We Build AI That Actually Works for Your Business`,
    description:
      "End-to-end AI consulting and engineering. Strategy, custom ML models, GenAI, data pipelines, and MLOps — all the way to production.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE_NAME} homepage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — AI That Actually Works`,
    description:
      "Management consulting rigor + production-grade AI engineering. From strategy to deployment.",
  },
};

// ─── Static data for Why Us section ─────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Strategy + Engineering",
    description:
      "We don't just advise. We build. Our team includes both business consultants and production ML engineers, so nothing gets lost in translation between the deck and the deploy.",
  },
  {
    number: "02",
    title: "Pilot to Production",
    description:
      "85% of AI projects never make it past the proof-of-concept. We focus relentlessly on shipping production systems that deliver measurable ROI — not impressive demos that collect dust.",
  },
  {
    number: "03",
    title: "Your Tech, Your Terms",
    description:
      "No vendor lock-in. We work with your existing cloud, your codebase, and your team's skill set. Everything we build, you own completely.",
  },
  {
    number: "04",
    title: "Transparent Partnership",
    description:
      "Weekly progress updates, shared repositories, clear milestones. You'll never wonder what we're working on or why.",
  },
  {
    number: "05",
    title: "Consulting DNA",
    description:
      "Our team comes from the world's top consulting firms — McKinsey, BCG, Deloitte, Accenture, and more. That means we don't just build technology. We understand business models, organizational change, stakeholder management, and how to tie every AI initiative to a P&L outcome. You get a partner who speaks both boardroom and codebase.",
  },
] as const;

// ─── Static testimonials ──────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "They didn't just build us a model — they helped us rethink how our entire team uses data. The impact was immediate and measurable.",
    author: "Sarah Chen",
    title: "VP of Data",
    company: "Meridian Financial",
  },
  {
    quote:
      "Aiquire's team spoke both our boardroom and our engineering org's language. That's rare.",
    author: "Marcus Rodriguez",
    title: "COO",
    company: "PulseRetail",
  },
] as const;

// ─── Industries ───────────────────────────────────────────────────────────────

const INDUSTRY_PILLS = [
  "Healthcare & Life Sciences",
  "Financial Services",
  "Retail & E-Commerce",
  "Manufacturing",
  "Logistics & Transportation",
  "Real Estate & PropTech",
] as const;

// ─── Page Component ───────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO SECTION — client component (animated mesh gradient, CTAs)
         ══════════════════════════════════════════════════════════════════════ */}
      <HeroContent />

      {/* ══════════════════════════════════════════════════════════════════════
          2. PROBLEM STATEMENT
         ══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg="white" id="problem">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
              The Intelligence Gap
            </p>
            <h2
              className={cn(
                "font-heading font-bold text-primary",
                "text-display-sm md:text-display-md",
                "leading-tight tracking-tight"
              )}
            >
              AI Is Everywhere.{" "}
              <span className="text-accent">Results Aren&apos;t.</span>
            </h2>
            <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-textSecondary">
              There are over 400 million businesses worldwide. Roughly 1.3 billion people have tried ChatGPT. But fewer than 25 million pay for any AI tool. The gap between what&apos;s possible with AI and what businesses are actually doing is the widest it&apos;s ever been. We call it the intelligence gap — and it&apos;s costing you money every day. Leads go cold because nobody responds fast enough. Proposals take hours when they should take minutes. Your team spends half their day on tasks a well-built automation could handle in the background. The technology exists. The implementation doesn&apos;t. That&apos;s where we come in.
            </p>

            {/* Visual emphasis bar */}
            <div className="mt-10 flex items-center justify-center gap-6" aria-hidden="true">
              {[
                { stat: "85%", label: "of AI pilots never reach production" },
                { stat: "3×", label: "average cost overrun on failed projects" },
                { stat: "72%", label: "of executives say AI ROI is unclear" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 px-4"
                >
                  <span className="font-heading text-2xl md:text-3xl font-bold text-accent">
                    {stat}
                  </span>
                  <span className="font-body text-xs text-textSecondary text-center leading-snug max-w-[120px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════════════════════
          3. SERVICES OVERVIEW
         ══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg="light" id="services">
        <RevealOnScroll>
          <SectionHeading
            overline="What We Do"
            heading="End-to-End AI. From Whiteboard to Production."
            subheading="Six integrated service lines — strategy, custom ML, generative AI, software, data engineering, and MLOps — working together as one seamless engagement."
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 80}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Services CTA */}
        <RevealOnScroll delay={300}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-lg px-7",
                "border border-accent/40 text-accent",
                "font-body text-sm font-semibold",
                "bg-transparent",
                "transition-all duration-200",
                "hover:bg-accent hover:text-white hover:border-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              See All 9 Services →
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
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
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════════════════════
          4. WHY US — Differentiators
         ══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg="white" id="why-us">
        <RevealOnScroll>
          <SectionHeading
            overline="Why Aiquire"
            heading="Why Companies Choose Us"
            subheading="We're not a vendor. We're the team your team wishes it had built this in-house."
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item, i) => (
            <RevealOnScroll key={item.number} delay={i * 80}>
              <article
                className={cn(
                  "group relative flex flex-col",
                  "rounded-2xl border border-border bg-white",
                  "p-6 md:p-8",
                  "shadow-sm transition-shadow duration-300 hover:shadow-md",
                  // Make the 5th card (last, consulting DNA) span full width on lg
                  i === 4 ? "lg:col-span-1" : ""
                )}
              >
                {/* Numbered badge */}
                <span
                  className={cn(
                    "mb-5 inline-flex h-10 w-10 items-center justify-center",
                    "rounded-full bg-bgBlue",
                    "font-mono text-sm font-bold text-accent",
                    "transition-colors duration-300",
                    "group-hover:bg-accent group-hover:text-white"
                  )}
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                <h3 className="mb-3 font-heading text-xl font-bold text-primary leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-textSecondary">
                  {item.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════════════════════
          4b. WE AMPLIFY YOUR TEAM — callout strip
         ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#EBF5FB' }} className="py-16 border-y border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white border border-accent/20 shadow-sm">
              <svg
                className="h-8 w-8 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            {/* Text */}
            <div className="text-center sm:text-left">
              <h2 className="font-heading font-bold text-primary text-xl md:text-2xl leading-snug tracking-tight">
                We Amplify Your Team. We Don&apos;t Replace Them.
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-textSecondary max-w-2xl">
                Every solution we build is designed to make your existing people more productive — not to eliminate their roles. Your receptionist handles patients instead of playing phone tag. Your analysts focus on insights instead of data entry. Your team does the work that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. DESIGN THINKING — Double Diamond
         ══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg="blue" id="approach">
        <RevealOnScroll>
          <SectionHeading
            overline="Our Methodology"
            heading="Design Thinking Meets AI Engineering"
            subheading="We don't start with solutions. We start with the right problem."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <p className="mx-auto mt-2 max-w-2xl text-center font-body text-base md:text-lg leading-relaxed text-textSecondary">
            Most AI projects fail not because of bad technology, but because
            they solve the wrong problem. Before writing a single line of code,
            our consulting team digs deep into your business to understand
            where the real opportunity lies — then our engineers build
            production-grade systems to capture it.
          </p>
        </RevealOnScroll>

        {/* Double Diamond diagram — wrapped in Suspense for lazy loading */}
        <div className="mt-14">
          <Suspense
            fallback={
              <div
                className="w-full h-64 rounded-2xl bg-white/50 animate-pulse"
                aria-label="Loading diagram"
              />
            }
          >
            <DoubleDiamondDiagram variant="full" />
          </Suspense>
        </div>

        {/* Phase cards below diagram */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIAMOND_PHASES.map((phase, i) => (
            <RevealOnScroll key={phase.phase} delay={i * 100}>
              <div
                className={cn(
                  "rounded-2xl border border-border bg-white",
                  "p-6",
                  "shadow-sm"
                )}
              >
                {/* Phase number & label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-xs font-mono font-bold shrink-0"
                    style={{ backgroundColor: phase.color }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-textSecondary">
                      {phase.type}
                    </p>
                    <p className="font-heading font-bold text-base text-primary leading-tight">
                      {phase.phase.charAt(0) + phase.phase.slice(1).toLowerCase()}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-textSecondary">
                  {phase.description}
                </p>

                {/* Key activities */}
                <ul className="mt-4 space-y-1.5" aria-label={`${phase.phase} activities`}>
                  {phase.activities.slice(0, 3).map((activity) => (
                    <li key={activity} className="flex items-center gap-2 text-xs text-textSecondary">
                      <span
                        className="h-1 w-1 rounded-full shrink-0"
                        style={{ backgroundColor: phase.color }}
                        aria-hidden="true"
                      />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/approach"
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-lg px-7",
                "border border-accent/40 text-accent",
                "font-body text-sm font-semibold",
                "bg-transparent",
                "transition-all duration-200",
                "hover:bg-accent hover:text-white hover:border-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              Explore Our Approach
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════════════════════
          6. STATS + TESTIMONIALS
         ══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg="dark" id="results">
        <RevealOnScroll>
          <SectionHeading
            overline="Track Record"
            heading="Real Results for Real Businesses"
          />
        </RevealOnScroll>

        {/* Stat counters */}
        <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="[&_p:first-child]:text-white [&_p:last-child]:text-white/50"
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" aria-hidden="true" />

        {/* Testimonials */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.author} delay={i * 150}>
              {/*
                TestimonialCard has light bg by design; on the dark section
                background it creates a nice floating card effect.
              */}
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Case studies CTA */}
        <RevealOnScroll delay={350}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/case-studies"
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-lg px-7",
                "border border-white/25 text-white",
                "font-body text-sm font-semibold",
                "bg-transparent",
                "transition-all duration-200",
                "hover:bg-white/10 hover:border-white/40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              Read Case Studies
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════════════════════
          7. INDUSTRIES STRIP
         ══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg="white" id="industries">
        <RevealOnScroll>
          <SectionHeading
            overline="Industries We Serve"
            heading="AI Solutions Built for Your Industry"
            subheading="Deep domain expertise across the sectors where AI is transforming how business gets done."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {INDUSTRY_PILLS.map((industry) => (
              <Link
                key={industry}
                href="/industries"
                className={cn(
                  "inline-flex items-center justify-center",
                  "rounded-full px-5 py-2.5",
                  "border border-border bg-bgLight text-textPrimary",
                  "font-body text-sm font-medium",
                  "transition-all duration-200",
                  "hover:border-accent hover:bg-bgBlue hover:text-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                )}
              >
                {industry}
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={250}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/industries"
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-lg px-7",
                "border border-accent/40 text-accent",
                "font-body text-sm font-semibold",
                "bg-transparent",
                "transition-all duration-200",
                "hover:bg-accent hover:text-white hover:border-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              View All Industries
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════════════════════
          8. CTA BANNER
         ══════════════════════════════════════════════════════════════════════ */}
      <CTABanner
        heading="Ready to Put AI to Work?"
        body="Most companies waste months on AI strategy decks that never get executed. Skip the uncertainty. Book a free 45-minute discovery call and leave with a clear picture of where AI can move the needle for your business — and how fast we can get there."
        ctaText="Book Your Free Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="Get a Free AI Workflow Audit"
        secondaryCtaHref="/audit"
      />
    </>
  );
}
