# WEBSITE UPDATE ADDENDUM V3

## New Services, Copy Improvements & Conversion Funnel Updates

**Document Type:** Claude Code Implementation Guide
**Applies to:** Existing site at localhost:3001
**Version:** 3.0 | March 2026

> **How to use this document:** Each section below is a self-contained Claude Code task. Paste them into Claude Code one at a time, in order. Each task describes exactly what to change, where to change it, and provides the production-ready copy. Wait for each task to complete before moving to the next.

---

## OVERVIEW OF ALL CHANGES

This update adds three categories of improvements to the existing site:

**A. New Services & Pages (4 additions)**
1. Speed-to-Lead AI Agents — new service card + detail page
2. AI Academy — replaces the generic "AI Workshops & Training" concept with a full training practice (new service card + dedicated page)
3. Claude Training Practice — a separate, standalone practice page covering Claude-specific training for business and engineering teams
4. Packaged AI Solutions — new service card + detail page

**B. Copy & Framing Improvements (5 changes)**
5. Sharper homepage problem statement with "intelligence gap" data
6. "Employee amplification not replacement" messaging across site
7. "Visible value" emphasis added to case study template
8. Industry-specific language sharpened on Industries page
9. Updated engagement models to include new service tiers

**C. New Conversion Entry Points (3 additions)**
10. "Free AI Workflow Audit" as secondary CTA across the site
11. Contact page restructured with dual-path entry (audit vs. discovery call)
12. New `/audit` landing page for the free audit funnel

---

## TASK 1: Add New Service Cards to Services Hub

**What to do:** Add 3 new service cards to the existing services grid on `/services`. The grid expands from 6 to 9 cards (3×3 on desktop). Update the homepage services overview grid to match (also 9 cards, or keep 6 and add a "See all services →" link — use whichever approach fits the current layout better).

**Where:** `/services/page.tsx` and the services data file (wherever the 6 current services are defined)

### New Service 7: Speed-to-Lead AI Agents

**Card copy for services hub:**
> "Leads go cold in minutes. Your AI agent responds in seconds. Our speed-to-lead systems respond to new inquiries instantly — 24/7 — via text or email, qualify the lead, capture key information, and book meetings automatically. Your team wakes up to qualified appointments, not stale lead lists."

**Services include:** Instant Lead Response Agents, Intelligent Lead Qualification, Automated Appointment Booking, After-Hours Coverage, Multi-Channel Response (SMS, Email, Chat), CRM Integration & Lead Routing

**Slug:** `/services/speed-to-lead-agents`

**Icon suggestion:** Zap or Clock (from lucide-react)

### New Service 8: AI Academy

**Card copy for services hub:**
> "Technology without capability is a liability. The AI Academy ensures your people don't just have AI tools — they know how to use them, champion them, and govern them. From executive literacy workshops to multi-week adoption programmes, training that sticks — delivered by practitioners who've done the work."

**Services include:** AI Literacy Workshop, AI Tools Hands-On Training, AI Champions Program, AI Policy & Guidelines Development

**Slug:** `/services/ai-academy`

**Icon suggestion:** GraduationCap or BookOpen (from lucide-react)

### New Service 9: Packaged AI Solutions

**Card copy for services hub:**
> "Proven automations. Predictable pricing. Immediate results. Pre-built, industry-tested AI solutions that deploy in days, not months. Each package solves a specific, painful workflow — from content repurposing to listing automation to client onboarding — with monthly maintenance included."

**Services include:** Content & Podcast Repurposing Engine, Real Estate Listing Automation, Client Onboarding Automation, Proposal & Document Generation, Review & Reputation Management, Reporting & Analytics Automation

**Slug:** `/services/packaged-solutions`

**Icon suggestion:** Package or Boxes (from lucide-react)

### Also update the homepage services grid:

If the homepage currently shows 6 service cards in a 3×2 grid, either expand to 9 cards (3×3) or keep the top 6 and add a prominent "See all 9 services →" link below the grid that routes to `/services`. Use whichever approach maintains the current visual balance better.

---

## TASK 2: Create Service Detail Page — Speed-to-Lead AI Agents

**What to do:** Create the detail page for Speed-to-Lead at `/services/speed-to-lead-agents`. Follow the same layout and component structure as the existing 6 service detail pages.

**Hero Headline:** "Never Lose a Lead to Slow Response Again"

**Hero Subheadline:** "Our AI agents respond to every inquiry in under 60 seconds — 24/7 — qualifying leads, capturing information, and booking meetings while your team focuses on closing."

**Overview Section:**

"Here's the math that should keep you up at night: responding to a lead within 5 minutes makes you 100x more likely to qualify them than waiting 30 minutes. Most businesses take hours. Many take days. Some never respond at all. Every hour of delay is revenue walking out the door.

Our speed-to-lead agents sit between your website (or any lead source) and your team. When someone submits a form, calls after hours, or messages on any channel, the AI responds instantly with a personalized message. It asks the right qualifying questions, captures the information your team needs, and books a meeting directly on your calendar.

Your receptionist isn't losing her job. She's being freed up to handle the people who show up instead of playing phone tag with people who filled out a form at 11pm."

**How It Works — 4 steps:**

Step 1 — Connect: We integrate with your existing lead sources — website forms, Google Ads, social media, phone systems, and third-party directories.

Step 2 — Respond: When a lead comes in, the AI agent responds within seconds via their preferred channel (SMS, email, or chat) with a personalized, context-aware message.

Step 3 — Qualify: The agent asks your specific qualifying questions, captures key information (budget, timeline, needs), and scores the lead — all conversationally, not like a robotic form.

Step 4 — Book: Qualified leads are automatically routed to the right team member's calendar. Your CRM is updated. Your team gets notified. The lead never goes cold.

**Key Metrics Section (display as stat cards):**
- "< 60 sec" — Average response time
- "24/7/365" — Always-on coverage
- "3-5x" — Typical improvement in lead qualification rates
- "$20-50/mo" — Operational cost to run

**Pricing Indicator:**
"$1,500–$5,000 setup + $300–$1,000/month depending on volume and channels. Most clients see full ROI within the first month from a single additional closed deal."

**CTA:** "See how many leads you're losing → Book a Free Speed Test"

ℹ️ The CTA links to `/contact` but pre-fills the dropdown with "Speed-to-Lead" or passes a URL parameter.

---

## TASK 3: Create Service Detail Page — AI Academy

**What to do:** Create the detail page at `/services/ai-academy`. This is the general AI training offering (tool-agnostic). Use the same layout structure as other service detail pages but with the richer content below.

### Hero

**Headline:** "Build AI Capability Inside Your Organisation"

**Subheadline:** "Technology without capability is a liability. The AI Academy ensures your people don't just have AI tools — they know how to use them, champion them, and govern them. Training that sticks, delivered by practitioners who've done the work."

**Callout quote (display as a styled pull quote):**
> "The organisations winning with AI have one thing in common: internal AI champions who drive adoption from within."

### Training Programmes

Display as expandable cards or tabbed sections. Each programme shows format, audience, deliverables.

---

**AI Literacy Workshop**

A half-day executive session on AI capabilities, risks, and strategic opportunities. Designed for leadership teams who need to make informed decisions about AI investment without becoming technologists. Practical, provocative, and grounded in real business cases.

- **Format:** Half-day workshop, in-person or virtual
- **Audience:** C-suite, board, senior leadership
- **Deliverables:** Workshop materials, recording, resource guide, Q&A session

---

**AI Tools Hands-On Training**

Practical training on prompt engineering and the AI tools your team is already using — ChatGPT, Claude, Copilot, and more. Participants leave with a personal prompt library, best practice cheat sheets, and the confidence to use AI daily.

- **Format:** 1–2 day intensive, in-person or virtual
- **Audience:** All staff, function-specific cohorts
- **Deliverables:** Training sessions, prompt libraries, cheat sheets, completion certificates

---

**AI Champions Program**

A 4–6 week programme to develop internal AI power users who will drive adoption across your organisation. Champions get deeper training, playbooks, ongoing support, and a community to learn from each other. This is your internal AI movement, not just a training exercise.

- **Duration:** 4–6 weeks
- **Best for:** Mid-market organisations scaling AI across departments
- **Deliverables:** Champion training, playbooks, ongoing support, Slack/Teams community setup

---

**AI Policy & Guidelines Development**

Before your team goes all-in on AI tools, you need the guardrails. We create your acceptable use policy, security guidelines, data handling rules, and approval workflows — practical documentation that balances governance with usability.

- **Duration:** 2–3 weeks
- **Deliverables:** AI acceptable use policy, security guidelines, approval workflows

---

### How We Train

"Our training methodology is rooted in Design Thinking principles: experiential, iterative, and human-centred. We don't lecture. We facilitate. Sessions are built around your actual tools, your actual workflows, and real problems from your business. Participants leave with outputs they can use on Monday morning, not slides they'll never open again."

### Cross-link to Claude Training Practice

Display a callout/banner card:

> **Looking for Claude-specific training?**
> "Our dedicated Claude Training Practice offers structured programmes for both business teams and engineering teams — from Claude Cowork mastery to Claude Code deployment at production scale."
> Button: "Explore Claude Training →" (links to `/claude-training`)

### CTA

"Talk to an AI Consultant → Book a Call"

---

## TASK 4: Create Standalone Page — Claude Training Practice

**What to do:** Create a new standalone page at `/claude-training` (not a service detail page — this is a dedicated practice page with its own nav presence). This is a substantial page with two tracks, multiple programmes, pathways, and a champions section.

**IMPORTANT:** All programme codes (BT-01, CC-01, etc.) have been stripped. Use programme names only throughout.

### Hero

**Headline:** "Claude Is Transforming How Work Gets Done. Is Your Team Ready?"

**Subheadline:** "The fastest, most structured way to turn your teams into Claude power users — from knowledge workers mastering Claude Cowork to engineers deploying Claude Code at production scale. Structured programmes. Real-world practice. Security built in."

**CTA:** "Talk to an AI Consultant"

### Section: Why This Matters Now

**Heading:** "The Gap Between Using Claude and Mastering Claude Is Costing You"

**Body:**
"Teams that use Claude casually get casual results. Teams that understand how Claude thinks, how to prompt effectively, how to build workflows around it, and how to govern it safely — those teams operate at a different level entirely.

Anthropic's own enterprise data shows organisations that formally train their teams on Claude see dramatically better adoption, measurably higher output quality, and faster time-to-value from their Claude investment compared to those that simply hand out subscriptions and hope for the best.

The same pattern holds for development teams on Claude Code. Engineers who understand the tool's agentic architecture, know how to configure CLAUDE.md files, set permission boundaries, and integrate Claude Code into CI/CD pipelines outperform those who use it as a simple autocomplete by an order of magnitude."

**Callout:**
> "Claude Cowork launched in January 2026. Claude Code has been transforming engineering teams since 2025. The window to establish internal capability is now — before your competitors do."

### Section: Two Tracks, One Practice

**Heading:** "Business Teams. Engineering Teams. Both Covered."

**Body:** "The Claude Training Practice operates across two distinct tracks — designed for the realities of each audience, not generic AI training dressed up in Claude branding."

**Track 1 — Claude for Business Teams**
"For knowledge workers, managers, analysts, marketers, operations teams, finance, HR, and anyone whose daily work involves documents, communication, analysis, or decisions. This track covers Claude.ai, Claude Cowork, and the productivity layer of the Claude ecosystem."

**Track 2 — Claude Code for Engineering & Dev Teams**
"For developers, engineers, DevOps, technical leads, and CTOs who want to move from using Claude Code as a coding assistant to deploying it as a full agentic development environment. This track covers installation, configuration, CLAUDE.md architecture, MCP integration, security guardrails, and CI/CD practices."

### Section: The Difference

**Heading:** "We're Consultants Who Use Claude Daily. Not Instructors Who Read the Docs."

**Body:**
"Every trainer in the Claude Training Practice uses Claude and Claude Code in live client engagements. They know where the pitfalls are, what prompting patterns actually work in business contexts, how to handle hallucination risk in professional settings, and what the most common adoption failures look like.

Training is delivered using Design Thinking principles — experiential, iterative, and anchored in your actual workflows. Participants don't learn Claude in the abstract. They learn Claude on your real use cases, your real documents, your real development environment.

We also have the security depth to back it up. Every training programme includes governance and security content appropriate for your industry — not as an afterthought, but as a core module."

---

### Section: Track 1 — Claude for Business Teams

**Heading:** "Claude for Business Teams"

**Intro:** "Knowledge workers who truly understand Claude don't just save time — they produce better work, make better decisions, and operate with a confidence that compounds over time. This track takes your business teams from occasional Claude users to daily power users who treat it as a core professional tool."

**Quote:**
> "In 2026, every knowledge worker will feel about Cowork the way engineers feel about Claude Code — that they just couldn't live without it." — Anthropic Head of Americas, February 2026

Display each programme below as an expandable card or accordion section:

---

**Claude Foundations for Business**

- **Format:** Half-day workshop, in-person or virtual
- **Audience:** All business staff — any role, any department
- **Duration:** 4 hours

The essential starting point. This workshop gives every participant a clear mental model of how Claude works, what it's genuinely good at, what its limitations are, and how to use it safely in a professional context. We cover prompt fundamentals, output quality, and the practical habits that separate useful Claude interactions from frustrating ones.

**What Participants Learn:**
- How Claude processes context and why prompt structure matters
- The difference between asking Claude and working with Claude
- Prompting for different output types: analysis, drafting, summarisation, brainstorming
- How to verify Claude's outputs and manage hallucination risk professionally
- Claude's privacy and data handling — what goes in, what doesn't
- Acceptable use in your organisation's context
- Building a personal prompt library from day one

**Deliverables:** Participant prompt library (50+ starter prompts by role), Claude quick reference card, acceptable use checklist, session recording for future onboarding

---

**Claude Cowork Deep Dive**

- **Format:** Full-day intensive, in-person or virtual
- **Audience:** Knowledge workers, analysts, managers, operations teams
- **Duration:** 1 day
- **Prerequisite:** Claude Foundations for Business or equivalent familiarity

Claude Cowork — launched in January 2026 — is Anthropic's most significant enterprise product release since Claude Code. It brings the agentic power of Claude Code to knowledge workers: direct file access, multi-step task execution, scheduled automation, and the ability to produce polished, professional deliverables without manual back-and-forth.

This full-day intensive trains your teams to use Cowork not just functionally, but strategically — identifying which tasks are genuinely suited to Cowork delegation, designing effective task briefs, and building the review habits that keep humans appropriately in the loop.

**What Participants Learn:**
- Cowork architecture: how it differs from regular Claude chat and why it matters
- Task design: how to brief Cowork for complex, multi-step assignments
- File and folder workflows: letting Claude work directly with your local documents
- Building and using plugins for your specific function (HR, finance, operations, etc.)
- MCP connectors: connecting Cowork to Google Drive, Gmail, Calendar, and other tools
- Scheduled tasks: setting up automated, recurring AI workflows
- Cross-application workflows: using Claude across Excel, PowerPoint, and documents seamlessly
- Review and quality control: how to supervise Cowork outputs without micromanaging
- What not to delegate: understanding Cowork's current limitations
- Security and data handling in Cowork environments

**Practical Labs (Built Around Your Workflows):**
- Lab 1: Process and synthesise a set of documents into a structured report
- Lab 2: Build a department-specific plugin using Cowork's Plugin Create tool
- Lab 3: Design an automated weekly reporting workflow
- Lab 4: Connect Cowork to your team's Google Workspace and execute a real task

**Deliverables:** Custom plugin template for your department, Cowork task brief library (20+ templates), Cowork governance checklist, post-workshop 30-day support access

---

**Advanced Prompt Engineering for Professionals**

- **Format:** Half-day workshop
- **Audience:** Power users, team leads, content teams, analysts
- **Duration:** 4 hours

For teams that have moved beyond the basics and want to unlock Claude's full capability. This workshop goes deep on prompt architecture — system prompts, role framing, chain-of-thought techniques, output formatting control, and multi-turn workflow design. Participants leave able to build reusable prompt systems, not just one-off queries.

**What Participants Learn:**
- System prompt design: how to create a persistent Claude persona for your function
- Role and context framing: giving Claude the right lens before every task
- Chain-of-thought prompting: making Claude show its reasoning for complex analysis
- Output formatting mastery: getting exactly the structure you need, every time
- Multi-turn conversation design for extended research and analysis tasks
- Few-shot prompting: teaching Claude your standards through examples
- Handling edge cases and steering Claude when it goes off track
- Building a team-wide prompt library with version control and governance

**Deliverables:** Advanced prompt template pack (role-specific), system prompt library for your team's most common contexts, prompt quality rubric for internal review

---

**Claude for Specific Business Functions**

- **Format:** Half-day function-specific workshops
- **Audience:** Department-specific cohorts
- **Duration:** 3–4 hours per function

Tailored workshops built around the specific workflows of each business function. Rather than generic AI training, participants work with Claude on scenarios drawn directly from their daily work.

**Available Functions:**

**Claude for Marketing & Content Teams** — Brand-consistent content pipelines, campaign ideation, SEO content at scale, social media calendars, brief-to-deliverable workflows

**Claude for Finance & Operations Teams** — Financial analysis and report drafting, automated expense reports and reconciliations, data interpretation, vendor communication, process documentation

**Claude for HR & People Teams** — Job descriptions and candidate communication, resume screening workflows, employee communication drafting, policy documents, onboarding materials

**Claude for Sales Teams** — Prospect research and personalised outreach, proposal drafting, meeting preparation, competitive analysis, CRM note summarisation

**Claude for Legal & Compliance Teams** — Document review and clause identification, contract drafting and comparison, regulatory change monitoring, policy documentation, privilege and confidentiality considerations

---

**AI Governance, Policy & Safe Use**

- **Format:** Half-day workshop
- **Audience:** Leadership, IT, compliance, all staff
- **Duration:** 3 hours

The governance programme every organisation deploying Claude needs before — or alongside — any training. This workshop establishes the organisational framework for responsible Claude use: what is permitted, what is prohibited, how outputs must be reviewed, and what data must never enter Claude in any form.

**What Participants Learn:**
- Claude's data handling: what Anthropic does and doesn't retain
- Data classification for Claude: what is safe to input, what must stay out
- Prompt injection risks and how to recognise and prevent them
- Output review standards: when to trust, when to verify, when to reject
- Acceptable use policy framework and communication
- Incident response: what to do when Claude produces problematic output
- Cowork-specific governance: local file access, data residency, and audit considerations
- Industry-specific regulatory considerations (HIPAA, GDPR, financial regulations)

**Deliverables:** Claude acceptable use policy (draft), data classification guide, output review checklist by risk level, incident response one-pager

---

### Section: Track 2 — Claude Code for Engineering & Dev Teams

**Heading:** "Claude Code for Engineering & Dev Teams"

**Intro:** "Claude Code is not a better autocomplete. It is an agentic coding environment that understands your entire codebase, executes multi-step tasks, manages git workflows, and can write production-ready code from natural language. The teams extracting the most value from it have learned to work with it as a collaborator — not a tool. This track teaches exactly that."

**Quote:**
> "Spotify reduced engineering time on code migrations by up to 90% with Claude Code. Novo Nordisk cut documentation creation from 10+ weeks to 10 minutes. The gap between teams that know Claude Code and teams that don't is widening fast."

Display each programme as an expandable card or accordion section:

---

**Claude Code Setup & Foundations**

- **Format:** Half-day technical workshop
- **Audience:** All developers and engineers new to Claude Code
- **Duration:** 4 hours
- **Level:** Beginner to intermediate

The essential foundation. Participants go from zero to a fully configured, working Claude Code environment in their own development context. No abstract demos — every step is executed on the participant's actual machine and project.

**What Participants Learn:**
- Claude Code architecture: what it is, how the agentic loop works, and how it differs from IDE plugins
- Installation across macOS, Windows, and Linux environments
- Authentication setup with Anthropic API keys, Amazon Bedrock, and Google Vertex AI
- Running Claude Code in the terminal and within VS Code
- Your first real task: asking Claude Code to explain, edit, and commit in a live codebase
- Understanding the permission model: what Claude Code can and cannot do by default
- Reading the session transcript and understanding what Claude Code actually did
- When to use Claude Code vs. Claude.ai vs. Claude Cowork — choosing the right tool

**Lab: From Zero to First Commit** — Each participant installs Claude Code, configures it, and completes a real coding task including a file edit and git commit using only natural language.

**Deliverables:** Verified installation on each machine, quick reference card (commands, flags, session controls), environment configuration checklist

---

**CLAUDE.md Mastery & Codebase Configuration**

- **Format:** Half-day technical workshop
- **Audience:** Senior developers, tech leads, engineering managers
- **Duration:** 4 hours
- **Level:** Intermediate
- **Prerequisite:** Claude Code Setup & Foundations or existing familiarity

CLAUDE.md is the single most impactful configuration decision in any Claude Code deployment. A well-structured CLAUDE.md transforms Claude Code from a capable general assistant into a codebase-aware, context-rich collaborator that understands your architecture, conventions, and constraints without being told every session.

**What Participants Learn:**
- What CLAUDE.md is and how Claude Code reads and prioritises it
- Repository-level vs. directory-level CLAUDE.md: when and why to use each
- Architecture documentation that Claude Code can actually use
- Coding conventions and style guides: enforcing your standards automatically
- Dependency and environment documentation
- Sensitive area flagging: directing Claude Code away from files it shouldn't touch
- Common workflows in CLAUDE.md: teaching Claude Code your team's SOPs
- Keeping CLAUDE.md current: ownership, review cadence, and update triggers
- Testing your CLAUDE.md: verifying it's influencing behaviour

**Lab: Build Your CLAUDE.md** — Each participant builds a production-ready CLAUDE.md for their actual codebase during the session.

**Deliverables:** Production-ready CLAUDE.md per team, CLAUDE.md template library (by stack), maintenance guide and review checklist

---

**Agentic Development Workflows**

- **Format:** Full-day intensive workshop
- **Audience:** Mid to senior developers, tech leads
- **Duration:** 1 day
- **Level:** Intermediate to advanced
- **Prerequisite:** Claude Code Setup & Foundations and CLAUDE.md Mastery

This is where Claude Code stops being a productivity booster and becomes a genuine multiplier. Agentic workflows — where Claude Code handles complex, multi-step engineering tasks with minimal human interruption — are the capability that separates teams getting 10x returns from those getting 1.5x.

**What Participants Learn:**
- The agentic loop: how Claude Code plans, executes, and self-corrects
- Plan mode: reviewing and steering before execution
- Designing effective multi-step task briefs
- Parallel workstreams: running multiple agents simultaneously using git worktrees
- Long-running tasks: managing context, interruption, and resumption
- Headless and automated mode: integrating into scripts and pipelines
- Reading and interpreting extended thinking output
- Git workflow integration: branch management, commit conventions, PR automation
- Code review assistance: using Claude Code to review its own output
- Refactoring at scale and debug/root cause analysis workflows

**Labs:**
- Lab 1: Multi-file refactoring task in plan mode
- Lab 2: Parallel agents on separate git worktrees for a feature sprint
- Lab 3: Bash script using Claude Code in automated mode
- Lab 4: Full PR lifecycle — branch, implement, review, PR description — using only Claude Code

**Deliverables:** Agentic task brief template library, parallel workflow setup guide, automated workflow script examples

---

**MCP Integration & Tool Expansion**

- **Format:** Half-day technical workshop
- **Audience:** Senior developers, DevOps, platform engineers
- **Duration:** 4 hours
- **Level:** Advanced
- **Prerequisite:** Claude Code Setup & Foundations and CLAUDE.md Mastery

The Model Context Protocol (MCP) extends Claude Code beyond your codebase and into every system your engineering team works with. This workshop covers MCP server integration — from standard servers covering 80% of needs to building custom servers for your internal tools.

**What Participants Learn:**
- MCP architecture: how Claude Code communicates with MCP servers
- Configuring MCP servers: .claude.json and project-level configuration
- High-value standard integrations: GitHub, filesystem, databases, Slack, Jira
- Wildcard syntax for MCP tool permissions
- Building a custom MCP server for an internal API or tool
- Security considerations for MCP
- Testing and debugging MCP integrations
- Managing MCP server versions and updates

**Lab: Connect Claude Code to Your Stack** — Configure Claude Code with MCP servers relevant to your team's stack and execute a real cross-system task.

**Deliverables:** MCP configuration templates, custom MCP server starter template, MCP security review checklist

---

**Claude Code Security, Guardrails & Enterprise Governance**

- **Format:** Half-day workshop — technical + management audience
- **Audience:** Engineering leads, CTOs, DevOps, security teams
- **Duration:** 4 hours
- **Level:** Intermediate to advanced

The workshop that ensures Claude Code is deployed with appropriate controls from day one — not retrofitted after an incident.

**Security Topics:**
- Permission model in depth: read, write, execute, and network permissions
- Configuring permission rules: allow lists, deny lists, scope boundaries
- Protecting sensitive files and directories
- Credential and secret handling
- Prompt injection risks in agentic systems
- Code review requirements for AI-generated code
- Dependency risk evaluation
- Audit trails and accountability
- Supply chain considerations
- Enterprise network configuration: corporate proxies and firewalls

**Governance Framework:**
- Claude Code acceptable use policy
- Branching and PR policies for AI-assisted development
- Mandatory human review checkpoints
- Incident response procedures
- Communicating Claude Code policy to engineering teams

**Deliverables:** Security configuration template, acceptable use policy (draft), AI code review checklist, incident response one-pager, security audit checklist

---

**CI/CD Integration & Production Best Practices**

- **Format:** Half-day technical workshop
- **Audience:** DevOps, platform engineers, senior developers
- **Duration:** 4 hours
- **Level:** Advanced
- **Prerequisite:** Claude Code Setup & Foundations, CLAUDE.md Mastery, and Agentic Development Workflows

The culminating technical programme. Integrating Claude Code into your CI/CD pipeline and production engineering practices — turning it from a developer-side tool into a systematic part of your delivery process.

**What Participants Learn:**
- Running Claude Code in headless and non-interactive mode
- GitHub Actions integration: triggering tasks from PR events and workflows
- Automated code review before human review
- Test generation workflows
- Documentation automation: keeping docs current with code changes
- Performance and cost management: context window, API costs, rate limits
- Environment variable and secret management for automated runs
- Monitoring and observability
- Rollback procedures

**Lab: Build Your First Claude Code CI Workflow** — Build and test a GitHub Actions workflow that uses Claude Code for automated code review on every PR.

**Deliverables:** GitHub Actions workflow templates, CI/CD integration guide, cost and performance optimisation guide

---

### Section: Recommended Pathways

**Heading:** "How to Sequence Your Training"

"Every programme can be taken standalone, but structured pathways deliver compounding returns."

**Pathway 1 — Business Team Complete Adoption**
- Timeline: 4–6 weeks
- Week 1: Claude Foundations for Business (all staff)
- Weeks 2–3: Claude for Specific Business Functions (by department)
- Week 4: Claude Cowork Deep Dive (power users and leads)
- Week 5: AI Governance, Policy & Safe Use (leadership and IT)
- Week 6: Advanced Prompt Engineering (nominated champions)
- **Outcome:** Every business team member operating with Claude as a daily work tool, with governance in place and internal champions identified.

**Pathway 2 — Engineering Team Full Deployment**
- Timeline: 4–5 weeks
- Week 1: Claude Code Setup & Foundations (all engineers)
- Week 2: CLAUDE.md Mastery (tech leads) + Security & Governance (leads + security, parallel)
- Week 3: Agentic Development Workflows (all engineers)
- Week 4: MCP Integration (senior engineers)
- Week 5: CI/CD Integration (DevOps and leads)
- **Outcome:** Engineering team fully onboarded with security-first configuration, agentic workflows, MCP integrations, and CI/CD pipeline integration operational.

**Pathway 3 — Leadership Fast Track**
- Timeline: 1 day
- A bespoke, condensed session for senior leadership covering strategic implications of Claude and Claude Code, competitive advantage, governance obligations, and how to sponsor their team's adoption programme.

**Pathway 4 — Full Organisation Rollout**
- Timeline: 8–12 weeks
- Weeks 1–2: Leadership fast track + governance framework
- Weeks 3–6: Business team track (all programmes)
- Weeks 3–7: Engineering track (all programmes, parallel stream)
- Weeks 8–10: AI Champions Program for both tracks
- Weeks 11–12: Internal showcase, retrospective, and 90-day optimisation plan
- **Outcome:** Claude adopted and actively used across every function, with internal champions sustaining adoption, governance in place, and a clear 90-day plan.

---

### Section: AI Champions

**Heading:** "Build the Internal Champions Who Keep Claude Adoption Alive"

**Intro:** "External training delivers the initial capability. Internal AI Champions sustain and grow it. The Champions Program develops a cohort of power users in both business and engineering tracks who become your organisation's permanent Claude expertise centre."

**Quote:**
> "Organisations with internal AI champions show 3x higher long-term AI adoption rates than those relying solely on external training."

**Claude Business Champions**
- Duration: 4 weeks post core training
- Cohort size: 4–8 champions per organisation

Business champions are the colleagues others turn to when they get stuck with Claude, when they want to know if Cowork can handle a new type of task, or when they need help building a better prompt.

Programme includes: Extended Cowork deep dive (advanced plugin building and workflow design), advanced prompt engineering (system prompt architecture), change management basics, monthly office hours, prompt library and update service, champion playbook for running internal demos, direct Slack/Teams community with other trained champions.

**Claude Code Champions**
- Duration: 4 weeks post core training
- Cohort size: 2–4 champions per engineering team

Claude Code champions are typically senior engineers or tech leads who become the internal authority on configuration, best practices, and agentic workflow design.

Programme includes: Advanced MCP server development, agentic architecture design, security deep dive, CLAUDE.md governance ownership, monthly technical office hours, early access to best practices library, technical Slack/Teams community.

---

### Section: Programmes at a Glance

Display as a clean, scannable table or grid:

**Business Track:**
| Programme | Duration | Audience |
|-----------|----------|----------|
| Claude Foundations for Business | Half day | All staff |
| Claude Cowork Deep Dive | Full day | Knowledge workers |
| Advanced Prompt Engineering | Half day | Power users |
| Claude for Specific Business Functions | Half day | By department |
| AI Governance, Policy & Safe Use | Half day | Leadership + IT |

**Engineering Track:**
| Programme | Duration | Audience |
|-----------|----------|----------|
| Claude Code Setup & Foundations | Half day | All developers |
| CLAUDE.md Mastery & Configuration | Half day | Tech leads |
| Agentic Development Workflows | Full day | Mid-senior developers |
| MCP Integration & Tool Expansion | Half day | Senior engineers |
| Security, Guardrails & Governance | Half day | Leads + security |
| CI/CD Integration & Production Practices | Half day | DevOps + leads |

---

### Closing CTA

**Heading:** "Start With a 30-Minute Conversation"

"Tell us about your team — how many people, which tools they're using today, what Claude products you're already subscribed to, and what you're trying to achieve. We'll recommend the right pathway and build a programme schedule that fits around your business.

No generic training. No off-the-shelf slides. Claude training built for your organisation."

**CTA:** "Talk to an AI Consultant"

---

## TASK 5: Create Service Detail Page — Packaged AI Solutions

**What to do:** Create the detail page at `/services/packaged-solutions`. Follow the same layout structure as other service detail pages.

**Hero Headline:** "Plug-and-Play AI. Built for Your Industry."

**Hero Subheadline:** "Pre-built, battle-tested automation packages that solve specific problems. Deploy in days, not months. Predictable pricing, immediate results, maintenance included."

**Overview Section:**

"Not everything needs to be custom. Some workflows are painful in exactly the same way across an entire industry. Every podcast needs repurposing. Every real estate agent needs listing content. Every service business needs faster proposals.

We've identified these universal pain points and built packaged solutions that just work. Each package is a complete, maintained automation — not a template you have to figure out yourself. We deploy it, customize it to your branding and preferences, and keep it running.

Think of it as subscribing to a solution rather than hiring for a project."

**Available Packages (display as pricing-style cards):**

Package 1 — Content & Podcast Repurposing Engine ($297/month):
"Upload a raw podcast episode or long-form content. Within 24 hours, receive: show notes, 5 social media posts (platform-optimized), short-form clip suggestions with timestamps, email newsletter draft, and a blog post. All in your brand voice."

Package 2 — Real Estate Listing Automation ($197/month):
"Add a new property. Automatically generate: MLS-optimized description, 4 social media posts with hashtags, email to your buyer list, virtual tour script, and a property flyer draft. Consistent quality across every listing."

Package 3 — Client Onboarding Automation ($397/month):
"New client signs? Trigger automatic welcome sequences, document collection workflows, internal team notifications, CRM updates, and kickoff scheduling. Every client gets a premium experience without manual coordination."

Package 4 — Proposal & Document Generation ($347/month):
"Feed in project details. Get a professionally formatted proposal, scope of work, timeline, and pricing document — customized to your templates and brand. What used to take 3 hours takes 3 minutes."

Package 5 — Review & Reputation Management ($197/month):
"Automated review requests sent at the optimal time after service delivery. AI-drafted responses to reviews (positive and negative). Weekly reputation report. Works with Google, Yelp, and industry-specific platforms."

Package 6 — Reporting & Analytics Automation ($247/month):
"Connect your data sources. Receive automated weekly/monthly reports with insights, trend analysis, and recommendations. No more half-day report building. Your team focuses on acting on the data, not compiling it."

**Section: "How Packaged Solutions Work"**

Step 1 — Choose your package and sign up
Step 2 — We customize it to your brand, preferences, and systems (1–3 days)
Step 3 — It runs. You get results. We maintain it.
Step 4 — We optimize monthly based on performance data

**CTA:** "See Which Package Fits Your Business → Book a Quick Call"

---

## TASK 6: Sharpen the Homepage Problem Statement

**Where:** Homepage → Section 2: Problem Statement

**Replace existing body copy with:**

> "There are over 400 million businesses worldwide. Roughly 1.3 billion people have tried ChatGPT. But fewer than 25 million pay for any AI tool. The gap between what's possible with AI and what businesses are actually doing is the widest it's ever been. We call it the intelligence gap — and it's costing you money every day. Leads go cold because nobody responds fast enough. Proposals take hours when they should take minutes. Your team spends half their day on tasks a well-built automation could handle in the background. The technology exists. The implementation doesn't. That's where we come in."

---

## TASK 7: Add "We Amplify Your Team" Messaging

### Change 1: Homepage — New callout strip

**Where:** Between "Why Us" section and "Design Thinking Meets AI Engineering" section.

> Heading: "We Amplify Your Team. We Don't Replace Them."
> Body: "Every solution we build is designed to make your existing people more productive — not to eliminate their roles. Your receptionist handles patients instead of playing phone tag. Your analysts focus on insights instead of data entry. Your team does the work that matters."

Design: Horizontal strip with accent background (#EBF5FB), icon on left (Users or UserPlus from lucide-react).

### Change 2: About Us — New 5th value card

**New Value — Team Amplification:** "AI should elevate your people, not replace them. We design every solution to make your existing team faster, smarter, and more focused on high-value work. We've never once pitched a 'headcount reduction' — and we never will."

### Change 3: Services hub — Note in engagement models

**Copy:** "Every engagement model is built around one principle: your team gets better, not smaller. We integrate with your people and processes, not around them."

---

## TASK 8: Add "Visible Value" to Case Study Template

**Where:** Case Studies page — update the card template.

**Add new field after "Results":**
- **Ongoing Visibility:** 1 sentence describing how the client continuously sees the value — e.g., "Real-time dashboard showing leads processed, response times, and conversion lift"

---

## TASK 9: Add Industry-Specific ROI Examples to Industries Page

**Where:** Each industry section → Below the use case bullets.

**Healthcare & Life Sciences:**
> "Example outcome: A regional health network automated clinical document summarisation, saving physicians an average of 45 minutes per day on administrative tasks — time that went directly back to patient care."

**Financial Services:**
> "Example outcome: A mid-size credit union deployed real-time fraud detection and caught $2.4M in fraudulent transactions in the first quarter — a 60% improvement over their previous rule-based system."

**Retail & E-Commerce:**
> "Example outcome: An e-commerce brand implemented demand forecasting and reduced overstock costs by 31% while cutting stockouts by 22% — a $1.8M annual impact on a $50M product catalogue."

**Manufacturing:**
> "Example outcome: A parts manufacturer deployed visual quality inspection, catching defects 12x faster than manual inspection and reducing warranty claims by 34%."

**Logistics & Transportation:**
> "Example outcome: A regional logistics company optimised delivery routing with AI, reducing fuel costs by 18% and increasing on-time deliveries from 87% to 96% across 200+ daily routes."

**Real Estate & PropTech:**
> "Example outcome: A property management company automated tenant screening and lease processing, cutting time-to-lease from 14 days to 3 days and reducing vacancy losses by $420K annually."

⚠️ These are illustrative. Replace with real data as available.

---

## TASK 10: Update Engagement Models

**Where:** Services Hub → Engagement Models section → Add after existing 5 models.

**New Model 6 — AI Academy & Training:**
"From half-day executive AI literacy sessions to multi-week AI Champions programs. Every session built around your industry, your workflows, and your team's daily tasks. For Claude-specific training, see our dedicated Claude Training Practice. Pricing: $500–$15,000 depending on format and scope."

**New Model 7 — Packaged Solutions (Monthly Subscription):**
"Pre-built, industry-tested automations that deploy in days with predictable monthly pricing. Each package includes setup, customisation, ongoing maintenance, and monthly optimisation. Starting at $197/month."

---

## TASK 11: Create the Free AI Audit Funnel

### Change 1: Add secondary CTA to key locations

Add "Get a Free AI Workflow Audit" as a secondary button/link in:
- Homepage hero
- Homepage CTA banner
- Services hub page (near engagement models)
- Footer

### Change 2: Create `/audit` landing page

**Hero Headline:** "Find Out Exactly Where AI Can Save You Time and Money"

**Hero Subheadline:** "In a free 20-minute workflow audit, we'll analyse how you operate today and show you the specific automations that would have the biggest impact — with estimated ROI for each."

**"What You Get" (3 cards):**

Card 1 — Workflow Analysis: "We map your current processes and identify the repetitive, manual tasks eating up your team's time."

Card 2 — AI Opportunity Map: "A prioritised list of automation opportunities ranked by impact, feasibility, and estimated ROI."

Card 3 — Implementation Roadmap: "A realistic plan for rolling out the highest-impact automations first, with timelines and budget estimates."

**"Who This Is For":**
"Business owners who know AI could help but aren't sure where to start, operations leaders drowning in manual processes, companies that have tried AI tools but aren't seeing ROI, and teams that are curious but sceptical. If you're a dental practice, law firm, HVAC company, real estate office, insurance agency, or any business where smart people are stuck doing repetitive work — this is exactly for you."

**"How It Works":**
Step 1: Book your audit — pick a 20-minute slot
Step 2: Quick pre-call questionnaire (3 minutes)
Step 3: We audit and prepare specific recommendations
Step 4: We walk through what to automate, in what order, and expected ROI

**"After the Audit":**
"The audit is genuinely free with no strings attached. You'll leave with a clear picture of your AI opportunities whether you work with us or not."

**CTA:** "Book Your Free AI Workflow Audit"

---

## TASK 12: Update Contact Page with Dual-Path Entry

**Where:** `/contact/page.tsx`

**Headline:** "Let's Talk About What AI Can Do for You"
**Body:** "Two ways to start — pick whichever feels right."

**Dual-Path Layout (side-by-side desktop, stacked mobile):**

**Path 1 — Free AI Workflow Audit:**
"In 20 minutes, we'll map your operations and show you where AI can save time and money. Prioritised roadmap — no strings attached."
Button: "Book a Free Audit" | Subtext: "Best for: Exploring possibilities"

**Path 2 — Discovery Call:**
"Have a specific project in mind? Let's talk scope, timeline, and approach."
Button: "Book a Discovery Call" | Subtext: "Best for: Ready to move forward"

Update dropdown to include: AI Strategy, Custom AI Development, Generative AI, Data Engineering, Speed-to-Lead, AI Academy / Training, Claude Training, Packaged Solution, Free Workflow Audit, Not Sure Yet

---

## TASK 13: Update Navigation and Footer

**Navigation:**
- Services dropdown: Add Speed-to-Lead AI Agents, AI Academy, Packaged AI Solutions alongside existing 6
- Add "Claude Training" as either a top-level nav item or a prominent link in Services dropdown (give it visibility — it's a standalone practice)

**Footer:**
- Services column: Add 3 new service names + Claude Training Practice link
- Add "Free AI Workflow Audit" as a prominent link
- Resources column: Add "Claude Training" link to `/claude-training`

---

## TASK 14: Update Project Structure and Data Files

Add to services data config:
- `speed-to-lead-agents`
- `ai-academy`
- `packaged-solutions`

Create new page routes:
- `/app/claude-training/page.tsx`
- `/app/audit/page.tsx`

---

## SUMMARY: ALL V3 CHANGES AT A GLANCE

| # | Page | Change | Type |
|---|------|--------|------|
| 1 | Services Hub | Add 3 new service cards: Speed-to-Lead, AI Academy, Packaged Solutions | New content |
| 2 | /services/speed-to-lead-agents | New detail page | New page |
| 3 | /services/ai-academy | New detail page with 4 training programmes from AI Academy content | New page |
| 4 | /claude-training | Standalone Claude Training Practice (2 tracks, 11 programmes, pathways, champions) | New page |
| 5 | /services/packaged-solutions | New detail page with 6 packages | New page |
| 6 | Homepage | Sharpen problem statement with "intelligence gap" data | Copy update |
| 7 | Homepage + About + Services | Add "We Amplify Your Team" messaging | New content |
| 8 | Case Studies | Add "Ongoing Visibility" field to template | Template update |
| 9 | Industries | Add ROI example to each industry section | Copy addition |
| 10 | Services Hub | Add 2 new engagement models (Training, Packaged) | Copy addition |
| 11 | New Page: /audit | Free AI workflow audit landing page | New page |
| 12 | Contact | Dual-path entry (Audit vs. Discovery Call) | Layout + copy |
| 13 | Navigation + Footer | Add new services, Claude Training, audit link | Structure update |
| 14 | Data Files | Add services to config + create new page routes | Technical |

---

**End of Update Addendum V3 — Paste tasks into Claude Code sequentially**
