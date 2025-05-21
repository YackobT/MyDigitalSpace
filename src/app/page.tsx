'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'

const projects = [
  {
    id: 1,
    title: 'Workflow Automation Platform',
    description: 'A platform to automate real estate operations across multiple offices.'
  },
  {
    id: 2,
    title: 'EHR Integration Suite',
    description: 'Integrated EHR workflows to streamline compliance and reporting.'
  },
  {
    id: 3,
    title: 'Agile Reporting Dashboard',
    description: 'Created dashboards to visualize Agile sprint progress and backlog health.'
  },
  {
    id: 4,
    title: 'Portfolio Analytics Tool',
    description: 'Designed a tool to analyze risk and performance across portfolios.'
  }
]

const testimonials = [
  {
    quote: 'Yackob was instrumental in transforming our reporting workflows. Highly recommend!',
    name: 'Sarah M., Director of Ops'
  },
  {
    quote: 'Incredibly thorough and detail-oriented BA. A joy to collaborate with.',
    name: 'John K., Product Owner'
  },
  {
    quote: 'Helped improve sprint velocity and backlog management. Real asset to the team.',
    name: 'Amanda L., Scrum Lead'
  },
  {
    quote: 'His insights on integration saved us weeks of dev time.',
    name: 'Tom W., Tech Lead'
  }
]

export default function Home() {
  return (
    <main className="scroll-smooth bg-[#141417] text-white relative bg-dots">
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-10 py-24 gap-12">
        <motion.div className="flex-1 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">Hello, I’m <span className="text-[#c084fc]">Yackob Tamire</span></h1>
          <p className="text-gray-400 text-lg max-w-xl">Certified Scrum Master & Business Analyst with 5+ years of experience delivering efficient systems and agile solutions.</p>
          <div className="flex gap-4 pt-4">
            <a href="/YT.pdf" download className="bg-[#c084fc] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#a855f7] transition">Download Resume</a>
            <a href="#projects" className="border-2 border-[#c084fc] text-[#c084fc] px-6 py-3 rounded-md font-semibold hover:bg-[#c084fc]/10 transition">View Projects</a>
          </div>
        </motion.div>
        <motion.div className="flex-1 flex justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden">
            <Image src="/images/profile.png" alt="Yackob Tamire" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      <section id="experience" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#experience</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            ['DS Technologies Inc', 'Integration Business Analyst', [
              'Led EHR system integrations for multi-site clinics.',
              'Created detailed user manuals that improved training efficiency by 40%.',
              'Collaborated with clinical and compliance teams to ensure HIPAA alignment.'
            ]],
            ['CACI', 'Business Analyst', [
              'Reduced sprint rework by 30% by improving Agile backlog processes.',
              'Facilitated refinement, planning, and review ceremonies.',
              'Created business requirements and worked closely with dev teams.'
            ]],
            ['Spectrum Financial', 'Business Systems Analyst', [
              'Automated finance workflows to improve QA pass rates by 25%.',
              'Maintained data integrity for loan origination tools.',
              'Provided insight dashboards for portfolio performance.'
            ]],
            ['CIM Group', 'Business Systems Support Analyst', [
              'Supported lease operations for 500+ multi-unit properties.',
              'Improved reporting tools like rent roll and renewal trackers.',
              'Handled third-party system integrations and escalations.'
            ]]
          ].map(([company, role, bullets], idx) => (
            <div key={idx} className="bg-[#1a1a1d] p-6 rounded-md border border-[#2d2d2d]">
              <h3 className="text-xl font-semibold text-[#c084fc]">{company} — {role}</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                {(bullets as string[]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
      </section>

      <section id="testimonials" className="px-10 py-20 bg-[#1a1a1d]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#c084fc]">#testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => <TestimonialCard key={idx} {...testimonial} />)}
        </div>
      </section>

      <section id="contact" className="text-center pt-20 pb-10">
        <h2 className="text-4xl font-bold text-[#c084fc] mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">Open to new opportunities, collaborations, and coffee chats.</p>
        <a href="mailto:yackob@example.com" className="inline-block px-6 py-3 border border-[#c084fc] text-[#c084fc] rounded-md hover:bg-[#c084fc]/10 transition">Contact Me</a>
      </section>
    </main>
  )
}