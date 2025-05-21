'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'

const projects = [
  {
    id: 1,
    title: 'Workflow Automation Platform',
    description: 'Automated real estate operations across multiple offices.'
  },
  {
    id: 2,
    title: 'EHR Integration Suite',
    description: 'Streamlined compliance and reporting through integrated workflows.'
  },
  {
    id: 3,
    title: 'Agile Reporting Dashboard',
    description: 'Visualized Agile sprint progress and backlog health.'
  },
  {
    id: 4,
    title: 'Portfolio Analytics Tool',
    description: 'Analyzed risk and performance across financial portfolios.'
  }
]

const testimonials = [
  {
    quote: 'Yackob transformed our reporting workflows. Highly recommend!',
    name: 'Sarah M., Director of Ops'
  },
  {
    quote: 'Incredibly thorough and detail-oriented BA. A joy to work with.',
    name: 'John K., Product Owner'
  },
  {
    quote: 'Improved sprint velocity and backlog management. Amazing asset.',
    name: 'Amanda L., Scrum Lead'
  },
  {
    quote: 'His integration expertise saved us weeks of dev time.',
    name: 'Tom W., Tech Lead'
  }
]

export default function Home() {
  return (
    <main className="scroll-smooth bg-[#141417] text-white relative bg-dots">
      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-10 py-24 gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hello, I’m <span className="text-[#c084fc]">Yackob Tamire</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Certified Scrum Master & Business Analyst delivering agile solutions and efficient systems.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="/YT.pdf" download className="bg-[#c084fc] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#a855f7] transition">Download Resume</a>
            <a href="#projects" className="border border-[#c084fc] text-[#c084fc] px-6 py-3 rounded-md font-semibold hover:bg-[#c084fc]/10 transition">View Projects</a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Yackob Tamire"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#skills</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {['Agile & Scrum', 'Process Mapping', 'Jira / Confluence', 'SQL / Data Analysis', 'Stakeholder Management', 'UAT / QA'].map(skill => (
            <div key={skill} className="border border-[#2d2d2d] p-6 rounded-md bg-[#1a1a1d] text-gray-200 hover:border-[#c084fc] transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-20 bg-[#1a1a1d]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(project => (
            <div key={project.id} className="border border-[#2d2d2d] p-6 rounded-lg shadow-lg bg-[#141417]">
              <h3 className="text-2xl font-semibold mb-2 text-[#c084fc]">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <button className="bg-[#c084fc] text-black px-4 py-2 rounded hover:bg-[#a855f7] transition">View</button>
                <button className="border border-[#c084fc] text-[#c084fc] px-4 py-2 rounded hover:bg-[#c084fc]/10 transition">Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} name={t.name} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center pt-20 pb-10">
        <h2 className="text-4xl font-bold text-[#c084fc] mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">Open to new opportunities, collaborations, and coffee chats.</p>
        <a href="mailto:yackob@example.com" className="inline-block px-6 py-3 border border-[#c084fc] text-[#c084fc] rounded-md hover:bg-[#c084fc]/10 transition">
          Contact Me
        </a>
      </section>
    </main>
  )
}
