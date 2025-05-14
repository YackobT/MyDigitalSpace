'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-screen w-48 bg-[#1A1A1A] text-white border-r border-zinc-800 p-6 flex flex-col justify-between z-50">
      <div>
        <h1 className="text-2xl font-bold text-[#F5F5DC] mb-10">&gt; YT</h1>
        <nav className="flex flex-col gap-6 text-sm">
          <a href="#hero" className="hover:text-cyan-400">&gt; Home</a>
          <a href="#experience" className="hover:text-cyan-400">&gt; Experience</a>
          <a href="#projects" className="hover:text-cyan-400">&gt; Projects</a>
          <a href="#testimonials" className="hover:text-cyan-400">&gt; Testimonials</a>
          <a href="#contact" className="hover:text-cyan-400">&gt; Contact</a>
        </nav>
      </div>
      <div className="text-xs text-zinc-500 mt-10">&copy; {new Date().getFullYear()} Yackob Tamire</div>
    </aside>
  )
}
