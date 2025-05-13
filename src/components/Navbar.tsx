'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all ${
      scrolled ? 'bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">YT</Link>
        <div className="flex items-center space-x-4">
          <Link href="/#hero">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
          <div className="hidden sm:block">
          <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="block sm:hidden fixed top-4 right-4 z-50">
      <ThemeToggle />
      </div>
    </nav>
  )
}
