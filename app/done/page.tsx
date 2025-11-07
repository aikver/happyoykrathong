'use client'
import { useEffect, useState } from 'react'
import { useAnswers } from '../providers'

export default function Done() {
  const { answers } = useAnswers()
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')

  useEffect(() => {
    async function send() {
      setStatus('sending')
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            answers,
            ua: navigator.userAgent,
          })
        })
        if (!res.ok) throw new Error('fail')
        setStatus('ok')
      } catch (e) {
        setStatus('error')
      }
    }
    send()
  }, [answers])

  return (
    <main className="space-y-4">
      <h2 className="text-2xl font-semibold">จัดไป! 💌</h2>
      <p className="text-gray-700">ขอบคุณที่ตอบนะ เดี๋ยวเราจะได้รับคำตอบของคุณอัตโนมัติ</p>
      {status === 'sending' && <p className="text-gray-500">กำลังส่งคำตอบ…</p>}
      {status === 'ok' && <p className="text-green-600">ส่งเรียบร้อยแล้ว ✔ ขอให้คืนนี้อุ่นใจ ปลอดภัย และมีความสุขนะ</p>}
      {status === 'error' && <p className="text-red-600">ส่งไม่สำเร็จ ลองรีเฟรชหน้านี้อีกครั้ง</p>}

     

      <div className="pt-2">
        <a href="/greeting" className="lk-outline">กลับไปหน้าแรก</a>
      </div>
    </main>
  )
}

