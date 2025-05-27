'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Workflow Automation Platform',
      description: 'Built a dynamic dashboard for tracking enterprise automation requests.'
    },
    {
      id: 2,
      title: 'EHR Integration Suite',
      description: 'Integrated EHR workflows to streamline compliance and reporting.'
    },
    {
      id: 3,
      title: 'Agile Reporting Dashboard',
      description: 'Created a lightweight tool to visualize team velocity and delivery trends.'
    },
    {
      id: 4,
      title: 'Portfolio Analytics Tool',
      description: 'Designed a Tableau-style analytics interface for property portfolios.'
    },
  ]

  const testimonials = [
    {
      quote: 'Yackob brings clarity and drive to every meeting. We always left knowing the next step.',
      name: 'Project Lead, SES'
    },
    {
      quote: 'His ability to communicate technical workflows with non-technical stakeholders is unmatched.',
      name: 'Director, Freddie Mac'
    },
    {
      quote: 'Yackob improved our Jira setup in a week — sprint velocity actually increased.',
      name: 'Scrum Master, CACI'
    },
    {
      quote: 'Highly recommended for any team looking to improve delivery and communication.',
      name: 'Manager, DS Tech'
    },
  ]

  const experiences = [
    {
      company: 'Freddie Mac',
      role: 'Technical Program Manager',
      period: '2022–2024',
      summary: 'Led development of an enterprise risk platform to monitor and report on regulatory model performance.'
    },
    {
      company: 'SES',
      role: 'Product Deployment Lead',
      period: '2020–2022',
      summary: 'Oversaw global deployment of connectivity products across Europe and Asia.'
    }
  ]

  return (
    <main className="scroll-smooth bg-[#141417] text-white relative bg-dots">
      {/* Navigation */}
      <header className="w-full py-6 px-8 flex justify-between items-center bg-transparent z-50 absolute top-0">
        <h1 className="text-xl font-bold text-white">Yackob Tamire</h1>
        <nav className="space-x-6 text-sm text-gray-400">
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-10 py-32 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6">Hi, I&rsquo;m <span className="text-cyan-400">Yackob</span></h1>
          <p className="text-gray-400 mb-8">
            Certified Business Analyst & Scrum Master helping teams ship meaningful work.
          </p>
          <Link href="#projects" className="inline-block px-6 py-3 bg-cyan-500 text-black rounded-md font-semibold hover:bg-cyan-400 transition">
            View Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-72 h-72"
        >
          <Image
            src="/images/profile.png"
            alt="Yackob Tamire"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1a1a1d]">
        <motion.h2 className="text-4xl font-bold text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Experience</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-6 bg-[#18181b]">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-cyan-400 text-sm">{exp.role} ({exp.period})</p>
              <p className="text-gray-400 mt-2">{exp.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-12">
        <motion.h2 className="text-4xl font-bold text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Skills</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {['Agile', 'Scrum', 'Data Analysis', 'SQL', 'Jira', 'Confluence', 'UX Wireframes', 'Stakeholder Management'].map(skill => (
            <div key={skill} className="border border-gray-700 py-3 rounded-md">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12">
        <motion.h2 className="text-4xl font-bold text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-[#1a1a1d]">
        <motion.h2 className="text-4xl font-bold text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Testimonials</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} quote={t.quote} name={t.name} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s Work Together
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Open to new opportunities, collaborations, and solving problems that matter.
        </p>
        <a
          href="mailto:yackob@example.com"
          className="inline-block px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-400 transition"
        >
          Say Hello
        </a>
      </section>

      <footer className="py-10 text-center text-sm text-gray-600 bg-[#141417]">
        &copy; {new Date().getFullYear()} Yackob Tamire — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  )
}
