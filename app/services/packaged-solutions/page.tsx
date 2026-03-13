import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Packaged AI Solutions | Aiquire",
  description:
    "Pre-built, battle-tested automation packages. Deploy in days, not months. Predictable pricing, immediate results, maintenance included.",
};

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center gap-2 font-body text-sm text-white/60"
    >
      <Link
        href="/"
        className="transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
      >
        Home
      </Link>
      <span aria-hidden="true" className="text-white/30">
        /
      </span>
      <Link
        href="/services"
        className="transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
      >
        Services
      </Link>
      <span aria-hidden="true" className="text-white/30">
        /
      </span>
      <span className="text-white/90 truncate max-w-[240px]" aria-current="page">
        Packaged AI Solutions
      </span>
    </nav>
  );
}

// ─── Package Card ─────────────────────────────────────────────────────────────

interface PackageCardProps {
  name: string;
  description: string;
  index: number;
}

function PackageCard({ name, description, index }: PackageCardProps) {
  return (
    <RevealOnScroll delay={index * 80}>
      <article
        className={cn(
          "flex flex-col h-full",
          "rounded-2xl border border-border bg-white",
          "p-8",
          "shadow-sm transition-all duration-300",
          "hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5"
        )}
      >
        {/* Name */}
        <h3 className="font-heading font-bold text-lg text-textPrimary mb-3 leading-snug">
          {name}
        </h3>

        {/* Description */}
        <p className="font-body text-sm leading-relaxed text-textSecondary flex-1">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-border">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-1.5",
              "font-body text-sm font-semibold text-accent",
              "transition-all duration-200",
              "hover:gap-2.5",
              "focus-visible:outline-none focus-visible:underline"
            )}
            aria-label={`Get started with ${name}`}
          >
            Get Started
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
        </div>
      </article>
    </RevealOnScroll>
  );
}

// ─── Package data ─────────────────────────────────────────────────────────────

const PACKAGES: PackageCardProps[] = [
  {
    index: 0,
    name: "Content & Podcast Repurposing Engine",
    description:
      "Upload a raw podcast episode or long-form content. Within 24 hours, receive: show notes, 5 social media posts (platform-optimized), short-form clip suggestions with timestamps, email newsletter draft, and a blog post. All in your brand voice.",
  },
  {
    index: 1,
    name: "Real Estate Listing Automation",
    description:
      "Add a new property. Automatically generate: MLS-optimized description, 4 social media posts with hashtags, email to your buyer list, virtual tour script, and a property flyer draft. Consistent quality across every listing.",
  },
  {
    index: 2,
    name: "Client Onboarding Automation",
    description:
      "New client signs? Trigger automatic welcome sequences, document collection workflows, internal team notifications, CRM updates, and kickoff scheduling. Every client gets a premium experience without manual coordination.",
  },
  {
    index: 3,
    name: "Proposal & Document Generation",
    description:
      "Feed in project details. Get a professionally formatted proposal, scope of work, timeline, and pricing document — customized to your templates and brand. What used to take 3 hours takes 3 minutes.",
  },
  {
    index: 4,
    name: "Review & Reputation Management",
    description:
      "Automated review requests sent at the optimal time after service delivery. AI-drafted responses to reviews (positive and negative). Weekly reputation report. Works with Google, Yelp, and industry-specific platforms.",
  },
  {
    index: 5,
    name: "Reporting & Analytics Automation",
    description:
      "Connect your data sources. Receive automated weekly/monthly reports with insights, trend analysis, and recommendations. No more half-day report building. Your team focuses on acting on the data, not compiling it.",
  },
];

// ─── How It Works Step ────────────────────────────────────────────────────────

interface HowItWorksStepProps {
  number: string;
  description: string;
  index: number;
}

function HowItWorksStep({ number, description, index }: HowItWorksStepProps) {
  const isLast = index === 3;

  return (
    <RevealOnScroll delay={index * 100}>
      <div className="relative flex gap-5">
        {/* Left rail: number circle + connector line */}
        <div className="flex flex-col items-center">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              "border-2 border-accent bg-bgBlue",
              "font-mono text-sm font-bold text-accent"
            )}
          >
            {number}
          </span>
          {!isLast && (
            <span
              className="mt-2 flex-1 w-px bg-accent/20 min-h-[2rem]"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Content */}
        <div className={cn("pb-8", isLast && "pb-0")}>
          <p className="font-body text-base leading-relaxed text-textSecondary">
            {description}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PackagedSolutionsPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-primary">
        {/* Decorative blurs */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -left-20 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-accent-dark/20 blur-3xl"
        />

        <div
          className={cn(
            "relative z-10 mx-auto max-w-[1280px]",
            "px-4 sm:px-6 lg:px-8",
            "pt-24 pb-28 md:pt-32 md:pb-36"
          )}
        >
          <Breadcrumb />

          {/* Overline pill */}
          <p
            className={cn(
              "mb-5 inline-block rounded-full border border-accent/30 bg-accent/10",
              "px-4 py-1.5",
              "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-light"
            )}
          >
            Packaged AI Solutions
          </p>

          {/* H1 */}
          <h1
            className={cn(
              "max-w-3xl",
              "font-heading font-bold",
              "text-display-sm md:text-display-md",
              "leading-tight tracking-tight",
              "text-white"
            )}
          >
            Plug-and-Play AI. Built for Your Industry.
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "mt-6 max-w-2xl",
              "font-body text-lg leading-relaxed text-white/75"
            )}
          >
            Pre-built, battle-tested automation packages that solve specific
            problems. Deploy in days, not months. Predictable pricing,
            immediate results, maintenance included.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-12 items-center justify-center",
                "rounded-xl px-8",
                "bg-accent text-white",
                "font-body text-base font-semibold",
                "border border-accent",
                "transition-all duration-200",
                "hover:bg-accent-light hover:border-accent-light",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              Book a Quick Call
            </Link>
            <Link
              href="/services"
              className={cn(
                "inline-flex h-12 items-center justify-center",
                "rounded-xl px-8",
                "bg-transparent text-white/80",
                "font-body text-base font-semibold",
                "border border-white/25",
                "transition-all duration-200",
                "hover:bg-white/10 hover:border-white/50 hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ─────────────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="overview">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: heading */}
          <RevealOnScroll>
            <SectionHeading
              overline="The Concept"
              heading="Subscribe to a Solution, Not a Project"
              align="left"
            />
          </RevealOnScroll>

          {/* Right: body copy */}
          <RevealOnScroll delay={100}>
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Not everything needs to be custom. Some workflows are painful
                in exactly the same way across an entire industry. Every
                podcast needs repurposing. Every real estate agent needs
                listing content. Every service business needs faster proposals.
              </p>
              <p className="font-body text-base leading-relaxed text-textSecondary">
                We&apos;ve identified these universal pain points and built packaged
                solutions that just work. Each package is a complete, maintained
                automation — not a template you have to figure out yourself. We
                deploy it, customize it to your branding and preferences, and
                keep it running.
              </p>
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Think of it as subscribing to a solution rather than hiring for
                a project.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 3. SIX PACKAGE CARDS ────────────────────────────────────────── */}
      <SectionWrapper bg="light" id="packages">
        <SectionHeading
          overline="Available Packages"
          heading="Six Packages. Six Specific Pain Points Solved."
          subheading="Each package is maintained, customized, and deployed by our team. Pick the one that matches your biggest workflow headache."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>

        {/* Footnote */}
        <RevealOnScroll delay={200}>
          <p className="mt-8 text-center font-body text-sm text-textSecondary">
            All packages include setup, customization, ongoing maintenance, and
            monthly optimization. No hidden fees.
          </p>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 4. HOW PACKAGED SOLUTIONS WORK ──────────────────────────────── */}
      <SectionWrapper bg="white" id="how-it-works">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: heading block */}
          <div className="lg:sticky lg:top-28">
            <RevealOnScroll>
              <SectionHeading
                overline="The Process"
                heading="From Sign-Up to Running in Days"
                subheading="We handle everything so you can focus on using the results, not configuring the tools."
                align="left"
              />

              <div
                className={cn(
                  "mt-8 rounded-xl border border-accent/20 bg-bgBlue px-6 py-5"
                )}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  What&apos;s always included
                </p>
                <ul className="space-y-2">
                  {[
                    "Full setup and configuration done for you",
                    "Brand customization to match your voice and style",
                    "Integration with your existing tools and platforms",
                    "Monthly optimization based on performance data",
                    "Ongoing maintenance — we fix it if it breaks",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-textSecondary"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: steps timeline */}
          <div className="space-y-0">
            <HowItWorksStep
              index={0}
              number="01"
              description="Choose your package and sign up."
            />
            <HowItWorksStep
              index={1}
              number="02"
              description="We customize it to your brand, preferences, and systems in 1–3 days."
            />
            <HowItWorksStep
              index={2}
              number="03"
              description="It runs. You get results. We maintain it."
            />
            <HowItWorksStep
              index={3}
              number="04"
              description="We optimize monthly based on performance data."
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. CTA BANNER ───────────────────────────────────────────────── */}
      <CTABanner
        heading="See Which Package Fits Your Business"
        body="Tell us your industry and your biggest workflow headache. We'll show you exactly which package would have the biggest impact and walk you through what it looks like in practice."
        ctaText="Book a Quick Call"
        ctaHref="/contact"
        secondaryCtaText="View All Services"
        secondaryCtaHref="/services"
      />
    </>
  );
}
