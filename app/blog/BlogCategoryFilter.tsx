"use client";

import { useState } from "react";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { type BlogPost } from "@/lib/blog";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "AI Strategy": { bg: "#EBF5FB", text: "#2980B9", border: "#2980B9" },
  Engineering: { bg: "#E8F8F5", text: "#1ABC9C", border: "#1ABC9C" },
  "Generative AI": { bg: "#FEF9E7", text: "#F39C12", border: "#F39C12" },
  "Industry Insights": { bg: "#F5EEF8", text: "#8E44AD", border: "#8E44AD" },
  Tutorials: { bg: "#EAFAF1", text: "#27AE60", border: "#27AE60" },
  General: { bg: "#F8F9FA", text: "#5D6D7E", border: "#5D6D7E" },
};

function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] ?? { bg: "#F8F9FA", text: "#5D6D7E", border: "#5D6D7E" };
}

interface BlogCategoryFilterProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
  categories: string[];
}

export function BlogCategoryFilter({ posts, allPosts, categories }: BlogCategoryFilterProps) {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? posts
      : allPosts.filter((p) => p.category === selected);

  return (
    <div className="mt-8">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={selected === cat}
            onClick={() => setSelected(cat)}
            className={cn(
              "rounded-full px-4 py-2 font-body text-sm font-medium transition-all duration-200",
              "border",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              selected === cat
                ? "bg-accent text-white border-accent shadow-sm"
                : "bg-white text-textSecondary border-border hover:border-accent/40 hover:text-textPrimary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <p className="font-body text-textSecondary text-center py-12">
          No articles in this category yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => {
            const style = getCategoryStyle(post.category);
            const excerpt =
              post.description.length > 120
                ? post.description.slice(0, 120).trimEnd() + "…"
                : post.description;

            return (
              <article
                key={post.slug}
                className="group flex flex-col h-full rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {post.coverImage ? (
                  <div className="w-full h-48 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-1 w-full shrink-0" style={{ backgroundColor: style.text }} aria-hidden="true" />
                )}
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest border"
                      style={{ color: style.text, borderColor: style.border, backgroundColor: style.bg }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-3 font-heading font-bold text-primary text-lg leading-snug tracking-tight group-hover:text-accent transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none focus-visible:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-5 font-body text-sm leading-relaxed text-textSecondary flex-1">{excerpt}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-border">
                    <span className="font-body text-xs font-medium text-textPrimary">{post.author}</span>
                    <span className="text-border ml-auto" aria-hidden="true">·</span>
                    <time dateTime={post.date} className="font-body text-xs text-textSecondary">{formatDate(post.date)}</time>
                    <span className="text-border" aria-hidden="true">·</span>
                    <span className="font-body text-xs text-textSecondary">{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: style.text }}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
