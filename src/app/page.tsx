'use client';

import { useEffect, useState } from 'react';
import Button from '../components/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#1A1A1A] text-white font-mono min-h-screen px-6 md:px-24 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center opacity-10 z-0"></div>
      <nav className="fixed top-0 left-0 w-full bg-[#252526] px-6 py-4 z-50 flex justify-between items-center border-b border-gray-700">
        <Link href="#hero" className="text-green-400 hover:text-cyan-300 transition font-bold text-lg">&gt; YT</Link>
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
          className="fixed bottom-6 right-6 bg-cyan-500 text-black rounded-full p-3 shadow-md hover:scale-105 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}

      <section id="hero" className="pt-36 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF00FF] animate-pulse glitch">&gt; Hi, I'm Yackob</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">Certified Business Analyst & Scrum Master driving digital transformation</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/YT.pdf" download><Button>View Resume</Button></a>
          <a href="#projects"><Button>Explore Projects</Button></a>
        </div>
      </section>

      <section id="experience" className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-cyan-400">&gt; Experience</h2>
        <div className="mt-10 max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-purple-300">DS Technologies Inc – Integration Business Analyst</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Led EHR system integrations for multi-site clinics.</li>
              <li>Created detailed user manuals that improved training efficiency by 40%.</li>
              <li>Collaborated with clinical and compliance teams to ensure HIPAA alignment.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300">CACI – Business Analyst</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Reduced sprint rework by 30% by improving Agile backlog processes.</li>
              <li>Facilitated refinement, planning, and review ceremonies.</li>
              <li>Created business requirements and worked closely with dev teams.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300">Spectrum Financial – Business Systems Analyst</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Automated finance workflows to improve QA pass rates by 25%.</li>
              <li>Maintained data integrity for loan origination tools.</li>
              <li>Provided insight dashboards for portfolio performance.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300">CIM Group – Business Systems Support Analyst</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Supported lease operations for 500+ multi-unit properties.</li>
              <li>Improved reporting tools like rent roll and renewal trackers.</li>
              <li>Handled third-party system integrations and escalations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-cyan-400">&gt; Projects</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5].map((id) => (
            <Link href={`/projects/${id}`} key={id} className="bg-[#252526] p-6 rounded-md border border-cyan-500 hover:scale-105 transition shadow-md">
              <h3 className="text-xl font-semibold text-[#00FFFF]">Project {id}</h3>
              <p className="text-gray-400 mt-2 text-sm">Click to view detailed case study</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-green-400">&gt; Testimonials</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#252526] border border-green-500 p-4 rounded-md shadow-md">
              <p className="italic text-gray-300">"Yackob consistently delivers results and helps drive the team forward."</p>
              <span className="block text-right mt-2 text-sm text-green-300">— Colleague {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="py-10 text-center text-sm text-gray-500 relative z-10">
        <p>&copy; {new Date().getFullYear()} Yackob Tamire. Built with Next.js & Tailwind CSS.</p>
        <p>Contact: <a href="mailto:yackob@example.com" className="text-cyan-400 hover:underline">yackob@example.com</a></p>
      </footer>
    </main>
  );
}
