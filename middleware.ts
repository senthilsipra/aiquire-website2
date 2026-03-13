import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pass pathname as header so root layout can read it
  const response = NextResponse.next();
  response.headers.set('x-pathname', pathname);

  // ── Admin route protection ──────────────────────────────────────────────────
  // Allow the login page and its API routes through unauthenticated
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = request.cookies.get('admin_session');
    if (!session || session.value !== 'true') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Match everything except Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
