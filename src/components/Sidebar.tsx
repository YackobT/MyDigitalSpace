'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const sections = ['hero', 'experience', 'projects', 'testimonials', 'contact']

export default function Sidebar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      { threshold: 0.6 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#e8e1d9] border-r border-[#d5c7b9] py-20 px-8 space-y-8">
      <div className="text-2xl font-bold text-[#5c4632] mb-10">&gt; YT</div>
      <nav className="flex flex-col gap-6">
        {sections.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-sm font-medium transition ${
              active === id
                ? 'text-[#b48a5d] font-semibold'
                : 'text-gray-500 hover:text-[#b48a5d]'
            }`}
          >
            &gt; {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </aside>
  )
}
