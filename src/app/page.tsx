'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  return (
    <main className="space-y-32 scroll-smooth">
      {/* Hero */}
      <section id="hero" className="text-center space-y-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#b48a5d] mx-auto">
            <img
              src="/images/profile.jpg"
              alt="Yackob Tamire"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-5xl font-extrabold text-[#1a1a1a] leading-snug tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              Hi, I’m Yackob
            </motion.span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Scrum Master & Business Analyst empowering digital teams
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="/YT.pdf"
              download
              className="bg-[#b48a5d] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a2794e] transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="border-2 border-[#b48a5d] text-[#b48a5d] px-6 py-3 rounded-full font-medium hover:bg-[#f1e9df] transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-3xl font-bold mb-12 text-[#b48a5d] text-center">&gt; Experience</h2>
        <div className="space-y-10">
          {[{
            company: 'DS Technologies Inc',
            role: 'Integration Business Analyst',
            bullets: [
              'Led EHR system integrations for multi-site clinics.',
              'Created detailed user manuals that improved training efficiency by 40%.',
              'Collaborated with clinical and compliance teams to ensure HIPAA alignment.'
            ]
          }, {
            company: 'CACI',
            role: 'Business Analyst',
            bullets: [
              'Reduced sprint rework by 30% by improving Agile backlog processes.',
              'Facilitated refinement, planning, and review ceremonies.',
              'Created business requirements and worked closely with dev teams.'
            ]
          }, {
            company: 'Spectrum Financial',
            role: 'Business Systems Analyst',
            bullets: [
              'Automated finance workflows to improve QA pass rates by 25%.',
              'Maintained data integrity for loan origination tools.',
              'Provided insight dashboards for portfolio performance.'
            ]
          }, {
            company: 'CIM Group',
            role: 'Business Systems Support Analyst',
            bullets: [
              'Supported lease operations for 500+ multi-unit properties.',
              'Improved reporting tools like rent roll and renewal trackers.',
              'Handled third-party system integrations and escalations.'
            ]
          }].map(({ company, role, bullets }, index) => (
            <div key={index} className="bg-[#fcf9f5] p-6 rounded-2xl border border-[#e8dfd4] shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a]">{company} – {role}</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-12 text-[#b48a5d] text-center">&gt; Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard id={1} title="Workflow Automation Platform" description="Automated workflows for internal leasing operations." />
          <ProjectCard id={2} title="Agile Workflow Redesign" description="Boosted team velocity with sprint optimizations." />
          <ProjectCard id={3} title="Property Reporting Dashboard" description="Delivered real-time KPIs for leasing performance." />
          <ProjectCard id={4} title="Electronic Health Record System" description="Streamlined appointment, billing & compliance systems." />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h2 className="text-3xl font-bold mb-12 text-[#b48a5d] text-center">&gt; Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard quote="Yackob transformed how our teams communicate. Incredible leadership!" name="Product Owner, CACI" />
          <TestimonialCard quote="One of the most organized analysts I’ve worked with." name="Manager, DS Tech" />
          <TestimonialCard quote="He sees the big picture and the tiny details that matter." name="CTO, CIM Group" />
          <TestimonialCard quote="Yackob’s agile ceremonies brought real energy to the team!" name="Scrum Lead, Spectrum" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center pt-20">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">Let’s Work Together</h2>
        <p className="text-gray-600 mb-6">Open to new opportunities, collaborations, and coffee chats.</p>
        <a
          href="mailto:yackob@example.com"
          className="inline-block bg-[#b48a5d] text-white px-6 py-3 rounded-full hover:bg-[#a27846] transition"
        >
          Send Email
        </a>
      </section>
    </main>
  )
}
