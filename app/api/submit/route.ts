import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { answers, ua } = body || {}

  // === Option A: send via Web3Forms ===
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return NextResponse.json({ error: 'Missing WEB3FORMS_ACCESS_KEY' }, { status: 500 })
  }

  const payload = {
    access_key: accessKey,
    subject: 'Loy Krathong Answers',
    from_name: 'LK Site',
    message: JSON.stringify({
      timestamp: new Date().toISOString(),
      answers,
      ua
    }, null, 2)
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('web3forms failed')
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }

  /* === Option B: SMTP (comment in to use) ===
  import nodemailer from 'nodemailer'
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SEND_TO,
    subject: 'Loy Krathong Answers',
    text: JSON.stringify({ answers, ua, timestamp: new Date().toISOString() }, null, 2),
  })
  return NextResponse.json({ ok: true })
  */
}

