'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TerminalPortfolio() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#1E1E1E] text-white font-mono min-h-screen">
      {/* Sticky Terminal Nav */}
      <nav className="fixed top-0 left-0 w-full bg-[#2D2D2D] z-50 px-6 py-4 flex justify-between border-b border-zinc-700">
        <span className="text-[#00FFFF]">~/portfolio</span>
        <div className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">&gt; Home</a>
          <a href="#projects" className="hover:underline">&gt; Projects</a>
          <a href="#about" className="hover:underline">&gt; About</a>
          <a href="#contact" className="hover:underline">&gt; Contact</a>
        </div>
      </nav>

      {/* Scroll to top */}
      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-[#00FFFF] text-black rounded-full px-4 py-2 text-sm font-bold hover:scale-105 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Top
        </button>
      )}

      {/* Hero Section */}
      <section id="home" className="pt-32 text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-[#00FFFF] animate-pulse">Hi, I'm [Your Name]</h1>
        <p className="mt-4 text-lg text-gray-300">Building sleek, modern web experiences</p>
        <Link href="#projects" className="inline-block mt-8 px-6 py-2 border border-[#00FFFF] text-[#00FFFF] rounded hover:bg-[#00FFFF] hover:text-black transition">
          View Projects
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-[#FF00FF] font-semibold mb-4">&gt; About</h2>
        <p className="text-gray-400">
          I'm a [Your Role] passionate about building accessible, fast, and modern digital products.
          I specialize in stakeholder collaboration, workflow design, and Agile delivery.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#2D2D2D]">
        <h2 className="text-3xl text-[#00FF00] font-semibold text-center mb-12">&gt; Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#1E1E1E] border border-zinc-700 p-6 rounded shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#00FF00] mb-2">Project Name</h3>
              <p className="text-gray-300 text-sm mb-2">Brief project description (1-2 sentences)</p>
              <p className="text-xs text-gray-500 mb-4">Tech Stack: React, Tailwind CSS, Node.js</p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="underline hover:text-[#00FFFF]">Live Demo</a>
                <a href="#" className="underline hover:text-[#00FFFF]">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl text-[#FF00FF] font-semibold mb-6">&gt; Contact</h2>
        <p className="text-gray-300 mb-4">Reach out via:</p>
        <div className="text-sm text-gray-400 space-y-2">
          <p>Email: <a href="mailto:your@email.com" className="text-[#00FFFF] hover:underline">your@email.com</a></p>
          <p>GitHub: <a href="https://github.com/yourhandle" className="text-[#00FFFF] hover:underline">@yourhandle</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourhandle" className="text-[#00FFFF] hover:underline">yourhandle</a></p>
        </div>
      </section>
    </main>
  );
}
