'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Project5() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6">Project 5: Leasing Operations Optimization</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>Streamlined leasing processes through automation, tenant data integration, and document tracking.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
          <ul className="list-disc ml-6">
            <li>React</li>
            <li>Supabase</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p>Knowledge of property management workflows and lease lifecycle.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
          <ol className="list-decimal ml-6">
            <li>Built unified lease document dashboard.</li>
            <li>Connected data from tenant CRM.</li>
            <li>Added signature and expiration tracking.</li>
            <li>Created summary views for property managers.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
          <p>Saved over 30 hours/month in lease processing time across all regional offices.</p>
        </section>
      </motion.div>
    </main>
  )
}
