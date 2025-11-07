'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

export default function Slideshow() {
  const images = useMemo(() => (
    Array.from({ length: 10 }, (_, i) => `/gallery/${i + 1}.jpg`)
  ), [])

  const [idx, setIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((cur) => {
        const next = cur + 1
        if (next >= images.length) {
          clearInterval(t)
          setDone(true)
          return cur
        }
        return next
      })
    }, 3000)
    return () => clearInterval(t)
  }, [images.length])

  const current = images[Math.min(idx, images.length - 1)]
  const fallback = (i: number) => `https://source.unsplash.com/random/900x1200?night,moon,river,festival&sig=${i}`

  return (
    <main className="space-y-5">
      <h2 className="text-2xl font-semibold text-center">ภาพความคิดถึง</h2>

      {!done ? (
        <>
          <div className="flex justify-center">
            <img
              key={idx}
              src={current}
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback(idx) }}
              alt={`รูปที่ ${idx + 1}`}
              className="animate-lk-fade h-96 w-full max-w-sm rounded-2xl object-cover shadow-md"
            />
          </div>
          <p className="text-center text-sm text-gray-500">รูปที่ {Math.min(idx + 1, images.length)} / {images.length}</p>
        </>
      ) : (
        <div className="lk-card text-center">
          <p className="text-3xl font-bold text-pink-500">คิดถึงเทอนะ💙</p>
          <div className="mt-4 flex justify-center">
            <Link className="lk-btn w-full sm:w-auto" href="/done">ถัดไป</Link>
          </div>
        </div>
      )}
    </main>
  )
}

