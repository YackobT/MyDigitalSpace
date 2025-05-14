'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Project4() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/90 dark:bg-zinc-800 p-8 rounded-2xl shadow-md backdrop-blur-md"
      >
        <h1 className="text-4xl font-bold mb-6">Project 4: Electronic Health Record System</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>Designed an EHR platform for outpatient clinics with scheduling, billing, and reporting features.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
          <ul className="list-disc ml-6">
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p>Familiarity with healthcare workflows and data compliance standards (e.g., HIPAA).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
          <ol className="list-decimal ml-6">
            <li>Created patient intake and appointment modules.</li>
            <li>Secured patient data using JWT and encryption.</li>
            <li>Linked system to insurance and billing APIs.</li>
            <li>Built admin panel for clinical reporting.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
          <p>Reduced appointment no-shows and billing delays by integrating all services into a single tool.</p>
        </section>
      </motion.div>
    </main>
  )
}
