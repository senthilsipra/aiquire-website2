import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DoubleDiamondDiagram } from "@/components/ui/DoubleDiamondDiagram";
import { DIAMOND_PHASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aiquire was built at the intersection of management consulting and production AI engineering. Learn about our team, our design-thinking approach, and the values that guide every engagement.",
  keywords: [
    "AI consulting firm",
    "about Aiquire",
    "design thinking AI",
    "consulting AI team",
    "responsible AI",
  ],
  openGraph: {
    title: "About Us | Aiquire",
    description:
      "Built at the intersection of strategy and engineering. Meet the team behind the intelligence.",
    url: "https://aiquire.ai/about",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAM_MEMBERS = [
  {
    initials: "JR",
    name: "Jordan Reeves",
    title: "Managing Partner, Strategy",
    bio: "Former McKinsey engagement manager with 10+ years in AI transformation programs across Fortune 500 clients.",
    linkedin: "#",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    title: "Head of AI Engineering",
    bio: "Ex-Google Brain researcher and tech lead who built production ML systems serving hundreds of millions of users.",
    linkedin: "#",
  },
  {
    initials: "MK",
    name: "Marcus Klein",
    title: "Partner, Data & Analytics",
    bio: "Former Deloitte principal specializing in enterprise data architecture and cloud migration at scale.",
    linkedin: "#",
  },
  {
    initials: "AL",
    name: "Ava Lim",
    title: "Lead AI/ML Engineer",
    bio: "Ex-Amazon Alexa engineer with deep expertise in NLP, LLM fine-tuning, and real-time inference systems.",
    linkedin: "#",
  },
] as const;

const TECH_PARTNERS = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Snowflake",
  "Databricks",
  "OpenAI",
] as const;

const VALUES = [
  {
    title: "Results Over Hype",
    body: "We measure success by business impact, not model accuracy on a test set. Every engagement is anchored to metrics that matter: revenue, cost, risk, or customer experience.",
  },
  {
    title: "Radical Transparency",
    body: "No black boxes — not in our models, not in our process. We document our decisions, explain our trade-offs, and make sure you understand what you're deploying and why.",
  },
  {
    title: "Responsible AI by Default",
    body: "Bias testing, governance, and ethical considerations are built into every project from day one. Responsible AI is not a checkbox — it's a design constraint.",
  },
  {
    title: "Partnership, Not Dependency",
    body: "Our goal is to make you self-sufficient. We document everything, train your team, and structure engagements so that knowledge stays inside your organization long after we're gone.",
  },
  {
    title: "Team Amplification",
    body: "AI should elevate your people, not replace them. We design every solution to make your existing team faster, smarter, and more focused on high-value work. We've never once pitched a 'headcount reduction' — and we never will.",
  },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            About Aiquire
          </p>
          <h1 className="font-heading font-bold text-white text-display-md md:text-display-lg leading-tight tracking-tight">
            We&apos;re the Team Behind the Intelligence
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-white/75 md:text-lg">
            Most AI projects fail not because the technology doesn&apos;t work — but
            because the strategy was wrong, the problem was misframed, or the
            solution was never adopted. Aiquire was built to close that gap.
            We bridge the distance between AI ambition and operational reality
            by pairing consulting rigor with production-grade engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Where We Come From ───────────────────────────────────────────────────────

function WhereWeComeFrom() {
  return (
    <SectionWrapper bg="white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <RevealOnScroll>
          <SectionHeading
            overline="Our Origins"
            heading="Built at the Intersection of Strategy and Engineering"
            align="left"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="space-y-5 font-body text-base leading-relaxed text-textSecondary md:text-[1.0625rem]">
            <p>
              Our consulting practice was forged at the world&apos;s most demanding
              strategy firms — McKinsey, BCG, Deloitte, and Accenture. We know
              what good strategic analysis looks like, how to structure an
              engagement for a Fortune 500, and how to communicate complex
              recommendations to C-suite audiences who need to act on them.
            </p>
            <p>
              But we saw a pattern: consultants would hand off a beautiful
              strategy deck, and the AI initiative would stall in engineering
              for eighteen months. We decided to build a different kind of firm —
              one where the strategy and the engineering live in the same room,
              on the same team, working toward the same outcome.
            </p>
            <p>
              Our engineers have shipped production ML systems at Google, Meta,
              Amazon, and leading AI research labs. They don&apos;t just build
              prototypes — they build things that work at scale, that can be
              monitored, maintained, and improved over time. Together, we give
              clients both the roadmap and the vehicle to drive it.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

// ─── How We Think ─────────────────────────────────────────────────────────────

function HowWeThink() {
  return (
    <SectionWrapper bg="blue">
      <RevealOnScroll>
        <SectionHeading
          overline="Our Process"
          heading="Design Thinking Is Our Operating System"
          subheading="We apply the Double Diamond framework — trusted by the world's leading design and strategy firms — to every AI engagement. It ensures we solve the right problem before we build the right solution."
          align="center"
        />
      </RevealOnScroll>

      {/* DoubleDiamondDiagram */}
      <RevealOnScroll delay={100} className="mt-14">
        <DoubleDiamondDiagram variant="full" />
      </RevealOnScroll>

      {/* Phase activity cards */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DIAMOND_PHASES.map((phase, i) => (
          <RevealOnScroll key={phase.phase} delay={i * 80}>
            <div
              className={cn(
                "rounded-2xl border border-border bg-white p-6",
                "flex flex-col gap-4",
                "shadow-sm hover:shadow-md transition-shadow duration-200"
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center rounded-full bg-bgBlue px-2.5 py-0.5 font-mono text-xs font-medium text-accent uppercase tracking-wider"
                  style={{ color: phase.color }}
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

// ─── Values ───────────────────────────────────────────────────────────────────

function Values() {
  return (
    <SectionWrapper bg="white">
      <RevealOnScroll>
        <SectionHeading
          overline="Our Values"
          heading="What We Stand For"
          subheading="These aren't posted on a wall. They're embedded in how we scope projects, structure teams, and decide what we will and won't take on."
          align="center"
        />
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {VALUES.map((value, i) => (
          <RevealOnScroll key={value.title} delay={i * 80}>
            <div
              className={cn(
                "rounded-2xl border border-border bg-bgLight p-8",
                "hover:border-accent/40 hover:bg-bgBlue/30",
                "transition-all duration-200",
                "flex flex-col gap-3"
              )}
            >
              {/* Decorative number */}
              <span className="font-mono text-xs font-medium text-accent/60 tracking-[0.2em]">
                0{i + 1}
              </span>
              <h3 className="font-heading font-bold text-primary text-xl leading-tight">
                {value.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-textSecondary md:text-base">
                {value.body}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

function Team() {
  return (
    <SectionWrapper bg="light">
      <RevealOnScroll>
        <SectionHeading
          overline="The People"
          heading="The Team"
          subheading="Senior practitioners, not junior staffers. Everyone on your engagement has shipped production systems and led complex client programs."
          align="center"
        />
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member, i) => (
          <RevealOnScroll key={member.name} delay={i * 80}>
            <div
              className={cn(
                "rounded-2xl border border-border bg-white p-6",
                "flex flex-col items-center text-center gap-4",
                "shadow-sm hover:shadow-md transition-shadow duration-200"
              )}
            >
              {/* Avatar with initials */}
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full",
                  "bg-accent text-white",
                  "font-heading font-bold text-xl",
                  "ring-4 ring-bgBlue"
                )}
                aria-label={`${member.name} avatar`}
              >
                {member.initials}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading font-bold text-primary text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider">
                  {member.title}
                </p>
              </div>

              <p className="font-body text-sm leading-relaxed text-textSecondary">
                {member.bio}
              </p>

              {/* LinkedIn link */}
              <Link
                href={member.linkedin}
                aria-label={`${member.name} on LinkedIn`}
                className={cn(
                  "mt-auto inline-flex items-center justify-center",
                  "h-9 w-9 rounded-full",
                  "bg-bgBlue text-accent",
                  "hover:bg-accent hover:text-white",
                  "transition-colors duration-200"
                )}
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={400}>
        <p className="mt-8 text-center font-body text-sm text-textSecondary/70 italic">
          Real team photos coming soon.
        </p>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

// ─── Technology Partners ──────────────────────────────────────────────────────

function TechPartners() {
  return (
    <SectionWrapper bg="white">
      <RevealOnScroll>
        <SectionHeading
          overline="Our Ecosystem"
          heading="Technology Partners"
          subheading="We're platform-agnostic, but deeply experienced across the leading cloud and AI infrastructure providers."
          align="center"
        />
      </RevealOnScroll>

      <RevealOnScroll delay={100} className="mt-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {TECH_PARTNERS.map((partner) => (
            <span
              key={partner}
              className={cn(
                "inline-flex items-center justify-center",
                "rounded-xl border border-border px-6 py-3",
                "font-heading font-semibold text-sm text-textSecondary",
                "grayscale transition-all duration-200",
                "hover:grayscale-0 hover:border-accent/40 hover:text-accent hover:bg-bgBlue",
                "cursor-default select-none"
              )}
            >
              {partner}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhereWeComeFrom />
      <HowWeThink />
      <Values />
      <Team />
      <TechPartners />
      <CTABanner
        heading="Want to Work With Us?"
        body="We take on a small number of engagements at a time so we can give each one our full attention. Let's see if there's a fit."
        ctaText="Start a Conversation"
        ctaHref="/contact"
        secondaryCtaText="View Our Approach"
        secondaryCtaHref="/approach"
      />
    </>
  );
}
