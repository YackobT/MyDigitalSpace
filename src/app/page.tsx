'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/button'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  return (
    <main className="scroll-smooth bg-[#141417] text-white">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-10 py-24 gap-12"
      >
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Hello, I’m <span className="text-[#c084fc]">Yackob Tamire</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Certified Scrum Master & Business Analyst with 5+ years of experience delivering efficient systems and agile solutions.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="/YT.pdf"
              download
              className="bg-[#c084fc] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#a855f7] transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="border-2 border-[#c084fc] text-[#c084fc] px-6 py-3 rounded-md font-semibold hover:bg-[#c084fc]/10 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden border border-[#2c2c30] shadow-lg">
            <Image
              src="/images/profile.png"
              alt="Yackob Tamire"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* QUOTE SECTION */}
      <section className="text-center py-20 px-6">
        <blockquote className="border-l-4 border-[#c084fc] pl-6 text-xl italic text-gray-300 max-w-3xl mx-auto">
          “With great power comes great electricity bill”<br />
          <span className="block text-right text-sm text-gray-500 mt-2">— Dr. Who</span>
        </blockquote>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4].map(id => (
            <ProjectCard key={id} id={id} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="px-10 py-20 bg-[#1a1a1d]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map(id => (
            <TestimonialCard key={id} id={id} />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="text-center pt-20 pb-10">
        <h2 className="text-4xl font-bold text-[#c084fc] mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">Open to new opportunities, collaborations, and coffee chats.</p>
        <a
          href="mailto:yackob@example.com"
          className="inline-block px-6 py-3 border border-[#c084fc] text-[#c084fc] rounded-md hover:bg-[#c084fc]/10 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  )
}
