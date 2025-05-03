'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white font-sans relative">
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
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center pt-32" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-xl">Certified Scrum Master & Business Analyst with cross-industry experience.</p>
        <div className="flex gap-4">
          <a href="/YT.pdf" download><Button>Resume</Button></a>
          <a href="#contact"><Button>Contact</Button></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-24 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I’m a data-driven, results-oriented Business Analyst and CSM with 5+ years of experience in FinTech, Healthcare, and Real Estate. I turn business needs into actionable systems through stakeholder collaboration and iterative development.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
        <div className="grid gap-12">
          <div>
            <h3 className="text-xl font-bold">DS Technologies Inc</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Led EHR system integrations for multi-site clinics</li>
              <li>Created user manuals that improved training efficiency by 40%</li>
              <li>Collaborated with clinical and compliance teams to ensure HIPAA alignment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">CACI</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Reduced sprint rework by 30% by improving Agile backlog processes</li>
              <li>Facilitated refinement, planning, and review ceremonies</li>
              <li>Created business requirements and worked closely with dev teams</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Spectrum Financial</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Automated finance workflows to improve QA pass rates by 25%</li>
              <li>Maintained data integrity for loan origination tools</li>
              <li>Provided insight dashboards for portfolio performance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">CIM Group</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Supported lease operations for 500+ multi-unit properties</li>
              <li>Improved reporting tools like rent roll and renewal trackers</li>
              <li>Handled third-party system integrations and vendor coordination</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-24 bg-gray-100 dark:bg-zinc-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {['workflow-automation.jpg', 'leasing-operations.jpg', 'ehr-system.jpg', 'property-reporting.jpg', 'agile-workflow.jpg'].map((src, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md">
              <Image src={`/images/${src}`} alt="Project Image" width={600} height={400} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
            <p className="italic">“Yackob brought clarity and structure to our workflows in record time.”</p>
            <p className="mt-4 font-semibold">— Project Manager, Healthcare Startup</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
            <p className="italic">“His dashboards gave leadership real-time visibility we lacked before.”</p>
            <p className="mt-4 font-semibold">— Director of Finance, Spectrum</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
            <p className="italic">“He’s a go-to resource for anything involving models or requirements.”</p>
            <p className="mt-4 font-semibold">— Product Owner, Freddie Mac</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-8">Let’s work together or chat about your next big idea.</p>
        <a href="mailto:yackobtamire@gmail.com"><Button>Email Me</Button></a>
      </section>

      {/* Decorative Vectors */}
      <Image src="/images/bg1.svg" alt="" width={200} height={200} className="absolute top-0 left-0 opacity-10" />
      <Image src="/images/bg2.svg" alt="" width={200} height={200} className="absolute bottom-0 right-0 opacity-10" />
      <Image src="/images/bg3.svg" alt="" width={200} height={200} className="absolute top-1/2 left-1/2 opacity-10 -translate-x-1/2 -translate-y-1/2" />
    </main>
  );
}
