// src/app/layout.tsx
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // Add this line
})

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
    <html lang="en" className={`${inter.variable} font-sans`}> {/* Apply Inter variable and font-sans */}
      <body className={`${inter.className} bg-background text-text-primary dot-grid`}>
        {/* Optional: Add a wrapper for flex column layout if header/footer are direct children of body */}
        <div className="flex flex-col min-h-screen">
          {/* Header Placeholder - You can build this out later */}
          <header className="py-4 px-8">
            {/* Navigation can go here */}
          </header>
          
          {/* Main site content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer Placeholder - You can build this out later */}
          <footer className="py-4 px-8 text-center text-text-secondary">
            <p>© {new Date().getFullYear()} Yackob Tamire. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
