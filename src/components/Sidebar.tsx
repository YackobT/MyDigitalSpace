
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-20 bg-[#1f1f22] text-white flex flex-col items-center py-6 z-50 shadow-md">
        <button onClick={() => setIsOpen(!isOpen)} className="mb-6">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} flex flex-col gap-6 text-sm`}>
          <Link href="#hero" className="hover:text-[#c084fc]">&gt; Home</Link>
          <Link href="#projects" className="hover:text-[#c084fc]">&gt; Projects</Link>
          <Link href="#testimonials" className="hover:text-[#c084fc]">&gt; Testimonials</Link>
          <Link href="#contact" className="hover:text-[#c084fc]">&gt; Contact</Link>
        </nav>
      </div>
    </>
  )
}