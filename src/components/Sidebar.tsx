'use client'

import Link from 'next/link'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white border-r border-gray-200 px-10 py-16 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-extrabold mb-12 text-[#333]">&gt; YT</h1>
        <nav className="space-y-6">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-base text-gray-600 hover:text-black transition"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()}</div>
    </aside>
  )
}
