import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/ui/CTABanner";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/constants";
import { CaseStudyFilters } from "./CaseStudyFilters";
import { CaseStudiesHero } from "./CaseStudiesHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Production AI Case Studies | SipraHub",
  description:
    "Discover how SipraHub drives measurable success with tailored solutions across industries and technologies. See the impact of our AI-powered innovations.",
  keywords: [
    "AI case studies",
    "machine learning results",
    "AI ROI examples",
    "AI automation business impact",
    "production AI engineering",
    "SipraHub case studies",
  ],
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title: "Production AI Case Studies | SipraHub",
    description:
      "Real results across domains and technologies. Discover how SipraHub drives measurable success.",
    url: `${SITE_URL}/case-studies`,
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Case Studies", item: "/case-studies" },
        ]}
      />
      
      <CaseStudiesHero />

      {/* Filter + Grid — client component handles filtering */}
      <SectionWrapper bg="light" id="case-studies-grid">
        <CaseStudyFilters caseStudies={CASE_STUDIES} />
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
