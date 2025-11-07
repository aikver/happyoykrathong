'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {
  href?: string
  onClick?: () => void
  children: React.ReactNode
}

export default function NextButton({ href, onClick, children }: Props) {
  const router = useRouter()
  return href ? (
    <Link
      className="mt-6 inline-flex items-center justify-center w-full rounded-2xl border px-4 py-3 text-base font-medium shadow-sm hover:shadow md:w-auto"
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={() => { onClick?.(); router.refresh() }}
      className="mt-6 inline-flex items-center justify-center w-full rounded-2xl border px-4 py-3 text-base font-medium shadow-sm hover:shadow md:w-auto"
    >
      {children}
    </button>
  )
}

