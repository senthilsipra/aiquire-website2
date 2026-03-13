"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/constants";

// ─── Metadata ─────────────────────────────────────────────────────────────────
// Note: metadata export requires a server component. For contact page with client
// form we use a wrapper pattern — metadata is handled by layout defaults.

// ─── Zod schema ───────────────────────────────────────────────────────────────

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid work email"),
  company: z.string().min(1, "Company name is required"),
  interest: z.enum(
    ["AI Strategy", "Custom AI Development", "Generative AI", "Data Engineering", "Speed-to-Lead AI Agents", "AI Academy / Training", "Claude Training", "Packaged Solution", "Free Workflow Audit", "Not Sure Yet"],
    { required_error: "Please select an option" }
  ),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Form field helper ────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 font-body text-xs text-red-600" role="alert">
      {message}
    </p>
  );
}

// ─── Contact form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("submitting");
    try {
      // TODO: Replace with real API endpoint (e.g. /api/contact → email service)
      await new Promise((res) => setTimeout(res, 1200));
      console.log("Form data:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
          <svg className="h-8 w-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-primary text-2xl mb-3">Message Sent!</h3>
        <p className="font-body text-textSecondary mb-6 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-body text-sm text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = cn(
    "w-full rounded-xl border border-border bg-white px-4 py-3",
    "font-body text-sm text-textPrimary placeholder:text-textSecondary/60",
    "transition-colors duration-200",
    "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block font-body text-sm font-medium text-textPrimary mb-1.5">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          className={cn(inputClass, errors.fullName && "border-red-400 focus:border-red-400 focus:ring-red-200")}
          {...register("fullName")}
        />
        <FieldError message={errors.fullName?.message} />
      </div>

      {/* Work Email */}
      <div>
        <label htmlFor="workEmail" className="block font-body text-sm font-medium text-textPrimary mb-1.5">
          Work Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="workEmail"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          className={cn(inputClass, errors.workEmail && "border-red-400 focus:border-red-400 focus:ring-red-200")}
          {...register("workEmail")}
        />
        <FieldError message={errors.workEmail?.message} />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block font-body text-sm font-medium text-textPrimary mb-1.5">
          Company Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Corp"
          className={cn(inputClass, errors.company && "border-red-400 focus:border-red-400 focus:ring-red-200")}
          {...register("company")}
        />
        <FieldError message={errors.company?.message} />
      </div>

      {/* Interest dropdown */}
      <div>
        <label htmlFor="interest" className="block font-body text-sm font-medium text-textPrimary mb-1.5">
          What are you looking for? <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="interest"
          className={cn(inputClass, "appearance-none cursor-pointer", errors.interest && "border-red-400")}
          {...register("interest")}
          defaultValue=""
        >
          <option value="" disabled>Select an option…</option>
          <option>AI Strategy</option>
          <option>Custom AI Development</option>
          <option>Generative AI</option>
          <option>Data Engineering</option>
          <option>Speed-to-Lead AI Agents</option>
          <option>AI Academy / Training</option>
          <option>Claude Training</option>
          <option>Packaged Solution</option>
          <option>Free Workflow Audit</option>
          <option>Not Sure Yet</option>
        </select>
        <FieldError message={errors.interest?.message} />
      </div>

      {/* Optional message */}
      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-textPrimary mb-1.5">
          Tell us a bit more{" "}
          <span className="font-normal text-textSecondary">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Briefly describe your project, timeline, or questions…"
          className={cn(inputClass, "resize-none")}
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full h-13 rounded-xl font-body font-semibold text-base",
          "bg-accent text-white border border-accent",
          "transition-all duration-200",
          "hover:bg-accent-light hover:border-accent-light",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "error" && (
        <p className="font-body text-sm text-red-600 text-center" role="alert">
          Something went wrong. Please try again or email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ── Two-col hero + form ─────────────────────────────────────── */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: dark info panel */}
        <div className="relative overflow-hidden bg-primary flex flex-col justify-center px-8 py-20 lg:py-28 lg:px-16">
          {/* Decorative blob */}
          <span aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 max-w-lg">
            <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Get in Touch
            </p>

            <h1 className="font-heading font-bold text-white text-display-sm md:text-display-md leading-tight tracking-tight">
              Let&apos;s Talk About What AI Can Do for You
            </h1>

            <p className="mt-5 font-body text-base leading-relaxed text-white/75">
              Two ways to start — pick whichever feels right.
            </p>

            {/* Dual-path cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Path 1: Free AI Workflow Audit */}
              <div className="rounded-xl border border-white/20 bg-white/5 p-4 flex flex-col gap-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent-light/80">
                  For exploring possibilities
                </p>
                <h2 className="font-heading font-bold text-white text-lg leading-snug">
                  Free AI Workflow Audit
                </h2>
                <p className="font-body text-sm leading-relaxed text-white/65 flex-1">
                  In 20 minutes, we&apos;ll map your operations and show you where AI can save time
                  and money. Prioritised roadmap — no strings attached.
                </p>
                <Link
                  href="/audit"
                  className={cn(
                    "inline-flex items-center justify-center rounded-lg px-4 py-2.5",
                    "bg-accent text-white font-body text-sm font-semibold border border-accent",
                    "transition-all duration-200 hover:bg-accent-light hover:border-accent-light",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  )}
                >
                  Book a Free Audit →
                </Link>
              </div>

              {/* Path 2: Discovery Call */}
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 flex flex-col gap-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent-light/80">
                  Ready to move forward
                </p>
                <h2 className="font-heading font-bold text-white text-lg leading-snug">
                  Discovery Call
                </h2>
                <p className="font-body text-sm leading-relaxed text-white/65 flex-1">
                  Have a specific project in mind? Let&apos;s talk scope, timeline, and approach.
                </p>
                <a
                  href="#contact-form"
                  className={cn(
                    "inline-flex items-center justify-center rounded-lg px-4 py-2.5",
                    "bg-transparent text-white font-body text-sm font-semibold border border-white/40",
                    "transition-all duration-200 hover:bg-white/10 hover:border-white/70",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  )}
                >
                  Send a Message →
                </a>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-10 space-y-4">
              {[
                { icon: "🕐", label: "Response within 1 business day" },
                { icon: "📞", label: "Free 30-minute discovery call included" },
                { icon: "🔒", label: "Your information is never shared" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">{icon}</span>
                  <span className="font-body text-sm text-white/70">{label}</span>
                </div>
              ))}
            </div>

            {/* Direct email */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-body text-sm text-white/50 mb-2">Prefer email?</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-body font-semibold text-accent-light hover:text-white transition-colors duration-200"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Right: form panel */}
        <div id="contact-form" className="flex items-center justify-center bg-bgLight px-6 py-16 lg:px-12">
          <div className="w-full max-w-lg">
            <div className="rounded-2xl bg-white border border-border shadow-sm p-8 md:p-10">
              <h2 className="font-heading font-bold text-primary text-2xl mb-2">
                Send us a message
              </h2>
              <p className="font-body text-sm text-textSecondary mb-8">
                Takes 2 minutes. We&apos;ll respond within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Calendly section ────────────────────────────────────────── */}
      <section className="bg-white border-t border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Skip the form
          </p>
          <h2 className="font-heading font-bold text-primary text-3xl mb-4">
            Prefer to Book Directly?
          </h2>
          <p className="font-body text-textSecondary mb-10 max-w-lg mx-auto">
            Schedule a free 30-minute discovery call on our calendar. No preparation needed — just a conversation about your goals.
          </p>

          {/* Calendly embed placeholder */}
          <div
            className="mx-auto max-w-2xl rounded-2xl border-2 border-dashed border-accent/30 bg-bgBlue p-12 flex flex-col items-center gap-4"
            data-calendly-url="https://calendly.com/aiquire/discovery-call"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15">
              <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div>
              <p className="font-heading font-semibold text-primary text-lg">
                30-Minute Discovery Call
              </p>
              <p className="font-body text-sm text-textSecondary mt-1">
                Calendly widget will load here — add your embed URL in the component
              </p>
            </div>
            <a
              href="https://calendly.com/aiquire/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-lg px-7",
                "bg-accent text-white font-body text-sm font-semibold",
                "hover:bg-accent-light transition-colors duration-200"
              )}
            >
              Open Calendly →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
