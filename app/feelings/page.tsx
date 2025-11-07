'use client'
import { useAnswers } from '../providers'
import FeelingCard from '../components/FeelingCard'
import Link from 'next/link'

export default function Feelings() {
  const { answers, setAnswers } = useAnswers()
  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold">เป็นไงบ้าง สบายดีไหม?</h2>
      <div className="grid gap-3">
        <FeelingCard
          label="สบายดี🙂"
          selected={answers.feeling === 'fine'}
          onClick={() => setAnswers(prev => ({ ...prev, feeling: 'fine' }))}
        />
        <FeelingCard
          label="ไม่ค่อยสบาย🥺"
          selected={answers.feeling === 'not_well'}
          onClick={() => setAnswers(prev => ({ ...prev, feeling: 'not_well' }))}
        />
      </div>
      <div className="flex justify-center">
        <Link className="lk-btn w-full sm:w-auto" href="/miss">
          ถัดไป
        </Link>
      </div>
    </main>
  )
}
