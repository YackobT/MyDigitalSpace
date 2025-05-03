'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const experienceItems = [/* ...same as before */]
const caseStudies = [/* ...same as before */]
const vectorDecor = [/* ...same as before */]
const sections = ['experience', 'case-studies', 'contact']

export default function Home() {
  const [active, setActive] = useState('')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && scrollY >= el.offsetTop) {
          setActive(section)
        }
      }
    }

    const html = document.documentElement
    html.classList.toggle('dark', isDark)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDark])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 md:p-24 overflow-hidden bg-white text-black dark:bg-black dark:text-white scroll-smooth">

      {/* Decorative vectors */}
      {vectorDecor.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          width={200}
          height={200}
          className={`absolute opacity-10 ${
            i === 0
              ? 'top-10 left-0'
              : i === 1
              ? 'bottom-20 right-0'
              : 'top-1/3 left-1/2 -translate-x-1/2'
          }`}
        />
      ))}

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 px-4 py-2 border rounded-xl text-sm md:text-base bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Logo */}
      <Image
        src="/icons/logo-yt.png"
        alt="YT Logo"
        width={80}
        height={80}
        className="mb-2 rounded-full"
      />

      {/* Header */}
      <header className="text-4xl md:text-6xl font-bold mb-2 mt-2 text-center tracking-tight">
        Yackob Tamire
      </header>

      {/* Navigation */}
      <div className="sticky top-4 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-2xl flex gap-4 mb-10 shadow-md">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`text-sm md:text-base px-4 py-1 rounded-xl border transition duration-200 ${
              active === sec
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {sec.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </a>
        ))}
      </div>

      {/* Hero Buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-2xl border px-6 py-2 hover:scale-105 transition">
          View Resume
        </button>
        <button className="rounded-2xl border px-6 py-2 hover:scale-105 transition">
          Contact Me
        </button>
      </div>

      {/* Experience */}
      <section id="experience" className="w-full max-w-4xl mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {experienceItems.map((item, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg font-bold">{item.company}</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm md:text-base">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="w-full max-w-4xl mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Image
                src={study.image}
                alt={study.title}
                width={48}
                height={48}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold mb-1">{study.title}</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  {study.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full max-w-4xl mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-sm md:text-base">
          Feel free to reach out for collaborations, opportunities, or just to say hello.
        </p>
        <div className="mt-4">
          <a
            href="mailto:yackob@example.com"
            className="inline-block mt-2 rounded-xl border px-5 py-2 hover:scale-105 transition"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm opacity-60 mt-12">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  )
}
