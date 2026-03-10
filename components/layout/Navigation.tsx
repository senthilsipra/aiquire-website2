"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  BrainCircuit,
  Sparkles,
  Code2,
  Settings2,
  GraduationCap,
  Package,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  desc: string;
}

interface NavLink {
  label: string;
  href: string;
  hasMega?: boolean;
  hasTrainingMega?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy & Business Consulting",
    icon: Lightbulb,
    desc: "Know where AI fits.",
  },
  {
    slug: "ai-ml-development",
    title: "AI/ML Development",
    icon: BrainCircuit,
    desc: "Custom models for your data.",
  },
  {
    slug: "generative-ai-llm",
    title: "Generative AI & LLM Solutions",
    icon: Sparkles,
    desc: "Beyond chatbots.",
  },
  {
    slug: "ai-powered-software",
    title: "AI-Powered Software Development",
    icon: Code2,
    desc: "Full-stack with AI built in.",
  },
  {
    slug: "mlops-infrastructure",
    title: "MLOps & AI Infrastructure",
    icon: Settings2,
    desc: "Models in production.",
  },
  {
    slug: "ai-academy",
    title: "AI Training",
    icon: GraduationCap,
    desc: "Upskill your entire team.",
  },
  {
    slug: "packaged-solutions",
    title: "Packaged AI Solutions",
    icon: Package,
    desc: "Ready-to-deploy AI bundles.",
  },
];

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services", hasMega: true },
  { label: "AI Training", href: "/services/ai-academy", hasTrainingMega: true },
  { label: "Our Approach", href: "/approach" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

// ─── Mega Menu ─────────────────────────────────────────────────────────────────

function MegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 mt-0 w-[680px] -translate-x-1/2",
        "transition-all duration-200 ease-out",
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      )}
      aria-hidden={!isOpen}
    >
      {/* Invisible bridge to prevent gap-triggered mouseleave */}
      <div className="h-3 w-full" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a2035] shadow-2xl shadow-black/40">
        {/* Header strip */}
        <div className="border-b border-white/10 px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2980B9]">
            Our Services
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "group flex items-start gap-4 bg-[#0a2035] px-5 py-4",
                  "transition-colors duration-150 hover:bg-[#112d47]"
                )}
              >
                <div
                  className={cn(
                    "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                    "bg-[#2980B9]/15 text-[#3498DB]",
                    "transition-colors duration-150 group-hover:bg-[#2980B9]/25 group-hover:text-white"
                  )}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-white transition-colors duration-150 group-hover:text-[#3498DB]">
                    {service.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                    {service.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-white/10 px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/services"
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-medium",
              "text-[#3498DB] transition-colors duration-150 hover:text-white"
            )}
          >
            View all services
            <ChevronDown size={14} className="-rotate-90" />
          </Link>
          <Link
            href="/claude-training"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-[#2980B9]/40 bg-[#2980B9]/10 px-4 py-2",
              "text-xs font-semibold text-[#3498DB]",
              "transition-colors duration-150 hover:bg-[#2980B9]/20 hover:text-white"
            )}
          >
            <BookOpen size={13} strokeWidth={1.75} />
            Claude Training Practice
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Training Mega Menu ────────────────────────────────────────────────────────

function TrainingMegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 mt-0 w-[340px] -translate-x-1/2",
        "transition-all duration-200 ease-out",
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      )}
      aria-hidden={!isOpen}
    >
      {/* Invisible bridge */}
      <div className="h-3 w-full" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a2035] shadow-2xl shadow-black/40">
        {/* Header strip */}
        <div className="border-b border-white/10 px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2980B9]">
            Training Programmes
          </p>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-px bg-white/5 p-px">
          <Link
            href="/services/ai-academy"
            className={cn(
              "group flex items-start gap-4 bg-[#0a2035] px-5 py-4",
              "transition-colors duration-150 hover:bg-[#112d47]"
            )}
          >
            <div
              className={cn(
                "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                "bg-[#2980B9]/15 text-[#3498DB]",
                "transition-colors duration-150 group-hover:bg-[#2980B9]/25 group-hover:text-white"
              )}
            >
              <GraduationCap size={18} strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug text-white transition-colors duration-150 group-hover:text-[#3498DB]">
                AI Training
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                Upskill your entire team.
              </p>
            </div>
          </Link>

          <Link
            href="/claude-training"
            className={cn(
              "group flex items-start gap-4 bg-[#0a2035] px-5 py-4",
              "transition-colors duration-150 hover:bg-[#112d47]"
            )}
          >
            <div
              className={cn(
                "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                "bg-[#2980B9]/15 text-[#3498DB]",
                "transition-colors duration-150 group-hover:bg-[#2980B9]/25 group-hover:text-white"
              )}
            >
              <BookOpen size={18} strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug text-white transition-colors duration-150 group-hover:text-[#3498DB]">
                Claude Training
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                Structured Claude mastery programmes.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Menu ───────────────────────────────────────────────────────────────

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}

function MobileMenu({ isOpen, pathname, onClose }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [trainingExpanded, setTrainingExpanded] = useState(false);

  // Reset expanded states when menu closes
  useEffect(() => {
    if (!isOpen) {
      setServicesExpanded(false);
      setTrainingExpanded(false);
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-[#0F2B46]",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Mobile nav header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <Link
            href="/"
            onClick={onClose}
            aria-label="Aiquire home"
            className="flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Aiquire"
              height={28}
              style={{ height: 28, width: "auto", display: "block" }}
            />
          </Link>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {/* Services with accordion */}
            <li>
              <button
                onClick={() => setServicesExpanded((prev) => !prev)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3",
                  "text-left text-base font-medium transition-colors duration-150",
                  pathname.startsWith("/services")
                    ? "bg-[#2980B9]/20 text-[#3498DB]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-white/50 transition-transform duration-200",
                    servicesExpanded && "rotate-180"
                  )}
                />
              </button>

              {/* Accordion content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  servicesExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <ul className="mt-1 space-y-0.5 pl-2">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={onClose}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-4 py-2.5",
                            "text-sm text-white/60 transition-colors duration-150",
                            "hover:bg-white/10 hover:text-white"
                          )}
                        >
                          <Icon size={15} className="shrink-0 text-[#2980B9]" strokeWidth={1.75} />
                          <span>{service.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[#3498DB] transition-colors hover:text-white"
                    >
                      View all services →
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* AI Training accordion */}
            <li>
              <button
                onClick={() => setTrainingExpanded((prev) => !prev)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3",
                  "text-left text-base font-medium transition-colors duration-150",
                  pathname.startsWith("/services/ai-academy") || pathname.startsWith("/claude-training")
                    ? "bg-[#2980B9]/20 text-[#3498DB]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <span>AI Training</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-white/50 transition-transform duration-200",
                    trainingExpanded && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  trainingExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <ul className="mt-1 space-y-0.5 pl-2">
                  <li>
                    <Link
                      href="/services/ai-academy"
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-2.5",
                        "text-sm text-white/60 transition-colors duration-150",
                        "hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <GraduationCap size={15} className="shrink-0 text-[#2980B9]" strokeWidth={1.75} />
                      <span>AI Training</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/claude-training"
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-2.5",
                        "text-sm text-white/60 transition-colors duration-150",
                        "hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <BookOpen size={15} className="shrink-0 text-[#2980B9]" strokeWidth={1.75} />
                      <span>Claude Training</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Other nav links (exclude Services mega + AI Training) */}
            {NAV_LINKS.filter((link) => !link.hasMega && !link.hasTrainingMega).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex w-full items-center rounded-xl px-4 py-3",
                    "text-base font-medium transition-colors duration-150",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "bg-[#2980B9]/20 text-[#3498DB]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA at bottom */}
        <div className="border-t border-white/10 px-6 py-6">
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              "block w-full rounded-full bg-[#2980B9] px-6 py-3.5",
              "text-center text-base font-semibold text-white",
              "transition-colors duration-150 hover:bg-[#3498DB]"
            )}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}

// ─── Navigation ────────────────────────────────────────────────────────────────

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);
  const trainingRef = useRef<HTMLLIElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trainingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setTrainingOpen(false);
  }, [pathname]);

  // Keyboard: close mega menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setTrainingOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMegaMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMegaOpen(true);
  };

  const handleMegaMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 120);
  };

  const handleTrainingMouseEnter = () => {
    if (trainingTimerRef.current) {
      clearTimeout(trainingTimerRef.current);
      trainingTimerRef.current = null;
    }
    setTrainingOpen(true);
  };

  const handleTrainingMouseLeave = () => {
    trainingTimerRef.current = setTimeout(() => {
      setTrainingOpen(false);
    }, 120);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-[#0F2B46]",
        "transition-shadow duration-300",
        scrolled && "shadow-lg shadow-black/30"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center py-3.5 transition-opacity duration-150 hover:opacity-80"
          aria-label="Aiquire home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="Aiquire"
            height={36}
            style={{ height: 36, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);

              if (link.hasMega) {
                return (
                  <li
                    key={link.href}
                    ref={megaRef}
                    className="relative"
                    onMouseEnter={handleMegaMouseEnter}
                    onMouseLeave={handleMegaMouseLeave}
                  >
                    <button
                      onClick={() => setMegaOpen((prev) => !prev)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 px-4 py-6 text-sm font-medium",
                        "transition-colors duration-150",
                        active || megaOpen
                          ? "text-[#3498DB]"
                          : "text-white/75 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={cn(
                          "transition-transform duration-200",
                          megaOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Bottom active indicator */}
                    {(active || megaOpen) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#2980B9]" />
                    )}

                    <MegaMenu isOpen={megaOpen} />
                  </li>
                );
              }

              if (link.hasTrainingMega) {
                return (
                  <li
                    key={link.href}
                    ref={trainingRef}
                    className="relative"
                    onMouseEnter={handleTrainingMouseEnter}
                    onMouseLeave={handleTrainingMouseLeave}
                  >
                    <button
                      onClick={() => setTrainingOpen((prev) => !prev)}
                      aria-expanded={trainingOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 px-4 py-6 text-sm font-medium",
                        "transition-colors duration-150",
                        active || trainingOpen
                          ? "text-[#3498DB]"
                          : "text-white/75 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={cn(
                          "transition-transform duration-200",
                          trainingOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Bottom active indicator */}
                    {(active || trainingOpen) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#2980B9]" />
                    )}

                    <TrainingMegaMenu isOpen={trainingOpen} />
                  </li>
                );
              }

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-6 text-sm font-medium",
                      "transition-colors duration-150",
                      active ? "text-[#3498DB]" : "text-white/75 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>

                  {/* Bottom active indicator */}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#2980B9]" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="ml-4 pl-4">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center rounded-full bg-[#2980B9] px-5 py-2.5",
                "text-sm font-semibold text-white",
                "transition-colors duration-150 hover:bg-[#3498DB]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3498DB]"
              )}
            >
              Book a Call
            </Link>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            "text-white/80 transition-colors hover:bg-white/10 hover:text-white",
            "lg:hidden"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileOpen}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
