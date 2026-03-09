import type { Metadata } from "next";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import IndustryTabs from "./IndustryTabs";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Industry Expertise",
  description:
    "Aiquire brings deep domain knowledge to AI consulting across Healthcare, Financial Services, Retail, Manufacturing, Logistics, and Real Estate. Find your industry and see how we solve your specific challenges.",
  keywords: [
    "AI consulting by industry",
    "healthcare AI consulting",
    "financial services AI",
    "retail AI solutions",
    "manufacturing AI",
    "logistics AI",
    "real estate AI",
  ],
  openGraph: {
    title: "Industry Expertise | Aiquire",
    description:
      "AI that speaks your industry's language. Deep domain expertise across six verticals.",
    url: "https://aiquire.ai/industries",
  },
};

// ─── ROI Outcomes per industry ────────────────────────────────────────────────

const ROI_OUTCOMES: Record<string, string> = {
  healthcare:
    "A regional health network automated clinical document summarisation, saving physicians an average of 45 minutes per day on administrative tasks — time that went directly back to patient care.",
  "financial-services":
    "A mid-size credit union deployed real-time fraud detection and caught $2.4M in fraudulent transactions in the first quarter — a 60% improvement over their previous rule-based system.",
  retail:
    "An e-commerce brand implemented demand forecasting and reduced overstock costs by 31% while cutting stockouts by 22% — a $1.8M annual impact on a $50M product catalogue.",
  manufacturing:
    "A parts manufacturer deployed visual quality inspection, catching defects 12x faster than manual inspection and reducing warranty claims by 34%.",
  logistics:
    "A regional logistics company optimised delivery routing with AI, reducing fuel costs by 18% and increasing on-time deliveries from 87% to 96% across 200+ daily routes.",
  "real-estate":
    "A property management company automated tenant screening and lease processing, cutting time-to-lease from 14 days to 3 days and reducing vacancy losses by $420K annually.",
};

// ─── Icon resolver ────────────────────────────────────────────────────────────

type LucideIconComponent = ForwardRefExoticComponent<
  LucideProps & RefAttributes<SVGSVGElement>
>;

function resolveIcon(name: string): LucideIconComponent {
  const icons = LucideIcons as unknown as Record<string, LucideIconComponent>;
  return icons[name] ?? icons["HelpCircle"];
}

// ─── Industry Section ─────────────────────────────────────────────────────────

interface IndustrySectionProps {
  industry: (typeof INDUSTRIES)[number];
  index: number;
}

function IndustrySection({ industry, index }: IndustrySectionProps) {
  const Icon = resolveIcon(industry.icon);
  const isEven = index % 2 === 0;

  return (
    <SectionWrapper
      id={industry.slug}
      bg={isEven ? "white" : "light"}
      className="scroll-mt-20"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Left: heading block */}
        <RevealOnScroll className="lg:w-[38%] shrink-0">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-xl",
                "h-12 w-12 shrink-0",
                "bg-bgBlue text-accent"
              )}
              aria-hidden="true"
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h2 className="font-heading font-bold text-primary text-display-sm leading-tight tracking-tight">
              {industry.title}
            </h2>
          </div>

          <p className="font-body text-base leading-relaxed text-textSecondary md:text-lg">
            {industry.overview}
          </p>

          <Link
            href="/case-studies"
            className={cn(
              "mt-6 inline-flex items-center gap-1.5",
              "font-body text-sm font-semibold text-accent",
              "underline-offset-2 hover:underline",
              "transition-colors duration-200 hover:text-accent-dark"
            )}
          >
            See related case study
            <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>

        {/* Right: use-case grid */}
        <RevealOnScroll delay={100} className="flex-1">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Key Use Cases
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industry.useCases.map((useCase, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-start gap-3 rounded-xl border border-border bg-white p-5",
                  "shadow-sm transition-shadow duration-200 hover:shadow-md",
                  !isEven && "bg-bgLight"
                )}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold font-mono"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="font-body text-sm leading-relaxed text-textPrimary">
                  {useCase}
                </span>
              </li>
            ))}
          </ul>

          {ROI_OUTCOMES[industry.slug] && (
            <div className="mt-4 rounded-xl bg-bgBlue border border-accent/20 p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent mb-1">
                Example Outcome
              </p>
              <p className="font-body text-sm text-textSecondary italic">
                Illustrative — replace with real client data
              </p>
              <p className="font-body text-sm text-textPrimary mt-1">
                {ROI_OUTCOMES[industry.slug]}
              </p>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Decorative background shapes */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Domain Expertise
          </p>
          <h1 className="font-heading font-bold text-white text-display-md md:text-display-lg leading-tight tracking-tight">
            AI That Speaks Your Industry&apos;s Language
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-white/75 md:text-lg">
            We bring deep domain knowledge to every engagement. Whether you&apos;re
            diagnosing patients, managing risk portfolios, or optimizing supply
            chains — our consultants have worked in your world, and our engineers
            know what it takes to deploy AI that works reliably within it.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  return (
    <>
      <Hero />

      {/* Sticky industry navigation tabs (client component) */}
      <IndustryTabs
        industries={INDUSTRIES.map((ind) => ({
          slug: ind.slug,
          title: ind.title,
        }))}
      />

      {/* Industry sections */}
      {INDUSTRIES.map((industry, index) => (
        <IndustrySection key={industry.slug} industry={industry} index={index} />
      ))}

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Apply AI to Your Industry?"
        body="Tell us about your business and the problems you're trying to solve. We'll scope an engagement that fits your context, timeline, and budget."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="View Case Studies"
        secondaryCtaHref="/case-studies"
      />
    </>
  );
}
