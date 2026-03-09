import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Speed-to-Lead AI Agents | Aiquire",
  description:
    "Never lose a lead to slow response again. Our AI agents respond to every inquiry in under 60 seconds — 24/7.",
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
        Speed-to-Lead AI Agents
      </span>
    </nav>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

function StatCard({ value, label, index }: StatCardProps) {
  return (
    <RevealOnScroll delay={index * 80}>
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center",
          "rounded-2xl border border-border bg-white",
          "px-6 py-10",
          "shadow-sm"
        )}
      >
        <p
          className={cn(
            "font-heading font-bold text-accent",
            "text-display-sm md:text-display-md",
            "leading-tight tracking-tight"
          )}
        >
          {value}
        </p>
        <p className="mt-3 font-body text-sm leading-snug text-textSecondary">
          {label}
        </p>
      </div>
    </RevealOnScroll>
  );
}

// ─── Step Card ────────────────────────────────────────────────────────────────

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function StepCard({ number, title, description, index }: StepCardProps) {
  return (
    <RevealOnScroll delay={index * 100}>
      <div
        className={cn(
          "flex flex-col h-full",
          "rounded-2xl border border-border bg-white",
          "p-8",
          "shadow-sm transition-all duration-300",
          "hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5"
        )}
      >
        <p
          className="mb-4 font-mono text-3xl font-bold text-accent leading-none"
          aria-hidden="true"
        >
          {number}
        </p>
        <h3 className="font-heading font-bold text-lg text-textPrimary mb-2 leading-snug">
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-textSecondary flex-1">
          {description}
        </p>
      </div>
    </RevealOnScroll>
  );
}

// ─── Service Feature Card ─────────────────────────────────────────────────────

interface FeatureCardProps {
  title: string;
  index: number;
}

function FeatureCard({ title, index }: FeatureCardProps) {
  return (
    <RevealOnScroll delay={index * 60}>
      <div
        className={cn(
          "flex items-center gap-3",
          "rounded-2xl border border-border bg-white",
          "px-5 py-4",
          "shadow-sm transition-all duration-200",
          "hover:border-accent/30 hover:shadow-md"
        )}
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-accent"
          aria-hidden="true"
        />
        <p className="font-body text-sm font-semibold text-textPrimary">
          {title}
        </p>
      </div>
    </RevealOnScroll>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SpeedToLeadAgentsPage() {
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
            Speed-to-Lead AI Agents
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
            Never Lose a Lead to Slow Response Again
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "mt-6 max-w-2xl",
              "font-body text-lg leading-relaxed text-white/75"
            )}
          >
            Our AI agents respond to every inquiry in under 60 seconds — 24/7
            — qualifying leads, capturing information, and booking meetings
            while your team focuses on closing.
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
              Book a Free Speed Test
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

      {/* ── 2. STAT CARDS ───────────────────────────────────────────────── */}
      <SectionWrapper bg="light" id="stats">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            index={0}
            value="< 60 sec"
            label="Average response time"
          />
          <StatCard
            index={1}
            value="24/7/365"
            label="Always-on coverage"
          />
          <StatCard
            index={2}
            value="3–5x"
            label="Typical improvement in lead qualification rates"
          />
          <StatCard
            index={3}
            value="$20–50/mo"
            label="Operational cost to run"
          />
        </div>
      </SectionWrapper>

      {/* ── 3. OVERVIEW ─────────────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="overview">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: heading */}
          <RevealOnScroll>
            <SectionHeading
              overline="The Problem"
              heading="Here's the Math That Should Keep You Up at Night"
              align="left"
            />
          </RevealOnScroll>

          {/* Right: body copy */}
          <RevealOnScroll delay={100}>
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Responding to a lead within 5 minutes makes you 100x more likely
                to qualify them than waiting 30 minutes. Most businesses take
                hours. Many take days. Some never respond at all. Every hour of
                delay is revenue walking out the door.
              </p>
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Our speed-to-lead agents sit between your website (or any lead
                source) and your team. When someone submits a form, calls after
                hours, or messages on any channel, the AI responds instantly
                with a personalized message. It asks the right qualifying
                questions, captures the information your team needs, and books a
                meeting directly on your calendar.
              </p>
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Your receptionist isn&apos;t losing her job. She&apos;s being freed up to
                handle the people who show up instead of playing phone tag with
                people who filled out a form at 11pm.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────── */}
      <SectionWrapper bg="light" id="how-it-works">
        <SectionHeading
          overline="The Process"
          heading="How It Works"
          subheading="Four steps from lead capture to booked meeting — all automated, all instant."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StepCard
            index={0}
            number="01"
            title="Connect"
            description="We integrate with your existing lead sources — website forms, Google Ads, social media, phone systems, and third-party directories."
          />
          <StepCard
            index={1}
            number="02"
            title="Respond"
            description="When a lead comes in, the AI agent responds within seconds via their preferred channel (SMS, email, or chat) with a personalized, context-aware message."
          />
          <StepCard
            index={2}
            number="03"
            title="Qualify"
            description="The agent asks your specific qualifying questions, captures key information (budget, timeline, needs), and scores the lead — all conversationally, not like a robotic form."
          />
          <StepCard
            index={3}
            number="04"
            title="Book"
            description="Qualified leads are automatically routed to the right team member's calendar. Your CRM is updated. Your team gets notified. The lead never goes cold."
          />
        </div>
      </SectionWrapper>

      {/* ── 5. SERVICES INCLUDED ────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="services-included">
        <SectionHeading
          overline="What's Included"
          heading="Everything in the Package"
          subheading="Each speed-to-lead engagement includes all of the following — fully configured, tested, and maintained."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Instant Lead Response Agents",
            "Intelligent Lead Qualification",
            "Automated Appointment Booking",
            "After-Hours Coverage",
            "Multi-Channel Response (SMS / Email / Chat)",
            "CRM Integration & Lead Routing",
          ].map((title, i) => (
            <FeatureCard key={title} title={title} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── 6. PRICING ──────────────────────────────────────────────────── */}
      <SectionWrapper bg="light" id="pricing">
        <RevealOnScroll>
          <div
            className={cn(
              "mx-auto max-w-3xl",
              "rounded-2xl border border-accent/25 bg-white",
              "p-10 md:p-14",
              "shadow-sm text-center"
            )}
          >
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Pricing
            </p>
            <h2
              className={cn(
                "font-heading font-bold text-primary",
                "text-display-sm",
                "leading-tight tracking-tight mb-6"
              )}
            >
              Transparent, ROI-Positive Pricing
            </h2>

            <div className="mb-8 flex flex-col items-center gap-2">
              <p className="font-body text-lg font-semibold text-textPrimary">
                $1,500–$5,000 setup
              </p>
              <p className="font-body text-base text-textSecondary">
                + $300–$1,000 / month depending on volume and channels
              </p>
            </div>

            <div
              className={cn(
                "rounded-xl border border-accent/20 bg-bgBlue",
                "px-6 py-5"
              )}
            >
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Most clients see full ROI within the first month from a single
                additional closed deal.
              </p>
            </div>

            <div className="mt-8">
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
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                )}
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 7. CTA BANNER ───────────────────────────────────────────────── */}
      <CTABanner
        heading="Never Miss Another Lead"
        body="See how many leads you're currently losing — book a free speed test and we'll show you what an AI agent would have responded to in the last 30 days."
        ctaText="Book a Free Speed Test"
        ctaHref="/contact"
        secondaryCtaText="View All Services"
        secondaryCtaHref="/services"
      />
    </>
  );
}
