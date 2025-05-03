'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../components/button';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white font-sans relative">
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 shadow px-6 py-4 flex justify-between items-center text-sm md:text-base">
        <Image src="/images/logo-yt.png" alt="YT Logo" width={50} height={50} />
        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#experience">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-black text-white rounded-full p-3 shadow-md hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center md:w-1/3">
          <Image src="/images/hero-bg.jpg" alt="Yackob Tamire" width={160} height={160} className="rounded-full mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Yackob Tamire</h1>
          <hr className="w-8 border-primary mx-auto my-2" />
          <p className="uppercase text-xs tracking-widest">Business Analyst</p>
        </div>
        <div className="md:w-2/3 mt-10 md:mt-0 md:pl-20">
          <h2 className="text-5xl font-bold mb-4">Hello</h2>
          <p className="text-xl mb-6">Here's who I am & what I do</p>
          <div className="flex gap-4 mb-8">
            <a href="/YT.pdf" download><Button>RESUME</Button></a>
            <a href="#projects"><Button>PROJECTS</Button></a>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            I'm a Business Analyst with 5+ years of experience across FinTech, Healthcare, and Real Estate.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Jobs listed */}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-24 px-6 md:px-24 bg-gray-50 dark:bg-zinc-800">
        <h2 className="text-4xl font-bold text-center mb-16">Case Studies</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {["shield.png", "ticket.png", "chart.png"].map((img, i) => (
            <details key={i} className="bg-white dark:bg-black p-6 rounded-xl shadow">
              <summary className="cursor-pointer font-semibold text-lg mb-2">Project {i + 1}</summary>
              <Image src={`/images/${img}`} alt="Project" width={64} height={64} className="my-4" />
              <p><strong>Overview:</strong> Description of the project.</p>
              <p><strong>Tools and Technologies:</strong> Tech stack used.</p>
              <p><strong>Prerequisites:</strong> Setup needed before starting.</p>
              <p><strong>Step-by-Step Instructions:</strong> Outline of key actions taken.</p>
              <p><strong>Expected Outcomes:</strong> Benefits and results.</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-center text-lg italic">
          “Yackob is one of the most insightful BAs we’ve worked with. His attention to business logic and technical detail is unmatched.”
          <br />
          <span className="block mt-4 font-bold">— Former Manager, CACI</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-24 bg-zinc-100 dark:bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="text-center">
          <p className="mb-4">Want to get in touch? Email me at:</p>
          <a href="mailto:yackob.tamire@gmail.com" className="text-primary text-lg font-medium hover:underline">yackob.tamire@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
