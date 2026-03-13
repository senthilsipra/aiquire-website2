"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import BlogPostForm from "../_components/BlogPostForm";
import { serverCreatePost, type BlogPostInput } from "../actions";


export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(values: BlogPostInput) {
    setLoading(true);
    setError(null);
    try {
      await serverCreatePost(values);
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/blog");
      }, 1500);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to create post";
      setError(msg);
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Page header */}
      <div className="new-post-header">
        <Link href="/admin/blog" className="back-link">
          <ArrowLeft size={16} />
          Back to Posts
        </Link>
        <div>
          <h1 className="new-post-title">New Blog Post</h1>
          <p className="new-post-subtitle">Fill in the details below to create a new post</p>
        </div>
      </div>

      {success && (
        <div className="success-banner">
          <CheckCircle size={18} />
          Post created successfully! Redirecting to dashboard…
        </div>
      )}

      <BlogPostForm
        onSubmit={handleSubmit}
        submitLabel="Create Post"
        loading={loading}
        error={error}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .new-post-header { margin-bottom: 28px; }
        .back-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #6b7280; font-size: 13px; text-decoration: none;
          margin-bottom: 12px; transition: color 0.15s;
        }
        .back-link:hover { color: #111827; }
        .new-post-title { font-size: 26px; font-weight: 700; color: #111827; margin: 0 0 4px; }
        .new-post-subtitle { font-size: 14px; color: #6b7280; margin: 0; }

        .success-banner {
          display: flex; align-items: center; gap: 10px;
          background: #f0fdf4; color: #166534;
          border: 1px solid #bbf7d0; border-radius: 10px;
          padding: 14px 18px; margin-bottom: 24px;
          font-size: 14px; font-weight: 500;
        }
      `}} />
    </div>
  );
}
