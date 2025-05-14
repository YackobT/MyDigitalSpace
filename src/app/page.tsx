'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  return (
    <main className="p-10 md:p-20 space-y-32">
      {/* Hero */}
      <section id="hero" className="space-y-6 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-[#F5F5DC] leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Turning Chaos Into Clarity<br />
          <span className="text-cyan-400">&gt; With Process, People, and Purpose</span>
        </motion.h1>
        <p className="text-gray-300 text-lg">
          Certified Business Analyst & Scrum Master driving digital transformation with empathy, clarity, and collaboration.
        </p>
        <a href="/YT.pdf" download className="inline-block bg-cyan-500 text-black px-6 py-3 mt-4 rounded-full font-medium hover:scale-105 transition">
          Download Resume
        </a>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">&gt; Experience</h2>
        <div className="space-y-10">
          {[
            {
              company: 'DS Technologies Inc',
              role: 'Integration Business Analyst',
              bullets: [
                'Led EHR system integrations for multi-site clinics.',
                'Created detailed user manuals that improved training efficiency by 40%.',
                'Collaborated with clinical and compliance teams to ensure HIPAA alignment.'
              ]
            },
            {
              company: 'CACI',
              role: 'Business Analyst',
              bullets: [
                'Reduced sprint rework by 30% by improving Agile backlog processes.',
                'Facilitated refinement, planning, and review ceremonies.',
                'Created business requirements and worked closely with dev teams.'
              ]
            },
            {
              company: 'Spectrum Financial',
              role: 'Business Systems Analyst',
              bullets: [
                'Automated finance workflows to improve QA pass rates by 25%.',
                'Maintained data integrity for loan origination tools.',
                'Provided insight dashboards for portfolio performance.'
              ]
            },
            {
              company: 'CIM Group',
              role: 'Business Systems Support Analyst',
              bullets: [
                'Supported lease operations for 500+ multi-unit properties.',
                'Improved reporting tools like rent roll and renewal trackers.',
                'Handled third-party system integrations and escalations.'
              ]
            }
          ].map(({ company, role, bullets }, idx) => (
            <div key={idx} className="bg-zinc-800 p-6 rounded-xl border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-[#F5F5DC]">{company} – {role}</h3>
              <ul className="mt-3 list-disc list-inside text-gray-300">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">&gt; Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            id={1}
            title="Workflow Automation Platform"
            description="Automated workflows for internal leasing operations."
          />
          <ProjectCard
            id={2}
            title="Agile Workflow Redesign"
            description="Boosted team velocity with sprint optimizations."
          />
          <ProjectCard
            id={3}
            title="Property Reporting Dashboard"
            description="Delivered real-time KPIs for leasing performance."
          />
          <ProjectCard
            id={4}
            title="Electronic Health Record System"
            description="Streamlined appointment, billing & compliance systems."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">&gt; Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TestimonialCard quote="Yackob transformed how our teams communicate. Incredible leadership!" name="Product Owner, CACI" />
          <TestimonialCard quote="One of the most organized analysts I’ve worked with." name="Manager, DS Tech" />
          <TestimonialCard quote="He sees the big picture and the tiny details that matter." name="CTO, CIM Group" />
          <TestimonialCard quote="Yackob’s agile ceremonies brought real energy to the team!" name="Scrum Lead, Spectrum" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center pt-20">
        <h2 className="text-4xl font-bold text-[#F5F5DC] mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">Open to new opportunities, collaborations, and coffee chats.</p>
        <a
          href="mailto:yackob@example.com"
          className="inline-block bg-[#F5F5DC] text-black px-6 py-3 rounded-full hover:bg-white transition"
        >
          Send Email
        </a>
      </section>
    </main>
  )
}
