import '../globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'My Portfolio | Yackob Tamire',
  description: 'Scrum Master & Business Analyst Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white font-sans flex">
        <Sidebar />
        <main className="ml-48 w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  )
}
