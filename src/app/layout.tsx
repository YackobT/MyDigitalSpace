import '../globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'My Portfolio | Yackob Tamire',
  description: 'Scrum Master & Business Analyst Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fefcf7] text-[#1a1a1a] font-sans flex min-h-screen">
        <Sidebar />
        <main className="ml-48 w-full max-w-6xl px-8 pt-16 pb-32">
          <div className="bg-white shadow-xl rounded-3xl px-10 py-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}