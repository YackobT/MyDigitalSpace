// ✅ src/components/Navbar.tsx

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all ${
      scrolled ? 'bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#F5F5DC]">&gt; YT</Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#hero" className="hover:text-cyan-400 transition">&gt; Home</Link>
          <Link href="/#experience" className="hover:text-purple-400 transition">&gt; Experience</Link>
          <Link href="/#projects" className="hover:text-purple-400 transition">&gt; Projects</Link>
          <Link href="/#testimonials" className="hover:text-[#F5F5DC] transition">&gt; Testimonials</Link>
          <Link href="/#contact" className="hover:text-[#F5F5DC] transition">&gt; Contact</Link>
          <ThemeToggle />
        </div>

        <button className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white w-full absolute top-full left-0 px-6 py-4 space-y-4 z-30">
          <Link href="/#hero" onClick={toggleMenu} className="block">&gt; Home</Link>
          <Link href="/#experience" onClick={toggleMenu} className="block">&gt; Experience</Link>
          <Link href="/#projects" onClick={toggleMenu} className="block">&gt; Projects</Link>
          <Link href="/#testimonials" onClick={toggleMenu} className="block">&gt; Testimonials</Link>
          <Link href="/#contact" onClick={toggleMenu} className="block">&gt; Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  )
}
