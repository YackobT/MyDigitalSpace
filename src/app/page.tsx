'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-zinc-900 text-black dark:text-white font-sans relative">
      {/* Sticky Nav Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 shadow px-6 py-4 flex justify-between items-center text-sm md:text-base">
        <Image src="/images/logo-yt.png" alt="YT Logo" width={50} height={50} className="ml-2" />
        <div className="flex gap-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center pt-48 pb-20 px-4 transition-all duration-500 ease-in-out" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white/70 dark:bg-zinc-800/80 backdrop-blur-md rounded-[2rem] px-10 py-12 shadow-2xl max-w-4xl w-full border border-gray-300 dark:border-zinc-700">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6 text-black dark:text-white leading-[1.1]">Yackob Tamire</h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
            Certified Scrum Master & Business Analyst with 5+ years of experience in FinTech, Real Estate, and Healthcare. I help teams transform ideas into scalable, user-centered solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/YT.pdf" download>
              <Button className="text-base px-6 py-3 rounded-full shadow hover:scale-105 transition">Download CV</Button>
            </a>
            <a href="#contact">
              <Button className="text-base px-6 py-3 rounded-full shadow hover:scale-105 transition">Let’s Connect</Button>
            </a>
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-black dark:text-white opacity-60">↓</motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-24 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a data-driven Business Analyst and Certified Scrum Master who’s led cross-functional teams to deliver high-impact products in finance, healthcare, and real estate. Known for translating business needs into clean, actionable requirements and building workflows that scale.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-24 bg-gray-50 dark:bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
        <div className="grid gap-16 max-w-4xl mx-auto">
          {[
            {
              company: 'DS Technologies Inc',
              role: 'Integration Business Analyst',
              bullets: [
                'Led EHR system integrations for multi-site clinics.',
                'Created user manuals that improved training efficiency by 40%.',
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
                'Handled third-party system integrations and vendor coordination.'
              ]
            }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.2 }} className="text-left">
              <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
              <p className="text-md font-semibold text-gray-600 dark:text-gray-300 mb-3">{item.role}</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-16">Project Highlights</h2>
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {['workflow-automation.jpg', 'leasing-operations.jpg', 'ehr-system.jpg', 'property-reporting.jpg', 'agile-workflow.jpg'].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-zinc-800">
              <Image src={`/images/${img}`} alt="Project" width={800} height={600} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 md:px-24 bg-gray-50 dark:bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold mb-16">What People Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[{
            quote: "Yackob brought clarity and structure to our workflows in record time.",
            name: "Project Manager, Healthcare Startup"
          }, {
            quote: "His dashboards gave leadership real-time visibility we lacked before.",
            name: "Director of Finance, Spectrum"
          }, {
            quote: "He’s a go-to resource for anything involving models or requirements.",
            name: "Product Owner, Freddie Mac"
          }].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md">
              <p className="italic text-gray-700 dark:text-gray-300">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-gray-800 dark:text-white">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
