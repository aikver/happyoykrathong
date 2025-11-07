'use client'
import { useState } from 'react'

export default function PasswordPage() {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw })
    })
    if (res.ok) {
      window.location.href = '/greeting'
    } else {
      setError('รหัสผ่านไม่ถูกต้อง')
    }
  }

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">ใส่รหัสผ่าน</h1>
      <p className="text-gray-600 mb-6">สำหรับคนพิเศษเท่านั้น 💙</p>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={pw}
          onChange={e => setPw(e.target.value)}
          className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9]*"
          required
        />
        {/* On-screen number pad */}
        <div className="grid grid-cols-3 gap-3 select-none">
          {[...'123456789'].map((d) => (
            <button
              key={d}
              type="button"
              aria-label={`กด ${d}`}
              onClick={() => setPw(prev => prev + d)}
              className="rounded-2xl border border-gray-200 bg-white/90 p-4 text-xl font-semibold shadow-sm hover:shadow active:scale-[.98]"
            >
              {d}
            </button>
          ))}
          <button
            type="button"
            aria-label="ล้างทั้งหมด"
            onClick={() => setPw('')}
            className="rounded-2xl border border-gray-200 bg-white/80 p-4 text-base shadow-sm hover:shadow active:scale-[.98]"
          >ล้าง</button>
          <button
            type="button"
            aria-label="กด 0"
            onClick={() => setPw(prev => prev + '0')}
            className="rounded-2xl border border-gray-200 bg-white/90 p-4 text-xl font-semibold shadow-sm hover:shadow active:scale-[.98]"
          >0</button>
          <button
            type="button"
            aria-label="ลบหนึ่งตัว"
            onClick={() => setPw(prev => prev.slice(0, -1))}
            className="rounded-2xl border border-gray-200 bg-white/80 p-4 text-base shadow-sm hover:shadow active:scale-[.98]"
          >⌫</button>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full lk-btn"
        >
          เข้าสู่หน้าแรก
        </button>
      </form>
    </main>
  )
}
