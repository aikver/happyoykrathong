import Link from 'next/link'

export default function Note() {
  return (
    <main className="space-y-5">
      <h2 className="text-2xl font-semibold">ข้อความจากใจ 💙</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        ไม่ว่าคุณจะตอบว่า “คิดถึง” หรือ “ไม่คิดถึง”
        แต่อยากบอกไว้ตรงนี้ว่า เราคิดถึงเธอ คิดถึงรอยยิ้มเธอ คิดถึงเสียงเธอ คิดถึงหน้าเธอนะ☺️
      </p>
      <div className="flex justify-center">
        <Link className="lk-btn w-full sm:w-auto" href="/slideshow">ถัดไป</Link>
      </div>
    </main>
  )
}
