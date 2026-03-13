"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  PlusCircle,
  Pencil,
  Trash2,
  Star,
  Eye,
  EyeOff,
  RefreshCw,
  Search,
  AlertCircle,
  CheckCircle,
  FileText,
} from "lucide-react";
import { serverGetAllPosts, serverDeletePost, type AdminBlogPost } from "./actions";


type Filter = "all" | "published" | "draft" | "featured";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);
  const [filtered, setFiltered] = useState<AdminBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await serverGetAllPosts();
      setPosts(data);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to fetch posts";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadPosts(); }, [loadPosts]);

  useEffect(() => {
    let result = posts;
    if (filter === "published") result = result.filter((p) => p.published);
    if (filter === "draft") result = result.filter((p) => !p.published);
    if (filter === "featured") result = result.filter((p) => p.featured);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [posts, filter, search]);

  const handleDelete = async (post: AdminBlogPost) => {
    if (!confirm(`Delete "${post.title}"? This action cannot be undone.`)) return;
    setDeletingId(post.id);
    try {
      await serverDeletePost(post.id);
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      showToast("success", `"${post.title}" deleted.`);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Delete failed";
      showToast("error", msg);
    } finally {
      setDeletingId(null);
    }
  };

  const stats = {
    total: posts.length,
    published: posts.filter((p) => p.published).length,
    drafts: posts.filter((p) => !p.published).length,
    featured: posts.filter((p) => p.featured).length,
  };

  return (
    <div className="blog-admin-page">
      {/* Toast */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Blog Posts</h1>
          <p className="page-subtitle">Manage and publish your content</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-ghost" onClick={loadPosts} disabled={loading} title="Refresh">
            <RefreshCw size={16} className={loading ? "spin" : ""} />
            Refresh
          </button>
          <Link href="/admin/blog/new" className="btn btn-primary">
            <PlusCircle size={16} />
            New Post
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {[
          { label: "Total Posts", value: stats.total, color: "#0F2B46" },
          { label: "Published", value: stats.published, color: "#16a34a" },
          { label: "Drafts", value: stats.drafts, color: "#d97706" },
          { label: "Featured", value: stats.featured, color: "#ce2124" },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <p className="stat-value" style={{ color: s.color }}>{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters + Search */}
      <div className="toolbar">
        <div className="filter-tabs">
          {(["all", "published", "draft", "featured"] as Filter[]).map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="search-wrap">
          <Search size={15} className="search-icon" />
          <input
            className="search-input"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="loading-state">
          <RefreshCw size={24} className="spin" />
          <p>Loading posts…</p>
        </div>
      ) : error ? (
        <div className="empty-state error-state">
          <AlertCircle size={40} />
          <p className="empty-title">Error loading posts</p>
          <p className="empty-desc">{error}</p>
          <button className="btn btn-primary" onClick={loadPosts}>Try Again</button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <FileText size={40} />
          <p className="empty-title">{search || filter !== "all" ? "No matching posts" : "No posts yet"}</p>
          <p className="empty-desc">
            {search || filter !== "all" ? "Try adjusting your filters." : "Create your first blog post to get started."}
          </p>
          {!search && filter === "all" && (
            <Link href="/admin/blog/new" className="btn btn-primary">
              <PlusCircle size={16} /> Create Post
            </Link>
          )}
        </div>
      ) : (
        <div className="table-wrap">
          <table className="posts-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Featured</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => (
                <tr key={post.id} className="post-row">
                  <td>
                    <div className="post-title-cell">
                      {post.cover_image && (
                        <img
                          src={post.cover_image}
                          alt=""
                          className="post-thumb"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      )}
                      <div>
                        <p className="post-title">{post.title}</p>
                        <p className="post-slug">/{post.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="category-badge">{post.category}</span>
                  </td>
                  <td className="author-cell">{post.author}</td>
                  <td>
                    <span className={`status-badge ${post.published ? "published" : "draft"}`}>
                      {post.published ? <Eye size={12} /> : <EyeOff size={12} />}
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>
                    {post.featured && (
                      <span className="featured-badge">
                        <Star size={12} fill="currentColor" /> Featured
                      </span>
                    )}
                  </td>
                  <td className="date-cell">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric", month: "short", day: "numeric",
                    })}
                  </td>
                  <td>
                    <div className="action-btns">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="action-btn edit"
                        title="Edit"
                      >
                        <Pencil size={14} />
                      </Link>
                      <button
                        className="action-btn delete"
                        disabled={deletingId === post.id}
                        onClick={() => handleDelete(post)}
                        title="Delete"
                      >
                        {deletingId === post.id ? (
                          <RefreshCw size={14} className="spin" />
                        ) : (
                          <Trash2 size={14} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-admin-page { position: relative; }

        /* Toast */
        .toast {
          position: fixed;
          top: 20px; right: 20px;
          z-index: 9999;
          display: flex; align-items: center; gap: 8px;
          padding: 12px 18px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          animation: slideIn 0.25s ease;
        }
        .toast-success { background: #166534; color: white; }
        .toast-error   { background: #991b1b; color: white; }
        @keyframes slideIn { from { transform: translateX(60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

        /* Header */
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; }
        .page-title { font-size: 26px; font-weight: 700; color: #111827; margin: 0 0 4px; }
        .page-subtitle { font-size: 14px; color: #6b7280; margin: 0; }
        .page-actions { display: flex; gap: 10px; align-items: center; }

        /* Buttons */
        .btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px; border-radius: 8px; font-size: 14px; font-weight: 500;
          cursor: pointer; border: none; text-decoration: none; transition: all 0.15s;
        }
        .btn-primary { background: #ce2124; color: white; }
        .btn-primary:hover { background: #a81a1d; }
        .btn-ghost { background: white; color: #374151; border: 1px solid #e5e7eb; }
        .btn-ghost:hover { background: #f9fafb; }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Stats */
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
        .stat-card { background: white; border-radius: 12px; padding: 20px 24px; border: 1px solid #f3f4f6; }
        .stat-value { font-size: 32px; font-weight: 700; margin: 0 0 4px; }
        .stat-label { font-size: 13px; color: #6b7280; margin: 0; }

        /* Toolbar */
        .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; gap: 12px; }
        .filter-tabs { display: flex; gap: 4px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 4px; }
        .filter-tab { padding: 6px 14px; border: none; background: none; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; color: #6b7280; transition: all 0.15s; }
        .filter-tab.active { background: #0F2B46; color: white; }
        .filter-tab:hover:not(.active) { background: #f3f4f6; color: #111827; }
        .search-wrap { position: relative; }
        .search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af; }
        .search-input { padding: 8px 12px 8px 36px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 13px; width: 240px; outline: none; transition: border 0.15s; background: white; }
        .search-input:focus { border-color: #0F2B46; }

        /* Loading/Empty */
        .loading-state { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 60px; color: #6b7280; font-size: 14px; }
        .empty-state { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 64px; background: white; border-radius: 12px; border: 1px solid #f3f4f6; color: #6b7280; text-align: center; }
        .error-state { color: #991b1b; }
        .empty-title { font-size: 16px; font-weight: 600; color: #111827; margin: 0; }
        .empty-desc { font-size: 14px; margin: 0; }

        /* Table */
        .table-wrap { background: white; border-radius: 12px; border: 1px solid #f3f4f6; overflow: hidden; }
        .posts-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .posts-table thead tr { background: #f9fafb; border-bottom: 1px solid #f3f4f6; }
        .posts-table th { padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; letter-spacing: 0.04em; text-transform: uppercase; }
        .posts-table td { padding: 14px 16px; border-bottom: 1px solid #f9fafb; vertical-align: middle; }
        .post-row:last-child td { border-bottom: none; }
        .post-row:hover { background: #fafafa; }

        .post-title-cell { display: flex; align-items: center; gap: 12px; }
        .post-thumb { width: 48px; height: 36px; border-radius: 6px; object-fit: cover; flex-shrink: 0; background: #f3f4f6; }
        .post-title { font-weight: 600; color: #111827; margin: 0 0 2px; }
        .post-slug { font-size: 12px; color: #9ca3af; margin: 0; }

        .category-badge { background: #eff6ff; color: #1d4ed8; font-size: 12px; font-weight: 500; padding: 3px 8px; border-radius: 99px; white-space: nowrap; }
        .author-cell { color: #374151; }
        .date-cell { color: #6b7280; white-space: nowrap; }

        .status-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 500; padding: 3px 8px; border-radius: 99px; white-space: nowrap; }
        .status-badge.published { background: #f0fdf4; color: #16a34a; }
        .status-badge.draft { background: #fef9c3; color: #854d0e; }

        .featured-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 500; color: #ce2124; background: #fff1f2; padding: 3px 8px; border-radius: 99px; }

        .action-btns { display: flex; gap: 6px; }
        .action-btn { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 6px; border: 1px solid #e5e7eb; background: white; cursor: pointer; transition: all 0.15s; text-decoration: none; }
        .action-btn.edit { color: #374151; }
        .action-btn.edit:hover { background: #eff6ff; border-color: #93c5fd; color: #1d4ed8; }
        .action-btn.delete { color: #374151; }
        .action-btn.delete:hover { background: #fff1f2; border-color: #fca5a5; color: #ce2124; }
        .action-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .toolbar { flex-direction: column; align-items: stretch; }
          .search-input { width: 100%; }
        }
      `}} />
    </div>
  );
}
