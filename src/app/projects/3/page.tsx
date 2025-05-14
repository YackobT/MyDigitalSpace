'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Project3() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-zinc-800 p-8 rounded-2xl shadow-md"
      >
        <h1 className="text-4xl font-bold mb-6">Project 3: Property Reporting Dashboard</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>Built reporting dashboard for real estate stakeholders with real-time lease data and regional metrics.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
          <ul className="list-disc ml-6">
            <li>Power BI</li>
            <li>Snowflake</li>
            <li>Python for ETL</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p>Experience working with SQL queries and dimensional modeling for property data.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
          <ol className="list-decimal ml-6">
            <li>Connected Snowflake to BI tools.</li>
            <li>Created lease and vacancy KPIs.</li>
            <li>Added filters by property type and region.</li>
            <li>Built export-friendly views for executive summaries.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
          <p>Reduced report turnaround time from 3 days to 4 hours.</p>
        </section>
      </motion.div>
    </main>
  )
}
