import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import Lanterns from './components/Lanterns'
import { Noto_Sans_Thai } from 'next/font/google'

const thai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Happy Loy Krathong',
  description: 'A tiny private greeting with Q&A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={thai.className}>
      <body className="lk-bg min-h-screen text-gray-800 antialiased">
        <Lanterns />
        <div className="relative mx-auto max-w-md p-4 sm:p-6">
          <div className="lk-card">
            <Providers>
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
