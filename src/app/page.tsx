'use client'

import { useEffect, useState } from 'react'
import Button from '../components/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-[#1A1A1A] text-white font-mono min-h-screen px-6 md:px-24 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center opacity-10 z-0 glitch-background"></div>

      <motion.section
        id="hero"
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-[#00FF00] animate-glitch matrix-title">&gt; Hi, I'm Yackob</h1>
        <div className="mt-6 mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-[#F5F5DC]">
          <Image
            src="/images/profile.jpg"
            alt="Yackob Tamire"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg md:text-xl mt-4 text-gray-300">Certified Business Analyst &amp; Scrum Master driving digital transformation</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/YT.pdf" download><Button>View Resume</Button></a>
          <a href="#projects"><Button>Explore Projects</Button></a>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-cyan-400 glitch animate-glitch">&gt; Projects</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5].map((id) => {
            const titles = {
              1: "Workflow Automation Platform",
              2: "Agile Workflow Redesign",
              3: "Property Reporting Dashboard",
              4: "Electronic Health Record System",
              5: "Leasing Operations Optimization"
            };

            const summaries = {
              1: "Platform to automate internal workflows for leasing ops.",
              2: "Revamped agile structure to improve delivery velocity.",
              3: "Live dashboards to report lease & vacancy metrics.",
              4: "Digital record system for appointments, billing, and compliance.",
              5: "Streamlined leasing lifecycle with dashboards and tracking."
            };

            return (
              <Link
                href={`/projects/${id}`}
                key={id}
                className="bg-[#1E1E1E] border border-[#00FFFF] p-6 rounded-md shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50"
              >
                <Image
                  src={`/images/project${id}.png`}
                  alt={`Project ${id}`}
                  width={500}
                  height={300}
                  className="rounded-xl mb-4"
                />
                <div className="text-[#F5F5DC] text-sm">Project {id}</div>
                <h3 className="text-xl font-semibold text-white mt-1">{titles[id]}</h3>
                <p className="text-gray-400 mt-2 text-sm">{summaries[id]}</p>
                <span className="text-cyan-400 text-xs mt-2 block">Click to view details</span>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </main>
  )
}
