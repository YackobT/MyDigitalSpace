import '../globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'My Digital Space',
  description: 'Portfolio for Yackob Tamire',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light text-dark dark:bg-[#0f172a] dark:text-white transition-colors duration-300">
        <Navbar />
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  )
}
