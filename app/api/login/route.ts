// app/api/login/route.ts
import { NextResponse } from 'next/server'
import { AUTH_COOKIE } from '@/lib/cookies'

export async function POST(req: Request) {
  const { password } = await req.json()
  const real = process.env.SITE_PASS
  if (!real) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  if (password === real) {
    const res = NextResponse.json({ ok: true })
    // ✅ ตั้งคุกกี้บน response (ถูกต้องสำหรับ Route Handler)
    res.cookies.set(AUTH_COOKIE, 'ok', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      secure: true,
    })
    return res
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}
