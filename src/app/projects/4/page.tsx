'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PortfolioAnalyticsTool() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20 bg-dots relative">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Portfolio Analytics Tool</h1>
        <p className="text-lg text-gray-300 mb-6">Visualized large-scale investment performance KPIs using D3.</p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Built custom dashboards for internal stakeholders</li>
          <li>Automated quarterly report generation</li>
          <li>Improved portfolio risk visibility</li>
        </ul>
        <Link href="/" className="text-cyan-400 hover:underline">← Back to Home</Link>
      </motion.section>
    </main>
  )
}
