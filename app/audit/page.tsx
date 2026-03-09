import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Free AI Workflow Audit | Aiquire",
  description:
    "In a free 20-minute workflow audit, we'll analyse how you operate today and show you the specific automations that would have the biggest impact — with estimated ROI for each.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const auditCards = [
  {
    title: "Workflow Analysis",
    body: "We map your current processes and identify the repetitive, manual tasks eating up your team's time.",
    icon: (
      <svg
        className="h-7 w-7 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "AI Opportunity Map",
    body: "A prioritised list of automation opportunities ranked by impact, feasibility, and estimated ROI.",
    icon: (
      <svg
        className="h-7 w-7 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "Implementation Roadmap",
    body: "A realistic plan for rolling out the highest-impact automations first, with timelines and budget estimates.",
    icon: (
      <svg
        className="h-7 w-7 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="9 18 15 12 9 6" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
];

const industryTags = [
  "Dental Practices",
  "Law Firms",
  "HVAC Companies",
  "Real Estate Offices",
  "Insurance Agencies",
  "Property Management",
  "Accounting Firms",
  "Recruitment Agencies",
  "Marketing Agencies",
  "Any Business With Repetitive Workflows",
];

const steps = [
  {
    number: "01",
    title: "Book your audit",
    body: "Pick a 20-minute slot that works for you.",
  },
  {
    number: "02",
    title: "Quick pre-call questionnaire",
    body: "Three minutes to help us prepare specific recommendations.",
  },
  {
    number: "03",
    title: "We audit and prepare",
    body: "We review your workflows and identify the highest-impact automation opportunities.",
  },
  {
    number: "04",
    title: "We walk you through it",
    body: "We show you what to automate, in what order, and the expected ROI for each.",
  },
];

const afterBullets = [
  "A prioritised list of automations specific to your business",
  "Estimated time and cost savings for each",
  "A realistic sense of implementation complexity and budget",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AuditPage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary">
        {/* Decorative blobs */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">/</li>
              <li className="text-white/80">Free AI Workflow Audit</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            {/* Overline pill */}
            <span className="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Free — No Strings Attached
            </span>

            {/* Headline */}
            <h1 className="font-heading font-bold text-white text-display-sm md:text-display-md leading-tight tracking-tight">
              Find Out Exactly Where AI Can Save You Time and Money
            </h1>

            {/* Subheadline */}
            <p className="mt-6 font-body text-base leading-relaxed text-white/75 md:text-lg max-w-2xl">
              In a free 20-minute workflow audit, we&apos;ll analyse how you operate today and show
              you the specific automations that would have the biggest impact — with estimated ROI
              for each.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-lg px-8",
                  "bg-accent text-white font-body text-base font-semibold border border-accent",
                  "transition-all duration-200",
                  "hover:bg-accent-light hover:border-accent-light",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                )}
              >
                Book Your Free AI Workflow Audit
              </Link>

              <p className="mt-4 font-body text-sm text-white/50">
                20 minutes. Completely free. Specific recommendations for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: What You Get ─────────────────────────────────────── */}
      <SectionWrapper bg="light">
        <SectionHeading heading="What You Get From Your Free Audit" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {auditCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-white shadow-sm p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgBlue">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-textSecondary leading-relaxed">
                  {card.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 3: Who This Is For ──────────────────────────────────── */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading heading="Who This Is For" />

          <p className="mt-6 font-body text-base leading-relaxed text-textSecondary md:text-lg">
            Business owners who know AI could help but aren&apos;t sure where to start, operations
            leaders drowning in manual processes, companies that have tried AI tools but aren&apos;t
            seeing ROI, and teams that are curious but sceptical.
          </p>
        </div>

        {/* Industry tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industryTags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border border-border bg-bgLight px-4 py-2",
                "font-body text-sm font-medium text-textPrimary"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 4: How It Works ─────────────────────────────────────── */}
      <SectionWrapper bg="light">
        <SectionHeading heading="How It Works" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 80}>
              <div className="flex flex-col gap-3">
                <span className="font-heading font-bold text-accent text-5xl leading-none">
                  {step.number}
                </span>
                <h3 className="font-heading font-bold text-primary text-lg">
                  {step.title}
                </h3>
                <p className="font-body text-textSecondary leading-relaxed text-sm">
                  {step.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Section 5: After the Audit ──────────────────────────────────── */}
      <SectionWrapper bg="white">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading heading="What Happens After" />

          <p className="mt-6 font-body text-base leading-relaxed text-textSecondary md:text-lg">
            The audit is genuinely free with no strings attached. You&apos;ll leave with a clear
            picture of your AI opportunities whether you work with us or not.
          </p>

          <ul className="mt-8 space-y-4 text-left">
            {afterBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <svg
                    className="h-3 w-3 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="font-body text-textSecondary leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* ── Section 6: CTABanner ────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to See Your AI Opportunity?"
        body="It's 20 minutes. It's free. And it's specific to your business — not a generic AI pitch."
        ctaText="Book Your Free AI Workflow Audit"
        ctaHref="/contact"
        secondaryCtaText="View Our Services"
        secondaryCtaHref="/services"
      />
    </>
  );
}
