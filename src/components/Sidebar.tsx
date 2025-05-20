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
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-[#fdfaf6] border-r border-[#e6e0d6] px-10 py-16 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-extrabold mb-12 text-[#6b4e2e]">&gt; YT</h1>
        <nav className="space-y-6">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-lg text-[#5f5244] hover:text-[#8b6b4f] font-medium transition"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="text-sm text-[#c4b6a6]">&copy; {new Date().getFullYear()}</div>
    </aside>
  )
}
