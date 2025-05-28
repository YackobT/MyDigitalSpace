// src/app/layout.tsx
// Removed 'use client' - Reverting to Server Component

// Removed useState, useEffect, AnimatePresence, PageLoader imports
import '../globals.css'
import type { Metadata } from 'next' // Reinstated Metadata import
import { Inter } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'; // Ensure Footer is imported
// import PageLoader from '@/components/PageLoader' // PageLoader removed

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

// Reinstated static metadata export
export const metadata: Metadata = { 
  title: 'Yackob Tamire – Portfolio',
  description: 'Certified Business Analyst & Scrum Master Portfolio',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Removed isLoading state and useEffect hooks

  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}> {/* Added scroll-smooth */}
      {/* Removed dot-grid class from body, it's handled (or removed) in globals.css */}
      <body className={`${inter.className} bg-background text-text-primary`}>
        {/* Removed AnimatePresence and PageLoader */}
        
        {/* Main site structure */}
        {/* Removed opacity transition and isLoading conditional class */}
        <div className="flex flex-col min-h-screen">
          <header className="w-full"> {/* Removed sr-only and specific padding, as Nav will handle it */}
            <NavigationBar /> {/* NavigationBar is now the content of the header */}
          </header>
          
          <main className="flex-grow"> {/* Removed pt-16 md:pt-20 */}
            {children}
          </main>

          <Footer /> {/* Replaced placeholder footer with Footer component */}
        </div>
      </body>
    </html>
  )
}
