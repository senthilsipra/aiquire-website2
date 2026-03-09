"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceLink {
  slug: string;
  title: string;
}

interface CompanyLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_SERVICES: ServiceLink[] = [
  { slug: "ai-strategy-consulting", title: "AI Strategy & Business Consulting" },
  { slug: "ai-ml-development", title: "AI/ML Development" },
  { slug: "generative-ai-llm", title: "Generative AI & LLM Solutions" },
  { slug: "ai-powered-software", title: "AI-Powered Software Development" },
  { slug: "data-engineering-analytics", title: "Data Engineering & Analytics" },
  { slug: "mlops-infrastructure", title: "MLOps & AI Infrastructure" },
  { slug: "speed-to-lead-agents", title: "Speed-to-Lead AI Agents" },
  { slug: "ai-academy", title: "AI Academy" },
  { slug: "packaged-solutions", title: "Packaged AI Solutions" },
];

const COMPANY_LINKS: CompanyLink[] = [
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Claude Training Practice", href: "/claude-training" },
  { label: "Free AI Workflow Audit", href: "/audit" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/aiquire",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/aiquire",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/aiquire",
    icon: Github,
  },
];

// ─── Newsletter Form ──────────────────────────────────────────────────────────

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Placeholder for real submission — replace with your newsletter API call
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-[#27AE60]/30 bg-[#27AE60]/10 px-4 py-4">
        <CheckCircle2
          size={20}
          className="mt-0.5 shrink-0 text-[#27AE60]"
          strokeWidth={1.75}
        />
        <div>
          <p className="text-sm font-medium text-white">You&apos;re in!</p>
          <p className="mt-0.5 text-xs text-white/50">
            Practical AI insights, straight to your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="relative">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <div className="flex items-center overflow-hidden rounded-xl border border-white/15 bg-white/5 transition-colors focus-within:border-[#2980B9]">
          <Mail
            size={16}
            className="ml-3.5 shrink-0 text-white/30"
            strokeWidth={1.75}
          />
          <input
            id="footer-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            disabled={status === "loading"}
            className={cn(
              "flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder-white/30",
              "outline-none disabled:cursor-not-allowed disabled:opacity-50"
            )}
            autoComplete="email"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "mr-1.5 flex items-center gap-1.5 rounded-lg px-4 py-2",
              "text-xs font-semibold text-white",
              "bg-[#2980B9] transition-colors hover:bg-[#3498DB]",
              "disabled:cursor-not-allowed disabled:opacity-60",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3498DB]"
            )}
            aria-label="Subscribe to newsletter"
          >
            {status === "loading" ? (
              <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : (
              <>
                Subscribe
                <ArrowRight size={13} strokeWidth={2.25} />
              </>
            )}
          </button>
        </div>
      </div>

      {errorMsg && (
        <p className="mt-2 text-xs text-red-400" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="mt-3 text-xs text-white/35">
        No spam. Practical AI insights only. Unsubscribe anytime.
      </p>
    </form>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2B46]" aria-label="Site footer">
      {/* Main content */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
          {/* ── Col 1: Brand ─────────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className={cn(
                "inline-block text-2xl font-bold tracking-tight text-white",
                "transition-opacity duration-150 hover:opacity-80"
              )}
              style={{ fontFamily: "var(--font-heading)" }}
              aria-label="Aiquire home"
            >
              Aiquire
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              We combine management consulting rigor with production-grade AI
              engineering to deliver measurable business impact.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg",
                      "border border-white/15 text-white/50",
                      "transition-colors duration-150",
                      "hover:border-[#2980B9]/60 hover:bg-[#2980B9]/15 hover:text-[#3498DB]"
                    )}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Col 2: Services ──────────────────────────────────────── */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#2980B9]">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={cn(
                      "text-sm text-white/55 transition-colors duration-150",
                      "hover:text-[#3498DB]"
                    )}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Company ───────────────────────────────────────── */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#2980B9]">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-white/55 transition-colors duration-150",
                      "hover:text-[#3498DB]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Newsletter ────────────────────────────────────── */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#2980B9]">
              AI Insights Newsletter
            </h3>
            <p className="mb-5 text-sm text-white/55">
              Practical guides, case studies, and AI trends — every two weeks.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="h-px bg-white/10" />

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/35">
            &copy; {currentYear} Aiquire, Inc. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs text-white/35 transition-colors duration-150 hover:text-[#3498DB]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs text-white/35 transition-colors duration-150 hover:text-[#3498DB]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
