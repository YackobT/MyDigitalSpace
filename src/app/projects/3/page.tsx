'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Project3() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-64 mb-10 rounded-xl overflow-hidden">
          <Image
            src="/images/shield.png"
            alt="Risk Management Shield"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-6">Project 3: Risk Management Shield</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>Implemented a risk scoring and alert system to monitor model governance and compliance levels.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
          <ul className="list-disc ml-6">
            <li>Next.js</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p>Understanding of model lifecycle, risk categories, and cloud storage systems.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
          <ol className="list-decimal ml-6">
            <li>Mapped out risk triggers and thresholds.</li>
            <li>Built alerting dashboard with role-based access.</li>
            <li>Integrated with internal audit tools.</li>
            <li>Published risk reports with visual graphs.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
          <p>Proactively flagged high-risk models, increasing compliance readiness by 40%.</p>
        </section>
      </motion.div>
    </main>
  )
}
