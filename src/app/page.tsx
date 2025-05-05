'use client';

import { useEffect, useState } from 'react';
import Button from '../components/button';
import Link from 'next/link';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#1E1E1E] text-white font-mono min-h-screen px-6 md:px-24 py-16 relative">
      <nav className="fixed top-0 left-0 w-full bg-[#2D2D2D] px-6 py-4 z-50 flex justify-between items-center border-b border-gray-700">
        <span className="text-green-400">&gt; Yackob Tamire</span>
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-cyan-400 transition">&gt; Home</a>
          <a href="#experience" className="hover:text-purple-400 transition">&gt; Experience</a>
          <a href="#projects" className="hover:text-purple-400 transition">&gt; Projects</a>
          <a href="#testimonials" className="hover:text-green-400 transition">&gt; Testimonials</a>
          <a href="#contact" className="hover:text-green-400 transition">&gt; Contact</a>
        </div>
      </nav>

      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-cyan-500 text-black rounded-full p-3 shadow-md hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}

      <section id="hero" className="pt-36 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 animate-pulse">Hi, I&apos;m Yackob</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">Building sleek, modern web experiences</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/YT.pdf" download><Button>View Resume</Button></a>
          <a href="#projects"><Button>View Projects</Button></a>
        </div>
      </section>

      <section id="experience" className="py-24">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl text-cyan-400">DS Technologies Inc - Integration Business Analyst</h3>
            <ul className="text-gray-300 list-disc ml-6 mt-2">
              <li>Led EHR system integrations for multi-site clinics.</li>
              <li>Created user manuals that improved training efficiency by 40%.</li>
              <li>Collaborated with clinical and compliance teams to ensure HIPAA alignment.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-cyan-400">CACI - Business Analyst</h3>
            <ul className="text-gray-300 list-disc ml-6 mt-2">
              <li>Reduced sprint rework by 30% by improving Agile backlog processes.</li>
              <li>Facilitated refinement, planning, and review ceremonies.</li>
              <li>Created business requirements and collaborated with dev teams.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-cyan-400">Spectrum Financial - Business Systems Analyst</h3>
            <ul className="text-gray-300 list-disc ml-6 mt-2">
              <li>Automated finance workflows to improve QA pass rates by 25%.</li>
              <li>Maintained data integrity for loan origination tools.</li>
              <li>Provided insight dashboards for portfolio performance.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-cyan-400">CIM Group - Business Systems Support Analyst</h3>
            <ul className="text-gray-300 list-disc ml-6 mt-2">
              <li>Supported lease operations for 500+ multi-unit properties.</li>
              <li>Improved reporting tools like rent roll and renewal trackers.</li>
              <li>Handled third-party system transitions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/projects/project-1">
            <div className="bg-[#2D2D2D] border border-gray-700 p-6 rounded-lg hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-cyan-400 mb-2">Workflow Automation System</h3>
              <p className="text-gray-300 mb-2">Built a tool to track workflows, project deadlines, and team actions.</p>
              <p className="text-sm text-gray-500">Tech Stack: Excel, SharePoint, Power BI</p>
            </div>
          </Link>
          <Link href="/projects/project-2">
            <div className="bg-[#2D2D2D] border border-gray-700 p-6 rounded-lg hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-cyan-400 mb-2">EHR Migration Project</h3>
              <p className="text-gray-300 mb-2">Led clinic EHR migration project with full data migration and training.</p>
              <p className="text-sm text-gray-500">Tech Stack: EHR Software, JIRA, Confluence</p>
            </div>
          </Link>
        </div>
      </section>

      <section id="testimonials" className="py-24">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-center text-lg italic text-gray-300">
          “Yackob is one of the most insightful BAs we&apos;ve worked with. His attention to business logic and technical detail is unmatched.”
          <br />
          <span className="block mt-4 font-bold text-green-400">— Former Manager, CACI</span>
        </div>
      </section>

      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact</h2>
        <p className="text-gray-400 mb-2">Let&apos;s connect:</p>
        <a href="mailto:yackob.tamire@gmail.com" className="text-purple-300 hover:underline">yackob.tamire@gmail.com</a>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
