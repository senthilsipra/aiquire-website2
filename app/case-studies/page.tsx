import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CaseStudyFilters } from "./CaseStudyFilters";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real AI projects that went to production and delivered measurable business value. See how Aiquire reduced fraud detection time, cut unplanned downtime, improved demand forecasting, and automated clinical documentation.",
  keywords: [
    "AI case studies",
    "machine learning results",
    "AI ROI examples",
    "AI consulting results",
    "production AI projects",
    "AI business value",
  ],
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title: `Case Studies | ${SITE_NAME}`,
    description:
      "Every project below went to production and delivered measurable business value. See the work.",
    url: `${SITE_URL}/case-studies`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies | ${SITE_NAME}`,
    description:
      "Real AI results. Fraud detection. Predictive maintenance. Demand forecasting. Clinical NLP.",
  },
};

// ─── Static industry list (matches CASE_STUDIES.industry values) ──────────────

const INDUSTRIES = [
  "All",
  "Financial Services",
  "Manufacturing",
  "Retail & E-Commerce",
  "Healthcare & Life Sciences",
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Decorative background circles */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-white/5 blur-2xl"
      />
      {/* Small accent dot */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/3 h-3 w-3 rounded-full bg-accent-light/40"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Overline */}
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Proven Results
          </p>

          <h1
            className={cn(
              "font-heading font-bold",
              "text-display-md md:text-display-lg",
              "leading-tight tracking-tight",
              "text-white"
            )}
          >
            Don&apos;t Take Our Word for It.{" "}
            <span className="text-accent-light">See the Work.</span>
          </h1>

          <p className="mt-6 font-body text-base leading-relaxed text-white/75 md:text-lg max-w-2xl mx-auto">
            Every project below went to production and delivered measurable
            business value. No slides. No mock-ups. Real systems, real clients,
            real outcomes.
          </p>

          {/* Stats strip */}
          <div
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-10"
            aria-label="Impact summary"
          >
            {[
              { stat: "4", label: "Production AI systems" },
              { stat: "$10M+", label: "Client value generated" },
              { stat: "100%", label: "Projects shipped to prod" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="font-heading text-3xl md:text-4xl font-bold text-white">
                  {stat}
                </span>
                <span className="font-body text-xs text-white/50 text-center leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <>
      <Hero />

      {/* Filter + Grid — client component handles filtering */}
      <SectionWrapper bg="light" id="case-studies-grid">
        <RevealOnScroll>
          <SectionHeading
            overline="Client Work"
            heading="Production AI. Measurable Impact."
            subheading="Filter by industry to find the projects most relevant to your business."
            align="center"
          />
        </RevealOnScroll>

        {/*
          CaseStudyFilters is a client component that owns the selected-industry
          state and renders the filter pills + the filtered card grid.
          We pass CASE_STUDIES down from the server so data fetching stays
          on the server side.
        */}
        <CaseStudyFilters caseStudies={CASE_STUDIES} industries={[...INDUSTRIES]} />
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Be Our Next Case Study?"
        body="Book a 30-minute discovery call. We'll scope a use case specific to your business and give you a clear picture of expected ROI before you commit to anything."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="View Our Services"
        secondaryCtaHref="/services"
      />
    </>
  );
}
