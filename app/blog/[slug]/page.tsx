import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// ─── Category color map ───────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  "AI Strategy": "bg-blue-50 text-blue-700 border-blue-200",
  "Engineering": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Generative AI": "bg-purple-50 text-purple-700 border-purple-200",
  "Industry Insights": "bg-orange-50 text-orange-700 border-orange-200",
  "Tutorials": "bg-teal-50 text-teal-700 border-teal-200",
};

// ─── MDX prose styles ─────────────────────────────────────────────────────────

const mdxComponents = {};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const categoryClass =
    CATEGORY_COLORS[post.category] ?? "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-bgLight border-b border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-body text-sm text-textSecondary">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <span aria-hidden="true">›</span>
            <span className="text-textPrimary truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Category + meta */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1",
                  "font-mono text-xs font-medium",
                  categoryClass
                )}
              >
                {post.category}
              </span>
              <span className="font-body text-sm text-textSecondary">
                {post.readTime}
              </span>
              <span className="font-body text-sm text-textSecondary">
                {formatDate(post.date)}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-primary text-3xl sm:text-4xl md:text-display-sm leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Description lead */}
            <p className="mt-5 font-body text-lg leading-relaxed text-textSecondary">
              {post.description}
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-heading font-bold text-sm">
                A
              </div>
              <div>
                <p className="font-body font-semibold text-textPrimary text-sm">{post.author}</p>
                <p className="font-body text-xs text-textSecondary">Aiquire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          {/* Article content */}
          <article
            className={cn(
              "font-body text-textPrimary",
              // Prose-like styles without the prose plugin
              "[&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4",
              "[&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3",
              "[&_p]:mb-5 [&_p]:leading-[1.75] [&_p]:text-[1.0625rem]",
              "[&_ul]:mb-5 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2",
              "[&_ol]:mb-5 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-2",
              "[&_li]:leading-relaxed [&_li]:text-[1.0625rem]",
              "[&_strong]:font-semibold [&_strong]:text-textPrimary",
              "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent-light",
              "[&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-textSecondary [&_blockquote]:my-6",
              "[&_code]:font-mono [&_code]:text-sm [&_code]:bg-bgLight [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
              "[&_pre]:bg-primary [&_pre]:text-white [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:my-6",
              "[&_hr]:border-border [&_hr]:my-10"
            )}
          >
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* CTA Card */}
              <div className="rounded-2xl bg-primary p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-3">
                  Want to apply this to your business?
                </h3>
                <p className="font-body text-sm text-white/75 mb-5 leading-relaxed">
                  Book a free 30-minute discovery call and let&apos;s explore what AI can do for your organization.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full h-10 items-center justify-center rounded-lg bg-accent text-white font-body text-sm font-semibold hover:bg-accent-light transition-colors duration-200"
                >
                  Book a Discovery Call
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-primary text-base mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="group block rounded-xl border border-border p-4 hover:border-accent/30 hover:bg-bgBlue transition-all duration-200"
                      >
                        <span className={cn(
                          "inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium mb-2",
                          CATEGORY_COLORS[rp.category] ?? "bg-gray-50 text-gray-600 border-gray-200"
                        )}>
                          {rp.category}
                        </span>
                        <p className="font-body font-semibold text-textPrimary text-sm leading-snug group-hover:text-accent transition-colors">
                          {rp.title}
                        </p>
                        <p className="mt-1 font-body text-xs text-textSecondary">{rp.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div>
                <h3 className="font-heading font-bold text-primary text-base mb-3">Share</h3>
                <div className="flex gap-2">
                  {["LinkedIn", "Twitter", "Copy link"].map((platform) => (
                    <button
                      key={platform}
                      className="flex-1 rounded-lg border border-border py-2 font-body text-xs font-medium text-textSecondary hover:border-accent/40 hover:text-accent hover:bg-bgBlue transition-all duration-200"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-bgBlue border border-accent/20 p-8 md:p-12 text-center">
          <h2 className="font-heading font-bold text-primary text-2xl mb-3">
            Enjoyed this article?
          </h2>
          <p className="font-body text-textSecondary mb-6 max-w-lg mx-auto">
            See how we apply these principles in real engagements. Book a free discovery call — no pitch, just a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl px-8 bg-accent text-white font-body font-semibold hover:bg-accent-light transition-colors duration-200"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </>
  );
}
