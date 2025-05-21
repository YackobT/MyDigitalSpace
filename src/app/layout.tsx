// src/app/layout.tsx
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yackob Tamire – Portfolio',
  description: 'Certified Business Analyst & Scrum Master Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#141417] text-white`}>
        <div className="relative z-0">
          {/* Decorative Dot Overlays */}
          <div className="absolute w-32 h-32 top-20 left-10 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:10px_10px] z-0"></div>
          <div className="absolute w-24 h-24 bottom-20 right-12 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:8px_8px] z-0"></div>

          {/* Background image overlay */}
          <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center opacity-5 -z-10"></div>

          {/* Main site content */}
          {children}
        </div>
      </body>
    </html>
  )
}
