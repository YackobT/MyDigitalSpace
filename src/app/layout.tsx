// src/app/layout.tsx
'use client' // Required for useState and useEffect

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import '../globals.css'
import type { Metadata } from 'next' // Keep if using static metadata, otherwise remove if metadata is dynamic
import { Inter } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'
import PageLoader from '@/components/PageLoader' // Import PageLoader

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

// Note: 'export const metadata: Metadata' might need to be handled differently
// if RootLayout is a client component. For Next.js 13+ App Router, 
// metadata should ideally be exported from server components or page.tsx.
// For simplicity in this step, we'll assume it's either okay or will be addressed.
// If this were a real app, this would be a point of attention.
// For now, we comment it out if it causes issues with 'use client'.
// export const metadata: Metadata = { 
// title: 'Yackob Tamire – Portfolio',
// description: 'Certified Business Analyst & Scrum Master Portfolio',
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800); // Loader visible for 1.8 seconds
    return () => clearTimeout(timer);
  }, []);

  // Static metadata for client component workaround
  useEffect(() => {
    document.title = 'Yackob Tamire – Portfolio';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Certified Business Analyst & Scrum Master Portfolio');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Certified Business Analyst & Scrum Master Portfolio';
      document.head.appendChild(newMeta);
    }
  }, []);


  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className={`${inter.className} bg-background text-text-primary dot-grid`}>
        <AnimatePresence>
          {isLoading && <PageLoader />}
        </AnimatePresence>
        
        {/* Main site structure */}
        {/* Added !isLoading condition to delay rendering of main content, or apply an opacity transition */}
        <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <NavigationBar />
          <header className="py-4 px-8 sr-only">
            {/* Navigation can go here */}
          </header>
          
          <main className="flex-grow pt-16 md:pt-20">
            {children}
          </main>

          <footer className="py-4 px-8 text-center text-text-secondary">
            <p>© {new Date().getFullYear()} Yackob Tamire. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
