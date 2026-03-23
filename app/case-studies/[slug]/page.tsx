import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | ${SITE_NAME} Success Story`,
    description: study.challenge,
  };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) notFound();
  const highlightStats = study.highlightStats?.length ? study.highlightStats : study.results.slice(0, 6);
  const benefits = study.benefits?.length ? study.benefits : study.results;
  const challengeQuote = study.quotes?.find((quote) => quote.section === "challenge") ?? study.quotes?.[0];
  const solutionQuote = study.quotes?.find((quote) => quote.section === "solution");
  const benefitsQuote =
    study.quotes?.find((quote) => quote.section === "benefits")
    ?? (study.quotes && !study.quotes.some((quote) => quote.section) ? study.quotes[1] : undefined);
  const solutionImages = study.solutionImages?.length
    ? study.solutionImages
    : study.secondaryImage
      ? [{ src: study.secondaryImage, alt: `${study.title} Interface` }]
      : [];

  function renderQuoteCard(quote: NonNullable<typeof study.quotes>[number]) {
    return (
      <div className="py-10 md:py-12 border-y border-border/50 relative">
        <blockquote className="border-l-4 border-accent pl-6 py-3 relative">
          <Quote className="absolute -top-8 -left-4 h-16 w-16 text-accent/5 -z-10" />
          <p className="text-xl md:text-2xl font-body text-textPrimary leading-relaxed mb-6 italic font-medium">
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
              {quote.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-primary text-lg">{quote.author}</p>
              <p className="text-sm text-textSecondary font-medium tracking-wide">{quote.role}</p>
            </div>
          </footer>
        </blockquote>
      </div>
    );
  }

  return (
    <div className="bg-bgLight min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/60 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          <div className="max-w-4xl">
            <span
              className="inline-block rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] mb-5 border"
              style={{
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              {study.industry}
            </span>
            <h1 className="font-heading font-bold text-white text-display-md md:text-display-lg leading-tight tracking-tight mb-4">
              {study.title}
            </h1>
            {study.subtitle && (
              <p className="text-lg md:text-[1.65rem] text-white/80 font-body leading-relaxed max-w-2xl mb-8">
                {study.subtitle}
              </p>
            )}

            {/* High-Level Stats */}
            <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3 sm:gap-4">
              {highlightStats.map((result, idx) => {
                const parts = result.split(" ");
                const val = parts[0];
                const rest = parts.slice(1).join(" ");
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/25 bg-white/10 px-4 py-4 shadow-sm backdrop-blur-[2px] sm:min-h-[84px] sm:px-5 sm:py-4"
                  >
                    <p className="font-heading text-3xl font-bold leading-none text-white whitespace-nowrap sm:text-4xl">
                      {val}
                    </p>
                    <p className="mt-3 font-body text-[11px] font-semibold leading-tight text-white/75">
                      {rest}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Client & Challenge Section */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto space-y-14 md:space-y-16">
          <div className="space-y-12 md:space-y-14">
            {study.about && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-5 flex items-center gap-4">
                    <span className="h-px w-8 bg-accent/30" /> About
                  </h2>
                  <p className="text-lg text-textSecondary leading-relaxed border-l-4 border-accent pl-6 py-2 bg-bgLight/30 rounded-r-2xl">
                    {study.about}
                  </p>
                </div>

                {/* Subtle Metadata Grid */}
                {(study.companySize || study.duration || study.teamSize) && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border/50">
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 opacity-60">Industry</p>
                      <p className="text-textPrimary font-semibold">{study.industry}</p>
                    </div>
                    {study.companySize && (
                      <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 opacity-60">Company Size</p>
                        <p className="text-textPrimary font-semibold">{study.companySize}</p>
                      </div>
                    )}
                    {study.duration && (
                      <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 opacity-60">Duration</p>
                        <p className="text-textPrimary font-semibold">{study.duration}</p>
                      </div>
                    )}
                    {study.teamSize && (
                      <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 opacity-60">Team Size</p>
                        <p className="text-textPrimary font-semibold">{study.teamSize}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <RevealOnScroll>
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-5 flex items-center gap-4">
                  <span className="h-px w-8 bg-accent/30" /> Challenge
                </h2>
                {study.challengeIntro && (
                  <p className="font-semibold text-primary mb-4 text-base">{study.challengeIntro}</p>
                )}
                <div className="prose prose-lg max-w-none text-textSecondary font-body leading-relaxed">
                  <p>{study.challengeDetail || study.challenge}</p>
                </div>
              </div>
            </RevealOnScroll>

            {challengeQuote && renderQuoteCard(challengeQuote)}
          </div>
        </div>
      </SectionWrapper>

      {/* Solution Section */}
      <SectionWrapper bg="light">
        <div className="max-w-4xl mx-auto space-y-14 md:space-y-16">
          <RevealOnScroll>
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-primary flex items-center gap-4">
                  <span className="h-px w-8 bg-accent/30" /> Solution
                </h2>
                {study.solutionIntro && (
                  <p className="font-semibold text-primary mb-4 text-base">{study.solutionIntro}</p>
                )}
                <div className="prose prose-lg max-w-none text-textSecondary font-body leading-relaxed">
                  <p>{study.solutionDetail || study.solution}</p>
                </div>
              </div>

              {solutionQuote && renderQuoteCard(solutionQuote)}

              {solutionImages.length > 0 && (
                <div
                  className={cn(
                    "grid gap-12",
                    solutionImages.length > 1 && !["digital-assistant-clinic", "learning-management-system-antigravity"].includes(study.slug) ? "md:grid-cols-2" : "grid-cols-1"
                  )}
                >
                  {solutionImages.map((image, index) => (
                    <div key={image.src} className="relative group space-y-4">
                      <div className="absolute inset-x-0 -bottom-12 -top-12 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                      <div className="aspect-[16/10] bg-white rounded-3xl border border-border shadow-2xl relative overflow-hidden group-hover:border-accent/30 transition-all duration-500">
                        <img
                          src={image.src}
                          alt={image.alt || `${study.title} Interface ${index + 1}`}
                          className={cn(
                            "w-full h-full group-hover:scale-[1.02] transition-transform duration-700",
                            study.slug === "digital-assistant-clinic" ? "object-contain bg-white p-2 md:p-3" : "object-cover"
                          )}
                        />
                      </div>
                      {(image.title || image.caption) && (
                        <div className="text-center px-4">
                          {image.title && (
                            <p className="font-heading text-lg font-bold text-primary">{image.title}</p>
                          )}
                          {image.caption && (
                            <p className="text-sm text-textSecondary italic mt-1">{image.caption}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto space-y-14 md:space-y-16">
          <div className="space-y-12 md:space-y-14">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-primary flex items-center gap-4">
                  <span className="h-px w-8 bg-accent/30" /> Benefits
                </h2>
                {study.benefitsIntro ? (
                  <p className="text-lg text-textSecondary font-medium border-l-4 border-accent/20 pl-6">{study.benefitsIntro}</p>
                ) : study.slug === 'ai-service-desk-copilot' && (
                  <p className="text-lg text-textSecondary font-medium border-l-4 border-accent/20 pl-6">Insurance Company transforms operations from a challenge to a competitive advantage</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {benefits.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-bgLight border border-border text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="font-body text-base text-textPrimary leading-relaxed font-medium">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {benefitsQuote && renderQuoteCard(benefitsQuote)}

            {study.ongoingVisibility && (
              <div className="p-12 rounded-[2rem] bg-primary text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent pointer-events-none" />
                <TrendingUp className="absolute -bottom-8 -right-8 h-48 w-48 text-white/5 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="text-accent-light" /> Ongoing Visibility
                  </h3>
                  <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 font-medium">
                    {study.ongoingVisibility}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTABanner
        heading="Achieve Similar Results for Your Business"
        body="Let&apos;s build a production-ready AI solution tailored to your specific workflows and business goals."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="See All Case Studies"
        secondaryCtaHref="/case-studies"
      />
    </div>
  );
}
