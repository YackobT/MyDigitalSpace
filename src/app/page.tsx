'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="scroll-smooth">
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
              src="/images/profile.jpg"
              alt="Yackob Tamire"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>
    </main>
  )
}


      {/* EXPERIENCE */}
      <section id="experience">
        <h2 className="text-3xl font-bold mb-12 text-[#b48a5d] text-center">Experience</h2>
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
            <div key={index} className="bg-white border border-[#e8dfd4] p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold">{company} – {role}</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-12 text-[#b48a5d] text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard id={1} title="Workflow Automation Platform" description="Automated workflows for internal leasing operations." />
          <ProjectCard id={2} title="Agile Workflow Redesign" description="Boosted team velocity with sprint optimizations." />
          <ProjectCard id={3} title="Property Reporting Dashboard" description="Delivered real-time KPIs for leasing performance." />
          <ProjectCard id={4} title="Electronic Health Record System" description="Streamlined appointment, billing & compliance systems." />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <h2 className="text-3xl font-bold mb-12 text-[#b48a5d] text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard quote="Yackob transformed how our teams communicate. Incredible leadership!" name="Product Owner, CACI" />
          <TestimonialCard quote="One of the most organized analysts I’ve worked with." name="Manager, DS Tech" />
          <TestimonialCard quote="He sees the big picture and the tiny details that matter." name="CTO, CIM Group" />
          <TestimonialCard quote="Yackob’s agile ceremonies brought real energy to the team!" name="Scrum Lead, Spectrum" />
        </div>
      </section>

      {/* CONTACT */}
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
