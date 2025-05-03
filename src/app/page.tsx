'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Risk Mitigation Tool for Model Governance',
    summary:
      'Built a full-scale tool used by analysts and governance teams to track risk thresholds, project progress, and compliance tasks. Enabled real-time reporting for FHFA reviews.',
    image: '/icons/shield.png',
  },
  {
    title: 'Enterprise Ticketing System for SES',
    summary:
      'Delivered a backend and UI solution for internal use to manage satellite product delivery, tracking, and resolution across multiple continents.',
    image: '/icons/ticket.png',
  },
  {
    title: 'Model Performance Tableau Dashboard',
    summary:
      'Created advanced dashboards pulling from SQL and Excel sources to visualize performance and compliance trends across the organization.',
    image: '/icons/chart.png',
  },
]

const vectorDecor = [
  '/vectors/bg1.svg',
  '/vectors/bg2.svg',
  '/vectors/bg3.svg',
]

const experienceItems = [
  {
    company: "DS Technologies Inc",
    role: "Integration Business Analyst",
    points: [
      "Led EHR system integrations for multi-site clinics.",
      "Created detailed user manuals that improved training efficiency by 40%.",
      "Collaborated with clinical and compliance teams to ensure HIPAA alignment."
    ]
  },
  {
    company: "CACI",
    role: "Business Analyst",
    points: [
      "Reduced sprint rework by 30% by improving Agile backlog processes.",
      "Facilitated refinement, planning, and review ceremonies.",
      "Created business requirements and worked closely with dev teams."
    ]
  },
  {
    company: "Spectrum Financial",
    role: "Business Systems Analyst",
    points: [
      "Automated finance workflows to improve QA pass rates by 25%.",
      "Maintained data integrity for loan origination tools.",
      "Provided insight dashboards for portfolio performance."
    ]
  },
  {
    company: "CIM Group",
    role: "Business Systems Support Analyst",
    points: [
      "Supported lease operations for 500+ multi-unit properties.",
      "Improved reporting tools like rent roll and renewal trackers.",
      "Handled third-party system integrations and enhancements."
    ]
  }
]

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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-10 flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years experience across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex gap-4 mb-6">
          <a href="/YT.pdf" download className="rounded-2xl border px-6 py-2 hover:scale-105 transition">Resume</a>
          <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border px-6 py-2 hover:scale-105 transition">LinkedIn</a>
        </div>
        <span className="text-sm text-gray-500">Let’s build something impactful together.</span>
      </motion.section>

      {/* Nav Menu */}
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

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-4xl mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
        {experienceItems.map((item, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg font-bold">{item.role} — {item.company}</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm md:text-base">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Case Studies Section */}
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
