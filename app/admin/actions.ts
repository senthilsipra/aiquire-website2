'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Validates admin credentials and sets a secure session cookie.
 * Credentials are sourced from environment variables:
 *   ADMIN_EMAIL    (default: admin@aiquire.ai)
 *   ADMIN_PASSWORD (default: Aiquire@2026)
 */
export async function loginAdmin(email: string, password: string) {
  const validEmail    = process.env.ADMIN_EMAIL    ?? 'admin@aiquire.ai';
  const validPassword = process.env.ADMIN_PASSWORD ?? 'Aiquire@2026';

  if (email.trim() === validEmail && password === validPassword) {
    cookies().set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    return { success: true };
  }

  return { success: false, error: 'Invalid email or password.' };
}

/**
 * Deletes the admin session cookie and redirects to login.
 */
export async function logoutAdmin() {
  cookies().delete('admin_session');
  redirect('/');
}
