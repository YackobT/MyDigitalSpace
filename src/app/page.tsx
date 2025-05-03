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
      <section id="about" className="pt-40 pb-20 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-zinc-900">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center md:w-1/3">
          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
            <Image src="/images/hero-bg.jpg" alt="Yackob Tamire" width={160} height={160} />
          </div>
          <h1 className="text-2xl font-bold mb-2">Yackob Tamire</h1>
          <hr className="border-primary w-8 mx-auto my-2" />
          <p className="uppercase text-xs tracking-widest">Business Analyst</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/YackobT" target="_blank"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="md:w-2/3 mt-10 md:mt-0 md:pl-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Hello</h2>
          <p className="text-xl mb-6">Here's who I am & what I do</p>
          <div className="flex gap-4 mb-8">
            <a href="/YT.pdf" download><Button className="text-base px-6 py-3 rounded-full shadow hover:scale-105 transition">RESUME</Button></a>
            <a href="#projects"><Button className="text-base px-6 py-3 rounded-full border border-black dark:border-white hover:scale-105 transition">PROJECTS</Button></a>
          </div>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
            I'm a Business Analyst with 5+ years of experience across FinTech, Healthcare, and Real Estate.
            I enjoy creating intuitive digital solutions and aligning technical strategies with business goals.
          </p>
        </div>
      </section>

      {/* Case Study Preview */}
      <section id="projects" className="py-24 px-6 md:px-24 bg-gray-50 dark:bg-zinc-800">
        <h2 className="text-4xl font-bold text-center mb-16">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <a href="/projects/property-reporting" className="block bg-white dark:bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <Image src="/images/property-reporting.jpg" alt="Property Reporting" width={800} height={600} className="w-full object-cover h-48" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Property Management Reporting System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Automated reporting and dashboards for real estate operations.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-24 text-center bg-white dark:bg-zinc-800">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Want to collaborate on a project or explore how I can help your team succeed? I'm open to freelance, contract, or full-time opportunities.
          </p>
          <a href="mailto:yackobtamire@gmail.com">
            <Button className="px-8 py-4 text-base rounded-full shadow-lg hover:scale-105 transition">
              Email Me
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Yackob Tamire. Built with ❤️ using Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
