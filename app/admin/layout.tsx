'use client';

import { useTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  ChevronRight,
  LogOut,
  Globe,
} from 'lucide-react';
import { logoutAdmin } from './actions';
import './admin.css';

const navItems = [
  { label: 'Dashboard', href: '/admin/blog', icon: LayoutDashboard },
  { label: 'Manage Blogs', href: '/admin/blog', icon: FileText },
  { label: 'Create Blog', href: '/admin/blog/new', icon: PlusCircle },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Login page renders without the sidebar shell
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  function handleLogout() {
    startTransition(async () => {
      await logoutAdmin();
    });
  }

  return (
    <div style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh' }}>
      <div className="admin-shell">

        {/* ── Sidebar ───────────────────────────────────────────────────── */}
        <aside className="admin-sidebar">
          <div className="admin-logo">
            <span className="admin-logo-icon">A</span>
            <div>
              <p className="admin-logo-title">AIQUIRE</p>
              <p className="admin-logo-sub">CMS Admin</p>
            </div>
          </div>

          <nav className="admin-nav">
            <p className="admin-nav-section">Content</p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active =
                item.href === '/admin/blog/new'
                  ? pathname === item.href
                  : pathname === item.href || (item.href === '/admin/blog' && pathname.startsWith('/admin/blog') && pathname !== '/admin/blog/new');
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`admin-nav-item${active ? ' active' : ''}`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="admin-sidebar-footer">
            <Link href="/" className="admin-back-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Globe size={14} />
              View Website
            </Link>
            <button
              onClick={handleLogout}
              disabled={isPending}
              className="admin-logout-btn"
            >
              <LogOut size={14} />
              {isPending ? 'Logging out…' : 'Logout'}
            </button>
          </div>
        </aside>

        {/* ── Main ─────────────────────────────────────────────────────── */}
        <div className="admin-main">
          {/* Top bar */}
          <header className="admin-topbar">
            <div className="admin-breadcrumb">
              <span>Admin</span>
              <ChevronRight size={14} />
              <span className="admin-breadcrumb-current">
                {pathname === '/admin/blog/new' ? 'New Post' : pathname.includes('/admin/blog/') ? 'Edit Post' : 'Blog CMS'}
              </span>
            </div>
            <div className="admin-topbar-right">
              <Link href="/admin/blog/new" className="admin-btn-new">
                <PlusCircle size={14} /> New Post
              </Link>
              <div className="admin-topbar-divider" />
              <Link href="/" className="admin-topbar-link">
                <Globe size={14} /> View Website
              </Link>
              <div className="admin-topbar-divider" />
              <button
                onClick={handleLogout}
                disabled={isPending}
                className="admin-topbar-logout"
              >
                <LogOut size={14} />
                {isPending ? '...' : 'Logout'}
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="admin-content">{children}</main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .admin-shell {
          display: flex;
          min-height: 100vh;
          background: #f0f2f5;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── Sidebar ── */
        .admin-sidebar {
          width: 240px;
          background: #0F2B46;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0; left: 0; bottom: 0;
          z-index: 100;
        }

        .admin-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 24px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .admin-logo-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: #ce2124;
          display: flex; align-items: center; justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          flex-shrink: 0;
        }

        .admin-logo-title {
          margin: 0;
          color: white;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.08em;
        }

        .admin-logo-sub {
          margin: 0;
          color: rgba(255,255,255,0.45);
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .admin-nav {
          flex: 1;
          padding: 20px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
        }

        .admin-nav-section {
          color: rgba(255,255,255,0.35);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 8px 8px;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
        }

        .admin-nav-item:hover {
          background: rgba(255,255,255,0.08);
          color: white;
        }

        .admin-nav-item.active {
          background: rgba(206,33,36,0.22);
          color: white;
          border-left: 3px solid #ce2124;
        }

        .admin-sidebar-footer {
          padding: 16px 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .admin-back-link {
          color: rgba(255,255,255,0.45);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.15s;
        }
        .admin-back-link:hover { color: white; }

        .admin-logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(206,33,36,0.15);
          border: 1px solid rgba(206,33,36,0.3);
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
          width: 100%;
        }
        .admin-logout-btn:hover:not(:disabled) {
          background: rgba(206,33,36,0.35);
          color: white;
        }
        .admin-logout-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* ── Main ── */
        .admin-main {
          margin-left: 240px;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .admin-topbar {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 0 32px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .admin-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #9ca3af;
          font-size: 13px;
        }

        .admin-breadcrumb-current {
          color: #111827;
          font-weight: 500;
        }

        .admin-topbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .admin-btn-new {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ce2124;
          color: white;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .admin-btn-new:hover { background: #a81a1d; }

        .admin-topbar-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.15s;
          font-weight: 500;
        }
        .admin-topbar-link:hover { color: #111827; }

        .admin-topbar-divider {
          width: 1px;
          height: 16px;
          background: #e5e7eb;
        }

        .admin-topbar-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #ce2124;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 6px;
          transition: background 0.15s;
          font-family: inherit;
        }
        .admin-topbar-logout:hover:not(:disabled) {
          background: rgba(206,33,36,0.05);
        }
        .admin-topbar-logout:disabled { opacity: 0.5; }

        .admin-badge {
          background: #f3f4f6;
          color: #6b7280;
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 99px;
        }

        .admin-content {
          flex: 1;
          padding: 32px;
        }
      `}} />
    </div>
  );
}
