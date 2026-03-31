import type { Metadata } from "next";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Academy | Aiquire",
  description:
    "Build AI capability inside your organisation. Training that sticks, delivered by practitioners who've done the work.",
};

// ─── Icon resolver ────────────────────────────────────────────────────────────
// Note: This remains a server-side component. Lucide icons are rendered as SVGs.

type LucideIconComponent = ForwardRefExoticComponent<
  LucideProps & RefAttributes<SVGSVGElement>
>;

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const icons = LucideIcons as unknown as Record<string, LucideIconComponent>;
  const Icon = icons[name] ?? icons["HelpCircle"];

  return (
    <Icon
      className={cn("h-10 w-10 text-accent", className)}
      strokeWidth={1.75}
      aria-hidden="true"
    />
  );
}

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
        AI Academy
      </span>
    </nav>
  );
}

// ─── Programme Card ───────────────────────────────────────────────────────────

interface ProgrammeCardProps {
  title: string;
  meta: string;
  audience: string;
  body: string;
  deliverables: string[];
  index: number;
}

function ProgrammeCard({
  title,
  meta,
  audience,
  body,
  deliverables,
  index,
}: ProgrammeCardProps) {
  return (
    <RevealOnScroll delay={index * 100}>
      <article
        className={cn(
          "flex flex-col h-full",
          "rounded-2xl border border-border bg-white",
          "p-8",
          "shadow-sm transition-all duration-300",
          "hover:shadow-md hover:border-accent/30"
        )}
      >
        {/* Number badge */}
        <span
          className={cn(
            "mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full",
            "bg-accent text-white font-mono text-sm font-bold shrink-0"
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-textPrimary mb-3 leading-snug">
          {title}
        </h3>

        {/* Meta badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full",
              "border border-accent/20 bg-bgBlue",
              "px-3 py-1",
              "font-mono text-[10px] font-medium uppercase tracking-widest text-accent"
            )}
          >
            {meta}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-full",
              "border border-border bg-bgLight",
              "px-3 py-1",
              "font-mono text-[10px] font-medium uppercase tracking-widest text-textSecondary"
            )}
          >
            {audience}
          </span>
        </div>

        {/* Body */}
        <p className="font-body text-sm leading-relaxed text-textSecondary mb-6 flex-1">
          {body}
        </p>

        {/* Deliverables */}
        <div
          className={cn(
            "rounded-xl border border-accent/15 bg-bgBlue",
            "px-5 py-4"
          )}
        >
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
            Deliverables
          </p>
          <ul className="space-y-1.5">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-body text-xs leading-relaxed text-textSecondary"
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </RevealOnScroll>
  );
}

// ─── Programme data ───────────────────────────────────────────────────────────

const PROGRAMMES: ProgrammeCardProps[] = [
  {
    index: 0,
    title: "AI Literacy Workshop",
    meta: "Half-day workshop · In-person or virtual",
    audience: "C-suite, board, senior leadership",
    body: "A half-day executive session on AI capabilities, risks, and strategic opportunities. Designed for leadership teams who need to make informed decisions about AI investment without becoming technologists. Practical, provocative, and grounded in real business cases.",
    deliverables: [
      "Workshop materials",
      "Recording",
      "Resource guide",
      "Q&A session",
    ],
  },
  {
    index: 1,
    title: "AI Tools Hands-On Training",
    meta: "1–2 day intensive · In-person or virtual",
    audience: "All staff · Function-specific cohorts",
    body: "Practical training on prompt engineering and the AI tools your team is already using — ChatGPT, Claude, Copilot, and more. Participants leave with a personal prompt library, best practice cheat sheets, and the confidence to use AI daily.",
    deliverables: [
      "Training sessions",
      "Prompt libraries",
      "Cheat sheets",
      "Completion certificates",
    ],
  },
  {
    index: 2,
    title: "AI Champions Program",
    meta: "4–6 week programme",
    audience: "Mid-market organisations scaling AI",
    body: "A 4–6 week programme to develop internal AI power users who will drive adoption across your organisation. Champions get deeper training, playbooks, ongoing support, and a community to learn from each other. This is your internal AI movement, not just a training exercise.",
    deliverables: [
      "Champion training",
      "Playbooks",
      "Ongoing support",
      "Slack/Teams community setup",
    ],
  },
  {
    index: 3,
    title: "AI Policy & Guidelines Development",
    meta: "2–3 week engagement",
    audience: "Operations, legal, leadership",
    body: "Before your team goes all-in on AI tools, you need the guardrails. We create your acceptable use policy, security guidelines, data handling rules, and approval workflows — practical documentation that balances governance with usability.",
    deliverables: [
      "AI acceptable use policy",
      "Security guidelines",
      "Data handling rules",
      "Approval workflows",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AiAcademyPage() {
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
          
          {/* Icon badge */}
          <div
            className={cn(
              "mb-6 inline-flex h-16 w-16 items-center justify-center",
              "rounded-2xl border border-accent/30 bg-accent/10"
            )}
          >
            <ServiceIcon name="GraduationCap" className="h-8 w-8 text-accent-light" />
          </div>

          {/* Overline pill */}
          <p
            className={cn(
              "mb-5 inline-block rounded-full border border-accent/30 bg-accent/10",
              "px-4 py-1.5",
              "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-light"
            )}
          >
            AI Academy
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
            Build AI Capability Inside Your Organisation
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "mt-6 max-w-2xl",
              "font-body text-lg leading-relaxed text-white/75"
            )}
          >
            Technology without capability is a liability. The AI Academy ensures
            your people don&apos;t just have AI tools — they know how to use them,
            champion them, and govern them. Training that sticks, delivered by
            practitioners who&apos;ve done the work.
          </p>

          {/* Pull quote */}
          <div
            className={cn(
              "mt-10 max-w-2xl",
              "rounded-xl border border-white/15 bg-white/8",
              "px-6 py-5"
            )}
          >
            <p
              aria-hidden="true"
              className="mb-1 font-heading text-3xl leading-none text-accent-light/40 select-none"
            >
              &ldquo;
            </p>
            <p className="font-body text-base italic leading-relaxed text-white/80">
              The organisations winning with AI have one thing in common:
              internal AI champions who drive adoption from within.
            </p>
          </div>

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
              Book a Call
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

      {/* ── 2. FOUR TRAINING PROGRAMMES ─────────────────────────────────── */}
      <SectionWrapper bg="light" id="programmes">
        <SectionHeading
          overline="Training Programmes"
          heading="Four Ways We Build AI Capability"
          subheading="Each programme is designed for a specific audience and outcome. Mix and match based on your organisation's maturity and goals."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROGRAMMES.map((programme) => (
            <ProgrammeCard key={programme.title} {...programme} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── 3. HOW WE TRAIN ─────────────────────────────────────────────── */}
      <SectionWrapper bg="white" id="methodology">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: heading */}
          <RevealOnScroll>
            <SectionHeading
              overline="Our Methodology"
              heading="Training That Actually Changes How People Work"
              align="left"
            />

            <div className="mt-8 space-y-3">
              {[
                "Built around your actual tools, workflows, and real business problems",
                "Experiential and iterative — rooted in Design Thinking principles",
                "Participants leave with outputs they use on Monday morning",
                "No slides that gather dust — hands-on sessions throughout",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 font-body text-sm text-textSecondary"
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
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Right: pull quote card */}
          <RevealOnScroll delay={120}>
            <div
              className={cn(
                "rounded-2xl border border-accent/25 bg-bgBlue",
                "p-10 md:p-12"
              )}
            >
              <p
                aria-hidden="true"
                className="mb-4 font-heading text-5xl leading-none text-accent/20 select-none"
              >
                &ldquo;
              </p>
              <p className="font-body text-lg leading-relaxed text-textSecondary mb-0">
                Our training methodology is rooted in Design Thinking
                principles: experiential, iterative, and human-centred. We
                don&apos;t lecture. We facilitate. Sessions are built around your
                actual tools, your actual workflows, and real problems from
                your business.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 4. CLAUDE TRAINING CROSSLINK ────────────────────────────────── */}
      <SectionWrapper bg="blue" id="claude-training">
        <RevealOnScroll>
          <div
            className={cn(
              "flex flex-col md:flex-row md:items-center md:justify-between",
              "gap-8",
              "rounded-2xl border border-accent/25 bg-white",
              "p-8 md:p-10",
              "shadow-sm"
            )}
          >
            {/* Text block */}
            <div className="flex-1">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Related Programme
              </p>
              <h2
                className={cn(
                  "font-heading font-bold text-textPrimary",
                  "text-2xl md:text-3xl",
                  "leading-tight tracking-tight mb-4"
                )}
              >
                Looking for Claude-specific training?
              </h2>
              <p className="font-body text-base leading-relaxed text-textSecondary max-w-lg">
                Our dedicated Claude Training Practice offers structured
                programmes for both business teams and engineering teams — from
                Claude Cowork mastery to Claude Code deployment at production
                scale.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start md:items-center gap-3 md:shrink-0">
              <Link
                href="/claude-training"
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
                Explore Claude Training
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
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
          </div>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 5. CTA BANNER ───────────────────────────────────────────────── */}
      <CTABanner
        heading="Talk to an AI Consultant"
        body="Tell us about your team and your goals. We'll recommend the right programme and build a schedule that fits around your business."
        ctaText="Book a Call"
        ctaHref="/contact"
        secondaryCtaText="View All Services"
        secondaryCtaHref="/services"
      />
    </>
  );
}
