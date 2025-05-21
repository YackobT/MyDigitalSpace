'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AgileReportingDashboard() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20 bg-dots relative">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Agile Reporting Dashboard</h1>
        <p className="text-lg text-gray-300 mb-6">Enabled sprint tracking and retrospective analytics in real-time.</p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Built velocity charts for team retrospectives</li>
          <li>Integrated JIRA APIs for live updates</li>
          <li>Reduced reporting delays by 50%</li>
        </ul>
        <Link href="/" className="text-cyan-400 hover:underline">← Back to Home</Link>
      </motion.section>
    </main>
  )
}
