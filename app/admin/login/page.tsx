'use client';

import { useState, useTransition } from 'react';
import { loginAdmin } from '../actions';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminLoginPage() {
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [showPass, setShowPass]   = useState(false);
  const [error, setError]         = useState('');
  const [emailErr, setEmailErr]   = useState('');
  const [passErr, setPassErr]     = useState('');
  const [isPending, startTransition] = useTransition();

  // ── Client-side validation ──────────────────────────────────────────────────
  function validate() {
    let ok = true;
    setEmailErr('');
    setPassErr('');

    if (!email.trim()) {
      setEmailErr('Email is required.');
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Enter a valid email address.');
      ok = false;
    }
    if (!password) {
      setPassErr('Password is required.');
      ok = false;
    }
    return ok;
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!validate()) return;

    startTransition(async () => {
      try {
        const result = await loginAdmin(email, password);
        if (result.success) {
          // Hard redirect so middleware cookie is picked up immediately
          window.location.href = '/admin/blog';
        } else {
          setError(result.error ?? 'Authentication failed.');
        }
      } catch {
        setError('An unexpected error occurred. Please try again.');
      }
    });
  }

  return (
    <div className="admin-login-root">
      <div className="admin-login-card">
        {/* ── Brand header ──────────────────────────────────────────────── */}
        <div className="admin-login-header">
          <div className="admin-login-logo">
            <Image src="/images/logo.svg" alt="AIQUIRE" width={120} height={36} priority />
          </div>
          <div className="admin-login-lock-icon">
            <Lock size={22} strokeWidth={2} />
          </div>
          <h1 className="admin-login-title">Admin Login</h1>
          <p className="admin-login-subtitle">Sign in to manage your website content</p>
        </div>

        {/* ── Form ──────────────────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} className="admin-login-form" noValidate>

          {/* Auth error banner */}
          {error && (
            <div className="admin-login-error-banner" role="alert">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Email */}
          <div className="admin-login-field">
            <label htmlFor="admin-email" className="admin-login-label">Email address</label>
            <div className={`admin-login-input-wrap ${emailErr ? 'has-error' : ''}`}>
              <Mail size={16} className="admin-login-input-icon" />
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailErr(''); }}
                placeholder="admin@aiquire.ai"
                disabled={isPending}
                className="admin-login-input"
              />
            </div>
            {emailErr && <p className="admin-login-field-error">{emailErr}</p>}
          </div>

          {/* Password */}
          <div className="admin-login-field">
            <label htmlFor="admin-password" className="admin-login-label">Password</label>
            <div className={`admin-login-input-wrap ${passErr ? 'has-error' : ''}`}>
              <Lock size={16} className="admin-login-input-icon" />
              <input
                id="admin-password"
                type={showPass ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={e => { setPassword(e.target.value); setPassErr(''); }}
                placeholder="••••••••"
                disabled={isPending}
                className="admin-login-input"
              />
              <button
                type="button"
                onClick={() => setShowPass(v => !v)}
                className="admin-login-toggle-pass"
                aria-label={showPass ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {passErr && <p className="admin-login-field-error">{passErr}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="admin-login-submit"
          >
            {isPending ? (
              <>
                <Loader2 size={16} className="admin-login-spinner" />
                Signing in…
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="admin-login-back">
          <a href="/">← Return to website</a>
        </p>
      </div>

      {/* ── Inline styles (self-contained, no Tailwind dependency) ────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .admin-login-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a1929 0%, #0F2B46 60%, #0a1929 100%);
          font-family: 'Inter', system-ui, sans-serif;
          padding: 24px;
        }

        .admin-login-card {
          width: 100%;
          max-width: 420px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.35);
          overflow: hidden;
        }

        .admin-login-header {
          background: linear-gradient(135deg, #0F2B46 0%, #143352 100%);
          padding: 36px 36px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          text-align: center;
        }

        .admin-login-logo {
          margin-bottom: 20px;
          opacity: 0.95;
        }

        .admin-login-lock-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #ce2124;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 14px;
          box-shadow: 0 4px 16px rgba(206,33,36,0.4);
        }

        .admin-login-title {
          margin: 0 0 6px;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }

        .admin-login-subtitle {
          margin: 0;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }

        .admin-login-form {
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .admin-login-error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff5f5;
          border: 1px solid #fecaca;
          color: #ce2124;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 500;
        }

        .admin-login-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .admin-login-label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
        }

        .admin-login-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .admin-login-input-wrap:focus-within {
          border-color: #ce2124;
          box-shadow: 0 0 0 3px rgba(206,33,36,0.10);
        }

        .admin-login-input-wrap.has-error {
          border-color: #ef4444;
        }

        .admin-login-input-icon {
          position: absolute;
          left: 12px;
          color: #9ca3af;
          pointer-events: none;
          flex-shrink: 0;
        }

        .admin-login-input {
          flex: 1;
          padding: 11px 12px 11px 38px;
          background: transparent;
          border: none;
          outline: none;
          font-size: 14px;
          color: #111827;
          font-family: inherit;
        }

        .admin-login-input::placeholder { color: #9ca3af; }
        .admin-login-input:disabled { opacity: 0.6; cursor: not-allowed; }

        .admin-login-toggle-pass {
          position: absolute;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          padding: 4px;
          display: flex;
          align-items: center;
          border-radius: 6px;
          transition: color 0.15s;
        }
        .admin-login-toggle-pass:hover { color: #374151; }

        .admin-login-field-error {
          margin: 0;
          font-size: 12px;
          color: #ef4444;
        }

        .admin-login-submit {
          margin-top: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #ce2124;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
          box-shadow: 0 4px 14px rgba(206,33,36,0.3);
        }
        .admin-login-submit:hover:not(:disabled) {
          background: #a81a1d;
          box-shadow: 0 6px 18px rgba(206,33,36,0.4);
        }
        .admin-login-submit:active:not(:disabled) { transform: scale(0.98); }
        .admin-login-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .admin-login-spinner { animation: spin 0.8s linear infinite; }

        .admin-login-back {
          text-align: center;
          padding: 0 32px 24px;
          margin: 0;
        }
        .admin-login-back a {
          font-size: 13px;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.15s;
        }
        .admin-login-back a:hover { color: #ce2124; }
      `}</style>
    </div>
  );
}
