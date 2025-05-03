'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-3 shadow-md hover:scale-105 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}

      {/* Hero Section */}
      [...rest of the file remains unchanged...]
    </main>
  );
}
