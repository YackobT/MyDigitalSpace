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
      <body className="bg-[#e9e0d2] text-[#2d2d2d] font-sans flex min-h-screen">
        <Sidebar />
        <main className="ml-64 flex-grow px-8 pt-24 pb-32 flex justify-center">
          <div className="bg-[#d9c6b0] border border-[#c9b9a4] rounded-[2.5rem] px-16 py-24 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.2)] max-w-4xl w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
