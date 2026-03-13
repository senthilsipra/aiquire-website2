"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import BlogPostForm, { type BlogFormValues } from "../../_components/BlogPostForm";
import { serverGetPostById, serverUpdatePost, type BlogPostInput, type AdminBlogPost } from "../../actions";

export default function EditBlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [post, setPost] = useState<AdminBlogPost | null>(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function loadPost() {
      setFetchLoading(true);
      setFetchError(null);
      try {
        const data = await serverGetPostById(id);
        if (!data) {
          setFetchError("Post not found.");
        } else {
          setPost(data);
        }
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Failed to load post";
        setFetchError(msg);
      } finally {
        setFetchLoading(false);
      }
    }
    loadPost();
  }, [id]);

  async function handleSubmit(values: BlogPostInput) {
    setSaving(true);
    setSaveError(null);
    try {
      await serverUpdatePost(id, values);
      setSuccess(true);
      setTimeout(() => router.push("/admin/blog"), 1500);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to update post";
      setSaveError(msg);
      setSaving(false);
    }
  }

  if (fetchLoading) {
    return (
      <div className="loading-state">
        <Loader2 size={28} className="spin" />
        <p>Loading post…</p>
      </div>
    );
  }

  if (fetchError || !post) {
    return (
      <div className="error-state">
        <AlertCircle size={40} />
        <p className="error-title">Could not load post</p>
        <p className="error-desc">{fetchError}</p>
        <Link href="/admin/blog" className="back-btn">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  // Map AdminBlogPost to BlogFormValues
  const initialValues: Partial<BlogFormValues> = {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? "",
    content: post.content,
    author: post.author,
    category: post.category,
    cover_image: post.cover_image ?? "",
    read_time: post.read_time ?? "5 min read",
    featured: post.featured,
    published: post.published,
    meta_title: post.meta_title ?? "",
    meta_description: post.meta_description ?? "",
  };

  return (
    <div>
      {/* Header */}
      <div className="edit-header">
        <Link href="/admin/blog" className="back-link">
          <ArrowLeft size={16} />
          Back to Posts
        </Link>
        <div>
          <h1 className="edit-title">Edit Post</h1>
          <p className="edit-subtitle">{post.title}</p>
        </div>
      </div>

      {success && (
        <div className="success-banner">
          <CheckCircle size={18} />
          Post updated successfully! Redirecting…
        </div>
      )}

      <BlogPostForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitLabel="Update Post"
        loading={saving}
        error={saveError}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .loading-state {
          display: flex; flex-direction: column; align-items: center;
          gap: 12px; padding: 80px; color: #6b7280; font-size: 14px;
        }
        .error-state {
          display: flex; flex-direction: column; align-items: center;
          gap: 12px; padding: 80px; color: #991b1b; text-align: center;
        }
        .error-title { font-size: 18px; font-weight: 600; color: #111827; margin: 0; }
        .error-desc { font-size: 14px; color: #6b7280; margin: 0; }
        .back-btn { color: #2563eb; font-size: 14px; text-decoration: none; }

        .edit-header { margin-bottom: 28px; }
        .back-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #6b7280; font-size: 13px; text-decoration: none;
          margin-bottom: 12px; transition: color 0.15s;
        }
        .back-link:hover { color: #111827; }
        .edit-title { font-size: 26px; font-weight: 700; color: #111827; margin: 0 0 4px; }
        .edit-subtitle { font-size: 14px; color: #6b7280; margin: 0; font-style: italic; }

        .success-banner {
          display: flex; align-items: center; gap: 10px;
          background: #f0fdf4; color: #166534;
          border: 1px solid #bbf7d0; border-radius: 10px;
          padding: 14px 18px; margin-bottom: 24px;
          font-size: 14px; font-weight: 500;
        }

        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
