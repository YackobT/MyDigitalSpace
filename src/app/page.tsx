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
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center opacity-10 z-0 glitch-background"></div>
      <nav className="fixed top-0 left-0 w-full bg-[#252526] px-6 py-4 z-50 flex justify-between items-center border-b border-gray-700">
        <Link href="#hero" className="text-[#F5F5DC] hover:text-cyan-300 transition font-bold text-lg">&gt; YT</Link>
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-cyan-400 transition">&gt; Home</a>
          <a href="#experience" className="hover:text-purple-400 transition">&gt; Experience</a>
          <a href="#projects" className="hover:text-purple-400 transition">&gt; Projects</a>
          <a href="#testimonials" className="hover:text-[#F5F5DC] transition">&gt; Testimonials</a>
          <a href="#contact" className="hover:text-[#F5F5DC] transition">&gt; Contact</a>
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
        <h2 className="text-3xl font-bold text-center text-cyan-400 glitch">&gt; Experience</h2>
        <div className="mt-10 max-w-4xl mx-auto space-y-16">
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
            <div key={index} className="bg-[#2D2D2D] p-6 rounded-lg shadow-md border-l-4 border-[#00FFFF]">
              <h3 className="text-xl font-semibold text-purple-300">{company} – {role}</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-cyan-400 glitch">&gt; Projects</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5].map((id) => (
            <Link
              href={`/projects/${id}`}
              key={id}
              className="bg-[#1E1E1E] border border-[#00FFFF] p-6 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={`/images/project${id}.png`}
                alt={`Project ${id}`}
                width={500}
                height={300}
                className="rounded-xl mb-4"
              />
              <div className="text-[#F5F5DC] text-sm">Project {id}</div>
              <h3 className="text-xl font-semibold text-white mt-1">Project Title {id}</h3>
              <p className="text-gray-400 mt-2 text-sm">Brief description with Matrix-style terminal card.</p>
              <span className="text-cyan-400 text-xs mt-2 block">Click to view details</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-[#F5F5DC] glitch">&gt; Testimonials</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#252526] border border-[#F5F5DC] p-4 rounded-md shadow-md">
              <p className="italic text-gray-300">"Yackob consistently delivers results and helps drive the team forward."</p>
              <span className="block text-right mt-2 text-sm text-[#F5F5DC]">— Colleague {i + 1}</span>
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
