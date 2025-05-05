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
          <a href="#projects" className="hover:text-purple-400 transition">&gt; Projects</a>
          <a href="#contact" className="hover:text-green-400 transition">&gt; Contact</a>
        </div>
      </nav>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-cyan-500 text-black rounded-full p-3 shadow-md hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}

      {/* Hero */}
      <section id="hero" className="pt-36 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 animate-pulse">Hi, I&apos;m Yackob</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">Building sleek, modern web experiences</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/YT.pdf" download><Button>View Resume</Button></a>
          <a href="#projects"><Button>View Projects</Button></a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2D2D2D] border border-gray-700 p-6 rounded-lg hover:shadow-lg">
            <h3 className="text-xl text-cyan-400 mb-2">Project One</h3>
            <p className="text-gray-300 mb-2">A short description about the first project.</p>
            <p className="text-sm text-gray-500">Tech Stack: React, Tailwind CSS, Vercel</p>
            <div className="mt-4 text-sm text-green-400">
              <a href="/projects/1" className="hover:underline">More Details &gt;</a>
            </div>
          </div>
          <div className="bg-[#2D2D2D] border border-gray-700 p-6 rounded-lg hover:shadow-lg">
            <h3 className="text-xl text-cyan-400 mb-2">Project Two</h3>
            <p className="text-gray-300 mb-2">A short description about the second project.</p>
            <p className="text-sm text-gray-500">Tech Stack: Next.js, MongoDB</p>
            <div className="mt-4 text-sm text-green-400">
              <a href="/projects/2" className="hover:underline">More Details &gt;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact</h2>
        <p className="text-gray-400 mb-2">Let&apos;s connect:</p>
        <a href="mailto:yackob.tamire@gmail.com" className="text-purple-300 hover:underline">yackob.tamire@gmail.com</a>
      </section>
    </main>
  );
}
