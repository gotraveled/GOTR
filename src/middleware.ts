import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // If it's book.gotraveled.com subdomain
  if (hostname.includes('book.gotraveled.com')) {
    // Allow only /book/* routes
    if (!url.pathname.startsWith('/book/')) {
      // Redirect homepage to main domain
      if (url.pathname === '/') {
        return NextResponse.redirect(new URL('/', 'https://gotraveled.com'));
      }
      // For other pages, show 404 or redirect to main domain
      return NextResponse.redirect(new URL(url.pathname, 'https://gotraveled.com'));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};
