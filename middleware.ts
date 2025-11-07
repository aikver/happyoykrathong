import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_NAME = 'lk_auth'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Public paths: root (password), API login, static assets
  const isPublic = [
    '/',
    '/api/login',
  ].some((p) => pathname === p || pathname.startsWith('/_next') || pathname.startsWith('/favicon'))

  if (isPublic) return NextResponse.next()

  // Check cookie for protected pages
  const cookie = req.cookies.get(COOKIE_NAME)?.value
  if (cookie !== 'ok') {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}

