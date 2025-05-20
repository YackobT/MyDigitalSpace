'use client'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-[#0f0f11] border-r border-[#1f1f21] px-6 py-12 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-extrabold mb-12 text-[#c084fc] tracking-wide">&gt; YT</h1>
        <nav className="space-y-6">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-sm text-gray-400 hover:text-white font-medium tracking-wide transition"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="text-xs text-gray-600">&copy; {new Date().getFullYear()}</div>
    </aside>
  )
}
