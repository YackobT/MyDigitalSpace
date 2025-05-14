import '../globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'My Portfolio | Yackob Tamire',
  description: 'Scrum Master & Business Analyst Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#e9dfd0] text-[#1a1a1a] font-sans flex min-h-screen">
        <Sidebar />
        <main className="ml-48 w-full px-12 pt-16 pb-24 max-w-7xl mx-auto">
          <div className="bg-[#fffdf6] shadow-2xl rounded-[2rem] px-16 py-20 border border-[#e6dccb]">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
