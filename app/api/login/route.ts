import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { AUTH_COOKIE } from '@/lib/cookies'

export async function POST(req: Request) {
  const { password } = await req.json()
  const real = process.env.SITE_PASS
  if (!real) return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  if (password === real) {
    cookies().set(AUTH_COOKIE, 'ok', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 })
    return NextResponse.json({ ok: true })
  }
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}

