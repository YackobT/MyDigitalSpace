'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Project3() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#c084fc] mb-6">Agile Reporting Dashboard</h1>
        <p className="text-gray-300 mb-6">
          Built real-time dashboards for Agile sprint tracking. Integrated JIRA APIs to auto-populate metrics and improve team visibility.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
          <li>Used React + Chart.js for interactive graphs</li>
          <li>Reduced status meeting time by 40%</li>
          <li>Improved stakeholder transparency and backlog grooming</li>
        </ul>
        <Link href="/" className="text-[#c084fc] underline hover:text-purple-300">
          ← Back to home
        </Link>
      </motion.section>
    </main>
  )
}
