
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yackob Tamire | Portfolio',
  description: 'Scrum Master and Business Analyst Portfolio for Yackob Tamire',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#141417] text-white`}>
        <Sidebar />
        <div className="ml-20 relative z-10">{children}</div>
      </body>
    </html>
  )
}