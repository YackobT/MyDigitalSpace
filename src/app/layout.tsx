import '../globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'My Portfolio | Yackob Tamire',
  description: 'Scrum Master & Business Analyst Portfolio',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f0ede9] text-[#2d2d2d] font-sans flex min-h-screen">
        <Sidebar />
        <main className="ml-64 w-full max-w-[1120px] px-14 pt-24 pb-32">
          <div className="bg-[#ffffff] border border-[#dfd8d0] rounded-[2.5rem] px-20 py-24 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.2)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
