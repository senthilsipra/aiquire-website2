"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up real email service
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p className="font-body text-sm font-medium text-success py-3">
        You&apos;re on the list! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3"
      aria-label="Email newsletter signup"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Work email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        autoComplete="email"
        placeholder="your@company.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={cn(
          "flex-1 min-w-0 rounded-lg border border-border bg-white",
          "px-4 py-3 font-body text-sm text-textPrimary",
          "placeholder:text-textSecondary/60",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent",
          "transition-all duration-200"
        )}
      />
      <button
        type="submit"
        className={cn(
          "shrink-0 inline-flex items-center justify-center",
          "rounded-lg px-6 py-3",
          "bg-accent text-white border border-accent",
          "font-body text-sm font-semibold",
          "transition-all duration-200",
          "hover:bg-accent-light hover:border-accent-light",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
