import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllCmsPosts } from "@/lib/blog-cms";
import { formatDate } from "@/lib/utils";

// ─── Static params + metadata ─────────────────────────────────────────────────

export function generateStaticParams() {
  // Exclude services that have their own dedicated static pages
  return SERVICES.filter((s) => !(s as { customPage?: boolean }).customPage).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiquire.ai";
  // Determine canonical mapping for SEO routes
  const seoSlugs: Record<string, string> = {
    "ai-strategy-consulting": "/ai-consulting",
    "generative-ai-llm": "/generative-ai",
    "ai-ml-development": "/ai-engineering",
    "ai-powered-software": "/ai-development-services",
  };
  const canonicalPath = seoSlugs[slug] || `/services/${slug}`;

  return {
    title: `${service.title} | AI Consulting & Engineering`,
    description: service.description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
    },
    openGraph: {
      title: `${service.title} — AI Consulting | Aiquire`,
      description: service.description,
      type: "article",
      url: `${siteUrl}${canonicalPath}`,
      images: [
        {
          url: "/og-image.png", // Generic for now, but better than none
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Aiquire AI Consulting`,
      description: service.description,
    },
  };
}

// ─── Icon component (inline SVG, server-safe) ────────────────────────────────

function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const cls = cn("h-10 w-10 text-accent", className);

  const icons: Record<string, React.ReactNode> = {
    Lightbulb: (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    BrainCircuit: (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
    Sparkles: (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    ),
    Code2: (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    Database: (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    Settings2: (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
  };

  return <>{icons[name] ?? null}</>;
}

// ─── Process phases data ──────────────────────────────────────────────────────

interface ProcessPhase {
  number: string;
  label: string;
  description: string;
}

const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: "01",
    label: "Discover",
    description:
      "We immerse ourselves in your business — stakeholder interviews, data audits, process mapping, and competitive analysis — to surface what is really happening and where AI can help.",
  },
  {
    number: "02",
    label: "Define",
    description:
      "We synthesize findings into a prioritized set of AI use cases, each with modeled ROI, technical feasibility assessment, and an execution roadmap your leadership can approve.",
  },
  {
    number: "03",
    label: "Develop",
    description:
      "We prototype, experiment, and validate before we build. Multiple architectural approaches are tested against your data before we commit to production-grade implementation.",
  },
  {
    number: "04",
    label: "Deliver",
    description:
      "We ship production systems integrated into your workflows, set up monitoring and MLOps governance, train your teams, and track results against agreed performance KPIs.",
  },
];

// ─── Why It Matters copy per service ─────────────────────────────────────────

const WHY_IT_MATTERS: Record<string, { headline: string; body: string }> = {
  "ai-strategy-consulting": {
    headline: "Most AI initiatives fail before they begin.",
    body: "Research consistently shows that 80%+ of enterprise AI projects never reach production. The cause is almost always the same: organizations jump to solutions before clearly defining the problem. Our strategy practice exists to close that gap — ensuring every dollar you invest in AI is directed at opportunities with proven business value and a realistic path to execution.",
  },
  "ai-ml-development": {
    headline: "Generic models are not enough.",
    body: "Off-the-shelf AI products are built for the average use case. Your competitive advantage comes from models trained on your proprietary data, optimized for your specific metrics, and integrated with your unique workflows. Custom ML development is where AI goes from interesting demo to genuine business differentiator.",
  },
  "generative-ai-llm": {
    headline: "Generative AI is powerful. Generative AI that hallucinates is dangerous.",
    body: "The difference between a generative AI deployment that creates value and one that creates liability comes down to architecture, testing, and governance. We build production LLM systems with grounding, guardrails, and evaluation frameworks that ensure your AI is both useful and trustworthy.",
  },
  "ai-powered-software": {
    headline: "A model without software is not a product.",
    body: "Most AI consultancies stop at the model. We build the full product — the interfaces, integrations, APIs, and automation workflows that turn an ML output into a business tool your teams actually use. Intelligence embedded in software is where AI creates lasting operational leverage.",
  },
  "data-engineering-analytics": {
    headline: "You cannot run AI on bad data infrastructure.",
    body: "The highest-returning AI investments often start with fixing data foundations. Fragmented pipelines, inconsistent schemas, and unreliable data quality are force multipliers for failure. Investing in data engineering is not a prerequisite cost — it is a strategic advantage that compounds as every subsequent AI initiative runs on a reliable, scalable substrate.",
  },
  "mlops-infrastructure": {
    headline: "A model that isn't monitored is a liability.",
    body: "Production ML systems degrade silently. Data drifts, distributions shift, and model accuracy erodes — often without any obvious system error. MLOps is the discipline that keeps your AI investments performing. Without it, you're flying blind on multi-million-dollar infrastructure.",
  },
};

// ─── Sub-service feature card ─────────────────────────────────────────────────

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
}

function FeatureCard({ index, title, description }: FeatureCardProps) {
  return (
    <RevealOnScroll delay={index * 80}>
      <div
        className={cn(
          "flex flex-col h-full",
          "rounded-2xl border border-border bg-white",
          "p-7",
          "shadow-sm transition-shadow duration-300 hover:shadow-md hover:border-accent/25"
        )}
      >
        {/* Numbered badge */}
        <span
          className={cn(
            "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full",
            "bg-accent text-white font-mono text-sm font-bold shrink-0"
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

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

// ─── Process phase card ───────────────────────────────────────────────────────

function ProcessPhaseCard({
  phase,
  index,
}: {
  phase: ProcessPhase;
  index: number;
}) {
  const isLast = index === PROCESS_PHASES.length - 1;

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
            {phase.number}
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
          <h3 className="font-heading font-bold text-xl text-textPrimary mb-1.5 leading-snug">
            {phase.label}
          </h3>
          <p className="font-body text-base leading-relaxed text-textSecondary">
            {phase.description}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb({ serviceTitle }: { serviceTitle: string }) {
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
      <span className="text-white/90 truncate max-w-[220px]" aria-current="page">
        {serviceTitle}
      </span>
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whyItMatters = WHY_IT_MATTERS[service.slug] ?? {
    headline: "AI that creates real business impact.",
    body: service.fullDescription,
  };

  // For the AI Strategy service, show all 8 sub-services; otherwise all
  const allSubServices = service.subServices;

  const allPosts = await getAllCmsPosts();
  const categoryMap: Record<string, string> = {
    "ai-strategy-consulting": "AI Strategy",
    "generative-ai-llm": "Generative AI",
    "ai-ml-development": "Engineering",
  };
  const targetCategory = categoryMap[service.slug];
  const relatedPosts = allPosts
    .filter((p) => (targetCategory ? p.category === targetCategory : true))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.title, item: `/services/${slug}` },
        ]}
      />
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
          {/* Breadcrumb */}
          <Breadcrumb serviceTitle={service.title} />

          {/* Icon badge */}
          <div
            className={cn(
              "mb-6 inline-flex h-16 w-16 items-center justify-center",
              "rounded-2xl border border-accent/30 bg-accent/10"
            )}
          >
            <ServiceIcon name={service.icon} className="h-8 w-8 text-accent-light" />
          </div>

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
            {service.title}
          </h1>

          {/* Full description */}
          <p
            className={cn(
              "mt-6 max-w-2xl",
              "font-body text-lg leading-relaxed text-white/75"
            )}
          >
            {service.fullDescription}
          </p>

          {/* CTA */}
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
              Book a Discovery Call
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

      {/* ── 2. OVERVIEW: What This Service Includes ────────────────────── */}
      <SectionWrapper bg="white" id="overview">
        <SectionHeading
          overline="What's Included"
          heading="What This Service Delivers"
          subheading={`A breakdown of every capability within our ${service.shortTitle} practice — and the specific outcomes each one drives.`}
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allSubServices.map((sub, i) => (
            <FeatureCard
              key={sub.title}
              index={i}
              title={sub.title}
              description={sub.desc}
            />
          ))}
        </div>

        {/* AI Strategy expanded callout: Business & Process Consulting, Change Management, Domain Consulting */}
        {service.slug === "ai-strategy-consulting" && (
          <RevealOnScroll delay={200}>
            <div
              className={cn(
                "mt-10 rounded-2xl border border-accent/20 bg-bgBlue",
                "p-8 md:p-10"
              )}
            >
              <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Consulting Depth
              </p>
              <h3 className="font-heading font-bold text-2xl text-textPrimary mb-4 leading-snug">
                Beyond Technology: The Business Layer
              </h3>
              <p className="font-body text-base leading-relaxed text-textSecondary mb-8 max-w-3xl">
                Most AI consultancies jump straight to algorithms. We start by
                deeply understanding your business model, operating processes,
                and organizational culture — because the best AI strategy is
                worthless if it cannot be adopted.
              </p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {[
                  {
                    title: "Business & Process Consulting",
                    desc: "We map your value chain, identify inefficiencies, and model the true cost of manual processes before recommending where AI applies. Technology follows business understanding — never the reverse.",
                  },
                  {
                    title: "Change Management & Adoption",
                    desc: "A model no one uses is a failed project. We design structured adoption programmes — stakeholder communication, training, workflow redesign, and incentive alignment — to ensure your teams embrace AI rather than resist it.",
                  },
                  {
                    title: "Domain Consulting",
                    desc: "Our consultants carry deep domain expertise across healthcare, financial services, retail, manufacturing, and logistics. Industry context shapes every recommendation we make — from data strategy to use case prioritization.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={cn(
                      "rounded-xl border border-accent/15 bg-white p-6",
                      "shadow-sm"
                    )}
                  >
                    <span
                      className={cn(
                        "mb-3 inline-flex h-7 w-7 items-center justify-center",
                        "rounded-full bg-accent text-white font-mono text-xs font-bold"
                      )}
                    >
                      {i + 1}
                    </span>
                    <h4 className="font-heading font-bold text-base text-textPrimary mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed text-textSecondary">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}
      </SectionWrapper>

      {/* ── 3. WHY IT MATTERS ──────────────────────────────────────────── */}
      <SectionWrapper bg="blue" id="why-it-matters">
        <RevealOnScroll>
          <div
            className={cn(
              "mx-auto max-w-4xl",
              "rounded-2xl border border-accent/25 bg-white",
              "p-10 md:p-14",
              "shadow-sm"
            )}
          >
            {/* Decorative quote mark */}
            <p
              aria-hidden="true"
              className="mb-4 font-heading text-6xl leading-none text-accent/20 select-none"
            >
              &ldquo;
            </p>

            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Why It Matters
            </p>

            <h2
              className={cn(
                "font-heading font-bold text-textPrimary",
                "text-display-sm",
                "leading-tight tracking-tight mb-5"
              )}
            >
              {whyItMatters.headline}
            </h2>

            <p className="font-body text-lg leading-relaxed text-textSecondary max-w-3xl">
              {whyItMatters.body}
            </p>

            {/* Supporting stat strip */}
            <div
              className={cn(
                "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3",
                "border-t border-border pt-8"
              )}
            >
              {[
                { value: "40+", label: "AI projects delivered to production" },
                { value: "3.2x", label: "Average ROI within 12 months" },
                { value: "92%", label: "Client retention rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-heading font-bold text-3xl text-accent leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-textSecondary leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 4. PROCESS ─────────────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="process">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: heading block */}
          <div className="lg:sticky lg:top-28">
            <RevealOnScroll>
              <SectionHeading
                overline="How We Work"
                heading={`How We Approach ${service.shortTitle}`}
                subheading="Every engagement follows the same disciplined Double Diamond process — adapted to your context, timeline, and goals."
                align="left"
              />

              <div
                className={cn(
                  "mt-8 rounded-xl border border-accent/20 bg-bgBlue px-6 py-5"
                )}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  What you can expect
                </p>
                <ul className="space-y-2">
                  {[
                    "A clear brief and success criteria before any work begins",
                    "Weekly progress updates with no surprises",
                    "Honest recommendations — including when not to use AI",
                    "Knowledge transfer so your team owns the output",
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

          {/* Right: process timeline */}
          <div className="space-y-0">
            {PROCESS_PHASES.map((phase, i) => (
              <ProcessPhaseCard key={phase.number} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. RELATED CASE STUDY PLACEHOLDER ─────────────────────────── */}
      <SectionWrapper bg="light" id="case-study">
        <RevealOnScroll>
          <div
            className={cn(
              "relative overflow-hidden",
              "rounded-2xl border border-border bg-white",
              "p-8 md:p-12",
              "shadow-sm"
            )}
          >
            {/* Decorative element */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/5"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 right-24 h-24 w-24 rounded-full bg-bgBlue"
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Text block */}
              <div className="flex-1">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  Case Study
                </p>
                <h2
                  className={cn(
                    "font-heading font-bold text-textPrimary",
                    "text-2xl md:text-3xl",
                    "leading-tight tracking-tight mb-4"
                  )}
                >
                  See How We Applied This in Practice
                </h2>
                <p className="font-body text-base leading-relaxed text-textSecondary max-w-lg">
                  Real projects. Real data. Real results. Explore how we have
                  delivered measurable outcomes for clients across industries
                  using the same{" "}
                  <span className="font-semibold text-textPrimary">
                    {service.shortTitle}
                  </span>{" "}
                  capabilities described on this page.
                </p>

                {/* Teaser bullets */}
                <ul className="mt-5 space-y-2">
                  {[
                    "Documented business outcomes and ROI",
                    "Methodology walkthrough from discovery to delivery",
                    "Technology and architecture decisions explained",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-textSecondary"
                    >
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8l3.5 3.5 6.5-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA block */}
              <div className="flex flex-col items-start md:items-center gap-4 md:shrink-0">
                {/* Placeholder thumbnail */}
                <div
                  className={cn(
                    "hidden md:flex flex-col items-center justify-center",
                    "h-32 w-52 rounded-xl",
                    "border-2 border-dashed border-accent/20 bg-bgBlue"
                  )}
                  aria-hidden="true"
                >
                  <svg
                    className="h-8 w-8 text-accent/30 mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M9 9h6M9 12h6M9 15h4" />
                  </svg>
                  <p className="font-mono text-[10px] text-accent/40 uppercase tracking-wider">
                    Case Study
                  </p>
                </div>

                <Link
                  href="/case-studies"
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
                  View Case Studies
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    "font-body text-sm text-textSecondary underline-offset-2",
                    "hover:text-accent hover:underline",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:underline"
                  )}
                >
                  Or talk to us directly
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 6. RELATED SERVICES ────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="related-services">
        <SectionHeading
          overline="Explore More"
          heading="Related Services"
          subheading="Our practice areas are deeply interconnected. Explore how the capabilities below complement what you've just read."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((related, i) => (
              <RevealOnScroll key={related.slug} delay={i * 80}>
                <Link
                  href={`/services/${related.slug}`}
                  className={cn(
                    "group flex items-start gap-4 h-full",
                    "rounded-xl border border-border bg-bgLight",
                    "p-6",
                    "transition-all duration-200",
                    "hover:border-accent/30 hover:bg-white hover:shadow-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center",
                      "rounded-xl bg-bgBlue border border-accent/15",
                      "transition-colors duration-200 group-hover:bg-accent/10"
                    )}
                  >
                    <ServiceIcon
                      name={related.icon}
                      className="h-5 w-5 text-accent"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-textPrimary mb-1 leading-snug group-hover:text-accent transition-colors duration-200">
                      {related.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-textSecondary line-clamp-2">
                      {related.description}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
        </div>
      </SectionWrapper>

      {/* ── 6.5 RELATED INSIGHTS ────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <SectionWrapper bg="light" id="insights">
          <RevealOnScroll>
            <SectionHeading
              overline="Internal Insights"
              heading={`Latest on ${targetCategory || "AI"}`}
              subheading="Practical perspectives from our team on strategy, engineering, and deployment."
              align="left"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <RevealOnScroll key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "group block h-full",
                    "rounded-2xl border border-border bg-white p-6",
                    "shadow-sm transition-all duration-300 hover:shadow-xl",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  )}
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-bgBlue px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent border border-accent/10">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-3 font-heading font-bold text-lg text-primary leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-5 font-body text-sm text-textSecondary line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                    <time className="font-body text-xs text-textSecondary">
                      {formatDate(post.date)}
                    </time>
                    <span className="font-body text-xs font-semibold text-accent group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ── 7. CTA BANNER ─────────────────────────────────────────────── */}
      <CTABanner
        heading={`Ready to Get Started with ${service.shortTitle}?`}
        body="Book a free 30-minute discovery call. No sales pitch — just an honest conversation about what AI can realistically do for your business."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        secondaryCtaText="See All Services"
        secondaryCtaHref="/services"
      />
    </>
  );
}
