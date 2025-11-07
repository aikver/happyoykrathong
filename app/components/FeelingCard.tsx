'use client'

type Props = {
  label: string
  selected?: boolean
  onClick: () => void
}

export default function FeelingCard({ label, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-center text-lg shadow-sm transition hover:shadow bg-white/80 backdrop-blur ${selected ? 'ring-2 ring-pink-400 border-pink-200' : 'border-gray-200'}`}
    >
      {label}
    </button>
  )
}
