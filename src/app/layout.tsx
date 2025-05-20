import '../globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Yackob Tamire | Business Analyst & Scrum Master',
  description: 'Portfolio of Yackob Tamire',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f4f0] text-[#1a1a1a] font-sans flex min-h-screen">
        <Sidebar />
        <main className="ml-[260px] w-full px-10 pt-24 pb-32 flex justify-center">
          <div className="w-full max-w-[1440px]">{children}</div>
        </main>
      </body>
    </html>
  )
}
