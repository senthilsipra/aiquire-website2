import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_CATEGORIES, type BlogPost } from "@/lib/blog";
import { getAllCmsPosts } from "@/lib/blog-cms";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { cn, formatDate } from "@/lib/utils";
import { cookies } from "next/headers";
import { Plus } from "lucide-react";
import { BlogCategoryFilter } from "./BlogCategoryFilter";
import { NewsletterForm } from "./NewsletterForm";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog — AI Insights & Perspectives",
  description:
    "Practical perspectives on AI strategy, engineering, and deployment from the Aiquire team. Articles on LLMs, MLOps, data engineering, and AI business cases.",
  keywords: [
    "AI blog",
    "machine learning insights",
    "AI strategy articles",
    "LLM engineering",
    "MLOps",
    "generative AI insights",
    "AI consulting blog",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Practical perspectives on AI strategy, engineering, and deployment from the front lines.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description: "AI strategy, engineering, and deployment insights from Aiquire.",
  },
};

// ─── Category color map ───────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "AI Strategy": {
    bg: "#EBF5FB",
    text: "#2980B9",
    border: "#2980B9",
  },
  "Engineering": {
    bg: "#E8F8F5",
    text: "#1ABC9C",
    border: "#1ABC9C",
  },
  "Generative AI": {
    bg: "#FEF9E7",
    text: "#F39C12",
    border: "#F39C12",
  },
  "Industry Insights": {
    bg: "#F5EEF8",
    text: "#8E44AD",
    border: "#8E44AD",
  },
  "Tutorials": {
    bg: "#EAFAF1",
    text: "#27AE60",
    border: "#27AE60",
  },
  "General": {
    bg: "#F8F9FA",
    text: "#5D6D7E",
    border: "#5D6D7E",
  },
};

function getCategoryStyle(category: string) {
  return (
    CATEGORY_COLORS[category] ?? {
      bg: "#F8F9FA",
      text: "#5D6D7E",
      border: "#5D6D7E",
    }
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bgLight border-b border-border">
      {/* Subtle decorative shapes */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-bgBlue blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-10 h-48 w-48 rounded-full bg-accent/5 blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-bgBlue border border-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Aiquire Blog
          </p>
          <h1
            className={cn(
              "font-heading font-bold text-primary",
              "text-display-sm md:text-display-md",
              "leading-tight tracking-tight"
            )}
          >
            Insights from the{" "}
            <span className="text-accent">AI Front Lines</span>
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-textSecondary md:text-lg max-w-xl">
            Practical perspectives on AI strategy, engineering, and deployment
            — written by people who build production AI systems for a living.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Featured post card ───────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: BlogPost }) {
  const style = getCategoryStyle(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block w-full",
        "rounded-2xl border border-border bg-white",
        "shadow-sm hover:shadow-xl transition-all duration-300",
        "overflow-hidden"
      )}
      aria-label={`Featured article: ${post.title}`}
    >
      <div className="flex flex-col lg:flex-row">
        {post.coverImage ? (
          <div className="lg:w-2/5 shrink-0 relative h-64 lg:h-auto overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r"
              aria-hidden="true"
            />
          </div>
        ) : (
          <div
            className="lg:w-2 shrink-0 h-1 lg:h-auto"
            style={{ backgroundColor: style.text }}
            aria-hidden="true"
          />
        )}

        <div className="flex-1 p-8 md:p-10">
          {/* Top row: category + featured badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest border"
              style={{
                color: style.text,
                borderColor: style.border,
                backgroundColor: style.bg,
              }}
            >
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-primary text-white font-mono text-[11px] font-semibold uppercase tracking-widest">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse"
                aria-hidden="true"
              />
              Featured
            </span>
          </div>

          {/* Title */}
          <h2
            className={cn(
              "mb-4 font-heading font-bold text-primary",
              "text-2xl md:text-3xl lg:text-display-sm",
              "leading-snug tracking-tight",
              "group-hover:text-accent transition-colors duration-200"
            )}
          >
            {post.title}
          </h2>

          {/* Description */}
          <p className="mb-6 font-body text-base leading-relaxed text-textSecondary max-w-2xl">
            {post.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Author avatar placeholder + name */}
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-bgBlue font-heading text-xs font-bold text-accent"
                aria-hidden="true"
              >
                {post.author
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <span className="font-body text-sm font-medium text-textPrimary">
                {post.author}
              </span>
            </div>

            <span className="text-border" aria-hidden="true">·</span>

            <time
              dateTime={post.date}
              className="font-body text-sm text-textSecondary"
            >
              {formatDate(post.date)}
            </time>

            <span className="text-border" aria-hidden="true">·</span>

            <span className="font-body text-sm text-textSecondary">
              {post.readTime}
            </span>
          </div>

          {/* CTA */}
          <span
            className={cn(
              "inline-flex items-center gap-2",
              "rounded-lg border border-accent bg-accent px-5 py-2.5",
              "font-body text-sm font-semibold text-white",
              "transition-all duration-200",
              "group-hover:bg-accent-light group-hover:border-accent-light",
              "focus-visible:outline-none"
            )}
          >
            Read Article
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Newsletter CTA ───────────────────────────────────────────────────────────

function NewsletterCTA() {
  return (
    <section
      className="relative overflow-hidden bg-bgBlue border-y border-border"
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative blob */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Newsletter
            </p>
            <h2
              id="newsletter-heading"
              className="font-heading font-bold text-primary text-display-sm leading-tight tracking-tight"
            >
              Get AI insights in your inbox
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-textSecondary max-w-md mx-auto lg:mx-0">
              Practical AI content — no hype, no fluff. Bi-weekly articles on
              strategy, engineering, and real-world deployment. Unsubscribe
              anytime.
            </p>
          </div>

          {/* Right: email form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <NewsletterForm />
            <p className="mt-2.5 font-body text-xs text-textSecondary text-center sm:text-left">
              No spam. Unsubscribe at any time. Read our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPage() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get('admin_session')?.value === 'true';

  // Data fetching on the server from Supabase
  const allPosts = await getAllCmsPosts();
  const featuredPost = allPosts.find((p) => p.featured) ?? null;
  // Non-featured posts (or all posts if none is featured)
  const remainingPosts = allPosts.filter((p) => !p.featured || p !== featuredPost);

  return (
    <>
      {isAdmin && (
        <Link
          href="/admin/blog/new"
          className="fixed bottom-8 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl shadow-accent/20 transition-all hover:scale-110 hover:bg-accent-light active:scale-95 group"
          title="Create New Post"
        >
          <Plus size={24} strokeWidth={2.5} />
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            Create New Post
          </span>
        </Link>
      )}

      <Hero />

      {/* Featured post */}
      {featuredPost && (
        <SectionWrapper bg="white" id="featured">
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Article
          </p>
          <FeaturedPost post={featuredPost} />
        </SectionWrapper>
      )}

      {/* Category filter + posts grid — BlogCategoryFilter is a client component */}
      <SectionWrapper bg="light" id="all-articles">
        <SectionHeading
          overline="All Articles"
          heading="Browse the Full Archive"
          subheading="Filter by topic or scroll to explore every post."
          align="left"
        />

        {/*
          BlogCategoryFilter owns the selected-category state (client).
          We pass all non-featured posts and the category list from the server.
        */}
        <BlogCategoryFilter
          posts={remainingPosts}
          allPosts={allPosts}
          categories={BLOG_CATEGORIES}
        />
      </SectionWrapper>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </>
  );
}
