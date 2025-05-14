import '../globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'My Portfolio | Yackob Tamire',
  description: 'Scrum Master & Business Analyst Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f5f0] text-[#1a1a1a] font-sans flex min-h-screen">
        <Sidebar />
        <main className="ml-64 w-full max-w-[1100px] px-12 pt-24 pb-32">
          <div className="bg-white border border-[#e4dcd0] rounded-[3rem] px-20 py-24 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
