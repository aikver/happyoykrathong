'use client'
import Link from 'next/link'
import { useAnswers } from '../providers'
import FeelingCard from '../components/FeelingCard'

export default function Miss() {
  const { answers, setAnswers } = useAnswers()
  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold">คิดถึงไหม?</h2>
      <p className="text-gray-600">ตอบอย่างไรก็ได้ แต่เราคิดถึงเธอนะ 💙</p>

      <div className="grid gap-3">
        <FeelingCard
          label="คิดถึง 🫶"
          selected={answers.miss === 'yes'}
          onClick={() => setAnswers(prev => ({ ...prev, miss: 'yes' }))}
        />
        <FeelingCard
          label="ไม่คิดถึง 😝"
          selected={answers.miss === 'no'}
          onClick={() => setAnswers(prev => ({ ...prev, miss: 'no' }))}
        />
      </div>

      <div className="flex justify-center">
        <Link className="lk-btn w-full sm:w-auto" href="/note">ถัดไป</Link>
      </div>
    </main>
  )
}
