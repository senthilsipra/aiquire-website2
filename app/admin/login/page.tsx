'use client';

import { useState, useTransition } from 'react';
import { loginAdmin } from '../actions';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';
import './admin-login.css';

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
    </div>
  );
}
