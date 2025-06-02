// src/app/layout.tsx
// Removed 'use client' - Reverting to Server Component

// Removed useState, useEffect, AnimatePresence, PageLoader imports
import '../globals.css'
import type { Metadata } from 'next' // Reinstated Metadata import
import { Poppins } from 'next/font/google' // Import Poppins
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'; // Ensure Footer is imported
import CustomCursor from '@/components/CustomCursor'; // Import CustomCursor
// import PageLoader from '@/components/PageLoader' // PageLoader removed

// Initialize Poppins font
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'], 
  variable: '--font-poppins', 
  display: 'swap' 
});

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
    <html lang="en" className={`${poppins.variable} font-sans scroll-smooth`}> {/* Use poppins variable and font-sans */}
      {/* Removed dot-grid class from body, it's handled (or removed) in globals.css */}
      {/* Removed inter.className, using font-sans from html tag now */}
      <body className="bg-background text-text-primary"> 
        <CustomCursor /> {/* Add the custom cursor component */}
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

          <footer className="w-full"> {/* Added semantic footer tag */}
            <Footer /> {/* Replaced placeholder footer with Footer component */}
          </footer>
        </div>
      </body>
    </html>
  )
}
