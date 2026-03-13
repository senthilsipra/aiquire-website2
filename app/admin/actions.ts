'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Validates admin credentials and sets a secure session cookie.
 * Credentials must be set via environment variables:
 *   ADMIN_EMAIL
 *   ADMIN_PASSWORD
 */
export async function loginAdmin(email: string, password: string) {
  const validEmail    = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validEmail || !validPassword) {
    return { success: false, error: 'Admin credentials not configured.' };
  }

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
  redirect('/admin/login');
}
