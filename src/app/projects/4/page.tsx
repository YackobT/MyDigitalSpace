'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PortfolioAnalyticsTool() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20 bg-dots relative">
      <motion.section
        initial={ opacity: 0, y: 30 }
        animate={ opacity: 1, y: 0 }
        transition={ duration: 0.6 }
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#c084fc] mb-6">Portfolio Analytics Tool</h1>
        <p className="text-gray-300 mb-6">
          Designed a tool to analyze risk and performance across portfolios.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
          <li>Modeled ROI performance across 30+ asset classes</li><li>Built with Python + Pandas and visualized via D3</li><li>Used for investor insights and strategy updates</li>
        </ul>
        <Link href="/" className="text-[#c084fc] underline hover:text-purple-300">
          ← Back to home
        </Link>
      </motion.section>
    </main>
  )
}