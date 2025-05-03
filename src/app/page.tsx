'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const experience = [
  {
    company: 'DS Technologies Inc',
    role: 'Integration Business Analyst',
    bullets: [
      'Led EHR system integrations for multi-site clinics.',
      'Created detailed user manuals that improved training efficiency by 40%.',
      'Collaborated with clinical and compliance teams to ensure HIPAA alignment.',
    ],
  },
  {
    company: 'CACI',
    role: 'Business Analyst',
    bullets: [
      'Reduced sprint rework by 30% by improving Agile backlog processes.',
      'Facilitated refinement, planning, and review ceremonies.',
      'Created business requirements and worked closely with dev teams.',
    ],
  },
  {
    company: 'Spectrum Financial',
    role: 'Business Systems Analyst',
    bullets: [
      'Automated finance workflows to improve QA pass rates by 25%.',
      'Maintained data integrity for loan origination tools.',
      'Provided insight dashboards for portfolio performance.',
    ],
  },
  {
    company: 'CIM Group',
    role: 'Business Systems Support Analyst',
    bullets: [
      'Supported lease operations for 500+ multi-unit properties.',
      'Improved reporting tools like rent roll and renewal trackers.',
      'Handled third-party system integrations and enhancements.',
    ],
  },
]

const projects = [
  {
    title: 'Risk Mitigation Tool',
    description: 'Governance tool used to track model risk thresholds and FHFA reporting.',
    icon: '/images/shield.png',
  },
  {
    title: 'SES Ticketing System',
    description: 'Internal ticketing platform for product ordering and tracking globally.',
    icon: '/images/ticket.png',
  },
  {
    title: 'Tableau Dashboard',
    description: 'Performance and compliance dashboards using SQL + Excel sources.',
    icon: '/images/chart.png',
  },
]

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white font-sans scroll-smooth px-6 md:px-20">
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 border px-4 py-2 rounded-xl text-sm bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <Image
          src="/images/logo-yt.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-4 rounded-full"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mb-8">
          Certified Scrum Master and Business Analyst with 5+ years experience across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/YT.pdf" download className="border rounded-2xl px-6 py-2 hover:scale-105 transition">
            Download Resume
          </a>
          <a href="https://linkedin.com/in/yackob-tamire" target="_blank" rel="noopener noreferrer" className="border rounded-2xl px-6 py-2 hover:scale-105 transition">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-28 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{job.role} — {job.company}</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-28 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border hover:shadow-xl transition"
            >
              <Image
                src={proj.icon}
                alt={proj.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  )
}
