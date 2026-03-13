import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/seo/JsonLd";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Claude Training Practice | Master Anthropic Claude",
  description:
    "Turn your teams into Claude power users. Dedicated training for business teams on Claude for Work and engineering teams on Claude Code at production scale.",
  keywords: [
    "Claude training",
    "Anthropic Claude",
    "Claude Code training",
    "prompt engineering Claude",
    "AI training for developers",
    "enterprise AI adoption",
  ],
  openGraph: {
    title: "Claude Training Practice | Master Anthropic Claude",
    description:
      "Turn your teams into Claude power users. Dedicated training for business teams on Claude for Work and engineering teams on Claude Code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Anthropic Claude | Claude Training Practice",
    description: "Enterprise-grade training for Claude for Work and Claude Code.",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center gap-2 font-body text-sm text-white/60"
    >
      <Link href="/" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
        Home
      </Link>
      <span aria-hidden="true" className="text-white/30">/</span>
      <span className="text-white/90" aria-current="page">Claude Training</span>
    </nav>
  );
}

interface ProgrammeCardProps {
  title: string;
  meta: string;
  body: string;
  items: string[];
  itemsLabel?: string;
  deliverables?: string[];
  index: number;
}

function ProgrammeCard({ title, meta, body, items, itemsLabel = "What Participants Learn", deliverables, index }: ProgrammeCardProps) {
  return (
    <RevealOnScroll delay={index * 80}>
      <div className={cn("rounded-2xl border border-border bg-white shadow-sm p-6 flex flex-col gap-4")}>
        <div>
          <h3 className="font-heading font-bold text-lg text-primary leading-snug">{title}</h3>
          <p className="mt-1 font-mono text-xs text-accent tracking-wide">{meta}</p>
        </div>
        <p className="font-body text-sm leading-relaxed text-textSecondary">{body}</p>
        <div>
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-textPrimary">{itemsLabel}</p>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-textSecondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {deliverables && (
          <div className="rounded-xl border border-accent/20 bg-bgBlue px-4 py-3">
            <p className="mb-1.5 font-body text-xs font-semibold uppercase tracking-widest text-accent">Deliverables</p>
            <ul className="space-y-1">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 font-body text-xs text-textSecondary">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}

interface PathwayCardProps {
  number: string;
  title: string;
  timeline: string;
  steps: string[];
  outcome: string;
  index: number;
}

function PathwayCard({ number, title, timeline, steps, outcome, index }: PathwayCardProps) {
  return (
    <RevealOnScroll delay={index * 80}>
      <div className={cn("rounded-2xl border border-border bg-white shadow-sm p-6 flex flex-col gap-4 h-full")}>
        <div className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white font-heading font-bold text-sm">
            {number}
          </span>
          <div>
            <h3 className="font-heading font-bold text-base text-primary leading-snug">{title}</h3>
            <p className="font-mono text-xs text-accent mt-0.5">{timeline}</p>
          </div>
        </div>
        <ul className="space-y-1.5 flex-1">
          {steps.map((step) => (
            <li key={step} className="flex items-start gap-2 font-body text-sm text-textSecondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
              {step}
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-accent/30 bg-bgBlue px-4 py-3">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-1">Outcome</p>
          <p className="font-body text-sm text-textSecondary">{outcome}</p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

interface TableRowProps {
  programme: string;
  duration: string;
  audience: string;
  shade: boolean;
}

function TableRow({ programme, duration, audience, shade }: TableRowProps) {
  return (
    <tr className={shade ? "bg-bgLight" : "bg-white"}>
      <td className="px-4 py-3 font-body text-sm font-semibold text-textPrimary">{programme}</td>
      <td className="px-4 py-3">
        <span className="font-mono text-xs text-accent tracking-wide">{duration}</span>
      </td>
      <td className="px-4 py-3 font-body text-sm text-textSecondary">{audience}</td>
    </tr>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClaudeTrainingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Claude Training", item: "/claude-training" },
        ]}
      />
      <CourseJsonLd
        course={{
          name: "Claude for Business Teams",
          description: "Turning teams into Claude power users through Cowork and agentic productivity workflows.",
        }}
      />
      <CourseJsonLd
        course={{
          name: "Claude Code for Engineering Teams",
          description: "Deploying Claude Code as a full agentic development environment with secure MLOps practices.",
        }}
      />
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-primary">
        <span aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-accent-dark/20 blur-3xl" />
        <div className={cn("relative z-10 mx-auto max-w-[1280px]", "px-4 sm:px-6 lg:px-8", "pt-24 pb-28 md:pt-32 md:pb-36")}>
          <Breadcrumb />
          <p className={cn("mb-5 inline-block rounded-full border border-accent/30 bg-accent/10", "px-4 py-1.5", "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-light")}>
            Claude Training Practice
          </p>
          <h1 className={cn("max-w-3xl font-heading font-bold", "text-display-sm md:text-display-md", "leading-tight tracking-tight", "text-white")}>
            Claude Is Transforming How Work Gets Done. Is Your Team Ready?
          </h1>
          <p className={cn("mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/75")}>
            The fastest, most structured way to turn your teams into Claude power users — from knowledge workers mastering Claude Cowork to engineers deploying Claude Code at production scale. Structured programmes. Real-world practice. Security built in.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className={cn("inline-flex h-12 items-center justify-center rounded-xl px-8 bg-accent text-white font-body text-base font-semibold border border-accent transition-all duration-200 hover:bg-accent-light hover:border-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary")}>
              Talk to an AI Consultant
            </Link>
            <Link href="#programmes" className={cn("inline-flex h-12 items-center justify-center rounded-xl px-8 bg-transparent text-white/80 font-body text-base font-semibold border border-white/25 transition-all duration-200 hover:bg-white/10 hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary")}>
              View Programmes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. WHY THIS MATTERS NOW ──────────────────────────────────────── */}
      <SectionWrapper bg="white">
        <RevealOnScroll>
          <SectionHeading
            heading="The Gap Between Using Claude and Mastering Claude Is Costing You"
            align="left"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="mt-8 max-w-4xl space-y-5">
            <p className="font-body text-base leading-relaxed text-textSecondary">
              Teams that use Claude casually get casual results. Teams that understand how Claude thinks, how to prompt effectively, how to build workflows around it, and how to govern it safely — those teams operate at a different level entirely. Anthropic&apos;s own enterprise data shows organisations that formally train their teams on Claude see dramatically better adoption, measurably higher output quality, and faster time-to-value from their Claude investment compared to those that simply hand out subscriptions and hope for the best.
            </p>
            <p className="font-body text-base leading-relaxed text-textSecondary">
              The same pattern holds for development teams on Claude Code. Engineers who understand the tool&apos;s agentic architecture, know how to configure CLAUDE.md files, set permission boundaries, and integrate Claude Code into CI/CD pipelines outperform those who use it as a simple autocomplete by an order of magnitude.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={150}>
          <blockquote className="mt-8 max-w-4xl border-l-4 border-accent pl-6 py-2">
            <p className="font-body text-base italic leading-relaxed text-textSecondary">
              Claude Cowork launched in January 2026. Claude Code has been transforming engineering teams since 2025. The window to establish internal capability is now — before your competitors do.
            </p>
          </blockquote>
        </RevealOnScroll>
      </SectionWrapper>

      {/* ── 3. TWO TRACKS ────────────────────────────────────────────────── */}
      <SectionWrapper bg="light" id="programmes">
        <RevealOnScroll>
          <SectionHeading
            overline="Two Tracks"
            heading="Business Teams. Engineering Teams. Both Covered."
            subheading="The Claude Training Practice operates across two distinct tracks — designed for the realities of each audience, not generic AI training dressed up in Claude branding."
            align="center"
          />
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevealOnScroll delay={80}>
            <div className={cn("rounded-2xl border border-border bg-white shadow-sm p-8 h-full")}>
              <div className="mb-4 inline-flex items-center rounded-full bg-bgBlue border border-accent/20 px-3 py-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Track 1</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Claude for Business Teams</h3>
              <p className="font-body text-sm leading-relaxed text-textSecondary">
                For knowledge workers, managers, analysts, marketers, operations teams, finance, HR, and anyone whose daily work involves documents, communication, analysis, or decisions. This track covers Claude.ai, Claude Cowork, and the productivity layer of the Claude ecosystem.
              </p>
              <div className="mt-5">
                <Link href="#track-business" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent transition-all duration-200 hover:gap-2.5">
                  View programmes
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <div className={cn("rounded-2xl border border-border bg-white shadow-sm p-8 h-full")}>
              <div className="mb-4 inline-flex items-center rounded-full bg-bgBlue border border-accent/20 px-3 py-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Track 2</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Claude Code for Engineering &amp; Dev Teams</h3>
              <p className="font-body text-sm leading-relaxed text-textSecondary">
                For developers, engineers, DevOps, technical leads, and CTOs who want to move from using Claude Code as a coding assistant to deploying it as a full agentic development environment. This track covers installation, configuration, CLAUDE.md architecture, MCP integration, security guardrails, and CI/CD practices.
              </p>
              <div className="mt-5">
                <Link href="#track-engineering" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent transition-all duration-200 hover:gap-2.5">
                  View programmes
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 4. THE DIFFERENCE ────────────────────────────────────────────── */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <RevealOnScroll>
            <SectionHeading
              overline="Our Approach"
              heading="We're Consultants Who Use Claude Daily. Not Instructors Who Read the Docs."
              align="left"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Every trainer in the Claude Training Practice uses Claude and Claude Code in live client engagements. They know where the pitfalls are, what prompting patterns actually work in business contexts, how to handle hallucination risk in professional settings, and what the most common adoption failures look like.
              </p>
              <p className="font-body text-base leading-relaxed text-textSecondary">
                Training is delivered using Design Thinking principles — experiential, iterative, and anchored in your actual workflows. Participants don&apos;t learn Claude in the abstract. They learn Claude on your real use cases, your real documents, your real development environment.
              </p>
              <p className="font-body text-base leading-relaxed text-textSecondary">
                We also have the security depth to back it up. Every training programme includes governance and security content appropriate for your industry — not as an afterthought, but as a core module.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 5. TRACK 1 — BUSINESS ────────────────────────────────────────── */}
      <SectionWrapper bg="light" id="track-business">
        <RevealOnScroll>
          <SectionHeading
            overline="Track 1"
            heading="Claude for Business Teams"
            align="left"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-textSecondary">
            Knowledge workers who truly understand Claude don&apos;t just save time — they produce better work, make better decisions, and operate with a confidence that compounds over time. This track takes your business teams from occasional Claude users to daily power users who treat it as a core professional tool.
          </p>
          <blockquote className="mt-6 border-l-4 border-accent pl-6 py-2 max-w-3xl">
            <p className="font-body text-base italic leading-relaxed text-textSecondary">
              &ldquo;In 2026, every knowledge worker will feel about Cowork the way engineers feel about Claude Code — that they just couldn&apos;t live without it.&rdquo;
            </p>
            <cite className="mt-2 block font-body text-xs font-semibold text-accent not-italic">— Anthropic Head of Americas, February 2026</cite>
          </blockquote>
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProgrammeCard
            index={0}
            title="Claude Foundations for Business"
            meta="Half-day workshop (4 hours) · In-person or virtual · All business staff"
            body="The essential starting point. This workshop gives every participant a clear mental model of how Claude works, what it's genuinely good at, what its limitations are, and how to use it safely in a professional context. We cover prompt fundamentals, output quality, and the practical habits that separate useful Claude interactions from frustrating ones."
            items={[
              "How Claude processes context and why prompt structure matters",
              "The difference between asking Claude and working with Claude",
              "Prompting for different output types: analysis, drafting, summarisation, brainstorming",
              "How to verify Claude's outputs and manage hallucination risk professionally",
              "Claude's privacy and data handling — what goes in, what doesn't",
              "Acceptable use in your organisation's context",
              "Building a personal prompt library from day one",
            ]}
            deliverables={[
              "Participant prompt library (50+ starter prompts by role)",
              "Claude quick reference card",
              "Acceptable use checklist",
              "Session recording for future onboarding",
            ]}
          />
          <ProgrammeCard
            index={1}
            title="Claude Cowork Deep Dive"
            meta="Full-day intensive (1 day) · Knowledge workers, analysts, managers, operations · Prerequisite: Claude Foundations"
            body="Claude Cowork — launched in January 2026 — is Anthropic's most significant enterprise product release since Claude Code. It brings the agentic power of Claude Code to knowledge workers: direct file access, multi-step task execution, scheduled automation, and the ability to produce polished, professional deliverables without manual back-and-forth. This full-day intensive trains your teams to use Cowork not just functionally, but strategically."
            items={[
              "Cowork architecture and how it differs from regular Claude chat",
              "Task design for complex, multi-step assignments",
              "File and folder workflows",
              "Building and using plugins for your specific function",
              "MCP connectors for Google Drive, Gmail, Calendar",
              "Scheduled automated workflows",
              "Review and quality control without micromanaging",
              "Security and data handling",
            ]}
            itemsLabel="What Participants Learn"
            deliverables={[
              "Custom plugin template",
              "Cowork task brief library (20+ templates)",
              "Governance checklist",
              "30-day post-workshop support",
            ]}
          />
          <ProgrammeCard
            index={2}
            title="Advanced Prompt Engineering for Professionals"
            meta="Half-day workshop (4 hours) · Power users, team leads, content teams, analysts"
            body="For teams that have moved beyond the basics and want to unlock Claude's full capability. This workshop goes deep on prompt architecture — system prompts, role framing, chain-of-thought techniques, output formatting control, and multi-turn workflow design. Participants leave able to build reusable prompt systems, not just one-off queries."
            items={[
              "System prompt design",
              "Role and context framing",
              "Chain-of-thought prompting",
              "Output formatting mastery",
              "Multi-turn conversation design",
              "Few-shot prompting",
              "Building a team-wide prompt library with governance",
            ]}
            deliverables={[
              "Advanced prompt template pack (role-specific)",
              "System prompt library",
              "Prompt quality rubric",
            ]}
          />
          <ProgrammeCard
            index={3}
            title="Claude for Specific Business Functions"
            meta="Half-day workshops (3–4 hours each) · Department-specific cohorts"
            body="Tailored workshops built around the specific workflows of each business function. Rather than generic AI training, participants work with Claude on scenarios drawn directly from their daily work."
            items={[
              "Marketing & Content — brand-consistent content pipelines, campaign ideation, SEO content at scale",
              "Finance & Operations — financial analysis, automated reports, data interpretation, process documentation",
              "HR & People — job descriptions, candidate communication, resume screening, onboarding materials",
              "Sales — prospect research, proposal drafting, meeting preparation, CRM note summarisation",
              "Legal & Compliance — document review, contract drafting, regulatory monitoring, privilege considerations",
            ]}
            itemsLabel="Available Functions"
          />
          <ProgrammeCard
            index={4}
            title="AI Governance, Policy & Safe Use"
            meta="Half-day workshop (3 hours) · Leadership, IT, compliance, all staff"
            body="The governance programme every organisation deploying Claude needs before — or alongside — any training. This workshop establishes the organisational framework for responsible Claude use: what is permitted, what is prohibited, how outputs must be reviewed, and what data must never enter Claude in any form."
            items={[
              "Claude's data handling and data classification for Claude",
              "Prompt injection risks and output review standards",
              "Acceptable use policy framework",
              "Incident response for AI-related issues",
              "Cowork-specific governance",
              "Industry-specific regulatory considerations (HIPAA, GDPR, financial regulations)",
            ]}
            deliverables={[
              "Claude acceptable use policy (draft)",
              "Data classification guide",
              "Output review checklist by risk level",
              "Incident response one-pager",
            ]}
          />
        </div>
      </SectionWrapper>

      {/* ── 6. TRACK 2 — ENGINEERING ─────────────────────────────────────── */}
      <SectionWrapper bg="white" id="track-engineering">
        <RevealOnScroll>
          <SectionHeading
            overline="Track 2"
            heading="Claude Code for Engineering & Dev Teams"
            align="left"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-textSecondary">
            Claude Code is not a better autocomplete. It is an agentic coding environment that understands your entire codebase, executes multi-step tasks, manages git workflows, and can write production-ready code from natural language. The teams extracting the most value from it have learned to work with it as a collaborator — not a tool.
          </p>
          <blockquote className="mt-6 border-l-4 border-accent pl-6 py-2 max-w-3xl">
            <p className="font-body text-base italic leading-relaxed text-textSecondary">
              &ldquo;Spotify reduced engineering time on code migrations by up to 90% with Claude Code. Novo Nordisk cut documentation creation from 10+ weeks to 10 minutes. The gap between teams that know Claude Code and teams that don&apos;t is widening fast.&rdquo;
            </p>
          </blockquote>
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProgrammeCard
            index={0}
            title="Claude Code Setup & Foundations"
            meta="Half-day workshop (4 hours) · All developers and engineers new to Claude Code · Beginner–Intermediate"
            body="The essential foundation. Participants go from zero to a fully configured, working Claude Code environment in their own development context. No abstract demos — every step is executed on the participant's actual machine and project."
            items={[
              "Claude Code architecture and how the agentic loop works",
              "Installation across macOS/Windows/Linux",
              "Authentication setup and running Claude Code in terminal and VS Code",
              "Your first real task and understanding the permission model",
              "Reading session transcripts",
              "When to use Claude Code vs Claude.ai vs Claude Cowork",
            ]}
            deliverables={[
              "Verified installation",
              "Quick reference card",
              "Environment configuration checklist",
            ]}
          />
          <ProgrammeCard
            index={1}
            title="CLAUDE.md Mastery & Codebase Configuration"
            meta="Half-day (4 hours) · Senior developers, tech leads, engineering managers · Intermediate · Prerequisite: Setup & Foundations"
            body="CLAUDE.md is the single most impactful configuration decision in any Claude Code deployment. A well-structured CLAUDE.md transforms Claude Code from a capable general assistant into a codebase-aware, context-rich collaborator that understands your architecture, conventions, and constraints without being told every session."
            items={[
              "What CLAUDE.md is and how Claude Code reads it",
              "Repository-level vs. directory-level CLAUDE.md",
              "Architecture documentation and coding conventions",
              "Dependency and environment documentation",
              "Sensitive area flagging and common workflows",
              "Keeping CLAUDE.md current and testing your configuration",
            ]}
            deliverables={[
              "Production-ready CLAUDE.md per team",
              "Template library by stack",
              "Maintenance guide and review checklist",
            ]}
          />
          <ProgrammeCard
            index={2}
            title="Agentic Development Workflows"
            meta="Full-day intensive (1 day) · Mid to senior developers, tech leads · Intermediate–Advanced · Prerequisite: Previous two programmes"
            body="This is where Claude Code stops being a productivity booster and becomes a genuine multiplier. Agentic workflows — where Claude Code handles complex, multi-step engineering tasks with minimal human interruption — are the capability that separates teams getting 10x returns from those getting 1.5x."
            items={[
              "The agentic loop: how Claude Code plans, executes, and self-corrects",
              "Plan mode and designing effective multi-step task briefs",
              "Parallel workstreams using git worktrees",
              "Long-running tasks, headless and automated mode",
              "Git workflow integration and code review assistance",
              "Refactoring at scale",
            ]}
            deliverables={[
              "Agentic task brief template library",
              "Parallel workflow setup guide",
              "Automated workflow script examples",
            ]}
          />
          <ProgrammeCard
            index={3}
            title="MCP Integration & Tool Expansion"
            meta="Half-day (4 hours) · Senior developers, DevOps, platform engineers · Advanced · Prerequisite: Setup & CLAUDE.md Mastery"
            body="The Model Context Protocol (MCP) extends Claude Code beyond your codebase and into every system your engineering team works with. This workshop covers MCP server integration — from standard servers covering 80% of needs to building custom servers for your internal tools."
            items={[
              "MCP architecture and configuring MCP servers (.claude.json)",
              "High-value standard integrations (GitHub, filesystem, databases, Slack, Jira)",
              "Wildcard syntax and building a custom MCP server",
              "Security considerations, testing and debugging",
              "Managing MCP server versions",
            ]}
            deliverables={[
              "MCP configuration templates",
              "Custom MCP server starter template",
              "Security review checklist",
            ]}
          />
          <ProgrammeCard
            index={4}
            title="Claude Code Security, Guardrails & Enterprise Governance"
            meta="Half-day (4 hours) · Engineering leads, CTOs, DevOps, security teams · Intermediate–Advanced"
            body="The workshop that ensures Claude Code is deployed with appropriate controls from day one — not retrofitted after an incident. Covers permission model, credential handling, audit trails, and a full governance framework."
            items={[
              "Permission model in depth: allow lists, deny lists, protecting sensitive files",
              "Credential and secret handling",
              "Prompt injection risks and code review requirements",
              "Audit trails and supply chain considerations",
              "Branching and PR policies with mandatory human review checkpoints",
              "Incident response procedures",
            ]}
            deliverables={[
              "Security configuration template",
              "Acceptable use policy (draft)",
              "AI code review checklist",
              "Incident response one-pager",
              "Security audit checklist",
            ]}
          />
          <ProgrammeCard
            index={5}
            title="CI/CD Integration & Production Best Practices"
            meta="Half-day (4 hours) · DevOps, platform engineers, senior developers · Advanced · Prerequisite: Setup, CLAUDE.md, and Agentic Workflows"
            body="The culminating technical programme. Integrating Claude Code into your CI/CD pipeline and production engineering practices — turning it from a developer-side tool into a systematic part of your delivery process."
            items={[
              "Running Claude Code in headless and non-interactive mode",
              "GitHub Actions integration and automated code review before human review",
              "Test generation workflows and documentation automation",
              "Performance and cost management",
              "Environment variable and secret management in pipelines",
              "Monitoring, observability, and rollback procedures",
            ]}
            deliverables={[
              "GitHub Actions workflow templates",
              "CI/CD integration guide",
              "Cost and performance optimisation guide",
            ]}
          />
        </div>
      </SectionWrapper>

      {/* ── 7. RECOMMENDED PATHWAYS ──────────────────────────────────────── */}
      <SectionWrapper bg="light" id="pathways">
        <RevealOnScroll>
          <SectionHeading
            overline="Learning Pathways"
            heading="How to Sequence Your Training"
            subheading="Every programme can be taken standalone, but structured pathways deliver compounding returns."
            align="center"
          />
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PathwayCard
            index={0}
            number="1"
            title="Business Team Complete Adoption"
            timeline="4–6 weeks"
            steps={[
              "Week 1: Claude Foundations for Business (all staff)",
              "Weeks 2–3: Claude for Specific Business Functions (by department)",
              "Week 4: Claude Cowork Deep Dive (power users and leads)",
              "Week 5: AI Governance, Policy & Safe Use (leadership and IT)",
              "Week 6: Advanced Prompt Engineering (nominated champions)",
            ]}
            outcome="Every business team member operating with Claude as a daily work tool, with governance in place and internal champions identified."
          />
          <PathwayCard
            index={1}
            number="2"
            title="Engineering Team Full Deployment"
            timeline="4–5 weeks"
            steps={[
              "Week 1: Claude Code Setup & Foundations (all engineers)",
              "Week 2: CLAUDE.md Mastery (tech leads) + Security & Governance (parallel)",
              "Week 3: Agentic Development Workflows (all engineers)",
              "Week 4: MCP Integration (senior engineers)",
              "Week 5: CI/CD Integration (DevOps and leads)",
            ]}
            outcome="Engineering team fully onboarded with security-first configuration, agentic workflows, MCP integrations, and CI/CD pipeline integration operational."
          />
          <PathwayCard
            index={2}
            number="3"
            title="Leadership Fast Track"
            timeline="1 day"
            steps={[
              "Bespoke, condensed session for senior leadership",
              "Strategic implications of Claude and Claude Code",
              "Competitive advantage and governance obligations",
              "How to sponsor your team's adoption programme",
            ]}
            outcome="Leadership aligned on strategy, governance obligations, and ready to actively sponsor team-wide adoption."
          />
          <PathwayCard
            index={3}
            number="4"
            title="Full Organisation Rollout"
            timeline="8–12 weeks"
            steps={[
              "Weeks 1–2: Leadership fast track + governance framework",
              "Weeks 3–6: Business team track (all programmes)",
              "Weeks 3–7: Engineering track (parallel stream)",
              "Weeks 8–10: AI Champions Program for both tracks",
              "Weeks 11–12: Internal showcase, retrospective, and 90-day plan",
            ]}
            outcome="Claude adopted and actively used across every function, with internal champions sustaining adoption, governance in place, and a clear 90-day plan."
          />
        </div>
      </SectionWrapper>

      {/* ── 8. PROGRAMMES AT A GLANCE ────────────────────────────────────── */}
      <SectionWrapper bg="white">
        <RevealOnScroll>
          <SectionHeading
            overline="Quick Reference"
            heading="Programmes at a Glance"
            align="center"
          />
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <RevealOnScroll delay={80}>
            <div>
              <h3 className="mb-3 font-heading font-bold text-base text-primary uppercase tracking-widest">Business Track</h3>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest">Programme</th>
                      <th className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest">Duration</th>
                      <th className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest">Audience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <TableRow shade={false} programme="Claude Foundations for Business" duration="Half day" audience="All staff" />
                    <TableRow shade={true} programme="Claude Cowork Deep Dive" duration="Full day" audience="Knowledge workers" />
                    <TableRow shade={false} programme="Advanced Prompt Engineering" duration="Half day" audience="Power users" />
                    <TableRow shade={true} programme="Claude for Specific Business Functions" duration="Half day" audience="By department" />
                    <TableRow shade={false} programme="AI Governance, Policy & Safe Use" duration="Half day" audience="Leadership + IT" />
                  </tbody>
                </table>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <div>
              <h3 className="mb-3 font-heading font-bold text-base text-primary uppercase tracking-widest">Engineering Track</h3>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest">Programme</th>
                      <th className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest">Duration</th>
                      <th className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest">Audience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <TableRow shade={false} programme="Claude Code Setup & Foundations" duration="Half day" audience="All developers" />
                    <TableRow shade={true} programme="CLAUDE.md Mastery & Configuration" duration="Half day" audience="Tech leads" />
                    <TableRow shade={false} programme="Agentic Development Workflows" duration="Full day" audience="Mid–senior developers" />
                    <TableRow shade={true} programme="MCP Integration & Tool Expansion" duration="Half day" audience="Senior engineers" />
                    <TableRow shade={false} programme="Security, Guardrails & Governance" duration="Half day" audience="Leads + security" />
                    <TableRow shade={true} programme="CI/CD Integration & Production Practices" duration="Half day" audience="DevOps + leads" />
                  </tbody>
                </table>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 9. AI CHAMPIONS ──────────────────────────────────────────────── */}
      <SectionWrapper bg="light">
        <RevealOnScroll>
          <SectionHeading
            overline="AI Champions Program"
            heading="Build the Internal Champions Who Keep Claude Adoption Alive"
            subheading="External training delivers the initial capability. Internal AI Champions sustain and grow it. The Champions Program develops a cohort of power users in both business and engineering tracks who become your organisation's permanent Claude expertise centre."
            align="center"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <blockquote className="mt-8 mx-auto max-w-2xl text-center border-l-4 border-accent pl-6 py-2 text-left">
            <p className="font-body text-base italic leading-relaxed text-textSecondary">
              &ldquo;Organisations with internal AI champions show 3x higher long-term AI adoption rates than those relying solely on external training.&rdquo;
            </p>
          </blockquote>
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevealOnScroll delay={100}>
            <div className={cn("rounded-2xl border border-border bg-white shadow-sm p-8 h-full")}>
              <div className="mb-4 inline-flex items-center rounded-full bg-bgBlue border border-accent/20 px-3 py-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Business Champions</span>
              </div>
              <div className="mb-3 flex gap-4 flex-wrap">
                <span className="font-mono text-xs text-textSecondary">Duration: 4 weeks post core training</span>
                <span className="font-mono text-xs text-textSecondary">Cohort: 4–8 champions</span>
              </div>
              <p className="font-body text-sm leading-relaxed text-textSecondary mb-4">
                Business champions are the colleagues others turn to when they get stuck with Claude, when they want to know if Cowork can handle a new type of task, or when they need help building a better prompt.
              </p>
              <ul className="space-y-1.5">
                {[
                  "Extended Cowork deep dive (advanced plugin building and workflow design)",
                  "Advanced prompt engineering",
                  "Change management basics",
                  "Monthly office hours and direct Slack/Teams community",
                  "Prompt library and update service",
                  "Champion playbook for running internal demos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={180}>
            <div className={cn("rounded-2xl border border-border bg-white shadow-sm p-8 h-full")}>
              <div className="mb-4 inline-flex items-center rounded-full bg-bgBlue border border-accent/20 px-3 py-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Claude Code Champions</span>
              </div>
              <div className="mb-3 flex gap-4 flex-wrap">
                <span className="font-mono text-xs text-textSecondary">Duration: 4 weeks post core training</span>
                <span className="font-mono text-xs text-textSecondary">Cohort: 2–4 per engineering team</span>
              </div>
              <p className="font-body text-sm leading-relaxed text-textSecondary mb-4">
                Claude Code champions are typically senior engineers or tech leads who become the internal authority on configuration, best practices, and agentic workflow design.
              </p>
              <ul className="space-y-1.5">
                {[
                  "Advanced MCP server development",
                  "Agentic architecture design",
                  "Security deep dive",
                  "CLAUDE.md governance ownership",
                  "Monthly technical office hours",
                  "Early access to best practices library",
                  "Technical Slack/Teams community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      {/* ── 10. CTA BANNER ───────────────────────────────────────────────── */}
      <CTABanner
        heading="Start With a 30-Minute Conversation"
        body="Tell us about your team — how many people, which tools they're using today, what Claude products you're already subscribed to, and what you're trying to achieve. We'll recommend the right pathway and build a programme schedule that fits around your business. No generic training. No off-the-shelf slides. Claude training built for your organisation."
        ctaText="Talk to an AI Consultant"
        ctaHref="/contact"
        secondaryCtaText="View AI Academy"
        secondaryCtaHref="/services/ai-academy"
      />
    </>
  );
}
