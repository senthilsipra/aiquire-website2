import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DoubleDiamondDiagram } from "@/components/ui/DoubleDiamondDiagram";
import { DIAMOND_PHASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Methodology | Design Thinking for AI",
  description:
    "Aiquire applies the Double Diamond framework to AI consulting. Rigorous discovery, evidence-based decisions, and seamless engineering handoff for production AI.",
  keywords: [
    "AI consulting methodology",
    "double diamond AI",
    "design thinking for machine learning",
    "AI project roadmap",
    "discover define develop deliver AI",
  ],
  openGraph: {
    title: "Our Methodology | Design Thinking for AI",
    description:
      "How we work: design thinking for AI. A rigorous, proven process from discovery to production delivery.",
    url: "https://aiquire.ai/approach",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    title: "Consulting-led Discovery",
    body: "We don't send junior developers to your kickoff meeting. Senior consultants with deep domain experience lead every discovery phase — conducting stakeholder interviews, auditing your data, mapping your processes, and framing the right problem before a single line of code is written.",
    icon: "01",
  },
  {
    title: "Evidence-Based Decisions",
    body: "Every phase produces tangible artifacts — journey maps, opportunity matrices, prototype results, and business cases. You never have to take our word for it. You can see the evidence, challenge our assumptions, and make informed go/no-go decisions at each gate.",
    icon: "02",
  },
  {
    title: "Seamless Handoff",
    body: "Because our consultants and engineers work on the same team, there's no 'throwing over the wall.' The same people who ran your discovery sessions are the ones reviewing the model architecture. Context stays intact from kickoff to launch.",
    icon: "03",
  },
] as const;

const CASE_STUDY_PREVIEWS = [
  {
    title:
      "How we used the Discover phase to reframe a client's problem and save 6 months of misguided development",
    summary:
      "A regional bank came to us wanting to build a churn prediction model. After two weeks of discovery, we identified that churn wasn't the real problem — failed onboarding was. The reframe changed the solution entirely, and saved months of wasted engineering.",
    tags: ["Financial Services", "Discovery"],
    href: "/case-studies",
    phase: "DISCOVER",
  },
  {
    title:
      "From discovery to deployment: 47% downtime reduction in manufacturing",
    summary:
      "A Tier 1 automotive supplier needed to reduce unplanned downtime. We ran a full Double Diamond engagement — from sensor data audits and process mapping through prototype validation to a production predictive maintenance system.",
    tags: ["Manufacturing", "Predictive Maintenance"],
    href: "/case-studies",
    phase: "DELIVER",
  },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -right-36 h-[560px] w-[560px] rounded-full bg-accent/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            How We Work
          </p>
          <h1 className="font-heading font-bold text-white text-display-md md:text-display-lg leading-tight tracking-tight">
            How We Work: Design Thinking for AI
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-white/75 md:text-lg">
            Most AI engagements fail in the problem framing stage — not the
            engineering stage. We apply the Double Diamond framework to every
            project: a rigorous, proven process that ensures we&apos;re solving
            the right problem before we spend a single dollar building a
            solution.
          </p>

          {/* Phase badge row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {DIAMOND_PHASES.map((phase, i) => (
              <span
                key={phase.phase}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-1.5",
                  "border border-white/20 bg-white/10",
                  "font-body text-xs font-semibold text-white/90 tracking-wide"
                )}
              >
                <span className="font-mono text-white/50">
                  0{i + 1}
                </span>
                {phase.phase.charAt(0) + phase.phase.slice(1).toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Double Diamond Section ───────────────────────────────────────────────────

function DoubleDiamondSection() {
  return (
    <SectionWrapper bg="blue">
      <RevealOnScroll>
        <SectionHeading
          overline="The Framework"
          heading="The Double Diamond in Practice"
          subheading="Click or hover any quadrant to explore what we do in each phase. Every engagement moves through all four — no shortcuts."
          align="center"
        />
      </RevealOnScroll>

      {/* Full interactive diagram */}
      <RevealOnScroll delay={100} className="mt-14">
        <DoubleDiamondDiagram variant="full" />
      </RevealOnScroll>

      {/* Phase cards below the diagram */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DIAMOND_PHASES.map((phase, i) => (
          <RevealOnScroll key={phase.phase} delay={i * 80}>
            <div
              className={cn(
                "rounded-2xl border border-border bg-white p-6",
                "flex flex-col gap-4",
                "shadow-sm hover:shadow-md transition-all duration-200",
                "hover:border-accent/40 hover:-translate-y-0.5"
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs font-medium uppercase tracking-wider"
                  style={{
                    backgroundColor: `${phase.color}18`,
                    color: phase.color,
                  }}
                >
                  {phase.type}
                </span>
                <h3 className="font-heading font-bold text-primary text-lg leading-tight">
                  {phase.phase.charAt(0) + phase.phase.slice(1).toLowerCase()}
                </h3>
              </div>

              <p className="font-body text-sm leading-relaxed text-textSecondary">
                {phase.description}
              </p>

              <ul className="mt-auto space-y-1.5">
                {phase.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-center gap-2 font-body text-xs text-textSecondary"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
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
    </SectionWrapper>
  );
}

// ─── Differentiators ─────────────────────────────────────────────────────────

function Differentiators() {
  return (
    <SectionWrapper bg="white">
      <RevealOnScroll>
        <SectionHeading
          overline="Why It Works"
          heading="What Makes Our Approach Different"
          subheading="The Double Diamond is a proven framework. What sets Aiquire apart is how we execute it — with the discipline of a strategy firm and the velocity of a product engineering team."
          align="center"
        />
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {DIFFERENTIATORS.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 100}>
            <div
              className={cn(
                "relative rounded-2xl border border-border bg-bgLight p-8",
                "flex flex-col gap-5",
                "hover:border-accent/30 hover:bg-bgBlue/20",
                "transition-all duration-200",
                "overflow-hidden"
              )}
            >
              {/* Large decorative number */}
              <span
                aria-hidden="true"
                className="absolute -top-3 -right-2 font-heading font-bold text-8xl text-border/60 select-none leading-none"
              >
                {item.icon}
              </span>

              <span className="relative z-10 font-mono text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                {item.icon}
              </span>

              <h3 className="relative z-10 font-heading font-bold text-primary text-xl leading-tight">
                {item.title}
              </h3>

              <p className="relative z-10 font-body text-sm leading-relaxed text-textSecondary md:text-base">
                {item.body}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ─── Case Study Previews ──────────────────────────────────────────────────────

function CaseStudyPreviews() {
  return (
    <SectionWrapper bg="light">
      <RevealOnScroll>
        <SectionHeading
          overline="In the Wild"
          heading="The Double Diamond in Action"
          subheading="Frameworks only matter if they produce results. Here's how our approach has played out in real engagements."
          align="center"
        />
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CASE_STUDY_PREVIEWS.map((preview, i) => (
          <RevealOnScroll key={i} delay={i * 100}>
            <Link
              href={preview.href}
              className={cn(
                "group flex flex-col gap-5 rounded-2xl border border-border bg-white p-8",
                "shadow-sm hover:shadow-lg",
                "hover:border-accent/40",
                "transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              {/* Phase label */}
              <span className="inline-flex w-fit items-center rounded-full bg-bgBlue px-3 py-1 font-mono text-xs font-medium text-accent uppercase tracking-wider">
                {preview.phase}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-primary text-lg leading-snug group-hover:text-accent transition-colors duration-200 md:text-xl">
                {preview.title}
              </h3>

              {/* Summary */}
              <p className="font-body text-sm leading-relaxed text-textSecondary">
                {preview.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {preview.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full",
                      "border border-border bg-bgLight",
                      "px-3 py-0.5 font-body text-xs text-textSecondary"
                    )}
                  >
                    <Tag className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read more */}
              <div className="mt-auto flex items-center gap-1.5 font-body text-sm font-semibold text-accent group-hover:gap-2.5 transition-all duration-200">
                Read the full story
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={200} className="mt-8 text-center">
        <Link
          href="/case-studies"
          className={cn(
            "inline-flex items-center gap-2",
            "font-body text-sm font-semibold text-accent",
            "underline-offset-2 hover:underline",
            "transition-colors duration-200 hover:text-accent-dark"
          )}
        >
          View all case studies
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </Link>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ApproachPage() {
  return (
    <>
      <Hero />
      <DoubleDiamondSection />
      <Differentiators />
      <CaseStudyPreviews />
      <CTABanner
        heading="See How Our Approach Can Work for Your Business"
        body="Book a no-obligation discovery call. We'll listen to your challenge, tell you honestly whether AI is the right tool, and sketch a path forward — at no cost to you."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="Learn About Our Team"
        secondaryCtaHref="/about"
      />
    </>
  );
}
